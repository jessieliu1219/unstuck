import { createReasoningEngine, type ScenarioDefinition } from "./engine";

const SCENARIOS: ScenarioDefinition[] = [
  {
    id: "exercise",
    keywords: [
      "exercise",
      "workout",
      "gym",
      "run",
      "running",
      "jog",
      "walk",
      "move",
      "fitness",
      "train",
    ],
    clarification: {
      question: "What's making it hard right now?",
      options: [
        { id: "low_energy", label: "I'm tired" },
        { id: "too_big", label: "It feels like too much effort" },
        { id: "unclear_start", label: "I don't know what to do" },
        { id: "dont_want_to", label: "I just don't want to" },
      ],
    },
    actions: {
      low_energy: {
        action: "Stand up and stretch for 30 seconds.",
        subtext: "That's all. No workout required yet.",
      },
      too_big: {
        action: "Put on your workout clothes.",
        subtext: "You're not committing to a workout yet.",
      },
      unclear_start: {
        action: "Pick one exercise — just one.",
        subtext: "You don't have to do it. Just choose.",
      },
      dont_want_to: {
        action: "Put on your workout clothes.",
        subtext: "You're not committing to a workout yet.",
      },
      emotional_avoidance: {
        action: "Put on your workout clothes.",
        subtext: "You're not committing to a workout yet.",
      },
      social_discomfort: {
        action: "Put on your workout clothes.",
        subtext: "You're not committing to a workout yet.",
      },
      too_much_commitment: {
        action: "Put on your workout clothes.",
        subtext: "You're not committing to a workout yet.",
      },
      transition: {
        action: "Stand up and stretch for 30 seconds.",
        subtext: "That's all. No workout required yet.",
      },
      perfectionism: {
        action: "Pick one exercise — just one.",
        subtext: "You don't have to do it. Just choose.",
      },
    },
    followUpActions: {
      low_energy: {
        action: "Walk to another room.",
        subtext: "No pace, no destination. Just move.",
      },
      too_big: {
        action: "Do one rep of anything.",
        subtext: "One is enough. You can stop after.",
      },
      unclear_start: {
        action: "Search for a 5-minute workout.",
        subtext: "You don't have to start it. Just find one.",
      },
      dont_want_to: {
        action: "Play one song you like while standing.",
        subtext: "You don't have to exercise. Just stand.",
      },
      emotional_avoidance: {
        action: "Do one rep of anything.",
        subtext: "One is enough. You can stop after.",
      },
      social_discomfort: {
        action: "Walk to another room.",
        subtext: "No pace, no destination. Just move.",
      },
      too_much_commitment: {
        action: "Do one rep of anything.",
        subtext: "One is enough. You can stop after.",
      },
      transition: {
        action: "Walk to another room.",
        subtext: "No pace, no destination. Just move.",
      },
      perfectionism: {
        action: "Do one rep of anything.",
        subtext: "One is enough. You can stop after.",
      },
    },
  },
  {
    id: "work",
    keywords: [
      "work",
      "study",
      "project",
      "portfolio",
      "presentation",
      "homework",
      "assignment",
      "paper",
      "report",
      "deadline",
      "task",
      "job",
      "code",
      "write",
      "writing",
    ],
    clarification: {
      question: "What's making it hard to start?",
      options: [
        { id: "too_big", label: "It feels like too much" },
        { id: "unclear_start", label: "I don't know where to begin" },
        { id: "perfectionism", label: "It won't be good enough" },
        { id: "dont_want_to", label: "I just don't feel like it" },
      ],
    },
    actions: {
      too_big: {
        action: "Open the file or document.",
        subtext: "Don't change anything yet.",
      },
      unclear_start: {
        action: "Write one sentence about what you're trying to do.",
        subtext: "It can be messy. No one will see it.",
      },
      perfectionism: {
        action: "Set a timer for 5 minutes.",
        subtext: "You're allowed to stop when it goes off.",
      },
      dont_want_to: {
        action: "Open the file or document.",
        subtext: "Don't change anything yet.",
      },
      low_energy: {
        action: "Open the file or document.",
        subtext: "Don't change anything yet.",
      },
      emotional_avoidance: {
        action: "Open the file or document.",
        subtext: "Don't change anything yet.",
      },
      social_discomfort: {
        action: "Open the file or document.",
        subtext: "Don't change anything yet.",
      },
      too_much_commitment: {
        action: "Set a timer for 5 minutes.",
        subtext: "You're allowed to stop when it goes off.",
      },
      transition: {
        action: "Close everything else on your screen.",
        subtext: "Just leave the one thing open.",
      },
    },
    followUpActions: {
      too_big: {
        action: "Write the smallest possible next step on a sticky note.",
        subtext: "One line. That's it.",
      },
      unclear_start: {
        action: "Name the very first thing you'd need to do.",
        subtext: "Say it out loud or type it. Don't do it yet.",
      },
      perfectionism: {
        action: "Write one bad sentence on purpose.",
        subtext: "It's supposed to be rough. That's the point.",
      },
      dont_want_to: {
        action: "Write one word related to the task.",
        subtext: "Any word. Just to touch the work.",
      },
      low_energy: {
        action: "Write one word related to the task.",
        subtext: "Any word. Just to touch the work.",
      },
      emotional_avoidance: {
        action: "Write one word related to the task.",
        subtext: "Any word. Just to touch the work.",
      },
      social_discomfort: {
        action: "Write one word related to the task.",
        subtext: "Any word. Just to touch the work.",
      },
      too_much_commitment: {
        action: "Write one bad sentence on purpose.",
        subtext: "It's supposed to be rough. That's the point.",
      },
      transition: {
        action: "Put your phone in another room.",
        subtext: "Just for the next few minutes.",
      },
    },
  },
  {
    id: "message",
    keywords: [
      "reply",
      "message",
      "text",
      "email",
      "respond",
      "answer",
      "inbox",
      "dm",
      "chat",
      "conversation",
    ],
    clarification: {
      question: "What's making the reply difficult?",
      options: [
        { id: "unclear_start", label: "I don't know what to say" },
        { id: "social_discomfort", label: "It's been too long" },
        { id: "emotional_avoidance", label: "I don't want to deal with it" },
        { id: "too_big", label: "The conversation feels uncomfortable" },
      ],
    },
    actions: {
      unclear_start: {
        action: "Open the message and read it once.",
        subtext: "You don't have to reply yet.",
      },
      social_discomfort: {
        action: "Type a one-word reply.",
        subtext: "Something like \"Hey\" or \"Thanks.\" Don't send it yet.",
      },
      emotional_avoidance: {
        action: "Open the message and read it once.",
        subtext: "You don't have to reply yet.",
      },
      too_big: {
        action: "Type a one-word reply.",
        subtext: "Something like \"Hey\" or \"Thanks.\" Don't send it yet.",
      },
      low_energy: {
        action: "Open the message and read it once.",
        subtext: "You don't have to reply yet.",
      },
      dont_want_to: {
        action: "Open the message and read it once.",
        subtext: "You don't have to reply yet.",
      },
      too_much_commitment: {
        action: "Type a one-word reply.",
        subtext: "Something like \"Hey\" or \"Thanks.\" Don't send it yet.",
      },
      transition: {
        action: "Open the message and read it once.",
        subtext: "You don't have to reply yet.",
      },
      perfectionism: {
        action: "Type a one-word reply.",
        subtext: "Something like \"Hey\" or \"Thanks.\" Don't send it yet.",
      },
    },
    followUpActions: {
      unclear_start: {
        action: "Write a rough reply in your notes app.",
        subtext: "Not in the message thread. Just draft it somewhere.",
      },
      social_discomfort: {
        action: "Add one more sentence to your draft.",
        subtext: "Something honest and simple. Still don't send.",
      },
      emotional_avoidance: {
        action: "Write a rough reply in your notes app.",
        subtext: "Not in the message thread. Just draft it somewhere.",
      },
      too_big: {
        action: "Add one more sentence to your draft.",
        subtext: "Something honest and simple. Still don't send.",
      },
      low_energy: {
        action: "Write a rough reply in your notes app.",
        subtext: "Not in the message thread. Just draft it somewhere.",
      },
      dont_want_to: {
        action: "Write a rough reply in your notes app.",
        subtext: "Not in the message thread. Just draft it somewhere.",
      },
      too_much_commitment: {
        action: "Add one more sentence to your draft.",
        subtext: "Something honest and simple. Still don't send.",
      },
      transition: {
        action: "Write a rough reply in your notes app.",
        subtext: "Not in the message thread. Just draft it somewhere.",
      },
      perfectionism: {
        action: "Add one more sentence to your draft.",
        subtext: "Something honest and simple. Still don't send.",
      },
    },
  },
  {
    id: "rest",
    keywords: [
      "scroll",
      "scrolling",
      "phone",
      "rest",
      "sleep",
      "social media",
      "instagram",
      "tiktok",
      "twitter",
      "youtube",
      "screen",
      "tired",
      "bed",
      "relax",
    ],
    clarification: {
      question: "What's keeping you from resting?",
      options: [
        { id: "low_energy", label: "I'm tired but can't stop" },
        { id: "transition", label: "I don't want the day to end" },
        { id: "emotional_avoidance", label: "Resting feels like giving up" },
        { id: "dont_want_to", label: "I'm not ready to stop yet" },
      ],
    },
    actions: {
      low_energy: {
        action: "Put your phone face down.",
        subtext: "You don't have to sleep yet.",
      },
      transition: {
        action: "Put your phone face down.",
        subtext: "You don't have to sleep yet.",
      },
      emotional_avoidance: {
        action: "Close one app.",
        subtext: "Just one. The others can stay open.",
      },
      dont_want_to: {
        action: "Put your phone face down.",
        subtext: "You don't have to sleep yet.",
      },
      too_big: {
        action: "Close one app.",
        subtext: "Just one. The others can stay open.",
      },
      unclear_start: {
        action: "Put your phone face down.",
        subtext: "You don't have to sleep yet.",
      },
      social_discomfort: {
        action: "Put your phone face down.",
        subtext: "You don't have to sleep yet.",
      },
      too_much_commitment: {
        action: "Close one app.",
        subtext: "Just one. The others can stay open.",
      },
      perfectionism: {
        action: "Put your phone face down.",
        subtext: "You don't have to sleep yet.",
      },
    },
    followUpActions: {
      low_energy: {
        action: "Sit somewhere comfortable.",
        subtext: "You don't have to lie down. Just sit.",
      },
      transition: {
        action: "Dim the lights a little.",
        subtext: "The day can wind down slowly.",
      },
      emotional_avoidance: {
        action: "Take three slow breaths.",
        subtext: "Rest isn't giving up. It's a pause.",
      },
      dont_want_to: {
        action: "Set your phone across the room.",
        subtext: "Out of reach is enough for now.",
      },
      too_big: {
        action: "Take three slow breaths.",
        subtext: "Rest isn't giving up. It's a pause.",
      },
      unclear_start: {
        action: "Sit somewhere comfortable.",
        subtext: "You don't have to lie down. Just sit.",
      },
      social_discomfort: {
        action: "Sit somewhere comfortable.",
        subtext: "You don't have to lie down. Just sit.",
      },
      too_much_commitment: {
        action: "Take three slow breaths.",
        subtext: "Rest isn't giving up. It's a pause.",
      },
      perfectionism: {
        action: "Dim the lights a little.",
        subtext: "The day can wind down slowly.",
      },
    },
  },
  {
    id: "cleaning",
    keywords: [
      "clean",
      "cleaning",
      "room",
      "desk",
      "mess",
      "messy",
      "tidy",
      "organize",
      "dishes",
      "laundry",
      "clutter",
    ],
    clarification: {
      question: "What's making it feel overwhelming?",
      options: [
        { id: "too_big", label: "There's too much to do" },
        { id: "unclear_start", label: "I don't know where to start" },
        { id: "low_energy", label: "I don't have the energy" },
        { id: "dont_want_to", label: "I just don't want to" },
      ],
    },
    actions: {
      too_big: {
        action: "Pick up one thing and put it where it belongs.",
        subtext: "Just one. Then you can stop.",
      },
      unclear_start: {
        action: "Look around and name one small area to focus on.",
        subtext: "A corner, a surface, a pile. Just name it.",
      },
      low_energy: {
        action: "Pick up one thing and put it where it belongs.",
        subtext: "Just one. Then you can stop.",
      },
      dont_want_to: {
        action: "Pick up one thing and put it where it belongs.",
        subtext: "Just one. Then you can stop.",
      },
      emotional_avoidance: {
        action: "Pick up one thing and put it where it belongs.",
        subtext: "Just one. Then you can stop.",
      },
      social_discomfort: {
        action: "Pick up one thing and put it where it belongs.",
        subtext: "Just one. Then you can stop.",
      },
      too_much_commitment: {
        action: "Look around and name one small area to focus on.",
        subtext: "A corner, a surface, a pile. Just name it.",
      },
      transition: {
        action: "Pick up one thing and put it where it belongs.",
        subtext: "Just one. Then you can stop.",
      },
      perfectionism: {
        action: "Look around and name one small area to focus on.",
        subtext: "A corner, a surface, a pile. Just name it.",
      },
    },
    followUpActions: {
      too_big: {
        action: "Pick up one more thing.",
        subtext: "Same rule. One thing, then you can stop.",
      },
      unclear_start: {
        action: "Clear one small spot in that area.",
        subtext: "A hand-width of space is enough.",
      },
      low_energy: {
        action: "Put away the thing you already picked up.",
        subtext: "If you haven't yet. Then stop.",
      },
      dont_want_to: {
        action: "Pick up one more thing.",
        subtext: "Same rule. One thing, then you can stop.",
      },
      emotional_avoidance: {
        action: "Pick up one more thing.",
        subtext: "Same rule. One thing, then you can stop.",
      },
      social_discomfort: {
        action: "Pick up one more thing.",
        subtext: "Same rule. One thing, then you can stop.",
      },
      too_much_commitment: {
        action: "Clear one small spot in that area.",
        subtext: "A hand-width of space is enough.",
      },
      transition: {
        action: "Pick up one more thing.",
        subtext: "Same rule. One thing, then you can stop.",
      },
      perfectionism: {
        action: "Clear one small spot in that area.",
        subtext: "A hand-width of space is enough.",
      },
    },
  },
];

