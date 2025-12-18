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
        text: "hey!"
    });

    whoIsThis.add(userID);

});