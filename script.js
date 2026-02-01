/* ===== Mood Data ===== */
const moodData = {
  happy: {
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      'https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?w=400&q=80',
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&q=80',
      'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&q=80'
    ],
    quotes: [
      '"Happiness is not something ready-made. It comes from your own actions." — Dalai Lama',
      '"The purpose of our lives is to be happy." — Dalai Lama',
      '"Happiness depends upon ourselves." — Aristotle',
      '"Be happy for this moment. This moment is your life." — Omar Khayyam'
    ],
    messages: [
      "That's wonderful! Ride this wave. 🌊",
      "Your joy is valid. Soak it in. ✨",
      "Happy looks beautiful on you.",
      "This feeling is a gift. Cherish it."
    ],
    actions: [
      "Share a kind text with someone you love",
      "Write down 3 things you're grateful for",
      "Take a moment to smile at yourself",
      "Do a little happy dance!"
    ]
  },
  anxious: {
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80',
      'https://images.unsplash.com/photo-1476673160081-cf065607f449?w=400&q=80',
      'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=400&q=80'
    ],
    quotes: [
      '"You don\'t have to control your thoughts. You just have to stop letting them control you." — Dan Millman',
      '"Anxiety is a thin stream of fear trickling through the mind." — Arthur Somers Roche',
      '"Nothing diminishes anxiety faster than action." — Walter Anderson',
      '"This too shall pass." — Persian Proverb'
    ],
    messages: [
      "Anxiety lies. You are more capable than it says.",
      "This feeling is temporary. You've survived before.",
      "Your nervous system is trying to protect you. It's okay.",
      "You are safe right now, in this moment."
    ],
    actions: [
      "Place your feet flat on the floor and feel the ground",
      "Name 5 things you can see right now",
      "Take 3 slow breaths, exhale longer than you inhale",
      "Hold something cold for 30 seconds"
    ]
  },
  tired: {
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80',
      'https://images.unsplash.com/photo-1495954484750-af469f2f9be5?w=400&q=80',
      'https://images.unsplash.com/photo-1531353826977-0941b4779a1c?w=400&q=80',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80'
    ],
    quotes: [
      '"Almost everything will work again if you unplug it for a few minutes, including you." — Anne Lamott',
      '"Rest when you\'re weary. Refresh and renew yourself." — Ralph Marston',
      '"Taking rest is not laziness, it\'s medicine." — Glenn Schweitzer',
      '"Your calm mind is the ultimate weapon against your challenges." — Bryant McGill'
    ],
    messages: [
      "Rest is not laziness. Rest is recovery.",
      "Your body is asking for care. Listen to it.",
      "Even machines need to recharge. You're allowed to too.",
      "Being tired is your body's way of asking for love."
    ],
    actions: [
      "Close your eyes for 60 seconds",
      "Drink a glass of water, slowly",
      "Stretch your arms above your head",
      "Take 5 deep breaths"
    ]
  },
  overwhelmed: {
    images: [
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80',
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80'
    ],
    quotes: [
      '"You can\'t calm the storm, so stop trying. What you can do is calm yourself." — Timber Hawkeye',
      '"One step at a time is good walking." — Chinese Proverb',
      '"Start where you are. Use what you have. Do what you can." — Arthur Ashe',
      '"The greatest weapon against stress is our ability to choose one thought over another." — William James'
    ],
    messages: [
      "One thing at a time. That's all you need.",
      "You don't have to solve everything today.",
      "It's okay to pause. The world can wait.",
      "You're doing better than you think."
    ],
    actions: [
      "Write down just ONE thing you'll do next",
      "Put your phone face-down for 2 minutes",
      "Take one single deep breath, as slow as possible",
      "Step outside for 30 seconds"
    ]
  },
  focused: {
    images: [
      'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=400&q=80',
      'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&q=80',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80',
      'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400&q=80'
    ],
    quotes: [
      '"The successful warrior is the average man, with laser-like focus." — Bruce Lee',
      '"Concentrate all your thoughts upon the work at hand." — Alexander Graham Bell',
      '"Where focus goes, energy flows." — Tony Robbins',
      '"Focus on being productive instead of busy." — Tim Ferriss'
    ],
    messages: [
      "Channel that energy. You've got this.",
      "Focus is a superpower. Use it wisely.",
      "This clarity is a gift. Make it count.",
      "Your determination is inspiring."
    ],
    actions: [
      "Set a 25-minute timer and dive in",
      "Clear one distraction from your space",
      "Write your single focus goal for the next hour",
      "Put on some focus music and begin"
    ]
  }
};

