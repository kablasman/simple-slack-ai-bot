const whoIsThis = new Set();

module.exports = (async({event, client}) => {
    if (event.type !== "app_home_opened" || event.tab !== "messages") return;
    
    const userID = event.user;

    if (event.type == "app_home_opened" && event.tab == "messages") {
        console.log("User clicked into tab!", event);
    }
        
    if (whoIsThis.has(userID)) return;
    
    await client.chat.postMessage ({
        channel: userID,
        text: ":wave: Welcome to the the finest AI bot you've ever seen! I can answer all types of questions for you right here in Slack! Ask away..."
    });

    whoIsThis.add(userID);

});