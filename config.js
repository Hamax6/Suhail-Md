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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349129428897";




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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349129428897,234xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_41_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDgzLFxuICAgICAgICA0NyxcbiAgICAgICAgODksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0NixcbiAgICAgICAgMjAxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDMxLFxuICAgICAgICAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTksXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODIsXG4gICAgICAgIDU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA5MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTksXG4gICAgICAgIDQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDk2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzksXG4gICAgICAgIDcyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDksXG4gICAgICAgIDYwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDksXG4gICAgICAgIDQwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDE0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTczLFxuICAgICAgICA2MixcbiAgICAgICAgMjU0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg5LFxuICAgICAgICA0LFxuICAgICAgICA4OSxcbiAgICAgICAgMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5LFxuICAgICAgICAzOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjksXG4gICAgICAgIDM0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9PVFlYKzhLMnZLckIzWnVoL1RtTzNKRklCelp6Y2dPb1hHSUxqRFIvbGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFuX1dESGQzVFNldjNZbTVJM2dYWXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTFmZTljNzYtZTEzYy00ZmNhLWJmYTEtNjA1ZWVhM2ExZGIzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU2LFxuICAgICAgMjM2LFxuICAgICAgNDEsXG4gICAgICAxOTgsXG4gICAgICAyMzQsXG4gICAgICAyNDEsXG4gICAgICAyMTUsXG4gICAgICA3MCxcbiAgICAgIDE1MixcbiAgICAgIDE3NCxcbiAgICAgIDE5NCxcbiAgICAgIDE2OCxcbiAgICAgIDU0LFxuICAgICAgMjUyLFxuICAgICAgNDgsXG4gICAgICA2NyxcbiAgICAgIDExMCxcbiAgICAgIDE4MixcbiAgICAgIDE5MyxcbiAgICAgIDc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTMsXG4gICAgICA0NCxcbiAgICAgIDE0MixcbiAgICAgIDQ2LFxuICAgICAgMTE4LFxuICAgICAgMjM0LFxuICAgICAgNzYsXG4gICAgICAxMTAsXG4gICAgICAxMzQsXG4gICAgICAyNTUsXG4gICAgICA0MCxcbiAgICAgIDEwLFxuICAgICAgMTMxLFxuICAgICAgMjQyLFxuICAgICAgMTk0LFxuICAgICAgMjEwLFxuICAgICAgMjQ1LFxuICAgICAgMTU4LFxuICAgICAgNzgsXG4gICAgICA1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lqVStPTUhFSi9GcWJRR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSzd2d2MwSzBvVlVMM213cVlJS2RSUHdzL0dyT05QWXJ1RVU3UzhTa3VqYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkUjdIYXpuWk1QWWJHZzRWWVpjSkplZXIyY09Ydi9GcUhUVER3c25HcGZaUkZPYU1nNFVsdVA2bHZxTTBLbHA0amFIK0Q2emNaSmZtUGR1bFdnTEhDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhMVRWRW5hcFE1RndZWVh6blpuYVF3SFMrRVBWc0pRMUNSckFQdDc5MWN2cTBFdUdFVFN2Q1hSZUxlQkF6Z2VFWWowTHhDemJmYWs5d1dBdGlUOEtDUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjk0Mjg4OTc6NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc3MDM5MDQ2NDk2NDM3OjUwQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEyOTQyODg5Nzo1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzNDUyNjZcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "king-Hamax",
  ownername:process.env.OWNER_NAME|| "🔥👑Hamax💎",


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
