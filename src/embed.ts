/* eslint-disable quotes */
import { MessageEmbed } from "discord.js";

export function wrongChannelWarningEmbed(): MessageEmbed {
  return new MessageEmbed({
    title: "Warning 🚨",
    description: "Bot commands are only allowed in the bot-commands channel!",
    color: 16769024,
    fields: [
      {
        name: "Lets keep our discord server clean :)",
        value: "We encourage folks to use channels properly.",
      },
    ],
    timestamp: new Date(),
  });
}

export function walletWarningEmbed(): MessageEmbed {
  return new MessageEmbed({
    title: "Warning 🚨",
    description:
      "You are using the `!bal save-wallet` command incorrectly. You may have included < > when just your ETH address is needed. Please try again.",
    color: 16769024,
    fields: [
      {
        name: "`!bal save-wallet <address>`",
        value:
          "Correct usage of this command requires you to add your ETH wallet address.",
      },
    ],
    image: {
      url: "https://raw.githubusercontent.com/hozzjss/pollen-bot/main/bolencer-bot.png",
    },
    timestamp: new Date(),
  });
}

export function infoEmbed(): MessageEmbed {
  return new MessageEmbed({
    color: 16769024,
    author: {
      name: "SourceCred Sign-in Bot",
      url: "https://github.com/1Hive/pollen-bot",
    },
    description:
      "[SourceCred](https://sourcecred.io) is a contributor rank used to recognize contributions across the web3 ecosystem and currently on the Balancer Discord server. These contributions are rewarded with weekly distributions of BAL.",
    thumbnail: {
      url: "https://raw.githubusercontent.com/hozzjss/pollen-bot/main/bolencer-bot.png",
    },
    fields: [
      {
        name: "Signing up",
        value:
          "To sign up to recieve BAL for your contributions recorded by SourceCred, you need to send your information to the DB using some of the following commands.",
      },
      {
        name: "Save wallet address - required",
        value:
          "Send `!bal save-wallet <wallet-address>` to add your wallet address to the SourceCred-Balancer DB as well as your Discord ID and Discord tag.",
      },
      // {
      //   name: "Save Discourse (Forum) account - optional",
      //   value:
      //     "Send `!bal verify-discourse <discourse-username>` and follow the process to verify and add your Discourse account (if you have one) to the SourceCred-Balancer DB.",
      // },
      // {
      //   name: "Save GitHub account - optional",
      //   value:
      //     "Send `!bal verify-github <github-username>` and follow the process to verify and add your GitHub account (if you have one) to the SourceCred-Balancer DB.",
      // },
      {
        name: "Update Discord account",
        value:
          "Send `!bal update-discord` in case you want to update your Discord tag in the DB",
      },
    ],
    timestamp: new Date(),
  });
}

export function helpEmbed(): MessageEmbed {
  return new MessageEmbed({
    color: 16769024,
    author: {
      name: "SourceCred Sign-in Bot",
      url: "https://github.com/1Hive/pollen-bot",
    },
    description:
      "Hi, I'm the SourceCred Sign-in Bot, I handle some SourceCred related actions, like signing up and activating accounts. All my commands are prefixed by `!bal`. Refer to the list below for a list of my commands!",
    thumbnail: {
      url: "https://raw.githubusercontent.com/hozzjss/pollen-bot/main/bolencer-bot.png",
    },
    fields: [
      {
        name: "!bal help",
        value: "Lists all SourceCred Sign-in Bot commands.",
      },
      {
        name: "!bal info",
        value:
          "Displays information of what SourceCred is in the Balancer Server and how to get started.",
      },
      {
        name: "!bal mycred",
        value:
          "Shows your total cred, cred earned last week and cred earned this week.",
      },
      {
        name: "!bal userinfo",
        value: "Shows your SourceCred user info saved in the database.",
      },
      {
        name: "!bal save-wallet YourWalletAddress",
        value:
          "Saves your wallet address, Discord ID and Discord tag in the database (address will be used for SourceCred BAL payouts).",
      },
      // {
      //   name: "!bal verify-discourse YourDiscourseUsername",
      //   value:
      //     "Begins the process of verifying and saving your Discourse username in the database.",
      // },
      // {
      //   name: "!bal verify-github YourGithubUsername",
      //   value:
      //     "Begins the process of verifying and saving your GitHub username in the database.",
      // },
      {
        name: "!bal update-discord",
        value: "Updates your Discord ID and tag in the database.",
      },
    ],
    timestamp: new Date(),
  });
}

export function adminHelpEmbed(): MessageEmbed {
  return new MessageEmbed({
    color: 16769024,
    author: {
      name: "SourceCred Sign-in Bot",
      url: "https://github.com/1Hive/pollen-bot",
    },
    description: "Refer to the list below for a list of admin commands",
    thumbnail: {
      url: "https://raw.githubusercontent.com/hozzjss/pollen-bot/main/bolencer-bot.png",
    },
    fields: [
      {
        name: "!bal updateroles",
        value: "Updates cred minting roles.",
      },
      {
        name: "!bal getlastmodified [weeks]",
        value:
          "Gets the list of users modified in the DB for the past [weeks].",
      },
      {
        name: "!bal getaddresslist",
        value:
          "Gets the list of user addresses from the DB to be used for the Aragon labels.",
      },
      {
        name: "!bal getbanned",
        value:
          "Gets the list of users that cannot sign up for BAL using SourceCred.",
      },
      {
        name: "!bal ban [user ID or IDs separated by spaces (' ')]",
        value: "Bans the specified users from using sourcecred.",
      },
      {
        name: "!bal uban [user ID or IDs separated by spaces (' ')]",
        value: "Unbans the specified users from using sourcecred.",
      },
    ],
    timestamp: new Date(),
  });
}

