// HSK3 lesson texts. Read-only at runtime.
// Source: hsk3/data/lesson1.json + hsk3/data/lesson2.json + hsk3/data/lesson3.json + hsk3/data/lesson4.json + hsk3/data/lesson5.json + hsk3/data/lesson6.json + hsk3/data/lesson7.json + hsk3/data/lesson8.json + hsk3/data/lesson9.json + hsk3/data/lesson10.json + hsk3/data/lesson11.json + hsk3/data/lesson12.json + hsk3/data/lesson13.json + hsk3/data/lesson14.json + hsk3/data/lesson15.json + hsk3/data/lesson16.json + hsk3/data/lesson17.json + hsk3/data/lesson18.json (hand-authored; book page ranges in hsk3/data/manifest.json).
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
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "带",
            "接",
            "丢",
            "重要",
            "应该"
          ],
          "items": [
            {
              "cn": "服务台______在前面，我们过去问问吧。",
              "answer": "应该"
            },
            {
              "cn": "他已经到了，我们快出去______他吧。",
              "answer": "接"
            },
            {
              "cn": "我的护照不见了，是不是在机场______了？",
              "answer": "丢"
            },
            {
              "cn": "行李票很______，你们出机场的时候有人看。",
              "answer": "重要"
            },
            {
              "cn": "我______了两个行李箱和一个大包，所以走得非常慢。",
              "answer": "带"
            }
          ]
        },
        "group2": {
          "options": [
            "发现",
            "以为",
            "好像",
            "年轻",
            "帮助"
          ],
          "items": [
            {
              "cn": "A：这个头发很短的男孩儿是我弟弟。\nB：我______这个是你，你们长得太像了。",
              "answer": "以为"
            },
            {
              "cn": "A：我______坐飞机来北京的人非常多。\nB：对，很多人这个时候来北京旅游。",
              "answer": "发现"
            },
            {
              "cn": "A：这是我和哥哥的照片，你看我们像吗？\nB：你们很像，你哥哥看起来也很______。",
              "answer": "年轻"
            },
            {
              "cn": "A：你的行李箱找到了，你看看是不是这个？\nB：对，太好了！谢谢您的______。",
              "answer": "帮助"
            },
            {
              "cn": "A：那个穿着黑衣服的高个子的人是王老师吗？\nB：______是吧，我也不知道。",
              "answer": "好像"
            }
          ]
        }
      }
    }
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
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "尝",
            "只",
            "菜单",
            "记",
            "用"
          ],
          "items": [
            {
              "cn": "我觉得______筷子吃饭更方便。",
              "answer": "用"
            },
            {
              "cn": "你______住那个饭馆的名字了吗？",
              "answer": "记"
            },
            {
              "cn": "她现在很饿，早上______吃了一块蛋糕。",
              "answer": "只"
            },
            {
              "cn": "______上有好几个新菜，你看看我们吃哪个？",
              "answer": "菜单"
            },
            {
              "cn": "我妈妈会做中国菜，下次你们来我家______一下她做的菜。",
              "answer": "尝"
            }
          ]
        },
        "group2": {
          "options": [
            "饿",
            "不用",
            "简单",
            "好久",
            "马上"
          ],
          "items": [
            {
              "cn": "A：我还不太会用筷子，你们有勺子吗？",
              "answer": ""
            },
            {
              "cn": "B：有，你等一下，我______给你拿。",
              "answer": "马上"
            },
            {
              "cn": "A：我找服务员要一下菜单，咱们点菜。",
              "answer": ""
            },
            {
              "cn": "B：在手机上就可以点菜，______要菜单。",
              "answer": "不用"
            },
            {
              "cn": "A：我太______了，不想做饭了，我们叫个外卖，怎么样？",
              "answer": "饿"
            },
            {
              "cn": "B：没问题，你想吃什么，我们就点什么。",
              "answer": ""
            },
            {
              "cn": "A：你想去哪个饭馆吃饭？",
              "answer": ""
            },
            {
              "cn": "B：我______没吃饺子了，去楼下的饺子馆吧。",
              "answer": "好久"
            },
            {
              "cn": "A：你下班回家自己做饭吗？",
              "answer": ""
            },
            {
              "cn": "B：不做饭，我就吃碗方便面。方便面是最______的晚饭。",
              "answer": "简单"
            }
          ]
        }
      },
      "describePictures": [
        {
          "cn": "A：这是菜单，你看看，______就点什么。",
          "en": ""
        },
        {
          "cn": "B：谢谢，您点吧，我都可以。",
          "en": ""
        },
        {
          "cn": "A：我发现有不少新菜，你想不想______？",
          "en": ""
        },
        {
          "cn": "B：好，这些菜看起来很好吃。",
          "en": ""
        },
        {
          "cn": "A：今天我有点儿累，不想做饭，点个______吧。",
          "en": ""
        },
        {
          "cn": "B：好，我来点。",
          "en": ""
        },
        {
          "cn": "A：我吃什么都可以。我们现在点，什么时候能送到？",
          "en": ""
        },
        {
          "cn": "B：应该很快，我看看。______就能到。",
          "en": ""
        },
        {
          "cn": "A：你想喝什么______？",
          "en": ""
        },
        {
          "cn": "B：我没______喝茶了，来一杯吧。你看看想吃什么？",
          "en": ""
        },
        {
          "cn": "A：______上有这么多菜，我不知道点什么，还是你来吧。",
          "en": ""
        },
        {
          "cn": "B：那就点第一个，小王说那个菜______。",
          "en": ""
        }
      ],
      "classroomActivity": {
        "cn": "多人活动",
        "en": "Group Work",
        "description": "3~4人一组，讨论在饭馆吃饭、点外卖和自己做饭这几种方式中，你们更喜欢哪一种？为什么？回答时，使用本课所学的词语和语言点。讨论过程中边听边做记录，讨论结束后向全班同学汇报本小组的情况。",
        "descriptionEn": "Work in groups of 3-4. Discuss which you prefer: dining at a restaurant, ordering takeout, or cooking at home, and explain why. When responding, use the words and language points covered in this lesson. Take notes while listening during the discussion. After the discussion, report your group's findings to the class.",
        "topics": [
          {
            "cn": "在饭馆吃饭"
          },
          {
            "cn": "点外卖"
          },
          {
            "cn": "自己做饭"
          }
        ]
      }
    }
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
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "才",
            "挺",
            "办",
            "关",
            "还"
          ],
          "items": [
            {
              "cn": "你走的时候要______灯。",
              "answer": "关"
            },
            {
              "cn": "我要去银行______一张信用卡。",
              "answer": "办"
            },
            {
              "cn": "搬家要准备的东西______多的。",
              "answer": "挺"
            },
            {
              "cn": "这本书不是我的，明天我要______给朋友。",
              "answer": "还"
            },
            {
              "cn": "我太忙了，没时间打扫新家，可能下个月______搬家。",
              "answer": "才"
            }
          ]
        },
        "group2": {
          "options": [
            "环境",
            "需要",
            "搬家",
            "听说",
            "打扫"
          ],
          "items": [
            {
              "cn": "A：你去哪儿了？怎么这么晚才回来？",
              "answer": ""
            },
            {
              "cn": "B：我一直在新家______，今天真是累坏了。",
              "answer": "打扫"
            },
            {
              "cn": "A：这个小区离学校有点儿远。",
              "answer": ""
            },
            {
              "cn": "B：虽然有点儿远，但是我们很喜欢这个小区的______。",
              "answer": "环境"
            },
            {
              "cn": "A：你知道她为什么不喜欢这个房子吗？",
              "answer": ""
            },
            {
              "cn": "B：我______她不喜欢住一层。",
              "answer": "听说"
            },
            {
              "cn": "A：这个小区明天不能______，你知道吗？",
              "answer": "搬家"
            },
            {
              "cn": "B：我知道，我已经告诉搬家公司的人了，他们下周一再来。",
              "answer": ""
            },
            {
              "cn": "A：她家真大，还有个大花园。",
              "answer": ""
            },
            {
              "cn": "B：因为她家人多，______一个大房子。",
              "answer": "需要"
            }
          ]
        }
      },
      "describePictures": [
        {
          "cn": "A：这个______很新，买东西方便吗？",
          "en": ""
        },
        {
          "cn": "B：______，一出门就有一个大超市。",
          "en": ""
        },
        {
          "cn": "A：那真的______。我也喜欢这里的环境，每家都有一个小花园。",
          "en": ""
        },
        {
          "cn": "B：是。后面的房子有两层，______再上去看看。",
          "en": ""
        },
        {
          "cn": "A：你知道______？",
          "en": ""
        },
        {
          "cn": "B：用护照就能办，你想在哪家银行办？",
          "en": ""
        },
        {
          "cn": "A：北京银行不错，今天下午我______。",
          "en": ""
        },
        {
          "cn": "B：我也听说______，咱们一起去吧。",
          "en": ""
        },
        {
          "cn": "A：你们已经______？",
          "en": ""
        },
        {
          "cn": "B：还没有，我们______也买了很多东西，每天都非常累。",
          "en": ""
        },
        {
          "cn": "A：我们什么时候去你的新家看看？",
          "en": ""
        },
        {
          "cn": "B：好啊，______就______，到时候来我家吃饭吧。",
          "en": ""
        }
      ],
      "classroomActivity": {
        "cn": "多人活动",
        "en": "Group Work",
        "description": "三人一组，参考以下内容，分享一次你最难忘的搬家经历。",
        "descriptionEn": "Work in groups of three. Refer to the prompts below and share your most unforgettable moving experience.",
        "topics": [
          {
            "cn": "你为什么要搬家？"
          },
          {
            "cn": "搬家前你准备了哪些东西？"
          },
          {
            "cn": "你有没有请搬家公司？为什么？"
          },
          {
            "cn": "搬家的时候遇到了什么问题？"
          },
          {
            "cn": "搬进新家后，你觉得怎么样？"
          }
        ]
      }
    }
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
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "先",
            "久",
            "刻",
            "满意",
            "特别"
          ],
          "items": [
            {
              "cn": "已经八点一______了，快起床吧。",
              "answer": "刻"
            },
            {
              "cn": "飞机晚点了，小李在机场等了很______。",
              "answer": "久"
            },
            {
              "cn": "我打车过去，你们可以______慢慢走过去。",
              "answer": "先"
            },
            {
              "cn": "我对这里的服务非常______，下次还会再来。",
              "answer": "满意"
            },
            {
              "cn": "我们这次在草原上住的宾馆很______，跟别的都不一样。",
              "answer": "特别"
            }
          ]
        },
        "group2": {
          "options": [
            "一直",
            "一样",
            "一定",
            "欢迎",
            "别的"
          ],
          "items": [
            {
              "cn": "A：草原真是太漂亮了，跟我想的______。",
              "answer": "一样"
            },
            {
              "cn": "B：我觉得草原比我想的更漂亮。",
              "answer": ""
            },
            {
              "cn": "A：我们搬家了，______你来我们的新家玩。",
              "answer": "欢迎"
            },
            {
              "cn": "B：好啊，有时间我一定去。",
              "answer": ""
            },
            {
              "cn": "A：除了要买几个纸箱，还______买东西吗？",
              "answer": "别的"
            },
            {
              "cn": "B：没有了，谢谢你帮我买。",
              "answer": ""
            },
            {
              "cn": "A：喂，小李，这边天气不好，我们还没起飞呢。",
              "answer": ""
            },
            {
              "cn": "B：没关系，我会______在机场等您。",
              "answer": "一直"
            },
            {
              "cn": "A：行李准备好了，你看看还需要带什么东西？",
              "answer": ""
            },
            {
              "cn": "B：______别忘了带护照。",
              "answer": "一定"
            }
          ]
        }
      },
      "describePictures": [
        {
          "cn": "A：这几个月累坏了，每天除了工作，______。",
          "en": ""
        },
        {
          "cn": "B：马上就要到了，你想去哪儿玩？",
          "en": ""
        },
        {
          "cn": "A：我______，都听你的吧。",
          "en": ""
        },
        {
          "cn": "B：好吧，我上网看看，咱们去哪儿休息休息。",
          "en": ""
        },
        {
          "cn": "A：你觉得咱们去海边怎么样？找一个______多住几天。",
          "en": ""
        },
        {
          "cn": "B：每次旅游都去海边，能不能看看______？",
          "en": ""
        },
        {
          "cn": "A：除了______，还______，但是要坐飞机去。",
          "en": ""
        },
        {
          "cn": "B：这个主意好，我早就想去了。",
          "en": ""
        },
        {
          "cn": "A：你们怎么这么晚才到宾馆？______，别的人都到了。",
          "en": ""
        },
        {
          "cn": "B：______我们的飞机晚点了三个多小时。",
          "en": ""
        },
        {
          "cn": "A：你们一定累坏了吧，来，看看房间喜欢不喜欢？",
          "en": ""
        },
        {
          "cn": "B：太漂亮了，这个房间______。我觉得______。",
          "en": ""
        }
      ],
      "classroomActivity": {
        "cn": "多人活动",
        "en": "Group Work",
        "description": "四人一组，设计一个假期旅游计划。计划内容包括旅游的地点、交通方式、住宿安排、每日活动等，并说明这样设计的原因。",
        "descriptionEn": "Work in groups of four. Design a vacation travel plan that includes the destination, means of transportation, accommodation arrangements and daily activities, and explain the reasons for your design.",
        "topics": [
          {
            "cn": "你们打算去哪儿旅游？"
          },
          {
            "cn": "怎么去？坐飞机还是坐火车？"
          },
          {
            "cn": "住在哪儿？宾馆还是朋友家？"
          },
          {
            "cn": "每天做什么？"
          },
          {
            "cn": "为什么这样安排？"
          }
        ]
      }
    }
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
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "照",
            "干",
            "水平",
            "难看",
            "收到"
          ],
          "items": [
            {
              "cn": "他的拍照______比我高多了。",
              "answer": "水平"
            },
            {
              "cn": "我______了一封学校的邮件。",
              "answer": "收到"
            },
            {
              "cn": "明天又是星期天，我不知道应该______什么。",
              "answer": "干"
            },
            {
              "cn": "我还没准备好呢，我看着你的时候你再______。",
              "answer": "照"
            },
            {
              "cn": "我觉得前两张照片好看，第三张有点儿______，你选前两张吧。",
              "answer": "难看"
            }
          ]
        },
        "group2": {
          "options": [
            "结束",
            "总是",
            "终于",
            "感兴趣",
            "比较"
          ],
          "items": [
            {
              "cn": "A：他们的飞机到了吗？",
              "answer": ""
            },
            {
              "cn": "B：______到了，晚点了五个多小时。",
              "answer": "终于"
            },
            {
              "cn": "A：为什么我照的照片______不好看？",
              "answer": "总是"
            },
            {
              "cn": "B：我姐姐会拍照，我让她教教你。",
              "answer": ""
            },
            {
              "cn": "A：喂，你在哪儿？怎么没接电话？",
              "answer": ""
            },
            {
              "cn": "B：我在看电影呢，还有十分钟就______了。",
              "answer": "结束"
            },
            {
              "cn": "A：假期我想去北京，也想去上海，不知道怎么选。",
              "answer": ""
            },
            {
              "cn": "B：我帮你______一下。",
              "answer": "比较"
            },
            {
              "cn": "A：我有两张音乐会的票，咱们一起去吧。",
              "answer": ""
            },
            {
              "cn": "B：我对音乐不______。家月喜欢，你问问她。",
              "answer": "感兴趣"
            }
          ]
        }
      },
      "describePictures": [
        {
          "cn": "A：我______一本书，是你买的吗？",
          "en": ""
        },
        {
          "cn": "B：对，我昨天看了一个电影，特别好看，所以我______就上网买了这本书。",
          "en": ""
        },
        {
          "cn": "A：你这么说，我也______了。",
          "en": ""
        },
        {
          "cn": "B：你一定会喜欢的。",
          "en": ""
        },
        {
          "cn": "A：这些照片好看得很。都是你照的吗？",
          "en": ""
        },
        {
          "cn": "B：对，我喜欢______，但是经常没时间出去。",
          "en": ""
        },
        {
          "cn": "A：你的水平很高啊，下次给我照几张。",
          "en": ""
        },
        {
          "cn": "B：我今天也带着相机呢，咱们______。",
          "en": ""
        },
        {
          "cn": "A：假期______过得这么快，还有两天就要______了。",
          "en": ""
        },
        {
          "cn": "B：是啊，我真想______都休息。",
          "en": ""
        },
        {
          "cn": "A：邮箱里______一封新邮件，我看看。",
          "en": ""
        },
        {
          "cn": "B：别看了，现在是假期，不应该工作。",
          "en": ""
        }
      ],
      "classroomActivity": {
        "cn": "双人活动",
        "en": "Pair Work",
        "description": "两人一组，互相问答，完成表格。在交流中，需要介绍自己的兴趣爱好并说明原因，同时尽量多使用本课所学的词语和语言点。",
        "descriptionEn": "Work in pairs. Ask each other questions to complete the table. During the conversation, introduce your hobbies and explain why you like them. Try to use as many of the words and language points covered in this lesson as possible.",
        "topics": [
          {
            "cn": "你对拍照感兴趣吗？为什么？"
          },
          {
            "cn": "天气好的时候，你会去爬山吗？为什么？"
          },
          {
            "cn": "你喜欢听什么样的音乐？为什么？"
          },
          {
            "cn": "你最近做的有意思的事情是什么？"
          }
        ]
      }
    }
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
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "该",
            "刷",
            "急",
            "后来",
            "以前"
          ],
          "items": [
            {
              "cn": "我没带钱，可以______信用卡吗？",
              "answer": "刷"
            },
            {
              "cn": "______不用太早，星期五买票就可以。",
              "answer": "以前"
            },
            {
              "cn": "飞机马上就要起飞了，你的手机______关机了。",
              "answer": "该"
            },
            {
              "cn": "前面的路口人很多，你开慢一点儿，别______。",
              "answer": "急"
            },
            {
              "cn": "她开始的时候说要来，______打电话说不来了。",
              "answer": "后来"
            }
          ]
        },
        "group2": {
          "options": [
            "选择",
            "检查",
            "小心",
            "必须",
            "打算"
          ],
          "items": [
            {
              "cn": "A：你一个人开车，路上要______。",
              "answer": "小心"
            },
            {
              "cn": "B：好的，谢谢。",
              "answer": ""
            },
            {
              "cn": "A：马上就要出门了，你再______一下，护照什么的都带了吧？",
              "answer": "检查"
            },
            {
              "cn": "B：都带了，放在包里了。",
              "answer": ""
            },
            {
              "cn": "A：明天晚上六点的火车，你几点出门？",
              "answer": ""
            },
            {
              "cn": "B：______我四点半出门，晚一点儿也没关系。",
              "answer": "打算"
            },
            {
              "cn": "A：坐高铁四个多小时，坐飞机两个小时，你想坐什么？",
              "answer": ""
            },
            {
              "cn": "B：高铁站比机场近多了，我还是想______高铁。",
              "answer": "选择"
            },
            {
              "cn": "A：我能坐在你旁边吗？",
              "answer": ""
            },
            {
              "cn": "B：不行，咱们的票是分开的，你______坐在前面。",
              "answer": "必须"
            }
          ]
        }
      },
      "describePictures": [
        {
          "cn": "A：现在路上的车______，我觉得咱们可能会______。",
          "en": ""
        },
        {
          "cn": "B：别急，现在八点半，还早呢。",
          "en": ""
        },
        {
          "cn": "A：但是车站的人可能很多，我们需要______。",
          "en": ""
        },
        {
          "cn": "B：我知道，______就到了。",
          "en": ""
        },
        {
          "cn": "A：你再______，必须带在身上的是护照和手机。",
          "en": ""
        },
        {
          "cn": "B：都在这个小包里。高铁上不______的东西我放在行李箱里了。",
          "en": ""
        },
        {
          "cn": "A：______，咱们就走吧。",
          "en": ""
        },
        {
          "cn": "B：行，我已经准备好了。",
          "en": ""
        },
        {
          "cn": "A：还有半个多小时，你______。",
          "en": ""
        },
        {
          "cn": "B：真不想跟你们______。",
          "en": ""
        },
        {
          "cn": "A：______，就给我们打电话。",
          "en": ""
        },
        {
          "cn": "B：好的。谢谢你们送我，咱们下次见。",
          "en": ""
        }
      ],
      "classroomActivity": {
        "cn": "多人活动",
        "en": "Group Work",
        "description": "四人一组，围绕以下几个方面，介绍自己乘坐交通工具出行的经历。回答时，使用本课所学的词语和语言点。",
        "descriptionEn": "Work in groups of four. Share your travel experiences taking different means of transportation, focusing on the following aspects. When responding, use the words and language points covered in this lesson.",
        "topics": [
          {
            "cn": "你是怎么买票的？"
          },
          {
            "cn": "你是怎么去车站或者机场的？"
          },
          {
            "cn": "怎么检票进站？不能带什么东西？"
          },
          {
            "cn": "如果你不能和朋友坐在一起，你们会怎么办？"
          },
          {
            "cn": "如果你的朋友第一次坐高铁或者飞机，你想告诉他/她什么？"
          }
        ]
      }
    }
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
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "试",
            "更",
            "矮",
            "旧",
            "声"
          ],
          "items": [
            {
              "cn": "你的手机很______，买个新的吧。",
              "answer": "旧"
            },
            {
              "cn": "她比我大两岁，但是比我还______一点儿。",
              "answer": "矮"
            },
            {
              "cn": "这条短裤比那条______合适，买这条吧。",
              "answer": "更"
            },
            {
              "cn": "我们都听见了他在教室外面的笑______。",
              "answer": "声"
            },
            {
              "cn": "上网买东西很方便，你应该______一下。",
              "answer": "试"
            }
          ]
        },
        "group2": {
          "options": [
            "一共",
            "合适",
            "决定",
            "结婚",
            "开机"
          ],
          "items": [
            {
              "cn": "A：假期的时候你们去哪儿旅游？",
              "answer": ""
            },
            {
              "cn": "B：我想去看海，不知道这个时间是不是______。",
              "answer": "合适"
            },
            {
              "cn": "A：你们两个准备什么时候______？",
              "answer": "结婚"
            },
            {
              "cn": "B：可能今年10月，到时候一定告诉你。",
              "answer": ""
            },
            {
              "cn": "A：你帮我看看，我的手机为什么不能______？",
              "answer": "开机"
            },
            {
              "cn": "B：让小李帮你看，你新买的这个手机跟他的一样。",
              "answer": ""
            },
            {
              "cn": "A：网上的房子太多了，我还没有______去看哪一个。",
              "answer": "决定"
            },
            {
              "cn": "B：你可以先在网上看房，我教你。",
              "answer": ""
            },
            {
              "cn": "A：请问，这些水果多少钱？",
              "answer": ""
            },
            {
              "cn": "B：苹果两斤，八块；香蕉四斤，十二块。______二十块。",
              "answer": "一共"
            }
          ]
        }
      },
      "describePictures": [
        {
          "cn": "A：你觉得哪双鞋______？",
          "en": ""
        },
        {
          "cn": "B：都挺好看的，我也不知道怎么决定。",
          "en": ""
        },
        {
          "cn": "A：我觉得那双白色的______。",
          "en": ""
        },
        {
          "cn": "B：这几个颜色的鞋你都______着。",
          "en": ""
        },
        {
          "cn": "A：这些西瓜看起来很新鲜，______？",
          "en": ""
        },
        {
          "cn": "B：两块五一斤。今天的西瓜不但______。",
          "en": ""
        },
        {
          "cn": "A：那我要两个大的，多少钱？",
          "en": ""
        },
        {
          "cn": "B：______四十六块五毛。",
          "en": ""
        },
        {
          "cn": "A：你站在这儿，试着______“小天，小天，我要看电视”。",
          "en": ""
        },
        {
          "cn": "B：小天小天，我要看电视。",
          "en": ""
        },
        {
          "cn": "A：你看！你一______，它就______。",
          "en": ""
        },
        {
          "cn": "B：是啊，方便______。买这个吧。",
          "en": ""
        }
      ],
      "classroomActivity": {
        "cn": "多人活动",
        "en": "Group Work",
        "description": "四人一组，每位同学使用动态助词“着”描述照片中某个人物的外貌、动作或状态，其他同学根据描述猜测所指的是谁。",
        "descriptionEn": "Work in groups of four. Each student uses the aspect particle “着” to describe a person's appearance, actions, or state in the photos. The other students guess who is being described based on the clues.",
        "topics": [
          {
            "cn": "先选一张照片，想好要描述谁。"
          },
          {
            "cn": "用“动词＋着”描述他/她的外貌、动作或状态。"
          },
          {
            "cn": "不要提这个人最特别的地方，免得别人一下就猜到。"
          },
          {
            "cn": "如：他穿着一件白衣服。"
          },
          {
            "cn": "如：他跟朋友一起坐着聊天儿。"
          }
        ]
      }
    }
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
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "开",
            "得",
            "种",
            "关心",
            "方法"
          ],
          "items": [
            {
              "cn": "李医生特别______病人。",
              "answer": "关心"
            },
            {
              "cn": "医生说______你下个星期回来检查一下。",
              "answer": "得"
            },
            {
              "cn": "您一直很健康，有什么好的锻炼______吗？",
              "answer": "方法"
            },
            {
              "cn": "如果你的病好了，医生就不会给你______药了。",
              "answer": "开"
            },
            {
              "cn": "感冒的时候能吃这______药吗？你再问一下医生。",
              "answer": "种"
            }
          ]
        },
        "group2": {
          "options": [
            "注意",
            "突然",
            "差不多",
            "其他",
            "以后"
          ],
          "items": [
            {
              "cn": "A：你什么时候能出院？",
              "answer": ""
            },
            {
              "cn": "B：______，可能两天我还需要做几个检查。",
              "answer": "以后"
            },
            {
              "cn": "A：你是不是生病了？",
              "answer": ""
            },
            {
              "cn": "B：是，我昨天晚上______头疼、发烧，吃完药好多了。",
              "answer": "突然"
            },
            {
              "cn": "A：你的腿可以走路，但是还不能运动。",
              "answer": ""
            },
            {
              "cn": "B：______，我知道了，我会的。",
              "answer": "注意"
            },
            {
              "cn": "A：刘医生，您下个星期来医院吗？",
              "answer": ""
            },
            {
              "cn": "B：我下个星期一不来，______时间都在。",
              "answer": "其他"
            },
            {
              "cn": "A：你疼了多长时间了？",
              "answer": ""
            },
            {
              "cn": "B：有时候疼，有时候不疼，______一个月吧。",
              "answer": "差不多"
            }
          ]
        }
      },
      "describePictures": [
        {
          "cn": "A：爷爷最近身体不太舒服，昨天晚上发低烧了，如果再______。",
          "en": ""
        },
        {
          "cn": "B：别______，你爷爷身体很健康，不会有问题。",
          "en": ""
        },
        {
          "cn": "A：他上次去医院已经______，我早就想让他再去检查一下。",
          "en": ""
        },
        {
          "cn": "B：那这次让医生给你爷爷好好检查检查。",
          "en": ""
        },
        {
          "cn": "A：您看起来真年轻，有什么______？",
          "en": ""
        },
        {
          "cn": "B：我每天都要锻炼一个小时。",
          "en": ""
        },
        {
          "cn": "A：这个习惯太好了，我以后吃完早饭也出来运动。",
          "en": ""
        },
        {
          "cn": "B：只锻炼几天没用，你要一直______。",
          "en": ""
        },
        {
          "cn": "A：医生说你______？我去医院接你。",
          "en": ""
        },
        {
          "cn": "B：医生说明天。很多病人等着住院呢，不能再______。",
          "en": ""
        },
        {
          "cn": "A：你要记住医生的话，______要多休息。",
          "en": ""
        },
        {
          "cn": "B：放心吧，我会记住的。",
          "en": ""
        }
      ],
      "classroomActivity": {
        "cn": "双人活动",
        "en": "Pair Work",
        "description": "两人一组，谈论生病的经历和健康的生活习惯。问答时，注意正确使用离合词、时量补语等语言点。",
        "descriptionEn": "Work in pairs to talk about the experience of being ill and healthy living habits. When asking and answering, make sure to use language points such as separable words and the complement of duration correctly.",
        "topics": [
          {
            "cn": "你怎么锻炼身体？每周锻炼几次？每次锻炼多长时间？"
          },
          {
            "cn": "你最近生过病吗？去了几次医院？"
          },
          {
            "cn": "如果发高烧，你会怎么做？"
          },
          {
            "cn": "你住过院吗？住了几天？为什么？"
          },
          {
            "cn": "你出院的时候，医生说什么了？"
          },
          {
            "cn": "有人说胖一点儿健康，有人说瘦一点儿好看，你怎么看？"
          }
        ]
      }
    }
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
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "世界",
            "成绩",
            "球场",
            "参加",
            "影响"
          ],
          "items": [
            {
              "cn": "我的腿不舒服，所以没______这次网球比赛。",
              "answer": "参加"
            },
            {
              "cn": "学校的______上，每天都有很多同学在那儿做运动。",
              "answer": "球场"
            },
            {
              "cn": "运动员们为了得到好______，每天要练十多个小时。",
              "answer": "成绩"
            },
            {
              "cn": "受到天气的______，今天的足球比赛要晚两个小时开始。",
              "answer": "影响"
            },
            {
              "cn": "这位运动员觉得______上最重要的运动会就是奥运会。",
              "answer": "世界"
            }
          ]
        },
        "group2": {
          "options": [
            "只是",
            "几乎",
            "主要",
            "得到",
            "受到"
          ],
          "items": [
            {
              "cn": "A：她游泳游得快吗？",
              "answer": ""
            },
            {
              "cn": "B：她______每天都游，现在游得特别快。",
              "answer": "几乎"
            },
            {
              "cn": "A：他们以前每年都是第一名，为什么今年成绩这么不好？",
              "answer": ""
            },
            {
              "cn": "B：______我觉得是因为好多老球员病了。",
              "answer": "主要"
            },
            {
              "cn": "A：你打得这么好，是羽毛球运动员吗？",
              "answer": ""
            },
            {
              "cn": "B：______打羽毛球是我的兴趣，我不是运动员。",
              "answer": "只是"
            },
            {
              "cn": "A：______我爸爸的影响，我十几岁就开始打网球了。",
              "answer": "受到"
            },
            {
              "cn": "B：现在你也开始影响我，我也喜欢上了打网球。",
              "answer": ""
            },
            {
              "cn": "A：我听说你参加了学校的运动会？",
              "answer": ""
            },
            {
              "cn": "B：是的。虽然没有______很好的成绩，但是我认识了很多新朋友。",
              "answer": "得到"
            }
          ]
        }
      },
      "describePictures": [
        {
          "cn": "A：今天你们去______吗？",
          "en": ""
        },
        {
          "cn": "B：去。为了______，我们每天下课后都去球场练习。",
          "en": ""
        },
        {
          "cn": "A：我觉得这次______，你们一定能得到好成绩。",
          "en": ""
        },
        {
          "cn": "B：谢谢。虽然不是最重要的，但是我们也要努力。",
          "en": ""
        },
        {
          "cn": "A：我看你每天都去打网球，你打得怎么样？",
          "en": ""
        },
        {
          "cn": "B：我最近才开始学，打得不太好。",
          "en": ""
        },
        {
          "cn": "A：没关系，你的身体越______。",
          "en": ""
        },
        {
          "cn": "B：你说得对，我运动只是为了______。",
          "en": ""
        },
        {
          "cn": "A：为了______，我没吃饭就来了。没想到到现在一个球也没踢进去。",
          "en": ""
        },
        {
          "cn": "B：可能受到______，每个运动员都很紧张。",
          "en": ""
        },
        {
          "cn": "A：他们现在好好休息，一会儿一定会得分的。",
          "en": ""
        },
        {
          "cn": "B：我不想看了，越______。",
          "en": ""
        }
      ],
      "classroomActivity": {
        "cn": "多人活动",
        "en": "Group Work",
        "description": "四人一组，介绍自己熟悉的运动，可以围绕以下问题讨论。讨论时，使用本课所学的词语和语言点。小组练习结束后，可以选一位同学向全班同学介绍自己熟悉的运动。",
        "descriptionEn": "Work in groups of four. Introduce a sport you are familiar with and discuss around the following questions. During the discussion, use the words and language points covered in this lesson. After the group practice, select one student from each group to introduce the sport they are familiar with to the whole class.",
        "topics": [
          {
            "cn": "你最喜欢的运动是什么？为什么？"
          },
          {
            "cn": "你是受到谁的影响开始喜欢这个运动的？"
          },
          {
            "cn": "你多久练习一次？每次练习多长时间？"
          },
          {
            "cn": "这个运动对你有什么影响？"
          },
          {
            "cn": "你参加过什么体育比赛？"
          },
          {
            "cn": "你成绩最好的一次比赛是什么？"
          }
        ]
      }
    }
  },
  {
    "name": "L10 · 你明天再把书还给我",
    "id": "10",
    "core": [
      {
        "hanzi": "数学",
        "en": "mathematics; maths"
      },
      {
        "hanzi": "认真",
        "en": "conscientious"
      },
      {
        "hanzi": "笔记",
        "en": "notes"
      },
      {
        "hanzi": "清楚",
        "en": "clear; know"
      },
      {
        "hanzi": "黑板",
        "en": "blackboard"
      },
      {
        "hanzi": "把",
        "en": "(used to advance the object of a verb to the position before it)"
      },
      {
        "hanzi": "作业",
        "en": "homework"
      },
      {
        "hanzi": "遍",
        "en": "(for actions) once through; one time"
      },
      {
        "hanzi": "提高",
        "en": "improve; enhance"
      },
      {
        "hanzi": "历史",
        "en": "history"
      },
      {
        "hanzi": "难",
        "en": "hard; difficult"
      },
      {
        "hanzi": "要求",
        "en": "requirement; require"
      },
      {
        "hanzi": "差",
        "en": "poor; be short of"
      },
      {
        "hanzi": "复习",
        "en": "review"
      },
      {
        "hanzi": "外语",
        "en": "foreign language"
      },
      {
        "hanzi": "当然",
        "en": "certainly"
      },
      {
        "hanzi": "遇到",
        "en": "encounter"
      },
      {
        "hanzi": "办公室",
        "en": "office"
      },
      {
        "hanzi": "页",
        "en": "page"
      },
      {
        "hanzi": "对话",
        "en": "converse"
      },
      {
        "hanzi": "明白",
        "en": "understand; clear"
      },
      {
        "hanzi": "讲",
        "en": "explain"
      },
      {
        "hanzi": "句",
        "en": "(used for sentences or spoken lines)"
      },
      {
        "hanzi": "句子",
        "en": "sentence"
      },
      {
        "hanzi": "年级",
        "en": "grade"
      },
      {
        "hanzi": "后年",
        "en": "the year after next"
      },
      {
        "hanzi": "一般",
        "en": "general"
      },
      {
        "hanzi": "努力",
        "en": "hard-working; make an effort (to do sth)"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "10-01",
        "title": {
          "cn": "在教室聊学习方法",
          "en": "Talking about study methods in the classroom",
          "emoji": "📓"
        },
        "intro": {
          "cn": "在教室里，刘小雪跟同学聊学习方法。",
          "en": "In the classroom, Liu Xiaoxue was talking with her classmate about study methods."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-10/10-1.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "同学让刘小雪做什么？",
            "options": [
              "看笔记",
              "认真记笔记",
              "介绍学习方法"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "同学听了刘小雪的学习方法后，有什么打算？",
            "options": [
              "认真听课",
              "认真记笔记",
              "每天写作业"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "同学",
            "cn": "你的数学越来越好，能不能介绍一下学习方法？",
            "en": "Your math is getting better and better. Could you share your study methods？"
          },
          {
            "speaker": "刘小雪",
            "cn": "没有什么特别的方法，认真听课，认真记笔记。",
            "en": "Nothing special—I just pay close attention in class and take detailed notes."
          },
          {
            "speaker": "同学",
            "cn": "我看过你的笔记，记得非常清楚。",
            "en": "I've seen your notes—they're really clear and well-organized."
          },
          {
            "speaker": "刘小雪",
            "cn": "老师写在黑板上的题都很重要，所以我会把这些题都记在本子上。",
            "en": "The questions the teacher writes on the blackboard are all important, so I make sure to write them all down in my notebook."
          },
          {
            "speaker": "同学",
            "cn": "你说得对。我没有记笔记的习惯。",
            "en": "You're absolutely right. I don't really have the habit of taking notes."
          },
          {
            "speaker": "刘小雪",
            "cn": "笔记挺重要的，我每天写作业以前，都要看一遍。",
            "en": "Notes are really important. I review them once before doing my homework every day."
          },
          {
            "speaker": "同学",
            "cn": "这个方法真好！我以后也试试，希望能提高成绩。",
            "en": "That's such a great method! I'll try it too—hopefully it'll help improve my grades."
          }
        ],
        "postQuestions": [
          {
            "q": "刘小雪的数学为什么越来越好？"
          },
          {
            "q": "刘小雪觉得老师写在黑板上的题重要吗？"
          },
          {
            "q": "刘小雪的同学打算怎么做？为什么？"
          }
        ],
        "words": [
          {
            "cn": "数学",
            "pos": "n.",
            "en": "mathematics; maths"
          },
          {
            "cn": "认真",
            "pos": "adj.",
            "en": "conscientious"
          },
          {
            "cn": "笔记",
            "pos": "n.",
            "en": "notes"
          },
          {
            "cn": "清楚",
            "pos": "adj./v.",
            "en": "clear; know"
          },
          {
            "cn": "黑板",
            "pos": "n.",
            "en": "blackboard"
          },
          {
            "cn": "把",
            "pos": "prep.",
            "en": "(used to advance the object of a verb to the position before it)"
          },
          {
            "cn": "作业",
            "pos": "n.",
            "en": "homework"
          },
          {
            "cn": "遍",
            "pos": "m.",
            "en": "(for actions) once through; one time"
          },
          {
            "cn": "提高",
            "pos": "v.",
            "en": "improve; enhance"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-10/10-2.mp3"
      },
      {
        "id": "10-02",
        "title": {
          "cn": "在教室聊昨天的考试",
          "en": "Talking about yesterday's exam in the classroom",
          "emoji": "📝"
        },
        "intro": {
          "cn": "在教室里，刘小雪跟同学聊昨天的考试。",
          "en": "In the classroom, Liu Xiaoxue was talking with her classmate about yesterday's exam."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-10/10-3.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "刘小雪觉得昨天的考试怎么样？",
            "options": [
              "外语没考好",
              "历史有点儿难",
              "数学考得还可以"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "关于那几个外语题，可以知道什么？",
            "options": [
              "小雪会做",
              "要去问老师",
              "小雪的同学会做"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "同学",
            "cn": "小雪，昨天的考试，你考得怎么样？",
            "en": "Xiaoxue, how did you do on yesterday's exam？"
          },
          {
            "speaker": "刘小雪",
            "cn": "我觉得历史有点儿难，你呢？",
            "en": "I thought the history exam was a bit difficult. What about you？"
          },
          {
            "speaker": "同学",
            "cn": "数学考试我没看清楚要求，做错了好几个题，考得挺差的。",
            "en": "On the math test, I didn't read the instructions carefully and got several questions wrong. I didn't do very well."
          },
          {
            "speaker": "刘小雪",
            "cn": "明天还有考试呢，别想那么多了，先复习外语吧。",
            "en": "There's another exam tomorrow—don't dwell on it too much. Let's focus on reviewing the foreign language for now."
          },
          {
            "speaker": "同学",
            "cn": "外语作业里有几个问题，我可以问问你吗？",
            "en": "I have a few questions about the foreign language homework. Can I ask you for help？"
          },
          {
            "speaker": "刘小雪",
            "cn": "当然可以。在学习上，遇到什么问题都可以问我。",
            "en": "Of course! Feel free to ask me anything related to studying."
          },
          {
            "speaker": "刘小雪",
            "cn": "不好意思，这几个题我也不会。咱们还是一起去办公室问问李老师吧。",
            "en": "Sorry, I don't know how to solve these questions either. Let's go to Ms. Li's office together and ask her for help."
          }
        ],
        "postQuestions": [
          {
            "q": "明天还有什么考试？"
          },
          {
            "q": "同学要问刘小雪什么问题？"
          },
          {
            "q": "刘小雪和同学为什么一起去办公室？"
          }
        ],
        "words": [
          {
            "cn": "历史",
            "pos": "n.",
            "en": "history"
          },
          {
            "cn": "难",
            "pos": "adj.",
            "en": "hard; difficult"
          },
          {
            "cn": "要求",
            "pos": "n./v.",
            "en": "requirement; require"
          },
          {
            "cn": "差",
            "pos": "adj./v.",
            "en": "poor; be short of"
          },
          {
            "cn": "复习",
            "pos": "v.",
            "en": "review"
          },
          {
            "cn": "外语",
            "pos": "n.",
            "en": "foreign language"
          },
          {
            "cn": "当然",
            "pos": "adv.",
            "en": "certainly"
          },
          {
            "cn": "遇到",
            "pos": "v.",
            "en": "encounter"
          },
          {
            "cn": "办公室",
            "pos": "n.",
            "en": "office"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-10/10-4.mp3"
      },
      {
        "id": "10-03",
        "title": {
          "cn": "在李老师办公室问问题",
          "en": "Asking questions in Ms. Li's office",
          "emoji": "🏫"
        },
        "intro": {
          "cn": "在李老师办公室，刘小雪跟同学问问题。",
          "en": "In Ms. Li's office, Liu Xiaoxue and her classmate were asking questions."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-10/10-5.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "他们的问题在书上第几页？",
            "options": [
              "第五页",
              "第七页",
              "第十五页"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "李老师讲完，刘小雪和同学听懂了吗？",
            "options": [
              "没听懂",
              "都明白了",
              "还有几个不明白"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "同学",
            "cn": "李老师，书上有几个问题，我们想问问您。",
            "en": "Ms. Li, we have a few questions from the textbook that we'd like to ask you."
          },
          {
            "speaker": "李老师",
            "cn": "好，坐下说吧，哪个题不会？",
            "en": "Sure, have a seat. Which questions are you struggling with？"
          },
          {
            "speaker": "同学",
            "cn": "书上第五页的这个对话我看不懂，小雪也不明白。",
            "en": "I don't understand this dialogue on page 5, and Xiaoxue doesn't get it either."
          },
          {
            "speaker": "李老师",
            "cn": "我课上讲过这几句话，再给你们讲一遍。",
            "en": "I went over these sentences in class—let me explain them again."
          },
          {
            "speaker": "",
            "cn": "（李老师给学生讲题。）",
            "en": "(Ms. Li explains the questions to the students.)"
          },
          {
            "speaker": "同学",
            "cn": "我终于懂了。这些句子一点儿也不难。",
            "en": "I finally get it now. These questions aren't difficult at all！"
          },
          {
            "speaker": "刘小雪",
            "cn": "我也明白了，谢谢您，李老师。",
            "en": "I understand too. Thank you, Ms. Li."
          },
          {
            "speaker": "李老师",
            "cn": "我这本书上还有几个练习，你们回家也做一做，明天再把书还给我。",
            "en": "There are a few more exercises in this book of mine. Try working on them at home, and return the book to me tomorrow."
          }
        ],
        "postQuestions": [
          {
            "q": "刘小雪的同学听明白了吗？"
          },
          {
            "q": "李老师上课的时候讲过这几句话吗？"
          },
          {
            "q": "李老师为什么给他们一本书？"
          }
        ],
        "words": [
          {
            "cn": "页",
            "pos": "m.",
            "en": "page"
          },
          {
            "cn": "对话",
            "pos": "v.",
            "en": "converse"
          },
          {
            "cn": "明白",
            "pos": "v./adj.",
            "en": "understand; clear"
          },
          {
            "cn": "讲",
            "pos": "v.",
            "en": "explain"
          },
          {
            "cn": "句",
            "pos": "m.",
            "en": "(used for sentences or spoken lines)"
          },
          {
            "cn": "句子",
            "pos": "n.",
            "en": "sentence"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-10/10-6.mp3"
      },
      {
        "id": "10-04",
        "title": {
          "cn": "在家里给家月姐姐写邮件",
          "en": "Writing an email to Sister Jiayue at home",
          "emoji": "✉️"
        },
        "intro": {
          "cn": "在家里，刘小雪在写邮件。",
          "en": "At home, Liu Xiaoxue was writing an email."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-10/10-7.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "刘小雪现在读几年级？",
            "options": [
              "小学六年级",
              "初中二年级",
              "高中一年级"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "在白家月的影响下，刘小雪喜欢做什么了？",
            "options": [
              "拍照",
              "努力学习",
              "给朋友看照片"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "家月姐姐：",
            "en": "Dear Sister Jiayue,"
          },
          {
            "speaker": "",
            "cn": "你最近怎么样？忙不忙？",
            "en": "How have you been lately? Are you busy these days？"
          },
          {
            "speaker": "",
            "cn": "我现在上初中二年级，学习越来越忙，后年就要考高中了。",
            "en": "I'm now in my second year of middle school, and my studies are becoming more and more demanding. The year after next, I'll be taking the high school entrance exams."
          },
          {
            "speaker": "",
            "cn": "中国的学校一般是小学六年，初中三年，高中三年。",
            "en": "In China, schools generally consist of six years of elementary school, three years of middle school, and three years of high school."
          },
          {
            "speaker": "",
            "cn": "妈妈说想考上好大学，就得上一个好高中；为了考上好高中，初中就得有一个不错的成绩，所以我现在非常努力。",
            "en": "My mom says that to get into a good university, you first need to attend a good high school—and to enter a good high school, you need to have strong grades in middle school. That's why I'm working very hard now."
          },
          {
            "speaker": "",
            "cn": "家月姐姐，你知道吗？在你的影响下，我也开始喜欢拍照了。",
            "en": "Sister Jiayue, did you know that, thanks to your influence, I've started to enjoy photography？"
          },
          {
            "speaker": "",
            "cn": "下次你再来北京，我给你看看我照的照片。",
            "en": "Next time you visit Beijing, I'll show you some of the photos I've taken."
          }
        ],
        "postQuestions": [
          {
            "q": "刘小雪现在读几年级？"
          },
          {
            "q": "中国的学校一般是怎么分段的？"
          },
          {
            "q": "刘小雪为什么现在非常努力？"
          }
        ],
        "words": [
          {
            "cn": "年级",
            "pos": "n.",
            "en": "grade"
          },
          {
            "cn": "后年",
            "pos": "n.",
            "en": "the year after next"
          },
          {
            "cn": "一般",
            "pos": "adj.",
            "en": "general"
          },
          {
            "cn": "努力",
            "pos": "adj./v.",
            "en": "hard-working; make an effort (to do sth)"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-10/10-8.mp3"
      }
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "遍",
            "难",
            "差",
            "讲",
            "清楚"
          ],
          "items": [
            {
              "cn": "我再说一______，请大家认真听。",
              "answer": "遍"
            },
            {
              "cn": "你的汉字写得太______了，要多练习才能写得好。",
              "answer": "差"
            },
            {
              "cn": "老师上课说什么我没听______，你再告诉我一下吧。",
              "answer": "清楚"
            },
            {
              "cn": "李老师，可以给我______一下我做错的这几个题吗？",
              "answer": "讲"
            },
            {
              "cn": "今天这几个题有点儿______，好多同学都没听明白。",
              "answer": "难"
            }
          ]
        },
        "group2": {
          "options": [
            "认真",
            "复习",
            "提高",
            "要求",
            "当然"
          ],
          "items": [
            {
              "cn": "A：今天的作业你写完了吗？",
              "answer": ""
            },
            {
              "cn": "B：没有，老师______写500个字，我只写了一半。",
              "answer": "要求"
            },
            {
              "cn": "A：你有什么______外语水平的好方法吗？",
              "answer": ""
            },
            {
              "cn": "B：没什么特别的，多听多说就行了。",
              "answer": "提高"
            },
            {
              "cn": "A：你还在想考试的事吗？一次考试没考好没关系。",
              "answer": ""
            },
            {
              "cn": "B：好，我不想了。我以后会好好______的。",
              "answer": "复习"
            },
            {
              "cn": "A：我高中的时候没遇到好老师，所以成绩越来越差。",
              "answer": ""
            },
            {
              "cn": "B：老师______重要，但是自己的努力也很重要。",
              "answer": "当然"
            },
            {
              "cn": "A：这次你数学考试考了100分，你是怎么做到的？",
              "answer": ""
            },
            {
              "cn": "B：做完以后，我又______地检查了一遍。",
              "answer": "认真"
            }
          ]
        }
      },
      "describePictures": [
        {
          "cn": "A：你觉得汉字难写吗？",
          "en": ""
        },
        {
          "cn": "B：______，除了我，同学们也觉得汉字不好写。",
          "en": ""
        },
        {
          "cn": "A：我有一个好办法，我把______，有时间就看看。",
          "en": ""
        },
        {
          "cn": "B：谢谢你把这个好办法______。",
          "en": ""
        },
        {
          "cn": "A：听说这次考试你的成绩______。",
          "en": ""
        },
        {
          "cn": "B：对，这还要谢谢您的帮助。",
          "en": ""
        },
        {
          "cn": "A：别客气。最重要的是______。",
          "en": ""
        },
        {
          "cn": "B：在______下，我越来越喜欢历史课了。",
          "en": ""
        },
        {
          "cn": "A：昨天的外语作业______，我好几个题都不会写。",
          "en": ""
        },
        {
          "cn": "B：你可以把______，我帮你看看。",
          "en": ""
        },
        {
          "cn": "A：行，就是这几个题不会。",
          "en": ""
        },
        {
          "cn": "B：这几个句子老师上课讲过，我把______，你先自己学一下。",
          "en": ""
        }
      ],
      "classroomActivity": {
        "cn": "多人活动",
        "en": "Group Work",
        "description": "四人一组，交流学习外语的方法，然后向全班分享。全班投票选出三种最有效的学习方法。讨论时，使用本课所学的词语和语言点。",
        "descriptionEn": "Work in groups of four. Exchange foreign language learning methods and then share your ideas with the class. The class votes for the three most effective methods. During the discussion, use the words and language points covered in this lesson.",
        "topics": []
      }
    }
  },
  {
    "name": "L11 · 看来我没办法解决这个问题",
    "id": "11",
    "core": [
      {
        "hanzi": "会议",
        "en": "meeting; conference"
      },
      {
        "hanzi": "经理",
        "en": "manager"
      },
      {
        "hanzi": "开会",
        "en": "have a meeting"
      },
      {
        "hanzi": "后天",
        "en": "the day after tomorrow"
      },
      {
        "hanzi": "地点",
        "en": "place"
      },
      {
        "hanzi": "室",
        "en": "room"
      },
      {
        "hanzi": "发",
        "en": "send"
      },
      {
        "hanzi": "笔记本（电脑）",
        "en": "laptop"
      },
      {
        "hanzi": "或者",
        "en": "or"
      },
      {
        "hanzi": "声音",
        "en": "sound"
      },
      {
        "hanzi": "看来",
        "en": "it seems"
      },
      {
        "hanzi": "办法",
        "en": "way; approach"
      },
      {
        "hanzi": "解决",
        "en": "solve"
      },
      {
        "hanzi": "只能",
        "en": "can only"
      },
      {
        "hanzi": "别人",
        "en": "someone else; other people"
      },
      {
        "hanzi": "请假",
        "en": "ask for leave"
      },
      {
        "hanzi": "同事",
        "en": "colleague"
      },
      {
        "hanzi": "休假",
        "en": "take a vacation"
      },
      {
        "hanzi": "怕",
        "en": "be afraid of, fear"
      },
      {
        "hanzi": "邮箱",
        "en": "email address; mailbox"
      },
      {
        "hanzi": "老张",
        "en": "Lao Zhang"
      },
      {
        "hanzi": "愿意",
        "en": "be willing"
      },
      {
        "hanzi": "城市",
        "en": "city"
      },
      {
        "hanzi": "生活",
        "en": "life; live"
      },
      {
        "hanzi": "为",
        "en": "for"
      },
      {
        "hanzi": "离开",
        "en": "leave"
      },
      {
        "hanzi": "或",
        "en": "or"
      },
      {
        "hanzi": "机会",
        "en": "opportunity"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "11-01",
        "title": {
          "cn": "在办公室讨论会议安排",
          "en": "Discussing the meeting arrangements in the office",
          "emoji": "📅"
        },
        "intro": {
          "cn": "在办公室里，王一雪跟杨同乐在讨论工作。",
          "en": "In the office, Wang Yixue and Yang Tongle were discussing work."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-11/11-1.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一雪和杨同乐在说什么？",
            "options": [
              "下午的会议",
              "经理在哪儿",
              "怎么发邮件"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "杨同乐为什么要给大家发邮件？",
            "options": [
              "找大家来开会",
              "告诉大家带笔记本电脑",
              "告诉大家会议时间和地点"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "王一雪",
            "cn": "会议下午几点开始？",
            "en": "What time does the meeting start this afternoon？"
          },
          {
            "speaker": "杨同乐",
            "cn": "今天下午经理不在，不开会了。",
            "en": "The manager isn't available this afternoon, so the meeting has been canceled."
          },
          {
            "speaker": "王一雪",
            "cn": "那什么时候开会？",
            "en": "Then when will it be held？"
          },
          {
            "speaker": "杨同乐",
            "cn": "后天上午十点，会议地点换到第一会议室。我正要给大家发邮件。",
            "en": "At 10 a.m. the day after tomorrow. The location has been changed to Meeting Room 1. I'm about to send everyone an email."
          },
          {
            "speaker": "王一雪",
            "cn": "开会的时候，我们用会议室的电脑还是自己的笔记本电脑？",
            "en": "For the meeting, should we use the room's computer or bring our own？"
          },
          {
            "speaker": "杨同乐",
            "cn": "会议室的电脑或者自己的电脑都可以。",
            "en": "Either works."
          },
          {
            "speaker": "王一雪",
            "cn": "那到时候咱们早点儿过去，你帮我把电脑接好吧。",
            "en": "Let's go a bit earlier then—can you help me set up the computer？"
          }
        ],
        "postQuestions": [
          {
            "q": "今天为什么不开会了？"
          },
          {
            "q": "会议换到了什么时间和地点？"
          },
          {
            "q": "王一雪需要杨同乐帮忙做什么？"
          }
        ],
        "words": [
          {
            "cn": "会议",
            "pos": "n.",
            "en": "meeting; conference"
          },
          {
            "cn": "经理",
            "pos": "n.",
            "en": "manager"
          },
          {
            "cn": "开会",
            "pos": "v.",
            "en": "have a meeting"
          },
          {
            "cn": "后天",
            "pos": "n.",
            "en": "the day after tomorrow"
          },
          {
            "cn": "地点",
            "pos": "n.",
            "en": "place"
          },
          {
            "cn": "室",
            "pos": "n.",
            "en": "room"
          },
          {
            "cn": "发",
            "pos": "v.",
            "en": "send"
          },
          {
            "cn": "笔记本（电脑）",
            "pos": "n.",
            "en": "laptop"
          },
          {
            "cn": "或者",
            "pos": "conj.",
            "en": "or"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-11/11-2.mp3"
      },
      {
        "id": "11-02",
        "title": {
          "cn": "在会议室做会前准备",
          "en": "Preparing for the meeting in the meeting room",
          "emoji": "💻"
        },
        "intro": {
          "cn": "在会议室，王一雪跟杨同乐在做会前准备。",
          "en": "In the meeting room, Wang Yixue and Yang Tongle were preparing for the meeting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-11/11-3.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "杨同乐在帮助王一雪做什么？",
            "options": [
              "发邮件",
              "看邮件",
              "解决电脑的问题"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "杨同乐解决这个问题了吗？",
            "options": [
              "解决了",
              "没有，要上网查一下",
              "没有，要找别人来帮忙"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "王一雪",
            "cn": "电脑接好了吗？",
            "en": "Is the computer set up？"
          },
          {
            "speaker": "杨同乐",
            "cn": "已经接好了，您开机看看有没有问题。",
            "en": "It's already set up. Go ahead and turn it on to see if there's any issue."
          },
          {
            "speaker": "王一雪",
            "cn": "现在什么都看不见。",
            "en": "I can't see anything at the moment."
          },
          {
            "speaker": "杨同乐",
            "cn": "我检查一下哪里出问题了……您再试一下。",
            "en": "Let me check what's wrong… Try again."
          },
          {
            "speaker": "王一雪",
            "cn": "看见了，但是听不见声音。",
            "en": "Now I can see, but there's no sound."
          },
          {
            "speaker": "杨同乐",
            "cn": "现在呢？",
            "en": "How about now？"
          },
          {
            "speaker": "王一雪",
            "cn": "听得见声音，但是声音有点儿小，听不清楚。",
            "en": "I can hear it now, but it's still too quiet to hear clearly."
          },
          {
            "speaker": "杨同乐",
            "cn": "看来我没办法解决这个问题，只能找别人来帮帮忙了。",
            "en": "Looks like I can't fix this problem. We'll have to ask someone else for help."
          }
        ],
        "postQuestions": [
          {
            "q": "开机以后，电脑有什么问题？"
          },
          {
            "q": "杨同乐检查以后，电脑怎么样了？"
          },
          {
            "q": "听见声音以后，又出现了什么问题？"
          }
        ],
        "words": [
          {
            "cn": "声音",
            "pos": "n.",
            "en": "sound"
          },
          {
            "cn": "看来",
            "pos": "v.",
            "en": "it seems"
          },
          {
            "cn": "办法",
            "pos": "n.",
            "en": "way; approach"
          },
          {
            "cn": "解决",
            "pos": "v.",
            "en": "solve"
          },
          {
            "cn": "只能",
            "pos": "adv.",
            "en": "can only"
          },
          {
            "cn": "别人",
            "pos": "pron.",
            "en": "someone else; other people"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-11/11-4.mp3"
      },
      {
        "id": "11-03",
        "title": {
          "cn": "在办公室聊工作进度",
          "en": "Chatting about work progress in the office",
          "emoji": "☕"
        },
        "intro": {
          "cn": "在办公室里，王一雪跟杨同乐在聊天儿。",
          "en": "In the office, Wang Yixue and Yang Tongle were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-11/11-5.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一雪这几天为什么特别忙？",
            "options": [
              "经理不在",
              "每天开会",
              "好几个同事没来"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "杨同乐吃完饭要做什么？",
            "options": [
              "帮同事请假",
              "给公司发邮件",
              "帮王一雪把工作做完"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "王一雪",
            "cn": "同乐，你看见老张了吗？",
            "en": "Tongle, have you seen Lao Zhang？"
          },
          {
            "speaker": "杨同乐",
            "cn": "老张没来。他说家里有点儿事，所以请假了。",
            "en": "He didn't come in today. He said he had some family matters to take care of, so he took the day off."
          },
          {
            "speaker": "王一雪",
            "cn": "好几个同事都休假了，开会前这么多工作我怕干不完。",
            "en": "Quite a few colleagues are on leave. I'm worried I won't be able to finish all this work before the meeting."
          },
          {
            "speaker": "杨同乐",
            "cn": "十二点多了，咱们先去吃饭吧。吃完饭，我跟您一起把这些工作做完。",
            "en": "It's already past twelve. Let's grab some lunch first. After we eat, I'll help you finish these tasks."
          },
          {
            "speaker": "王一雪",
            "cn": "你先去吃，我想再干一会儿。明天开会前要发到公司的邮箱里。",
            "en": "You go ahead—I'll keep working for a bit longer. I need to send this to the company's email address before tomorrow's meeting."
          },
          {
            "speaker": "杨同乐",
            "cn": "您没看到邮件吗？经理还没回来呢，下周才能开会。",
            "en": "Didn't you see the email? The manager isn't back yet, so the meeting's been postponed to next week."
          },
          {
            "speaker": "王一雪",
            "cn": "那不着急了。走，吃饭去。",
            "en": "That's a relief! Let's go eat."
          }
        ],
        "postQuestions": [
          {
            "q": "老张今天为什么没来上班？"
          },
          {
            "q": "王一雪为什么没时间吃饭？"
          },
          {
            "q": "明天公司开会吗？"
          }
        ],
        "words": [
          {
            "cn": "请假",
            "pos": "v.",
            "en": "ask for leave"
          },
          {
            "cn": "同事",
            "pos": "n.",
            "en": "colleague"
          },
          {
            "cn": "休假",
            "pos": "v.",
            "en": "take a vacation"
          },
          {
            "cn": "怕",
            "pos": "v.",
            "en": "be afraid of, fear"
          },
          {
            "cn": "邮箱",
            "pos": "n.",
            "en": "email address; mailbox"
          },
          {
            "cn": "老张",
            "pos": "",
            "en": "Lao Zhang"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-11/11-6.mp3"
      },
      {
        "id": "11-04",
        "title": {
          "cn": "在家里写日记",
          "en": "Writing a diary at home",
          "emoji": "📖"
        },
        "intro": {
          "cn": "在家里，王一雪在写日记。",
          "en": "At home, Wang Yixue was writing in her diary."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-11/11-7.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一雪最近在想什么问题？",
            "options": [
              "上海的机会多不多",
              "喜欢不喜欢现在的工作",
              "愿意不愿意去别的城市工作"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "王一雪为什么不想去上海工作？",
            "options": [
              "上海没有什么机会",
              "她不愿意离开家人",
              "她不认识上海的同事"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "前几天，上海的同事来北京了。",
            "en": "A few days ago, some colleagues from Shanghai visited Beijing."
          },
          {
            "speaker": "",
            "cn": "一起吃饭时，他们跟我说最近有不少同事去上海工作了，问我愿意不愿意也去上海。",
            "en": "During dinner, they told me that many coworkers had recently moved to Shanghai for work and asked if I'd be willing to go there too."
          },
          {
            "speaker": "",
            "cn": "我是这样想的：现在丈夫和孩子都在北京，刘明的工作很忙，小雪和小明也还小，我去别的城市工作就要离开他们。",
            "en": "Here's how I feel about it: Right now, my husband and children are in Beijing. Liu Ming's job is very demanding, and Xiaoxue and Xiaoming are still young. If I were to work in another city, I'd have to leave them behind."
          },
          {
            "speaker": "",
            "cn": "虽然去上海可能会有更好的机会，但是对我来说，生活也很重要，我不愿意为工作或学习离开家人。",
            "en": "While Shanghai might offer better career opportunities, life itself is just as important to me. I'm not willing to leave my family behind for work or study."
          }
        ],
        "postQuestions": [
          {
            "q": "上海的同事告诉王一雪什么了？"
          },
          {
            "q": "王一雪觉得去上海工作有什么好处？"
          },
          {
            "q": "对王一雪来说，工作和生活哪个更重要？"
          }
        ],
        "words": [
          {
            "cn": "愿意",
            "pos": "mod.",
            "en": "be willing"
          },
          {
            "cn": "城市",
            "pos": "n.",
            "en": "city"
          },
          {
            "cn": "生活",
            "pos": "n./v.",
            "en": "life; live"
          },
          {
            "cn": "为",
            "pos": "prep.",
            "en": "for"
          },
          {
            "cn": "离开",
            "pos": "v.",
            "en": "leave"
          },
          {
            "cn": "或",
            "pos": "conj.",
            "en": "or"
          },
          {
            "cn": "机会",
            "pos": "n.",
            "en": "opportunity"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-11/11-8.mp3"
      }
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "发",
            "怕",
            "为",
            "或者",
            "机会"
          ],
          "items": [
            {
              "cn": "这是同事们______你准备的礼物。",
              "answer": "为"
            },
            {
              "cn": "下班以前我得把这封邮件______给大家。",
              "answer": "发"
            },
            {
              "cn": "今天好几个人请假了，我们明天______后天再开会吧。",
              "answer": "或者"
            },
            {
              "cn": "每次开会我都不说话，因为我总是______说错话。",
              "answer": "怕"
            },
            {
              "cn": "这次去上海开会是个好______，你可以多认识一些新同事。",
              "answer": "机会"
            }
          ]
        },
        "group2": {
          "options": [
            "办法",
            "解决",
            "只能",
            "离开",
            "愿意"
          ],
          "items": [
            {
              "cn": "A：你为什么要______现在的公司？",
              "answer": "离开"
            },
            {
              "cn": "B：对我来说，多跟家人在一起比工作更重要。",
              "answer": ""
            },
            {
              "cn": "A：工作中遇到不能______的问题，你怎么办？",
              "answer": "解决"
            },
            {
              "cn": "B：请同事帮忙，多跟他们学习。",
              "answer": ""
            },
            {
              "cn": "A：每次遇到问题，他都会帮我们一起想______。",
              "answer": "办法"
            },
            {
              "cn": "B：所以大家都喜欢和他做朋友。",
              "answer": ""
            },
            {
              "cn": "A：你______去别的城市工作吗？",
              "answer": "愿意"
            },
            {
              "cn": "B：经理已经问过我了，我还没想好呢。",
              "answer": ""
            },
            {
              "cn": "A：这么多工作今天做不完了，______明天再说。",
              "answer": "只能"
            },
            {
              "cn": "B：行，明天我和你一起把这些做完。",
              "answer": ""
            }
          ]
        }
      },
      "describePictures": [
        {
          "cn": "A：已经好几天了，看来______。",
          "en": ""
        },
        {
          "cn": "B：我有一个办法，不知道______。",
          "en": ""
        },
        {
          "cn": "A：咱们试一试吧，做错事也是一种学习。",
          "en": ""
        },
        {
          "cn": "B：对我来说，什么办法都比没办法好。",
          "en": ""
        },
        {
          "cn": "A：这个工作机会挺好的，但是要一个人去上海，你______吗？",
          "en": ""
        },
        {
          "cn": "B：不行，对______，家人比工作更重要。",
          "en": ""
        },
        {
          "cn": "A：我也是。如果______，我也不愿意去。",
          "en": ""
        },
        {
          "cn": "B：看来______。",
          "en": ""
        },
        {
          "cn": "A：你看见小王和小李了吗？",
          "en": ""
        },
        {
          "cn": "B：小王感冒了，他今天______；小李上个星期就______。",
          "en": ""
        },
        {
          "cn": "A：那你来第一会议室吧，马上要______了。",
          "en": ""
        },
        {
          "cn": "B：好的，我把这几封______。",
          "en": ""
        }
      ],
      "classroomActivity": {
        "cn": "多人活动",
        "en": "Group Work",
        "description": "四人一组，轮流描述一个职业，其他人猜。描述时不能直接说出职业的名称，而要用几句话来介绍这个工作的内容、场所、穿着等。回答时，使用本课所学的词语和语言点。",
        "descriptionEn": "Work in groups of four. Take turns describing a profession for the others to guess. When describing, do not directly mention the name of the profession. Instead, use a few sentences to talk about the job's responsibilities, workplace, attire, and other details. When responding, use the words and language points covered in this lesson.",
        "topics": [
          {
            "cn": "例如：对很多人来说，如果身体不舒服就会去找他。"
          }
        ]
      }
    }
  },
  {
    "name": "L12 · 这个季节天气变化很快",
    "id": "12",
    "core": [
      {
        "hanzi": "街",
        "en": "street"
      },
      {
        "hanzi": "开花",
        "en": "bloom"
      },
      {
        "hanzi": "公园",
        "en": "park"
      },
      {
        "hanzi": "船",
        "en": "boat"
      },
      {
        "hanzi": "工作日",
        "en": "weekday"
      },
      {
        "hanzi": "地方",
        "en": "place"
      },
      {
        "hanzi": "刚才",
        "en": "a moment ago; just now"
      },
      {
        "hanzi": "刮",
        "en": "(of wind) blow"
      },
      {
        "hanzi": "风",
        "en": "wind"
      },
      {
        "hanzi": "新闻",
        "en": "news"
      },
      {
        "hanzi": "伞",
        "en": "umbrella"
      },
      {
        "hanzi": "借",
        "en": "lend"
      },
      {
        "hanzi": "把",
        "en": "for sth with a handle, or with its legs parted, etc."
      },
      {
        "hanzi": "雨衣",
        "en": "raincoat"
      },
      {
        "hanzi": "变",
        "en": "change"
      },
      {
        "hanzi": "季节",
        "en": "season"
      },
      {
        "hanzi": "变化",
        "en": "change; variation"
      },
      {
        "hanzi": "冬天",
        "en": "winter"
      },
      {
        "hanzi": "常常",
        "en": "often"
      },
      {
        "hanzi": "关注",
        "en": "pay close attention"
      },
      {
        "hanzi": "四季",
        "en": "four seasons"
      },
      {
        "hanzi": "春天",
        "en": "spring"
      },
      {
        "hanzi": "夏天",
        "en": "summer"
      },
      {
        "hanzi": "凉快",
        "en": "comfortably cool"
      },
      {
        "hanzi": "秋天",
        "en": "autumn"
      },
      {
        "hanzi": "叶子",
        "en": "leaf"
      },
      {
        "hanzi": "变成",
        "en": "become"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "12-01",
        "title": {
          "cn": "在街上边聊边走",
          "en": "Chatting while walking on the street",
          "emoji": "🌳"
        },
        "intro": {
          "cn": "在街上，王一飞和白家月边走边聊。",
          "en": "On the street, Wang Yifei and Bai Jiayue were chatting while walking."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-12/12-1.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "这条街的环境怎么样？",
            "options": [
              "人很多",
              "树很少",
              "树都开花了"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "她们今天为什么不去公园？",
            "options": [
              "今天天气不好",
              "今天是工作日",
              "王老师没时间"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "白家月",
            "cn": "王老师，您看，这条街上的树都开花了。",
            "en": "Ms. Wang, look! The trees along this street are in bloom."
          },
          {
            "speaker": "王一飞",
            "cn": "上周我去公园坐船了，公园里的花也开了。",
            "en": "Last week, I went boating in the park—the flowers there were blooming, too."
          },
          {
            "speaker": "白家月",
            "cn": "天气这么好，下午我也想去公园坐船。",
            "en": "The weather is so nice. I'd like to go boating in the park this afternoon."
          },
          {
            "speaker": "王一飞",
            "cn": "去吧！今天是工作日，人应该不多。",
            "en": "Go ahead! It's a weekday, so there probably won't be many people."
          },
          {
            "speaker": "白家月",
            "cn": "您有时间吗？我想跟您一起去。",
            "en": "Do you have time? I'd like to go with you."
          },
          {
            "speaker": "王一飞",
            "cn": "我今天下午有课，不能去太远的地方。",
            "en": "I have classes this afternoon, so I can't go too far."
          },
          {
            "speaker": "白家月",
            "cn": "那咱们换一天去？",
            "en": "Then shall we go another day？"
          },
          {
            "speaker": "王一飞",
            "cn": "行。或者明天去，或者后天去，我给你打电话。",
            "en": "Sure—either tomorrow or the day after. I'll give you a call."
          }
        ],
        "postQuestions": [
          {
            "q": "上周王一飞去公园做什么了？"
          },
          {
            "q": "白家月今天想做什么？"
          },
          {
            "q": "她们可能什么时候去公园？"
          }
        ],
        "words": [
          {
            "cn": "街",
            "pos": "n.",
            "en": "street"
          },
          {
            "cn": "开花",
            "pos": "v.",
            "en": "bloom"
          },
          {
            "cn": "公园",
            "pos": "n.",
            "en": "park"
          },
          {
            "cn": "船",
            "pos": "n.",
            "en": "boat"
          },
          {
            "cn": "工作日",
            "pos": "n.",
            "en": "weekday"
          },
          {
            "cn": "地方",
            "pos": "n.",
            "en": "place"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-12/12-2.mp3"
      },
      {
        "id": "12-02",
        "title": {
          "cn": "在街上散步",
          "en": "Taking a walk on the street",
          "emoji": "🌬️"
        },
        "intro": {
          "cn": "在街上，王一飞和白家月一起散步。",
          "en": "On the street, Wang Yifei and Bai Jiayue were taking a walk together."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-12/12-3.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "新闻里说今天会是什么天气？",
            "options": [
              "晴天",
              "下雪",
              "下雨"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "这个季节的天气是什么样的？",
            "options": [
              "变化很快",
              "经常下雨",
              "每天晴天"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "白家月",
            "cn": "刚才还是大晴天呢，怎么突然就刮起风来了？",
            "en": "It was sunny just a moment ago. How did it suddenly get so windy？"
          },
          {
            "speaker": "王一飞",
            "cn": "好像新闻里说今天有雨。",
            "en": "I think the news said it's going to rain today."
          },
          {
            "speaker": "白家月",
            "cn": "啊？我每天书包里都放着雨伞，就今天没带。",
            "en": "Really? I usually keep an umbrella in my bag, but I didn't bring it today."
          },
          {
            "speaker": "王一飞",
            "cn": "我可以借给你，我车里有一把伞和一件雨衣。",
            "en": "I can lend you one—I have both an umbrella and a raincoat in my car."
          },
          {
            "speaker": "白家月",
            "cn": "谢谢，希望下午天气能变好。",
            "en": "Thanks! I hope the weather clears up this afternoon."
          },
          {
            "speaker": "王一飞",
            "cn": "这个季节天气变化很快。",
            "en": "The weather changes quickly at this time of year."
          },
          {
            "speaker": "白家月",
            "cn": "雨已经下起来了，咱们快点儿走吧。",
            "en": "It's already starting to rain—let's hurry and go."
          }
        ],
        "postQuestions": [
          {
            "q": "白家月今天带雨伞了吗？"
          },
          {
            "q": "王一飞可以借给白家月什么？"
          },
          {
            "q": "她们现在要做什么？为什么？"
          }
        ],
        "words": [
          {
            "cn": "刚才",
            "pos": "n.",
            "en": "a moment ago; just now"
          },
          {
            "cn": "刮",
            "pos": "v.",
            "en": "(of wind) blow"
          },
          {
            "cn": "风",
            "pos": "n.",
            "en": "wind"
          },
          {
            "cn": "新闻",
            "pos": "n.",
            "en": "news"
          },
          {
            "cn": "伞",
            "pos": "n.",
            "en": "umbrella"
          },
          {
            "cn": "借",
            "pos": "v.",
            "en": "lend"
          },
          {
            "cn": "把",
            "pos": "m.",
            "en": "for sth with a handle, or with its legs parted, etc."
          },
          {
            "cn": "雨衣",
            "pos": "n.",
            "en": "raincoat"
          },
          {
            "cn": "变",
            "pos": "v.",
            "en": "change"
          },
          {
            "cn": "季节",
            "pos": "n.",
            "en": "season"
          },
          {
            "cn": "变化",
            "pos": "v./n.",
            "en": "change; variation"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-12/12-4.mp3"
      },
      {
        "id": "12-03",
        "title": {
          "cn": "在教室里躲雨",
          "en": "Taking shelter from the rain in the classroom",
          "emoji": "🌧️"
        },
        "intro": {
          "cn": "在教室里，王一飞和白家月躲雨。",
          "en": "In the classroom, Wang Yifei and Bai Jiayue were taking shelter from the rain."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-12/12-5.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一飞来这里多长时间了？",
            "options": [
              "一年多了",
              "两年多了",
              "好多年了"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "白家月是怎么知道今年很多地方都下雪少的？",
            "options": [
              "看新闻",
              "问王老师",
              "听朋友说"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "白家月",
            "cn": "您来这里已经一年多了，习惯了吧？",
            "en": "You've been here for over a year now—have you gotten used to it？"
          },
          {
            "speaker": "王一飞",
            "cn": "别的早就习惯了，就是天气我还不太习惯。",
            "en": "I've gotten used to most things, but I'm still not quite used to the weather."
          },
          {
            "speaker": "白家月",
            "cn": "为什么？您不喜欢这里的天气吗？",
            "en": "Why? Don't you like the weather here？"
          },
          {
            "speaker": "王一飞",
            "cn": "我觉得冬天太冷了。",
            "en": "I think the winters are too cold."
          },
          {
            "speaker": "白家月",
            "cn": "冬天虽然冷，但是下雪的时候特别漂亮。",
            "en": "Winter may be cold, but it's especially beautiful when it snows."
          },
          {
            "speaker": "王一飞",
            "cn": "我也喜欢雪。北京常常下雪，但听说今年就下了一次。",
            "en": "I like snow too. It usually snows often in Beijing, but I heard it only snowed once this year."
          },
          {
            "speaker": "白家月",
            "cn": "我没关注过北京的天气，但是新闻里说过，今年冬天很多地方雪下得都少了。",
            "en": "I haven't kept up with Beijing's weather, but the news said that many places have had less snow this winter."
          }
        ],
        "postQuestions": [
          {
            "q": "王一飞对什么还不太习惯？"
          },
          {
            "q": "白家月为什么喜欢冬天？"
          },
          {
            "q": "新闻里说过什么？"
          }
        ],
        "words": [
          {
            "cn": "冬天",
            "pos": "n.",
            "en": "winter"
          },
          {
            "cn": "常常",
            "pos": "adv.",
            "en": "often"
          },
          {
            "cn": "关注",
            "pos": "v.",
            "en": "pay close attention"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-12/12-6.mp3"
      },
      {
        "id": "12-04",
        "title": {
          "cn": "在家里写日记",
          "en": "Writing a diary at home",
          "emoji": "📖"
        },
        "intro": {
          "cn": "在家里，王一飞在写日记。",
          "en": "At home, Wang Yifei was writing in her diary."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-12/12-7.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一飞喜欢哪个城市的四季？",
            "options": [
              "北京",
              "她工作的地方",
              "没有冬天的城市"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "王一飞觉得北京哪个季节最舒服？",
            "options": [
              "春天",
              "夏天",
              "秋天"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "我离开北京到这里工作一年多了。",
            "en": "It's been over a year since I left Beijing to work here."
          },
          {
            "speaker": "",
            "cn": "这一年多住下来，我还是更喜欢北京的四季。",
            "en": "After living here for over a year, I still prefer Beijing's four seasons."
          },
          {
            "speaker": "",
            "cn": "北京的春天最舒服，天气不冷不热。",
            "en": "Spring in Beijing is the most pleasant—it's neither too cold nor too hot."
          },
          {
            "speaker": "",
            "cn": "夏天白天很热，但是晚上比较凉快。",
            "en": "Summer days are very hot, but the evenings are fairly cool."
          },
          {
            "speaker": "",
            "cn": "秋天树上的叶子都变成了红色、黄色，非常漂亮。",
            "en": "In autumn, the leaves on the trees all turn red and yellow—it's very beautiful."
          },
          {
            "speaker": "",
            "cn": "冬天不但冷，而且风很大，我最不喜欢冬天。",
            "en": "Winter is not only cold but also very windy—it's my least favorite season."
          },
          {
            "speaker": "",
            "cn": "每个人都有自己最喜欢的季节，你最喜欢哪个季节呢？",
            "en": "Everyone has their own favorite season—which one do you like the most？"
          }
        ],
        "postQuestions": [
          {
            "q": "北京的夏天是什么样的？"
          },
          {
            "q": "北京的秋天是什么样的？"
          },
          {
            "q": "王一飞为什么最不喜欢冬天？"
          }
        ],
        "words": [
          {
            "cn": "四季",
            "pos": "n.",
            "en": "four seasons"
          },
          {
            "cn": "春天",
            "pos": "n.",
            "en": "spring"
          },
          {
            "cn": "夏天",
            "pos": "n.",
            "en": "summer"
          },
          {
            "cn": "凉快",
            "pos": "adj.",
            "en": "comfortably cool"
          },
          {
            "cn": "秋天",
            "pos": "n.",
            "en": "autumn"
          },
          {
            "cn": "叶子",
            "pos": "n.",
            "en": "leaf"
          },
          {
            "cn": "变成",
            "pos": "v.",
            "en": "become"
          }
        ],
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-3-textbook/lesson-12/12-8.mp3"
      }
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "刮",
            "季节",
            "把",
            "借",
            "地方"
          ],
          "items": [
            {
              "cn": "突然______起风来了，可能会下雨。",
              "answer": "刮"
            },
            {
              "cn": "我在昨天拍照的______等你，别走错了。",
              "answer": "地方"
            },
            {
              "cn": "这______雨伞不大不小，可以放在书包里。",
              "answer": "把"
            },
            {
              "cn": "我把这件雨衣______给你吧，我开车不需要穿。",
              "answer": "借"
            },
            {
              "cn": "这个______北京不冷不热，很多人都在这个时候来旅游。",
              "answer": "季节"
            }
          ]
        },
        "group2": {
          "options": [
            "刚才",
            "关注",
            "变成",
            "常常",
            "变"
          ],
          "items": [
            {
              "cn": "A：这里的冬天______下雪吗？",
              "answer": "常常"
            },
            {
              "cn": "B：不是，每年就二月雪最多。",
              "answer": ""
            },
            {
              "cn": "A：______下大雨了，天气凉快了很多。",
              "answer": "刚才"
            },
            {
              "cn": "B：没错，每天都能这么凉快就好了。",
              "answer": ""
            },
            {
              "cn": "A：这几天天气不好，我怕下午的飞机会晚点。",
              "answer": ""
            },
            {
              "cn": "B：放心吧，我一直在______天气，下午是晴天。",
              "answer": "关注"
            },
            {
              "cn": "A：这里以前是一片草地，现在______了学校和医院。",
              "answer": "变成"
            },
            {
              "cn": "B：是啊，变化真大，都不认识了。",
              "answer": ""
            },
            {
              "cn": "A：下了一晚上的雪，外面全都______白了。",
              "answer": "变"
            },
            {
              "cn": "B：是的，太漂亮了！我是第一次见到这么大的雪，咱们出去看看吧。",
              "answer": ""
            }
          ]
        }
      },
      "describePictures": [
        {
          "cn": "A：每次出门前我都会看一下天气，______忘了看。",
          "en": ""
        },
        {
          "cn": "B：不用看也知道，现在______，可能要下雨。",
          "en": ""
        },
        {
          "cn": "A：最近天气______。",
          "en": ""
        },
        {
          "cn": "B：对，咱们还有很多时间，或者______，或者______去那里，对咱们来说都可以。",
          "en": ""
        },
        {
          "cn": "A：今天早上还很热，刚才下完雨天气______多了。",
          "en": ""
        },
        {
          "cn": "B：是啊，现在______，很舒服。",
          "en": ""
        },
        {
          "cn": "A：下午可以出去拍照了吧？",
          "en": ""
        },
        {
          "cn": "B：不一定，现在______，一会儿可能越刮越大。",
          "en": ""
        },
        {
          "cn": "A：______说百花公园的花都开了，很多人都去拍照。",
          "en": ""
        },
        {
          "cn": "B：______去过一次，看来我应该找机会去玩一玩。",
          "en": ""
        },
        {
          "cn": "B：咱们今天下午就去吧？",
          "en": ""
        },
        {
          "cn": "A：公园太大了，______要五个多小时，咱们还是周末再去吧。",
          "en": ""
        }
      ],
      "classroomActivity": {
        "cn": "双人活动",
        "en": "Pair Work",
        "description": "两人一组，围绕以下问题讨论现在住的城市。回答时，使用本课所学的词语和语言点。",
        "descriptionEn": "Work in pairs to discuss the city you currently live in based on the following questions. When responding, use the words and language points covered in this lesson.",
        "topics": [
          {
            "cn": "你在现在的城市已经住了多久了？"
          },
          {
            "cn": "在这里住下来以后，你习惯了吗？"
          },
          {
            "cn": "这个城市一年有几个季节？每个季节的天气是什么样的？"
          },
          {
            "cn": "现在是哪个季节？人们在这个季节喜欢做什么？"
          },
          {
            "cn": "你最喜欢哪个季节？为什么？"
          },
          {
            "cn": "你觉得今年的天气和以前比，有什么不一样？"
          }
        ]
      }
    }
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
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "加",
            "放",
            "请客",
            "做客",
            "聊天儿"
          ],
          "items": [
            {
              "cn": "我们一边吃饭一边______，时间过得很快。",
              "answer": "聊天儿"
            },
            {
              "cn": "咱们只点了一个鸡肉，再______几个肉菜吧。",
              "answer": "加"
            },
            {
              "cn": "谢谢小王今天______，下周你们都去我家，我给大家做饭吃。",
              "answer": "请客"
            },
            {
              "cn": "在南方的一些城市，你去别人家______的时候会先喝茶。",
              "answer": "做客"
            },
            {
              "cn": "桌子上______着一些饮料，你们想喝什么就拿，跟在自己家一样。",
              "answer": "放"
            }
          ]
        },
        "group2": {
          "options": [
            "不同",
            "直到",
            "来自",
            "感到",
            "放心"
          ],
          "items": [
            {
              "cn": "A：昨天的生日晚会玩得怎么样？",
              "answer": ""
            },
            {
              "cn": "B：玩得太开心了，______十一点我才回家。",
              "answer": "直到"
            },
            {
              "cn": "A：你去外国人家做客，会不会______不太习惯？",
              "answer": "感到"
            },
            {
              "cn": "B：第一次是有一点儿，但是慢慢就习惯了。",
              "answer": ""
            },
            {
              "cn": "A：你的同学们是哪国人？",
              "answer": ""
            },
            {
              "cn": "B：他们都______不同的地方，大家的文化也不一样。",
              "answer": "来自"
            },
            {
              "cn": "A：现在你可以______了，吃的喝的都准备好了。",
              "answer": "放心"
            },
            {
              "cn": "B：我怕他们吃不习惯我做的菜。",
              "answer": ""
            },
            {
              "cn": "A：你们国家过生日和这里过生日有什么______？",
              "answer": "不同"
            },
            {
              "cn": "B：差不多。我们也是先吃饭，再一起吃蛋糕。",
              "answer": ""
            }
          ]
        }
      },
      "describePictures": [
        {
          "cn": "A：你去______，一般会带什么礼物？",
          "en": ""
        },
        {
          "cn": "B：我们会带水果、蛋糕，也可以带自己做的菜。",
          "en": ""
        },
        {
          "cn": "A：在中国，______不会带自己做的菜，主人会准备吃的东西。",
          "en": ""
        },
        {
          "cn": "B：你们的文化跟我们的______。",
          "en": ""
        },
        {
          "cn": "A：今天我看见你和新同学聊天儿了。",
          "en": ""
        },
        {
          "cn": "B：她告诉我她来自______，对中国文化很感兴趣。",
          "en": ""
        },
        {
          "cn": "A：______，让她尝尝中国菜，我还可以教她做中国菜。",
          "en": ""
        },
        {
          "cn": "B：那太好了！她可以______。",
          "en": ""
        },
        {
          "cn": "A：上个周末，我在你家玩得很开心。你妈妈做的中国菜也特别好吃。",
          "en": ""
        },
        {
          "cn": "B：别客气，你有时间的话，就______。",
          "en": ""
        },
        {
          "cn": "A：我已经把喜欢吃的菜买______，下午我也试着做一做。",
          "en": ""
        },
        {
          "cn": "B：你可以一边______，一边______。",
          "en": ""
        }
      ],
      "classroomActivity": {
        "cn": "多人活动",
        "en": "Group Work",
        "description": "四人一组，每人介绍自己家乡请客与做客的习惯。可以围绕以下问题进行讨论。",
        "descriptionEn": "Work in groups of four. Each member should describe the customs of hosting guests and being a guest in their hometown. You can discuss the following topics:",
        "topics": [
          {
            "cn": "人们更喜欢怎么请客？（比如：请朋友去饭馆吃饭、在家吃饭等）"
          },
          {
            "cn": "去别人家做客，客人需要带礼物吗？如果需要，常常会带什么？"
          },
          {
            "cn": "做客的时候，常常吃什么？喝什么？"
          },
          {
            "cn": "客人们除了吃饭，一般会做什么？（比如：聊天儿、看电影等）"
          }
        ]
      }
    }
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
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "故事",
            "最好",
            "有些",
            "一块儿",
            "表演"
          ],
          "items": [
            {
              "cn": "你今天看起来______难过，遇到什么问题了？",
              "answer": "有些"
            },
            {
              "cn": "图书馆的这本书我已经看完了，我很喜欢这个______。",
              "answer": "故事"
            },
            {
              "cn": "她读不懂中文报纸，你______把那个新闻给她讲一下。",
              "answer": "最好"
            },
            {
              "cn": "网站上已经可以看到晚会的视频了，咱们______看吧。",
              "answer": "一块儿"
            },
            {
              "cn": "她学过______，可以跟你们一起准备这个节目。",
              "answer": "表演"
            }
          ]
        },
        "group2": {
          "options": [
            "最后",
            "面前",
            "相信",
            "留学生",
            "忘记"
          ],
          "items": [
            {
              "cn": "A：你要______自己，这次一定能比上次更好！",
              "answer": "相信"
            },
            {
              "cn": "B：谢谢你，我会努力的。",
              "answer": ""
            },
            {
              "cn": "A：我刚才想说什么？突然就______了。",
              "answer": "忘记"
            },
            {
              "cn": "B：你再想想，我们刚才在说运动会的事情。",
              "answer": ""
            },
            {
              "cn": "A：你们学校的______多吗？",
              "answer": "留学生"
            },
            {
              "cn": "B：越来越多，今年有三千多人。",
              "answer": ""
            },
            {
              "cn": "A：你唱歌唱得那么好听，为什么没参加昨天的晚会？",
              "answer": ""
            },
            {
              "cn": "B：我不喜欢在很多人______表演。",
              "answer": "面前"
            },
            {
              "cn": "A：这次考试你考得怎么样？",
              "answer": ""
            },
            {
              "cn": "B：我已经很努力了，希望______的成绩能好一些！",
              "answer": "最后"
            }
          ]
        }
      },
      "describePictures": [
        {
          "cn": "A：明天的晚会你______什么节目？",
          "en": ""
        },
        {
          "cn": "B：我想唱歌，但是一想到______我就紧张。",
          "en": ""
        },
        {
          "cn": "A：______！你要相信自己，大家一定会喜欢的！",
          "en": ""
        },
        {
          "cn": "B：好吧，那我再练习一下。",
          "en": ""
        },
        {
          "cn": "A：上次从图书馆借的书你还了吗？",
          "en": ""
        },
        {
          "cn": "B：还没有，那本书被______，他说今天晚上还给我。",
          "en": ""
        },
        {
          "cn": "A：明天是最后一天，你一定要带去图书馆。",
          "en": ""
        },
        {
          "cn": "B：好的，我回家先______，______。",
          "en": ""
        },
        {
          "cn": "A：昨天妈妈讲的故事你听完了吗？后来怎么样了？",
          "en": ""
        },
        {
          "cn": "B：我没听完，你听到哪里了？",
          "en": ""
        },
        {
          "cn": "A：我听到他们去找苹果，______我就睡觉了。",
          "en": ""
        },
        {
          "cn": "B：苹果被______，但是后面的故事我______。",
          "en": ""
        }
      ],
      "classroomActivity": {
        "cn": "双人活动",
        "en": "Pair Work",
        "description": "两人一组，讲述“最倒霉的一天”。尽量使用被动句来描述所发生的事情，看看谁说的被动句最多。",
        "descriptionEn": "Work in pairs to talk about “the unluckiest day”. Use as many passive sentences as possible to describe what happened. See who can produce the most passive sentences.",
        "topics": [
          {
            "cn": "买的水果被我忘在超市了。"
          },
          {
            "cn": "图书馆借的书被我丢了。"
          }
        ]
      }
    }
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
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "段",
            "养",
            "外地",
            "遇见",
            "有名"
          ],
          "items": [
            {
              "cn": "我爷爷喜欢______花，他家有很多漂亮的花。",
              "answer": "养"
            },
            {
              "cn": "昨天我在公园______了一位老朋友，聊了很久。",
              "answer": "遇见"
            },
            {
              "cn": "他是从______来的，还不太习惯这里的天气。",
              "answer": "外地"
            },
            {
              "cn": "这家饭馆在我们城市很______，很多人都来这里吃饭。",
              "answer": "有名"
            },
            {
              "cn": "这本书我已经看了一______时间了，越看越觉得有意思。",
              "answer": "段"
            }
          ]
        },
        "group2": {
          "options": [
            "了解",
            "经过",
            "可是",
            "根据",
            "平时"
          ],
          "items": [
            {
              "cn": "A：这家饭馆很有名，咱们去尝尝吧！",
              "answer": ""
            },
            {
              "cn": "B：今天是假期，人一定很多，______人少的时候再去吧。",
              "answer": "平时"
            },
            {
              "cn": "A：公园有两个门，咱们进哪个门？",
              "answer": ""
            },
            {
              "cn": "B：进东门吧，进去以后会______一条很漂亮的小河。",
              "answer": "经过"
            },
            {
              "cn": "A：我早就想去南京旅游了，______一直没时间去。",
              "answer": "可是"
            },
            {
              "cn": "B：有机会咱们一起去吧。",
              "answer": ""
            },
            {
              "cn": "A：我选什么课好呢？",
              "answer": ""
            },
            {
              "cn": "B：你可以______自己的兴趣来选择。",
              "answer": "根据"
            },
            {
              "cn": "A：你对这座城市______多少？",
              "answer": "了解"
            },
            {
              "cn": "B：我只知道这里有很多好吃的，别的还不太清楚。",
              "answer": ""
            }
          ]
        }
      },
      "describePictures": [
        {
          "cn": "A：你平时______吗？",
          "en": ""
        },
        {
          "cn": "B：喜欢，我已经去过了。",
          "en": ""
        },
        {
          "cn": "A：给我讲讲你遇到的有意思的事吧。",
          "en": ""
        },
        {
          "cn": "B：没问题，我给你讲。",
          "en": ""
        },
        {
          "cn": "A：你根据什么______？",
          "en": ""
        },
        {
          "cn": "B：如果能让我学到东西，我就会想玩一玩。",
          "en": ""
        },
        {
          "cn": "A：那你玩游戏的时候，有没有一些______有意思的人？",
          "en": ""
        },
        {
          "cn": "B：当然有！在______，人们一起玩的时候很容易变成朋友。",
          "en": ""
        },
        {
          "cn": "A：你住在蓝天小区吗？这个小区很有名。",
          "en": ""
        },
        {
          "cn": "B：是的，这几年小区______我们的需要有了很多变化。",
          "en": ""
        },
        {
          "cn": "A：小区附近买东西方便吗？",
          "en": ""
        },
        {
          "cn": "B：很方便，______就是超市。",
          "en": ""
        }
      ],
      "classroomActivity": {
        "cn": "双人活动",
        "en": "Pair Work",
        "description": "两人一组，查阅以下几个城市的相关资料，说说自己最喜欢哪一个，并说明理由。尽量多使用本课所学的词语和语言点。",
        "descriptionEn": "Work in pairs to research the following cities. Discuss which one you like best and explain why. Try to use as many words and language points covered in this lesson as possible.",
        "topics": [
          {
            "cn": "北京"
          },
          {
            "cn": "上海"
          },
          {
            "cn": "西安"
          },
          {
            "cn": "南京"
          }
        ]
      }
    }
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
            "cn": "已经一年多了。第一天看见它的时候，它又脏又小。",
            "en": "Over a year now. When we first found it, it was dirty and tiny."
          },
          {
            "speaker": "刘小雪",
            "cn": "现在它变得又干净又漂亮了。",
            "en": "Now it's so clean and beautiful!"
          },
          {
            "speaker": "服务员",
            "cn": "是啊。它还特别可爱，一会儿在你脚边睡觉，一会儿在你身上爬。",
            "en": "Exactly! It's also super cute—sometimes it sleeps by your feet, and sometimes it climbs all over you."
          },
          {
            "speaker": "刘小雪",
            "cn": "你们把它照顾得真好。",
            "en": "You've really taken great care of it."
          },
          {
            "speaker": "服务员",
            "cn": "它就好像我们的孩子，我们照顾它，它也认得我们了。",
            "en": "It feels like it's our own child. We take care of it, and now it knows us."
          },
          {
            "speaker": "刘小雪",
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
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "照顾",
            "张",
            "饱",
            "奇怪",
            "脏"
          ],
          "items": [
            {
              "cn": "小猫看到妈妈后马上______开嘴要吃的。",
              "answer": "张"
            },
            {
              "cn": "这个电影介绍了怎么______离开爸爸妈妈的小动物。",
              "answer": "照顾"
            },
            {
              "cn": "这只大熊猫没吃______，你看它还在找吃的东西呢。",
              "answer": "饱"
            },
            {
              "cn": "这个饭馆的桌子这么______，碗也不干净，咱们换一家吧。",
              "answer": "脏"
            },
            {
              "cn": "这只鸟好像飞不起来，而且吃东西的时候看起来也很______。",
              "answer": "奇怪"
            }
          ]
        },
        "group2": {
          "options": [
            "认得",
            "关于",
            "其实",
            "一般",
            "半天"
          ],
          "items": [
            {
              "cn": "A：小王，你在找什么？",
              "answer": ""
            },
            {
              "cn": "B：我的手机不见了，我找了______也没找到。",
              "answer": "半天"
            },
            {
              "cn": "A：你想借哪本书？",
              "answer": ""
            },
            {
              "cn": "B：______，我忘了名字，是一本动物的书。",
              "answer": "关于"
            },
            {
              "cn": "A：这只小猫在小区里好几天了，是不是找不到家了？",
              "answer": ""
            },
            {
              "cn": "B：我______它，这是我邻居家的小猫。",
              "answer": "认得"
            },
            {
              "cn": "A：你周末带孩子做什么？",
              "answer": ""
            },
            {
              "cn": "B：______如果天气好，我带孩子去公园里玩。",
              "answer": "一般"
            },
            {
              "cn": "A：你怎么又去动物园了？",
              "answer": ""
            },
            {
              "cn": "B：我______也不想去，但是妈妈希望我和弟弟一起去。",
              "answer": "其实"
            }
          ]
        }
      },
      "describePictures": [
        {
          "cn": "A：已经晚上11点了，你比以前______。",
          "en": ""
        },
        {
          "cn": "B：我去动物医院帮忙了。",
          "en": ""
        },
        {
          "cn": "A：你看起来很累。",
          "en": ""
        },
        {
          "cn": "B：今天新来了几只生病的小猫，一会儿______，一会儿______。我们都累得不得了。",
          "en": ""
        },
        {
          "cn": "A：你看，那只大熊猫______，好像在找吃的。",
          "en": ""
        },
        {
          "cn": "B：是啊，它身边的那只好像也______。",
          "en": ""
        },
        {
          "cn": "A：它们刚才已经吃了半天了，应该吃饱了吧？",
          "en": ""
        },
        {
          "cn": "B：______，它们一天要吃十几个小时呢。",
          "en": ""
        },
        {
          "cn": "A：老师让我们写一个关于______，我还没想好写什么。",
          "en": ""
        },
        {
          "cn": "B：我也没想好。动物园里什么动物都有，咱们去看看吧。",
          "en": ""
        },
        {
          "cn": "A：都五点了，动物园是不是快关门了？",
          "en": ""
        },
        {
          "cn": "B：夏天比冬天______。咱们现在就去。",
          "en": ""
        }
      ],
      "classroomActivity": {
        "cn": "多人活动",
        "en": "Group Work",
        "description": "四人一组，每组选一个比较有特色的动物，围绕以下问题进行讨论。最后，每组选一名代表向全班介绍，其他同学可以提问。回答时，使用本课所学的词语和语言点。",
        "descriptionEn": "Work in groups of four. Choose a distinctive animal and discuss the following questions. Then, each group selects one representative to introduce it to the class, and other students can ask questions. When responding, use the words and language points covered in this lesson.",
        "topics": [
          {
            "cn": "这种动物长什么样？"
          },
          {
            "cn": "它们一般生活在什么地方？"
          },
          {
            "cn": "它们的生活习惯是什么样的？"
          }
        ]
      }
    }
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
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "常见",
            "方向",
            "回答",
            "难题",
            "同意"
          ],
          "items": [
            {
              "cn": "在生活中，因为不认真做错事情是很______的。",
              "answer": "常见"
            },
            {
              "cn": "我认为大学的时候就应该选好以后工作的______。",
              "answer": "方向"
            },
            {
              "cn": "他说的话我一句也不______，你也不要受他的影响。",
              "answer": "同意"
            },
            {
              "cn": "这个问题我还没想清楚怎么______他。",
              "answer": "回答"
            },
            {
              "cn": "对我来说，怎么让父母同意我的选择是一个______。",
              "answer": "难题"
            }
          ]
        },
        "group2": {
          "options": [
            "到处",
            "比如",
            "继续",
            "有关",
            "认为"
          ],
          "items": [
            {
              "cn": "A：已经下课了，同学们都走了吗？",
              "answer": ""
            },
            {
              "cn": "B：没有，还有几个人在______问李老师问题。",
              "answer": "到处"
            },
            {
              "cn": "A：你为什么找我？有什么急事？",
              "answer": ""
            },
            {
              "cn": "B：______，我要告诉你一件很重要的事。",
              "answer": "继续"
            },
            {
              "cn": "A：你觉得中文难学吗？",
              "answer": ""
            },
            {
              "cn": "B：我______汉字有点儿难，但是也非常有意思。",
              "answer": "认为"
            },
            {
              "cn": "A：今天下午的会议跟留学生______吗？",
              "answer": "有关"
            },
            {
              "cn": "B：没有，留学生都不用参加。",
              "answer": ""
            },
            {
              "cn": "A：______中国的很多城市历史都很长，______北京、南京、西安。",
              "answer": "比如"
            },
            {
              "cn": "B：谢谢，我打算夏天先去西安看一看。",
              "answer": ""
            }
          ]
        }
      },
      "describePictures": [
        {
          "cn": "A：学校的网站上说昨天有一个关于留学的会议。你参加了吗？",
          "en": ""
        },
        {
          "cn": "B：我参加了，昨天没开完，所以今天下午______。",
          "en": ""
        },
        {
          "cn": "A：你觉得他们的______吗？",
          "en": ""
        },
        {
          "cn": "B：有些______，有些没用。可是只有______，才______。",
          "en": ""
        },
        {
          "cn": "A：你知道她要去留学吗？",
          "en": ""
        },
        {
          "cn": "B：她不是______吗？我们大家都知道。",
          "en": ""
        },
        {
          "cn": "A：我刚听说。你跟我说说她为什么要去中国。",
          "en": ""
        },
        {
          "cn": "B：在她看来，______，更______。",
          "en": ""
        },
        {
          "cn": "A：我下午给小王打了几次电话，她的手机______。",
          "en": ""
        },
        {
          "cn": "B：我中午看见她一个人向______。",
          "en": ""
        },
        {
          "cn": "A：你知道她去哪儿了吗？",
          "en": ""
        },
        {
          "cn": "B：不知道，______，才能______。",
          "en": ""
        }
      ],
      "classroomActivity": {
        "cn": "双人活动",
        "en": "Pair Work",
        "description": "上面是一组展示不同情绪的表情图片，选择其中一种情绪，围绕以下内容，和同学分享一次真实的经历。回答时，使用本课所学的词语和语言点。",
        "descriptionEn": "The images above show various emotions. Choose one and share a real-life experience with your classmates based on the following aspects. When responding, use the words and language points covered in this lesson.",
        "topics": [
          {
            "cn": "你上一次有这样的感受是什么时候？"
          },
          {
            "cn": "那时候发生了什么事情？"
          },
          {
            "cn": "最后你是怎么解决的？"
          }
        ]
      }
    }
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
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "刚",
            "总",
            "起",
            "收",
            "见面"
          ],
          "items": [
            {
              "cn": "我来中国______几个月，还没在中国过过春节。",
              "answer": "刚"
            },
            {
              "cn": "这是我给您和叔叔准备的小礼物，请您______下。",
              "answer": "收"
            },
            {
              "cn": "过年的时候，小孩子会______收到大人给的红包。",
              "answer": "总"
            },
            {
              "cn": "从上个月______，妈妈就开始为春节做准备了。",
              "answer": "起"
            },
            {
              "cn": "春节的时候只要有时间，就一定要跟小时候的朋友们______。",
              "answer": "见面"
            }
          ]
        },
        "group2": {
          "options": [
            "完成",
            "坚持",
            "发生",
            "怎样",
            "大概"
          ],
          "items": [
            {
              "cn": "A：你想______过今年的春节？",
              "answer": "怎样"
            },
            {
              "cn": "B：我好几年没回爸爸妈妈家了，今年打算回去过节。",
              "answer": ""
            },
            {
              "cn": "A：这一年______了很多开心的事。",
              "answer": "发生"
            },
            {
              "cn": "B：希望明年更好，祝我们大家都新年快乐！",
              "answer": ""
            },
            {
              "cn": "A：你今年怎么过春节？",
              "answer": ""
            },
            {
              "cn": "B：我回家住______三四天，然后出去旅游。",
              "answer": "大概"
            },
            {
              "cn": "A：快12点了，你是不是想睡觉了？",
              "answer": ""
            },
            {
              "cn": "B：______，我一定要到12点，新的一年开始以后再睡觉。",
              "answer": "坚持"
            },
            {
              "cn": "A：新年就要到了，可是今年的目标还没______呢。",
              "answer": "完成"
            },
            {
              "cn": "B：没关系，明年我们一起努力吧。",
              "answer": ""
            }
          ]
        }
      },
      "describePictures": [
        {
          "cn": "A：马上就要过春节了，你______？",
          "en": ""
        },
        {
          "cn": "B：我刚刚______，要和家人一起过。",
          "en": ""
        },
        {
          "cn": "A：太好了，你和家人已经很久没______吧？",
          "en": ""
        },
        {
          "cn": "B：是啊，我大概______没回家过春节了。",
          "en": ""
        },
        {
          "cn": "A：行李都准备好了吗？什么时候______？",
          "en": ""
        },
        {
          "cn": "B：______还有大概______。我一想到自己在外国生活就难过。",
          "en": ""
        },
        {
          "cn": "A：别难过，你______，就跟我视频。",
          "en": ""
        },
        {
          "cn": "B：好的。从______，我要学会照顾自己。",
          "en": ""
        },
        {
          "cn": "A：你是在______哪儿的？",
          "en": ""
        },
        {
          "cn": "B：在一个小城市，那里这几年______。",
          "en": ""
        },
        {
          "cn": "A：我听说你们国家工作机会很多，______就能找到好工作。",
          "en": ""
        },
        {
          "cn": "B：没错，所以你应该从______努力学习，以后______来我们国家。",
          "en": ""
        }
      ],
      "classroomActivity": {
        "cn": "多人活动",
        "en": "Group Work",
        "description": "四人一组，每人介绍自己国家的一个传统节日。介绍内容包括：节日名称、节日的时间、怎么庆祝这个节日、节日的特色食物和意义等。练习时，使用本课所学的词语和语言点。",
        "descriptionEn": "Work in groups of four. Each person introduces a traditional festival from their own country. The introduction should cover the festival's name, date, celebrations, special foods, and its significance. During the activity, use the words and language points covered in this lesson.",
        "topics": [
          {
            "cn": "节日名称"
          },
          {
            "cn": "节日的时间"
          },
          {
            "cn": "怎么庆祝这个节日"
          },
          {
            "cn": "节日的特色食物和意义"
          }
        ]
      }
    }
  }
];

// Backwards-compatible alias (neutral name is COURSE_LESSONS).
window.HSK3_LESSONS = window.COURSE_LESSONS;
