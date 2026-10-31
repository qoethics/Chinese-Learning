// HSK3 lesson texts. Read-only at runtime.
// Source: hsk3/data/lesson1.json + hsk3/data/lesson2.json + hsk3/data/lesson3.json + hsk3/data/lesson4.json + hsk3/data/lesson5.json + hsk3/data/lesson6.json + hsk3/data/lesson7.json + hsk3/data/lesson8.json + hsk3/data/lesson9.json + hsk3/data/lesson13.json + hsk3/data/lesson14.json + hsk3/data/lesson15.json + hsk3/data/lesson16.json + hsk3/data/lesson17.json + hsk3/data/lesson18.json (hand-authored; book page ranges in hsk3/data/manifest.json).
// Pinyin is NOT stored: shared/js/app.js derives it with pinyin-pro (window.pinyinPro).
// Grammar points live in data/sentences/grammar-sentences.js (window.SENTENCE_CORPUS);
// each point carries a textId so renderTextList can show it under its own text.
window.COURSE_LESSONS = [
  {
    "name": "L1 · 我们去机场接你们",
    "id": "1",
    "core": [
      {
        "hanzi": "以为",
        "en": "think; consider"
      },
      {
        "hanzi": "像",
        "en": "be like"
      },
      {
        "hanzi": "长",
        "en": "grow; develop"
      },
      {
        "hanzi": "身高",
        "en": "height"
      },
      {
        "hanzi": "米",
        "en": "meter"
      },
      {
        "hanzi": "瘦",
        "en": "thin"
      },
      {
        "hanzi": "接",
        "en": "meet, pick up"
      },
      {
        "hanzi": "行李",
        "en": "luggage"
      },
      {
        "hanzi": "丢",
        "en": "lose"
      },
      {
        "hanzi": "箱子",
        "en": "case; trunk"
      },
      {
        "hanzi": "号码",
        "en": "number"
      },
      {
        "hanzi": "好像",
        "en": "seemingly"
      },
      {
        "hanzi": "重要",
        "en": "important"
      },
      {
        "hanzi": "着急",
        "en": "worried"
      },
      {
        "hanzi": "护照",
        "en": "passport"
      },
      {
        "hanzi": "服务台",
        "en": "service desk"
      },
      {
        "hanzi": "应该",
        "en": "should"
      },
      {
        "hanzi": "站",
        "en": "stand"
      },
      {
        "hanzi": "中间",
        "en": "middle"
      },
      {
        "hanzi": "短",
        "en": "short (in length)"
      },
      {
        "hanzi": "头发",
        "en": "hair"
      },
      {
        "hanzi": "年轻",
        "en": "young"
      },
      {
        "hanzi": "发现",
        "en": "discover; find"
      },
      {
        "hanzi": "帮助",
        "en": "help"
      },
      {
        "hanzi": "不见",
        "en": "be lost"
      },
      {
        "hanzi": "照片",
        "en": "photo"
      },
      {
        "hanzi": "带",
        "en": "take; bring, have"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "01-01",
        "title": {
          "cn": "在沙发上聊天",
          "en": "Chatting on the sofa",
          "emoji": "🛋️"
        },
        "intro": {
          "cn": "在家里，刘明和王一雪在沙发上聊天儿。",
          "en": "At home, Liu Ming and Wang Yixue were chatting on the sofa."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-01/1-1.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "刘明和王一雪在做什么？",
            "options": [
              "看电视",
              "看手机",
              "去机场"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "刘明跟王一雪一起去机场做什么？",
            "options": [
              "坐飞机",
              "找朋友",
              "接白家月"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "刘明",
            "cn": "这是杨同乐吗？他怎么跟白家月在一起？",
            "en": "Is that Yang Tongle? Why is he with Bai Jiayue?"
          },
          {
            "speaker": "王一雪",
            "cn": "他不是杨同乐，他叫李文，是白家月的好朋友。",
            "en": "That's not Yang Tongle. That's Li Wen. He's a good friend of Bai Jiayue."
          },
          {
            "speaker": "刘明",
            "cn": "我还以为是同乐呢，他们看上去有点儿像。",
            "en": "Oh, I thought it was Tongle. They do look a bit alike."
          },
          {
            "speaker": "王一雪",
            "cn": "是长得有点儿像，但是他比同乐高，身高有一米八。",
            "en": "Yes, they look somewhat alike, but he's taller than Tongle—about 1.8 meters."
          },
          {
            "speaker": "刘明",
            "cn": "看起来也比同乐瘦一点儿。",
            "en": "And he looks a bit thinner, too."
          },
          {
            "speaker": "王一雪",
            "cn": "下个星期家月和李文要来北京，我去机场接他们。",
            "en": "Jiayue and Li Wen are coming to Beijing next week. I'm going to pick them up at the airport."
          },
          {
            "speaker": "刘明",
            "cn": "他们哪天到北京？我跟你一起去机场接他们吧。",
            "en": "What day will they get here? I'll come with you to pick them up."
          }
        ],
        "postQuestions": [
          {
            "q": "刘明为什么以为李文是杨同乐？"
          },
          {
            "q": "李文长什么样？"
          },
          {
            "q": "白家月什么时候来中国？"
          }
        ],
        "words": [
          {
            "cn": "以为",
            "pos": "v.",
            "en": "think; consider"
          },
          {
            "cn": "像",
            "pos": "v.",
            "en": "be like"
          },
          {
            "cn": "长",
            "pos": "v.",
            "en": "grow; develop"
          },
          {
            "cn": "身高",
            "pos": "n.",
            "en": "height"
          },
          {
            "cn": "米",
            "pos": "m.",
            "en": "meter"
          },
          {
            "cn": "瘦",
            "pos": "adj.",
            "en": "thin"
          },
          {
            "cn": "接",
            "pos": "v.",
            "en": "meet, pick up"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-01/1-2.mp3"
      },
      {
        "id": "01-02",
        "title": {
          "cn": "行李不见了",
          "en": "The luggage is missing",
          "emoji": "🧳"
        },
        "intro": {
          "cn": "在机场，李文和白家月在行李领取处。",
          "en": "At the airport, Li Wen and Bai Jiayue were at baggage claim."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-01/1-3.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "李文和白家月在机场做什么？",
            "options": [
              "等箱子",
              "等同学",
              "等王一雪"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "白家月为什么很着急？",
            "options": [
              "护照丢了",
              "行李箱丢了",
              "拿错行李箱了"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "白家月",
            "cn": "我的行李怎么还没出来？是不是丢了？",
            "en": "Why hasn't my luggage shown up yet? Could it be lost?"
          },
          {
            "speaker": "李文",
            "cn": "你的行李箱是什么样的？",
            "en": "What does your suitcase look like?"
          },
          {
            "speaker": "白家月",
            "cn": "是一个黑色的箱子，上面写着我的名字和电话号码。",
            "en": "It's a black one with my name and phone number on it."
          },
          {
            "speaker": "李文",
            "cn": "我好像在哪儿看到过这个箱子，是不是有人拿错了？",
            "en": "It seems I've seen one like that somewhere. Could someone have taken it by mistake?"
          },
          {
            "speaker": "白家月",
            "cn": "我们快找谁问一下吧，箱子里有不少重要的东西。",
            "en": "Let's quickly find someone to ask. There are quite a few important things in it."
          },
          {
            "speaker": "李文",
            "cn": "别着急，我们拿着护照和机票，去服务台问问吧。",
            "en": "Don't worry. Let's take our passports and plane tickets to the service desk and ask there."
          }
        ],
        "postQuestions": [
          {
            "q": "白家月的箱子是什么样的？"
          },
          {
            "q": "李文看到过白家月的箱子吗？"
          },
          {
            "q": "他们现在要做什么？"
          }
        ],
        "words": [
          {
            "cn": "行李",
            "pos": "n.",
            "en": "luggage"
          },
          {
            "cn": "丢",
            "pos": "v.",
            "en": "lose"
          },
          {
            "cn": "箱子",
            "pos": "n.",
            "en": "case; trunk"
          },
          {
            "cn": "号码",
            "pos": "n.",
            "en": "number"
          },
          {
            "cn": "好像",
            "pos": "adv.",
            "en": "seemingly"
          },
          {
            "cn": "重要",
            "pos": "adj.",
            "en": "important"
          },
          {
            "cn": "着急",
            "pos": "adj.",
            "en": "worried"
          },
          {
            "cn": "护照",
            "pos": "n.",
            "en": "passport"
          },
          {
            "cn": "服务台",
            "pos": "n.",
            "en": "service desk"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-01/1-4.mp3"
      },
      {
        "id": "01-03",
        "title": {
          "cn": "在机场接人",
          "en": "Meeting them at the airport",
          "emoji": "🛬"
        },
        "intro": {
          "cn": "在机场大厅，刘明和王一雪接机。",
          "en": "In the airport arrival hall, Liu Ming and Wang Yixue were waiting to meet their friends."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-01/1-5.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "刘明和王一雪在机场做什么？",
            "options": [
              "接人",
              "坐飞机",
              "找行李箱"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "刘明为什么要站到中间？",
            "options": [
              "旁边人太多了",
              "他看见白家月了",
              "白家月好找他们"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "刘明",
            "cn": "飞机早就到了，你看见白家月他们了吗？",
            "en": "The plane arrived a while ago. Have you seen Bai Jiayue and Li Wen?"
          },
          {
            "speaker": "王一雪",
            "cn": "没有，他们应该快出来了。",
            "en": "No, they should be coming out any minute now."
          },
          {
            "speaker": "刘明",
            "cn": "我们站到中间去吧，这样他们好找一些。",
            "en": "Let's stand in the middle so it'll be easier for them to spot us."
          },
          {
            "speaker": "王一雪",
            "cn": "你看那个高个子的人是李文吗？",
            "en": "Look, is that tall guy Li Wen?"
          },
          {
            "speaker": "刘明",
            "cn": "你说的是哪个？那个穿着黑衣服的短头发的年轻人？",
            "en": "Which one do you mean? The young man with short hair, wearing black?"
          },
          {
            "speaker": "王一雪",
            "cn": "对，那个人就是李文！你看，家月在他后面呢。",
            "en": "Yes, that's Li Wen! And look, Jiayue is right behind him."
          }
        ],
        "postQuestions": [
          {
            "q": "王一雪为什么说白家月他们应该快出来了？"
          },
          {
            "q": "刘明看见的年轻人长什么样？"
          },
          {
            "q": "王一雪怎么知道那个年轻人就是李文？"
          }
        ],
        "words": [
          {
            "cn": "应该",
            "pos": "mod.",
            "en": "should"
          },
          {
            "cn": "站",
            "pos": "v.",
            "en": "stand"
          },
          {
            "cn": "中间",
            "pos": "n.",
            "en": "middle"
          },
          {
            "cn": "短",
            "pos": "adj.",
            "en": "short (in length)"
          },
          {
            "cn": "头发",
            "pos": "n.",
            "en": "hair"
          },
          {
            "cn": "年轻",
            "pos": "adj.",
            "en": "young"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-01/1-6.mp3"
      },
      {
        "id": "01-04",
        "title": {
          "cn": "李文的日记",
          "en": "Li Wen's diary",
          "emoji": "📔"
        },
        "intro": {
          "cn": "在宾馆房间，李文在写日记。",
          "en": "In the hotel room, Li Wen was writing in his diary."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-01/1-7.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "李文回北京的路上花了多长时间？",
            "options": [
              "几个小时",
              "十几个小时",
              "几十个小时"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "李文觉得王老师的姐姐看起来怎么样？",
            "options": [
              "很累",
              "很年轻",
              "很像王老师"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "昨天我到北京了。",
            "en": "Yesterday I arrived in Beijing."
          },
          {
            "speaker": "",
            "cn": "虽然路上花了十几个小时，但是跟家月坐在一起，我觉得时间过得很快。",
            "en": "Though the journey took more than ten hours, sitting next to Jiayue made the time pass quickly."
          },
          {
            "speaker": "",
            "cn": "到机场的时候，家月发现行李箱不见了，我带她去服务台，帮助她找到了行李箱。",
            "en": "When we arrived at the airport, Jiayue found her suitcase missing. So I took her to the service desk and helped her retrieve it."
          },
          {
            "speaker": "",
            "cn": "走出机场的时候，已经八点多了，我们一出来就看见了王老师的姐姐，她看起来比照片上年轻。",
            "en": "By the time we left the airport, it was already past 8 p.m. As soon as we stepped outside, we saw Ms. Wang's cousin, who looked younger than in her photos."
          },
          {
            "speaker": "",
            "cn": "晚上，一雪姐带我们去吃了一家很好吃的中国菜。",
            "en": "In the evening, Yixue took us to a Chinese restaurant with amazing food."
          }
        ],
        "postQuestions": [
          {
            "q": "李文为什么觉得时间过得很快？"
          },
          {
            "q": "到机场的时候，白家月发现了什么问题？"
          },
          {
            "q": "王一雪带他们去做什么了？"
          }
        ],
        "words": [
          {
            "cn": "发现",
            "pos": "v.",
            "en": "discover; find"
          },
          {
            "cn": "帮助",
            "pos": "v.",
            "en": "help"
          },
          {
            "cn": "不见",
            "pos": "v.",
            "en": "be lost"
          },
          {
            "cn": "照片",
            "pos": "n.",
            "en": "photo"
          },
          {
            "cn": "带",
            "pos": "v.",
            "en": "take; bring, have"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-01/1-8.mp3"
      }
    ]
  },
  {
    "name": "L2 · 你们想吃什么就点什么",
    "id": "2",
    "core": [
      {
        "hanzi": "菜单",
        "en": "menu"
      },
      {
        "hanzi": "又",
        "en": "and"
      },
      {
        "hanzi": "饿",
        "en": "hungry"
      },
      {
        "hanzi": "渴",
        "en": "thirsty"
      },
      {
        "hanzi": "客气",
        "en": "be polite, polite"
      },
      {
        "hanzi": "饮料",
        "en": "drink"
      },
      {
        "hanzi": "好久",
        "en": "for a long time"
      },
      {
        "hanzi": "服务",
        "en": "serve"
      },
      {
        "hanzi": "员",
        "en": "added after a noun or verb to indicate a person"
      },
      {
        "hanzi": "双",
        "en": "pair"
      },
      {
        "hanzi": "筷子",
        "en": "chopsticks"
      },
      {
        "hanzi": "勺子",
        "en": "spoon"
      },
      {
        "hanzi": "碗",
        "en": "bowl"
      },
      {
        "hanzi": "马上",
        "en": "immediately"
      },
      {
        "hanzi": "热情",
        "en": "warm"
      },
      {
        "hanzi": "尝",
        "en": "taste"
      },
      {
        "hanzi": "记",
        "en": "remember"
      },
      {
        "hanzi": "用",
        "en": "eat; drink; use"
      },
      {
        "hanzi": "鸡",
        "en": "chicken"
      },
      {
        "hanzi": "张",
        "en": "used for paper, paintings, etc."
      },
      {
        "hanzi": "不用",
        "en": "need not"
      },
      {
        "hanzi": "选",
        "en": "choose"
      },
      {
        "hanzi": "外卖",
        "en": "takeout; a takeout service"
      },
      {
        "hanzi": "方便",
        "en": "convenient"
      },
      {
        "hanzi": "蛋糕",
        "en": "cake"
      },
      {
        "hanzi": "方便面",
        "en": "instant noodles"
      },
      {
        "hanzi": "只",
        "en": "only"
      },
      {
        "hanzi": "简单",
        "en": "simple"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "2-01",
        "title": {
          "cn": "在饭馆点菜",
          "en": "Ordering at the restaurant",
          "emoji": "🍽️"
        },
        "intro": {
          "cn": "在饭馆，王一雪、刘明、白家月和李文在点菜。",
          "en": "At the restaurant, Wang Yixue, Liu Ming, Bai Jiayue, and Li Wen were deciding what to order."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-02/2-1.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "他们在做什么？",
            "options": [
              "买东西",
              "在家吃饭",
              "在饭馆吃饭"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "白家月想吃什么中国菜？",
            "options": [
              "饺子",
              "包子",
              "面条儿"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "王一雪",
            "cn": "家月、李文，你们看看菜单，想吃点儿什么？",
            "en": "Jiayue, Li Wen, take a look at the menu. What do you feel like eating?"
          },
          {
            "speaker": "李文",
            "cn": "谢谢一雪姐，我都可以，你们点吧。",
            "en": "Thank you, Yixue. I'm good with anything—why don't you go ahead and order?"
          },
          {
            "speaker": "白家月",
            "cn": "飞了这么远，现在还真是又饿又渴。",
            "en": "After such a long flight, I'm really hungry and thirsty."
          },
          {
            "speaker": "王一雪",
            "cn": "那多点点儿，别客气。你们喝什么饮料？",
            "en": "Then let's order plenty—don't be shy. What would you like to drink?"
          },
          {
            "speaker": "白家月",
            "cn": "好久没喝中国茶，也好久没吃饺子了。我想喝绿茶、吃饺子，可以吗？",
            "en": "It's been ages since I've had Chinese tea or jiaozi. I'd like some green tea and jiaozi, if that's okay."
          },
          {
            "speaker": "王一雪",
            "cn": "没问题。你们看看还想吃什么。",
            "en": "No problem. Have another look and see if there's anything else you'd like."
          }
        ],
        "postQuestions": [
          {
            "q": "白家月现在觉得怎么样？"
          },
          {
            "q": "白家月想喝什么？"
          },
          {
            "q": "王一雪要点什么？"
          }
        ],
        "words": [
          {
            "cn": "菜单",
            "pos": "n.",
            "en": "menu"
          },
          {
            "cn": "又",
            "pos": "adv.",
            "en": "and"
          },
          {
            "cn": "饿",
            "pos": "adj.",
            "en": "hungry"
          },
          {
            "cn": "渴",
            "pos": "adj.",
            "en": "thirsty"
          },
          {
            "cn": "客气",
            "pos": "v./adj.",
            "en": "be polite, polite"
          },
          {
            "cn": "饮料",
            "pos": "n.",
            "en": "drink"
          },
          {
            "cn": "好久",
            "pos": "adj.",
            "en": "for a long time"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-02/2-2.mp3"
      },
      {
        "id": "2-02",
        "title": {
          "cn": "一起吃中餐",
          "en": "Eating Chinese food together",
          "emoji": "🥢"
        },
        "intro": {
          "cn": "在饭馆，王一雪、刘明、白家月和李文一起吃饭。",
          "en": "At the restaurant, Wang Yixue, Liu Ming, Bai Jiayue, and Li Wen were having a meal together."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-02/2-3.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一雪让服务员拿什么？",
            "options": [
              "筷子和碗",
              "勺子和筷子",
              "勺子、筷子和碗"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "这家饭馆的服务怎么样？",
            "options": [
              "很慢",
              "很热情",
              "不太好"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "王一雪",
            "cn": "服务员，再给我们拿一双筷子、一个勺子和一个碗。",
            "en": "Waitress, could you please bring another pair of chopsticks, a spoon, and a bowl?"
          },
          {
            "speaker": "服务员",
            "cn": "好的，请等一下，我马上就去拿。",
            "en": "Certainly. Please wait a moment—I'll bring them right away."
          },
          {
            "speaker": "王一雪",
            "cn": "这家饭馆的服务很热情，菜也都做得很好吃。你们尝尝，看喜不喜欢这些菜。",
            "en": "The service here is always warm and welcoming, and all the dishes are delicious. Give it a try and let me know what you think!"
          },
          {
            "speaker": "白家月",
            "cn": "哪个菜都好吃。您点的这些菜真不错。",
            "en": "Every dish is delicious. The dishes you ordered are really great."
          },
          {
            "speaker": "王一雪",
            "cn": "这里的饭菜又便宜又好吃，我们经常来，服务员都记住我们爱吃的菜了。",
            "en": "The food here is both affordable and tasty. We come here so often that the staff already know our favorite dishes."
          },
          {
            "speaker": "服务员",
            "cn": "王姐，您经常来吃饭，今天送您一些水果，请慢用。",
            "en": "Ms. Wang, since you're such a regular customer, we'd like to offer you some complimentary fruit today. Please enjoy!"
          }
        ],
        "postQuestions": [
          {
            "q": "王一雪觉得这家饭馆怎么样？"
          },
          {
            "q": "白家月觉得这家饭馆的菜怎么样？"
          },
          {
            "q": "服务员为什么送了一些水果？"
          }
        ],
        "words": [
          {
            "cn": "服务",
            "pos": "v.",
            "en": "serve"
          },
          {
            "cn": "员",
            "pos": "suf.",
            "en": "added after a noun or verb to indicate a person"
          },
          {
            "cn": "双",
            "pos": "m.",
            "en": "pair"
          },
          {
            "cn": "筷子",
            "pos": "n.",
            "en": "chopsticks"
          },
          {
            "cn": "勺子",
            "pos": "n.",
            "en": "spoon"
          },
          {
            "cn": "碗",
            "pos": "n.",
            "en": "bowl"
          },
          {
            "cn": "马上",
            "pos": "adv.",
            "en": "immediately"
          },
          {
            "cn": "热情",
            "pos": "adj.",
            "en": "warm"
          },
          {
            "cn": "尝",
            "pos": "v.",
            "en": "taste"
          },
          {
            "cn": "记",
            "pos": "v.",
            "en": "remember"
          },
          {
            "cn": "用",
            "pos": "v.",
            "en": "eat; drink; use"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-02/2-4.mp3"
      },
      {
        "id": "2-03",
        "title": {
          "cn": "聊外卖",
          "en": "Talking about takeout",
          "emoji": "📱"
        },
        "intro": {
          "cn": "在饭馆，王一雪、刘明、白家月和李文继续边吃边聊。",
          "en": "At the restaurant, Wang Yixue, Liu Ming, Bai Jiayue, and Li Wen carried on chatting over their meal."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-02/2-5.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "在这家饭馆，白家月喜欢吃什么？",
            "options": [
              "包子",
              "鸡肉饭",
              "面条儿"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "王一雪为什么说“不用拿菜单”？",
            "options": [
              "她有菜单",
              "她不想再来",
              "手机上可以看菜单"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "白家月",
            "cn": "这个鸡肉饭太好吃了，我要再来吃一次。",
            "en": "This chicken rice is so delicious! I'll definitely come back for it again."
          },
          {
            "speaker": "李文",
            "cn": "你可以拿走这张菜单，看看下次还吃点儿什么。",
            "en": "You can take this menu with you and check what else you might want to order next time."
          },
          {
            "speaker": "王一雪",
            "cn": "不用拿菜单，在手机上就能看到，也可以选好了让他们给你送。",
            "en": "No need to take the menu. You can check it on your phone and even place an order for delivery."
          },
          {
            "speaker": "白家月",
            "cn": "他们家还能送外卖？",
            "en": "They do delivery here?"
          },
          {
            "speaker": "王一雪",
            "cn": "对，现在很多饭馆都能送外卖，想吃什么就点什么。",
            "en": "Yes! Many restaurants offer delivery these days. You can order whatever you feel like."
          },
          {
            "speaker": "白家月",
            "cn": "那真是太方便了！",
            "en": "That's really convenient!"
          }
        ],
        "postQuestions": [
          {
            "q": "白家月为什么还要再来吃一次？"
          },
          {
            "q": "这家饭馆可以怎么点菜？"
          },
          {
            "q": "听说很多饭馆都能送外卖，白家月觉得怎么样？"
          }
        ],
        "words": [
          {
            "cn": "鸡",
            "pos": "n.",
            "en": "chicken"
          },
          {
            "cn": "张",
            "pos": "m.",
            "en": "used for paper, paintings, etc."
          },
          {
            "cn": "不用",
            "pos": "adv.",
            "en": "need not"
          },
          {
            "cn": "选",
            "pos": "v.",
            "en": "choose"
          },
          {
            "cn": "外卖",
            "pos": "n./v.",
            "en": "takeout; a takeout service"
          },
          {
            "cn": "方便",
            "pos": "adj.",
            "en": "convenient"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-02/2-6.mp3"
      },
      {
        "id": "2-04",
        "title": {
          "cn": "李文的日记",
          "en": "Li Wen's diary",
          "emoji": "📔"
        },
        "intro": {
          "cn": "在李文家，李文在写日记。",
          "en": "At home, Li Wen was writing in his diary."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-02/2-7.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "快要考试的时候，李文怎么吃饭？",
            "options": [
              "吃方便面",
              "出去吃饭",
              "回妈妈家吃"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "回到中国了，李文为什么很高兴？",
            "options": [
              "妈妈每天做很多菜",
              "可以经常去外面吃饭",
              "每天能吃到妈妈做的饭"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "这些年在国外，我很少自己做饭。",
            "en": "Over the years I spent abroad, I rarely cooked for myself."
          },
          {
            "speaker": "",
            "cn": "早饭我吃一个面包，有时候吃一块蛋糕，再喝一杯咖啡。",
            "en": "For breakfast, I would usually have a piece of bread, sometimes a slice of cake, and a cup of coffee."
          },
          {
            "speaker": "",
            "cn": "午饭和晚饭也都在外面吃。",
            "en": "I ate both lunch and dinner out."
          },
          {
            "speaker": "",
            "cn": "快要考试的时候又忙又累，没时间出去吃饭，家里又什么吃的都没有，我可能好几天只吃方便面。",
            "en": "During exam periods, when I was busy and exhausted, with no time to eat out and nothing at home, I could go for days surviving only on instant noodles."
          },
          {
            "speaker": "",
            "cn": "现在回到中国了，每天能吃到妈妈做的饭，我真是太高兴了！",
            "en": "Now that I'm back in China, being able to enjoy my mom's cooking every day makes me incredibly happy!"
          },
          {
            "speaker": "",
            "cn": "有时候妈妈只做几个简单的菜，我也非常爱吃，因为什么都没有妈妈做的饭好吃。",
            "en": "Even when she prepares just a few simple dishes, I love them all the same, because nothing in the world tastes better than a meal made by Mom."
          }
        ],
        "postQuestions": [
          {
            "q": "李文在国外经常做饭吗？"
          },
          {
            "q": "李文为什么好几天只吃方便面？"
          },
          {
            "q": "回到中国后什么事让他非常高兴？"
          }
        ],
        "words": [
          {
            "cn": "蛋糕",
            "pos": "n.",
            "en": "cake"
          },
          {
            "cn": "方便面",
            "pos": "n.",
            "en": "instant noodles"
          },
          {
            "cn": "只",
            "pos": "adv.",
            "en": "only"
          },
          {
            "cn": "简单",
            "pos": "adj.",
            "en": "simple"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-02/2-8.mp3"
      }
    ]
  },
  {
    "name": "L3 · 这个小区挺好的",
    "id": "3",
    "core": [
      {
        "hanzi": "初中",
        "en": "middle school"
      },
      {
        "hanzi": "咱们",
        "en": "we; us"
      },
      {
        "hanzi": "换",
        "en": "change"
      },
      {
        "hanzi": "房子",
        "en": "house"
      },
      {
        "hanzi": "小区",
        "en": "residential complex"
      },
      {
        "hanzi": "环境",
        "en": "surroundings; environment"
      },
      {
        "hanzi": "挺",
        "en": "quite; very"
      },
      {
        "hanzi": "空调",
        "en": "air conditioner"
      },
      {
        "hanzi": "洗衣机",
        "en": "washing machine"
      },
      {
        "hanzi": "层",
        "en": "floor"
      },
      {
        "hanzi": "花园",
        "en": "garden"
      },
      {
        "hanzi": "灯",
        "en": "light"
      },
      {
        "hanzi": "关",
        "en": "turn off"
      },
      {
        "hanzi": "冰箱",
        "en": "refrigerator; fridge"
      },
      {
        "hanzi": "卫生间",
        "en": "bathroom"
      },
      {
        "hanzi": "打扫",
        "en": "clean"
      },
      {
        "hanzi": "搬家",
        "en": "move (house)"
      },
      {
        "hanzi": "办",
        "en": "do; handle"
      },
      {
        "hanzi": "信用卡",
        "en": "credit card"
      },
      {
        "hanzi": "还",
        "en": "return"
      },
      {
        "hanzi": "听说",
        "en": "hear about"
      },
      {
        "hanzi": "银行",
        "en": "bank"
      },
      {
        "hanzi": "才",
        "en": "not until"
      },
      {
        "hanzi": "纸",
        "en": "paper"
      },
      {
        "hanzi": "搬",
        "en": "move"
      },
      {
        "hanzi": "需要",
        "en": "need"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "3-01",
        "title": {
          "cn": "聊换房子",
          "en": "Talking about moving",
          "emoji": "🏠"
        },
        "intro": {
          "cn": "在家里，刘明和王一雪在聊天。",
          "en": "At home, Liu Ming and Wang Yixue were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-03/3-1.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一雪和刘明想做什么？",
            "options": [
              "换房子",
              "买空调",
              "去女儿的初中"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "王一雪为什么不喜欢这个房子？",
            "options": [
              "房子太远",
              "她不喜欢住一层",
              "她不喜欢这个小区"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "王一雪",
            "cn": "小雪的初中离家有点儿远，咱们换一个近点儿的房子吧。",
            "en": "Since Xiaoxue's middle school is quite far from home, let's find a place to live that's closer."
          },
          {
            "speaker": "刘明",
            "cn": "好啊，我上网看看。你觉得这个小区怎么样？",
            "en": "Sounds good. I'll check online. What do you think about this neighborhood?"
          },
          {
            "speaker": "王一雪",
            "cn": "环境挺好的，离地铁站还不远。",
            "en": "The surroundings look quite nice, and it's not far from the subway station."
          },
          {
            "speaker": "刘明",
            "cn": "房子里面也不错，空调和洗衣机都是新的。",
            "en": "The inside of the apartment looks good, too. The air conditioner and washing machine are both new."
          },
          {
            "speaker": "王一雪",
            "cn": "是不错，但是我不喜欢住一层。",
            "en": "It is nice, but I'm not a fan of living on the first floor."
          },
          {
            "speaker": "刘明",
            "cn": "这个一层带一个小花园，我觉得咱们可以去看看。",
            "en": "This first-floor unit has a small garden. I think we should go and take a look anyway."
          }
        ],
        "postQuestions": [
          {
            "q": "他们为什么要换房子？"
          },
          {
            "q": "王一雪觉得新小区怎么样？"
          },
          {
            "q": "刘明为什么喜欢这个房子？"
          }
        ],
        "words": [
          {
            "cn": "初中",
            "pos": "n.",
            "en": "middle school"
          },
          {
            "cn": "咱们",
            "pos": "pron.",
            "en": "we; us"
          },
          {
            "cn": "换",
            "pos": "v.",
            "en": "change"
          },
          {
            "cn": "房子",
            "pos": "n.",
            "en": "house"
          },
          {
            "cn": "小区",
            "pos": "n.",
            "en": "residential complex"
          },
          {
            "cn": "环境",
            "pos": "n.",
            "en": "surroundings; environment"
          },
          {
            "cn": "挺",
            "pos": "adv.",
            "en": "quite; very"
          },
          {
            "cn": "空调",
            "pos": "n.",
            "en": "air conditioner"
          },
          {
            "cn": "洗衣机",
            "pos": "n.",
            "en": "washing machine"
          },
          {
            "cn": "层",
            "pos": "m.",
            "en": "floor"
          },
          {
            "cn": "花园",
            "pos": "n.",
            "en": "garden"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-03/3-2.mp3"
      },
      {
        "id": "3-02",
        "title": {
          "cn": "新家里的麻烦",
          "en": "Trouble at the new home",
          "emoji": "💡"
        },
        "intro": {
          "cn": "在新家，王一雪在收拾房间，刘明进来了。",
          "en": "In their new home, Wang Yixue was tidying up the room when Liu Ming came in."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-03/3-3.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "灯为什么开着？",
            "options": [
              "灯坏了",
              "是王一雪打开的",
              "刘明走的时候忘关了"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "现在新家是什么样的？",
            "options": [
              "冰箱是旧的",
              "洗衣机是坏的",
              "卫生间没打扫好"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "王一雪",
            "cn": "我今天早上来的时候，灯还开着。",
            "en": "When I came in this morning, the lights were still on."
          },
          {
            "speaker": "刘明",
            "cn": "我这几天忙坏了，可能走的时候忘关了。",
            "en": "I've been swamped these days. I probably forgot to turn them off when I left."
          },
          {
            "speaker": "王一雪",
            "cn": "冰箱不能用，这些吃的东西放在哪儿？",
            "en": "The fridge isn't working. Where should I put all this food?"
          },
          {
            "speaker": "刘明",
            "cn": "不可能吧？冰箱是新买的，我来看看。",
            "en": "That's impossible! It's brand new. Let me take a look."
          },
          {
            "speaker": "王一雪",
            "cn": "洗衣机也坏了吗？",
            "en": "Is the washing machine broken, too?"
          },
          {
            "speaker": "刘明",
            "cn": "没坏，但是卫生间没打扫好，还不能洗衣服。",
            "en": "No, it's fine. But the bathroom hasn't been cleaned yet, so we can't do the laundry."
          },
          {
            "speaker": "王一雪",
            "cn": "星期天我们真的能搬家吗？",
            "en": "Will we really be able to move this Sunday?"
          }
        ],
        "postQuestions": [
          {
            "q": "他们家的冰箱怎么了？"
          },
          {
            "q": "为什么不能洗衣服？"
          },
          {
            "q": "你觉得星期天他们能不能搬家？为什么？"
          }
        ],
        "words": [
          {
            "cn": "灯",
            "pos": "n.",
            "en": "light"
          },
          {
            "cn": "关",
            "pos": "v.",
            "en": "turn off"
          },
          {
            "cn": "冰箱",
            "pos": "n.",
            "en": "refrigerator; fridge"
          },
          {
            "cn": "卫生间",
            "pos": "n.",
            "en": "bathroom"
          },
          {
            "cn": "打扫",
            "pos": "v.",
            "en": "clean"
          },
          {
            "cn": "搬家",
            "pos": "v.",
            "en": "move (house)"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-03/3-4.mp3"
      },
      {
        "id": "3-03",
        "title": {
          "cn": "聊办信用卡",
          "en": "Talking about a credit card",
          "emoji": "💳"
        },
        "intro": {
          "cn": "在家里，刘明和王一雪在客厅聊天儿。",
          "en": "At home, Liu Ming and Wang Yixue were chatting in the living room."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-03/3-5.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一雪和刘明为什么这个月花了不少钱？",
            "options": [
              "买衣服了",
              "去饭店吃饭了",
              "买了很多搬家要用的东西"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "王一雪想去中国银行做什么？",
            "options": [
              "买东西",
              "还信用卡",
              "办信用卡"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "王一雪",
            "cn": "这个月花了不少钱。",
            "en": "We've spent quite a lot of money this month."
          },
          {
            "speaker": "刘明",
            "cn": "是的，我们买了很多搬家时要用的东西。",
            "en": "Yes, we bought a lot of things for the move."
          },
          {
            "speaker": "王一雪",
            "cn": "咱们办张信用卡吧，花的钱可以慢慢还。听说中国银行的服务不错，办了信用卡买东西还能便宜。",
            "en": "Let's get a credit card. That way, we can pay it off over time. I heard Bank of China offers good service, and we can even get discounts when shopping with their credit card."
          },
          {
            "speaker": "刘明",
            "cn": "好啊！中国银行很近，走路几分钟就能到。咱们什么时候去？",
            "en": "Great! There's a Bank of China branch nearby—just a few minutes' walk from here. When should we go?"
          },
          {
            "speaker": "王一雪",
            "cn": "今天下午？",
            "en": "How about this afternoon?"
          },
          {
            "speaker": "刘明",
            "cn": "我下午要去医院，很晚才能回来。",
            "en": "I have to go to the hospital this afternoon. I probably won't be back until late."
          },
          {
            "speaker": "王一雪",
            "cn": "那我下午自己去吧。",
            "en": "Then I'll go by myself this afternoon."
          }
        ],
        "postQuestions": [
          {
            "q": "王一雪为什么想办信用卡？"
          },
          {
            "q": "王一雪想什么时候去银行？"
          },
          {
            "q": "刘明为什么今天不能去银行？"
          }
        ],
        "words": [
          {
            "cn": "办",
            "pos": "v.",
            "en": "do; handle"
          },
          {
            "cn": "信用卡",
            "pos": "n.",
            "en": "credit card"
          },
          {
            "cn": "还",
            "pos": "v.",
            "en": "return"
          },
          {
            "cn": "听说",
            "pos": "v.",
            "en": "hear about"
          },
          {
            "cn": "银行",
            "pos": "n.",
            "en": "bank"
          },
          {
            "cn": "才",
            "pos": "adv.",
            "en": "not until"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-03/3-6.mp3"
      },
      {
        "id": "3-04",
        "title": {
          "cn": "讨论搬家计划",
          "en": "Discussing the moving plan",
          "emoji": "📦"
        },
        "intro": {
          "cn": "在家里，刘明和王一雪讨论搬家计划。",
          "en": "At home, Liu Ming and Wang Yixue were discussing their moving plans."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-03/3-7.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "刘明想什么时候搬家？",
            "options": [
              "明天",
              "这个星期",
              "下个星期"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "王一雪想什么时候搬家？",
            "options": [
              "这周",
              "下周",
              "下个月"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "刘明",
            "cn": "我觉得这个星期就能搬家。我明天去买一些纸箱，很快就能准备好。搬家那天，我想请几位朋友来帮忙，最多一天就能搬完。",
            "en": "I think we can move this week. I'll buy some cardboard boxes tomorrow, and we'll be ready in no time. On moving day, I'd like to ask a few friends to help. We can probably finish everything within a day."
          },
          {
            "speaker": "王一雪",
            "cn": "我觉得下个月才能搬家。这周开始准备，下周去打扫新家，这么多事情最少需要两个星期才能做完。搬家那天，我们应该找一家搬家公司。",
            "en": "I don't think we can move until next month. We can start preparing this week and clean the new place next week. With so much to do, we'll need at least two weeks to get everything done. On moving day, we should hire a moving company."
          }
        ],
        "postQuestions": [
          {
            "q": "刘明明天去买什么？"
          },
          {
            "q": "王一雪打算下周做什么？"
          },
          {
            "q": "刘明打算找谁搬家？王一雪呢？"
          }
        ],
        "words": [
          {
            "cn": "纸",
            "pos": "n.",
            "en": "paper"
          },
          {
            "cn": "搬",
            "pos": "v.",
            "en": "move"
          },
          {
            "cn": "需要",
            "pos": "v./n.",
            "en": "need"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-03/3-8.mp3"
      }
    ]
  },
  {
    "name": "L4 · 这家宾馆跟别的都不一样",
    "id": "4",
    "core": [
      {
        "hanzi": "假期",
        "en": "vacation; holiday"
      },
      {
        "hanzi": "海",
        "en": "sea"
      },
      {
        "hanzi": "草原",
        "en": "grassland"
      },
      {
        "hanzi": "主意",
        "en": "idea"
      },
      {
        "hanzi": "骑",
        "en": "ride"
      },
      {
        "hanzi": "马",
        "en": "horse"
      },
      {
        "hanzi": "羊",
        "en": "sheep; goat"
      },
      {
        "hanzi": "月亮",
        "en": "moon"
      },
      {
        "hanzi": "一定",
        "en": "certainly"
      },
      {
        "hanzi": "刻",
        "en": "(of an hour) quarter"
      },
      {
        "hanzi": "起飞",
        "en": "take off"
      },
      {
        "hanzi": "宾馆",
        "en": "hotel"
      },
      {
        "hanzi": "特别",
        "en": "special; adv. especially"
      },
      {
        "hanzi": "别的",
        "en": "other"
      },
      {
        "hanzi": "一样",
        "en": "the same"
      },
      {
        "hanzi": "牛",
        "en": "cattle"
      },
      {
        "hanzi": "相机",
        "en": "camera"
      },
      {
        "hanzi": "欢迎",
        "en": "welcome"
      },
      {
        "hanzi": "司机",
        "en": "driver"
      },
      {
        "hanzi": "晚点",
        "en": "(of a train, ship, etc.) be late"
      },
      {
        "hanzi": "久",
        "en": "long"
      },
      {
        "hanzi": "除了",
        "en": "besides; except; other than"
      },
      {
        "hanzi": "以外",
        "en": "except"
      },
      {
        "hanzi": "先",
        "en": "first"
      },
      {
        "hanzi": "一直",
        "en": "all along"
      },
      {
        "hanzi": "干净",
        "en": "clean"
      },
      {
        "hanzi": "满意",
        "en": "be satisfied"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "4-01",
        "title": {
          "cn": "假期去哪儿玩",
          "en": "Where to go for vacation",
          "emoji": "🏖️"
        },
        "intro": {
          "cn": "在王一飞家客厅，杨同乐和王一飞在聊天儿。",
          "en": "In Wang Yifei's living room, Yang Tongle and Wang Yifei were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-04/4-1.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一飞和杨同乐在说什么？",
            "options": [
              "明天的天气",
              "喜欢吃什么",
              "假期做什么"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "杨同乐觉得草原怎么样？",
            "options": [
              "草原天气不好",
              "草原比海边冷",
              "草原很有意思"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "杨同乐",
            "cn": "这个假期咱们去哪儿玩吧。",
            "en": "How about going somewhere for a vacation？"
          },
          {
            "speaker": "王一飞",
            "cn": "好啊，你想去哪儿，咱们就去哪儿。",
            "en": "Sure, we can go wherever you'd like."
          },
          {
            "speaker": "杨同乐",
            "cn": "你喜欢海，找个海边住几天，怎么样？",
            "en": "You like the sea—how about staying by the coast for a few days？"
          },
          {
            "speaker": "王一飞",
            "cn": "现在去海边有点儿冷。",
            "en": "It's a bit too cold to go to the seaside now."
          },
          {
            "speaker": "杨同乐",
            "cn": "那去草原吧？草原一点儿也不冷。",
            "en": "Then let's go to the grasslands. It's not cold there at all."
          },
          {
            "speaker": "王一飞",
            "cn": "这个主意好！我好久没骑马了。",
            "en": "Great idea! I haven't ridden a horse in ages."
          },
          {
            "speaker": "杨同乐",
            "cn": "对，在草原上骑马、吃羊肉、看月亮，一定很有意思。",
            "en": "Exactly! Riding horses, eating mutton, and watching the moon on the grasslands must be wonderful."
          }
        ],
        "postQuestions": [
          {
            "q": "王一飞为什么不想去海边？"
          },
          {
            "q": "王一飞为什么觉得去草原好？"
          },
          {
            "q": "他们在草原上可以做什么？"
          }
        ],
        "words": [
          {
            "cn": "假期",
            "pos": "n.",
            "en": "vacation; holiday"
          },
          {
            "cn": "海",
            "pos": "n.",
            "en": "sea"
          },
          {
            "cn": "草原",
            "pos": "n.",
            "en": "grassland"
          },
          {
            "cn": "主意",
            "pos": "n.",
            "en": "idea"
          },
          {
            "cn": "骑",
            "pos": "v.",
            "en": "ride"
          },
          {
            "cn": "马",
            "pos": "n.",
            "en": "horse"
          },
          {
            "cn": "羊",
            "pos": "n.",
            "en": "sheep; goat"
          },
          {
            "cn": "月亮",
            "pos": "n.",
            "en": "moon"
          },
          {
            "cn": "一定",
            "pos": "adv.",
            "en": "certainly"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-04/4-2.mp3"
      },
      {
        "id": "4-02",
        "title": {
          "cn": "机票和宾馆都订好了",
          "en": "Tickets and hotel are booked",
          "emoji": "✈️"
        },
        "intro": {
          "cn": "在王一飞家客厅，杨同乐和王一飞在聊天儿。",
          "en": "In Wang Yifei's living room, Yang Tongle and Wang Yifei were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-04/4-3.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一飞觉得这次出去玩要带什么东西？",
            "options": [
              "什么都不用带",
              "带新买的相机",
              "要带很多东西"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "杨同乐现在去做什么？",
            "options": [
              "买机票",
              "选宾馆",
              "准备行李"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "杨同乐",
            "cn": "出去玩的机票买好了吗？",
            "en": "Have you booked the plane tickets for our trip？"
          },
          {
            "speaker": "王一飞",
            "cn": "买好了。星期六上午十点一刻起飞。",
            "en": "Yes, I have. The flight departs at a quarter past ten on Saturday morning."
          },
          {
            "speaker": "杨同乐",
            "cn": "宾馆也选好了吗？",
            "en": "Have you chosen the hotel as well？"
          },
          {
            "speaker": "王一飞",
            "cn": "是的，这家宾馆很特别，跟别的都不一样，一出门就能看见牛和羊！",
            "en": "Yes. This hotel is really special—it's unlike any other. The moment you step outside, you can see cows and sheep！"
          },
          {
            "speaker": "杨同乐",
            "cn": "太好了！你看看要带什么东西？",
            "en": "Perfect! Let's check what we need to take."
          },
          {
            "speaker": "王一飞",
            "cn": "我们不用带太多东西，别忘了拿上新买的相机。",
            "en": "We don't need to bring too much. Just don't forget the new camera we bought."
          },
          {
            "speaker": "杨同乐",
            "cn": "一定不会忘带的。我现在就去准备行李。",
            "en": "I definitely won't. I'll go pack right now."
          }
        ],
        "postQuestions": [
          {
            "q": "他们什么时候坐飞机出去玩？"
          },
          {
            "q": "王一飞选的宾馆怎么样？"
          },
          {
            "q": "杨同乐说一定不会忘带什么？"
          }
        ],
        "words": [
          {
            "cn": "刻",
            "pos": "m.",
            "en": "(of an hour) quarter"
          },
          {
            "cn": "起飞",
            "pos": "v.",
            "en": "take off"
          },
          {
            "cn": "宾馆",
            "pos": "n.",
            "en": "hotel"
          },
          {
            "cn": "特别",
            "pos": "adj.",
            "en": "special; adv. especially"
          },
          {
            "cn": "别的",
            "pos": "pron.",
            "en": "other"
          },
          {
            "cn": "一样",
            "pos": "adj.",
            "en": "the same"
          },
          {
            "cn": "牛",
            "pos": "n.",
            "en": "cattle"
          },
          {
            "cn": "相机",
            "pos": "n.",
            "en": "camera"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-04/4-4.mp3"
      },
      {
        "id": "4-03",
        "title": {
          "cn": "见到司机小李",
          "en": "Meeting driver Xiao Li",
          "emoji": "🚗"
        },
        "intro": {
          "cn": "在机场，杨同乐和王一飞走出来，跟他们预约的司机兼导游见面。",
          "en": "At the airport, Yang Tongle and Wang Yifei came out and met the driver-guide they had booked."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-04/4-5.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "小李是谁？",
            "options": [
              "同乐的朋友",
              "同乐的司机",
              "宾馆的服务员"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "他们到宾馆后先做什么？",
            "options": [
              "休息",
              "吃晚饭",
              "等朋友"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "小李",
            "cn": "欢迎你们！我是你们的司机，我姓李，叫我小李就可以。",
            "en": "Welcome! I'm your driver. My last name is Li—just call me Xiao Li."
          },
          {
            "speaker": "杨同乐",
            "cn": "您好！不好意思，飞机晚点了，让您久等了。",
            "en": "Hello! I'm sorry our flight was delayed, and you've been waiting for a long time."
          },
          {
            "speaker": "小李",
            "cn": "没关系。除了这个行李箱以外，还有别的东西吗？",
            "en": "That's all right. Besides this suitcase, do you have anything else？"
          },
          {
            "speaker": "杨同乐",
            "cn": "还有一个包，我自己拿就可以。",
            "en": "Just one more bag—I can carry it myself."
          },
          {
            "speaker": "小李",
            "cn": "车在一层，请跟我来。",
            "en": "The car is on the first floor. Please follow me."
          },
          {
            "speaker": "杨同乐",
            "cn": "我们住的宾馆离机场远吗？",
            "en": "Is our hotel far from the airport？"
          },
          {
            "speaker": "小李",
            "cn": "不远，三十分钟就能到。两位到了可以先休息休息，晚饭的时候我叫你们。",
            "en": "Not far—we'll get there in about thirty minutes. Once you arrive, you can take a short rest first. I'll call you when it's time for dinner."
          }
        ],
        "postQuestions": [
          {
            "q": "他们为什么到晚了？"
          },
          {
            "q": "他们有几个行李箱？"
          },
          {
            "q": "宾馆离机场远吗？"
          }
        ],
        "words": [
          {
            "cn": "欢迎",
            "pos": "v.",
            "en": "welcome"
          },
          {
            "cn": "司机",
            "pos": "n.",
            "en": "driver"
          },
          {
            "cn": "晚点",
            "pos": "v.",
            "en": "(of a train, ship, etc.) be late"
          },
          {
            "cn": "久",
            "pos": "adj.",
            "en": "long"
          },
          {
            "cn": "除了",
            "pos": "prep.",
            "en": "besides; except; other than"
          },
          {
            "cn": "以外",
            "pos": "n.",
            "en": "except"
          },
          {
            "cn": "先",
            "pos": "adv.",
            "en": "first"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-04/4-6.mp3"
      },
      {
        "id": "4-04",
        "title": {
          "cn": "王一飞的日记",
          "en": "Wang Yifei's diary",
          "emoji": "📔"
        },
        "intro": {
          "cn": "在宾馆房间，王一飞在写日记。",
          "en": "In the hotel room, Wang Yifei was writing in her diary."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-04/4-7.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "飞机晚点后，司机做什么了？",
            "options": [
              "去宾馆了",
              "去买水果了",
              "一直在机场等"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "他们是什么时候到的？",
            "options": [
              "上午",
              "中午",
              "晚上"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "今天是我们旅游的第一天。",
            "en": "Today is the first day of our trip."
          },
          {
            "speaker": "",
            "cn": "我们很早就起床去机场了，没想到飞机晚点了。",
            "en": "We got up very early to go to the airport, but to our surprise, the flight was delayed."
          },
          {
            "speaker": "",
            "cn": "我们到的时候，天已经黑了，但是司机小李一直在机场等我们，一点儿也没着急。",
            "en": "By the time we arrived, it was already dark. Fortunately, our driver, Xiao Li, had been waiting for us at the airport all along and wasn't the least bit impatient."
          },
          {
            "speaker": "",
            "cn": "他特别热情，路上给我们介绍了很多东西，还准备了水果。",
            "en": "He was extremely warm and friendly, telling us a lot about the local area along the way and even preparing some fruit for us."
          },
          {
            "speaker": "",
            "cn": "宾馆的房间跟我想的一样漂亮，又大又干净，我非常满意。",
            "en": "The hotel room is just as beautiful as I imagined—spacious and clean. I'm very satisfied with it."
          }
        ],
        "postQuestions": [
          {
            "q": "他们是怎么去宾馆的？"
          },
          {
            "q": "王一飞为什么觉得小李很热情？"
          },
          {
            "q": "宾馆的房间怎么样？"
          }
        ],
        "words": [
          {
            "cn": "一直",
            "pos": "adv.",
            "en": "all along"
          },
          {
            "cn": "干净",
            "pos": "adj.",
            "en": "clean"
          },
          {
            "cn": "满意",
            "pos": "v.",
            "en": "be satisfied"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-04/4-8.mp3"
      }
    ]
  },
  {
    "name": "L5 · 这样的照片才好看",
    "id": "5",
    "core": [
      {
        "hanzi": "总是",
        "en": "always"
      },
      {
        "hanzi": "终于",
        "en": "finally"
      },
      {
        "hanzi": "爬",
        "en": "climb"
      },
      {
        "hanzi": "山",
        "en": "mountain; hill"
      },
      {
        "hanzi": "锻炼",
        "en": "take exercise"
      },
      {
        "hanzi": "照",
        "en": "take a picture"
      },
      {
        "hanzi": "鞋",
        "en": "shoe"
      },
      {
        "hanzi": "大衣",
        "en": "overcoat"
      },
      {
        "hanzi": "拍照",
        "en": "take a picture"
      },
      {
        "hanzi": "感兴趣",
        "en": "be interested in"
      },
      {
        "hanzi": "照相",
        "en": "take a picture"
      },
      {
        "hanzi": "难看",
        "en": "bad-looking; ugly"
      },
      {
        "hanzi": "比较",
        "en": "compare; relatively"
      },
      {
        "hanzi": "水平",
        "en": "level"
      },
      {
        "hanzi": "太阳",
        "en": "sun"
      },
      {
        "hanzi": "树",
        "en": "tree"
      },
      {
        "hanzi": "干",
        "en": "do"
      },
      {
        "hanzi": "电",
        "en": "electricity"
      },
      {
        "hanzi": "收到",
        "en": "receive"
      },
      {
        "hanzi": "封",
        "en": "(for letters or mail)"
      },
      {
        "hanzi": "邮件",
        "en": "email"
      },
      {
        "hanzi": "难过",
        "en": "sad"
      },
      {
        "hanzi": "哈哈",
        "en": "(indicating laughter)"
      },
      {
        "hanzi": "音乐",
        "en": "music"
      },
      {
        "hanzi": "兴趣",
        "en": "interest"
      },
      {
        "hanzi": "会",
        "en": "gathering; party"
      },
      {
        "hanzi": "结束",
        "en": "finish"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "5-01",
        "title": {
          "cn": "约着去爬山",
          "en": "Planning to go hiking",
          "emoji": "⛰️"
        },
        "intro": {
          "cn": "在街上，白家月和李文边散步边聊天儿。",
          "en": "On the street, Bai Jiayue and Li Wen were chatting while walking."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-05/5-1.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "今天天气怎么样？",
            "options": [
              "阴天",
              "很热",
              "晴天"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "白家月为什么要给王一雪打电话？",
            "options": [
              "找她吃饭",
              "问她天气",
              "找她爬山"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "白家月",
            "cn": "这个星期总是阴天，今天终于晴了。",
            "en": "It's been cloudy all week, but it's sunny today."
          },
          {
            "speaker": "李文",
            "cn": "现在天气好得很！我们去爬山怎么样？",
            "en": "The weather is perfect now! How about going hiking？"
          },
          {
            "speaker": "白家月",
            "cn": "好啊！又能锻炼身体，又能照好看的照片。",
            "en": "Great idea! We can get some exercise and take some nice photos."
          },
          {
            "speaker": "李文",
            "cn": "那我带点儿水和吃的，咱们现在就去？",
            "en": "I'll bring some water and snacks. Shall we go now？"
          },
          {
            "speaker": "白家月",
            "cn": "我回去穿上运动鞋，拿上大衣。要不要叫一雪姐一起去？",
            "en": "I'll go back to change into my sneakers and grab my overcoat. Should we invite Yixue to join us？"
          },
          {
            "speaker": "李文",
            "cn": "好主意。给她打个电话吧。",
            "en": "Good idea. Let's give her a call."
          }
        ],
        "postQuestions": [
          {
            "q": "白家月觉得爬山怎么样？"
          },
          {
            "q": "李文要带什么东西？"
          },
          {
            "q": "白家月要先回去做什么？"
          }
        ],
        "words": [
          {
            "cn": "总是",
            "pos": "adv.",
            "en": "always"
          },
          {
            "cn": "终于",
            "pos": "adv.",
            "en": "finally"
          },
          {
            "cn": "爬",
            "pos": "v.",
            "en": "climb"
          },
          {
            "cn": "山",
            "pos": "n.",
            "en": "mountain; hill"
          },
          {
            "cn": "锻炼",
            "pos": "v.",
            "en": "take exercise"
          },
          {
            "cn": "照",
            "pos": "v.",
            "en": "take a picture"
          },
          {
            "cn": "鞋",
            "pos": "n.",
            "en": "shoe"
          },
          {
            "cn": "大衣",
            "pos": "n.",
            "en": "overcoat"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-05/5-2.mp3"
      },
      {
        "id": "5-02",
        "title": {
          "cn": "出租车上看照片",
          "en": "Looking at photos in the taxi",
          "emoji": "📷"
        },
        "intro": {
          "cn": "在出租车上，王一雪和白家月在聊天儿。",
          "en": "In the taxi, Wang Yixue and Bai Jiayue were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-05/5-3.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一雪和白家月在做什么？",
            "options": [
              "拍照",
              "买相机",
              "看照片"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "白家月和王一飞都喜欢做什么？",
            "options": [
              "拍照",
              "爬山",
              "比较拍照水平"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "白家月",
            "cn": "这些照片是谁给您照的？张张都非常好看。",
            "en": "Who took these photos for you？ Every one of them looks great."
          },
          {
            "speaker": "王一雪",
            "cn": "一飞。她对拍照一直很感兴趣，经常给我照相。",
            "en": "Yifei. She's always been interested in photography and often takes pictures of me."
          },
          {
            "speaker": "白家月",
            "cn": "我喜欢您大笑的这张，看起来很漂亮。",
            "en": "I really like this one where you're laughing—you look so pretty."
          },
          {
            "speaker": "王一雪",
            "cn": "我觉得这张有点儿难看，那时候我不知道她在给我照相。",
            "en": "I think this one is a bit unflattering. I didn't realize she was taking a picture of me at the time."
          },
          {
            "speaker": "白家月",
            "cn": "这样的照片才好看。我也喜欢拍照，爬山的时候我给您照几张照片吧。",
            "en": "That's exactly what makes it so great! I like taking photos too. How about I take some pictures of you when we go hiking？"
          },
          {
            "speaker": "王一雪",
            "cn": "好，我可以比较一下你们两个谁的水平高。",
            "en": "Great! Then I can compare which of you two has the better photography skills."
          }
        ],
        "postQuestions": [
          {
            "q": "白家月喜欢哪张照片？为什么？"
          },
          {
            "q": "王一雪为什么不喜欢这张照片？"
          },
          {
            "q": "爬山的时候，白家月打算做什么？"
          }
        ],
        "words": [
          {
            "cn": "拍照",
            "pos": "v.",
            "en": "take a picture"
          },
          {
            "cn": "感兴趣",
            "pos": "",
            "en": "be interested in"
          },
          {
            "cn": "照相",
            "pos": "v.",
            "en": "take a picture"
          },
          {
            "cn": "难看",
            "pos": "adj.",
            "en": "bad-looking; ugly"
          },
          {
            "cn": "比较",
            "pos": "v./adv.",
            "en": "compare; relatively"
          },
          {
            "cn": "水平",
            "pos": "n.",
            "en": "level"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-05/5-4.mp3"
      },
      {
        "id": "5-03",
        "title": {
          "cn": "在山上拍照",
          "en": "Taking photos on the hill",
          "emoji": "🌳"
        },
        "intro": {
          "cn": "在山上，王一雪和白家月边走边聊。",
          "en": "On the hill, Wang Yixue and Bai Jiayue were chatting while walking."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-05/5-5.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "白家月和王一雪在做什么？",
            "options": [
              "拍照",
              "看鸟",
              "找手机"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "拍照的时候，白家月让王一雪干什么？",
            "options": [
              "看着她",
              "看着鸟",
              "想干什么就干什么"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "王一雪",
            "cn": "家月，这里挺漂亮的，咱们在这里拍照吧。",
            "en": "Jiayue, it's really beautiful here. Let's take some pictures at this spot."
          },
          {
            "speaker": "白家月",
            "cn": "这边没有太阳，咱们去那边吧。",
            "en": "There's no sunlight here. Let's go over there instead."
          },
          {
            "speaker": "王一雪",
            "cn": "好。你觉得我站在这些树中间怎么样？",
            "en": "Alright. What do you think of me standing among these trees？"
          },
          {
            "speaker": "白家月",
            "cn": "挺好的。等一下，后边走过去两个人。",
            "en": "That looks good. Wait a moment—two people are walking behind you."
          },
          {
            "speaker": "王一雪",
            "cn": "我准备好了，你照的时候告诉我。",
            "en": "I'm ready. Tell me when you're going to take the photo."
          },
          {
            "speaker": "白家月",
            "cn": "你不用看着我，想干什么都可以。",
            "en": "You don't have to look at me. Just do whatever feels natural."
          },
          {
            "speaker": "王一雪",
            "cn": "树上飞来了几只鸟，我就看它们吧。",
            "en": "Some birds just flew onto the tree. I'll watch them then."
          },
          {
            "speaker": "白家月",
            "cn": "啊，手机没电了。",
            "en": "Oh no, the phone's out of battery."
          }
        ],
        "postQuestions": [
          {
            "q": "王一雪想站在哪儿拍照？"
          },
          {
            "q": "白家月为什么要等一下再照？"
          },
          {
            "q": "白家月的手机怎么了？"
          }
        ],
        "words": [
          {
            "cn": "太阳",
            "pos": "n.",
            "en": "sun"
          },
          {
            "cn": "树",
            "pos": "n.",
            "en": "tree"
          },
          {
            "cn": "干",
            "pos": "v.",
            "en": "do"
          },
          {
            "cn": "电",
            "pos": "n.",
            "en": "electricity"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-05/5-6.mp3"
      },
      {
        "id": "5-04",
        "title": {
          "cn": "王一雪的短信",
          "en": "Wang Yixue's text message",
          "emoji": "💬"
        },
        "intro": {
          "cn": "在咖啡厅里，王一雪给白家月发短信。",
          "en": "In the cafe, Wang Yixue sent a text message to Bai Jiayue."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-05/5-7.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一雪觉得照片怎么样？",
            "options": [
              "她还没看到",
              "每张都很漂亮",
              "没有一飞照得好"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "王一雪送给白家月什么了？",
            "options": [
              "一些照片",
              "一张门票",
              "她做的中国菜"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "家月，我收到了你的那封邮件，也看到了你给我照的照片，张张都很漂亮。",
            "en": "Jiayue, I received your email and saw the photos you took of me—every single one is beautiful."
          },
          {
            "speaker": "",
            "cn": "我已经告诉了一飞，你的拍照水平比她高，她难过得很，哈哈。",
            "en": "I've already told Yifei that your photography skills are better than hers, and she's quite upset about it. Haha."
          },
          {
            "speaker": "",
            "cn": "不知道你对中国的音乐有没有兴趣？我送你一张明天下午音乐会的门票。",
            "en": "I'm wondering if you're interested in Chinese music. I have a ticket for tomorrow afternoon's concert for you."
          },
          {
            "speaker": "",
            "cn": "音乐会七点多结束，你听完了音乐会就来我家吃饭，尝尝我做的中国菜。",
            "en": "The concert will finish a little after 7 p.m. Once it's over, come to my place for dinner and try some of my homemade Chinese dishes."
          },
          {
            "speaker": "",
            "cn": "你觉得怎么样？",
            "en": "What do you think？"
          }
        ],
        "postQuestions": [
          {
            "q": "王一雪觉得白家月的拍照水平怎么样？"
          },
          {
            "q": "音乐会什么时候结束？"
          },
          {
            "q": "听完音乐会，白家月可能做什么？"
          }
        ],
        "words": [
          {
            "cn": "收到",
            "pos": "v.",
            "en": "receive"
          },
          {
            "cn": "封",
            "pos": "m.",
            "en": "(for letters or mail)"
          },
          {
            "cn": "邮件",
            "pos": "n.",
            "en": "email"
          },
          {
            "cn": "难过",
            "pos": "adj.",
            "en": "sad"
          },
          {
            "cn": "哈哈",
            "pos": "",
            "en": "(indicating laughter)"
          },
          {
            "cn": "音乐",
            "pos": "n.",
            "en": "music"
          },
          {
            "cn": "兴趣",
            "pos": "n.",
            "en": "interest"
          },
          {
            "cn": "会",
            "pos": "n.",
            "en": "gathering; party"
          },
          {
            "cn": "结束",
            "pos": "v.",
            "en": "finish"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-05/5-8.mp3"
      }
    ]
  },
  {
    "name": "L6 · 高铁上还可以点外卖",
    "id": "6",
    "core": [
      {
        "hanzi": "该",
        "en": "should"
      },
      {
        "hanzi": "打算",
        "en": "plan; intention"
      },
      {
        "hanzi": "高铁",
        "en": "high-speed train"
      },
      {
        "hanzi": "行",
        "en": "be all right; capable"
      },
      {
        "hanzi": "路口",
        "en": "intersection; crossing"
      },
      {
        "hanzi": "小心",
        "en": "take care; careful"
      },
      {
        "hanzi": "迟到",
        "en": "be late"
      },
      {
        "hanzi": "红绿灯",
        "en": "traffic lights"
      },
      {
        "hanzi": "后来",
        "en": "afterward; later"
      },
      {
        "hanzi": "急",
        "en": "urgent; be anxious"
      },
      {
        "hanzi": "如果",
        "en": "if"
      },
      {
        "hanzi": "以前",
        "en": "earlier times"
      },
      {
        "hanzi": "耳机",
        "en": "earphone; headphone"
      },
      {
        "hanzi": "充电宝",
        "en": "power bank"
      },
      {
        "hanzi": "常用",
        "en": "commonly used"
      },
      {
        "hanzi": "越",
        "en": "the more...the more..."
      },
      {
        "hanzi": "分开",
        "en": "separate"
      },
      {
        "hanzi": "检查",
        "en": "check (up); inspect"
      },
      {
        "hanzi": "刷",
        "en": "scan"
      },
      {
        "hanzi": "检票",
        "en": "check/inspect tickets"
      },
      {
        "hanzi": "电梯",
        "en": "elevator; escalator"
      },
      {
        "hanzi": "放假",
        "en": "have a vacation"
      },
      {
        "hanzi": "沙发",
        "en": "sofa"
      },
      {
        "hanzi": "安静",
        "en": "quiet"
      },
      {
        "hanzi": "选择",
        "en": "choose"
      },
      {
        "hanzi": "必须",
        "en": "have to; must"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "6-01",
        "title": {
          "cn": "商量买高铁票",
          "en": "Talking about buying train tickets",
          "emoji": "🚄"
        },
        "intro": {
          "cn": "在咖啡厅里，李文和白家月在聊天儿。",
          "en": "In the cafe, Li Wen and Bai Jiayue were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-06/6-1.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "李文和白家月打算怎么去上海？",
            "options": [
              "开车",
              "坐飞机",
              "坐高铁"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "李文觉得高铁怎么样？",
            "options": [
              "高铁票很贵",
              "又快又舒服",
              "买票不方便"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "李文",
            "cn": "家月，咱们该买去上海的票了。你打算怎么去上海？",
            "en": "Jiayue, it's time to buy our tickets to Shanghai. How do you want to get there？"
          },
          {
            "speaker": "白家月",
            "cn": "我还没坐过高铁，咱们坐高铁去，怎么样？",
            "en": "I've never taken a high-speed train before. How about we go by high-speed train？"
          },
          {
            "speaker": "李文",
            "cn": "没问题，从北京到上海的高铁很多，非常方便。",
            "en": "No problem. There are many high-speed trains from Beijing to Shanghai—it's very convenient."
          },
          {
            "speaker": "白家月",
            "cn": "行！怎么买高铁票？",
            "en": "Great! How do we buy the tickets？"
          },
          {
            "speaker": "李文",
            "cn": "用手机App就能买。给我你的护照，我帮你买。",
            "en": "We can buy them on a mobile App. Give me your passport, and I'll get them for you."
          },
          {
            "speaker": "白家月",
            "cn": "我早就听说过高铁，终于可以坐上了。",
            "en": "I've heard about the high-speed train for a long time. I'm glad I can finally take it."
          },
          {
            "speaker": "李文",
            "cn": "高铁又快又舒服，你一定会喜欢的。",
            "en": "It's fast and comfortable—you're going to love it."
          }
        ],
        "postQuestions": [
          {
            "q": "李文和白家月打算去哪个城市？"
          },
          {
            "q": "白家月为什么想坐高铁？"
          },
          {
            "q": "他们打算怎么买高铁票？"
          }
        ],
        "words": [
          {
            "cn": "该",
            "pos": "mod.",
            "en": "should"
          },
          {
            "cn": "打算",
            "pos": "v./n.",
            "en": "plan; intention"
          },
          {
            "cn": "高铁",
            "pos": "n.",
            "en": "high-speed train"
          },
          {
            "cn": "行",
            "pos": "v./adj.",
            "en": "be all right; capable"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-06/6-2.mp3"
      },
      {
        "id": "6-02",
        "title": {
          "cn": "去高铁站的路上",
          "en": "On the way to the station",
          "emoji": "🚗"
        },
        "intro": {
          "cn": "在车上，刘明开车送白家月和李文去高铁站。",
          "en": "In the car, Liu Ming was driving Bai Jiayue and Li Wen to the high-speed train station."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-06/6-3.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "李文和白家月现在在哪儿？",
            "options": [
              "在高铁站",
              "在出租车上",
              "在刘明的车上"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "如果没走错，他们什么时候到？",
            "options": [
              "马上就到了",
              "二十分钟以前就到了",
              "一个小时以前就到了"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "刘明",
            "cn": "过了前面的路口就到高铁站了。",
            "en": "Once we pass the intersection up ahead, we'll reach the high-speed train station."
          },
          {
            "speaker": "白家月",
            "cn": "我看见了。马上就到了，这条路车很多，您小心点儿。",
            "en": "I see it. We'll be there soon. There are a lot of cars on this road. Please drive carefully."
          },
          {
            "speaker": "刘明",
            "cn": "好，你们还有一个小时，应该不会迟到的。",
            "en": "Okay. You still have an hour, so you probably won't be late."
          },
          {
            "speaker": "白家月",
            "cn": "我发现这条路车多，红绿灯也多。",
            "en": "I've noticed that this road not only has heavy traffic but also many traffic lights."
          },
          {
            "speaker": "刘明",
            "cn": "是啊，这条路我走过一次，后来再也不走了。",
            "en": "Yeah, I took this road once before and never used it again afterward."
          },
          {
            "speaker": "白家月",
            "cn": "那您今天为什么走了这条路？",
            "en": "Then why did you take it today？"
          },
          {
            "speaker": "刘明",
            "cn": "我一急就走错了。如果没走错，二十分钟以前就到了。",
            "en": "I got anxious and took a wrong turn. If I hadn't, we would've arrived twenty minutes earlier."
          }
        ],
        "postQuestions": [
          {
            "q": "刘明为什么说“应该不会迟到”？"
          },
          {
            "q": "白家月觉得这条路有什么问题？"
          },
          {
            "q": "刘明为什么今天走了这条路？"
          }
        ],
        "words": [
          {
            "cn": "路口",
            "pos": "n.",
            "en": "intersection; crossing"
          },
          {
            "cn": "小心",
            "pos": "v./adj.",
            "en": "take care; careful"
          },
          {
            "cn": "迟到",
            "pos": "v.",
            "en": "be late"
          },
          {
            "cn": "红绿灯",
            "pos": "n.",
            "en": "traffic lights"
          },
          {
            "cn": "后来",
            "pos": "n.",
            "en": "afterward; later"
          },
          {
            "cn": "急",
            "pos": "adj./v.",
            "en": "urgent; be anxious"
          },
          {
            "cn": "如果",
            "pos": "conj.",
            "en": "if"
          },
          {
            "cn": "以前",
            "pos": "n.",
            "en": "earlier times"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-06/6-4.mp3"
      },
      {
        "id": "6-03",
        "title": {
          "cn": "在高铁站检票",
          "en": "Ticket check at the station",
          "emoji": "🎫"
        },
        "intro": {
          "cn": "在高铁站，李文和白家月排队安检、检票。",
          "en": "At the high-speed train station, Li Wen and Bai Jiayue were waiting in line for security check and ticket inspection."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-06/6-5.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "常用的东西李文放在哪里？",
            "options": [
              "手里",
              "包里",
              "行李箱里"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "他们在哪里检票进站？",
            "options": [
              "车站门口",
              "一层门口",
              "二层检票口"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "白家月",
            "cn": "李文，我的耳机没电了，你有充电宝吗？",
            "en": "Li Wen, my earphones are out of battery. Do you have a power bank？"
          },
          {
            "speaker": "李文",
            "cn": "有，这些常用的东西我都放在包里了，我给你拿。",
            "en": "Yes, I keep all these daily essentials in my bag. Let me get it for you."
          },
          {
            "speaker": "白家月",
            "cn": "前面的人越来越多。",
            "en": "There are more and more people ahead of us."
          },
          {
            "speaker": "李文",
            "cn": "对，马上就进高铁站了。咱们一起走，别分开。",
            "en": "Right, we're about to enter the high-speed train station. Let's stay together and don't get separated."
          },
          {
            "speaker": "白家月",
            "cn": "好，你检查一下，高铁票都拿好了吗？",
            "en": "Okay, could you check if we've got all the high-speed train tickets？"
          },
          {
            "speaker": "李文",
            "cn": "不用拿票，刷护照就能检票进站。",
            "en": "No need for a paper ticket. You can just scan your passport to enter."
          },
          {
            "speaker": "白家月",
            "cn": "去哪里检票？",
            "en": "Where do we do the ticket check？"
          },
          {
            "speaker": "李文",
            "cn": "检票口在二层，我们一会儿坐电梯上去。",
            "en": "The ticket gates are on the second floor. We'll take the elevator up in a moment."
          }
        ],
        "postQuestions": [
          {
            "q": "白家月为什么要用充电宝？"
          },
          {
            "q": "他们怎么检票进站？"
          },
          {
            "q": "他们怎么去检票口？"
          }
        ],
        "words": [
          {
            "cn": "耳机",
            "pos": "n.",
            "en": "earphone; headphone"
          },
          {
            "cn": "充电宝",
            "pos": "n.",
            "en": "power bank"
          },
          {
            "cn": "常用",
            "pos": "",
            "en": "commonly used"
          },
          {
            "cn": "越",
            "pos": "adv.",
            "en": "the more...the more..."
          },
          {
            "cn": "分开",
            "pos": "v.",
            "en": "separate"
          },
          {
            "cn": "检查",
            "pos": "v.",
            "en": "check (up); inspect"
          },
          {
            "cn": "刷",
            "pos": "v.",
            "en": "scan"
          },
          {
            "cn": "检票",
            "pos": "v.",
            "en": "check/inspect tickets"
          },
          {
            "cn": "电梯",
            "pos": "n.",
            "en": "elevator; escalator"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-06/6-6.mp3"
      },
      {
        "id": "6-04",
        "title": {
          "cn": "白家月的旅行",
          "en": "Bai Jiayue's trip",
          "emoji": "🍜"
        },
        "intro": {
          "cn": "在家里，白家月给安妮打电话介绍自己的旅行。",
          "en": "At home, Bai Jiayue was calling Annie to tell her about her trip."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-06/6-7.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "白家月觉得坐高铁怎么样？",
            "options": [
              "高铁站很远",
              "高铁上很舒服",
              "高铁上人很多"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "喜欢坐高铁的人多不多？",
            "options": [
              "不太多",
              "有点儿多",
              "越来越多"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "这次放假，我去了北京，还去了上海。",
            "en": "During the vacation, I went to Beijing and also visited Shanghai."
          },
          {
            "speaker": "",
            "cn": "我是从北京南站坐高铁去的上海。",
            "en": "I took the high-speed train from Beijing South Railway Station to Shanghai."
          },
          {
            "speaker": "",
            "cn": "我觉得坐在高铁上跟坐在家里的沙发上一样，又安静又舒服。",
            "en": "Sitting on the train felt just like sitting on my sofa at home. It's quiet and comfortable."
          },
          {
            "speaker": "",
            "cn": "坐累了就站一会儿，饿了就点外卖。",
            "en": "When I got tired of sitting, I stood up for a while; when I got hungry, I ordered takeout."
          },
          {
            "speaker": "",
            "cn": "对，你没听错，高铁上可以点外卖，只需要选择好车站和想吃的东西，到站时不用下车，服务员就会给你拿过来。",
            "en": "Yes, you heard that right—you can order takeout on a high-speed train! Just select your station and the food you want, and you don't need to get off the train when it arrives—the staff will bring it to you."
          },
          {
            "speaker": "",
            "cn": "现在喜欢坐高铁的人越来越多。",
            "en": "Now, more and more people prefer traveling by high-speed train."
          },
          {
            "speaker": "",
            "cn": "我爸妈来中国旅游的时候，必须带他们也坐一次高铁。",
            "en": "When my parents come to China for a visit, I'll definitely take them on a high-speed train ride."
          }
        ],
        "postQuestions": [
          {
            "q": "白家月是怎么去上海的？"
          },
          {
            "q": "高铁上怎么点外卖？"
          },
          {
            "q": "白家月想带谁坐高铁？"
          }
        ],
        "words": [
          {
            "cn": "放假",
            "pos": "v.",
            "en": "have a vacation"
          },
          {
            "cn": "沙发",
            "pos": "n.",
            "en": "sofa"
          },
          {
            "cn": "安静",
            "pos": "adj.",
            "en": "quiet"
          },
          {
            "cn": "选择",
            "pos": "v.",
            "en": "choose"
          },
          {
            "cn": "必须",
            "pos": "adv.",
            "en": "have to; must"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-06/6-8.mp3"
      }
    ]
  },
  {
    "name": "L7 · 那条裙子比短裤更好看",
    "id": "7",
    "core": [
      {
        "hanzi": "辆",
        "en": "(for vehicles)"
      },
      {
        "hanzi": "自行车",
        "en": "bicycle; bike"
      },
      {
        "hanzi": "旧",
        "en": "old"
      },
      {
        "hanzi": "矮",
        "en": "low (in height); short (in stature)"
      },
      {
        "hanzi": "试",
        "en": "try"
      },
      {
        "hanzi": "黄色",
        "en": "yellow"
      },
      {
        "hanzi": "短裤",
        "en": "shorts"
      },
      {
        "hanzi": "大小",
        "en": "size"
      },
      {
        "hanzi": "合适",
        "en": "suitable"
      },
      {
        "hanzi": "裙子",
        "en": "skirt"
      },
      {
        "hanzi": "更",
        "en": "more; still/even more"
      },
      {
        "hanzi": "决定",
        "en": "decide; decision"
      },
      {
        "hanzi": "西瓜",
        "en": "watermelon"
      },
      {
        "hanzi": "新鲜",
        "en": "fresh"
      },
      {
        "hanzi": "甜",
        "en": "sweet"
      },
      {
        "hanzi": "公斤",
        "en": "kilogram"
      },
      {
        "hanzi": "冰",
        "en": "freeze; ice"
      },
      {
        "hanzi": "极",
        "en": "extremely"
      },
      {
        "hanzi": "斤",
        "en": "jin"
      },
      {
        "hanzi": "香蕉",
        "en": "banana"
      },
      {
        "hanzi": "一共",
        "en": "in all"
      },
      {
        "hanzi": "毛",
        "en": "mao"
      },
      {
        "hanzi": "结婚",
        "en": "marry"
      },
      {
        "hanzi": "不但",
        "en": "not only"
      },
      {
        "hanzi": "而且",
        "en": "and; but also"
      },
      {
        "hanzi": "声",
        "en": "(used for sounds); sound"
      },
      {
        "hanzi": "开机",
        "en": "start; be power-on"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "7-01",
        "title": {
          "cn": "商量去买东西",
          "en": "Talking about going shopping",
          "emoji": "🚲"
        },
        "intro": {
          "cn": "在家里，王一雪和刘明商量去买东西。",
          "en": "At home, Wang Yixue and Liu Ming were talking about going shopping."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-07/7-1.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "小雪的自行车是什么时候买的？",
            "options": [
              "昨天买的",
              "今天买的",
              "她八岁的时候买的"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "他们怎么去商场？",
            "options": [
              "走路",
              "打车",
              "骑自行车"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "王一雪",
            "cn": "这辆自行车是小雪八岁的时候买的，看起来有点儿旧了。",
            "en": "We bought this bicycle when Xiaoxue was eight years old. It's starting to look a bit old now."
          },
          {
            "speaker": "刘明",
            "cn": "是啊，她现在长高了，这辆车已经太矮了。",
            "en": "Yeah, she's grown taller, and the bike is too small for her now."
          },
          {
            "speaker": "王一雪",
            "cn": "商场里开了一家自行车店，咱们给她买辆新的吧。",
            "en": "A new bicycle shop just opened in the mall. Let's get her a new one."
          },
          {
            "speaker": "刘明",
            "cn": "好，咱们带小雪一起去，让她试一下。",
            "en": "Sure. Let's take Xiaoxue with us so she can try it out."
          },
          {
            "speaker": "王一雪",
            "cn": "那今天就去吧！我也想再看看衣服。咱们怎么去？",
            "en": "Let's go today, then! I also want to check out some clothes. How should we get there？"
          },
          {
            "speaker": "刘明",
            "cn": "商场不远，咱们可以走着去。",
            "en": "The mall isn't far—we can walk there."
          }
        ],
        "postQuestions": [
          {
            "q": "他们为什么想给小雪买新自行车？"
          },
          {
            "q": "他们为什么想带小雪一起去？"
          },
          {
            "q": "王一雪还想买什么？"
          }
        ],
        "words": [
          {
            "cn": "辆",
            "pos": "m.",
            "en": "(for vehicles)"
          },
          {
            "cn": "自行车",
            "pos": "n.",
            "en": "bicycle; bike"
          },
          {
            "cn": "旧",
            "pos": "adj.",
            "en": "old"
          },
          {
            "cn": "矮",
            "pos": "adj.",
            "en": "low (in height); short (in stature)"
          },
          {
            "cn": "试",
            "pos": "v.",
            "en": "try"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-07/7-2.mp3"
      },
      {
        "id": "7-02",
        "title": {
          "cn": "在商场挑衣服",
          "en": "Choosing clothes at the mall",
          "emoji": "👗"
        },
        "intro": {
          "cn": "在商场，刘明和王一雪买完自行车，又来挑选衣服。",
          "en": "At the mall, after buying a bicycle, Liu Ming and Wang Yixue came to choose some clothes."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-07/7-3.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "课文里说，下面哪个更贵？",
            "options": [
              "短裤",
              "裙子",
              "运动鞋"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "王一雪后来是怎么决定的？",
            "options": [
              "买裙子",
              "买裤子",
              "看看再说"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "王一雪",
            "cn": "你看我穿这条黄色的短裤好看吗？",
            "en": "Do you think these yellow shorts look good on me？"
          },
          {
            "speaker": "刘明",
            "cn": "大小合适，但我觉得那条裙子比短裤更好看。",
            "en": "The size fits well, but I think that skirt looks better than the shorts."
          },
          {
            "speaker": "王一雪",
            "cn": "裙子比短裤贵一点儿。",
            "en": "The skirt is a bit more expensive than the shorts."
          },
          {
            "speaker": "刘明",
            "cn": "贵多少？",
            "en": "How much more expensive？"
          },
          {
            "speaker": "王一雪",
            "cn": "裙子480，短裤400。",
            "en": "The skirt is 480 yuan, and the shorts are 400 yuan."
          },
          {
            "speaker": "刘明",
            "cn": "裙子不比短裤贵多少，还是买裙子吧，你穿裙子更好看。",
            "en": "The skirt isn't much more expensive than the shorts. Let's get the skirt—you look better in skirts."
          },
          {
            "speaker": "王一雪",
            "cn": "我多看看再决定。你看，那边有买二送一！",
            "en": "I'll look around a bit more before deciding. Look, there's a “Buy Two, Get One Free” offer over there！"
          }
        ],
        "postQuestions": [
          {
            "q": "刘明觉得短裤怎么样？"
          },
          {
            "q": "王一雪为什么不想买裙子？"
          },
          {
            "q": "裙子比短裤贵多少？"
          }
        ],
        "words": [
          {
            "cn": "黄色",
            "pos": "n.",
            "en": "yellow"
          },
          {
            "cn": "短裤",
            "pos": "n.",
            "en": "shorts"
          },
          {
            "cn": "大小",
            "pos": "n.",
            "en": "size"
          },
          {
            "cn": "合适",
            "pos": "adj.",
            "en": "suitable"
          },
          {
            "cn": "裙子",
            "pos": "n.",
            "en": "skirt"
          },
          {
            "cn": "更",
            "pos": "adv.",
            "en": "more; still/even more"
          },
          {
            "cn": "决定",
            "pos": "v./n.",
            "en": "decide; decision"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-07/7-4.mp3"
      },
      {
        "id": "7-03",
        "title": {
          "cn": "在商店买水果",
          "en": "Buying fruit at the store",
          "emoji": "🍉"
        },
        "intro": {
          "cn": "在商店，王一雪在买东西。",
          "en": "At the store, Wang Yixue was buying things."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-07/7-5.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一雪在买什么？",
            "options": [
              "苹果",
              "牛奶",
              "西瓜和香蕉"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "这些水果一共花了多少钱？",
            "options": [
              "五十五块",
              "五十八块",
              "五十八块五毛"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "店员",
            "cn": "西瓜又大又新鲜，不甜不要钱！",
            "en": "These watermelons are big and fresh. Free if they aren't sweet！"
          },
          {
            "speaker": "王一雪",
            "cn": "西瓜看起来不错，怎么卖？",
            "en": "The watermelons look great. How much are they？"
          },
          {
            "speaker": "店员",
            "cn": "五块钱一公斤。来，您先尝尝这块冰西瓜，甜极了！",
            "en": "Five yuan per kilo. Here, try this piece of chilled watermelon—it's super sweet！"
          },
          {
            "speaker": "王一雪",
            "cn": "是挺甜的！帮我选个大点儿的，再来两斤香蕉。",
            "en": "It really is sweet! Please help me pick a bigger one, and I'll take two jin of bananas as well."
          },
          {
            "speaker": "店员",
            "cn": "一共五十八块五毛。",
            "en": "That's 58.5 yuan in total."
          },
          {
            "speaker": "王一雪",
            "cn": "我买了这么多，便宜点儿吧。",
            "en": "I'm buying so much. Can you give me a discount？"
          },
          {
            "speaker": "店员",
            "cn": "您给我五十五吧，不能再便宜了。",
            "en": "Make it 55 yuan. That's the best I can do."
          }
        ],
        "postQuestions": [
          {
            "q": "西瓜多少钱一斤？"
          },
          {
            "q": "王一雪买了什么水果？"
          },
          {
            "q": "店员给王一雪便宜了多少钱？"
          }
        ],
        "words": [
          {
            "cn": "西瓜",
            "pos": "n.",
            "en": "watermelon"
          },
          {
            "cn": "新鲜",
            "pos": "adj.",
            "en": "fresh"
          },
          {
            "cn": "甜",
            "pos": "adj.",
            "en": "sweet"
          },
          {
            "cn": "公斤",
            "pos": "m.",
            "en": "kilogram"
          },
          {
            "cn": "冰",
            "pos": "v./n.",
            "en": "freeze; ice"
          },
          {
            "cn": "极",
            "pos": "adv.",
            "en": "extremely"
          },
          {
            "cn": "斤",
            "pos": "m.",
            "en": "jin"
          },
          {
            "cn": "香蕉",
            "pos": "n.",
            "en": "banana"
          },
          {
            "cn": "一共",
            "pos": "adv.",
            "en": "in all"
          },
          {
            "cn": "毛",
            "pos": "m.",
            "en": "mao"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-07/7-6.mp3"
      },
      {
        "id": "7-04",
        "title": {
          "cn": "刘明看电视",
          "en": "Liu Ming is watching TV",
          "emoji": "📺"
        },
        "intro": {
          "cn": "在家里，刘明在看电视。",
          "en": "At home, Liu Ming was watching TV."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-07/7-7.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "刘明发现了什么新问题？",
            "options": [
              "电视太旧了",
              "房子太大了",
              "电视有点儿小"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "刘明选电视的时候发现了什么？",
            "options": [
              "新电视很方便",
              "新电视不便宜",
              "不能在网上选电视"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "这几天我们在新家坐着看电视的时候，又发现了新问题。",
            "en": "These past few days, while watching TV in our new home, we discovered another problem."
          },
          {
            "speaker": "",
            "cn": "房子大了，电视看起来就有点儿小。",
            "en": "Now that the house is bigger, the TV looks a bit too small."
          },
          {
            "speaker": "",
            "cn": "这个电视是我们结婚时买的，是时候换个新电视了。",
            "en": "We bought it when we got married, so I think it's time for an upgrade."
          },
          {
            "speaker": "",
            "cn": "今天我一直在网上选电视，没想到，现在的电视不但便宜，而且用着非常方便，有的电视叫它一声就能开机。",
            "en": "I've been shopping for TVs online all day, and to my surprise, they're not only more affordable but also much smarter—some even turn on when you talk to them."
          },
          {
            "speaker": "",
            "cn": "我看了好几个，都很满意，晚上让一雪来决定吧。",
            "en": "I found several I really like, but I'll let Yixue make the final call tonight."
          }
        ],
        "postQuestions": [
          {
            "q": "刘明家的电视是什么时候买的？"
          },
          {
            "q": "刘明想在哪儿买新电视？"
          },
          {
            "q": "刘明为什么觉得新电视用着很方便？"
          }
        ],
        "words": [
          {
            "cn": "结婚",
            "pos": "v.",
            "en": "marry"
          },
          {
            "cn": "不但",
            "pos": "conj.",
            "en": "not only"
          },
          {
            "cn": "而且",
            "pos": "conj.",
            "en": "and; but also"
          },
          {
            "cn": "声",
            "pos": "m./n.",
            "en": "(used for sounds); sound"
          },
          {
            "cn": "开机",
            "pos": "v.",
            "en": "start; be power-on"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-07/7-8.mp3"
      }
    ]
  },
  {
    "name": "L8 · 今天我出院了",
    "id": "8",
    "core": [
      {
        "hanzi": "最近",
        "en": "lately; recently"
      },
      {
        "hanzi": "常",
        "en": "often"
      },
      {
        "hanzi": "体育馆",
        "en": "gymnasium"
      },
      {
        "hanzi": "习惯",
        "en": "habit; be used to"
      },
      {
        "hanzi": "胖",
        "en": "fat"
      },
      {
        "hanzi": "健康",
        "en": "healthy"
      },
      {
        "hanzi": "以后",
        "en": "after; afterward"
      },
      {
        "hanzi": "羽毛球",
        "en": "badminton"
      },
      {
        "hanzi": "耳朵",
        "en": "ear"
      },
      {
        "hanzi": "感冒",
        "en": "catch a cold; cold"
      },
      {
        "hanzi": "发烧",
        "en": "have a fever"
      },
      {
        "hanzi": "低",
        "en": "low"
      },
      {
        "hanzi": "关心",
        "en": "be concerned about"
      },
      {
        "hanzi": "注意",
        "en": "pay attention to"
      },
      {
        "hanzi": "突然",
        "en": "sudden"
      },
      {
        "hanzi": "住院",
        "en": "be in hospital"
      },
      {
        "hanzi": "担心",
        "en": "worry"
      },
      {
        "hanzi": "腿",
        "en": "leg"
      },
      {
        "hanzi": "病人",
        "en": "patient"
      },
      {
        "hanzi": "差不多",
        "en": "almost; similar"
      },
      {
        "hanzi": "得",
        "en": "need; have to"
      },
      {
        "hanzi": "开心",
        "en": "happy"
      },
      {
        "hanzi": "出院",
        "en": "(of a patient) leave hospital"
      },
      {
        "hanzi": "开",
        "en": "prescribe"
      },
      {
        "hanzi": "种",
        "en": "kind; type"
      },
      {
        "hanzi": "方法",
        "en": "method"
      },
      {
        "hanzi": "其他",
        "en": "other"
      },
      {
        "hanzi": "心里",
        "en": "mind; heart"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "8-01",
        "title": {
          "cn": "在体育馆遇见陈天中",
          "en": "Meeting Chen Tianzhong at the gym",
          "emoji": "🏸"
        },
        "intro": {
          "cn": "在学校的体育馆，李文遇到了陈天中。",
          "en": "At the school gymnasium, Li Wen met Chen Tianzhong."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-08/8-1.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "陈天中为什么每天运动？",
            "options": [
              "他喜欢跑步",
              "他要学打羽毛球",
              "他不想再胖下去了"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "李文要教陈天中做什么？",
            "options": [
              "跑步",
              "打篮球",
              "打羽毛球"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "李文",
            "cn": "天中，最近常看见你来体育馆。",
            "en": "Tianzhong, I've seen you at the gym quite often lately."
          },
          {
            "speaker": "陈天中",
            "cn": "我每天下午都来跑一个小时步。",
            "en": "I come here to run for an hour every afternoon."
          },
          {
            "speaker": "李文",
            "cn": "你的运动习惯真不错。",
            "en": "That's a great exercise habit."
          },
          {
            "speaker": "陈天中",
            "cn": "因为我今年胖了十多斤，不能再胖下去了，有点儿不健康。",
            "en": "I've gained more than ten jin this year. I really can't afford to get any fatter—it's not very healthy."
          },
          {
            "speaker": "李文",
            "cn": "我下课以后常去打羽毛球，你也来玩吧。",
            "en": "I often play badminton after class. Why don't you join us sometime？"
          },
          {
            "speaker": "陈天中",
            "cn": "我知道，但是你们的水平太高了，我打得不怎么样。",
            "en": "I know, but you guys are way too good. I'm not very good at it."
          },
          {
            "speaker": "李文",
            "cn": "没关系，我可以教你。",
            "en": "That's okay. I can teach you."
          }
        ],
        "postQuestions": [
          {
            "q": "陈天中每天下午去体育馆做什么？"
          },
          {
            "q": "李文下课以后经常做什么？"
          },
          {
            "q": "陈天中羽毛球打得怎么样？"
          }
        ],
        "words": [
          {
            "cn": "最近",
            "pos": "n.",
            "en": "lately; recently"
          },
          {
            "cn": "常",
            "pos": "adv.",
            "en": "often"
          },
          {
            "cn": "体育馆",
            "pos": "n.",
            "en": "gymnasium"
          },
          {
            "cn": "习惯",
            "pos": "n./v.",
            "en": "habit; be used to"
          },
          {
            "cn": "胖",
            "pos": "adj.",
            "en": "fat"
          },
          {
            "cn": "健康",
            "pos": "adj.",
            "en": "healthy"
          },
          {
            "cn": "以后",
            "pos": "adv.",
            "en": "after; afterward"
          },
          {
            "cn": "羽毛球",
            "pos": "n.",
            "en": "badminton"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-08/8-2.mp3"
      },
      {
        "id": "8-02",
        "title": {
          "cn": "在教室问候陈天中",
          "en": "Asking after Chen Tianzhong in the classroom",
          "emoji": "🏫"
        },
        "intro": {
          "cn": "在教室，安妮问候陈天中。",
          "en": "In the classroom, Annie expressed concern for Chen Tianzhong."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-08/8-3.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "陈天中怎么了？",
            "options": [
              "头疼",
              "发高烧",
              "耳朵不舒服"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "如果下午还发烧，应该怎么办？",
            "options": [
              "去看医生",
              "吃点儿药回家休息"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "安妮",
            "cn": "你怎么了？看上去有点儿不舒服。",
            "en": "What's wrong? You don't look very well."
          },
          {
            "speaker": "陈天中",
            "cn": "昨天游完泳以后，耳朵一直有点儿疼。",
            "en": "My ear has been hurting since I went swimming yesterday."
          },
          {
            "speaker": "安妮",
            "cn": "是不是感冒了？发烧吗？",
            "en": "Maybe you've caught a cold. Do you have a fever？"
          },
          {
            "speaker": "陈天中",
            "cn": "好像发低烧了。",
            "en": "I think I have a mild fever."
          },
          {
            "speaker": "安妮",
            "cn": "我送你去医院，让医生检查一下吧。",
            "en": "Let me take you to the hospital so the doctor can check it."
          },
          {
            "speaker": "陈天中",
            "cn": "我先回去睡一觉，可能休息休息就好了。",
            "en": "I'll go home and take a nap first. Maybe I'll feel better after some rest."
          },
          {
            "speaker": "安妮",
            "cn": "好吧，如果下午还发烧，就一定要去看医生。",
            "en": "Alright, but if you still have a fever this afternoon, you must see a doctor."
          },
          {
            "speaker": "陈天中",
            "cn": "谢谢关心，我会注意的。",
            "en": "Thanks for your concern. I'll take care of myself."
          }
        ],
        "postQuestions": [
          {
            "q": "陈天中是什么时候开始不舒服的？"
          },
          {
            "q": "安妮想怎么帮助他？"
          },
          {
            "q": "陈天中想不想去医院？他想做什么？"
          }
        ],
        "words": [
          {
            "cn": "耳朵",
            "pos": "n.",
            "en": "ear"
          },
          {
            "cn": "感冒",
            "pos": "v./n.",
            "en": "catch a cold; cold"
          },
          {
            "cn": "发烧",
            "pos": "v.",
            "en": "have a fever"
          },
          {
            "cn": "低",
            "pos": "adj.",
            "en": "low"
          },
          {
            "cn": "关心",
            "pos": "v.",
            "en": "be concerned about"
          },
          {
            "cn": "注意",
            "pos": "v.",
            "en": "pay attention to"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-08/8-4.mp3"
      },
      {
        "id": "8-03",
        "title": {
          "cn": "在医院探望陈天中",
          "en": "Visiting Chen Tianzhong in hospital",
          "emoji": "🏥"
        },
        "intro": {
          "cn": "在医院病房，安妮探望陈天中。",
          "en": "In the hospital ward, Annie visited Chen Tianzhong."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-08/8-5.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "陈天中上次来医院是什么时候？",
            "options": [
              "几个星期前",
              "一个月前",
              "两年前"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "陈天中为什么觉得开心多了？",
            "options": [
              "有人来看他",
              "他的腿不疼了",
              "马上就能回家了"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "安妮",
            "cn": "你怎么突然住院了？大家都很担心你。",
            "en": "Why were you suddenly hospitalized? Everyone's really worried about you."
          },
          {
            "speaker": "陈天中",
            "cn": "我的腿疼了几个星期了，医生说需要住院做检查。",
            "en": "My leg has been hurting for weeks. The doctor said I need to stay in the hospital for some tests."
          },
          {
            "speaker": "安妮",
            "cn": "你看起来一点儿也不像病人。",
            "en": "You don't look like a patient at all."
          },
          {
            "speaker": "陈天中",
            "cn": "是啊，我很少生病。我上次来医院已经过去差不多两年了。",
            "en": "I know, I rarely get sick—the last time I came to the hospital was nearly two years ago."
          },
          {
            "speaker": "安妮",
            "cn": "你每天跑步，有时候还去游泳，是不是运动太多了？",
            "en": "You run every day and sometimes go swimming. Could it be that you've been exercising too much？"
          },
          {
            "speaker": "陈天中",
            "cn": "医生也这么说，但是还得做完检查才能知道。",
            "en": "The doctor thinks that might be the case, but we will have to wait for the test results to be sure."
          },
          {
            "speaker": "安妮",
            "cn": "别担心！听医生的话，好好休息，你的腿一定能好。",
            "en": "Don't worry! Just follow the doctor's advice and get plenty of rest—your leg will soon recover."
          },
          {
            "speaker": "陈天中",
            "cn": "谢谢。有人来看我，我就开心多了。",
            "en": "Thanks. I always feel much happier when someone comes to visit me."
          }
        ],
        "postQuestions": [
          {
            "q": "陈天中为什么住院了？"
          },
          {
            "q": "安妮觉得陈天中为什么腿疼？"
          },
          {
            "q": "医生是怎么说陈天中的腿的？"
          }
        ],
        "words": [
          {
            "cn": "突然",
            "pos": "adj.",
            "en": "sudden"
          },
          {
            "cn": "住院",
            "pos": "v.",
            "en": "be in hospital"
          },
          {
            "cn": "担心",
            "pos": "v.",
            "en": "worry"
          },
          {
            "cn": "腿",
            "pos": "n.",
            "en": "leg"
          },
          {
            "cn": "病人",
            "pos": "n.",
            "en": "patient"
          },
          {
            "cn": "差不多",
            "pos": "adv./adj.",
            "en": "almost; similar"
          },
          {
            "cn": "得",
            "pos": "mod.",
            "en": "need; have to"
          },
          {
            "cn": "开心",
            "pos": "adj.",
            "en": "happy"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-08/8-6.mp3"
      },
      {
        "id": "8-04",
        "title": {
          "cn": "在家里吃药休息",
          "en": "Taking medicine and resting at home",
          "emoji": "💊"
        },
        "intro": {
          "cn": "在家里，陈天中吃药、休息。",
          "en": "At home, Chen Tianzhong took medicine and rested."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-08/8-7.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "陈天中现在怎么样了？",
            "options": [
              "出院了",
              "病都好了",
              "还不能回家"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "医生说什么最重要？",
            "options": [
              "多走路",
              "多休息",
              "吃药的方法"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "今天我出院了。",
            "en": "Today I was discharged from the hospital."
          },
          {
            "speaker": "",
            "cn": "出院前，医生给我开了几种药，而且告诉了我吃药的方法。",
            "en": "Before leaving, the doctor prescribed several kinds of medicine and explained how to take them."
          },
          {
            "speaker": "",
            "cn": "有一种药需要每天睡前吃一次，其他几种每天吃三次，饭后吃。",
            "en": "One needs to be taken once every night before going to bed, while the others should be taken three times a day after meals."
          },
          {
            "speaker": "",
            "cn": "除了吃药，医生还说最重要的是多休息。",
            "en": "In addition to taking medicine, the doctor told me that getting plenty of rest is the most important."
          },
          {
            "speaker": "",
            "cn": "我都记在心里了，回家以后一定会多注意。",
            "en": "I've kept that in mind and will take good care of myself after returning home."
          },
          {
            "speaker": "",
            "cn": "希望我的腿能快一点儿好。",
            "en": "I hope my leg gets better soon."
          }
        ],
        "postQuestions": [
          {
            "q": "陈天中出院前，医生做什么了？"
          },
          {
            "q": "医生给陈天中开的药应该怎么吃？"
          },
          {
            "q": "陈天中回家以后应该注意什么？"
          }
        ],
        "words": [
          {
            "cn": "出院",
            "pos": "v.",
            "en": "(of a patient) leave hospital"
          },
          {
            "cn": "开",
            "pos": "v.",
            "en": "prescribe"
          },
          {
            "cn": "种",
            "pos": "m.",
            "en": "kind; type"
          },
          {
            "cn": "方法",
            "pos": "n.",
            "en": "method"
          },
          {
            "cn": "其他",
            "pos": "pron.",
            "en": "other"
          },
          {
            "cn": "心里",
            "pos": "n.",
            "en": "mind; heart"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-08/8-8.mp3"
      }
    ]
  },
  {
    "name": "L9 · 打不好没关系",
    "id": "9",
    "core": [
      {
        "hanzi": "校园",
        "en": "campus"
      },
      {
        "hanzi": "卡",
        "en": "card"
      },
      {
        "hanzi": "球场",
        "en": "court"
      },
      {
        "hanzi": "为了",
        "en": "for"
      },
      {
        "hanzi": "运动会",
        "en": "sports meet"
      },
      {
        "hanzi": "男生",
        "en": "boy student"
      },
      {
        "hanzi": "练",
        "en": "practice"
      },
      {
        "hanzi": "参加",
        "en": "join; take part in"
      },
      {
        "hanzi": "网球",
        "en": "tennis"
      },
      {
        "hanzi": "比赛",
        "en": "match; have a match"
      },
      {
        "hanzi": "练习",
        "en": "practice; exercise"
      },
      {
        "hanzi": "好多",
        "en": "a lot of"
      },
      {
        "hanzi": "几乎",
        "en": "almost"
      },
      {
        "hanzi": "只是",
        "en": "just; only"
      },
      {
        "hanzi": "啤酒",
        "en": "beer"
      },
      {
        "hanzi": "回",
        "en": "(used for happenings or events) piece"
      },
      {
        "hanzi": "紧张",
        "en": "nervous"
      },
      {
        "hanzi": "受到",
        "en": "be subjected to"
      },
      {
        "hanzi": "影响",
        "en": "effect; affect"
      },
      {
        "hanzi": "得分",
        "en": "score (points)"
      },
      {
        "hanzi": "主要",
        "en": "main; major"
      },
      {
        "hanzi": "体育",
        "en": "sports"
      },
      {
        "hanzi": "世界",
        "en": "world"
      },
      {
        "hanzi": "运动员",
        "en": "athlete"
      },
      {
        "hanzi": "得到",
        "en": "get"
      },
      {
        "hanzi": "成绩",
        "en": "result; achievement"
      },
      {
        "hanzi": "奥运会",
        "en": "Olympic Games"
      },
      {
        "hanzi": "刘长春",
        "en": "Liu Changchun"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "9-01",
        "title": {
          "cn": "在图书馆门口",
          "en": "At the library entrance",
          "emoji": "📚"
        },
        "intro": {
          "cn": "在图书馆门口，李文向白家月跑过去。",
          "en": "At the library entrance, Li Wen ran toward Bai Jiayue."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-09/9-1.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "李文昨天忘了做什么了？",
            "options": [
              "去学校打球",
              "还白家月校园卡",
              "给白家月打电话"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "运动会的时候，李文要做什么？",
            "options": [
              "游泳",
              "踢足球",
              "看白家月的比赛"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "李文",
            "cn": "家月，对不起，我昨天忘了还你校园卡了。",
            "en": "Jiayue, I'm sorry I forgot to return your campus card yesterday."
          },
          {
            "speaker": "白家月",
            "cn": "没关系。你怎么这么快就过来了？",
            "en": "That's OK. How did you get here so quickly？"
          },
          {
            "speaker": "李文",
            "cn": "我正在球场打球呢，接了你的电话就跑过来了。",
            "en": "I was playing ball on the court. As soon as you called, I ran right over."
          },
          {
            "speaker": "白家月",
            "cn": "总听说为了准备运动会，你们几个男生每天都练球。",
            "en": "I heard that you guys have been practicing every day for the sports meet."
          },
          {
            "speaker": "李文",
            "cn": "是啊！你打算参加运动会吗？",
            "en": "Yes, we have! Are you planning to take part in it？"
          },
          {
            "speaker": "白家月",
            "cn": "我想参加网球比赛，最近一直在练习。",
            "en": "I'm thinking about joining the tennis competition. I've been practicing a lot lately."
          },
          {
            "speaker": "李文",
            "cn": "好，到时候我去看你的比赛。",
            "en": "Great! I'll come and watch your match then."
          }
        ],
        "postQuestions": [
          {
            "q": "李文为什么来得很快？"
          },
          {
            "q": "李文每天在做什么？"
          },
          {
            "q": "白家月最近在做什么？"
          }
        ],
        "words": [
          {
            "cn": "校园",
            "pos": "n.",
            "en": "campus"
          },
          {
            "cn": "卡",
            "pos": "n.",
            "en": "card"
          },
          {
            "cn": "球场",
            "pos": "n.",
            "en": "court"
          },
          {
            "cn": "为了",
            "pos": "prep.",
            "en": "for"
          },
          {
            "cn": "运动会",
            "pos": "n.",
            "en": "sports meet"
          },
          {
            "cn": "男生",
            "pos": "n.",
            "en": "boy student"
          },
          {
            "cn": "练",
            "pos": "v.",
            "en": "practice"
          },
          {
            "cn": "参加",
            "pos": "v.",
            "en": "join; take part in"
          },
          {
            "cn": "网球",
            "pos": "n.",
            "en": "tennis"
          },
          {
            "cn": "比赛",
            "pos": "n./v.",
            "en": "match; have a match"
          },
          {
            "cn": "练习",
            "pos": "v./n.",
            "en": "practice; exercise"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-09/9-2.mp3"
      },
      {
        "id": "9-02",
        "title": {
          "cn": "在校园里聊天儿",
          "en": "Chatting on campus",
          "emoji": "🎾"
        },
        "intro": {
          "cn": "在校园里，李文和白家月在聊天儿。",
          "en": "On campus, Li Wen and Bai Jiayue were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-09/9-3.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "李文和白家月在说什么？",
            "options": [
              "运动会",
              "打网球",
              "打羽毛球"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "大家为什么一起打球？",
            "options": [
              "为了比赛",
              "为了锻炼身体",
              "为了参加运动会"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "李文",
            "cn": "家月，你跟我们一起打羽毛球吧？",
            "en": "Jiayue, why don't you come and play badminton with us？"
          },
          {
            "speaker": "白家月",
            "cn": "我好多年没打羽毛球了，几乎忘了怎么打了。",
            "en": "I haven't played badminton in years. I've almost forgotten how."
          },
          {
            "speaker": "李文",
            "cn": "不是比赛，打不好没关系。",
            "en": "It's not a competition. Don't worry if you're not good at it."
          },
          {
            "speaker": "白家月",
            "cn": "这么多同学一起打，如果总是接不住球，就太不好意思了。",
            "en": "But there are so many classmates playing, I'd feel embarrassed if I kept missing the shuttlecock."
          },
          {
            "speaker": "李文",
            "cn": "你想得太多了！大家打球只是为了锻炼身体。",
            "en": "You're overthinking it! We're just playing for exercise."
          },
          {
            "speaker": "白家月",
            "cn": "我先自己练练吧，下周再跟你们一起打。",
            "en": "I'd better practice on my own first. I'll join you guys next week."
          },
          {
            "speaker": "李文",
            "cn": "我在教天中打羽毛球，你可以过来跟我们一起练。",
            "en": "I'll be playing badminton with Tianzhong. You can come and practice with us."
          }
        ],
        "postQuestions": [
          {
            "q": "李文叫白家月一起做什么？"
          },
          {
            "q": "白家月为什么不想去？"
          },
          {
            "q": "白家月想先做什么？"
          }
        ],
        "words": [
          {
            "cn": "好多",
            "pos": "num.",
            "en": "a lot of"
          },
          {
            "cn": "几乎",
            "pos": "adv.",
            "en": "almost"
          },
          {
            "cn": "只是",
            "pos": "adv./conj.",
            "en": "just; only"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-09/9-4.mp3"
      },
      {
        "id": "9-03",
        "title": {
          "cn": "一起看电视上的足球比赛",
          "en": "Watching a soccer game on TV together",
          "emoji": "⚽"
        },
        "intro": {
          "cn": "在李文家，李文、白家月和陈天中一起看电视。",
          "en": "At Li Wen's home, Li Wen, Bai Jiayue, and Chen Tianzhong were watching TV together."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-09/9-5.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "他们在做什么？",
            "options": [
              "看足球比赛",
              "准备踢足球",
              "准备参加比赛"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "白家月为什么着急？",
            "options": [
              "老球员生病了",
              "球一直踢不进去",
              "看不到比赛的得分"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "陈天中",
            "cn": "足球比赛已经开始了，快过来看吧！",
            "en": "The soccer game has started! Hurry up and come watch！"
          },
          {
            "speaker": "李文",
            "cn": "你们先看，冰箱里有啤酒和饮料，我去拿一下。",
            "en": "You guys go ahead and watch. There's some beer and drinks in the fridge—I'll grab them."
          },
          {
            "speaker": "白家月",
            "cn": "今天怎么回事？总是踢不进去！",
            "en": "What's wrong with them today? They just can't seem to score！"
          },
          {
            "speaker": "陈天中",
            "cn": "几个老球员生病了，新球员第一次参加这么重要的比赛，太紧张了。",
            "en": "Several veteran players are sick. The new players are too nervous—it's their first big game."
          },
          {
            "speaker": "李文",
            "cn": "是啊，主要的球员没参加比赛，所以大家也都受到影响了。",
            "en": "Yeah, since the main players aren't playing, everyone else seems affected."
          },
          {
            "speaker": "白家月",
            "cn": "越看越着急。我不看了，你们告诉我得分吧。",
            "en": "The more I watch, the more anxious I feel. I'm done watching. Just tell me the score later."
          }
        ],
        "postQuestions": [
          {
            "q": "李文要去冰箱里拿什么？"
          },
          {
            "q": "今天的足球比赛踢得怎么样？"
          },
          {
            "q": "球员们受到什么影响了？"
          }
        ],
        "words": [
          {
            "cn": "啤酒",
            "pos": "n.",
            "en": "beer"
          },
          {
            "cn": "回",
            "pos": "m.",
            "en": "(used for happenings or events) piece"
          },
          {
            "cn": "紧张",
            "pos": "adj.",
            "en": "nervous"
          },
          {
            "cn": "受到",
            "pos": "v.",
            "en": "be subjected to"
          },
          {
            "cn": "影响",
            "pos": "n./v.",
            "en": "effect; affect"
          },
          {
            "cn": "得分",
            "pos": "v./n.",
            "en": "score (points)"
          },
          {
            "cn": "主要",
            "pos": "adj.",
            "en": "main; major"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-09/9-6.mp3"
      },
      {
        "id": "9-04",
        "title": {
          "cn": "准备关于奥运会的演讲稿",
          "en": "Preparing a speech about the Olympics",
          "emoji": "🎤"
        },
        "intro": {
          "cn": "在家里，李文准备演讲稿。",
          "en": "At home, Li Wen prepared his speech."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-09/9-7.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "李文在说什么体育比赛？",
            "options": [
              "奥运会",
              "短跑比赛",
              "中国的体育比赛"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "刘长春参加了哪个比赛？",
            "options": [
              "100米短跑",
              "200米游泳",
              "5000米长跑"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "我喜欢看体育比赛，最爱看的就是奥运会。",
            "en": "I love watching sporting events, and my favorite is the Olympic Games."
          },
          {
            "speaker": "",
            "cn": "奥运会是世界上影响最大的体育比赛。",
            "en": "The Olympics are the most influential sporting event in the world."
          },
          {
            "speaker": "",
            "cn": "从1896年到2024年，每次奥运会都有非常多的运动员参加。",
            "en": "From 1896 to 2024, each edition of the Games has attracted a huge number of athletes from around the globe."
          },
          {
            "speaker": "",
            "cn": "第一位参加奥运会的中国运动员是刘长春，他1932年参加了100米和200米短跑比赛。",
            "en": "The first Chinese athlete to take part in the Olympics was Liu Changchun, who competed in the 100 m and 200 m sprint races in 1932."
          },
          {
            "speaker": "",
            "cn": "虽然他没有得到好成绩，但是他让世界认识了中国。",
            "en": "Although he didn't achieve great results, he helped introduce China to the world."
          }
        ],
        "postQuestions": [
          {
            "q": "奥运会是一个什么样的体育比赛？"
          },
          {
            "q": "1932年，中国运动员的比赛成绩怎么样？"
          },
          {
            "q": "刘长春的影响是什么？"
          }
        ],
        "words": [
          {
            "cn": "体育",
            "pos": "n.",
            "en": "sports"
          },
          {
            "cn": "世界",
            "pos": "n.",
            "en": "world"
          },
          {
            "cn": "运动员",
            "pos": "n.",
            "en": "athlete"
          },
          {
            "cn": "得到",
            "pos": "v.",
            "en": "get"
          },
          {
            "cn": "成绩",
            "pos": "n.",
            "en": "result; achievement"
          },
          {
            "cn": "奥运会",
            "pos": "",
            "en": "Olympic Games"
          },
          {
            "cn": "刘长春",
            "pos": "",
            "en": "Liu Changchun"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-09/9-8.mp3"
      }
    ]
  },
  {
    "name": "L13 · 我的新邻居来自英国",
    "id": "13",
    "core": [
      {
        "hanzi": "请客",
        "en": "stand treat"
      },
      {
        "hanzi": "南方",
        "en": "south"
      },
      {
        "hanzi": "北方",
        "en": "north"
      },
      {
        "hanzi": "做法",
        "en": "way of doing or making a thing"
      },
      {
        "hanzi": "不同",
        "en": "different"
      },
      {
        "hanzi": "加",
        "en": "add"
      },
      {
        "hanzi": "的话",
        "en": "used at the end of a conditional clause"
      },
      {
        "hanzi": "做客",
        "en": "be a guest"
      },
      {
        "hanzi": "邻居",
        "en": "neighbor"
      },
      {
        "hanzi": "放心",
        "en": "feel at ease"
      },
      {
        "hanzi": "酒",
        "en": "alcoholic drink; wine"
      },
      {
        "hanzi": "放",
        "en": "put"
      },
      {
        "hanzi": "客人",
        "en": "guest"
      },
      {
        "hanzi": "晚会",
        "en": "evening party"
      },
      {
        "hanzi": "盘子",
        "en": "plate"
      },
      {
        "hanzi": "礼物",
        "en": "gift; present"
      },
      {
        "hanzi": "一边",
        "en": "at the same time"
      },
      {
        "hanzi": "画家",
        "en": "painter"
      },
      {
        "hanzi": "聊天儿",
        "en": "chat"
      },
      {
        "hanzi": "来自",
        "en": "come from"
      },
      {
        "hanzi": "夫妻",
        "en": "husband and wife"
      },
      {
        "hanzi": "直到",
        "en": "until"
      },
      {
        "hanzi": "地图",
        "en": "map"
      },
      {
        "hanzi": "点",
        "en": "dot; spot"
      },
      {
        "hanzi": "感到",
        "en": "feel"
      },
      {
        "hanzi": "东方",
        "en": "East"
      },
      {
        "hanzi": "文化",
        "en": "culture"
      },
      {
        "hanzi": "英国",
        "en": "the United Kingdom (the UK)"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "13-01",
        "title": {
          "cn": "在饭馆",
          "en": "At the restaurant",
          "emoji": "🍽️"
        },
        "intro": {
          "cn": "在饭馆，杨同乐请同事吃饭。",
          "en": "At the restaurant, Yang Tongle treated his colleagues to dinner."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-13/13-1.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "关于这家饭馆，可以知道什么？",
            "options": [
              "是一家面馆",
              "鱼做得不好吃",
              "是南方菜饭馆"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "南方菜和北方菜有什么不一样？",
            "options": [
              "做法不同",
              "用的肉不同",
              "吃的鱼不同"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "杨同乐",
            "cn": "今天我请客，你们想吃什么就点什么！",
            "en": ""
          },
          {
            "speaker": "王一雪",
            "cn": "那我就不客气了。听说这家饭馆的鱼做得很特别？",
            "en": ""
          },
          {
            "speaker": "杨同乐",
            "cn": "对，南方菜跟你们北方菜的做法不同。除了鱼，你们还想吃什么？",
            "en": ""
          },
          {
            "speaker": "同事",
            "cn": "我不常吃南方菜，还是你决定吧。",
            "en": ""
          },
          {
            "speaker": "杨同乐",
            "cn": "好，那再加一个鸡肉，一个……",
            "en": ""
          },
          {
            "speaker": "王一雪",
            "cn": "咱们就三个人，别点那么多。",
            "en": ""
          },
          {
            "speaker": "杨同乐",
            "cn": "好，那先来这几个菜。",
            "en": ""
          },
          {
            "speaker": "王一雪",
            "cn": "对了，下周我儿子过生日，你们有时间的话，就来我家做客，我给你们做北京菜。",
            "en": ""
          }
        ],
        "postQuestions": [
          {
            "q": "这家饭馆什么菜做得很特别？"
          },
          {
            "q": "王一雪为什么要请同事去她家？"
          },
          {
            "q": "王一雪打算给大家做什么菜？"
          }
        ],
        "words": [
          {
            "cn": "请客",
            "pos": "v.",
            "en": "stand treat"
          },
          {
            "cn": "南方",
            "pos": "n.",
            "en": "south"
          },
          {
            "cn": "北方",
            "pos": "n.",
            "en": "north"
          },
          {
            "cn": "做法",
            "pos": "n.",
            "en": "way of doing or making a thing"
          },
          {
            "cn": "不同",
            "pos": "",
            "en": "different"
          },
          {
            "cn": "加",
            "pos": "v.",
            "en": "add"
          },
          {
            "cn": "的话",
            "pos": "part.",
            "en": "used at the end of a conditional clause"
          },
          {
            "cn": "做客",
            "pos": "v.",
            "en": "be a guest"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-13/13-2.mp3"
      },
      {
        "id": "13-02",
        "title": {
          "cn": "为生日会做准备",
          "en": "Getting ready for the birthday party",
          "emoji": "🎂"
        },
        "intro": {
          "cn": "在家里，王一雪和刘明为生日会做准备。",
          "en": "At home, Wang Yixue and Liu Ming were getting ready for the birthday party."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-13/13-3.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一雪和刘明在做什么？",
            "options": [
              "找东西",
              "打扫房子",
              "准备请客"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "王一雪为什么很担心？",
            "options": [
              "东西都没准备好",
              "饮料和酒找不到了",
              "第一次请新邻居来做客"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "王一雪",
            "cn": "第一次请新邻居来做客，总是担心有什么没准备好。",
            "en": ""
          },
          {
            "speaker": "刘明",
            "cn": "放心吧，我帮你看了，都已经准备好了。",
            "en": ""
          },
          {
            "speaker": "王一雪",
            "cn": "我记得刚才已经把饮料拿出来了，怎么不见了？",
            "en": ""
          },
          {
            "speaker": "刘明",
            "cn": "我把饮料和酒都放进冰箱里了，客人来了再拿出来。",
            "en": ""
          },
          {
            "speaker": "王一雪",
            "cn": "音乐的声音合适吗？",
            "en": ""
          },
          {
            "speaker": "刘明",
            "cn": "你把声音开得太大了，我去关小一点儿。",
            "en": ""
          },
          {
            "speaker": "王一雪",
            "cn": "好，那我们就等客人来吧。",
            "en": ""
          }
        ],
        "postQuestions": [
          {
            "q": "王一雪刚才把什么拿出来了？"
          },
          {
            "q": "刘明把饮料和酒放在哪儿了？"
          },
          {
            "q": "刘明觉得音乐的声音合适吗？"
          }
        ],
        "words": [
          {
            "cn": "邻居",
            "pos": "n.",
            "en": "neighbor"
          },
          {
            "cn": "放心",
            "pos": "v.",
            "en": "feel at ease"
          },
          {
            "cn": "酒",
            "pos": "n.",
            "en": "alcoholic drink; wine"
          },
          {
            "cn": "放",
            "pos": "v.",
            "en": "put"
          },
          {
            "cn": "客人",
            "pos": "n.",
            "en": "guest"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-13/13-4.mp3"
      },
      {
        "id": "13-03",
        "title": {
          "cn": "生日会",
          "en": "The birthday party",
          "emoji": "🎁"
        },
        "intro": {
          "cn": "在家里，王一雪和刘小明办生日会。",
          "en": "At home, Wang Yixue and Liu Ming were holding a birthday party."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-13/13-5.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "朋友们为什么来王一雪家？",
            "options": [
              "她过生日",
              "她喜欢请客",
              "她儿子过生日"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "王一雪和朋友现在准备做什么？",
            "options": [
              "吃蛋糕",
              "一起画画",
              "吃北京菜"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "王一雪",
            "cn": "谢谢你们来参加我儿子的生日晚会，希望大家今晚玩得开心。",
            "en": ""
          },
          {
            "speaker": "杨同乐",
            "cn": "小明，生日快乐！我准备了一个小礼物，希望你喜欢！",
            "en": ""
          },
          {
            "speaker": "刘小明",
            "cn": "谢谢您，我可以打开吗？",
            "en": ""
          },
          {
            "speaker": "杨同乐",
            "cn": "当然可以，你妈妈说你跟姐姐一样，都喜欢画画，对吗？",
            "en": ""
          },
          {
            "speaker": "刘小明",
            "cn": "对，我想做一名画家。啊！画板和画笔，这正是我需要的。我太喜欢了。",
            "en": ""
          },
          {
            "speaker": "王一雪",
            "cn": "我去把盘子拿过来，咱们一边吃蛋糕，一边聊天儿吧。",
            "en": ""
          }
        ],
        "postQuestions": [
          {
            "q": "杨同乐送给刘小明什么礼物？"
          },
          {
            "q": "刘小明收到礼物后说什么了？"
          },
          {
            "q": "刘小明以后想做什么？"
          }
        ],
        "words": [
          {
            "cn": "晚会",
            "pos": "n.",
            "en": "evening party"
          },
          {
            "cn": "盘子",
            "pos": "n.",
            "en": "plate"
          },
          {
            "cn": "礼物",
            "pos": "n.",
            "en": "gift; present"
          },
          {
            "cn": "一边",
            "pos": "adv.",
            "en": "at the same time"
          },
          {
            "cn": "画家",
            "pos": "n.",
            "en": "painter"
          },
          {
            "cn": "聊天儿",
            "pos": "v.",
            "en": "chat"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-13/13-6.mp3"
      },
      {
        "id": "13-04",
        "title": {
          "cn": "王一雪的日记",
          "en": "Wang Yixue's diary",
          "emoji": "📔"
        },
        "intro": {
          "cn": "在家里，王一雪在写日记。",
          "en": "At home, Wang Yixue was writing in her diary."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-13/13-7.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一雪家的新邻居是什么人？",
            "options": [
              "中国人",
              "英国夫妻",
              "不会说中文的人"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "王一雪请邻居来家里做什么？",
            "options": [
              "教他们说中文",
              "请他们吃中国菜",
              "给他们讲旅游的事"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "我的新邻居是来自英国的夫妻。",
            "en": "My new neighbours are a married couple from the UK."
          },
          {
            "speaker": "",
            "cn": "上周我去他们家做客了。",
            "en": "Last week I went to their home as a guest."
          },
          {
            "speaker": "",
            "cn": "他们做了很多好吃的，还准备了英国的红茶。",
            "en": "They made lots of delicious food and also prepared British black tea."
          },
          {
            "speaker": "",
            "cn": "那天我跟他们一边喝红茶，一边聊天儿，直到十二点多才回家。",
            "en": "That day I drank black tea and chatted with them, and did not get home until after twelve."
          },
          {
            "speaker": "",
            "cn": "他们年轻的时候喜欢旅游，他家有一张世界地图，上面每一个红点都是他们去过的地方。",
            "en": "When they were young they loved to travel. They have a world map at home, and every red dot on it is a place they have been to."
          },
          {
            "speaker": "",
            "cn": "后来，他们感到东方的文化很特别，就开始学习中文。",
            "en": "Later, they felt that Eastern culture was very special, so they started to learn Chinese."
          },
          {
            "speaker": "",
            "cn": "今天是小明的生日，我请他们到我家玩，来看看中国人的家，也尝尝中国菜。",
            "en": "Today is Xiaoming's birthday. I invited them over to our home to see a Chinese family's home and to taste Chinese food."
          }
        ],
        "postQuestions": [
          {
            "q": "上周王一雪去邻居家做什么了？"
          },
          {
            "q": "邻居家的世界地图有什么特别的？"
          },
          {
            "q": "她的邻居为什么学习中文？"
          }
        ],
        "words": [
          {
            "cn": "来自",
            "pos": "v.",
            "en": "come from"
          },
          {
            "cn": "夫妻",
            "pos": "n.",
            "en": "husband and wife"
          },
          {
            "cn": "直到",
            "pos": "v.",
            "en": "until"
          },
          {
            "cn": "地图",
            "pos": "n.",
            "en": "map"
          },
          {
            "cn": "点",
            "pos": "n.",
            "en": "dot; spot"
          },
          {
            "cn": "感到",
            "pos": "v.",
            "en": "feel"
          },
          {
            "cn": "东方",
            "pos": "n.",
            "en": "East"
          },
          {
            "cn": "文化",
            "pos": "n.",
            "en": "culture"
          },
          {
            "cn": "英国",
            "pos": "proper noun",
            "en": "the United Kingdom (the UK)"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-13/13-8.mp3"
      }
    ]
  },
  {
    "name": "L14 · 这本书被别人借走了",
    "id": "14",
    "core": [
      {
        "hanzi": "词典",
        "en": "dictionary"
      },
      {
        "hanzi": "最好",
        "en": "had better"
      },
      {
        "hanzi": "节",
        "en": "commonly used to count class periods or sections of lessons"
      },
      {
        "hanzi": "图书馆",
        "en": "library"
      },
      {
        "hanzi": "被",
        "en": "(used to indicate the passive voice) by"
      },
      {
        "hanzi": "名人",
        "en": "celebrity"
      },
      {
        "hanzi": "故事",
        "en": "story"
      },
      {
        "hanzi": "然后",
        "en": "then"
      },
      {
        "hanzi": "报纸",
        "en": "newspaper"
      },
      {
        "hanzi": "忘记",
        "en": "forget"
      },
      {
        "hanzi": "电子书",
        "en": "e-book"
      },
      {
        "hanzi": "女生",
        "en": "girl student"
      },
      {
        "hanzi": "表演",
        "en": "perform"
      },
      {
        "hanzi": "节目",
        "en": "program"
      },
      {
        "hanzi": "怎么办",
        "en": "what to do"
      },
      {
        "hanzi": "校长",
        "en": "principal"
      },
      {
        "hanzi": "面前",
        "en": "presence"
      },
      {
        "hanzi": "有些",
        "en": "somewhat; rather"
      },
      {
        "hanzi": "相信",
        "en": "believe"
      },
      {
        "hanzi": "新年",
        "en": "New Year"
      },
      {
        "hanzi": "班级",
        "en": "classes and grades (in school)"
      },
      {
        "hanzi": "跳",
        "en": "jump"
      },
      {
        "hanzi": "留学生",
        "en": "international student; overseas student"
      },
      {
        "hanzi": "最后",
        "en": "the last; in the end"
      },
      {
        "hanzi": "一块儿",
        "en": "together; the same place"
      },
      {
        "hanzi": "网站",
        "en": "website"
      },
      {
        "hanzi": "视频",
        "en": "video"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "14-01",
        "title": {
          "cn": "在校园餐厅聊天",
          "en": "Chatting in the campus cafeteria",
          "emoji": "🍽️"
        },
        "intro": {
          "cn": "在校园餐厅，李文和白家月正在聊天儿。",
          "en": "In the campus cafeteria, Li Wen and Bai Jiayue were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-14/14-1.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "白家月下午要帮李文做什么？",
            "options": [
              "借词典",
              "还词典",
              "找一本书"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "白家月是怎么知道《名人的故事》这本书的？",
            "options": [
              "她有一本",
              "她听说过",
              "她在图书馆借过"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "李文",
            "cn": "我借的这本词典最好今天还，但是我没时间去。",
            "en": "The dictionary I borrowed is due today, but I don't have time to return it."
          },
          {
            "speaker": "白家月",
            "cn": "下午我只有两节课，可以帮你去图书馆还书。",
            "en": "I only have two classes this afternoon, so I can help you return it to the library."
          },
          {
            "speaker": "李文",
            "cn": "那太谢谢了。你能再帮我借本书吗？",
            "en": "Thank you so much! Could you also help me borrow another book?"
          },
          {
            "speaker": "白家月",
            "cn": "行，你告诉我书名。",
            "en": "Sure, just tell me the title."
          },
          {
            "speaker": "李文",
            "cn": "我把名字写在纸上吧。我去了好几次图书馆，这本书都被别人借走了。",
            "en": "I'll write it down for you. I've been to the library several times, but this book is always checked out."
          },
          {
            "speaker": "白家月",
            "cn": "《名人的故事》？我有这本书。明天我借给你吧。",
            "en": "Stories of Celebrities? I have that book—I'll lend it to you tomorrow."
          }
        ],
        "postQuestions": [
          {
            "q": "李文请白家月帮他借什么书？"
          },
          {
            "q": "李文为什么没借到这本书？"
          },
          {
            "q": "李文把书名写在哪儿了？"
          }
        ],
        "words": [
          {
            "cn": "词典",
            "pos": "n.",
            "en": "dictionary"
          },
          {
            "cn": "最好",
            "pos": "adv.",
            "en": "had better"
          },
          {
            "cn": "节",
            "pos": "m.",
            "en": "commonly used to count class periods or sections of lessons"
          },
          {
            "cn": "图书馆",
            "pos": "n.",
            "en": "library"
          },
          {
            "cn": "被",
            "pos": "prep.",
            "en": "(used to indicate the passive voice) by"
          },
          {
            "cn": "名人",
            "pos": "n.",
            "en": "celebrity"
          },
          {
            "cn": "故事",
            "pos": "n.",
            "en": "story"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-14/14-2.mp3"
      },
      {
        "id": "14-02",
        "title": {
          "cn": "在校园里",
          "en": "On campus",
          "emoji": "🎓"
        },
        "intro": {
          "cn": "在校园里，白家月和安妮在聊天儿。",
          "en": "On campus, Bai Jiayue and Annie were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-14/14-3.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "下课以后白家月要做什么？",
            "options": [
              "去图书馆",
              "找校园卡",
              "跟陈天中去游泳"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "安妮觉得进不去图书馆可以怎么做？",
            "options": [
              "找李文借书",
              "上网借电子书",
              "借朋友的校园卡"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "安妮",
            "cn": "今天下课早，你一会儿做什么？",
            "en": "Classes ended early today. What are your plans for later?"
          },
          {
            "speaker": "白家月",
            "cn": "我今天忙得很，要先去图书馆借书，然后去游泳。",
            "en": "I'm really busy today. First, I need to go to the library to borrow some books, and then I'm going swimming."
          },
          {
            "speaker": "安妮",
            "cn": "咱们一起走吧，我想去图书馆看看中文报纸。",
            "en": "Let's go together. I want to check out some Chinese newspapers at the library."
          },
          {
            "speaker": "白家月",
            "cn": "等等，我的校园卡不见了，没有卡进不去图书馆。",
            "en": "Wait a minute—my campus card is missing. I won't be able to enter the library without it."
          },
          {
            "speaker": "安妮",
            "cn": "你想想上一次用是什么时候？",
            "en": "Do you remember when you last used it?"
          },
          {
            "speaker": "白家月",
            "cn": "我忘记了，可能被我放在家里了。",
            "en": "I don't remember. Maybe I left it at home."
          },
          {
            "speaker": "安妮",
            "cn": "进不去图书馆也没关系，上网看看有没有电子书。",
            "en": "It's okay if you can't get into the library. You can look for e-books online instead."
          },
          {
            "speaker": "白家月",
            "cn": "不行，我必须去，我还得帮李文还书呢。",
            "en": "No, I have to go. I have to return Li Wen's book."
          }
        ],
        "postQuestions": [
          {
            "q": "下课以后安妮要做什么？"
          },
          {
            "q": "白家月为什么不能进图书馆？"
          },
          {
            "q": "白家月觉得校园卡可能在哪儿？"
          }
        ],
        "words": [
          {
            "cn": "然后",
            "pos": "conj.",
            "en": "then"
          },
          {
            "cn": "报纸",
            "pos": "n.",
            "en": "newspaper"
          },
          {
            "cn": "忘记",
            "pos": "v.",
            "en": "forget"
          },
          {
            "cn": "电子书",
            "pos": "n.",
            "en": "e-book"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-14/14-4.mp3"
      },
      {
        "id": "14-03",
        "title": {
          "cn": "学校晚会",
          "en": "The school party",
          "emoji": "🎤"
        },
        "intro": {
          "cn": "在校园餐厅，李文和白家月边吃边聊。",
          "en": "In the campus cafeteria, Li Wen and Bai Jiayue were chatting while eating."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-14/14-5.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "李文和白家月在说什么？",
            "options": [
              "学校的晚会",
              "学唱中文歌",
              "参加唱歌比赛"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "李文想怎么表演节目？",
            "options": [
              "自己跳舞",
              "一个人唱歌",
              "找人一起表演"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "李文",
            "cn": "下周学校有晚会，你知道吗？",
            "en": "There's a school party next week. Have you heard about it?"
          },
          {
            "speaker": "白家月",
            "cn": "知道，我和几个女生要表演一个节目。你也参加吗？",
            "en": "Yes, a few other girls and I are going to perform. Are you joining too?"
          },
          {
            "speaker": "李文",
            "cn": "我想唱中文歌，但是还没找到人一起表演，不知道怎么办。",
            "en": "I want to sing a Chinese song, but I haven't found anyone to perform with yet. I'm not sure what to do."
          },
          {
            "speaker": "白家月",
            "cn": "找不到人，你就一个人唱吧。",
            "en": "If you can't find anyone, just perform solo."
          },
          {
            "speaker": "李文",
            "cn": "一想到要在校长、老师和那么多同学面前表演，我就有些紧张。",
            "en": "Just thinking about performing in front of the principal, teachers, and so many classmates makes me a bit nervous."
          },
          {
            "speaker": "白家月",
            "cn": "紧张什么啊，我们都喜欢听你唱歌，你要相信自己。",
            "en": "What's there to be nervous about? We all love hearing you sing. You just need to believe in yourself."
          }
        ],
        "postQuestions": [
          {
            "q": "白家月要在晚上做什么？"
          },
          {
            "q": "李文为什么紧张？"
          },
          {
            "q": "听说李文有点儿紧张，白家月是怎么说的？"
          }
        ],
        "words": [
          {
            "cn": "女生",
            "pos": "n.",
            "en": "girl student"
          },
          {
            "cn": "表演",
            "pos": "v.",
            "en": "perform"
          },
          {
            "cn": "节目",
            "pos": "n.",
            "en": "program"
          },
          {
            "cn": "怎么办",
            "pos": "",
            "en": "what to do"
          },
          {
            "cn": "校长",
            "pos": "n.",
            "en": "principal"
          },
          {
            "cn": "面前",
            "pos": "n.",
            "en": "presence"
          },
          {
            "cn": "有些",
            "pos": "adv.",
            "en": "somewhat; rather"
          },
          {
            "cn": "相信",
            "pos": "v.",
            "en": "believe"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-14/14-6.mp3"
      },
      {
        "id": "14-04",
        "title": {
          "cn": "白家月的日记",
          "en": "Bai Jiayue's diary",
          "emoji": "📔"
        },
        "intro": {
          "cn": "在家里，白家月在写日记。",
          "en": "At home, Bai Jiayue was writing in her diary."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-14/14-7.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "昨天的晚会谁表演节目了？",
            "options": [
              "校长",
              "一些老师",
              "每个班级的同学"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "白家月为什么累坏了？",
            "options": [
              "又唱又跳",
              "给同学们拍照",
              "表演了很多节目"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "昨天是我们学校的新年晚会，每个班级的同学都表演节目了。",
            "en": "Yesterday was our school's New Year's party, and students from every class put on performances."
          },
          {
            "speaker": "",
            "cn": "晚会是八点开始的，差不多十二点才结束。",
            "en": "The party started at 8 p.m. and didn't end until nearly midnight."
          },
          {
            "speaker": "",
            "cn": "我一个晚上跟大家又唱又跳，开心极了，也累坏了。",
            "en": "I spent the whole evening singing and dancing with everyone—it was so much fun, but I was completely worn out."
          },
          {
            "speaker": "",
            "cn": "我最喜欢的节目是留学生们跳舞，最后老师和校长也被叫起来一块儿跳，特别有意思。",
            "en": "My favorite act was the dance by the international students. Toward the end, even the teachers and the principal were invited to join the dance floor, which made it especially entertaining."
          },
          {
            "speaker": "",
            "cn": "过几天学校的网站上会有晚会的视频，我打算再看一遍。",
            "en": "In a few days, the videos will be uploaded to the school's website, and I'm planning to watch them again."
          }
        ],
        "postQuestions": [
          {
            "q": "晚会是什么时候开始的？什么时候结束的？"
          },
          {
            "q": "白家月最喜欢哪个节目？为什么？"
          },
          {
            "q": "过几天白家月打算做什么？"
          }
        ],
        "words": [
          {
            "cn": "新年",
            "pos": "n.",
            "en": "New Year"
          },
          {
            "cn": "班级",
            "pos": "n.",
            "en": "classes and grades (in school)"
          },
          {
            "cn": "跳",
            "pos": "v.",
            "en": "jump"
          },
          {
            "cn": "留学生",
            "pos": "n.",
            "en": "international student; overseas student"
          },
          {
            "cn": "最后",
            "pos": "n.",
            "en": "the last; in the end"
          },
          {
            "cn": "一块儿",
            "pos": "adv./n.",
            "en": "together; the same place"
          },
          {
            "cn": "网站",
            "pos": "n.",
            "en": "website"
          },
          {
            "cn": "视频",
            "pos": "n.",
            "en": "video"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-14/14-8.mp3"
      }
    ]
  },
  {
    "name": "L15 · 我是半个南京人",
    "id": "15",
    "core": [
      {
        "hanzi": "蓝",
        "en": "blue"
      },
      {
        "hanzi": "段",
        "en": "used to indicate a period or section of sth that is continuous, such as time or distance"
      },
      {
        "hanzi": "附近",
        "en": "nearby"
      },
      {
        "hanzi": "马路",
        "en": "road"
      },
      {
        "hanzi": "平时",
        "en": "usually; normal times"
      },
      {
        "hanzi": "放学",
        "en": "(of school) let out"
      },
      {
        "hanzi": "游戏",
        "en": "game"
      },
      {
        "hanzi": "老人",
        "en": "elderly people"
      },
      {
        "hanzi": "根据",
        "en": "according to; depend on"
      },
      {
        "hanzi": "了解",
        "en": "understand; know"
      },
      {
        "hanzi": "可是",
        "en": "but; yet"
      },
      {
        "hanzi": "以上",
        "en": "more than; over"
      },
      {
        "hanzi": "有名",
        "en": "famous; well-known"
      },
      {
        "hanzi": "景点",
        "en": "scenic spot"
      },
      {
        "hanzi": "游客",
        "en": "tourist"
      },
      {
        "hanzi": "外地",
        "en": "other place"
      },
      {
        "hanzi": "聊",
        "en": "chat"
      },
      {
        "hanzi": "南京",
        "en": "Nanjing"
      },
      {
        "hanzi": "河",
        "en": "river"
      },
      {
        "hanzi": "关系",
        "en": "relationship"
      },
      {
        "hanzi": "养",
        "en": "raise; keep"
      },
      {
        "hanzi": "黄河",
        "en": "the Yellow River"
      },
      {
        "hanzi": "西北",
        "en": "northwest"
      },
      {
        "hanzi": "经过",
        "en": "pass by; process"
      },
      {
        "hanzi": "草地",
        "en": "meadow"
      },
      {
        "hanzi": "遇见",
        "en": "meet"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "15-01",
        "title": {
          "cn": "在办公室里聊天",
          "en": "Chatting in the office",
          "emoji": "🏢"
        },
        "intro": {
          "cn": "在办公室里，王一雪和杨同乐在聊天儿。",
          "en": "In the office, Wang Yixue and Yang Tongle were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-15/15-1.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "杨同乐和王一雪在说什么？",
            "options": [
              "小区里的老人",
              "小区里的孩子",
              "蓝天小区怎么样"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "杨同乐为什么对蓝天小区感兴趣？",
            "options": [
              "他想搬家",
              "他想买房子",
              "他想跟王一雪做邻居"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "杨同乐",
            "cn": "您搬到蓝天小区一段时间了，觉得怎么样？",
            "en": "You've been living in the Lantian Neighborhood for a while now. How do you like it?"
          },
          {
            "speaker": "王一雪",
            "cn": "小区环境挺好的，附近买东西也很方便，过马路就是超市。",
            "en": "The surroundings are quite nice, and it's very convenient for shopping. There's a supermarket right across the street."
          },
          {
            "speaker": "杨同乐",
            "cn": "平时孩子们在哪儿玩？",
            "en": "Where do the kids usually play?"
          },
          {
            "speaker": "王一雪",
            "cn": "小区里有很多树，孩子们放学后就在树下做游戏。你想买房子吗？",
            "en": "There are plenty of trees in the community, so after school, the kids play games under them. Are you thinking about buying a house?"
          },
          {
            "speaker": "杨同乐",
            "cn": "是。我想买一个大房子，让我爸妈过来跟我一起住。",
            "en": "Yes, I want to buy a big house so my parents can come and live with me."
          },
          {
            "speaker": "王一雪",
            "cn": "蓝天小区的老人挺多的，这几年小区根据他们的需要，有了很多变化。",
            "en": "There are quite a few elderly people in Lantian Neighborhood, and in recent years the community has made many changes to suit them."
          },
          {
            "speaker": "杨同乐",
            "cn": "真不错！过几天我去蓝天小区看看。",
            "en": "That sounds great! I'll go check out Lantian Neighborhood in a few days."
          }
        ],
        "postQuestions": [
          {
            "q": "蓝天小区附近买东西方便吗？"
          },
          {
            "q": "蓝天小区的孩子们放学后都在哪里玩？"
          },
          {
            "q": "蓝天小区为老人做什么了？"
          }
        ],
        "words": [
          {
            "cn": "蓝",
            "pos": "adj.",
            "en": "blue"
          },
          {
            "cn": "段",
            "pos": "m.",
            "en": "used to indicate a period or section of sth that is continuous, such as time or distance"
          },
          {
            "cn": "附近",
            "pos": "n.",
            "en": "nearby"
          },
          {
            "cn": "马路",
            "pos": "n.",
            "en": "road"
          },
          {
            "cn": "平时",
            "pos": "n.",
            "en": "usually; normal times"
          },
          {
            "cn": "放学",
            "pos": "v.",
            "en": "(of school) let out"
          },
          {
            "cn": "游戏",
            "pos": "n.",
            "en": "game"
          },
          {
            "cn": "老人",
            "pos": "n.",
            "en": "elderly people"
          },
          {
            "cn": "根据",
            "pos": "prep./v.",
            "en": "according to; depend on"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-15/15-2.mp3"
      },
      {
        "id": "15-02",
        "title": {
          "cn": "聊南京",
          "en": "Talking about Nanjing",
          "emoji": "🏙️"
        },
        "intro": {
          "cn": "在办公室里，王一雪和杨同乐在聊天儿。",
          "en": "In the office, Wang Yixue and Yang Tongle were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-15/15-3.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一雪和杨同乐在聊什么？",
            "options": [
              "在南京旅游",
              "下班后吃什么",
              "杨同乐的大学"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "南京是一个什么样的城市？",
            "options": [
              "有很多游客去旅游",
              "有一千年以上的历史",
              "有很多南京人不知道的景点"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "王一雪",
            "cn": "假期我想去南京旅游，但是我不太了解那里。",
            "en": "I'm thinking of going to Nanjing for the vacation, but I don't know much about it."
          },
          {
            "speaker": "杨同乐",
            "cn": "我虽然不是南京人，可是我是在南京上的大学，可以说是半个南京人。",
            "en": "Although I'm not from Nanjing, I went to university there, so I'm basically half a local."
          },
          {
            "speaker": "王一雪",
            "cn": "太好了！你快给我介绍一下南京吧。",
            "en": "That's great! Could you tell me more about Nanjing?"
          },
          {
            "speaker": "杨同乐",
            "cn": "南京有两千年以上的历史，有老城、老街，还有很多有名的景点，每年去旅游的游客特别多。",
            "en": "Nanjing has a history of over 2000 years. It's got ancient city walls, historic streets, and famous landmarks. It attracts countless tourists every year."
          },
          {
            "speaker": "王一雪",
            "cn": "除了这些以外，你再告诉我一些外地人不知道的地方。",
            "en": "Besides those popular tourist spots, do you have any recommendations for hidden gems?"
          },
          {
            "speaker": "杨同乐",
            "cn": "那太多了，我得一点儿一点儿给您讲。",
            "en": "There are so many! It would take a while to list them all."
          },
          {
            "speaker": "王一雪",
            "cn": "行，下班后我请你吃晚饭，咱们边吃边聊。",
            "en": "Sounds good. Let me buy you dinner after work, and we can chat over a meal."
          }
        ],
        "postQuestions": [
          {
            "q": "王一雪了解南京吗？"
          },
          {
            "q": "杨同乐为什么了解南京？"
          },
          {
            "q": "王一雪为什么请杨同乐吃晚饭？"
          }
        ],
        "words": [
          {
            "cn": "了解",
            "pos": "v.",
            "en": "understand; know"
          },
          {
            "cn": "可是",
            "pos": "conj.",
            "en": "but; yet"
          },
          {
            "cn": "以上",
            "pos": "n.",
            "en": "more than; over"
          },
          {
            "cn": "有名",
            "pos": "adj.",
            "en": "famous; well-known"
          },
          {
            "cn": "景点",
            "pos": "n.",
            "en": "scenic spot"
          },
          {
            "cn": "游客",
            "pos": "n.",
            "en": "tourist"
          },
          {
            "cn": "外地",
            "pos": "n.",
            "en": "other place"
          },
          {
            "cn": "聊",
            "pos": "v.",
            "en": "chat"
          },
          {
            "cn": "南京",
            "pos": "",
            "en": "Nanjing"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-15/15-4.mp3"
      },
      {
        "id": "15-03",
        "title": {
          "cn": "聊黄河",
          "en": "Talking about the Yellow River",
          "emoji": "🌊"
        },
        "intro": {
          "cn": "在家里，王一雪和刘小明在聊天儿。",
          "en": "At home, Wang Yixue and Liu Xiaoming were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-15/15-5.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一雪和刘小明在聊什么？",
            "options": [
              "最长的河",
              "黄河的历史",
              "学校的作业"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "刘小明对黄河了解多少？",
            "options": [
              "一点儿都不了解",
              "了解一些",
              "什么都知道"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "王一雪",
            "cn": "小明，中国有一条大河，它的名字跟颜色有关系，你知道是什么河吗？",
            "en": "Xiaoming, there is a major river in China named after a color. Do you know which river it is?"
          },
          {
            "speaker": "刘小明",
            "cn": "我知道，是黄河！",
            "en": "I know! It's the Yellow River!"
          },
          {
            "speaker": "王一雪",
            "cn": "你说对了。我再问问你，你知道它为什么叫黄河吗？",
            "en": "That's right. Here's another question—do you know why it's called the Yellow River?"
          },
          {
            "speaker": "刘小明",
            "cn": "因为河水看起来是黄色的，所以叫这个名字。黄河是中国最长的河吗？",
            "en": "It's because the water looks yellow! By the way, is the Yellow River the longest river in China?"
          },
          {
            "speaker": "王一雪",
            "cn": "不是。黄河虽然不是最长的河，可是在历史上很重要。",
            "en": "No, the Yellow River isn't the longest, but it is historically very important."
          },
          {
            "speaker": "刘小明",
            "cn": "这个我知道。很久以前，很多中国人都住在黄河边上。",
            "en": "I know! A long time ago, many Chinese people lived along the Yellow River."
          },
          {
            "speaker": "王一雪",
            "cn": "对。在我们中国人看来，黄河像妈妈一样，养了我们几千年。",
            "en": "Exactly. To us Chinese, the Yellow River is like a mother—it has nurtured us for thousands of years."
          }
        ],
        "postQuestions": [
          {
            "q": "黄河的名字为什么跟“黄”这个颜色有关系？"
          },
          {
            "q": "黄河是中国最长的河吗？"
          },
          {
            "q": "在中国人看来，黄河像什么一样？为什么？"
          }
        ],
        "words": [
          {
            "cn": "河",
            "pos": "n.",
            "en": "river"
          },
          {
            "cn": "关系",
            "pos": "n.",
            "en": "relationship"
          },
          {
            "cn": "养",
            "pos": "v.",
            "en": "raise; keep"
          },
          {
            "cn": "黄河",
            "pos": "",
            "en": "the Yellow River"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-15/15-6.mp3"
      },
      {
        "id": "15-04",
        "title": {
          "cn": "王一雪的日记",
          "en": "Wang Yixue's diary",
          "emoji": "📔"
        },
        "intro": {
          "cn": "在家里，王一雪在写日记。",
          "en": "At home, Wang Yixue was writing in her diary."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-15/15-7.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一雪小时候住的地方是什么样的？",
            "options": [
              "她家住在河边",
              "她家在北京的南边",
              "离她家很远的地方有一条河"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "遇到不开心的事情，王一雪怎么办？",
            "options": [
              "去河里游泳",
              "去河边坐着",
              "一个人在家"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "我小时候住在北京的西北边，有一条非常有名的河经过那里。",
            "en": "When I was little, I lived in the northwest part of Beijing, where a very famous river flowed by."
          },
          {
            "speaker": "",
            "cn": "我家就住在河边。那里有高高的大树和绿绿的草地。",
            "en": "My home was right by the river. There were tall trees and lush green grass all around."
          },
          {
            "speaker": "",
            "cn": "春天，河边的花都开了，看起来特别漂亮。",
            "en": "In spring, flowers along the riverbank would bloom, making the scenery especially beautiful."
          },
          {
            "speaker": "",
            "cn": "还记得小时候，一到夏天我就去河里游泳。",
            "en": "I still remember that every summer, I would go swimming in the river."
          },
          {
            "speaker": "",
            "cn": "长大以后，遇到什么不开心的事情，我就去河边的树下坐着，听听鸟叫，看看河水，跟遇见的朋友聊聊天儿，难过的事情不一会儿就忘了。",
            "en": "As I grew older, whenever I felt unhappy, I would sit under the trees by the river, listening to the birds, watching the flowing water, and chatting with friends I met there. My sadness would melt away in no time."
          },
          {
            "speaker": "",
            "cn": "那是我最喜欢的地方。",
            "en": "That's my favorite place."
          }
        ],
        "postQuestions": [
          {
            "q": "王一雪小时候住的地方环境怎么样？"
          },
          {
            "q": "小时候，王一雪一到夏天就做什么？"
          },
          {
            "q": "长大以后，王一雪会去河边做什么？"
          }
        ],
        "words": [
          {
            "cn": "西北",
            "pos": "n.",
            "en": "northwest"
          },
          {
            "cn": "经过",
            "pos": "v./n.",
            "en": "pass by; process"
          },
          {
            "cn": "草地",
            "pos": "n.",
            "en": "meadow"
          },
          {
            "cn": "遇见",
            "pos": "v.",
            "en": "meet"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-15/15-8.mp3"
      }
    ]
  },
  {
    "name": "L16 · 我听说有的熊猫出国了",
    "id": "16",
    "core": [
      {
        "hanzi": "脏",
        "en": "dirty"
      },
      {
        "hanzi": "可爱",
        "en": "cute; lovely"
      },
      {
        "hanzi": "一会儿",
        "en": "now...now/then..."
      },
      {
        "hanzi": "脚",
        "en": "foot"
      },
      {
        "hanzi": "照顾",
        "en": "take care of; look after"
      },
      {
        "hanzi": "好像",
        "en": "seem; be like"
      },
      {
        "hanzi": "认得",
        "en": "know; recognize"
      },
      {
        "hanzi": "周末",
        "en": "weekend"
      },
      {
        "hanzi": "动物园",
        "en": "zoo"
      },
      {
        "hanzi": "动物",
        "en": "animal"
      },
      {
        "hanzi": "大熊猫",
        "en": "giant panda"
      },
      {
        "hanzi": "奇怪",
        "en": "strange"
      },
      {
        "hanzi": "其实",
        "en": "actually"
      },
      {
        "hanzi": "竹子",
        "en": "bamboo"
      },
      {
        "hanzi": "国宝",
        "en": "national treasure"
      },
      {
        "hanzi": "全",
        "en": "whole; entire"
      },
      {
        "hanzi": "野生",
        "en": "wild"
      },
      {
        "hanzi": "关于",
        "en": "about"
      },
      {
        "hanzi": "饱",
        "en": "full"
      },
      {
        "hanzi": "张",
        "en": "open"
      },
      {
        "hanzi": "嘴",
        "en": "mouth"
      },
      {
        "hanzi": "身边",
        "en": "one's side"
      },
      {
        "hanzi": "半天",
        "en": "quite a while"
      },
      {
        "hanzi": "脸",
        "en": "face"
      },
      {
        "hanzi": "大人",
        "en": "adult"
      },
      {
        "hanzi": "喜爱",
        "en": "love; be fond of"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "16-01",
        "title": {
          "cn": "在宠物领养店",
          "en": "At the pet adoption center",
          "emoji": "🐱"
        },
        "intro": {
          "cn": "在一家宠物领养店，王一雪和孩子们在看动物。",
          "en": "At a pet adoption center, Wang Yixue and the children were looking at the animals."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-16/16-1.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "这只小猫养了多久了？",
            "options": [
              "第一天养",
              "养了一年多了",
              "养了很多年了"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "现在这只小猫是什么样的？",
            "options": [
              "特别小",
              "特别可爱",
              "不太干净"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "刘小雪",
            "cn": "这只小猫你们养了多久了？",
            "en": "How long have you been taking care of this kitten?"
          },
          {
            "speaker": "服务员",
            "cn": "已经一年多了。第一天看见它的时候，它又脏又小。现在它变得又干净又漂亮了。",
            "en": "Over a year now. When we first found it, it was dirty and tiny. Now it's so clean and beautiful!"
          },
          {
            "speaker": "刘小雪",
            "cn": "是啊。它还特别可爱，一会儿在你脚边睡觉，一会儿在你身上爬。",
            "en": "Exactly! It's also super cute—sometimes it sleeps by your feet, and sometimes it climbs all over you."
          },
          {
            "speaker": "服务员",
            "cn": "你们把它照顾得真好。",
            "en": "You've really taken great care of it."
          },
          {
            "speaker": "刘小雪",
            "cn": "它就好像我们的孩子，我们照顾它，它也认得我们了。",
            "en": "It feels like it's our own child. We take care of it, and now it knows us."
          },
          {
            "speaker": "服务员",
            "cn": "妈妈，我们家也养一只小猫吧。",
            "en": "Mom, can we get a kitten?"
          },
          {
            "speaker": "王一雪",
            "cn": "咱们没时间照顾，还是别养了，我周末带你们去北京动物园看动物吧。",
            "en": "We don't have time to take care of one. How about I take you to the Beijing Zoo this weekend to see the animals instead?"
          }
        ],
        "postQuestions": [
          {
            "q": "服务员第一天看见这只小猫的时候，它是什么样的？"
          },
          {
            "q": "服务员为什么觉得小猫很可爱？"
          },
          {
            "q": "服务员和小猫的关系怎么样？"
          }
        ],
        "words": [
          {
            "cn": "脏",
            "pos": "adj.",
            "en": "dirty"
          },
          {
            "cn": "可爱",
            "pos": "adj.",
            "en": "cute; lovely"
          },
          {
            "cn": "一会儿",
            "pos": "adv.",
            "en": "now...now/then..."
          },
          {
            "cn": "脚",
            "pos": "n.",
            "en": "foot"
          },
          {
            "cn": "照顾",
            "pos": "v.",
            "en": "take care of; look after"
          },
          {
            "cn": "好像",
            "pos": "v.",
            "en": "seem; be like"
          },
          {
            "cn": "认得",
            "pos": "v.",
            "en": "know; recognize"
          },
          {
            "cn": "周末",
            "pos": "n.",
            "en": "weekend"
          },
          {
            "cn": "动物园",
            "pos": "n.",
            "en": "zoo"
          },
          {
            "cn": "动物",
            "pos": "n.",
            "en": "animal"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-16/16-2.mp3"
      },
      {
        "id": "16-02",
        "title": {
          "cn": "聊大熊猫",
          "en": "Talking about giant pandas",
          "emoji": "🐼"
        },
        "intro": {
          "cn": "在动物园，王一雪和孩子们边走边聊。",
          "en": "At the zoo, Wang Yixue and her children were chatting while walking."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-16/16-3.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一雪和孩子们在聊什么？",
            "options": [
              "大熊猫",
              "北京动物园",
              "动物和人的不同"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "刘小雪为什么说弟弟是“十万个为什么”？",
            "options": [
              "弟弟喜欢看书",
              "弟弟喜欢听故事",
              "弟弟喜欢问问题"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "刘小明",
            "cn": "妈妈，大熊猫这个名字很奇怪，它们跟猫有什么关系？",
            "en": "Mom, the Chinese name “giant panda” sounds so strange. What do they have to do with cats?"
          },
          {
            "speaker": "王一雪",
            "cn": "这个问题问得好，它们跟猫没什么关系，其实应该叫大猫熊。",
            "en": "That's a great question. They have nothing to do with cats. Actually, they should be called “Giant Cat-Bears”."
          },
          {
            "speaker": "刘小明",
            "cn": "大熊猫为什么只吃竹子不吃肉？",
            "en": "Why do giant pandas only eat bamboo and not meat?"
          },
          {
            "speaker": "王一雪",
            "cn": "它们跟人一样，也可以吃肉，但是对肉不感兴趣。",
            "en": "They can eat meat, just like us, but they're simply not interested in it."
          },
          {
            "speaker": "刘小明",
            "cn": "大熊猫为什么是中国的国宝？",
            "en": "Why are giant pandas considered China's national treasure?"
          },
          {
            "speaker": "王一雪",
            "cn": "全世界只有中国有野生大熊猫，中国是大熊猫的家。",
            "en": "China is the only country with wild giant pandas—it's their natural home."
          },
          {
            "speaker": "刘小明",
            "cn": "我听说有的熊猫出国了，他们去哪儿了？",
            "en": "I heard some pandas have been sent abroad. Where did they go?"
          },
          {
            "speaker": "王一雪",
            "cn": "关于这个问题，我得慢慢给你讲。",
            "en": "That's a long story! I'll have to tell you about it bit by bit."
          },
          {
            "speaker": "刘小雪",
            "cn": "弟弟，你真是“十万个为什么”！",
            "en": "Little brother, you're like a walking “One Hundred Thousand Whys”."
          }
        ],
        "postQuestions": [
          {
            "q": "大熊猫跟猫有关系吗？"
          },
          {
            "q": "大熊猫为什么只吃竹子不吃肉？"
          },
          {
            "q": "大熊猫为什么是中国的国宝？"
          }
        ],
        "words": [
          {
            "cn": "大熊猫",
            "pos": "n.",
            "en": "giant panda"
          },
          {
            "cn": "奇怪",
            "pos": "adj.",
            "en": "strange"
          },
          {
            "cn": "其实",
            "pos": "adv.",
            "en": "actually"
          },
          {
            "cn": "竹子",
            "pos": "n.",
            "en": "bamboo"
          },
          {
            "cn": "国宝",
            "pos": "n.",
            "en": "national treasure"
          },
          {
            "cn": "全",
            "pos": "adj.",
            "en": "whole; entire"
          },
          {
            "cn": "野生",
            "pos": "adj.",
            "en": "wild"
          },
          {
            "cn": "关于",
            "pos": "prep.",
            "en": "about"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-16/16-4.mp3"
      },
      {
        "id": "16-03",
        "title": {
          "cn": "在熊猫馆",
          "en": "At the Panda House",
          "emoji": "🎋"
        },
        "intro": {
          "cn": "在熊猫馆，王一雪和孩子们在看大熊猫。",
          "en": "At the Panda House, Wang Yixue and the children were watching the giant pandas."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-16/16-5.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "一般来说，大熊猫每天做什么？",
            "options": [
              "爬来爬去",
              "跟人拍照",
              "吃东西和睡觉"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "刘小雪让妈妈帮她做什么？",
            "options": [
              "照一张照片",
              "买一些吃的",
              "找一只熊猫"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "刘小雪",
            "cn": "这只大熊猫一会儿爬上去，一会儿跳下来，可爱极了！",
            "en": "This giant panda keeps climbing up and down—it's so adorable!"
          },
          {
            "speaker": "王一雪",
            "cn": "它好像还没吃饱，站起来张着嘴找吃的呢。",
            "en": "It seems like it's still hungry. Look, it's standing up with its mouth open, trying to find something to eat."
          },
          {
            "speaker": "刘小雪",
            "cn": "它身边那只熊猫半天没动，是不是在睡觉呢？",
            "en": "The panda next to it hasn't moved in a while. Is it sleeping?"
          },
          {
            "speaker": "王一雪",
            "cn": "我看不见它的脸，可能是吧。一般来说，熊猫每天要睡很多次觉。",
            "en": "I can't see its face, so maybe it is. You know, pandas usually nap a lot during the day."
          },
          {
            "speaker": "刘小雪",
            "cn": "对，除了睡觉以外，很多时间都在吃东西。",
            "en": "Right, and when they are not sleeping, they spend most of their time eating."
          },
          {
            "speaker": "刘小明",
            "cn": "大熊猫的生活真舒服啊！",
            "en": "What a relaxing life!"
          },
          {
            "speaker": "刘小雪",
            "cn": "妈妈，您帮我和这两只大熊猫照一张照片吧。",
            "en": "Mom, can you take a picture of me with these two giant pandas?"
          }
        ],
        "postQuestions": [
          {
            "q": "刘小雪为什么觉得这只大熊猫可爱极了？"
          },
          {
            "q": "王一雪为什么觉得它没吃饱？"
          },
          {
            "q": "刘小明觉得大熊猫的生活怎么样？"
          }
        ],
        "words": [
          {
            "cn": "饱",
            "pos": "adj.",
            "en": "full"
          },
          {
            "cn": "张",
            "pos": "v.",
            "en": "open"
          },
          {
            "cn": "嘴",
            "pos": "n.",
            "en": "mouth"
          },
          {
            "cn": "身边",
            "pos": "n.",
            "en": "one's side"
          },
          {
            "cn": "半天",
            "pos": "num.-m.",
            "en": "quite a while"
          },
          {
            "cn": "脸",
            "pos": "n.",
            "en": "face"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-16/16-6.mp3"
      },
      {
        "id": "16-04",
        "title": {
          "cn": "王一雪的日记",
          "en": "Wang Yixue's diary",
          "emoji": "📔"
        },
        "intro": {
          "cn": "在家里，王一雪在写日记。",
          "en": "At home, Wang Yixue was writing in her diary."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-16/16-7.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "游客最喜欢去北京动物园看什么动物？",
            "options": [
              "牛",
              "羊",
              "大熊猫"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "北京动物园早上几点开门？",
            "options": [
              "六点",
              "七点",
              "七点半"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "今天我带小雪和小明去动物园玩了。",
            "en": "Today, I took Xiaoxue and Xiaoming to the zoo."
          },
          {
            "speaker": "",
            "cn": "北京动物园是中国很有名的动物园，里面有非常多的动物，当然，大人和孩子最喜爱的还是大熊猫。",
            "en": "The Beijing Zoo is one of the most famous zoos in China and is home to a wide variety of animals. Of course, the giant pandas are favorites among both adults and children."
          },
          {
            "speaker": "",
            "cn": "每天有很多游客去熊猫馆，他们带着相机去给可爱的大熊猫拍照。",
            "en": "Every day, many visitors flock to the Panda House, bringing their cameras to take photos of these adorable animals."
          },
          {
            "speaker": "",
            "cn": "动物园早上七点半开门，晚上七点关门，冬天比夏天游客少，所以也比平时早关门一个小时。",
            "en": "The zoo opens at 7:30 a.m. and closes at 7:00 p.m. In winter, there are fewer visitors than in summer, so it closes an hour earlier."
          },
          {
            "speaker": "",
            "cn": "如果第一次来北京旅游，跟家人一起去北京动物园是个不错的选择。",
            "en": "If it's your first time visiting Beijing, a trip to the Beijing Zoo with your family is definitely a great choice."
          }
        ],
        "postQuestions": [
          {
            "q": "今天王一雪带孩子们去哪儿了？"
          },
          {
            "q": "很多游客去动物园做什么？"
          },
          {
            "q": "北京动物园夏天和冬天的关门时间有什么不同？"
          }
        ],
        "words": [
          {
            "cn": "大人",
            "pos": "n.",
            "en": "adult"
          },
          {
            "cn": "喜爱",
            "pos": "v.",
            "en": "love; be fond of"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-16/16-8.mp3"
      }
    ]
  },
  {
    "name": "L17 · 我要多向认真的人学习",
    "id": "17",
    "core": [
      {
        "hanzi": "向",
        "en": "to; toward"
      },
      {
        "hanzi": "楼梯",
        "en": "stairs"
      },
      {
        "hanzi": "害怕",
        "en": "fear; be afraid"
      },
      {
        "hanzi": "生气",
        "en": "get angry"
      },
      {
        "hanzi": "常见",
        "en": "common"
      },
      {
        "hanzi": "聪明",
        "en": "smart; clever"
      },
      {
        "hanzi": "错",
        "en": "mistake"
      },
      {
        "hanzi": "认为",
        "en": "think; consider"
      },
      {
        "hanzi": "到处",
        "en": "everywhere"
      },
      {
        "hanzi": "继续",
        "en": "go on; continue"
      },
      {
        "hanzi": "同意",
        "en": "agree (with/to)"
      },
      {
        "hanzi": "可",
        "en": "but"
      },
      {
        "hanzi": "屋子",
        "en": "room"
      },
      {
        "hanzi": "有关",
        "en": "have something to do with; about"
      },
      {
        "hanzi": "关机",
        "en": "turn off a mobile phone"
      },
      {
        "hanzi": "前天",
        "en": "the day before yesterday"
      },
      {
        "hanzi": "留学",
        "en": "study abroad"
      },
      {
        "hanzi": "国家",
        "en": "country"
      },
      {
        "hanzi": "比如",
        "en": "for example; such as"
      },
      {
        "hanzi": "查",
        "en": "look up; consult"
      },
      {
        "hanzi": "有用",
        "en": "useful"
      },
      {
        "hanzi": "容易",
        "en": "easy"
      },
      {
        "hanzi": "回答",
        "en": "answer"
      },
      {
        "hanzi": "方向",
        "en": "direction"
      },
      {
        "hanzi": "只有",
        "en": "only"
      },
      {
        "hanzi": "真正",
        "en": "really; indeed"
      },
      {
        "hanzi": "难题",
        "en": "difficult problem"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "17-01",
        "title": {
          "cn": "在教学楼里",
          "en": "In the teaching building",
          "emoji": "🏫"
        },
        "intro": {
          "cn": "在教学楼里，刘小雪和同学边走边聊。",
          "en": "In the teaching building, Liu Xiaoxue and her classmate were chatting while walking."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-17/17-1.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "小雪的同学为什么到了李老师办公室后还向前走？",
            "options": [
              "走错了",
              "想去楼梯那儿",
              "害怕见李老师"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "小雪的同学认为自己是一个什么样的人？",
            "options": [
              "简单的",
              "不认真的",
              "不聪明的"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "刘小雪",
            "cn": "别再向前走了，李老师的办公室已经到了。",
            "en": "Let's stop here. We've already reached Ms. Li's office."
          },
          {
            "speaker": "同学",
            "cn": "你进去吧，我在楼梯那儿等你。我害怕见李老师。",
            "en": "You go in. I'll wait for you by the stairs. I'm scared to see Ms. Li."
          },
          {
            "speaker": "刘小雪",
            "cn": "怎么回事？",
            "en": "What's the matter?"
          },
          {
            "speaker": "同学",
            "cn": "最近我做错了好几件事，我怕李老师生气。",
            "en": "I've made quite a few mistakes recently, and I'm afraid Ms. Li will be upset."
          },
          {
            "speaker": "刘小雪",
            "cn": "你想多了，做错事情是很常见的。",
            "en": "You're overthinking it. Everyone makes mistakes."
          },
          {
            "speaker": "同学",
            "cn": "我把简单的事情做错了，李老师一定觉得我不认真。",
            "en": "But I got some simple things wrong. Ms. Li must think I'm not careful."
          },
          {
            "speaker": "刘小雪",
            "cn": "有的人虽然很聪明，但是会在简单的事情中出错，因为他们认为事情简单，就不会认真去做了。",
            "en": "Some people, even though they're very smart, still make mistakes on simple tasks because they think the tasks are easy and don't take them seriously."
          },
          {
            "speaker": "同学",
            "cn": "你说的就是我，以后我要多向认真的人学习。",
            "en": "That sounds just like me. From now on, I'll learn from people who are careful."
          }
        ],
        "postQuestions": [
          {
            "q": "小雪的同学为什么害怕见李老师？"
          },
          {
            "q": "小雪认为她的同学为什么做错事？"
          },
          {
            "q": "小雪的同学打算以后怎么做？"
          }
        ],
        "words": [
          {
            "cn": "向",
            "pos": "prep.",
            "en": "to; toward"
          },
          {
            "cn": "楼梯",
            "pos": "n.",
            "en": "stairs"
          },
          {
            "cn": "害怕",
            "pos": "v.",
            "en": "fear; be afraid"
          },
          {
            "cn": "生气",
            "pos": "v.",
            "en": "get angry"
          },
          {
            "cn": "常见",
            "pos": "adj.",
            "en": "common"
          },
          {
            "cn": "聪明",
            "pos": "adj.",
            "en": "smart; clever"
          },
          {
            "cn": "错",
            "pos": "n.",
            "en": "mistake"
          },
          {
            "cn": "认为",
            "pos": "v.",
            "en": "think; consider"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-17/17-2.mp3"
      },
      {
        "id": "17-02",
        "title": {
          "cn": "在阅览室门口",
          "en": "At the reading room",
          "emoji": "📚"
        },
        "intro": {
          "cn": "在阅览室门口，白家月碰到了陈天中。",
          "en": "At the entrance of the reading room, Bai Jiayue ran into Chen Tianzhong."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-17/17-3.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "同学们最近都在做什么？",
            "options": [
              "玩电脑",
              "找工作",
              "去图书馆学习"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "陈天中的爸妈希望他做什么？",
            "options": [
              "工作",
              "继续学习",
              "多去图书馆"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "白家月",
            "cn": "太阳从西边出来了？这几天怎么总是在图书馆看见你？",
            "en": "Has the sun risen in the west? I've been seeing you in the library almost every day lately."
          },
          {
            "speaker": "陈天中",
            "cn": "这有什么奇怪的？我是来学习的。",
            "en": "What's so strange about that? I come here to study."
          },
          {
            "speaker": "白家月",
            "cn": "你怎么还来图书馆学习？同学们都在到处找工作呢。",
            "en": "Why are you still studying in the library? Everyone else is busy looking for jobs!"
          },
          {
            "speaker": "陈天中",
            "cn": "我不想现在就工作，还想继续学习，我爸妈也同意。可我还没想好学什么，所以来图书馆看看。",
            "en": "I'm not ready to start working yet—I want to keep studying, and my parents agree with me. But I haven't decided what to study, so I'm coming here to see what's available."
          },
          {
            "speaker": "白家月",
            "cn": "你不是喜欢玩电脑吗？你可以去看看跟电脑有关系的书。",
            "en": "Don't you like computers? You could check out some books about them."
          },
          {
            "speaker": "陈天中",
            "cn": "你说得对，我记得那个屋子里有些跟电脑有关的书，我去找找。",
            "en": "Good idea. I remember seeing some computer books in that room—I'll go and have a look."
          }
        ],
        "postQuestions": [
          {
            "q": "白家月为什么说“太阳从西边出来了”？"
          },
          {
            "q": "陈天中为什么不去找工作？"
          },
          {
            "q": "白家月觉得陈天中可以学什么？"
          }
        ],
        "words": [
          {
            "cn": "到处",
            "pos": "adv.",
            "en": "everywhere"
          },
          {
            "cn": "继续",
            "pos": "v.",
            "en": "go on; continue"
          },
          {
            "cn": "同意",
            "pos": "v.",
            "en": "agree (with/to)"
          },
          {
            "cn": "可",
            "pos": "conj.",
            "en": "but"
          },
          {
            "cn": "屋子",
            "pos": "n.",
            "en": "room"
          },
          {
            "cn": "有关",
            "pos": "v./prep.",
            "en": "have something to do with; about"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-17/17-4.mp3"
      },
      {
        "id": "17-03",
        "title": {
          "cn": "在校园里聊留学",
          "en": "Talking about studying abroad",
          "emoji": "✈️"
        },
        "intro": {
          "cn": "在校园里，李文和陈天中在聊天儿。",
          "en": "On campus, Li Wen and Chen Tianzhong were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-17/17-5.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "李文找陈天中有什么事？",
            "options": [
              "给他出一些主意",
              "告诉他手机没电了",
              "告诉他家月也要留学"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "陈天中想好学什么了吗？",
            "options": [
              "他想学中文",
              "他想学历史",
              "他还没想好"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "李文",
            "cn": "天中，你的手机怎么关机了？",
            "en": "Tianzhong, why is your phone off?"
          },
          {
            "speaker": "陈天中",
            "cn": "我的手机没电了。你找我有事吗？",
            "en": "My phone ran out of battery. Is something wrong?"
          },
          {
            "speaker": "李文",
            "cn": "前天我看见家月了，她告诉我你打算继续留学？",
            "en": "I saw Jiayue the day before yesterday, and she told me you're planning to continue your studies abroad."
          },
          {
            "speaker": "陈天中",
            "cn": "是，可是我还没想好学什么，更没想好去哪个国家。",
            "en": "Yes, but I haven't decided what to study yet, let alone which country to go to."
          },
          {
            "speaker": "李文",
            "cn": "你可以去中国学中文啊。比如可以去北京、上海这样的大城市，那里有很多好大学，也有很多留学生。",
            "en": "Why not go to China to study Chinese? Big cities like Beijing and Shanghai have many excellent universities and lots of international students."
          },
          {
            "speaker": "陈天中",
            "cn": "好，那我上网查一查。",
            "en": "Sounds good. I'll check it out online."
          },
          {
            "speaker": "李文",
            "cn": "我给你介绍几个有用的网站。",
            "en": "I can recommend a few useful websites to you."
          }
        ],
        "postQuestions": [
          {
            "q": "陈天中打算做什么？"
          },
          {
            "q": "李文给他出了什么主意？"
          },
          {
            "q": "李文为什么给陈天中介绍几个网站？"
          }
        ],
        "words": [
          {
            "cn": "关机",
            "pos": "v.",
            "en": "turn off a mobile phone"
          },
          {
            "cn": "前天",
            "pos": "n.",
            "en": "the day before yesterday"
          },
          {
            "cn": "留学",
            "pos": "v.",
            "en": "study abroad"
          },
          {
            "cn": "国家",
            "pos": "n.",
            "en": "country"
          },
          {
            "cn": "比如",
            "pos": "v.",
            "en": "for example; such as"
          },
          {
            "cn": "查",
            "pos": "v.",
            "en": "look up; consult"
          },
          {
            "cn": "有用",
            "pos": "adj.",
            "en": "useful"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-17/17-6.mp3"
      },
      {
        "id": "17-04",
        "title": {
          "cn": "陈天中的日记",
          "en": "Chen Tianzhong's diary",
          "emoji": "📔"
        },
        "intro": {
          "cn": "在家里，陈天中在写日记。",
          "en": "At home, Chen Tianzhong was writing in his diary."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-17/17-7.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "陈天中最近在想什么？",
            "options": [
              "怎么找工作",
              "真正喜欢的同学",
              "大学结束后做什么"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "陈天中觉得怎么才能做出最合适的选择？",
            "options": [
              "听老师的话",
              "看别人怎么做",
              "想清楚自己真正喜欢什么"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "大学生活马上就要结束了，我最近经常被问到一个问题——“你以后想做什么”，这个问题真不容易回答。",
            "en": "My university life is about to end, and I've often been asked recently, “What do you want to do after graduation?”—a question that's truly not easy to answer."
          },
          {
            "speaker": "",
            "cn": "我也问了几个同学，大家选择的方向都不同。",
            "en": "I've asked several classmates too, and each has chosen a different path."
          },
          {
            "speaker": "",
            "cn": "有的想继续在学校学习，有的打算出国留学，还有的决定先找工作。",
            "en": "Some want to pursue graduate studies, some plan to study abroad, and others have decided to look for a job first."
          },
          {
            "speaker": "",
            "cn": "我认为只有想清楚自己真正喜欢什么，才能做出最合适的选择。",
            "en": "I believe only by figuring out what you truly enjoy can you make the best decision."
          },
          {
            "speaker": "",
            "cn": "对我来说，想清楚“真正喜欢什么”是个难题。",
            "en": "For me, however, finding the answer to “what I truly enjoy” remains a tough question."
          }
        ],
        "postQuestions": [
          {
            "q": "陈天中最近经常被问到什么问题？"
          },
          {
            "q": "同学们有哪些不同的选择？"
          },
          {
            "q": "陈天中知道自己真正喜欢什么吗？"
          }
        ],
        "words": [
          {
            "cn": "容易",
            "pos": "adj.",
            "en": "easy"
          },
          {
            "cn": "回答",
            "pos": "v.",
            "en": "answer"
          },
          {
            "cn": "方向",
            "pos": "n.",
            "en": "direction"
          },
          {
            "cn": "只有",
            "pos": "conj.",
            "en": "only"
          },
          {
            "cn": "真正",
            "pos": "adv.",
            "en": "really; indeed"
          },
          {
            "cn": "难题",
            "pos": "n.",
            "en": "difficult problem"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-17/17-8.mp3"
      }
    ]
  },
  {
    "name": "L18 · 我学会了包饺子",
    "id": "18",
    "core": [
      {
        "hanzi": "怎样",
        "en": "(used to inquire about the nature, condition, manner, etc. of sth) how"
      },
      {
        "hanzi": "过节",
        "en": "celebrate a festival"
      },
      {
        "hanzi": "节",
        "en": "festival"
      },
      {
        "hanzi": "节日",
        "en": "festival"
      },
      {
        "hanzi": "联欢",
        "en": "have a get-together"
      },
      {
        "hanzi": "大概",
        "en": "probably; rough"
      },
      {
        "hanzi": "春节",
        "en": "Spring Festival"
      },
      {
        "hanzi": "阿姨",
        "en": "aunt"
      },
      {
        "hanzi": "叔叔",
        "en": "uncle"
      },
      {
        "hanzi": "收",
        "en": "accept"
      },
      {
        "hanzi": "总",
        "en": "always"
      },
      {
        "hanzi": "起",
        "en": "used after a verb to indicate the person or thing involved in the action"
      },
      {
        "hanzi": "见面",
        "en": "meet"
      },
      {
        "hanzi": "矿泉水",
        "en": "mineral water"
      },
      {
        "hanzi": "刚刚",
        "en": "just now"
      },
      {
        "hanzi": "出发",
        "en": "depart"
      },
      {
        "hanzi": "不久",
        "en": "soon"
      },
      {
        "hanzi": "发生",
        "en": "happen"
      },
      {
        "hanzi": "刚",
        "en": "(only a very short time ago) just"
      },
      {
        "hanzi": "只要",
        "en": "as long as"
      },
      {
        "hanzi": "学期",
        "en": "semester"
      },
      {
        "hanzi": "毕业",
        "en": "graduate"
      },
      {
        "hanzi": "出生",
        "en": "be born"
      },
      {
        "hanzi": "过去",
        "en": "past"
      },
      {
        "hanzi": "懂得",
        "en": "understand; know"
      },
      {
        "hanzi": "坚持",
        "en": "persevere in"
      },
      {
        "hanzi": "完成",
        "en": "complete; finish"
      },
      {
        "hanzi": "目标",
        "en": "goal"
      },
      {
        "hanzi": "发展",
        "en": "develop"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "18-01",
        "title": {
          "cn": "在飞机上",
          "en": "On the plane",
          "emoji": "✈️"
        },
        "intro": {
          "cn": "在飞机上，白家月和李文在聊天儿。",
          "en": "On the plane, Bai Jiayue and Li Wen were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-18/18-1.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "白家月为什么很开心？",
            "options": [
              "可以去北京",
              "可以去李文家",
              "可以在中国过春节"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "中国人一般怎么过春节？",
            "options": [
              "去朋友家过节",
              "出去旅游过节",
              "跟家人一起过节"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "白家月",
            "cn": "我要在中国过年，真开心。",
            "en": "I'm going to spend Spring Festival in China. I'm so excited!"
          },
          {
            "speaker": "李文",
            "cn": "第一次请外国朋友来家里过春节，我也很高兴。",
            "en": "This is the first time I've invited a foreign friend to my home for the Spring Festival. I'm really happy too."
          },
          {
            "speaker": "白家月",
            "cn": "你们怎样过节？",
            "en": "How do you usually celebrate the festival?"
          },
          {
            "speaker": "李文",
            "cn": "春节是中国最重要的节日，我们一般会回家，跟家人一起过。",
            "en": "Spring Festival is the most important holiday in China. We usually go back home and celebrate it with our families."
          },
          {
            "speaker": "白家月",
            "cn": "那你跟家人会一起做什么？",
            "en": "And what do you do with your family?"
          },
          {
            "speaker": "李文",
            "cn": "我们家会一边包饺子，一边看春节联欢晚会，一直到十二点以后才睡觉。",
            "en": "We make jiaozi while watching the Spring Festival Gala, and we stay up past midnight."
          },
          {
            "speaker": "白家月",
            "cn": "听起来很有意思。春节大概放几天假？",
            "en": "That sounds really fun. How many days off do you get for Spring Festival?"
          },
          {
            "speaker": "李文",
            "cn": "大概七八天。",
            "en": "About seven or eight days."
          }
        ],
        "postQuestions": [
          {
            "q": "李文为什么很高兴？"
          },
          {
            "q": "李文和家人春节的时候会做什么？"
          },
          {
            "q": "春节大概放几天假？"
          }
        ],
        "words": [
          {
            "cn": "怎样",
            "pos": "pron.",
            "en": "(used to inquire about the nature, condition, manner, etc. of sth) how"
          },
          {
            "cn": "过节",
            "pos": "v.",
            "en": "celebrate a festival"
          },
          {
            "cn": "节",
            "pos": "n.",
            "en": "festival"
          },
          {
            "cn": "节日",
            "pos": "n.",
            "en": "festival"
          },
          {
            "cn": "联欢",
            "pos": "v.",
            "en": "have a get-together"
          },
          {
            "cn": "大概",
            "pos": "adv./adj.",
            "en": "probably; rough"
          },
          {
            "cn": "春节",
            "pos": "",
            "en": "Spring Festival"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-18/18-2.mp3"
      },
      {
        "id": "18-02",
        "title": {
          "cn": "在李文家拜年",
          "en": "New Year greetings at Li Wen's home",
          "emoji": "🧧"
        },
        "intro": {
          "cn": "在李文家，白家月给李文的父母拜年。",
          "en": "At Li Wen's home, Bai Jiayue wished Li Wen's parents a Happy New Year."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-18/18-3.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "白家月为什么去李文家？",
            "options": [
              "送礼物",
              "学包饺子",
              "一起过年"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "李文家今天晚上吃什么？",
            "options": [
              "饺子",
              "包子",
              "面条儿"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "白家月",
            "cn": "张阿姨，李叔叔，过年好！这是我准备的礼物，请收下。",
            "en": "Auntie Zhang, Uncle Li—Happy New Year! I brought a gift for you. I hope you like it."
          },
          {
            "speaker": "李叔叔",
            "cn": "谢谢家月，你太客气了！",
            "en": "Thank you, Jiayue. That's very kind of you!"
          },
          {
            "speaker": "张阿姨",
            "cn": "总听小文说起你，今天终于有机会见面了。",
            "en": "Xiaowen always talks about you. I'm so glad we finally get to meet."
          },
          {
            "speaker": "白家月",
            "cn": "谢谢您和叔叔请我来家里做客。",
            "en": "Thank you for having me over."
          },
          {
            "speaker": "李叔叔",
            "cn": "桌子上有饮料，还有矿泉水，你想喝什么就自己拿。",
            "en": "There are drinks and bottled water on the table—help yourself to whatever you'd like."
          },
          {
            "speaker": "张阿姨",
            "cn": "你先坐着看会儿电视，饺子很快就包好了。",
            "en": "Have a seat and watch some TV for a bit. The jiaozi will be ready soon."
          },
          {
            "speaker": "白家月",
            "cn": "我刚刚看视频学会了包饺子，我跟你们一起包吧。",
            "en": "I learned how to make jiaozi from a video. Let me help you make them!"
          }
        ],
        "postQuestions": [
          {
            "q": "白家月送礼物的时候说什么了？"
          },
          {
            "q": "李文的家人是怎么欢迎白家月的？"
          },
          {
            "q": "白家月想跟李文的家人一起做什么？"
          }
        ],
        "words": [
          {
            "cn": "阿姨",
            "pos": "n.",
            "en": "aunt"
          },
          {
            "cn": "叔叔",
            "pos": "n.",
            "en": "uncle"
          },
          {
            "cn": "收",
            "pos": "v.",
            "en": "accept"
          },
          {
            "cn": "总",
            "pos": "adv.",
            "en": "always"
          },
          {
            "cn": "起",
            "pos": "v.",
            "en": "used after a verb to indicate the person or thing involved in the action"
          },
          {
            "cn": "见面",
            "pos": "v.",
            "en": "meet"
          },
          {
            "cn": "矿泉水",
            "pos": "n.",
            "en": "mineral water"
          },
          {
            "cn": "刚刚",
            "pos": "adv.",
            "en": "just now"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-18/18-4.mp3"
      },
      {
        "id": "18-03",
        "title": {
          "cn": "看老照片",
          "en": "Looking at old photos",
          "emoji": "📷"
        },
        "intro": {
          "cn": "在李文家，李文妈妈和白家月在聊天儿。",
          "en": "At Li Wen's home, Li Wen's mother and Bai Jiayue were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-18/18-5.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "白家月和李文妈妈在做什么？",
            "options": [
              "一起看电视",
              "一起看视频",
              "一起看照片"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "李文什么时候毕业？",
            "options": [
              "一个月以后",
              "一个学期以后",
              "三四年以后"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "白家月",
            "cn": "这张照片是李文出国前照的吗？",
            "en": "Was this photo taken before Li Wen went abroad?"
          },
          {
            "speaker": "张阿姨",
            "cn": "对，这是他从北京出发时，我们全家在机场照的。",
            "en": "Yes, it was taken at the airport in Beijing when our whole family saw him off."
          },
          {
            "speaker": "白家月",
            "cn": "那是三四年前吧？",
            "en": "That was about three or four years ago, right?"
          },
          {
            "speaker": "张阿姨",
            "cn": "是啊，时间过得真快，好像是不久前发生的一样。",
            "en": "Yes, time really flies—it feels like it happened just yesterday."
          },
          {
            "speaker": "白家月",
            "cn": "您一定特别想李文吧？",
            "en": "You must really miss Li Wen, don't you?"
          },
          {
            "speaker": "张阿姨",
            "cn": "他刚离开家时，我很不习惯，只要几天不跟他视频，就很想他。",
            "en": "When he first left home, it was hard for me to get used to it. If I didn't video chat with him for a few days, I'd miss him terribly."
          },
          {
            "speaker": "白家月",
            "cn": "还有最后一个学期就要毕业了，他很快就会回来了。",
            "en": "Well, just one more semester until he graduates. He'll be back soon."
          }
        ],
        "postQuestions": [
          {
            "q": "李文第一次出国留学，是从哪儿出发的？"
          },
          {
            "q": "李文全家的照片是什么时候照的？"
          },
          {
            "q": "李文刚离开家的时候，张阿姨怎么样？"
          }
        ],
        "words": [
          {
            "cn": "出发",
            "pos": "v.",
            "en": "depart"
          },
          {
            "cn": "不久",
            "pos": "adj.",
            "en": "soon"
          },
          {
            "cn": "发生",
            "pos": "v.",
            "en": "happen"
          },
          {
            "cn": "刚",
            "pos": "adv.",
            "en": "(only a very short time ago) just"
          },
          {
            "cn": "只要",
            "pos": "conj.",
            "en": "as long as"
          },
          {
            "cn": "学期",
            "pos": "n.",
            "en": "semester"
          },
          {
            "cn": "毕业",
            "pos": "v.",
            "en": "graduate"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-18/18-6.mp3"
      },
      {
        "id": "18-04",
        "title": {
          "cn": "白家月的日记",
          "en": "Bai Jiayue's diary",
          "emoji": "📔"
        },
        "intro": {
          "cn": "在家里，白家月在写日记。",
          "en": "At home, Bai Jiayue was writing in her diary."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-18/18-7.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "白家月这次来中国，让她最高兴的事是什么？",
            "options": [
              "过春节",
              "吃饺子",
              "认识李文的父母"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "在李文身上，白家月学到什么了？",
            "options": [
              "如果想学医，就要努力学习",
              "只有成绩好，才能出国留学",
              "只要坚持努力，就能完成目标"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "这次来中国，我最高兴的是认识了李文的父母。",
            "en": "What made me happiest during this trip to China was getting to know Li Wen's parents."
          },
          {
            "speaker": "",
            "cn": "他们给我看了李文出生时的照片，还给我讲了很多他过去的故事。",
            "en": "They showed me photos taken when Li Wen was born and told me many stories about his past."
          },
          {
            "speaker": "",
            "cn": "李文高中的时候想学医，从那时起就努力学习。",
            "en": "In high school, he wanted to study medicine and has worked hard ever since."
          },
          {
            "speaker": "",
            "cn": "高三的时候，因为成绩特别好，他得到了出国留学的机会。",
            "en": "In his senior year, his outstanding grades earned him the opportunity to study abroad."
          },
          {
            "speaker": "",
            "cn": "在他身上，我懂得了，只要一直坚持，就能完成自己的目标。",
            "en": "Through his story, I learned that as long as you persevere, you can achieve your goals."
          },
          {
            "speaker": "",
            "cn": "我相信，他以后一定会发展得更好。",
            "en": "I believe he will go on to accomplish even greater things in the future."
          }
        ],
        "postQuestions": [
          {
            "q": "李文的父母给白家月看什么了？"
          },
          {
            "q": "白家月从李文的父母那里了解到什么了？"
          },
          {
            "q": "李文为什么能得到出国留学的机会？"
          }
        ],
        "words": [
          {
            "cn": "出生",
            "pos": "v.",
            "en": "be born"
          },
          {
            "cn": "过去",
            "pos": "n.",
            "en": "past"
          },
          {
            "cn": "懂得",
            "pos": "v.",
            "en": "understand; know"
          },
          {
            "cn": "坚持",
            "pos": "v.",
            "en": "persevere in"
          },
          {
            "cn": "完成",
            "pos": "v.",
            "en": "complete; finish"
          },
          {
            "cn": "目标",
            "pos": "n.",
            "en": "goal"
          },
          {
            "cn": "发展",
            "pos": "v.",
            "en": "develop"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-18/18-8.mp3"
      }
    ]
  }
];

// Backwards-compatible alias (neutral name is COURSE_LESSONS).
window.HSK3_LESSONS = window.COURSE_LESSONS;
