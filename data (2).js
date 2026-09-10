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
  'A blown account is tuition. Only wasted if you skip the lesson.',
  'The comeback is always stronger than the setback.',
  'Losing streaks end. Quitters just never see it.',
  "You've already proven you can start. Now prove you can continue.",
  'Nobody built anything real without a stretch that felt pointless.',
  'The scale is slow. The mirror is slow. Keep going anyway.',
  'Show up on the days you least feel like it. Those count double.',
  'Every rep, every shift, every session — deposits into the same account.',
  'You are 19 building what most people start at 30. Remember that.',
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
  'For a just man falleth seven times, and riseth up again. — Proverbs 24:16',
  'They that wait upon the LORD shall renew their strength. — Isaiah 40:31',
  'Wealth gotten by vanity shall be diminished: but he that gathereth by labour shall increase. — Proverbs 13:11',
  'Watch ye, stand fast in the faith, quit you like men, be strong. — 1 Corinthians 16:13',
  'The thoughts of the diligent tend only to plenteousness. — Proverbs 21:5',
  'Whatsoever ye do, do it heartily, as to the Lord, and not unto men. — Colossians 3:23',
  'A faithful man shall abound with blessings. — Proverbs 28:20',
];

// --- Gym split (fat-loss focus: higher volume, short rest, cardio finishers) ---
const workouts = {
  1: {
    title: 'Chest + Triceps',
    exercises: [
      'Machine or flat dumbbell chest press — 4x12-15',
      'Incline dumbbell press — 4x12-15',
      'Chest fly (machine or cable) — 3x15',
      'Triceps pushdown — 4x12-15',
      'Overhead triceps extension — 3x15',
      'FINISHER: 15 min incline walk (speed 3.0, incline 8-10)',
    ],
  },
  2: {
    title: 'Back + Biceps',
    exercises: [
      'Lat pulldown — 4x12-15',
      'Seated cable row — 4x12-15',
      'Assisted pull-up or dumbbell row — 3x12-15',
      'Face pulls — 3x15',
      'Dumbbell bicep curl — 3x12-15',
      'Hammer curl — 3x15',
      'FINISHER: 15 min incline walk',
    ],
  },
  3: {
    title: 'Legs',
    exercises: [
      'Leg press or goblet squat — 4x12-15',
      'Romanian deadlift (dumbbell) — 3x12',
      'Leg curl — 3x15',
      'Leg extension — 3x15',
      'Walking lunges — 3x12 per leg',
      'Calf raises — 4x15-20',
      'FINISHER: 10 min bike, moderate pace',
    ],
  },
  4: {
    title: 'Shoulders + Abs',
    exercises: [
      'Shoulder press — 4x12-15',
      'Lateral raise — 4x15',
      'Rear delt fly — 3x15',
      'Shrugs — 3x15',
      'Plank — 3x45-60 sec',
      'Cable crunch or hanging knee raise — 3x15',
      'Russian twists — 3x20',
      'FINISHER: 15 min incline walk',
    ],
  },
  5: {
    title: 'Full Body + Conditioning',
    exercises: [
      'Push-ups — 3x max clean reps',
      'Seated row — 3x15',
      'Dumbbell shoulder press — 3x12-15',
      'Goblet squat — 3x15',
      'Bicep curl — 3x15',
      'Bench dips — 3x15',
      'FINISHER: 5 rounds — 30 sec hard bike / 90 sec easy',
    ],
  },
  6: {
    title: 'Cardio + Core',
    exercises: [
      '35-45 min steady cardio (treadmill, bike, or elliptical)',
      'Plank — 3x45-60 sec',
      'Leg raises — 3x15',
      'Bicycle crunches — 3x20',
    ],
  },
  0: {
    title: 'Rest',
    exercises: ['Full rest. Optional 20-30 min walk or stretch.'],
  },
};

// --- Monday weekly setup checklist ---
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
  'Hit the water target',
  'Logged / reviewed trades',
  'Put something toward the car fund',
  'Read',
  'Packed and prepped for tomorrow',
];

// --- Nightly reflection prompts (rotates by day of week) ---
const reflectionPrompts = [
  'What was the one thing today you almost skipped but did anyway?',
  'Where did you cut a corner today? Be honest.',
  'What did today teach you that yesterday did not?',
  'If today repeated 30 times, where would it put you?',
  'What drained you today, and was it worth it?',
  'What does tomorrow need that today did not get?',
  'Did you move closer to the goal, or just stay busy?',
];

// --- Midday micro-challenges (rotates by day of week) ---
const middayChallenges = [
  'Halfway point. Drink a full bottle of water before you do anything else.',
  'Take the stairs every time today. No exceptions.',
  'Next break: 20 push-ups. Wherever you are.',
  'Walk your entire break instead of sitting. Steps count.',
  'No off-plan snacking for the rest of the shift. Hold it.',
  'Next break: 50 bodyweight squats.',
  'Stand and stretch 3 minutes. Then back at it.',
];

// --- Afternoon push (rotates by day of week) ---
const afternoonPushes = [
  'Last stretch of the shift. Finish stronger than you started.',
  'Tired is not a reason to coast. Full effort to the clock.',
  'Gym is coming. Start getting your head right for it now.',
  'Whatever went wrong today ends when the shift does. Reset.',
  'You are closer than you were this morning. Keep pushing.',
  'Nobody is watching right now. That is exactly when it counts.',
  'Finish the shift clean. Then go earn the evening.',
];

// --- Weekly challenges (rotates automatically, one per week) ---
const weeklyChallenges = [
  {
    title: 'No Eating Out',
    detail: 'Every meal this week comes from your prep. Zero drive-thru, zero restaurant food on your own dime.',
  },
  {
    title: 'Add One Rep',
    detail: 'Every exercise this week, add at least one rep beyond last week. Small overload, tracked every session.',
  },
  {
    title: 'No Phone First Hour',
    detail: 'From 6:20 to 7:20 AM, no scrolling. Get up, eat, get out. See how the whole day shifts.',
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
    detail: '6:20 means feet on the floor. Seven for seven this week.',
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
    detail: 'Seven days without complaining out loud about work, tiredness, or a losing trade. Catch it, reset, move.',
  },
  {
    title: 'Full Rest Discipline',
    detail: 'In bed by 10:15 every night, phone across the room. Recovery is where the fat loss actually happens.',
  },
  {
    title: 'Review Before Risk',
    detail: "Before every trade this week, say the setup and your risk out loud. If you can't explain it, you don't take it.",
  },
  {
    title: 'Cardio Every Day',
    detail: 'Minimum 15 minutes of cardio every single day this week, rest day included. Walking counts.',
  },
  {
    title: 'Kitchen Closes at 8',
    detail: 'Nothing to eat after 8 PM for seven days. Water only past that line.',
  },
  {
    title: 'Paper Trade Only',
    detail: 'One full week, zero live risk. Rebuild the process before you rebuild the account.',
  },
  {
    title: 'Bed Made, Room Clean',
    detail: 'Every morning before you leave. Small order builds big order.',
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
  reflectionPrompts,
  middayChallenges,
  afternoonPushes,
  weeklyChallenges,
  currentChallenge,
};
