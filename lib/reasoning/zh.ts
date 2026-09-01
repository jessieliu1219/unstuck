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
        action: "站起来，伸展 30 秒。",
        subtext: "就这样。还不用开始运动。",
      },
      too_big: {
        action: "换上运动服。",
        subtext: "你还不用真的去运动。",
      },
      unclear_start: {
        action: "选一个动作——只选一个。",
        subtext: "不用做。选出来就好。",
      },
      dont_want_to: {
        action: "换上运动服。",
        subtext: "你还不用真的去运动。",
      },
      emotional_avoidance: {
        action: "换上运动服。",
        subtext: "你还不用真的去运动。",
      },
      social_discomfort: {
        action: "换上运动服。",
        subtext: "你还不用真的去运动。",
      },
      too_much_commitment: {
        action: "换上运动服。",
        subtext: "你还不用真的去运动。",
      },
      transition: {
        action: "站起来，伸展 30 秒。",
        subtext: "就这样。还不用开始运动。",
      },
      perfectionism: {
        action: "选一个动作——只选一个。",
        subtext: "不用做。选出来就好。",
      },
    },
    followUpActions: {
      low_energy: {
        action: "走到另一个房间。",
        subtext: "不用快走，不用有目的地。动一下就好。",
      },
      too_big: {
        action: "随便做一个动作。",
        subtext: "一个就够了。做完可以停。",
      },
      unclear_start: {
        action: "搜一个 5 分钟的训练。",
        subtext: "不用开始。找到就好。",
      },
      dont_want_to: {
        action: "站着听一首喜欢的歌。",
        subtext: "不用运动。站着就好。",
      },
      emotional_avoidance: {
        action: "随便做一个动作。",
        subtext: "一个就够了。做完可以停。",
      },
      social_discomfort: {
        action: "走到另一个房间。",
        subtext: "不用快走，不用有目的地。动一下就好。",
      },
      too_much_commitment: {
        action: "随便做一个动作。",
        subtext: "一个就够了。做完可以停。",
      },
      transition: {
        action: "走到另一个房间。",
        subtext: "不用快走，不用有目的地。动一下就好。",
      },
      perfectionism: {
        action: "随便做一个动作。",
        subtext: "一个就够了。做完可以停。",
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
        action: "打开那个文件或文档。",
        subtext: "先不用改任何东西。",
      },
      unclear_start: {
        action: "写一句话，描述你想做什么。",
        subtext: "乱一点没关系。没人会看到。",
      },
      perfectionism: {
        action: "设一个 5 分钟的计时器。",
        subtext: "响了就可以停。",
      },
      dont_want_to: {
        action: "打开那个文件或文档。",
        subtext: "先不用改任何东西。",
      },
      low_energy: {
        action: "打开那个文件或文档。",
        subtext: "先不用改任何东西。",
      },
      emotional_avoidance: {
        action: "打开那个文件或文档。",
        subtext: "先不用改任何东西。",
      },
      social_discomfort: {
        action: "打开那个文件或文档。",
        subtext: "先不用改任何东西。",
      },
      too_much_commitment: {
        action: "设一个 5 分钟的计时器。",
        subtext: "响了就可以停。",
      },
      transition: {
        action: "关掉屏幕上其他所有东西。",
        subtext: "只留这一件事开着。",
      },
    },
    followUpActions: {
      too_big: {
        action: "在便签上写下最小的下一步。",
        subtext: "一行就好。",
      },
      unclear_start: {
        action: "说出你需要做的第一件事。",
        subtext: "大声说或打出来。先不用做。",
      },
      perfectionism: {
        action: "故意写一句很烂的话。",
        subtext: "烂是预期的。这就是目的。",
      },
      dont_want_to: {
        action: "写一个和任务相关的词。",
        subtext: "任何词都行。碰一下就好。",
      },
      low_energy: {
        action: "写一个和任务相关的词。",
        subtext: "任何词都行。碰一下就好。",
      },
      emotional_avoidance: {
        action: "写一个和任务相关的词。",
        subtext: "任何词都行。碰一下就好。",
      },
      social_discomfort: {
        action: "写一个和任务相关的词。",
        subtext: "任何词都行。碰一下就好。",
      },
      too_much_commitment: {
        action: "故意写一句很烂的话。",
        subtext: "烂是预期的。这就是目的。",
      },
      transition: {
        action: "把手机放到另一个房间。",
        subtext: "就接下来几分钟。",
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
        action: "打开消息，读一遍。",
        subtext: "还不用回复。",
      },
      social_discomfort: {
        action: "打一个字作为回复。",
        subtext: "比如「好」或「谢谢」。先别发送。",
      },
      emotional_avoidance: {
        action: "打开消息，读一遍。",
        subtext: "还不用回复。",
      },
      too_big: {
        action: "打一个字作为回复。",
        subtext: "比如「好」或「谢谢」。先别发送。",
      },
      low_energy: {
        action: "打开消息，读一遍。",
        subtext: "还不用回复。",
      },
      dont_want_to: {
        action: "打开消息，读一遍。",
        subtext: "还不用回复。",
      },
      too_much_commitment: {
        action: "打一个字作为回复。",
        subtext: "比如「好」或「谢谢」。先别发送。",
      },
      transition: {
        action: "打开消息，读一遍。",
        subtext: "还不用回复。",
      },
      perfectionism: {
        action: "打一个字作为回复。",
        subtext: "比如「好」或「谢谢」。先别发送。",
      },
    },
    followUpActions: {
      unclear_start: {
        action: "在备忘录里写个草稿回复。",
        subtext: "不在聊天窗口里。随便哪里都行。",
      },
      social_discomfort: {
        action: "在草稿里再加一句话。",
        subtext: "简单诚实就好。还是先别发送。",
      },
      emotional_avoidance: {
        action: "在备忘录里写个草稿回复。",
        subtext: "不在聊天窗口里。随便哪里都行。",
      },
      too_big: {
        action: "在草稿里再加一句话。",
        subtext: "简单诚实就好。还是先别发送。",
      },
      low_energy: {
        action: "在备忘录里写个草稿回复。",
        subtext: "不在聊天窗口里。随便哪里都行。",
      },
      dont_want_to: {
        action: "在备忘录里写个草稿回复。",
        subtext: "不在聊天窗口里。随便哪里都行。",
      },
      too_much_commitment: {
        action: "在草稿里再加一句话。",
        subtext: "简单诚实就好。还是先别发送。",
      },
      transition: {
        action: "在备忘录里写个草稿回复。",
        subtext: "不在聊天窗口里。随便哪里都行。",
      },
      perfectionism: {
        action: "在草稿里再加一句话。",
        subtext: "简单诚实就好。还是先别发送。",
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
        action: "把手机屏幕朝下放下。",
        subtext: "还不用睡觉。",
      },
      transition: {
        action: "把手机屏幕朝下放下。",
        subtext: "还不用睡觉。",
      },
      emotional_avoidance: {
        action: "关掉一个 App。",
        subtext: "只关一个。其他的可以留着。",
      },
      dont_want_to: {
        action: "把手机屏幕朝下放下。",
        subtext: "还不用睡觉。",
      },
      too_big: {
        action: "关掉一个 App。",
        subtext: "只关一个。其他的可以留着。",
      },
      unclear_start: {
        action: "把手机屏幕朝下放下。",
        subtext: "还不用睡觉。",
      },
      social_discomfort: {
        action: "把手机屏幕朝下放下。",
        subtext: "还不用睡觉。",
      },
      too_much_commitment: {
        action: "关掉一个 App。",
        subtext: "只关一个。其他的可以留着。",
      },
      perfectionism: {
        action: "把手机屏幕朝下放下。",
        subtext: "还不用睡觉。",
      },
    },
    followUpActions: {
      low_energy: {
        action: "找一个舒服的地方坐下。",
        subtext: "不用躺下。坐着就好。",
      },
      transition: {
        action: "把灯调暗一点。",
        subtext: "这一天可以慢慢结束。",
      },
      emotional_avoidance: {
        action: "慢慢呼吸三次。",
        subtext: "休息不是放弃。只是暂停。",
      },
      dont_want_to: {
        action: "把手机放到房间另一头。",
        subtext: "够不着就好。",
      },
      too_big: {
        action: "慢慢呼吸三次。",
        subtext: "休息不是放弃。只是暂停。",
      },
      unclear_start: {
        action: "找一个舒服的地方坐下。",
        subtext: "不用躺下。坐着就好。",
      },
      social_discomfort: {
        action: "找一个舒服的地方坐下。",
        subtext: "不用躺下。坐着就好。",
      },
      too_much_commitment: {
        action: "慢慢呼吸三次。",
        subtext: "休息不是放弃。只是暂停。",
      },
      perfectionism: {
        action: "把灯调暗一点。",
        subtext: "这一天可以慢慢结束。",
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
        action: "拿起一样东西，放到它该在的地方。",
        subtext: "就一样。然后可以停。",
      },
      unclear_start: {
        action: "环顾四周，说出一个想先处理的小区域。",
        subtext: "一个角落、一个桌面、一堆东西。说出来就好。",
      },
      low_energy: {
        action: "拿起一样东西，放到它该在的地方。",
        subtext: "就一样。然后可以停。",
      },
      dont_want_to: {
        action: "拿起一样东西，放到它该在的地方。",
        subtext: "就一样。然后可以停。",
      },
      emotional_avoidance: {
        action: "拿起一样东西，放到它该在的地方。",
        subtext: "就一样。然后可以停。",
      },
      social_discomfort: {
        action: "拿起一样东西，放到它该在的地方。",
        subtext: "就一样。然后可以停。",
      },
      too_much_commitment: {
        action: "环顾四周，说出一个想先处理的小区域。",
        subtext: "一个角落、一个桌面、一堆东西。说出来就好。",
      },
      transition: {
        action: "拿起一样东西，放到它该在的地方。",
        subtext: "就一样。然后可以停。",
      },
      perfectionism: {
        action: "环顾四周，说出一个想先处理的小区域。",
        subtext: "一个角落、一个桌面、一堆东西。说出来就好。",
      },
    },
    followUpActions: {
      too_big: {
        action: "再拿起一样东西。",
        subtext: "同样的规则。一样就好，然后可以停。",
      },
      unclear_start: {
        action: "在那个区域清理出一小块空间。",
        subtext: "一个手掌宽就够了。",
      },
      low_energy: {
        action: "把刚才拿的东西放好。",
        subtext: "如果还没放的话。然后可以停。",
      },
      dont_want_to: {
        action: "再拿起一样东西。",
        subtext: "同样的规则。一样就好，然后可以停。",
      },
      emotional_avoidance: {
        action: "再拿起一样东西。",
        subtext: "同样的规则。一样就好，然后可以停。",
      },
      social_discomfort: {
        action: "再拿起一样东西。",
        subtext: "同样的规则。一样就好，然后可以停。",
      },
      too_much_commitment: {
        action: "在那个区域清理出一小块空间。",
        subtext: "一个手掌宽就够了。",
      },
      transition: {
        action: "再拿起一样东西。",
        subtext: "同样的规则。一样就好，然后可以停。",
      },
      perfectionism: {
        action: "在那个区域清理出一小块空间。",
        subtext: "一个手掌宽就够了。",
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
      action: "做这件事里最小的一步。",
      subtext: "小到几乎有点可笑。这就是目的。",
    },
    unclear_start: {
      action: "写下第一步是什么。",
      subtext: "一行就好。还不用做。",
    },
    low_energy: {
      action: "设一个 2 分钟的计时器。",
      subtext: "响了就可以停。",
    },
    dont_want_to: {
      action: "走到做这件事的地方。",
      subtext: "还不用开始。过去就好。",
    },
    emotional_avoidance: {
      action: "大声说出你在回避什么。",
      subtext: "说一次，可能会变小一点。",
    },
    social_discomfort: {
      action: "写下你需要说或做的事。",
      subtext: "粗糙的草稿。没人会看到。",
    },
    too_much_commitment: {
      action: "设一个 2 分钟的计时器。",
      subtext: "响了就可以停。",
    },
    transition: {
      action: "走到做这件事的地方。",
      subtext: "还不用开始。过去就好。",
    },
    perfectionism: {
      action: "故意做一个粗糙的版本。",
      subtext: "烂是故意的。以后可以改。",
    },
  },
  followUpActions: {
    too_big: {
      action: "再做一小步。",
      subtext: "和刚才一样小。小到感觉很容易。",
    },
    unclear_start: {
      action: "只做你写下的那第一步。",
      subtext: "只有那一步。然后可以停。",
    },
    low_energy: {
      action: "计时器响之前继续，或者现在停。",
      subtext: "两种都可以。",
    },
    dont_want_to: {
      action: "碰一下这个任务，30 秒。",
      subtext: "打开、看一下、拿起来。想停就停。",
    },
    emotional_avoidance: {
      action: "碰一下这个任务，30 秒。",
      subtext: "打开、看一下、拿起来。想停就停。",
    },
    social_discomfort: {
      action: "做你写下的一小部分。",
      subtext: "只是开头。不是全部。",
    },
    too_much_commitment: {
      action: "计时器响之前继续，或者现在停。",
      subtext: "两种都可以。",
    },
    transition: {
      action: "碰一下这个任务，30 秒。",
      subtext: "打开、看一下、拿起来。想停就停。",
    },
    perfectionism: {
      action: "再做一个粗糙的版本。",
      subtext: "还是故意做烂。进度比完美重要。",
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
