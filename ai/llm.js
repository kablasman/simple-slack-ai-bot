require('dotenv').config();
const { OpenAI } = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

module.exports = async function generateResponse (prompt) {
    try {
        const response = await openai.responses.create({
        model: "gpt-5-nano",
        input: prompt
    });

    console.log(response.output_text);
    return response.output_text?.trim() || "I don't have an answer for ya!";
        
    } catch (error) {
        console.error("OpenAI response failed.", error);

    if (error.code === "insufficient_quota" || error.status === 429) {
        const expiredError = new Error("OpenAI credits depleted. Please check your account.")
        throw expiredError;
    }
    
    return "Sorry, I ran into an error while thinking.";

    }
}