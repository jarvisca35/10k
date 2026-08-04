const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron');
const { quotes, bibleVerses, workouts, mondayChecklist, dailyChecklist } = require('./data');

const TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;
const TZ = process.env.TIMEZONE || 'America/New_York';

if (!TOKEN || !CHAT_ID) {
  console.error('Missing BOT_TOKEN or CHAT_ID environment variables.');
  process.exit(1);
}

// Polling is on so the bot can respond to commands, not just push scheduled messages
const bot = new TelegramBot(TOKEN, { polling: true });

function send(message) {
  bot.sendMessage(CHAT_ID, message).catch((err) => {
    console.error('Failed to send message:', err.message);
  });
}

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function todayIndex() {
  return new Date(new Date().toLocaleString('en-US', { timeZone: TZ })).getDay();
}

function daysLeftInAugust() {
  const now = new Date(new Date().toLocaleString('en-US', { timeZone: TZ }));
  const end = new Date(now.getFullYear(), 7, 31); // August is month index 7
  const diff = Math.ceil((end - now) / (1000 * 60 * 60 * 24));
  return Math.max(diff, 0);
}

function formatWorkout(dayIndex) {
  const w = workouts[dayIndex];
  return `🏋️ Today's split: ${w.title}\n` + w.exercises.map((e) => `• ${e}`).join('\n');
}

function formatChecklist(items, header) {
  return `${header}\n` + items.map((i) => `☐ ${i}`).join('\n');
}

const rulesText =
  '🎯 Prop Account Rules:\n$1,500 total profit target\nNo single day above 50% of total profit\nStay consistent, stay disciplined.';

// ============ SCHEDULED MESSAGES ============

// 4:45 AM - Wake up
cron.schedule('45 4 * * *', () => {
  send(`⏰ 4:45 AM. Wake up.\n${daysLeftInAugust()} days left in August to hit $10k. 2 jobs, trading, gym — let's get it.`);
}, { timezone: TZ });

// 5:00 AM - Breakfast
cron.schedule('0 5 * * *', () => {
  send('🍳 5:00 AM. Breakfast — stick to what you prepped.');
}, { timezone: TZ });

// 5:20 AM - Leave for work
cron.schedule('20 5 * * *', () => {
  send('🚪 5:20 AM. Time to head out. Focus mode on.');
}, { timezone: TZ });

// 6:00 AM - Motivational quote
cron.schedule('0 6 * * *', () => {
  send(`💬 ${randomFrom(quotes)}`);
}, { timezone: TZ });

// 12:00 PM - Bible verse (midday lift during work)
cron.schedule('0 12 * * *', () => {
  send(`🙏 ${randomFrom(bibleVerses)}`);
}, { timezone: TZ });

// Monday 6:30 AM - One-time weekly setup checklist
cron.schedule('30 6 * * 1', () => {
  send(formatChecklist(mondayChecklist, '📋 Monday Setup Checklist:'));
}, { timezone: TZ });

// 4:30 PM - Gym reminder with today's actual exercises
cron.schedule('30 16 * * *', () => {
  send(`🏋️ 4:30 PM. Gym time.\n\n${formatWorkout(todayIndex())}`);
}, { timezone: TZ });

// 5:45 PM - Dinner
cron.schedule('45 17 * * *', () => {
  send('🍽️ 5:45 PM. Dinner — from your prep, not a shortcut.');
}, { timezone: TZ });

// 6:30 PM - Trading review + account rules reminder
cron.schedule('30 18 * * *', () => {
  send(`📈 6:30 PM. Trading review time.\n${rulesText}`);
}, { timezone: TZ });

// 7:30 PM - Read
cron.schedule('30 19 * * *', () => {
  send('📖 7:30 PM. Reading time.');
}, { timezone: TZ });

// 8:00 PM - Daily discipline checklist
cron.schedule('0 20 * * *', () => {
  send(formatChecklist(dailyChecklist, '✅ Daily Checklist:'));
}, { timezone: TZ });

// 9:00 PM - Sleep
cron.schedule('0 21 * * *', () => {
  send('🌙 9:00 PM. Wind down and get to sleep. Tomorrow depends on tonight.');
}, { timezone: TZ });

// ============ ON-DEMAND COMMANDS ============
// Only responds to your own chat ID, so a leaked bot token can't be used
// by a stranger to trigger commands.

function isOwner(msg) {
  return String(msg.chat.id) === String(CHAT_ID);
}

bot.onText(/\/quote/, (msg) => {
  if (!isOwner(msg)) return;
  bot.sendMessage(msg.chat.id, `💬 ${randomFrom(quotes)}`);
});

bot.onText(/\/verse/, (msg) => {
  if (!isOwner(msg)) return;
  bot.sendMessage(msg.chat.id, `🙏 ${randomFrom(bibleVerses)}`);
});

bot.onText(/\/workout/, (msg) => {
  if (!isOwner(msg)) return;
  bot.sendMessage(msg.chat.id, formatWorkout(todayIndex()));
});

bot.onText(/\/checklist/, (msg) => {
  if (!isOwner(msg)) return;
  bot.sendMessage(msg.chat.id, formatChecklist(dailyChecklist, '✅ Daily Checklist:'));
});

bot.onText(/\/rules/, (msg) => {
  if (!isOwner(msg)) return;
  bot.sendMessage(msg.chat.id, rulesText);
});

bot.onText(/\/goal/, (msg) => {
  if (!isOwner(msg)) return;
  bot.sendMessage(msg.chat.id, `🎯 ${daysLeftInAugust()} days left in August to hit $10k.`);
});

bot.onText(/\/help/, (msg) => {
  if (!isOwner(msg)) return;
  bot.sendMessage(
    msg.chat.id,
    '🤖 Commands:\n/quote — random motivational quote\n/verse — random Bible verse\n/workout — today\'s gym plan\n/checklist — daily checklist\n/rules — trading account rules\n/goal — days left in August'
  );
});

bot.on('polling_error', (err) => {
  console.error('Polling error:', err.message);
});

console.log(`10k bot running. Timezone: ${TZ}`);
