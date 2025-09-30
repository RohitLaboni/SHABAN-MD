const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUo0WU1SYVllRWF2QXhjN0MvZFpVU3NKZ0c4UVpjZTVCbkh1T1dpNUQyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlYyQm10MFdEanI4NDhuTEdiVWZRVG9jSDRGdjRCc0ZKL0p4VzE5VzUxMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SkhxaUFYY08rUUJPREwvOFF0N0k4cGpzUytUUE5hRWNFd1IwVDhUMzJrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSWJLQ0lWeE42WlFyWmdMM2NIL21rek9NUzdCTCsvRFhMcS9OM2VoY1JZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllOVTR6Y1NUNmU4YzY1Z2h0Q090WU1GM2hLTXUwVUJrSkltNGtJK256MFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVEdWV4QTJRcG8rR2xLdmlUNnljK0pDSGx3bzFiNUFKVjdYb0p1dDNTMk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOERQRHlxWHNURFFldFpFaDdOc3UrZ3JVdWMzKzNHVWVKNkhjbU55L3VIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL3hYZmRMdlQ1c010OFRqdGxOanVPeDdFYXZQbFo5MGlQMktZQUNWSXlnWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFsUmNrS09HRzU3V1Qrb2l3Q3Z4d1hhV0VpRFRrS2tUSTQrSyt2U2kzd0t4bGRlMU4rOG9UVERzNHhhM2hSand1UUdQVjBmYTdDaXVWS0VnMHBKdEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjYsImFkdlNlY3JldEtleSI6IlJONWRza3FWWVlzY2lhYytVTWFaTFhsYVI5WHpoNWFWQytIM3p1QVZERWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlcxUFZIQkhQIiwibWUiOnsiaWQiOiI5MTk5MDcyNjE5NDQ6MTVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4Ka24KeB4Kan4KeBIOCmpOCni+CmruCmvuCmleCnh+CmhyDgpq3gpr7gprLgp4vgpqzgp4fgprjgp4cuLi4iLCJsaWQiOiIxNTY3NDA3MDQzMjU2OTM6MTVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQYm8zY01GRU5iVDdzWUdHQTBnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJMSGNKZHlXTzI3RndsS3pQTndkdkNwWkV3QVVwNVdRSFp4SndkTXlrRlZ3PSIsImFjY291bnRTaWduYXR1cmUiOiJWWEhjZ1pEVHVVNGh5eWtUbklpYThUS25lQmhZRlBRT2dtb0RyYzFOcGVDS0FsWXAzS3J2SlZkWWQrS2RSekVIakpHeHpqMG50aWZKSWtiMGJRazlEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidnNVMVpFb0gwcWFIUm1JcDlEYUhmbURPaFB3Q2s0NUFnbjJIWUhMbFF4YXVWaUVMc2I2djFmd3VnZ1ErdlBXbktTckg4a0JGYkRBc01pK0VXK2p4Qnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTk5MDcyNjE5NDQ6MTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU3gzQ1hjbGp0dXhjSlNzenpjSGJ3cVdSTUFGS2VWa0IyY1NjSFRNcEJWYyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU5MjI2MzI5LCJsYXN0UHJvcEhhc2giOiIyTUZLUFEiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFHWiJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
AUTO_CHATBOT: process.env.AUTO_CHATBOT || "true", 
// "true" = default ON, "false" = default OFF
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "SHABAN-MD V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Mʀ-Sʜᴀʙᴀɴ",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself  
OWNER_NUMBER: process.env.OWNER_NUMBER || "919907261944",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "1M",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Sʜᴀʙᴀɴ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups  
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923059395959",
//replace with your whatsapp number        
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
