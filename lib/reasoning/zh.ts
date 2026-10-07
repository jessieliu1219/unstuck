import { createReasoningEngine, type ScenarioDefinition } from "./engine";

const SCENARIOS: ScenarioDefinition[] = [
  {
    id: "exercise",
    keywords: [
      "运动",
      "锻炼",
      "健身",
      "跑步",
      "跑",
      "健身房",
      "训练",
      "动起来",
      "exercise",
      "workout",
      "gym",
      "run",
    ],
    clarification: {
      question: "现在是什么让你觉得难？",
      options: [
        { id: "low_energy", label: "我很累" },
        { id: "too_big", label: "感觉要花太多力气" },
        { id: "unclear_start", label: "不知道做什么" },
        { id: "dont_want_to", label: "就是不想动" },
      ],
    },
    actions: {
      low_energy: {
        action: "先站起来。",
        subtext: "不用决定要不要运动，先让身体换一个状态。",
      },
      too_big: {
        action: "先换上运动的衣服或鞋。",
        subtext: "做到这里就算完成第一步。",
      },
      unclear_start: {
        action: "选一个你最熟悉的动作。",
        subtext: "只做一次也可以。",
      },
      dont_want_to: {
        action: "先动十秒。",
        subtext: "伸展、走几步都可以。",
      },
      emotional_avoidance: {
        action: "先站起来。",
        subtext: "不用决定要不要运动，先让身体换一个状态。",
      },
      social_discomfort: {
        action: "先换上运动的衣服或鞋。",
        subtext: "做到这里就算完成第一步。",
      },
      too_much_commitment: {
        action: "先换上运动的衣服或鞋。",
        subtext: "做到这里就算完成第一步。",
      },
      transition: {
        action: "先站起来。",
        subtext: "不用决定要不要运动，先让身体换一个状态。",
      },
      perfectionism: {
        action: "选一个你最熟悉的动作。",
        subtext: "只做一次也可以。",
      },
    },
    followUpActions: {
      low_energy: {
        action: "伸展或走几步，十秒就好。",
        subtext: "不用有强度。动一下就算。",
      },
      too_big: {
        action: "现在只动一分钟。",
        subtext: "一分钟到了就可以停。",
      },
      unclear_start: {
        action: "做你选的那个动作，只做一次。",
        subtext: "一次就够了。",
      },
      dont_want_to: {
        action: "如果愿意，再做十秒。",
        subtext: "不想继续就停在这里。",
      },
      emotional_avoidance: {
        action: "伸展或走几步，十秒就好。",
        subtext: "不用有强度。动一下就算。",
      },
      social_discomfort: {
        action: "现在只动一分钟。",
        subtext: "一分钟到了就可以停。",
      },
      too_much_commitment: {
        action: "现在只动一分钟。",
        subtext: "一分钟到了就可以停。",
      },
      transition: {
        action: "伸展或走几步，十秒就好。",
        subtext: "不用有强度。动一下就算。",
      },
      perfectionism: {
        action: "做你选的那个动作，只做一次。",
        subtext: "一次就够了。",
      },
    },
  },
  {
    id: "work",
    keywords: [
      "工作",
      "学习",
      "项目",
      "作品集",
      "报告",
      "作业",
      "写",
      "代码",
      "论文",
      "任务",
      "presentation",
      "work",
      "study",
      "project",
      "portfolio",
    ],
    clarification: {
      question: "是什么让你难以下手？",
      options: [
        { id: "too_big", label: "感觉任务太大了" },
        { id: "unclear_start", label: "不知道从哪里开始" },
        { id: "perfectionism", label: "担心做得不够好" },
        { id: "dont_want_to", label: "就是不想做" },
      ],
    },
    actions: {
      too_big: {
        action: "先打开你要做这件事的文件。",
        subtext: "先不用做完整件事，只找到一个最小的部分。",
      },
      unclear_start: {
        action: "先把要用的文件或页面打开。",
        subtext: "不用决定完整计划。看看眼前最容易动的一小块。",
      },
      perfectionism: {
        action: "先做一个不用给任何人看的版本。",
        subtext: "只写一句、一个标题，或者放下第一个元素。",
      },
      dont_want_to: {
        action: "只做两分钟。",
        subtext: "两分钟后你可以停。现在只需要开始计时。",
      },
      low_energy: {
        action: "先把要用的文件或页面打开。",
        subtext: "打开就好。不用做别的。",
      },
      emotional_avoidance: {
        action: "先打开你要做这件事的文件。",
        subtext: "只打开。不用改任何东西。",
      },
      social_discomfort: {
        action: "先做一个不用给任何人看的版本。",
        subtext: "草稿就好。没人会看到。",
      },
      too_much_commitment: {
        action: "只做两分钟。",
        subtext: "两分钟后你可以停。现在只需要开始计时。",
      },
      transition: {
        action: "关掉屏幕上其他所有东西。",
        subtext: "只留这一件事需要的窗口开着。",
      },
    },
    followUpActions: {
      too_big: {
        action: "现在只处理最小的一小块。",
        subtext: "一行、一段、一个函数——选最小的那个。",
      },
      unclear_start: {
        action: "在打开的内容里，只做最小的一步。",
        subtext: "一步就好。然后可以停。",
      },
      perfectionism: {
        action: "在那个版本里再加一行或一个元素。",
        subtext: "还是不用给任何人看。",
      },
      dont_want_to: {
        action: "计时器响之前，碰一下任务就够。",
        subtext: "改一个字、动一行——任何接触都算。",
      },
      low_energy: {
        action: "在打开的内容里写一个字或一行。",
        subtext: "写什么都行。碰一下就好。",
      },
      emotional_avoidance: {
        action: "现在只处理最小的一小块。",
        subtext: "一行、一段——选最小的那个。",
      },
      social_discomfort: {
        action: "在那个版本里再加一行。",
        subtext: "还是不用给任何人看。",
      },
      too_much_commitment: {
        action: "计时器响之前，碰一下任务就够。",
        subtext: "改一个字、动一行——任何接触都算。",
      },
      transition: {
        action: "在留着的窗口里，只做最小的一步。",
        subtext: "一步就好。然后可以停。",
      },
    },
  },
  {
    id: "message",
    keywords: [
      "回复",
      "消息",
      "短信",
      "邮件",
      "信息",
      "微信",
      "回答",
      "reply",
      "message",
      "email",
      "text",
    ],
    clarification: {
      question: "是什么让回复变得困难？",
      options: [
        { id: "unclear_start", label: "不知道说什么" },
        { id: "social_discomfort", label: "拖太久了" },
        { id: "emotional_avoidance", label: "不想面对" },
        { id: "too_big", label: "对话让人不舒服" },
      ],
    },
    actions: {
      unclear_start: {
        action: "先打开那条消息。",
        subtext: "只写第一句，不需要发送。",
      },
      social_discomfort: {
        action: "先写一句简单的开头。",
        subtext: "比如：「抱歉现在才回你。」先到这里。",
      },
      emotional_avoidance: {
        action: "只读一遍那条消息。",
        subtext: "现在不用回复。",
      },
      too_big: {
        action: "先写下你真正想表达的一句话。",
        subtext: "不用发送，只是把它写出来。",
      },
      low_energy: {
        action: "先打开那条消息。",
        subtext: "打开就好。还不用回复。",
      },
      dont_want_to: {
        action: "只读一遍那条消息。",
        subtext: "现在不用回复。",
      },
      too_much_commitment: {
        action: "先写一句简单的开头。",
        subtext: "不用完整。一句就好。",
      },
      transition: {
        action: "先打开那条消息。",
        subtext: "打开就好。还不用回复。",
      },
      perfectionism: {
        action: "先写下你真正想表达的一句话。",
        subtext: "不用发送，只是把它写出来。",
      },
    },
    followUpActions: {
      unclear_start: {
        action: "写下第一句，不用发送。",
        subtext: "在消息框或备忘录里都行。",
      },
      social_discomfort: {
        action: "把这句开头放进消息框，先别发送。",
        subtext: "放进去就好。不用改。",
      },
      emotional_avoidance: {
        action: "写下你想回复的第一句。",
        subtext: "不用发送。写出来就好。",
      },
      too_big: {
        action: "在那句话后面再加半句。",
        subtext: "还是不用发送。",
      },
      low_energy: {
        action: "写下第一句，不用发送。",
        subtext: "在消息框或备忘录里都行。",
      },
      dont_want_to: {
        action: "写下你想回复的第一句。",
        subtext: "不用发送。写出来就好。",
      },
      too_much_commitment: {
        action: "把这句开头放进消息框，先别发送。",
        subtext: "放进去就好。不用改。",
      },
      transition: {
        action: "写下第一句，不用发送。",
        subtext: "在消息框或备忘录里都行。",
      },
      perfectionism: {
        action: "在那句话后面再加半句。",
        subtext: "还是不用发送。",
      },
    },
  },
  {
    id: "rest",
    keywords: [
      "刷",
      "手机",
      "休息",
      "睡觉",
      "睡眠",
      "短视频",
      "抖音",
      "微博",
      "屏幕",
      "躺",
      "放松",
      "scroll",
      "phone",
      "rest",
      "sleep",
    ],
    clarification: {
      question: "是什么让你没法休息？",
      options: [
        { id: "low_energy", label: "累了但停不下来" },
        { id: "transition", label: "不想让这一天结束" },
        { id: "emotional_avoidance", label: "休息感觉像放弃" },
        { id: "dont_want_to", label: "还没准备好停" },
      ],
    },
    actions: {
      low_energy: {
        action: "把现在正在做的东西放下十秒。",
        subtext: "不用决定要不要休息，只停十秒。",
      },
      transition: {
        action: "先把手机放到手够不到的地方。",
        subtext: "不用马上睡，只让今天慢一点。",
      },
      emotional_avoidance: {
        action: "给自己五分钟什么都不完成。",
        subtext: "五分钟后再决定要不要继续。",
      },
      dont_want_to: {
        action: "先完成一个「收尾动作」。",
        subtext: "关一个页面、存一个文件，或者把东西放回去。",
      },
      too_big: {
        action: "关掉一个 App 或标签页。",
        subtext: "只关一个。其他的可以留着。",
      },
      unclear_start: {
        action: "把现在正在做的东西放下十秒。",
        subtext: "不用决定要不要休息，只停十秒。",
      },
      social_discomfort: {
        action: "先把手机放到手够不到的地方。",
        subtext: "不用马上睡，只让今天慢一点。",
      },
      too_much_commitment: {
        action: "给自己五分钟什么都不完成。",
        subtext: "五分钟后再决定要不要继续。",
      },
      perfectionism: {
        action: "先完成一个「收尾动作」。",
        subtext: "关一个页面、存一个文件，或者把东西放回去。",
      },
    },
    followUpActions: {
      low_energy: {
        action: "这十秒里，看看周围而不是屏幕。",
        subtext: "不用闭眼。只是换个注意力。",
      },
      transition: {
        action: "把灯调暗一点。",
        subtext: "这一天可以慢慢结束。",
      },
      emotional_avoidance: {
        action: "五分钟到了就停，不用做更多。",
        subtext: "休息不是放弃。只是暂停。",
      },
      dont_want_to: {
        action: "收尾完后，停三十秒再决定。",
        subtext: "不用马上睡。只是停一下。",
      },
      too_big: {
        action: "再关一个 App 或标签页。",
        subtext: "只关一个。然后可以停。",
      },
      unclear_start: {
        action: "这十秒里，看看周围而不是屏幕。",
        subtext: "不用闭眼。只是换个注意力。",
      },
      social_discomfort: {
        action: "把灯调暗一点。",
        subtext: "这一天可以慢慢结束。",
      },
      too_much_commitment: {
        action: "五分钟到了就停，不用做更多。",
        subtext: "休息不是放弃。只是暂停。",
      },
      perfectionism: {
        action: "收尾完后，停三十秒再决定。",
        subtext: "不用马上睡。只是停一下。",
      },
    },
  },
  {
    id: "cleaning",
    keywords: [
      "打扫",
      "清洁",
      "房间",
      "桌子",
      "乱",
      "整理",
      "洗碗",
      "洗衣",
      "收拾",
      "clean",
      "room",
      "desk",
      "mess",
    ],
    clarification: {
      question: "是什么让它感觉难以承受？",
      options: [
        { id: "too_big", label: "要做的事情太多了" },
        { id: "unclear_start", label: "不知道从哪里开始" },
        { id: "low_energy", label: "没有力气" },
        { id: "dont_want_to", label: "就是不想做" },
      ],
    },
    actions: {
      too_big: {
        action: "只选眼前的一样东西。",
        subtext: "把它放回该去的地方，然后再决定要不要继续。",
      },
      unclear_start: {
        action: "找离你最近的一样东西。",
        subtext: "只处理这一样。",
      },
      low_energy: {
        action: "扔掉一件垃圾，或者收起一样东西。",
        subtext: "做完就可以停。",
      },
      dont_want_to: {
        action: "给自己一分钟。",
        subtext: "一分钟里只收眼前这一小块。",
      },
      emotional_avoidance: {
        action: "只选眼前的一样东西。",
        subtext: "把它放回该去的地方。然后可以停。",
      },
      social_discomfort: {
        action: "找离你最近的一样东西。",
        subtext: "只处理这一样。",
      },
      too_much_commitment: {
        action: "给自己一分钟。",
        subtext: "一分钟里只收眼前这一小块。",
      },
      transition: {
        action: "只选眼前的一样东西。",
        subtext: "把它放回该去的地方。然后可以停。",
      },
      perfectionism: {
        action: "找离你最近的一样东西。",
        subtext: "只处理这一样。不用整理完美。",
      },
    },
    followUpActions: {
      too_big: {
        action: "再处理眼前第二样东西。",
        subtext: "一样就好。然后可以停。",
      },
      unclear_start: {
        action: "把这一样放到该去的地方。",
        subtext: "放回去就算完成。",
      },
      low_energy: {
        action: "再收一样，或者就停在这里。",
        subtext: "两种都可以。",
      },
      dont_want_to: {
        action: "这一分钟里再收一样。",
        subtext: "一样就好。然后可以停。",
      },
      emotional_avoidance: {
        action: "再处理眼前第二样东西。",
        subtext: "一样就好。然后可以停。",
      },
      social_discomfort: {
        action: "把这一样放到该去的地方。",
        subtext: "放回去就算完成。",
      },
      too_much_commitment: {
        action: "这一分钟里再收一样。",
        subtext: "一样就好。然后可以停。",
      },
      transition: {
        action: "再处理眼前第二样东西。",
        subtext: "一样就好。然后可以停。",
      },
      perfectionism: {
        action: "把这一样放到该去的地方。",
        subtext: "不用整理完美。放回去就好。",
      },
    },
  },
];