// Track current index for each mood to rotate content
const moodIndexes = {
  happy: 0, anxious: 0, tired: 0, overwhelmed: 0, focused: 0
};

/* ===== DOM Elements ===== */
const moodBtns = document.querySelectorAll('.mood-btn:not(.sad-btn)');
const sadBtn = document.getElementById('sad-btn');
const responseSection = document.getElementById('response-section');
const responseGifImg = document.getElementById('response-gif-img');
const responseMessage = document.getElementById('response-message');
const actionText = document.getElementById('action-text');
const closeResponse = document.getElementById('close-response');
const studyTimeEl = document.getElementById('study-time');
const studyPhaseEl = document.getElementById('study-phase');
const studyProgress = document.getElementById('study-progress');
const studyStartBtn = document.getElementById('study-start');
const studyPauseBtn = document.getElementById('study-pause');
const studyResetBtn = document.getElementById('study-reset');
const presetBtns = document.querySelectorAll('.preset-btn');
const breathingCircle = document.getElementById('breathing-circle');
const breathingText = document.getElementById('breathing-text');
const breathingCounter = document.getElementById('breathing-counter');
const breathingStartBtn = document.getElementById('breathing-start');
const breathingStopBtn = document.getElementById('breathing-stop');
const emergencyBtn = document.getElementById('emergency-btn');
const emergencyOverlay = document.getElementById('emergency-overlay');
const emergencyClose = document.getElementById('emergency-close');
const emergencyBreathCircle = document.getElementById('emergency-breath-circle');
const emergencyBreathText = document.getElementById('emergency-breath-text');

/* ===== Utility Functions ===== */
function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

/* ===== Mood Selection ===== */
const responseQuote = document.getElementById('response-quote');

moodBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const mood = btn.dataset.mood;
    const data = moodData[mood];
    if (!data) return;
    
    // Increment FIRST, then use - ensures content changes every click
    moodIndexes[mood] = (moodIndexes[mood] + 1) % data.images.length;
    const idx = moodIndexes[mood];
    
    // Set content using current index
    responseGifImg.src = data.images[idx];
    responseQuote.textContent = data.quotes[idx % data.quotes.length];
    responseMessage.textContent = data.messages[idx % data.messages.length];
    actionText.textContent = data.actions[idx % data.actions.length];
    
    responseSection.classList.add('active');
    responseSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});
closeResponse.addEventListener('click', () => {
  responseSection.classList.remove('active');
});

/* ===== Sad Button Escape Logic ===== */
let sadEscapeTimeout = null;
let sadMessageIdx = 0;
const sadMessages = [
  "You're too precious to be sad. 💜",
  "Sadness doesn't define you. You are so much more.",
  "Hey, you matter. Don't forget that.",
  "Even on hard days, you're still amazing.",
  "This feeling will pass. You're stronger than you know.",
  "You deserve kindness — especially from yourself."
];

// Create toast element for sad messages
const sadToast = document.createElement('div');
sadToast.className = 'sad-toast';
document.body.appendChild(sadToast);

function showSadMessage() {
  sadToast.textContent = sadMessages[sadMessageIdx];
  sadMessageIdx = (sadMessageIdx + 1) % sadMessages.length;
  sadToast.classList.add('visible');
  setTimeout(() => {
    sadToast.classList.remove('visible');
  }, 3000);
}

