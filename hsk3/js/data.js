// HSK3 lesson texts. Read-only at runtime.
// Source: hsk3/data/lesson1.json (Lesson 1, book pp.1-9) + hsk3/data/lesson13.json (Lesson 13, book pp.116-124)
//         + hsk3/data/lesson14.json (Lesson 14, book pp.124-132).
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
  }
];

// Backwards-compatible alias (neutral name is COURSE_LESSONS).
window.HSK3_LESSONS = window.COURSE_LESSONS;