const GENERIC_SCENARIO: ScenarioDefinition = {
  id: "generic",
  keywords: [],
  clarification: {
    question: "是什么让你难以下手？",
    options: [
      { id: "too_big", label: "感觉任务太大了" },
      { id: "unclear_start", label: "不确定从哪里开始" },
      { id: "low_energy", label: "没什么精力" },
      { id: "dont_want_to", label: "就是不想做" },
    ],
  },
  actions: {
    too_big: {
      action: "把这件事缩小到一个两分钟内能开始的动作。",
      subtext: "说出来或写下来。不用做完整件事。",
    },
    unclear_start: {
      action: "先找出开始它需要碰到的第一个东西。",
      subtext: "一个文件、一条消息、一个工具——找出来就好。",
    },
    low_energy: {
      action: "把第一步缩小一半。",
      subtext: "小到你觉得「这也算？」——那就对了。",
    },
    dont_want_to: {
      action: "只给它两分钟。两分钟后可以停。",
      subtext: "现在只需要开始计时。",
    },
    emotional_avoidance: {
      action: "把这件事缩小到一个两分钟内能开始的动作。",
      subtext: "说出来或写下来。不用做完整件事。",
    },
    social_discomfort: {
      action: "先找出开始它需要碰到的第一个东西。",
      subtext: "找出来就好。还不用做。",
    },
    too_much_commitment: {
      action: "只给它两分钟。两分钟后可以停。",
      subtext: "现在只需要开始计时。",
    },
    transition: {
      action: "把第一步缩小一半。",
      subtext: "小到你觉得「这也算？」——那就对了。",
    },
    perfectionism: {
      action: "先做一个粗糙的、不用给任何人看的版本。",
      subtext: "烂是故意的。以后可以改。",
    },
  },
  followUpActions: {
    too_big: {
      action: "现在只做你缩小后的那一步。",
      subtext: "一步就好。然后可以停。",
    },
    unclear_start: {
      action: "碰一下你找出的第一个东西。",
      subtext: "打开、拿起来、点进去——任何接触都算。",
    },
    low_energy: {
      action: "把缩小后的那一步再减半，然后做那一步。",
      subtext: "小到几乎可笑。做完可以停。",
    },
    dont_want_to: {
      action: "计时器响之前，碰一下任务就够。",
      subtext: "任何接触都算。两分钟后可以停。",
    },
    emotional_avoidance: {
      action: "现在只做你缩小后的那一步。",
      subtext: "一步就好。然后可以停。",
    },
    social_discomfort: {
      action: "碰一下你找出的第一个东西。",
      subtext: "打开、拿起来——任何接触都算。",
    },
    too_much_commitment: {
      action: "计时器响之前，碰一下任务就够。",
      subtext: "任何接触都算。两分钟后可以停。",
    },
    transition: {
      action: "把缩小后的那一步再减半，然后做那一步。",
      subtext: "小到几乎可笑。做完可以停。",
    },
    perfectionism: {
      action: "在那个粗糙版本里再加一行或一个元素。",
      subtext: "还是不用给任何人看。",
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
