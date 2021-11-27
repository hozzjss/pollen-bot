import { config } from "dotenv";

config();

export const commandPrefix = process.env.COMMAND_PREFIX || "!pollen";
export const wikiLink = process.env.WIKI_LINK || "";
export const botCommandsChannelID = process.env.BOT_COMMANDS_CHANNEL_ID || "";
export const botLogoLink = process.env.BOT_LOGO_LINK || "";
