const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron');

const TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;
const TZ = process.env.TIMEZONE || 'America/New_York';

if (!TOKEN || !CHAT_ID) {
  console.error('Missing BOT_TOKEN or CHAT_ID environment variables.');
  process.exit(1);
}

const bot = new TelegramBot(TOKEN, { polling: false });

function send(message) {
  bot.sendMessage(CHAT_ID, message).catch((err) => {
    console.error('Failed to send message:', err.message);
  });
}

// --- Gym split by day ---
const gymSplit = {
  1: 'Chest + Triceps', // Monday
  2: 'Back + Biceps',   // Tuesday
  3: 'Legs',            // Wednesday
  4: 'Shoulders + Abs', // Thursday
  5: 'Upper Body',      // Friday
  6: 'Cardio (or rest)',// Saturday
  0: 'Rest',            // Sunday
};

// --- Motivational quotes ---
const quotes = [
  'Discipline is choosing between what you want now and what you want most.',
  'Motivation gets you started. Discipline keeps you going.',
  "You won't always be motivated, so you must learn to be disciplined.",
  'Small daily improvements are the key to staggering long-term results.',
  'The pain of discipline weighs ounces; the pain of regret weighs tons.',
  'Do something today that your future self will thank you for.',
  'No one is going to hand you the life you want. You have to build it.',
  'Consistency is what transforms average into excellence.',
  'You don\'t have to be extreme, just consistent.',
  'Focus on the goal, not the obstacles in front of it.',
];

function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function daysLeftInAugust() {
  const now = new Date(new Date().toLocaleString('en-US', { timeZone: TZ }));
  const end = new Date(now.getFullYear(), 7, 31); // August is month index 7
  const diff = Math.ceil((end - now) / (1000 * 60 * 60 * 24));
  return Math.max(diff, 0);
}

// --- Scheduled messages (all times in TZ set above) ---

// 4:45 AM - Wake up
cron.schedule('2 0 * * *', () => {
  send(`⏰ 4:45 AM. Wake up.\n${daysLeftInAugust()} days left in August to hit $10k. Let's go.`);
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
  send(`💬 ${randomQuote()}`);
}, { timezone: TZ });

// Monday 6:30 AM - Special checklist (in addition to normal Monday messages)
cron.schedule('30 6 * * 1', () => {
  send(
    '📋 Monday Checklist:\n' +
    '☐ Gym membership\n' +
    '☐ Groceries\n' +
    '☐ Meal prep containers\n' +
    '☐ Food scale\n' +
    '☐ Prep 5 breakfasts\n' +
    '☐ Prep 5 dinners\n' +
    '☐ Fill water bottle\n' +
    '☐ Lay out work clothes\n' +
    '☐ Review trading plan before bed'
  );
}, { timezone: TZ });

// 4:30 PM - Gym reminder with today's split
cron.schedule('30 16 * * *', () => {
  const day = new Date(new Date().toLocaleString('en-US', { timeZone: TZ })).getDay();
  const split = gymSplit[day];
  send(`🏋️ 4:30 PM. Gym time — today's split: ${split}.`);
}, { timezone: TZ });

// 5:45 PM - Dinner
cron.schedule('45 17 * * *', () => {
  send('🍽️ 5:45 PM. Dinner — from your prep, not a shortcut.');
}, { timezone: TZ });

// 6:30 PM - Trading review
cron.schedule('30 18 * * *', () => {
  send('📈 6:30 PM. Trading review time.');
}, { timezone: TZ });

// 7:30 PM - Read
cron.schedule('30 19 * * *', () => {
  send('📖 7:30 PM. Reading time.');
}, { timezone: TZ });

// 9:00 PM - Sleep
cron.schedule('0 21 * * *', () => {
  send('🌙 9:00 PM. Wind down and get to sleep. Tomorrow depends on tonight.');
}, { timezone: TZ });

console.log(`10k bot running. Timezone: ${TZ}`);

// Keep-alive log so hosting platforms see the process as healthy
setInterval(() => {}, 1000 * 60 * 60);
