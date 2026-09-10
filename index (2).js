const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron');
const {
  quotes,
  bibleVerses,
  workouts,
  mondayChecklist,
  dailyChecklist,
  reflectionPrompts,
  middayChallenges,
  afternoonPushes,
  currentChallenge,
} = require('./data');

const TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;
const TZ = process.env.TIMEZONE || 'America/New_York';

// Day 1 of the run. Counter never resets — it just keeps climbing.
// Change this in Render env vars if you want a different start date.
const START_DATE = process.env.START_DATE || '2026-08-01';

if (!TOKEN || !CHAT_ID) {
  console.error('Missing BOT_TOKEN or CHAT_ID environment variables.');
  process.exit(1);
}

const bot = new TelegramBot(TOKEN, { polling: true });

function send(message) {
  bot.sendMessage(CHAT_ID, message).catch((err) => {
    console.error('Failed to send message:', err.message);
  });
}

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function now() {
  return new Date(new Date().toLocaleString('en-US', { timeZone: TZ }));
}

function todayIndex() {
  return now().getDay();
}

// Rolling day count — keeps going past month boundaries, never resets
function dayNumber() {
  const start = new Date(`${START_DATE}T00:00:00`);
  const today = now();
  const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24)) + 1;
  return Math.max(diff, 1);
}

function formatWorkout(dayIndex) {
  const w = workouts[dayIndex];
  return `🏋️ Today's split: ${w.title}\n` + w.exercises.map((e) => `• ${e}`).join('\n');
}

function formatChecklist(items, header) {
  return `${header}\n` + items.map((i) => `☐ ${i}`).join('\n');
}

function formatChallenge() {
  const c = currentChallenge(now());
  return `🔥 THIS WEEK'S CHALLENGE\n\n${c.title}\n${c.detail}`;
}

const rulesText =
  '🎯 Prop Account Rules:\n$1,500 total profit target\nNo single day above 50% of total profit\nProcess over profit. Every trade justified before entry.';

// ============ SCHEDULED MESSAGES ============

// 6:20 AM - Wake up
cron.schedule('20 6 * * *', () => {
  send(`⏰ 6:20 AM. Feet on the floor.\nDay ${dayNumber()} of the run. $10k a month is the target. Let's work.`);
}, { timezone: TZ });

// 6:25 AM - Motivational quote
cron.schedule('25 6 * * *', () => {
  send(`💬 ${randomFrom(quotes)}`);
}, { timezone: TZ });

// 6:30 AM - Breakfast
cron.schedule('30 6 * * *', () => {
  send('🍳 6:30 AM. Breakfast — stick to what you prepped.');
}, { timezone: TZ });

// Monday 6:35 AM - Weekly setup checklist
cron.schedule('35 6 * * 1', () => {
  send(formatChecklist(mondayChecklist, '📋 Monday Setup Checklist:'));
}, { timezone: TZ });

// Monday 6:38 AM - New weekly challenge drops
cron.schedule('38 6 * * 1', () => {
  send(formatChallenge());
}, { timezone: TZ });

// 6:40 AM - Leave the house
cron.schedule('40 6 * * *', () => {
  send('🚪 6:40 AM. Out the door. Focus mode on.');
}, { timezone: TZ });

// 12:00 PM - Bible verse
cron.schedule('0 12 * * *', () => {
  send(`🙏 ${randomFrom(bibleVerses)}`);
}, { timezone: TZ });

// 12:30 PM - Midday micro-challenge
cron.schedule('30 12 * * *', () => {
  send(`⚡ ${middayChallenges[todayIndex()]}`);
}, { timezone: TZ });

// Wednesday 1:00 PM - Midweek weekly-challenge nudge
cron.schedule('0 13 * * 3', () => {
  send(`🔥 Midweek check — still holding it?\n\n${currentChallenge(now()).title}`);
}, { timezone: TZ });

// 3:00 PM - Afternoon push
cron.schedule('0 15 * * *', () => {
  send(`💪 ${afternoonPushes[todayIndex()]}`);
}, { timezone: TZ });

