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
  "You don't have to be extreme, just consistent.",
  'Focus on the goal, not the obstacles in front of it.',
  "Hard work beats talent when talent doesn't work hard.",
  "Every hour you put in now is an hour your future doesn't have to worry about.",
  "The grind you're avoiding is the comeback you need.",
  "Nobody is coming to save you. That's the good news and the bad news.",
  'Stack the days. The results compound whether you notice or not.',
  'You are the only one who can out-work your excuses.',
  'Cheap thrills fade. Discipline pays out for years.',
  "Two jobs, a gym schedule, and a goal — that's not busy, that's building.",
  'Patience plus pressure turns coal into diamonds. Stay under pressure.',
  'What you repeat, you become.',
];

// --- Bible verses (King James Version — public domain) ---
const bibleVerses = [
  'In all labour there is profit. — Proverbs 14:23',
  'The hand of the diligent maketh rich. — Proverbs 10:4',
  'Whatsoever thy hand findeth to do, do it with thy might. — Ecclesiastes 9:10',
  'I can do all things through Christ which strengtheneth me. — Philippians 4:13',
  'Let us not be weary in well doing: for in due season we shall reap, if we faint not. — Galatians 6:9',
  'The soul of the diligent shall be made fat. — Proverbs 13:4',
  'Commit thy works unto the LORD, and thy thoughts shall be established. — Proverbs 16:3',
  'Trust in the LORD with all thine heart, and lean not unto thine own understanding. — Proverbs 3:5',
  'Be strong and of a good courage; for the LORD thy God is with thee whithersoever thou goest. — Joshua 1:9',
  'Seest thou a man diligent in his business? he shall stand before kings. — Proverbs 22:29',
];

// --- Gym split with actual exercises (fat-loss focus: higher reps, shorter rest) ---
const workouts = {
  1: {
    title: 'Chest + Triceps',
    exercises: [
      'Machine or flat dumbbell chest press — 3x12-15',
      'Incline dumbbell press — 3x12-15',
      'Chest fly (machine or cable) — 3x12-15',
      'Triceps pushdown — 3x12-15',
      'Overhead triceps extension — 3x12-15',
    ],
  },
  2: {
    title: 'Back + Biceps',
    exercises: [
      'Lat pulldown — 3x12-15',
      'Seated cable row — 3x12-15',
      'Assisted pull-up or dumbbell row — 3x12-15',
      'Dumbbell bicep curl — 3x12-15',
      'Hammer curl — 3x12-15',
    ],
  },
  3: {
    title: 'Legs',
    exercises: [
      'Leg press or goblet squat — 3x12-15',
      'Leg curl — 3x12-15',
      'Leg extension — 3x12-15',
      'Walking lunges — 3x10 per leg',
      'Calf raises — 3x15-20',
    ],
  },
  4: {
    title: 'Shoulders + Abs',
    exercises: [
      'Shoulder press — 3x12-15',
      'Lateral raise — 3x12-15',
      'Rear delt fly — 3x12-15',
      'Plank — 3x30-45 sec',
      'Cable crunch or hanging knee raise — 3x12-15',
    ],
  },
  5: {
    title: 'Upper Body',
    exercises: [
      'Push-ups — 3x max clean reps',
      'Seated row — 3x12-15',
      'Dumbbell shoulder press — 3x12-15',
      'Bicep curl — 3x12-15',
      'Bench dips — 3x12-15',
    ],
  },
  6: {
    title: 'Cardio',
    exercises: ['30-40 min moderate-pace cardio (treadmill, bike, or elliptical)'],
  },
  0: {
    title: 'Rest',
    exercises: ['Full rest. Optional light walk or stretch.'],
  },
};

// --- Monday-only setup checklist (one-time weekly tasks) ---
const mondayChecklist = [
  'Weigh in (same time, same conditions)',
  'Groceries',
  'Prep 5 breakfasts',
  'Prep 5 dinners',
  'Fill water bottle',
  'Lay out work clothes',
  'Review trading plan before bed',
];

// --- Every-day discipline checklist ---
const dailyChecklist = [
  'Trained today (or respected rest day)',
  'Ate from meal prep — no fast food run',
  'Logged / reviewed trades',
  'Put something toward the car fund',
  'Read',
  'Packed and prepped for tomorrow',
];

// --- Weekly challenges (rotates automatically, one per week) ---
const weeklyChallenges = [
  {
    title: 'No Eating Out',
    detail: 'Every meal this week comes from your prep. Zero drive-thru, zero restaurant food on your own dime. Saves money and holds the deficit.',
  },
  {
    title: 'Add One Rep',
    detail: 'Every single exercise this week, add at least one rep beyond what you did last week. Small overload, tracked every session.',
  },
  {
    title: 'No Phone First Hour',
    detail: 'From 4:45 to 5:45 AM, no scrolling. Get up, eat, get out. See how the whole day shifts.',
  },
  {
    title: 'Journal Every Trade',
    detail: 'Entry, exit, reason, emotion. Every single one, no exceptions. Even the ones you want to forget.',
  },
  {
    title: '10k Steps Daily',
    detail: 'Every day this week, no misses. Park farther out, walk on breaks, whatever it takes.',
  },
  {
    title: 'Zero Snooze',
    detail: '4:45 means feet on the floor. Seven for seven this week.',
  },
  {
    title: 'Save Every Tip',
    detail: 'Every dollar of restaurant tips this week goes straight to the car fund. Untouched.',
  },
  {
    title: 'Water Only',
    detail: 'No soda, no energy drinks, no juice for seven days. Water and black coffee only.',
  },
  {
    title: 'One Extra Chapter',
    detail: 'Double your reading this week. Trading, business, or scripture — your call.',
  },
  {
    title: 'No Complaining',
    detail: "Seven days without complaining out loud about work, tiredness, or a losing trade. Catch yourself, reset, keep moving.",
  },
  {
    title: 'Full Rest Discipline',
    detail: 'In bed by 9:00 every night, phone across the room. Recovery is where the fat loss actually happens.',
  },
  {
    title: 'Review Before Risk',
    detail: 'Before every trade this week, say the setup and your risk out loud. If you can\'t explain it, you don\'t take it.',
  },
];

// Returns the same challenge for the whole week, rotating each Monday
function currentChallenge(date) {
  const start = new Date(date.getFullYear(), 0, 1);
  const weekNumber = Math.floor((date - start) / (1000 * 60 * 60 * 24 * 7));
  return weeklyChallenges[weekNumber % weeklyChallenges.length];
}

module.exports = {
  quotes,
  bibleVerses,
  workouts,
  mondayChecklist,
  dailyChecklist,
  weeklyChallenges,
  currentChallenge,
};