export function verifyDiscourseEmbed(
  verificationCode: string,
  discourseUsername: string
): MessageEmbed {
  return new MessageEmbed({
    title: "Verify discourse account",
    description:
      "Process to verify your account to opt-in for SourceCred BAL distributions.",
    thumbnail: {
      url: "https://raw.githubusercontent.com/hozzjss/pollen-bot/main/bolencer-bot.png",
    },
    color: 16769024,
    fields: [
      {
        name: "1. Change your discourse name",
        value: `Go to your [account preferences](https://forum.1hive.org/u/${discourseUsername}/preferences/account) and after that,
        change your 'Name' field temporarily into this: \`${verificationCode}\`.`,
      },
      {
        name: "2. Complete the verification",
        value: `Confirm the previous step using the following command:
        \`!bal check-discourse ${verificationCode} ${discourseUsername}\``,
      },
    ],
    timestamp: new Date(),
  });
}

export function successDiscourseVerificationEmbed(
  discourseUsername: string
): MessageEmbed {
  return new MessageEmbed({
    title: "Congratulations!",
    description: "The verification process was completed successfully",
    thumbnail: {
      url: "https://raw.githubusercontent.com/hozzjss/pollen-bot/main/bolencer-bot.png",
    },
    color: 16769024,
    fields: [
      {
        name: "All set!",
        value: `Thanks for verifying your discourse account for Sourcecred BAL distributions, ${discourseUsername}!`,
      },
    ],
    timestamp: new Date(),
  });
}

export function errorDiscourseVerificationEmbed(
  errorMessage: string
): MessageEmbed {
  return new MessageEmbed({
    title: "Bad news!",
    description: "There was an error in the discourse verification process.",
    thumbnail: {
      url: "https://raw.githubusercontent.com/hozzjss/pollen-bot/main/bolencer-bot.png",
    },
    color: 16769024,
    fields: [
      {
        name: "This is what happened",
        value: `${errorMessage}`,
      },
    ],
    timestamp: new Date(),
  });
}

export function verifyGithubEmbed(
  verificationCode: string,
  githubUsername: string
): MessageEmbed {
  return new MessageEmbed({
    title: "Verify github account",
    description:
      "Process to verify your account to opt-in for sourcecred BAL distributions.",
    thumbnail: {
      url: "https://raw.githubusercontent.com/hozzjss/pollen-bot/main/bolencer-bot.png",
    },
    color: 16769024,
    fields: [
      {
        name: "1. Create a public gist",
        value:
          "Create a [public gist](https://gist.github.com/) called `bal.md`",
      },
      {
        name: `2. Set code \`${verificationCode}\``,
        value: "Place the code in the body of the gist",
      },
      {
        name: "3. Complete the verification",
        value: `Confirm the previous step using the following command:
        \`!bal check-github ${verificationCode} ${githubUsername}\``,
      },
    ],
    timestamp: new Date(),
  });
}

export function successGithubVerificationEmbed(
  githubUsername: string
): MessageEmbed {
  return new MessageEmbed({
    title: "Congratulations!",
    description: "The verification process was completed successfully",
    thumbnail: {
      url: "https://raw.githubusercontent.com/hozzjss/pollen-bot/main/bolencer-bot.png",
    },
    color: 16769024,
    fields: [
      {
        name: "All set!",
        value: `Thanks for verifying your github account for sourcecred BAL distributions, ${githubUsername}!`,
      },
    ],
    timestamp: new Date(),
  });
}

export function errorGithubVerificationEmbed(
  errorMessage: string
): MessageEmbed {
  return new MessageEmbed({
    title: "Bad news!",
    description: "There was an error in the github verification process.",
    thumbnail: {
      url: "https://raw.githubusercontent.com/hozzjss/pollen-bot/main/bolencer-bot.png",
    },
    color: 16769024,
    fields: [
      {
        name: "This is what happened",
        value: `${errorMessage}`,
      },
    ],
    timestamp: new Date(),
  });
}

export function credEmbed(
  totalCred: number,
  lastWeekCred: number,
  thisWeekCred: number
): MessageEmbed {
  return new MessageEmbed({
    color: 16769024,
    title: "Your cred:",
    thumbnail: {
      url: "https://raw.githubusercontent.com/hozzjss/pollen-bot/main/bolencer-bot.png",
    },
    fields: [
      {
        name: "Total",
        value: Math.round(totalCred),
      },
      {
        name: "Last week",
        value: Math.round(lastWeekCred),
      },
      {
        name: "This week",
        value: Math.round(thisWeekCred),
      },
    ],
    timestamp: new Date(),
  });
}