function escapeSad() {
  const rect = sadBtn.getBoundingClientRect();
  const parent = sadBtn.parentElement.getBoundingClientRect();
  const maxX = parent.width - rect.width - 20;
  const maxY = parent.height - rect.height - 20;
  const randomX = Math.random() * maxX - maxX / 2;
  const randomY = Math.random() * maxY - maxY / 2;
  sadBtn.classList.add('escaping');
  sadBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
  showSadMessage();
  clearTimeout(sadEscapeTimeout);
  sadEscapeTimeout = setTimeout(() => {
    sadBtn.style.transform = '';
    sadBtn.classList.remove('escaping');
  }, 2000);
}
sadBtn.addEventListener('mouseenter', escapeSad);
sadBtn.addEventListener('touchstart', (e) => {
  e.preventDefault();
  escapeSad();
}, { passive: false });
sadBtn.addEventListener('click', (e) => {
  e.preventDefault();
  escapeSad();
});

/* ===== Daily Affirmations ===== */
const affirmations = [
  { text: "I am worthy of love and respect.", icon: "💜" },
  { text: "I choose peace over worry today.", icon: "🕊️" },
  { text: "I am doing my best, and that is enough.", icon: "⭐" },
  { text: "I am resilient and can handle challenges.", icon: "💪" },
  { text: "I deserve rest and self-care.", icon: "🌸" },
  { text: "My feelings are valid and temporary.", icon: "🌊" },
  { text: "I am growing every single day.", icon: "🌱" },
  { text: "I choose to focus on what I can control.", icon: "🎯" },
  { text: "I am grateful for this moment.", icon: "✨" },
  { text: "I trust the journey, even when uncertain.", icon: "🛤️" }
];

let currentAffirmation = new Date().getDate() % affirmations.length;
const affirmationCard = document.getElementById('affirmation-card');
const affirmationText = document.getElementById('affirmation-text');
const affirmationIcon = document.getElementById('affirmation-icon');

function updateAffirmation() {
  const aff = affirmations[currentAffirmation];
  affirmationText.textContent = aff.text;
  affirmationIcon.textContent = aff.icon;
}

updateAffirmation();

affirmationCard.addEventListener('click', () => {
  currentAffirmation = (currentAffirmation + 1) % affirmations.length;
  updateAffirmation();
  showToast('✨ New affirmation');
});

/* ===== Quick Self-Care ===== */
const selfcareBtns = document.querySelectorAll('.selfcare-btn');
const selfcareProgress = document.getElementById('selfcare-progress');
let completedActions = [];

function updateSelfcareProgress() {
  if (completedActions.length === 0) {
    selfcareProgress.textContent = '';
  } else {
    selfcareProgress.textContent = `${completedActions.length}/${selfcareBtns.length} completed today!`;
    if (completedActions.length === selfcareBtns.length) {
      selfcareProgress.textContent += ' 🌟 Amazing!';
    }
  }
}

selfcareBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const actionId = btn.dataset.action;
    
    if (btn.classList.contains('completed')) return;
    
    btn.classList.add('completed');
    btn.querySelector('.selfcare-icon').textContent = '✓';
    completedActions.push(actionId);
    updateSelfcareProgress();
    showToast('🎉 Great job taking care of yourself!');
  });
});

// Create global toast element
const toastEl = document.createElement('div');
toastEl.className = 'sad-toast';
document.body.appendChild(toastEl);

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add('visible');
  setTimeout(() => {
    toastEl.classList.remove('visible');
  }, 2500);
}

