const generateResponse = require("../ai/llm");
const { WebClient } = require('@slack/web-api');

const token = process.env.SLACK_BOT_TOKEN;
const web = new WebClient(token);

module.exports = (async({message,say}) => {
    console.log("Message received!", message);

    if (message.subtype === "bot_message") return;
    if (message.channel_type !== "im") return;
    if (!message.text) return;

    try {
        const userQuestion = message.text;
        
        // adding reaction
        await web.reactions.add({
            channel: message.channel,
            name: "eyes",
            timestamp: message.ts
        });

        const aiResponse = await generateResponse(userQuestion);
        const text = (aiResponse && typeof aiResponse === "string" && aiResponse.trim()) 
            ? aiResponse.trim() 
            : "I don't have an answer for you!";

        await web.reactions.remove ({
            channel: message.channel,
            name: "eyes",
            timestamp: message.ts
        })

        await say(text);

      /*if (!text) {
            console.error("Invalid AI response:", aiResponse);
            await say("I got nothin.");
            return;
        }

        await say(text);*/
    
    } catch (error) {
        if (error.message.includes("credits depleted")) {
            console.error("OpenAI quota error:", error);
            await say("I'm sorry but I can't respond right now — my OpenAI quota is depleted. :confounded: Please check the app settings or try again later.");
            
            return;
        }

        console.error("Error in message handler:", error);
        await say("Oops! Something went wrong while thinking 🤖");
    }
   
    /*if(message.channel_type == "im") {
        const userQuestion = message.text;
        const aiResponse = await generateResponse(userQuestion);
        
        await say(aiResponse);
    }*/
});