// 5:00 PM - Off work
cron.schedule('0 17 * * *', () => {
  send('🏁 5:00 PM. Shift done. Do not go home and sit down — go straight to the gym.');
}, { timezone: TZ });

// 5:30 PM - Gym with today's exercises
cron.schedule('30 17 * * *', () => {
  send(`🏋️ 5:30 PM. Gym time.\n\n${formatWorkout(todayIndex())}\n\nRest 45-60 sec between sets. Keep the pace up.`);
}, { timezone: TZ });

// 7:15 PM - Dinner
cron.schedule('15 19 * * *', () => {
  send('🍽️ 7:15 PM. Dinner — from your prep, not a shortcut. Protein first.');
}, { timezone: TZ });

// 8:00 PM - Trading review + rules
cron.schedule('0 20 * * *', () => {
  send(`📈 8:00 PM. Trading review.\n${rulesText}`);
}, { timezone: TZ });

// 8:45 PM - Read
cron.schedule('45 20 * * *', () => {
  send('📖 8:45 PM. Reading time.');
}, { timezone: TZ });

// 9:30 PM - Daily checklist
cron.schedule('30 21 * * *', () => {
  send(formatChecklist(dailyChecklist, `✅ Day ${dayNumber()} Checklist:`));
}, { timezone: TZ });

// 9:45 PM - Nightly reflection
cron.schedule('45 21 * * *', () => {
  send(`🧠 Reflection:\n${reflectionPrompts[todayIndex()]}`);
}, { timezone: TZ });

// Sunday 9:50 PM - Week close-out
cron.schedule('50 21 * * 0', () => {
  send(
    `🏁 Week's done. Challenge was: ${currentChallenge(now()).title}\n\n` +
    'Did you hold it? Be honest with yourself.\n\n' +
    'What worked this week?\nWhat cost you?\nWhat changes Monday?'
  );
}, { timezone: TZ });

// 10:15 PM - Sleep
cron.schedule('15 22 * * *', () => {
  send('🌙 10:15 PM. Phone down, lights out. Tomorrow depends on tonight.');
}, { timezone: TZ });

// ============ ON-DEMAND COMMANDS ============

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
  bot.sendMessage(msg.chat.id, formatChecklist(dailyChecklist, `✅ Day ${dayNumber()} Checklist:`));
});

bot.onText(/\/rules/, (msg) => {
  if (!isOwner(msg)) return;
  bot.sendMessage(msg.chat.id, rulesText);
});

bot.onText(/\/goal/, (msg) => {
  if (!isOwner(msg)) return;
  bot.sendMessage(msg.chat.id, `🎯 Day ${dayNumber()} of the run. Target: $10k a month.`);
});

bot.onText(/\/day/, (msg) => {
  if (!isOwner(msg)) return;
  bot.sendMessage(msg.chat.id, `📅 Day ${dayNumber()}.`);
});

bot.onText(/\/challenge/, (msg) => {
  if (!isOwner(msg)) return;
  bot.sendMessage(msg.chat.id, formatChallenge());
});

bot.onText(/\/reflect/, (msg) => {
  if (!isOwner(msg)) return;
  bot.sendMessage(msg.chat.id, `🧠 Reflection:\n${reflectionPrompts[todayIndex()]}`);
});

bot.onText(/\/help/, (msg) => {
  if (!isOwner(msg)) return;
  bot.sendMessage(
    msg.chat.id,
    '🤖 Commands:\n' +
      '/quote — motivational quote\n' +
      '/verse — Bible verse\n' +
      '/workout — today\'s gym plan\n' +
      '/checklist — daily checklist\n' +
      '/challenge — this week\'s challenge\n' +
      '/reflect — tonight\'s reflection prompt\n' +
      '/rules — trading account rules\n' +
      '/goal — day count + target\n' +
      '/day — day number'
  );
});

bot.on('polling_error', (err) => {
  console.error('Polling error:', err.message);
});

console.log(`10k bot running. Timezone: ${TZ}. Day ${dayNumber()}.`);