/* ===== Study Timer ===== */
let studyInterval = null;
let studySeconds = 25 * 60;
let studyTotalSeconds = 25 * 60;
let isStudyRunning = false;
const circumference = 2 * Math.PI * 90;
studyProgress.style.strokeDasharray = circumference;
studyProgress.style.strokeDashoffset = 0;
function updateStudyDisplay() {
  studyTimeEl.textContent = formatTime(studySeconds);
  const progress = studySeconds / studyTotalSeconds;
  studyProgress.style.strokeDashoffset = circumference * (1 - progress);
}
function startStudy() {
  if (isStudyRunning) return;
  isStudyRunning = true;
  studyStartBtn.disabled = true;
  studyPauseBtn.disabled = false;
  presetBtns.forEach(btn => btn.disabled = true);
  studyInterval = setInterval(() => {
    if (studySeconds > 0) {
      studySeconds--;
      updateStudyDisplay();
    } else {
      clearInterval(studyInterval);
      studyPhaseEl.textContent = 'Time for a break ☕';
      isStudyRunning = false;
      studyStartBtn.disabled = false;
      studyPauseBtn.disabled = true;
      presetBtns.forEach(btn => btn.disabled = false);
    }
  }, 1000);
}
function pauseStudy() {
  if (!isStudyRunning) return;
  clearInterval(studyInterval);
  isStudyRunning = false;
  studyStartBtn.disabled = false;
  studyPauseBtn.disabled = true;
}
function resetStudy() {
  clearInterval(studyInterval);
  isStudyRunning = false;
  studySeconds = studyTotalSeconds;
  updateStudyDisplay();
  studyPhaseEl.textContent = 'Focus Time';
  studyStartBtn.disabled = false;
  studyPauseBtn.disabled = true;
  presetBtns.forEach(btn => btn.disabled = false);
}
studyStartBtn.addEventListener('click', startStudy);
studyPauseBtn.addEventListener('click', pauseStudy);
studyResetBtn.addEventListener('click', resetStudy);
presetBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (isStudyRunning) return;
    presetBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const mins = parseInt(btn.dataset.minutes);
    studyTotalSeconds = mins * 60;
    studySeconds = studyTotalSeconds;
    updateStudyDisplay();
  });
});
updateStudyDisplay();

/* ===== Breathing Timer ===== */
let breathingInterval = null;
let isBreathing = false;
const breathingPattern = [
  { phase: 'Inhale', duration: 4 },
  { phase: 'Hold', duration: 7 },
  { phase: 'Exhale', duration: 8 }
];
function startBreathing() {
  if (isBreathing) return;
  isBreathing = true;
  breathingStartBtn.disabled = true;
  breathingStopBtn.disabled = false;
  let phaseIndex = 0;
  let countdown = breathingPattern[0].duration;
  function tick() {
    const currentPhase = breathingPattern[phaseIndex];
    breathingText.textContent = currentPhase.phase;
    breathingCounter.textContent = countdown;
    breathingCircle.className = 'breathing-circle ' + currentPhase.phase.toLowerCase();
    if (countdown > 0) {
      countdown--;
    } else {
      phaseIndex = (phaseIndex + 1) % breathingPattern.length;
      countdown = breathingPattern[phaseIndex].duration;
    }
  }
  tick();
  breathingInterval = setInterval(tick, 1000);
}
function stopBreathing() {
  clearInterval(breathingInterval);
  isBreathing = false;
  breathingStartBtn.disabled = false;
  breathingStopBtn.disabled = true;
  breathingText.textContent = 'Ready';
  breathingCounter.textContent = '';
  breathingCircle.className = 'breathing-circle';
}
breathingStartBtn.addEventListener('click', startBreathing);
breathingStopBtn.addEventListener('click', stopBreathing);

/* ===== Emergency Calm Mode ===== */
let emergencyBreathInterval = null;
function startEmergencyBreathing() {
  let phaseIndex = 0;
  let countdown = breathingPattern[0].duration;
  function tick() {
    const currentPhase = breathingPattern[phaseIndex];
    emergencyBreathText.textContent = `${currentPhase.phase} ${countdown}`;
    if (countdown > 0) {
      countdown--;
    } else {
      phaseIndex = (phaseIndex + 1) % breathingPattern.length;
      countdown = breathingPattern[phaseIndex].duration;
    }
  }
  tick();
  emergencyBreathInterval = setInterval(tick, 1000);
}
function stopEmergencyBreathing() {
  clearInterval(emergencyBreathInterval);
  emergencyBreathText.textContent = 'Breathe';
}
emergencyBtn.addEventListener('click', () => {
  emergencyOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  startEmergencyBreathing();
});
emergencyClose.addEventListener('click', () => {
  emergencyOverlay.classList.remove('active');
  document.body.style.overflow = '';
  stopEmergencyBreathing();
});

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', () => {
  updateStudyDisplay();
});
