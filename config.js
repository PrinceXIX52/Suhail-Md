const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_15_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDkxLFxuICAgICAgICA4NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMixcbiAgICAgICAgMTgwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDksXG4gICAgICAgIDUxLFxuICAgICAgICAyMjksXG4gICAgICAgIDc3LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzksXG4gICAgICAgIDkwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDkyLFxuICAgICAgICA1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNyxcbiAgICAgICAgODksXG4gICAgICAgIDY3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODMsXG4gICAgICAgIDc0LFxuICAgICAgICA5NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTksXG4gICAgICAgIDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY0LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY2LFxuICAgICAgICA4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTExLFxuICAgICAgICAxMDksXG4gICAgICAgIDExOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjU1LFxuICAgICAgICA4MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2MixcbiAgICAgICAgMTgsXG4gICAgICAgIDIyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAxODEsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk3LFxuICAgICAgICAzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjgsXG4gICAgICAgIDg3LFxuICAgICAgICA2NixcbiAgICAgICAgMTMzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE5LFxuICAgICAgICA3OCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxODYsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkhoVytlU09iOGllaDgzNHF5VDR2Ukc3UnhMVVdRNHNpbTI1c0tpQUd1Wm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInpjbXE1QlZYU05pNVROUHF2Q2RzREFcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2ExYTA1YjMtZDVjMS00YjEwLTg2MTktZWRiMWJkMjE2NmI3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MixcbiAgICAgIDEwMyxcbiAgICAgIDU4LFxuICAgICAgMTU2LFxuICAgICAgMTg2LFxuICAgICAgMCxcbiAgICAgIDg1LFxuICAgICAgMTQxLFxuICAgICAgMTYwLFxuICAgICAgMjAzLFxuICAgICAgMTIsXG4gICAgICAxNzMsXG4gICAgICA5NixcbiAgICAgIDEyMyxcbiAgICAgIDE2OSxcbiAgICAgIDExNyxcbiAgICAgIDEzMyxcbiAgICAgIDUxLFxuICAgICAgMTAwLFxuICAgICAgOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY3LFxuICAgICAgNDIsXG4gICAgICAyNDQsXG4gICAgICA0MixcbiAgICAgIDI0MixcbiAgICAgIDI0MixcbiAgICAgIDE1MixcbiAgICAgIDU2LFxuICAgICAgNTUsXG4gICAgICA3MixcbiAgICAgIDQxLFxuICAgICAgMjQ0LFxuICAgICAgOSxcbiAgICAgIDExOCxcbiAgICAgIDE4NyxcbiAgICAgIDE2NyxcbiAgICAgIDI4LFxuICAgICAgMTY1LFxuICAgICAgMTU2LFxuICAgICAgNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU0xOQVBGSktcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNTQ0OTQ4MTM6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM4NzgzNzgxNjEzNzY0OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1hSZ1B3QkVJS043N1FHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjNUtMRnJmbFNRVDVITFBSNFhoSVp6M1B2MXd4ZFB1MFIwenViWnFhZDBrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhwYnp0Q3djaXBnS0NyM2RCVERITks2Y0NKZ1g5OGYwOGViMzlXNkhQR3VSSmhLc0VJa1pZSUxNdUhNQnNvMkd5TWJMUytObG9oR3k5dFU1OXR3V0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInlSQ1BEVE5wZUNOUGtxdUZoblRlQmNoNldCWVVMbUZ6alBzeTBKa2ZqOHNiSWE1TnlMMlNlNEhUb2pPTmRnMkRyaWZudksyWGZTY0phV0lMUXhTVUFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNTQ0OTQ4MTM6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQ4NDkzNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUkwN1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSTA3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiQTVZZ3N4cHBVYlQxWkFTVFA4T0JYNkY5TjNIaUNnbXdiNW5hY2ovd1A1TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1Mjg0OTI3NzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0NDE5MTUzMDRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
