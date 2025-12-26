const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Lakshitha-1629/123/blob/main/images/NoMercy-MD%20alive.jpg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*👋 HI! 𝙉Ø 𝙈ΞЯᑕY-MD is now ONLINE ⚡👾*",
BOT_OWNER: '94785593021',  // Replace with the owner's phone number



};
