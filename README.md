# 10k Bot

Telegram accountability bot — sends scheduled messages to keep you on track for your
August $10k goal: wake-up, meal prep, gym (matched to your split), Monday checklist,
and motivational quotes.

## 1. Create your Telegram bot

1. Open Telegram, search for **@BotFather**.
2. Send `/newbot` and follow the prompts (choose a name and a username ending in `bot`).
3. BotFather will give you a **token** — looks like `123456789:ABCdefGhIJKlmNoPQRstuVWXyz`. Save it.

## 2. Get your Chat ID

1. Search for **@userinfobot** on Telegram and start a chat with it.
2. It will reply with your numeric **Chat ID**. Save it.

## 3. Set environment variables

When deploying, set these:

| Variable    | Value                                |
|-------------|---------------------------------------|
| `BOT_TOKEN` | Token from BotFather                  |
| `CHAT_ID`   | Your Chat ID from @userinfobot        |
| `TIMEZONE`  | Optional, defaults to `America/New_York` |

## 4. Deploy

Push this repo to GitHub, then in your deployment platform:
- Select **Public Git Repository** (or connect GitHub if you set that up) and point to this repo.
- Add the environment variables above in the platform's settings.
- Deploy. Look for the log line `10k bot running.` to confirm it started.

## 5. Customize

- Edit the `quotes` array in `index.js` to add your own motivational lines.
- Edit the cron times (format: `minute hour day month weekday`) if your routine shifts.
- Edit the Monday checklist text directly in the Monday cron block.
