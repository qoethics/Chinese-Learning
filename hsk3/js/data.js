// HSK3 lesson texts. Read-only at runtime.
// Source: hsk3/data/lesson1.json (Lesson 1, book pp.1-9) + hsk3/data/lesson13.json (Lesson 13, book pp.116-124).
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
  }
];

// Backwards-compatible alias (neutral name is COURSE_LESSONS).
window.HSK3_LESSONS = window.COURSE_LESSONS;