const GENERIC_SCENARIO: ScenarioDefinition = {
  id: "generic",
  keywords: [],
  clarification: {
    question: "What's making it hard to start?",
    options: [
      { id: "too_big", label: "It feels like too much" },
      { id: "unclear_start", label: "I'm not sure where to begin" },
      { id: "low_energy", label: "I don't have much energy" },
      { id: "dont_want_to", label: "I just don't feel like it" },
    ],
  },
  actions: {
    too_big: {
      action: "Do the smallest possible piece of it.",
      subtext: "So small it almost feels silly. That's the point.",
    },
    unclear_start: {
      action: "Write down the very first step.",
      subtext: "One line. You don't have to do it yet.",
    },
    low_energy: {
      action: "Set a timer for 2 minutes.",
      subtext: "You can stop when it goes off.",
    },
    dont_want_to: {
      action: "Move to where you'd do this task.",
      subtext: "You don't have to start. Just go there.",
    },
    emotional_avoidance: {
      action: "Name what you're avoiding out loud.",
      subtext: "Saying it once can make it smaller.",
    },
    social_discomfort: {
      action: "Write down what you'd need to say or do.",
      subtext: "A rough draft. No one will see it.",
    },
    too_much_commitment: {
      action: "Set a timer for 2 minutes.",
      subtext: "You can stop when it goes off.",
    },
    transition: {
      action: "Move to where you'd do this task.",
      subtext: "You don't have to start. Just go there.",
    },
    perfectionism: {
      action: "Do a deliberately rough version.",
      subtext: "Bad on purpose. You can fix it later.",
    },
  },
  followUpActions: {
    too_big: {
      action: "Do one more tiny piece.",
      subtext: "Same size as before. Small enough to feel easy.",
    },
    unclear_start: {
      action: "Do just the first step you wrote down.",
      subtext: "Only that one. Then you can stop.",
    },
    low_energy: {
      action: "Keep going until the timer ends.",
      subtext: "Or stop now. Either is fine.",
    },
    dont_want_to: {
      action: "Touch the task for 30 seconds.",
      subtext: "Open it, look at it, hold it. Then stop if you want.",
    },
    emotional_avoidance: {
      action: "Touch the task for 30 seconds.",
      subtext: "Open it, look at it, hold it. Then stop if you want.",
    },
    social_discomfort: {
      action: "Do one small part of what you wrote down.",
      subtext: "Just the first bit. Not the whole thing.",
    },
    too_much_commitment: {
      action: "Keep going until the timer ends.",
      subtext: "Or stop now. Either is fine.",
    },
    transition: {
      action: "Touch the task for 30 seconds.",
      subtext: "Open it, look at it, hold it. Then stop if you want.",
    },
    perfectionism: {
      action: "Do one more rough version.",
      subtext: "Still bad on purpose. Progress over polish.",
    },
  },
};

export const reasoning = createReasoningEngine(SCENARIOS, GENERIC_SCENARIO);

export const {
  getScenarioId,
  getClarification,
  getNextAction,
  getFollowUpAction,
} = reasoning;
