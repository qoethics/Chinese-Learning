// HSK2_NEW lesson texts. Read-only at runtime.
// Source: hsk2/data/new/lesson01.json + hsk2/data/new/lesson02.json + hsk2/data/new/lesson03.json + hsk2/data/new/lesson04.json + hsk2/data/new/lesson05.json + hsk2/data/new/lesson06.json + hsk2/data/new/lesson07.json + hsk2/data/new/lesson08.json + hsk2/data/new/lesson09.json + hsk2/data/new/lesson10.json + hsk2/data/new/lesson11.json + hsk2/data/new/lesson12.json + hsk2/data/new/lesson13.json + hsk2/data/new/lesson14.json + hsk2/data/new/lesson15.json (hand-authored; book page ranges in hsk2/data/manifest.json).
// Pinyin is NOT stored: shared/js/app.js derives it with pinyin-pro (window.pinyinPro).
// Grammar points live in data/sentences/grammar-sentences-new.js (window.SENTENCE_CORPUS_NEW);
// each point carries a textId so renderTextList can show it under its own text.
window.COURSE_LESSONS_NEW = [
  {
    "name": "L1 · 她请我们吃了北京烤鸭",
    "id": "1",
    "core": [
      {
        "hanzi": "就",
        "en": "exactly; precisely"
      },
      {
        "hanzi": "给",
        "en": "to; for (used to introduce the recipient of an action)"
      },
      {
        "hanzi": "让",
        "en": "let; allow"
      },
      {
        "hanzi": "接",
        "en": "meet; welcome; receive"
      },
      {
        "hanzi": "次",
        "en": "(indicating how many times or which time something happens) time; occurrence"
      },
      {
        "hanzi": "旅游",
        "en": "travel; make a tour"
      },
      {
        "hanzi": "帮忙",
        "en": "help; do a favor"
      },
      {
        "hanzi": "不好意思",
        "en": "embarrassing (to do sth)"
      },
      {
        "hanzi": "已经",
        "en": "already"
      },
      {
        "hanzi": "那",
        "en": "then"
      },
      {
        "hanzi": "介绍",
        "en": "introduce"
      },
      {
        "hanzi": "有时",
        "en": "sometimes"
      },
      {
        "hanzi": "懂",
        "en": "understand; know"
      },
      {
        "hanzi": "意思",
        "en": "meaning; idea"
      },
      {
        "hanzi": "北京烤鸭",
        "en": "Peking Duck"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "01-01",
        "title": {
          "cn": "在机场",
          "en": "At the airport",
          "emoji": "✈️"
        },
        "intro": {
          "cn": "在机场，王一雪接到了白家月和安妮。",
          "en": "At the airport, Wang Yixue picked up Bai Jiayue and Annie."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-01/1-1.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-01/1-2.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "谁来接白家月了？",
            "options": [
              "王一飞",
              "王一雪",
              "她的姐姐"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "王一飞给谁打电话了？",
            "options": [
              "安妮",
              "白家月",
              "王一雪"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "白家月",
            "cn": "请问，您是王一飞老师的姐姐吗？",
            "en": "Excuse me, are you Ms. Wang Yifei's cousin?"
          },
          {
            "speaker": "王一雪",
            "cn": "是的，你们就是她的学生吧？",
            "en": "Yes, I am. You two must be her students, right?"
          },
          {
            "speaker": "白家月",
            "cn": "对。我是白家月，她是安妮。",
            "en": "Exactly. I'm Bai Jiayue, and this is Annie."
          },
          {
            "speaker": "王一雪",
            "cn": "你们好，我叫王一雪。一飞给我打电话了，让我来接你们。",
            "en": "Hello, I'm Wang Yixue. Yifei called me and asked me to pick you up."
          },
          {
            "speaker": "白家月、安妮",
            "cn": "谢谢您。",
            "en": "Thank you very much."
          },
          {
            "speaker": "王一雪",
            "cn": "不客气。",
            "en": "You're welcome."
          }
        ],
        "postQuestions": [
          {
            "q": "来北京前，白家月认识王一雪吗？"
          },
          {
            "q": "王一雪在做什么？"
          }
        ],
        "words": [
          {
            "cn": "就",
            "pos": "adv.",
            "en": "exactly; precisely"
          },
          {
            "cn": "给",
            "pos": "prep.",
            "en": "to; for (used to introduce the recipient of an action)"
          },
          {
            "cn": "让",
            "pos": "v.",
            "en": "let; allow"
          },
          {
            "cn": "接",
            "pos": "v.",
            "en": "meet; welcome; receive"
          }
        ]
      },
      {
        "id": "01-02",
        "title": {
          "cn": "在车里",
          "en": "In the car",
          "emoji": "🚗"
        },
        "intro": {
          "cn": "在王一雪的车里，白家月、安妮和王一雪在聊天儿。",
          "en": "In Wang Yixue's car, Bai Jiayue, Annie, and Wang Yixue were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-01/1-3.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-01/1-4.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "白家月是第几次来北京？",
            "options": [
              "第一次",
              "第四次",
              "第七次"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "白家月和安妮是来北京做什么的？",
            "options": [
              "旅游",
              "学中文",
              "找王一雪"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "王一雪",
            "cn": "你们是第一次来北京吗？",
            "en": "Is this your first visit to Beijing?"
          },
          {
            "speaker": "白家月",
            "cn": "是的，我们都是第一次来。",
            "en": "Yes, it's the first time for both of us."
          },
          {
            "speaker": "王一雪",
            "cn": "你们是来学中文的吗？",
            "en": "Are you here to learn Chinese?"
          },
          {
            "speaker": "安妮",
            "cn": "不是，我们是来旅游的。",
            "en": "No, we're here for sightseeing."
          },
          {
            "speaker": "王一雪",
            "cn": "我这几天都不忙，你们有事就找我。",
            "en": "I'm not busy these days. If you need anything, just let me know."
          },
          {
            "speaker": "白家月",
            "cn": "好的，谢谢您。",
            "en": "Okay, thank you."
          }
        ],
        "postQuestions": [
          {
            "q": "王一雪这几天忙不忙？"
          },
          {
            "q": "白家月有事可以找谁？"
          }
        ],
        "words": [
          {
            "cn": "次",
            "pos": "",
            "en": "(indicating how many times or which time something happens) time; occurrence"
          },
          {
            "cn": "旅游",
            "pos": "v.",
            "en": "travel; make a tour"
          }
        ]
      },
      {
        "id": "01-03",
        "title": {
          "cn": "在车上接电话",
          "en": "A phone call in the car",
          "emoji": "📞"
        },
        "intro": {
          "cn": "在王一雪的车上，白家月接了个电话。",
          "en": "In Wang Yixue's car, Bai Jiayue was receiving a phone call."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-01/1-5.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-01/1-6.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "陈天中为什么给白家月打电话？",
            "options": [
              "找她帮忙",
              "请她吃饭",
              "让她接个朋友"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "白家月是什么时候到北京的？",
            "options": [
              "昨天中午",
              "昨天晚上",
              "今天早上"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "陈天中",
            "cn": "喂，家月，你明天有时间吗？我想请你帮个忙。",
            "en": "Hello, Jiayue. Do you have time tomorrow? I'd like to ask you for a favor."
          },
          {
            "speaker": "白家月",
            "cn": "不好意思，天中，我已经到北京了。",
            "en": "Sorry, Tianzhong. I'm already in Beijing."
          },
          {
            "speaker": "陈天中",
            "cn": "你是什么时候到的？",
            "en": "When did you get there?"
          },
          {
            "speaker": "白家月",
            "cn": "我是今天早上到的。你有事可以叫李文帮忙，他还在学校呢。",
            "en": "I arrived this morning. If you need anything, you can ask Li Wen for help—he's still at school."
          },
          {
            "speaker": "陈天中",
            "cn": "好的，那我给他打个电话。",
            "en": "Okay. Then I'll give him a call."
          },
          {
            "speaker": "白家月",
            "cn": "好，再见！",
            "en": "All right. Goodbye!"
          }
        ],
        "postQuestions": [
          {
            "q": "白家月现在在哪儿？"
          },
          {
            "q": "白家月让陈天中找谁帮忙？为什么？"
          }
        ],
        "words": [
          {
            "cn": "帮忙",
            "pos": "v.",
            "en": "help; do a favor"
          },
          {
            "cn": "不好意思",
            "pos": "",
            "en": "embarrassing (to do sth)"
          },
          {
            "cn": "已经",
            "pos": "adv.",
            "en": "already"
          },
          {
            "cn": "那",
            "pos": "conj.",
            "en": "then"
          }
        ]
      },
      {
        "id": "01-04",
        "title": {
          "cn": "在酒店发信息",
          "en": "Sending a message at the hotel",
          "emoji": "🏨"
        },
        "intro": {
          "cn": "在酒店，白家月给王一飞发信息。",
          "en": "At the hotel, Bai Jiayue was sending a message to Wang Yifei."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-01/1-7.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-01/1-8.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "判断正误：王老师到北京了，是她姐姐来接的她。",
            "options": [
              "对",
              "错"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "判断正误：白家月现在要去饭店吃北京烤鸭。",
            "options": [
              "对",
              "错"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "王老师，我们已经到北京了，是您姐姐来接的我们。",
            "en": "Ms. Wang, we've already arrived in Beijing. Your cousin came to pick us up."
          },
          {
            "speaker": "",
            "cn": "她请我们吃了北京烤鸭，还给我们介绍了很多东西。",
            "en": "She treated us to Peking Duck and told us about many things."
          },
          {
            "speaker": "",
            "cn": "我们的中文不太好，有时不太懂她的意思。",
            "en": "Our Chinese isn't very good, so sometimes we don't quite understand her."
          }
        ],
        "postQuestions": [],
        "words": [
          {
            "cn": "介绍",
            "pos": "v.",
            "en": "introduce"
          },
          {
            "cn": "有时",
            "pos": "adv.",
            "en": "sometimes"
          },
          {
            "cn": "懂",
            "pos": "v.",
            "en": "understand; know"
          },
          {
            "cn": "意思",
            "pos": "n.",
            "en": "meaning; idea"
          },
          {
            "cn": "北京烤鸭",
            "pos": "",
            "en": "Peking Duck"
          }
        ]
      }
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "帮忙",
            "已经",
            "意思",
            "介绍",
            "有时"
          ],
          "items": [
            {
              "cn": "我去电影院看个电影。",
              "answer": ""
            },
            {
              "cn": "上课要多听、多说，你懂我的吗？",
              "answer": ""
            },
            {
              "cn": "我很喜欢北京，这是我第三次来北京了。",
              "answer": ""
            },
            {
              "cn": "A：安妮，我给你一下，这是我的中国朋友李文。",
              "answer": ""
            },
            {
              "cn": "A：今天的工作太多了！ B：那你找个人来吧。",
              "answer": ""
            }
          ]
        },
        "group2": {
          "options": [],
          "items": []
        }
      },
      "describePictures": [],
      "classroomActivity": {
        "cn": "角色扮演",
        "en": "Role-Play",
        "description": "两人一组，一人来火车站接朋友，一人刚出站、是接站人的朋友。接站人向朋友询问来这里的目的和现在要去的地方，等等。尽可能使用本课所学生词和语法。",
        "descriptionEn": "Work in pairs. One student plays the person picking up a friend at the train station, and the other plays the friend who has just got out of the station. The student picking up the friend asks about the purpose of the visit, the place the friend is going to, and other related information. Try to use the vocabulary and grammar learned in this lesson as much as possible.",
        "topics": []
      }
    }
  },
  {
    "name": "L2 · 还是打车去北大吧",
    "id": "2",
    "core": [
      {
        "hanzi": "公交车",
        "en": "bus"
      },
      {
        "hanzi": "但",
        "en": "but; yet"
      },
      {
        "hanzi": "车站",
        "en": "stop; station"
      },
      {
        "hanzi": "远",
        "en": "far away"
      },
      {
        "hanzi": "打车",
        "en": "take/hail a taxi"
      },
      {
        "hanzi": "还是",
        "en": "had better"
      },
      {
        "hanzi": "北京大学",
        "en": "Peking University"
      },
      {
        "hanzi": "啊",
        "en": "used at the end of a sentence to express appreciation, agreement, etc."
      },
      {
        "hanzi": "万",
        "en": "ten thousand"
      },
      {
        "hanzi": "名",
        "en": "used for people; place in a competition; name"
      },
      {
        "hanzi": "网上",
        "en": "online"
      },
      {
        "hanzi": "外国",
        "en": "foreign country"
      },
      {
        "hanzi": "间",
        "en": "used of smallest units of housing"
      },
      {
        "hanzi": "教室",
        "en": "classroom"
      },
      {
        "hanzi": "票",
        "en": "ticket"
      },
      {
        "hanzi": "别",
        "en": "don't; had better not"
      },
      {
        "hanzi": "过来",
        "en": "come here"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "02-01",
        "title": {
          "cn": "在宾馆前台",
          "en": "At the hotel reception",
          "emoji": "🏨"
        },
        "intro": {
          "cn": "在宾馆前台，白家月和安妮向服务员咨询。",
          "en": "At the hotel reception, Bai Jiayue and Annie were asking the receptionist for information."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-02/2-1.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-02/2-2.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "白家月和安妮想去哪儿？",
            "options": [
              "饭店",
              "车站",
              "北京大学"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "白家月和安妮怎么去那儿？",
            "options": [
              "开车",
              "坐出租车",
              "坐公交车"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "白家月",
            "cn": "请问，这儿有到北京大学的公交车吗？",
            "en": "Excuse me, is there a bus from here to Peking University?"
          },
          {
            "speaker": "服务员",
            "cn": "有，但车站有点儿远。",
            "en": "Yes, but the bus stop is a bit far."
          },
          {
            "speaker": "白家月",
            "cn": "这儿好打车吗？",
            "en": "Is it easy to get a taxi around here?"
          },
          {
            "speaker": "服务员",
            "cn": "好打车。",
            "en": "Yes, it is."
          },
          {
            "speaker": "白家月",
            "cn": "谢谢。安妮，我们还是打车去吧。",
            "en": "Thank you. Annie, let's take a taxi instead."
          },
          {
            "speaker": "安妮",
            "cn": "好，没问题。",
            "en": "Okay, no problem."
          }
        ],
        "postQuestions": [
          {
            "q": "这儿有没有到北京大学的公交车？"
          },
          {
            "q": "她们为什么打车去北京大学？"
          }
        ],
        "words": [
          {
            "cn": "公交车",
            "pos": "n.",
            "en": "bus"
          },
          {
            "cn": "但",
            "pos": "conj.",
            "en": "but; yet"
          },
          {
            "cn": "车站",
            "pos": "n.",
            "en": "stop; station"
          },
          {
            "cn": "远",
            "pos": "adj.",
            "en": "far away"
          },
          {
            "cn": "打车",
            "pos": "v.",
            "en": "take/hail a taxi"
          },
          {
            "cn": "还是",
            "pos": "adv.",
            "en": "had better"
          },
          {
            "cn": "北京大学",
            "pos": "",
            "en": "Peking University"
          }
        ]
      },
      {
        "id": "02-02",
        "title": {
          "cn": "参观校园",
          "en": "Touring the campus",
          "emoji": "🏫"
        },
        "intro": {
          "cn": "在北京大学，白家月和安妮在参观校园。",
          "en": "At Peking University, Bai Jiayue and Annie were touring the campus."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-02/2-3.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-02/2-4.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "北京大学有多少学生？",
            "options": [
              "三千多",
              "四万多",
              "十万多"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "白家月想在北京大学做什么？",
            "options": [
              "玩",
              "学习",
              "找教室"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "白家月",
            "cn": "学校里人真多啊！",
            "en": "It's so crowded on campus!"
          },
          {
            "speaker": "安妮",
            "cn": "是啊，北京大学有四万多名学生呢！",
            "en": "Yeah! Peking University has over 40,000 students."
          },
          {
            "speaker": "白家月",
            "cn": "你是怎么知道的？",
            "en": "How do you know?"
          },
          {
            "speaker": "安妮",
            "cn": "是网上说的，网上还说北京大学有三千多名外国学生。",
            "en": "I read it online. It also says there are more than 3,000 international students at Peking University."
          },
          {
            "speaker": "白家月",
            "cn": "我也想来这儿学习。",
            "en": "I'd love to study here too."
          },
          {
            "speaker": "安妮",
            "cn": "那边就有一间教室，我们去看一下吧。",
            "en": "There's a classroom right over there. Let's go and have a look."
          }
        ],
        "postQuestions": [
          {
            "q": "北京大学里人多不多？"
          },
          {
            "q": "北京大学有多少外国学生？安妮是怎么知道的？"
          }
        ],
        "words": [
          {
            "cn": "啊",
            "pos": "part.",
            "en": "used at the end of a sentence to express appreciation, agreement, etc."
          },
          {
            "cn": "万",
            "pos": "num.",
            "en": "ten thousand"
          },
          {
            "cn": "名",
            "pos": "m./n.",
            "en": "used for people; place in a competition; name"
          },
          {
            "cn": "网上",
            "pos": "n.",
            "en": "online"
          },
          {
            "cn": "外国",
            "pos": "n.",
            "en": "foreign country"
          },
          {
            "cn": "间",
            "pos": "m.",
            "en": "used of smallest units of housing"
          },
          {
            "cn": "教室",
            "pos": "n.",
            "en": "classroom"
          }
        ]
      },
      {
        "id": "02-03",
        "title": {
          "cn": "校园里的电影院",
          "en": "The cinema on campus",
          "emoji": "🎬"
        },
        "intro": {
          "cn": "在北京大学，白家月和安妮在参观校园。",
          "en": "At Peking University, Bai Jiayue and Annie were touring the campus."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-02/2-5.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-02/2-6.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "安妮说北京大学里有什么？",
            "options": [
              "银行",
              "电影院",
              "公交车站"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "有的电影票还不到多少钱？",
            "options": [
              "十块钱",
              "二十块钱",
              "三十块钱"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "安妮",
            "cn": "家月，你看，学校里有家电影院！",
            "en": "Jiayue, look! There is a cinema on campus!"
          },
          {
            "speaker": "白家月",
            "cn": "是啊，电影院还不小。",
            "en": "Yeah, and it's pretty big."
          },
          {
            "speaker": "安妮",
            "cn": "他们卖的电影票也很便宜。",
            "en": "The movie tickets they sell are also very affordable."
          },
          {
            "speaker": "白家月",
            "cn": "天啊！有的还不到二十块钱。",
            "en": "Goodness! Some are less than 20 yuan."
          },
          {
            "speaker": "安妮",
            "cn": "那你想不想去看个电影？",
            "en": "So, do you want to watch a movie?"
          },
          {
            "speaker": "白家月",
            "cn": "还是别看电影了，北京大学就很好看！",
            "en": "Let's not watch a movie now. Peking University itself is already fascinating!"
          }
        ],
        "postQuestions": [
          {
            "q": "白家月和安妮觉得电影票贵不贵？"
          },
          {
            "q": "白家月为什么不想去看电影？"
          }
        ],
        "words": [
          {
            "cn": "票",
            "pos": "n.",
            "en": "ticket"
          },
          {
            "cn": "别",
            "pos": "adv.",
            "en": "don't; had better not"
          }
        ]
      },
      {
        "id": "02-04",
        "title": {
          "cn": "在校门口发信息",
          "en": "Sending a message at the gate",
          "emoji": "🚪"
        },
        "intro": {
          "cn": "在北京大学门口，白家月给陈天中发信息。",
          "en": "At the gate of Peking University, Bai Jiayue was sending a message to Chen Tianzhong."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-02/2-7.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-02/2-8.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "判断正误：北京大学有四万多名外国学生。",
            "options": [
              "对",
              "错"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "判断正误：白家月和安妮现在要在北京大学看电影。",
            "options": [
              "对",
              "错"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "北京大学很大，有四万多名学生。",
            "en": "Peking University is large, with a student population of over 40,000."
          },
          {
            "speaker": "",
            "cn": "学校很漂亮，里边还有一家电影院，电影票也不贵，我们有时间还想再过来看个电影。",
            "en": "The campus is beautiful, and there is a cinema on campus. Movie tickets are quite affordable, and when we have time, we'd like to come back to watch a movie."
          }
        ],
        "postQuestions": [],
        "words": [
          {
            "cn": "过来",
            "pos": "v.",
            "en": "come here"
          }
        ]
      }
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "但",
            "间",
            "车站",
            "打车",
            "过来"
          ],
          "items": [
            {
              "cn": "你家太远了，我们是____过来的。",
              "answer": ""
            },
            {
              "cn": "那是一____大教室，我们明天要去那儿上课。",
              "answer": ""
            },
            {
              "cn": "李文让我去接他的朋友，____我太忙了，没时间。",
              "answer": ""
            },
            {
              "cn": "A：请问，去北京大学的____在哪儿？ B：就在前边，不远。",
              "answer": ""
            },
            {
              "cn": "A：家月，我想请你帮个忙，你有时间吗？ B：不好意思，我在外边旅游呢。",
              "answer": ""
            }
          ]
        },
        "group2": {
          "options": [],
          "items": []
        }
      },
      "describePictures": [],
      "classroomActivity": {
        "cn": "角色扮演",
        "en": "Role-Play",
        "description": "两人一组，一人问路，一人回答。问路的人询问附近有没有到新新电影院的公交车，车站远不远，到电影院要多长时间，等等。尽可能使用本课所学生词和语法。",
        "descriptionEn": "Work in pairs. One student asks for directions, and the other answers. The student asking for directions asks questions such as whether there is a bus nearby to Xinxin Cinema, whether the bus stop is far, and how long it takes to get to the cinema. Try to use the vocabulary and grammar learned in this lesson as much as possible.",
        "topics": []
      }
    }
  },
  {
    "name": "L3 · 我想去西安旅游",
    "id": "3",
    "core": [
      {
        "hanzi": "回来",
        "en": "come back"
      },
      {
        "hanzi": "这么",
        "en": "so"
      },
      {
        "hanzi": "完",
        "en": "end; complete"
      },
      {
        "hanzi": "一起",
        "en": "together"
      },
      {
        "hanzi": "出去",
        "en": "go/get out"
      },
      {
        "hanzi": "洗",
        "en": "wash"
      },
      {
        "hanzi": "自己",
        "en": "oneself"
      },
      {
        "hanzi": "拿",
        "en": "take; hold"
      },
      {
        "hanzi": "手",
        "en": "hand"
      },
      {
        "hanzi": "为什么",
        "en": "why"
      },
      {
        "hanzi": "不错",
        "en": "not bad; pretty good"
      },
      {
        "hanzi": "送",
        "en": "accompany sb to his destination; give (as a gift)"
      },
      {
        "hanzi": "回去",
        "en": "return; go back"
      },
      {
        "hanzi": "每",
        "en": "each; every"
      },
      {
        "hanzi": "累",
        "en": "tired; weary"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "03-01",
        "title": {
          "cn": "在家门口",
          "en": "At the doorway",
          "emoji": "🚪"
        },
        "intro": {
          "cn": "在家门口，刘明开门进到家里。",
          "en": "At the doorway, Liu Ming opened the door and went into the house."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-03/3-1.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-03/3-2.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "刘明为什么回来晚了？",
            "options": [
              "没做完工作",
              "去外边吃饭",
              "在公司休息"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "刘明现在要做什么？",
            "options": [
              "吃饭",
              "喝水",
              "工作"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "王一雪",
            "cn": "今天回来这么晚啊！",
            "en": "You're back so late today!"
          },
          {
            "speaker": "刘明",
            "cn": "工作太多了，下班的时候没做完。",
            "en": "I had too much work to do, and I hadn't finished it when it was time to get off work."
          },
          {
            "speaker": "王一雪",
            "cn": "菜都做好了，过来吃饭吧。",
            "en": "Dinner's ready. Come and eat."
          },
          {
            "speaker": "刘明",
            "cn": "我想休息一下，喝杯水。",
            "en": "I'd like to take a break and have a glass of water first."
          },
          {
            "speaker": "王一雪",
            "cn": "好的。",
            "en": "Okay."
          }
        ],
        "postQuestions": [
          {
            "q": "今天刘明的工作多不多？"
          },
          {
            "q": "王一雪已经做好什么了？"
          }
        ],
        "words": [
          {
            "cn": "回来",
            "pos": "v.",
            "en": "come back"
          },
          {
            "cn": "这么",
            "pos": "pron.",
            "en": "so"
          },
          {
            "cn": "完",
            "pos": "v.",
            "en": "end; complete"
          }
        ]
      },
      {
        "id": "03-02",
        "title": {
          "cn": "在客厅商量旅游",
          "en": "Planning a trip in the living room",
          "emoji": "🛋️"
        },
        "intro": {
          "cn": "在客厅，刘明和王一雪在聊天儿。",
          "en": "In the living room, Liu Ming and Wang Yixue were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-03/3-3.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-03/3-4.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "刘明想找时间做什么？",
            "options": [
              "去吃饭",
              "去旅游",
              "买东西"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "刘明让王一雪做什么？",
            "options": [
              "去买票",
              "看一下时间",
              "想想去哪儿玩"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "刘明",
            "cn": "我们找个时间去旅游，怎么样？",
            "en": "Why don't we find some time to go on a trip?"
          },
          {
            "speaker": "王一雪",
            "cn": "好啊，我也很想一起出去玩。",
            "en": "Great! I also really want to go traveling with you."
          },
          {
            "speaker": "刘明",
            "cn": "你想去哪儿？",
            "en": "Where do you want to go?"
          },
          {
            "speaker": "王一雪",
            "cn": "我还没想好呢。",
            "en": "I haven't figured it out yet."
          },
          {
            "speaker": "刘明",
            "cn": "那你再想一想，你想好了，我来买票。",
            "en": "Then think about it further. Once you've made up your mind, I'll buy the tickets."
          }
        ],
        "postQuestions": [
          {
            "q": "王一雪想好去哪儿了吗？"
          },
          {
            "q": "谁来买票？"
          }
        ],
        "words": [
          {
            "cn": "一起",
            "pos": "adv.",
            "en": "together"
          },
          {
            "cn": "出去",
            "pos": "v.",
            "en": "go/get out"
          }
        ]
      },
      {
        "id": "03-03",
        "title": {
          "cn": "在客厅吃苹果",
          "en": "Eating apples in the living room",
          "emoji": "🍎"
        },
        "intro": {
          "cn": "在客厅，刘明和王一雪在聊天儿。",
          "en": "In the living room, Liu Ming and Wang Yixue were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-03/3-5.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-03/3-6.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "刘明让王一雪做什么？",
            "options": [
              "洗手",
              "洗苹果",
              "吃苹果"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "王一雪想去哪儿旅游？",
            "options": [
              "西安",
              "北京",
              "上海"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "刘明",
            "cn": "吃个苹果吧，我都洗好了。",
            "en": "Have an apple. I've already washed them."
          },
          {
            "speaker": "王一雪",
            "cn": "好的。",
            "en": "Okay."
          },
          {
            "speaker": "刘明",
            "cn": "就在桌子上，你自己拿。",
            "en": "They're on the table. Help yourself."
          },
          {
            "speaker": "王一雪",
            "cn": "我去洗洗手。对了，我们去西安旅游，怎么样？",
            "en": "I'm going to wash my hands first. By the way, how about taking a trip to Xi'an?"
          },
          {
            "speaker": "刘明",
            "cn": "为什么想去西安？",
            "en": "Why do you want to go to Xi'an?"
          },
          {
            "speaker": "王一雪",
            "cn": "我看了看网上的介绍，这个时候去西安很不错！",
            "en": "I read some introductions online—it's a great time to visit Xi'an!"
          }
        ],
        "postQuestions": [
          {
            "q": "苹果在哪儿？"
          },
          {
            "q": "王一雪为什么想去西安旅游？"
          }
        ],
        "words": [
          {
            "cn": "洗",
            "pos": "v.",
            "en": "wash"
          },
          {
            "cn": "自己",
            "pos": "pron.",
            "en": "oneself"
          },
          {
            "cn": "拿",
            "pos": "v.",
            "en": "take; hold"
          },
          {
            "cn": "手",
            "pos": "n.",
            "en": "hand"
          },
          {
            "cn": "为什么",
            "pos": "",
            "en": "why"
          },
          {
            "cn": "不错",
            "pos": "adj.",
            "en": "not bad; pretty good"
          }
        ]
      },
      {
        "id": "03-04",
        "title": {
          "cn": "给好朋友打电话",
          "en": "Calling a good friend",
          "emoji": "📱"
        },
        "intro": {
          "cn": "在家里，王一雪给好朋友打电话。",
          "en": "At home, Wang Yixue was calling her best friend."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-03/3-7.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-03/3-8.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "判断正误：刘明今天没去医院上班。",
            "options": [
              "对",
              "错"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "判断正误：今天早上是刘明送孩子去学校的。",
            "options": [
              "对",
              "错"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "早上，刘明开车送孩子去学校，送完孩子回家后，医院就来电话了，让他回去上班。",
            "en": "In the morning, Liu Ming drove the child to school. But just after he got home, the hospital called—they asked him to go back to work."
          },
          {
            "speaker": "",
            "cn": "我觉得他这个月每天都很累，真想让他休息休息。",
            "en": "I think he's been very tired every day this month. I really wish he could get some rest."
          }
        ],
        "postQuestions": [],
        "words": [
          {
            "cn": "送",
            "pos": "v.",
            "en": "accompany sb to his destination; give (as a gift)"
          },
          {
            "cn": "回去",
            "pos": "v.",
            "en": "return; go back"
          },
          {
            "cn": "每",
            "pos": "pron.",
            "en": "each; every"
          },
          {
            "cn": "累",
            "pos": "adj.",
            "en": "tired; weary"
          }
        ]
      }
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "一起",
            "送",
            "回去",
            "拿",
            "累"
          ],
          "items": [
            {
              "cn": "已经下班了，你为什么还不____？",
              "answer": ""
            },
            {
              "cn": "他每天早上都____女朋友去上班。",
              "answer": ""
            },
            {
              "cn": "爸爸____了一些水果给孩子们吃。",
              "answer": ""
            },
            {
              "cn": "A：我昨天晚上没睡好，今天觉得很____。 B：那你休息休息吧。",
              "answer": ""
            },
            {
              "cn": "A：你认识家月吗？ B：认识啊，我们每天____坐公交车来学校。",
              "answer": ""
            }
          ]
        },
        "group2": {
          "options": [],
          "items": []
        }
      },
      "describePictures": [],
      "classroomActivity": {
        "cn": "双人活动",
        "en": "Pair Work",
        "description": "两人一组，互相询问：想不想去旅游？想好去哪儿旅游了吗？为什么选择该旅游地？等等。尽可能使用本课所学生词和语法。",
        "descriptionEn": "Work in pairs. Ask each other: Do you want to travel? Have you decided on a destination? Why did you choose this place? etc. Try to use the vocabulary and grammar learned in this lesson as much as possible.",
        "topics": []
      }
    }
  },
  {
    "name": "L4 · 你穿红色的很好看",
    "id": "4",
    "core": [
      {
        "hanzi": "过",
        "en": "used after a verb to indicate a past action or state"
      },
      {
        "hanzi": "商场",
        "en": "department store"
      },
      {
        "hanzi": "进去",
        "en": "go/get in"
      },
      {
        "hanzi": "条",
        "en": "measure word for long, narrow, or thin things"
      },
      {
        "hanzi": "裤子",
        "en": "trousers; pants"
      },
      {
        "hanzi": "白色",
        "en": "white"
      },
      {
        "hanzi": "因为",
        "en": "because"
      },
      {
        "hanzi": "试",
        "en": "try"
      },
      {
        "hanzi": "红色",
        "en": "red"
      },
      {
        "hanzi": "所以",
        "en": "so; therefore"
      },
      {
        "hanzi": "书包",
        "en": "schoolbag"
      },
      {
        "hanzi": "过去",
        "en": "pass (by); go over"
      },
      {
        "hanzi": "绿色",
        "en": "green"
      },
      {
        "hanzi": "黑色",
        "en": "black"
      },
      {
        "hanzi": "更",
        "en": "more; still/even more"
      },
      {
        "hanzi": "颜色",
        "en": "color"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "04-01",
        "title": {
          "cn": "在商场门口",
          "en": "At the entrance of the mall",
          "emoji": "🏬"
        },
        "intro": {
          "cn": "在商场门口，王一雪和刘小雪在聊天儿。",
          "en": "At the entrance of the shopping mall, Wang Yixue and Liu Xiaoxue were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-04/4-1.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-04/4-2.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一雪和刘小雪要去哪儿看看？",
            "options": [
              "商场",
              "超市",
              "学校"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "刘小雪为什么要进去看看？",
            "options": [
              "想买条裤子",
              "妈妈让她进去",
              "想给妈妈买衣服"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "刘小雪",
            "cn": "妈妈，我们来过这家商场吗？",
            "en": "Mom, have we been to this shopping mall before?"
          },
          {
            "speaker": "王一雪",
            "cn": "没来过，这是新开的。",
            "en": "No, it just opened recently."
          },
          {
            "speaker": "刘小雪",
            "cn": "我们进去看看吧。",
            "en": "Let's go inside and have a look."
          },
          {
            "speaker": "王一雪",
            "cn": "好啊！你想买点儿什么？",
            "en": "Sure! What do you want to buy?"
          },
          {
            "speaker": "刘小雪",
            "cn": "我想买条裤子。",
            "en": "I want to buy a pair of pants."
          },
          {
            "speaker": "王一雪",
            "cn": "没问题。",
            "en": "No problem."
          }
        ],
        "postQuestions": [
          {
            "q": "这家商场是新开的吗？"
          },
          {
            "q": "王一雪和刘小雪来过这家商场吗？"
          }
        ],
        "words": [
          {
            "cn": "过",
            "pos": "part.",
            "en": "used after a verb to indicate a past action or state"
          },
          {
            "cn": "商场",
            "pos": "n.",
            "en": "department store"
          },
          {
            "cn": "进去",
            "pos": "v.",
            "en": "go/get in"
          },
          {
            "cn": "条",
            "pos": "m.",
            "en": "measure word for long, narrow, or thin things"
          },
          {
            "cn": "裤子",
            "pos": "n.",
            "en": "trousers; pants"
          }
        ]
      },
      {
        "id": "04-02",
        "title": {
          "cn": "在商场看衣服",
          "en": "Shopping for clothes",
          "emoji": "👖"
        },
        "intro": {
          "cn": "在商场，王一雪和刘小雪在看衣服。",
          "en": "In the shopping mall, Wang Yixue and Liu Xiaoxue were shopping for clothes."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-04/4-3.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-04/4-4.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "刘小雪想买什么？",
            "options": [
              "白色的衣服",
              "红色的衣服",
              "白色的裤子"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "王一雪让刘小雪试试什么？",
            "options": [
              "白色的衣服",
              "红色的衣服",
              "红色的裤子"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "刘小雪",
            "cn": "妈妈，我想买这条白色的裤子。",
            "en": "Mom, I want to buy this pair of white pants."
          },
          {
            "speaker": "王一雪",
            "cn": "你有很多白色的衣服，为什么还买白色的？",
            "en": "You already have lots of white clothes. Why do you want to buy something white again?"
          },
          {
            "speaker": "刘小雪",
            "cn": "因为我喜欢白色啊！",
            "en": "Because I like white!"
          },
          {
            "speaker": "王一雪",
            "cn": "我觉得这条白色的不太好看，你试试那条红色的吧。",
            "en": "I don't think this white one looks very good. Why don't you try that red one instead?"
          },
          {
            "speaker": "刘小雪",
            "cn": "我没穿过红色的，红色的好看吗？",
            "en": "I've never worn red before. Do you think red looks good on me?"
          },
          {
            "speaker": "王一雪",
            "cn": "就是因为没穿过，所以要试试啊！",
            "en": "That's exactly why you should give it a try!"
          }
        ],
        "postQuestions": [
          {
            "q": "王一雪觉得白色的裤子好看吗？"
          },
          {
            "q": "刘小雪穿过红色的裤子吗？"
          }
        ],
        "words": [
          {
            "cn": "白色",
            "pos": "n.",
            "en": "white"
          },
          {
            "cn": "因为",
            "pos": "conj.",
            "en": "because"
          },
          {
            "cn": "试",
            "pos": "v.",
            "en": "try"
          },
          {
            "cn": "红色",
            "pos": "n.",
            "en": "red"
          },
          {
            "cn": "所以",
            "pos": "conj.",
            "en": "so; therefore"
          }
        ]
      },
      {
        "id": "04-03",
        "title": {
          "cn": "在商场看书包",
          "en": "Shopping for schoolbags",
          "emoji": "🎒"
        },
        "intro": {
          "cn": "在商场，王一雪和刘小雪在看书包。",
          "en": "In the shopping mall, Wang Yixue and Liu Xiaoxue were shopping for schoolbags."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-04/4-5.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-04/4-6.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "刘小雪想买什么？",
            "options": [
              "新书",
              "书包",
              "衣服"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "王一雪和刘小雪觉得哪个好看？",
            "options": [
              "红色的",
              "绿色的",
              "黑色的"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "刘小雪",
            "cn": "妈妈，我想买个新书包。",
            "en": "Mom, I want to buy a new schoolbag."
          },
          {
            "speaker": "王一雪",
            "cn": "好，那边卖书包，我们过去看看吧。",
            "en": "Okay. They're selling schoolbags over there. Let's go and take a look."
          },
          {
            "speaker": "刘小雪",
            "cn": "这么多漂亮的书包！",
            "en": "There are so many beautiful ones!"
          },
          {
            "speaker": "王一雪",
            "cn": "红色的、绿色的、黑色的，你想买哪个？",
            "en": "Red ones, green ones, black ones—which one do you want?"
          },
          {
            "speaker": "刘小雪",
            "cn": "绿色的吧。",
            "en": "The green one."
          },
          {
            "speaker": "王一雪",
            "cn": "不错，我也觉得绿色的更好看。",
            "en": "Not bad. I think the green one looks better too."
          }
        ],
        "postQuestions": [
          {
            "q": "商场里的书包怎么样？"
          },
          {
            "q": "刘小雪想买哪个书包？"
          }
        ],
        "words": [
          {
            "cn": "书包",
            "pos": "n.",
            "en": "schoolbag"
          },
          {
            "cn": "过去",
            "pos": "v.",
            "en": "pass (by); go over"
          },
          {
            "cn": "绿色",
            "pos": "n.",
            "en": "green"
          },
          {
            "cn": "黑色",
            "pos": "n.",
            "en": "black"
          },
          {
            "cn": "更",
            "pos": "adv.",
            "en": "more; still/even more"
          }
        ]
      },
      {
        "id": "04-04",
        "title": {
          "cn": "在房间写日记",
          "en": "Writing a diary in the room",
          "emoji": "📔"
        },
        "intro": {
          "cn": "在房间，刘小雪在写日记。",
          "en": "In the room, Liu Xiaoxue was writing in her diary."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-04/4-7.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-04/4-8.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "判断正误：商场里的东西不便宜。",
            "options": [
              "对",
              "错"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "判断正误：刘小雪穿红色的裤子很好看。",
            "options": [
              "对",
              "错"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "我和妈妈去了一家商场。因为是新开的，所以这几天东西很便宜。",
            "en": "I went to a shopping mall with my mom. Since the mall had just opened, the prices were quite affordable these days."
          },
          {
            "speaker": "",
            "cn": "商场里的衣服颜色很多。我没穿过红色的裤子，妈妈让我试了试，我觉得我穿红色的也很好看。",
            "en": "The clothes there came in many different colors. I had never worn red pants before, and my mom encouraged me to give them a try. I thought I looked pretty good in red too."
          }
        ],
        "postQuestions": [],
        "words": [
          {
            "cn": "颜色",
            "pos": "n.",
            "en": "color"
          }
        ]
      }
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "进去",
            "书包",
            "颜色",
            "条",
            "商场"
          ],
          "items": [
            {
              "cn": "我看见老师在教室里，你____找她吧。",
              "answer": ""
            },
            {
              "cn": "你已经有一____黑色的裤子了，别买了。",
              "answer": ""
            },
            {
              "cn": "我来过这家____，它是今年一月新开的。",
              "answer": ""
            },
            {
              "cn": "A：妈妈，你看见我的____了吗？ B：没看见，你再找找吧。",
              "answer": ""
            },
            {
              "cn": "A：你想买件什么____的衣服？ B：我喜欢绿色，买绿色的吧。",
              "answer": ""
            }
          ]
        },
        "group2": {
          "options": [],
          "items": []
        }
      },
      "describePictures": [],
      "classroomActivity": {
        "cn": "角色扮演",
        "en": "Role-Play",
        "description": "两人一组，一人扮演售货员，一人扮演顾客。顾客想买裤子，询问裤子的颜色、大小和价钱，等等。尽可能使用本课所学生词和语法。",
        "descriptionEn": "Work in pairs. One student plays the salesperson and the other plays the customer. The customer wants to buy a pair of pants and asks about the colors, sizes, prices, and other details. Try to use the vocabulary and grammar learned in this lesson as much as possible.",
        "topics": []
      }
    }
  },
  {
    "name": "L5 · 第一次去中国朋友家",
    "id": "5",
    "core": [
      {
        "hanzi": "快",
        "en": "hurry up; fast"
      },
      {
        "hanzi": "下来",
        "en": "come down"
      },
      {
        "hanzi": "上来",
        "en": "come up"
      },
      {
        "hanzi": "上去",
        "en": "go up"
      },
      {
        "hanzi": "下面",
        "en": "downstairs"
      },
      {
        "hanzi": "面",
        "en": "used to form a noun of locality"
      },
      {
        "hanzi": "等",
        "en": "wait for"
      },
      {
        "hanzi": "一会儿",
        "en": "soon"
      },
      {
        "hanzi": "下去",
        "en": "go down"
      },
      {
        "hanzi": "进来",
        "en": "come/get in"
      },
      {
        "hanzi": "爷爷",
        "en": "grandfather"
      },
      {
        "hanzi": "奶奶",
        "en": "grandmother"
      },
      {
        "hanzi": "礼物",
        "en": "gift; present"
      },
      {
        "hanzi": "准备",
        "en": "prepare"
      },
      {
        "hanzi": "奶茶",
        "en": "bubble tea"
      },
      {
        "hanzi": "跟",
        "en": "with; and"
      },
      {
        "hanzi": "走",
        "en": "walk; go"
      },
      {
        "hanzi": "酒店",
        "en": "hotel"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "05-01",
        "title": {
          "cn": "在宾馆楼下打电话",
          "en": "A phone call downstairs",
          "emoji": "📞"
        },
        "intro": {
          "cn": "在宾馆楼下，安妮给白家月打电话。",
          "en": "Downstairs in the hotel, Annie was calling Bai Jiayue."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-05/5-1.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-05/5-2.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "白家月要去哪儿？",
            "options": [
              "安妮家",
              "男朋友家",
              "中国朋友家"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "王一雪让她们什么时候到？",
            "options": [
              "1点前",
              "10点前",
              "11点前"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "安妮",
            "cn": "家月，快下来吧，第一次去中国朋友家，别晚了。",
            "en": "Jiayue, come down quickly. It's our first time visiting a Chinese friend's home. Don't be late."
          },
          {
            "speaker": "白家月",
            "cn": "还有时间，你上来吧。",
            "en": "We still have time. Why don't you come up?"
          },
          {
            "speaker": "安妮",
            "cn": "我不上去了，就在下面等你。",
            "en": "I'm not going up. I'll wait for you downstairs."
          },
          {
            "speaker": "白家月",
            "cn": "那我一会儿就下去。",
            "en": "Okay, I'll come down in a few minutes."
          },
          {
            "speaker": "安妮",
            "cn": "你快点儿吧。",
            "en": "Hurry up."
          },
          {
            "speaker": "白家月",
            "cn": "没事，一雪姐说11点前到就可以。",
            "en": "It's fine. Sister Yixue said we just need to get there before 11 o'clock."
          }
        ],
        "postQuestions": [
          {
            "q": "安妮在等谁？"
          },
          {
            "q": "安妮为什么让白家月快点儿？"
          }
        ],
        "words": [
          {
            "cn": "快",
            "pos": "adv./adj.",
            "en": "hurry up; fast"
          },
          {
            "cn": "下来",
            "pos": "v.",
            "en": "come down"
          },
          {
            "cn": "上来",
            "pos": "v.",
            "en": "come up"
          },
          {
            "cn": "上去",
            "pos": "v.",
            "en": "go up"
          },
          {
            "cn": "下面",
            "pos": "n.",
            "en": "downstairs"
          },
          {
            "cn": "面",
            "pos": "suf.",
            "en": "used to form a noun of locality"
          },
          {
            "cn": "等",
            "pos": "v.",
            "en": "wait for"
          },
          {
            "cn": "一会儿",
            "pos": "num.-m.",
            "en": "soon"
          },
          {
            "cn": "下去",
            "pos": "v.",
            "en": "go down"
          }
        ]
      },
      {
        "id": "05-02",
        "title": {
          "cn": "在王一雪家做客",
          "en": "Visiting Wang Yixue's home",
          "emoji": "🏠"
        },
        "intro": {
          "cn": "在王一雪家，白家月和安妮来做客。",
          "en": "Bai Jiayue and Annie were visiting Wang Yixue at home."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-05/5-3.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-05/5-4.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一雪给白家月和安妮介绍谁了？",
            "options": [
              "她的孩子们",
              "孩子们的爸爸",
              "孩子们的爷爷和奶奶"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "王一雪觉得白家月和安妮怎么样？",
            "options": [
              "很漂亮",
              "很客气",
              "很不好意思"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "王一雪",
            "cn": "家月、安妮，快进来！我给你们介绍一下，这是孩子们的爷爷、奶奶。",
            "en": "Jiayue, Annie, come on in! Let me introduce everyone. These are the children's grandfather and grandmother."
          },
          {
            "speaker": "白家月、安妮",
            "cn": "你们好！",
            "en": "Hello!"
          },
          {
            "speaker": "王一雪",
            "cn": "爸，妈，这是白家月，这是安妮。她们都是一飞的学生。",
            "en": "Dad, Mom, this is Bai Jiayue, and this is Annie. They're both Yifei's students."
          },
          {
            "speaker": "刘爷爷",
            "cn": "家月、安妮，你们好！",
            "en": "Hello, Jiayue! Hello, Annie!"
          },
          {
            "speaker": "白家月",
            "cn": "这是送你们的礼物。",
            "en": "These gifts are for you."
          },
          {
            "speaker": "刘爷爷",
            "cn": "你们太客气了，还拿这么多礼物来！",
            "en": "You're too kind! You didn't have to bring so many gifts."
          },
          {
            "speaker": "白家月",
            "cn": "一雪姐，这是给孩子们准备的礼物。",
            "en": "Sister Yixue, here's the gift we prepared for the children."
          },
          {
            "speaker": "王一雪",
            "cn": "谢谢！你们别客气，快坐吧！",
            "en": "Thank you very much! Please make yourselves at home and have a seat!"
          }
        ],
        "postQuestions": [
          {
            "q": "白家月和安妮准备什么了？"
          },
          {
            "q": "刘爷爷觉得白家月和安妮怎么样？"
          }
        ],
        "words": [
          {
            "cn": "进来",
            "pos": "v.",
            "en": "come/get in"
          },
          {
            "cn": "爷爷",
            "pos": "n.",
            "en": "grandfather"
          },
          {
            "cn": "奶奶",
            "pos": "n.",
            "en": "grandmother"
          },
          {
            "cn": "礼物",
            "pos": "n.",
            "en": "gift; present"
          },
          {
            "cn": "准备",
            "pos": "v.",
            "en": "prepare"
          }
        ]
      },
      {
        "id": "05-03",
        "title": {
          "cn": "在王一雪家吃饭",
          "en": "Having a meal at Wang Yixue's home",
          "emoji": "🍽️"
        },
        "intro": {
          "cn": "在王一雪家，白家月和安妮在吃饭。",
          "en": "At Wang Yixue's home, Bai Jiayue and Annie were having a meal."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-05/5-5.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-05/5-6.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "今天的菜是谁做的？",
            "options": [
              "爷爷",
              "奶奶",
              "王一雪"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "爷爷买什么了？",
            "options": [
              "奶茶",
              "绿茶",
              "牛奶"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "王一雪",
            "cn": "都12点了，我们吃饭吧。",
            "en": "It's already 12 o'clock. Let's eat."
          },
          {
            "speaker": "白家月",
            "cn": "这么多好吃的，您太客气了！",
            "en": "There are so many delicious dishes. You're really too kind!"
          },
          {
            "speaker": "王一雪",
            "cn": "都是我自己做的，你们多吃点儿。",
            "en": "I cooked all of these myself. Please help yourselves and eat as much as you like."
          },
          {
            "speaker": "白家月",
            "cn": "奶茶也很好喝，是您自己做的吗？",
            "en": "The bubble tea tastes amazing. Did you make it yourself?"
          },
          {
            "speaker": "王一雪",
            "cn": "不是，奶茶是爷爷买的。",
            "en": "No, Grandpa bought it."
          },
          {
            "speaker": "白家月",
            "cn": "在哪儿买的？我还没喝过这么好喝的奶茶。",
            "en": "Where did he buy it? I've never had bubble tea this good before."
          },
          {
            "speaker": "王一雪",
            "cn": "就在前边的商场，吃完饭你们可以跟我去看看。",
            "en": "He bought it from the mall up ahead. After we finish eating, you can come with me to check it out."
          }
        ],
        "postQuestions": [
          {
            "q": "奶茶是在哪儿买的？"
          },
          {
            "q": "吃完饭，白家月她们要做什么？"
          }
        ],
        "words": [
          {
            "cn": "奶茶",
            "pos": "n.",
            "en": "bubble tea"
          },
          {
            "cn": "跟",
            "pos": "prep./conj.",
            "en": "with; and"
          }
        ]
      },
      {
        "id": "05-04",
        "title": {
          "cn": "在宾馆发信息",
          "en": "Sending a message at the hotel",
          "emoji": "🏨"
        },
        "intro": {
          "cn": "在宾馆，白家月给李文发信息。",
          "en": "At the hotel, Bai Jiayue was sending a message to Li Wen."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-05/5-7.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-05/5-8.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "判断正误：回国前，白家月请王一雪到饭店吃饭。",
            "options": [
              "对",
              "错"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "判断正误：因为白家月喜欢喝奶茶，所以爷爷准备了奶茶。",
            "options": [
              "对",
              "错"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "回国前一天，我们去一雪姐家了。到她家的时候，饭菜都做好了。",
            "en": "The day before we returned to our countries, we visited Sister Yixue's home. When we arrived, the food was already prepared."
          },
          {
            "speaker": "",
            "cn": "刘爷爷还准备了奶茶。因为吃了太多东西，我们吃完饭是走回酒店的。",
            "en": "Grandpa Liu had also prepared bubble tea for us. Since we ate so much, we walked back to the hotel after the meal."
          }
        ],
        "postQuestions": [],
        "words": [
          {
            "cn": "走",
            "pos": "v.",
            "en": "walk; go"
          },
          {
            "cn": "酒店",
            "pos": "n.",
            "en": "hotel"
          }
        ]
      }
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "奶茶",
            "下面",
            "等",
            "走",
            "跟"
          ],
          "items": [
            {
              "cn": "你喝过____吗？好不好喝？",
              "answer": ""
            },
            {
              "cn": "桌子____有一个绿色的书包。",
              "answer": ""
            },
            {
              "cn": "同学们，____我来。看，这是我们的新教室。",
              "answer": ""
            },
            {
              "cn": "A：家月，我不想打车，想____回学校。 B：好啊，没问题。",
              "answer": ""
            },
            {
              "cn": "A：公交车还没来，我们还是打车去吧。 B：再____一下吧。",
              "answer": ""
            }
          ]
        },
        "group2": {
          "options": [],
          "items": []
        }
      },
      "describePictures": [],
      "classroomActivity": {
        "cn": "角色扮演",
        "en": "Role-Play",
        "description": "四人一组，一人扮演主人，两人扮演家庭成员，一人扮演客人。客人来家里做客，大家互相打招呼，主人给家里人介绍客人，主人招待客人，等等。尽可能使用本课所学生词和语法。",
        "descriptionEn": "Work in groups of four. One student plays the host, two play family members, and one plays the guest. The guest comes to visit the host's home. Everyone exchanges greetings; the host introduces the guest to the family members and entertains the guest, and so on. Try to use the vocabulary and grammar learned in this lesson as much as possible.",
        "topics": []
      }
    }
  },
  {
    "name": "L6 · 小雪，生日快乐！",
    "id": "6",
    "core": [
      {
        "hanzi": "生日",
        "en": "birthday"
      },
      {
        "hanzi": "忘",
        "en": "forget"
      },
      {
        "hanzi": "画",
        "en": "draw; painting"
      },
      {
        "hanzi": "画笔",
        "en": "color pen; paintbrush"
      },
      {
        "hanzi": "蛋糕",
        "en": "cake"
      },
      {
        "hanzi": "快乐",
        "en": "happy"
      },
      {
        "hanzi": "打开",
        "en": "open"
      },
      {
        "hanzi": "长",
        "en": "long"
      },
      {
        "hanzi": "鱼",
        "en": "fish"
      },
      {
        "hanzi": "肉",
        "en": "meat"
      },
      {
        "hanzi": "过",
        "en": "spend time"
      },
      {
        "hanzi": "地",
        "en": "used with an adverb or adverbial phrase"
      },
      {
        "hanzi": "床",
        "en": "bed"
      },
      {
        "hanzi": "舒服",
        "en": "comfortable"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "06-01",
        "title": {
          "cn": "商量生日礼物",
          "en": "Choosing a birthday gift",
          "emoji": "🎁"
        },
        "intro": {
          "cn": "在家里，刘明和王一雪在聊天儿。",
          "en": "At home, Liu Ming and Wang Yixue were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-06/6-1.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-06/6-2.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一雪和刘明要准备什么礼物？",
            "options": [
              "画",
              "衣服",
              "画笔"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "王一雪什么时候去买礼物？",
            "options": [
              "明天早上",
              "明天上午",
              "明天晚上"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "王一雪",
            "cn": "明天就是女儿的生日了。",
            "en": "Tomorrow is our daughter's birthday."
          },
          {
            "speaker": "刘明",
            "cn": "你不说，我还真忘了。我们给她准备个什么礼物呢？",
            "en": "I would have totally forgotten if you hadn't reminded me. What should we get her as a gift?"
          },
          {
            "speaker": "王一雪",
            "cn": "她喜欢画画，你觉得画笔怎么样？",
            "en": "She likes drawing. How about some color pens?"
          },
          {
            "speaker": "刘明",
            "cn": "就送画笔吧！",
            "en": "Let's get her color pens!"
          },
          {
            "speaker": "王一雪",
            "cn": "那我明天上午就去买。",
            "en": "I'll go buy them tomorrow morning."
          },
          {
            "speaker": "刘明",
            "cn": "好的！我再给她买个大大的生日蛋糕。",
            "en": "Sure! I'll also get her a big birthday cake."
          }
        ],
        "postQuestions": [
          {
            "q": "明天是谁的生日？"
          },
          {
            "q": "他们为什么觉得画笔是很好的礼物？"
          }
        ],
        "words": [
          {
            "cn": "生日",
            "pos": "n.",
            "en": "birthday"
          },
          {
            "cn": "忘",
            "pos": "v.",
            "en": "forget"
          },
          {
            "cn": "画",
            "pos": "v./n.",
            "en": "draw; painting"
          },
          {
            "cn": "画笔",
            "pos": "n.",
            "en": "color pen; paintbrush"
          },
          {
            "cn": "蛋糕",
            "pos": "n.",
            "en": "cake"
          }
        ]
      },
      {
        "id": "06-02",
        "title": {
          "cn": "在客厅送礼物",
          "en": "Giving the gift in the living room",
          "emoji": "🎂"
        },
        "intro": {
          "cn": "在客厅，刘明一家人在聊天。",
          "en": "In the living room, Liu Ming and his family were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-06/6-3.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-06/6-4.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "刘小雪想画什么？",
            "options": [
              "黑色的狗",
              "黑色的猫",
              "白色的衣服"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "刘小明想画什么？",
            "options": [
              "爸爸",
              "妈妈",
              "姐姐"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "刘明",
            "cn": "小雪，生日快乐！",
            "en": "Happy birthday, Xiaoxue!"
          },
          {
            "speaker": "刘小明",
            "cn": "姐姐，生日快乐！",
            "en": "Happy birthday, sister!"
          },
          {
            "speaker": "王一雪",
            "cn": "小雪，这是爸爸、妈妈送你的礼物。",
            "en": "Xiaoxue, here's a gift from dad and mom."
          },
          {
            "speaker": "刘明",
            "cn": "你打开看看喜欢不喜欢。",
            "en": "Go ahead and open it—see if you like it."
          },
          {
            "speaker": "刘小雪",
            "cn": "画笔！我很喜欢！",
            "en": "Color pens! I love them!"
          },
          {
            "speaker": "王一雪",
            "cn": "那你想画点儿什么？",
            "en": "What would you like to draw?"
          },
          {
            "speaker": "刘小雪",
            "cn": "画我们的家！有爸爸、妈妈、弟弟，还有黑色的狗、白色的猫什么的。",
            "en": "Our home! With dad, mom, my little brother, and our black dog, white cat, and all the others."
          },
          {
            "speaker": "刘小明",
            "cn": "那我要画一个穿白色衣服的姐姐。",
            "en": "Then I'll draw a sister in white clothes."
          }
        ],
        "postQuestions": [
          {
            "q": "爸爸、妈妈送了小雪什么礼物？"
          },
          {
            "q": "小雪喜欢这个礼物吗？"
          }
        ],
        "words": [
          {
            "cn": "快乐",
            "pos": "adj.",
            "en": "happy"
          },
          {
            "cn": "打开",
            "pos": "v.",
            "en": "open"
          }
        ]
      },
      {
        "id": "06-03",
        "title": {
          "cn": "一家人过生日",
          "en": "Celebrating a birthday",
          "emoji": "🍜"
        },
        "intro": {
          "cn": "在客厅，刘明一家人在给刘小雪过生日。",
          "en": "In the living room, Liu Ming and his family were celebrating Liu Xiaoxue's birthday."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-06/6-5.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-06/6-6.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "今天的东西都是谁爱吃的？",
            "options": [
              "爸爸",
              "妈妈",
              "小雪"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "他们吃完饭要做什么？",
            "options": [
              "休息",
              "买蛋糕",
              "出去玩"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "刘明",
            "cn": "小雪，看看今天有什么好吃的。",
            "en": "Xiaoxue, take a look at all the delicious food we have today."
          },
          {
            "speaker": "刘小雪",
            "cn": "长长的面条儿，大大的蛋糕。",
            "en": "Long noodles and a big cake."
          },
          {
            "speaker": "刘明",
            "cn": "你看，还有鱼啊肉啊什么的，都是你喜欢吃的。",
            "en": "Look, there's fish, meat, and other dishes too. They're all your favorites."
          },
          {
            "speaker": "刘小雪",
            "cn": "谢谢爸爸、妈妈！",
            "en": "Thank you, Dad and Mom!"
          },
          {
            "speaker": "王一雪",
            "cn": "快去叫弟弟过来吃饭吧，吃完饭我们还要出去玩呢。",
            "en": "Go call your little brother to come and eat. After dinner, we'll go out and have some fun!"
          },
          {
            "speaker": "刘小雪",
            "cn": "过生日真好啊！",
            "en": "Birthdays are so wonderful!"
          },
          {
            "speaker": "王一雪",
            "cn": "是的，过生日就要吃好吃的，还要高高兴兴地玩。",
            "en": "That's right! On your birthday, you should enjoy good food and have lots of fun."
          }
        ],
        "postQuestions": [
          {
            "q": "刘明和王一雪准备了哪些吃的？"
          },
          {
            "q": "刘小雪为什么觉得过生日真好？"
          }
        ],
        "words": [
          {
            "cn": "长",
            "pos": "adj.",
            "en": "long"
          },
          {
            "cn": "鱼",
            "pos": "n.",
            "en": "fish"
          },
          {
            "cn": "肉",
            "pos": "n.",
            "en": "meat"
          },
          {
            "cn": "过",
            "pos": "v.",
            "en": "spend time"
          },
          {
            "cn": "地",
            "pos": "part.",
            "en": "used with an adverb or adverbial phrase"
          }
        ]
      },
      {
        "id": "06-04",
        "title": {
          "cn": "在房间写日记",
          "en": "Writing a diary in the room",
          "emoji": "📔"
        },
        "intro": {
          "cn": "在房间，王一雪在写日记。",
          "en": "In the room, Wang Yixue was writing in her diary."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-06/6-7.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-06/6-8.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "判断正误：女儿学会做面条儿了。",
            "options": [
              "对",
              "错"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "判断正误：王一雪今天高高兴兴地过了个生日。",
            "options": [
              "对",
              "错"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "今天是女儿的生日。我们买了蛋糕，做了面条儿，还做了鱼啊肉啊什么的。",
            "en": "Today was our daughter's birthday. We bought a cake, made noodles, and prepared dishes such as fish, meat, and others."
          },
          {
            "speaker": "",
            "cn": "吃完晚饭，一家人去看了个电影。回家后，孩子们早早地就上床了。",
            "en": "After dinner, our whole family went to watch a movie. When we got home, the children went to bed early."
          },
          {
            "speaker": "",
            "cn": "明天不上学，他们说要舒舒服服地睡一觉，让我们晚点儿叫他们起床。这是很忙、很累，但很快乐的一天。",
            "en": "Since there's no school tomorrow, they said they wanted to sleep soundly and comfortably, and asked us to wake them up later. It was a busy and tiring day, but full of joy."
          }
        ],
        "postQuestions": [],
        "words": [
          {
            "cn": "床",
            "pos": "n.",
            "en": "bed"
          },
          {
            "cn": "舒服",
            "pos": "adj.",
            "en": "comfortable"
          }
        ]
      }
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "忘",
            "快乐",
            "打开",
            "画",
            "床"
          ],
          "items": [
            {
              "cn": "明天10点去小雪家，你别____了。",
              "answer": ""
            },
            {
              "cn": "衣服在____上，你看看想穿哪一件？",
              "answer": ""
            },
            {
              "cn": "看，这是我妹妹____的，漂亮不漂亮？",
              "answer": ""
            },
            {
              "cn": "A：这是什么？ B：送你的礼物，快____看看。",
              "answer": ""
            },
            {
              "cn": "A：今天我过了一个非常____的生日，谢谢爸爸、妈妈！ B：不客气！我们都很爱你！",
              "answer": ""
            }
          ]
        },
        "group2": {
          "options": [],
          "items": []
        }
      },
      "describePictures": [],
      "classroomActivity": {
        "cn": "角色扮演",
        "en": "Role-Play",
        "description": "三人一组，一人扮演过生日的人，两人扮演朋友，三人一起庆祝生日。朋友们说生日祝福、送礼物、问生日愿望。过生日的人表达想吃什么、想去哪儿玩，等等。尽可能使用本课所学生词和语法。",
        "descriptionEn": "Work in groups of three. One student plays the birthday person, and the other two play friends. The three celebrate the birthday together. The friends give birthday wishes, present gifts, and ask about the birthday person's wishes. The birthday person talks about what they'd like to eat, where they want to go, and other ideas. Try to use the vocabulary and grammar learned in this lesson as much as possible.",
        "topics": []
      }
    }
  },
  {
    "name": "L7 · 他篮球打得很好",
    "id": "7",
    "core": [
      {
        "hanzi": "从",
        "en": "from"
      },
      {
        "hanzi": "往",
        "en": "towards; go"
      },
      {
        "hanzi": "跑",
        "en": "run; go to play (games); hit"
      },
      {
        "hanzi": "打",
        "en": "play (games)"
      },
      {
        "hanzi": "篮球",
        "en": "basketball"
      },
      {
        "hanzi": "运动",
        "en": "sports; exercise"
      },
      {
        "hanzi": "踢",
        "en": "kick"
      },
      {
        "hanzi": "足球",
        "en": "soccer; football"
      },
      {
        "hanzi": "球",
        "en": "ball"
      },
      {
        "hanzi": "得",
        "en": "used between a verb or an adjective and its complement to indicate the result or degree"
      },
      {
        "hanzi": "跑步",
        "en": "run"
      },
      {
        "hanzi": "游泳",
        "en": "swim"
      },
      {
        "hanzi": "游",
        "en": "swim"
      },
      {
        "hanzi": "爱好",
        "en": "hobby; be fond of"
      },
      {
        "hanzi": "开始",
        "en": "start; beginning"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "07-01",
        "title": {
          "cn": "在教室",
          "en": "In the classroom",
          "emoji": "🏫"
        },
        "intro": {
          "cn": "在教室，安妮和陈天中在聊天儿。",
          "en": "In the classroom, Annie and Chen Tianzhong were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-07/7-1.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-07/7-2.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "安妮是什么时候回来的？",
            "options": [
              "昨天早上",
              "昨天上午",
              "昨天下午"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "安妮想跟陈天中去做什么？",
            "options": [
              "去教室",
              "打篮球",
              "去北京"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "陈天中",
            "cn": "安妮，你是什么时候从北京回来的？",
            "en": "Annie, when did you get back from Beijing?"
          },
          {
            "speaker": "安妮",
            "cn": "昨天下午。天中，你怎么一下课就往外跑？",
            "en": "Yesterday afternoon. Tianzhong, why do you rush out as soon as class ends?"
          },
          {
            "speaker": "陈天中",
            "cn": "我跟同学说好了，一起去打篮球。",
            "en": "I made an appointment with my classmates to play basketball together."
          },
          {
            "speaker": "安妮",
            "cn": "我也想跟你们一起玩。",
            "en": "I want to join you too."
          },
          {
            "speaker": "陈天中",
            "cn": "没问题，走吧。",
            "en": "No problem, let's go!"
          }
        ],
        "postQuestions": [
          {
            "q": "陈天中为什么一下课就往外跑？"
          },
          {
            "q": "安妮想去做什么？"
          }
        ],
        "words": [
          {
            "cn": "从",
            "pos": "prep.",
            "en": "from"
          },
          {
            "cn": "往",
            "pos": "prep./v.",
            "en": "towards; go"
          },
          {
            "cn": "跑",
            "pos": "v.",
            "en": "run; go to play (games); hit"
          },
          {
            "cn": "打",
            "pos": "v.",
            "en": "play (games)"
          },
          {
            "cn": "篮球",
            "pos": "n.",
            "en": "basketball"
          }
        ]
      },
      {
        "id": "07-02",
        "title": {
          "cn": "在校园聊运动",
          "en": "Talking about sports on campus",
          "emoji": "⚽"
        },
        "intro": {
          "cn": "在校园，安妮和陈天中边走边聊。",
          "en": "On campus, Annie and Chen Tianzhong were chatting as they walked."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-07/7-3.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-07/7-4.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "星期天陈天中做什么？",
            "options": [
              "学中文",
              "踢足球",
              "打篮球"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "星期天陈天中跟谁去玩？",
            "options": [
              "李文",
              "同学们",
              "朋友们"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "安妮",
            "cn": "天中，你是不是很喜欢打篮球？",
            "en": "Tianzhong, do you really like playing basketball?"
          },
          {
            "speaker": "陈天中",
            "cn": "没错。",
            "en": "Yes, I do."
          },
          {
            "speaker": "安妮",
            "cn": "你还喜欢什么运动？",
            "en": "What other sports do you enjoy?"
          },
          {
            "speaker": "陈天中",
            "cn": "我还喜欢踢足球，一到星期天就跟朋友们去踢球。",
            "en": "I also enjoy playing soccer. I play with my friends every Sunday."
          },
          {
            "speaker": "安妮",
            "cn": "你踢得怎么样？",
            "en": "How well do you play?"
          },
          {
            "speaker": "陈天中",
            "cn": "我踢得还可以。",
            "en": "Not bad."
          }
        ],
        "postQuestions": [
          {
            "q": "陈天中喜欢什么运动？"
          },
          {
            "q": "陈天中踢球踢得怎么样？"
          }
        ],
        "words": [
          {
            "cn": "运动",
            "pos": "n./v.",
            "en": "sports; exercise"
          },
          {
            "cn": "踢",
            "pos": "v.",
            "en": "kick"
          },
          {
            "cn": "足球",
            "pos": "n.",
            "en": "soccer; football"
          },
          {
            "cn": "球",
            "pos": "n.",
            "en": "ball"
          },
          {
            "cn": "得",
            "pos": "part.",
            "en": "used between a verb or an adjective and its complement to indicate the result or degree"
          }
        ]
      },
      {
        "id": "07-03",
        "title": {
          "cn": "在校园聊爱好",
          "en": "Talking about hobbies on campus",
          "emoji": "🏊"
        },
        "intro": {
          "cn": "在校园，安妮和陈天中边走边聊。",
          "en": "On campus, Annie and Chen Tianzhong were chatting as they walked."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-07/7-5.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-07/7-6.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "安妮打篮球打得怎么样？",
            "options": [
              "很好",
              "不好",
              "还可以"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "安妮喜欢做什么？",
            "options": [
              "游泳",
              "跑步",
              "踢球"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "陈天中",
            "cn": "你篮球打得怎么样？",
            "en": "How are your basketball skills?"
          },
          {
            "speaker": "安妮",
            "cn": "打得还可以。",
            "en": "Not too bad."
          },
          {
            "speaker": "陈天中",
            "cn": "跑步呢？你跑得快不快？",
            "en": "What about running? Are you fast?"
          },
          {
            "speaker": "安妮",
            "cn": "我跑得不快，也不太喜欢跑步。",
            "en": "I'm not very fast, and I don't really like running, either."
          },
          {
            "speaker": "陈天中",
            "cn": "那你喜欢游泳吗？",
            "en": "Do you like swimming, then?"
          },
          {
            "speaker": "安妮",
            "cn": "喜欢，但我游泳游得不快。",
            "en": "I do, but I'm not very good at it, either."
          }
        ],
        "postQuestions": [
          {
            "q": "安妮跑步跑得怎么样？"
          },
          {
            "q": "安妮游泳游得怎么样？"
          }
        ],
        "words": [
          {
            "cn": "跑步",
            "pos": "v.",
            "en": "run"
          },
          {
            "cn": "游泳",
            "pos": "v.",
            "en": "swim"
          },
          {
            "cn": "游",
            "pos": "v.",
            "en": "swim"
          }
        ]
      },
      {
        "id": "07-04",
        "title": {
          "cn": "在房间写日记",
          "en": "Writing a diary in the room",
          "emoji": "📔"
        },
        "intro": {
          "cn": "在房间，陈天中在写日记。",
          "en": "In the room, Chen Tianzhong was writing in his diary."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-07/7-7.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-07/7-8.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "判断正误：陈天中非常喜欢运动。",
            "options": [
              "对",
              "错"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "判断正误：陈天中游泳游得不快。",
            "options": [
              "对",
              "错"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "我的爱好是运动。从上小学开始，我每天都跟爸爸去运动。",
            "en": "My hobby is doing sports. Since primary school, I've been exercising with my dad every day."
          },
          {
            "speaker": "",
            "cn": "现在我篮球打得很好，足球踢得不错，游泳游得也很快。我一有时间就去运动。",
            "en": "Now I play basketball very well, play football quite well, and swim very fast. Whenever I have time, I go out to play sports."
          }
        ],
        "postQuestions": [],
        "words": [
          {
            "cn": "爱好",
            "pos": "n./v.",
            "en": "hobby; be fond of"
          },
          {
            "cn": "开始",
            "pos": "v./n.",
            "en": "start; beginning"
          }
        ]
      }
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "跑步",
            "运动",
            "从",
            "开始",
            "游泳"
          ],
          "items": [
            {
              "cn": "你看过她游泳吗？游得怎么样？",
              "answer": ""
            },
            {
              "cn": "我们9点上课，你别来晚了。",
              "answer": ""
            },
            {
              "cn": "你跑得快不快？我想跟你一起去运动。",
              "answer": ""
            },
            {
              "cn": "A：你喜欢什么运动？ B：足球、篮球什么的都喜欢。",
              "answer": ""
            },
            {
              "cn": "A：你喜欢学中文吗？ B：喜欢，我8岁就开始学中文了。",
              "answer": ""
            }
          ]
        },
        "group2": {
          "options": [],
          "items": []
        }
      },
      "describePictures": [],
      "classroomActivity": {
        "cn": "小组调查",
        "en": "Group Survey",
        "description": "三人一组，互相询问喜欢什么运动、星期天做什么、做得怎么样，等等。完成下面的表格，然后向全班报告。尽可能使用本课所学生词和语法。",
        "descriptionEn": "Work in groups of three. Ask one another about the sports you like, what you usually do on Sundays, how well you do them, and so on. Complete the table below and present your findings to the whole class. Try to use the vocabulary and grammar learned in this lesson as much as possible.",
        "topics": []
      }
    }
  },
  {
    "name": "L8 · 虽然你忘了，但是我记得",
    "id": "8",
    "core": [
      {
        "hanzi": "手表",
        "en": "(wrist) watch"
      },
      {
        "hanzi": "左边",
        "en": "left; left side"
      },
      {
        "hanzi": "左",
        "en": "left"
      },
      {
        "hanzi": "比",
        "en": "than; compare"
      },
      {
        "hanzi": "右边",
        "en": "right; right side"
      },
      {
        "hanzi": "右",
        "en": "right"
      },
      {
        "hanzi": "记得",
        "en": "remember"
      },
      {
        "hanzi": "爱情片",
        "en": "romantic movie"
      },
      {
        "hanzi": "有意思",
        "en": "interesting"
      },
      {
        "hanzi": "点",
        "en": "select"
      },
      {
        "hanzi": "虽然",
        "en": "though; although"
      },
      {
        "hanzi": "但是",
        "en": "but; yet"
      },
      {
        "hanzi": "花",
        "en": "spend"
      },
      {
        "hanzi": "妻子",
        "en": "wife"
      },
      {
        "hanzi": "丈夫",
        "en": "husband"
      },
      {
        "hanzi": "饭馆",
        "en": "restaurant"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "08-01",
        "title": {
          "cn": "在商场购物",
          "en": "Shopping in the mall",
          "emoji": "⌚"
        },
        "intro": {
          "cn": "在商场，王一雪和刘明在购物。",
          "en": "In the mall, Wang Yixue and Liu Ming were shopping."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-08/8-1.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-08/8-2.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一雪和刘明在看什么？",
            "options": [
              "钱",
              "手表",
              "裤子"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "王一雪和刘明看的东西多少钱？",
            "options": [
              "5800元",
              "6800元",
              "8800元"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "王一雪",
            "cn": "你看，这两块手表怎么样？",
            "en": "Look, what do you think of these two watches?"
          },
          {
            "speaker": "刘明",
            "cn": "都不错！",
            "en": "They're nice!"
          },
          {
            "speaker": "王一雪",
            "cn": "我喜欢左边这个。",
            "en": "I prefer the one on the left."
          },
          {
            "speaker": "刘明",
            "cn": "我也觉得左边的比右边的好看。",
            "en": "I think the one on the left looks better than the one on the right, too."
          },
          {
            "speaker": "王一雪",
            "cn": "你看看要多少钱！",
            "en": "Check the price!"
          },
          {
            "speaker": "刘明",
            "cn": "真不便宜！八千八百块！",
            "en": "It's not cheap! 8,800 yuan!"
          }
        ],
        "postQuestions": [
          {
            "q": "王一雪和刘明觉得哪块手表好看？"
          },
          {
            "q": "王一雪和刘明觉得手表贵不贵？"
          }
        ],
        "words": [
          {
            "cn": "手表",
            "pos": "n.",
            "en": "(wrist) watch"
          },
          {
            "cn": "左边",
            "pos": "n.",
            "en": "left; left side"
          },
          {
            "cn": "左",
            "pos": "n.",
            "en": "left"
          },
          {
            "cn": "比",
            "pos": "prep./v.",
            "en": "than; compare"
          },
          {
            "cn": "右边",
            "pos": "n.",
            "en": "right; right side"
          },
          {
            "cn": "右",
            "pos": "n.",
            "en": "right"
          }
        ]
      },
      {
        "id": "08-02",
        "title": {
          "cn": "在电影院外面",
          "en": "Outside the cinema",
          "emoji": "🎬"
        },
        "intro": {
          "cn": "在电影院外面，王一雪和刘明在聊天儿。",
          "en": "Outside the cinema, Wang Yixue and Liu Ming were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-08/8-3.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-08/8-4.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一雪和刘明要去做什么？",
            "options": [
              "去吃饭",
              "看电影",
              "买东西"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "王一雪要在哪儿买票？",
            "options": [
              "网上",
              "电影院",
              "商场里"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "刘明",
            "cn": "今天有不少电影，我们看个电影吧。",
            "en": "There are quite a few movies showing today. Let's watch one."
          },
          {
            "speaker": "王一雪",
            "cn": "好啊！我们看哪个？",
            "en": "Great! Which one should we watch?"
          },
          {
            "speaker": "刘明",
            "cn": "我记得你喜欢看爱情片，我们看那个爱情片，怎么样？",
            "en": "I remember you like romantic movies. How about that romantic one?"
          },
          {
            "speaker": "王一雪",
            "cn": "还是看这个吧，我看网上说这个电影比那个爱情片更有意思。",
            "en": "Let's watch this one instead. I read online that it's more interesting than that romantic one."
          },
          {
            "speaker": "刘明",
            "cn": "好。我去买票。",
            "en": "Okay. I'll go buy the tickets."
          },
          {
            "speaker": "王一雪",
            "cn": "到网上买吧，网上买比在这里买便宜。",
            "en": "Buy them online. It's cheaper to buy tickets online than here."
          }
        ],
        "postQuestions": [
          {
            "q": "王一雪喜欢看什么电影？"
          },
          {
            "q": "王一雪为什么到网上买票？"
          }
        ],
        "words": [
          {
            "cn": "记得",
            "pos": "v.",
            "en": "remember"
          },
          {
            "cn": "爱情片",
            "pos": "n.",
            "en": "romantic movie"
          },
          {
            "cn": "有意思",
            "pos": "",
            "en": "interesting"
          }
        ]
      },
      {
        "id": "08-03",
        "title": {
          "cn": "在饭馆点菜",
          "en": "Ordering food at a restaurant",
          "emoji": "🍽️"
        },
        "intro": {
          "cn": "在饭馆，王一雪和刘明在点菜。",
          "en": "At the restaurant, Wang Yixue and Liu Ming were ordering food."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-08/8-5.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-08/8-6.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "今天是几月几号？",
            "options": [
              "1月21号",
              "1月27号",
              "8月27号"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "刘明给王一雪买了什么礼物？",
            "options": [
              "手表",
              "电影票",
              "好吃的"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "刘明",
            "cn": "您好！就要这几个菜吧，谢谢！",
            "en": "Hello! We'll have these dishes, thank you!"
          },
          {
            "speaker": "王一雪",
            "cn": "怎么点这么多菜？",
            "en": "Why did you order so much?"
          },
          {
            "speaker": "刘明",
            "cn": "你想想，今天是几月几号？",
            "en": "Think about it—what's the date today?"
          },
          {
            "speaker": "王一雪",
            "cn": "8月27号。啊！我的生日！",
            "en": "August 27th. Ah! My birthday!"
          },
          {
            "speaker": "刘明",
            "cn": "生日快乐！虽然你忘了，但是我记得。看看这是什么？",
            "en": "Happy birthday! Even though you forgot, I remembered. Look, what's this?"
          },
          {
            "speaker": "王一雪",
            "cn": "手表！吃饭、看电影、买手表，今天花了不少钱吧？",
            "en": "The watch! Having a dinner, watching a movie, and buying the watch. You must have spent quite a lot today, right?"
          },
          {
            "speaker": "刘明",
            "cn": "虽然花了一些钱，但是我们过了一个快乐的生日。",
            "en": "Although we spent some money, we celebrated a happy birthday."
          }
        ],
        "postQuestions": [
          {
            "q": "刘明为什么点很多菜？"
          },
          {
            "q": "王一雪记得今天是自己的生日吗？"
          }
        ],
        "words": [
          {
            "cn": "点",
            "pos": "v.",
            "en": "select"
          },
          {
            "cn": "虽然",
            "pos": "conj.",
            "en": "though; although"
          },
          {
            "cn": "但是",
            "pos": "conj.",
            "en": "but; yet"
          },
          {
            "cn": "花",
            "pos": "v.",
            "en": "spend"
          }
        ]
      },
      {
        "id": "08-04",
        "title": {
          "cn": "小语讲述这一天",
          "en": "Xiaoyu tells the story of the day",
          "emoji": "🗣️"
        },
        "intro": {
          "cn": "小语在讲述王一雪和刘明的一天。",
          "en": "Xiaoyu was telling the story of Wang Yixue and Liu Ming's day."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-08/8-7.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-08/8-8.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "判断正误：丈夫忘了妻子的生日。",
            "options": [
              "对",
              "错"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "判断正误：妻子给丈夫买了一块手表。",
            "options": [
              "对",
              "错"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "虽然妻子忘了今天是自己的生日，但是丈夫记得。",
            "en": "Although the wife forgot that today was her birthday, the husband still remembered."
          },
          {
            "speaker": "",
            "cn": "丈夫请妻子去饭馆吃饭、去电影院看电影，还给妻子买了一块非常漂亮的手表。",
            "en": "He took her to a restaurant, watched a movie, and even bought her a beautiful watch."
          },
          {
            "speaker": "",
            "cn": "妻子觉得今天很快乐。",
            "en": "She felt truly happy today."
          }
        ],
        "postQuestions": [],
        "words": [
          {
            "cn": "妻子",
            "pos": "n.",
            "en": "wife"
          },
          {
            "cn": "丈夫",
            "pos": "n.",
            "en": "husband"
          },
          {
            "cn": "饭馆",
            "pos": "n.",
            "en": "restaurant"
          }
        ]
      }
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "左边",
            "记得",
            "手表",
            "有意思",
            "花"
          ],
          "items": [
            {
              "cn": "我的____在哪儿？你看见了吗？",
              "answer": ""
            },
            {
              "cn": "我____那个超市卖画笔，我们过去看看。",
              "answer": ""
            },
            {
              "cn": "我们在商场买了很多东西，____了很多钱。",
              "answer": ""
            },
            {
              "cn": "A：我昨天看的那个电影很____。 B：有时间我也去看看。",
              "answer": ""
            },
            {
              "cn": "A：____这个人是你妹妹吗？ B：是我姐姐，她比我大。",
              "answer": ""
            }
          ]
        },
        "group2": {
          "options": [],
          "items": []
        }
      },
      "describePictures": [],
      "classroomActivity": {
        "cn": "角色扮演",
        "en": "Role-Play",
        "description": "三人一组，一人扮演服务员，另外两人扮演客人。客人来饭馆吃饭。点菜时，他们询问菜的价格、味道，并对比饭馆的菜和自己家里做的菜，等等。尽可能使用本课所学生词和语法。",
        "descriptionEn": "Work in groups of three. One student plays the waiter/waitress, and the other two play customers. The customers come to the restaurant for a meal. While ordering, they ask about the prices and tastes of the dishes, compare the restaurant's food with the dishes they cook at home, and so on. Try to use the vocabulary and grammar learned in this lesson as much as possible.",
        "topics": []
      }
    }
  },
  {
    "name": "L9 · 我去买杯奶茶",
    "id": "9",
    "core": [
      {
        "hanzi": "坏",
        "en": "bad; ruined"
      },
      {
        "hanzi": "旁边",
        "en": "side; adjacent place"
      },
      {
        "hanzi": "男孩儿",
        "en": "boy"
      },
      {
        "hanzi": "这样",
        "en": "such; like this; so"
      },
      {
        "hanzi": "个子",
        "en": "height"
      },
      {
        "hanzi": "那么",
        "en": "like that"
      },
      {
        "hanzi": "高",
        "en": "tall; high"
      },
      {
        "hanzi": "门口",
        "en": "doorway; entrance"
      },
      {
        "hanzi": "咖啡",
        "en": "coffee"
      },
      {
        "hanzi": "离",
        "en": "be apart/away from"
      },
      {
        "hanzi": "近",
        "en": "close; nearby"
      },
      {
        "hanzi": "走路",
        "en": "walk"
      },
      {
        "hanzi": "周",
        "en": "week"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "09-01",
        "title": {
          "cn": "在商店看裤子",
          "en": "Looking at pants in a store",
          "emoji": "👖"
        },
        "intro": {
          "cn": "在商店，王一雪和刘明在看裤子。",
          "en": "In the store, Wang Yixue and Liu Ming were looking at pants."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-09/9-1.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-09/9-2.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一雪为什么想给儿子买裤子？",
            "options": [
              "儿子的裤子坏了",
              "儿子喜欢新裤子",
              "儿子明天过生日"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "刘明觉得哪条裤子好看？",
            "options": [
              "黑色的裤子",
              "白色的裤子",
              "上次买的裤子"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "王一雪",
            "cn": "儿子的裤子坏了，我们给他买条新的吧。",
            "en": "Our son's pants are torn. Let's buy him a new pair."
          },
          {
            "speaker": "刘明",
            "cn": "好啊。",
            "en": "Okay."
          },
          {
            "speaker": "王一雪",
            "cn": "你看这条黑色的怎么样？",
            "en": "How about this pair of black ones?"
          },
          {
            "speaker": "刘明",
            "cn": "没有你上次买的那条好看。",
            "en": "They're not as nice as the ones you bought last time."
          },
          {
            "speaker": "王一雪",
            "cn": "旁边那个男孩儿就穿了这样的裤子，我觉得很好看啊！",
            "en": "The boy next to us is wearing pants like these, and I think they look great!"
          },
          {
            "speaker": "刘明",
            "cn": "儿子的个子没有他那么高，穿上就不会太好看。",
            "en": "Our son isn't as tall as him, so they wouldn't look so good on him."
          },
          {
            "speaker": "王一雪",
            "cn": "好吧，我们再去那边看看。",
            "en": "Alright, let's go over there and take another look."
          }
        ],
        "postQuestions": [
          {
            "q": "刘明觉得儿子穿这条裤子好看吗？为什么？"
          },
          {
            "q": "王一雪和刘明给儿子买裤子了吗？"
          }
        ],
        "words": [
          {
            "cn": "坏",
            "pos": "adj.",
            "en": "bad; ruined"
          },
          {
            "cn": "旁边",
            "pos": "n.",
            "en": "side; adjacent place"
          },
          {
            "cn": "男孩儿",
            "pos": "n.",
            "en": "boy"
          },
          {
            "cn": "这样",
            "pos": "pron.",
            "en": "such; like this; so"
          },
          {
            "cn": "个子",
            "pos": "n.",
            "en": "height"
          },
          {
            "cn": "那么",
            "pos": "pron.",
            "en": "like that"
          },
          {
            "cn": "高",
            "pos": "adj.",
            "en": "tall; high"
          }
        ]
      },
      {
        "id": "09-02",
        "title": {
          "cn": "在商店门口",
          "en": "At the store entrance",
          "emoji": "🧋"
        },
        "intro": {
          "cn": "在商店门口，王一雪和刘明往外走。",
          "en": "At the entrance of the store, Wang Yixue and Liu Ming were walking out."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-09/9-3.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-09/9-4.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一雪想喝什么？",
            "options": [
              "牛奶",
              "奶茶",
              "咖啡"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "刘明现在想去哪儿？",
            "options": [
              "家里",
              "奶茶店",
              "咖啡店"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "王一雪",
            "cn": "门口有家奶茶店。你想喝杯奶茶吗？",
            "en": "There's a bubble tea shop at the entrance. Do you want a cup of bubble tea?"
          },
          {
            "speaker": "刘明",
            "cn": "我想喝咖啡，还是去咖啡店吧。",
            "en": "I'd prefer coffee. Let's go to a coffee shop."
          },
          {
            "speaker": "王一雪",
            "cn": "咖啡店离这儿有点儿远。",
            "en": "The coffee shop is a bit far from here."
          },
          {
            "speaker": "刘明",
            "cn": "没关系，那家店的咖啡很好喝。",
            "en": "That's fine. The coffee in that shop is very good."
          },
          {
            "speaker": "王一雪",
            "cn": "那你等一下，我去买杯奶茶。",
            "en": "Then wait here for a moment while I go and buy a cup of bubble tea."
          },
          {
            "speaker": "刘明",
            "cn": "你不想喝咖啡吗？",
            "en": "Don't you want to drink coffee?"
          },
          {
            "speaker": "王一雪",
            "cn": "喝了咖啡，晚上就别想睡觉了。",
            "en": "I can't fall asleep if I drink coffee."
          }
        ],
        "postQuestions": [
          {
            "q": "咖啡店离这儿远不远？"
          },
          {
            "q": "王一雪为什么不想喝咖啡？"
          }
        ],
        "words": [
          {
            "cn": "门口",
            "pos": "n.",
            "en": "doorway; entrance"
          },
          {
            "cn": "咖啡",
            "pos": "n.",
            "en": "coffee"
          },
          {
            "cn": "离",
            "pos": "v.",
            "en": "be apart/away from"
          }
        ]
      },
      {
        "id": "09-03",
        "title": {
          "cn": "在咖啡店门口",
          "en": "At the coffee shop entrance",
          "emoji": "☕"
        },
        "intro": {
          "cn": "在咖啡店门口，王一雪和刘明在聊天儿。",
          "en": "At the entrance of a coffee shop, Wang Yixue and Liu Ming were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-09/9-5.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-09/9-6.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "刘明想怎么回家？",
            "options": [
              "打车",
              "走路",
              "跑步"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "走路回家要多长时间？",
            "options": [
              "半个多小时",
              "一个多小时",
              "一个半小时"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "刘明",
            "cn": "我们打车回去吧。",
            "en": "Let's take a taxi home."
          },
          {
            "speaker": "王一雪",
            "cn": "这里离家很近，还是走路吧。",
            "en": "It's close to home. Let's walk."
          },
          {
            "speaker": "刘明",
            "cn": "要走多长时间？",
            "en": "How long will it take?"
          },
          {
            "speaker": "王一雪",
            "cn": "走半个多小时就到了。",
            "en": "Walking will take a little more than half an hour."
          },
          {
            "speaker": "刘明",
            "cn": "好的。每天上下班都坐车，今天运动运动吧。",
            "en": "Alright. I take the car to and from work every day, so I'll get some exercise today."
          }
        ],
        "postQuestions": [
          {
            "q": "王一雪为什么想走路回家？"
          },
          {
            "q": "刘明每天怎么上下班？"
          }
        ],
        "words": [
          {
            "cn": "近",
            "pos": "adj.",
            "en": "close; nearby"
          },
          {
            "cn": "走路",
            "pos": "v.",
            "en": "walk"
          }
        ]
      },
      {
        "id": "09-04",
        "title": {
          "cn": "在房间写日记",
          "en": "Writing a diary in the room",
          "emoji": "📔"
        },
        "intro": {
          "cn": "在房间，王一雪在写日记。",
          "en": "In the room, Wang Yixue was writing in her diary."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-09/9-7.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-09/9-8.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "判断正误：王一雪和刘明给儿子买了几件衣服。",
            "options": [
              "对",
              "错"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "判断正误：因为想运动，所以王一雪和刘明是走回家的。",
            "options": [
              "对",
              "错"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "这周刘明休息，我下班后跟他去了一家商店。",
            "en": "Liu Ming has the whole week off, so I went to a store with him after work."
          },
          {
            "speaker": "",
            "cn": "商店里边的衣服没有大商场里的好看。我们没有买到喜欢的衣服，从商店出来就到咖啡店坐了坐。",
            "en": "The clothes in the store weren't as nice as those in big shopping malls. We didn't find any clothes we liked, so after leaving the store, we went to a coffee shop to sit for a while."
          },
          {
            "speaker": "",
            "cn": "因为想运动运动，所以喝完东西，我们就走回家了。",
            "en": "Since we wanted to get some exercise, we walked home after finishing our drinks."
          }
        ],
        "postQuestions": [],
        "words": [
          {
            "cn": "周",
            "pos": "n.",
            "en": "week"
          }
        ]
      }
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "旁边",
            "走路",
            "那么",
            "个子",
            "这样"
          ],
          "items": [
            {
              "cn": "你女儿十多岁，____这么高啊！",
              "answer": ""
            },
            {
              "cn": "咖啡店不远，我们是____过去的。",
              "answer": ""
            },
            {
              "cn": "我们住的酒店____有个公交站，那儿有到火车站的公交车。",
              "answer": ""
            },
            {
              "cn": "A：我也喜欢____的茶杯，你是在哪儿买的？ B：我是在公司门口那家商店买的。",
              "answer": ""
            },
            {
              "cn": "A：虽然今天的工作也不少，但是我觉得没有昨天累。 B：那我们出去走一走吧。",
              "answer": ""
            }
          ]
        },
        "group2": {
          "options": [],
          "items": []
        }
      },
      "describePictures": [],
      "classroomActivity": {
        "cn": "双人活动",
        "en": "Pair Work",
        "description": "两人一组，商量一起旅游的出行方式，比较一下不同出行方式的优缺点。尽可能使用本课所学生词和语法。",
        "descriptionEn": "Work in pairs. Discuss travel methods for a trip and compare the advantages and disadvantages of different travel methods. Try to use the vocabulary and grammar learned in this lesson as much as possible.",
        "topics": []
      }
    }
  },
  {
    "name": "L10 · 就要考试了",
    "id": "10",
    "core": [
      {
        "hanzi": "开学",
        "en": "school begins"
      },
      {
        "hanzi": "门",
        "en": "door"
      },
      {
        "hanzi": "后面",
        "en": "back"
      },
      {
        "hanzi": "笔",
        "en": "pen; pencil"
      },
      {
        "hanzi": "帮",
        "en": "help"
      },
      {
        "hanzi": "考试",
        "en": "take an examination; examination"
      },
      {
        "hanzi": "词",
        "en": "word"
      },
      {
        "hanzi": "本子",
        "en": "notebook"
      },
      {
        "hanzi": "错",
        "en": "wrong; mistaken"
      },
      {
        "hanzi": "题",
        "en": "question; problem"
      },
      {
        "hanzi": "还是",
        "en": "or"
      },
      {
        "hanzi": "考",
        "en": "take an examination"
      },
      {
        "hanzi": "快要",
        "en": "on the verge of, about to"
      },
      {
        "hanzi": "笑",
        "en": "smile; laugh"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "10-01",
        "title": {
          "cn": "在房间准备东西",
          "en": "Getting things ready in the room",
          "emoji": "🎒"
        },
        "intro": {
          "cn": "在房间，刘明在帮刘小明准备东西。",
          "en": "In the room, Liu Ming was helping Liu Xiaoming prepare things."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-10/10-1.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-10/10-2.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "书包在哪儿？",
            "options": [
              "床上",
              "桌子上",
              "门后面"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "笔在哪儿？",
            "options": [
              "床上",
              "桌子上",
              "门后面"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "刘明",
            "cn": "小明，你们明天开学，你准备好了吗？",
            "en": "Xiaoming, school will start tomorrow. Are you ready?"
          },
          {
            "speaker": "刘小明",
            "cn": "明天就开学啊？爸爸，我的书包你看见了吗？",
            "en": "School starts tomorrow? Dad, did you see my schoolbag?"
          },
          {
            "speaker": "刘明",
            "cn": "书包在门后面。",
            "en": "It's behind the door."
          },
          {
            "speaker": "刘小明",
            "cn": "书在哪儿呢？笔呢？",
            "en": "Where are my books? And my pens?"
          },
          {
            "speaker": "刘明",
            "cn": "书在床上，笔在桌子上。",
            "en": "The books are on the bed, and the pens are on the table."
          },
          {
            "speaker": "刘小明",
            "cn": "太好了！现在都准备好了。",
            "en": "Great! Everything is ready now."
          },
          {
            "speaker": "刘明",
            "cn": "这次爸爸帮你，下次你自己准备，好不好？",
            "en": "Dad helped you this time. Next time, you prepare it by yourself, okay?"
          },
          {
            "speaker": "刘小明",
            "cn": "好！",
            "en": "Okay!"
          }
        ],
        "postQuestions": [
          {
            "q": "刘小明什么时候开学？"
          },
          {
            "q": "刘小明准备好了吗？为什么？"
          }
        ],
        "words": [
          {
            "cn": "开学",
            "pos": "v.",
            "en": "school begins"
          },
          {
            "cn": "门",
            "pos": "n.",
            "en": "door"
          },
          {
            "cn": "后面",
            "pos": "n.",
            "en": "back"
          },
          {
            "cn": "笔",
            "pos": "n.",
            "en": "pen; pencil"
          },
          {
            "cn": "帮",
            "pos": "v.",
            "en": "help"
          }
        ]
      },
      {
        "id": "10-02",
        "title": {
          "cn": "在房间聊学习",
          "en": "Talking about studying",
          "emoji": "📚"
        },
        "intro": {
          "cn": "在房间，王一雪和刘小雪在聊学习。",
          "en": "In the room, Wang Yixue and Liu Xiaoxue were talking about studying."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-10/10-3.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-10/10-4.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "刘小雪在做什么？",
            "options": [
              "看书",
              "考试",
              "找本子"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "做错的题在哪儿？",
            "options": [
              "书上",
              "本子上",
              "书包里"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "王一雪",
            "cn": "小雪，你在做什么呢？",
            "en": "Xiaoxue, what are you doing?"
          },
          {
            "speaker": "刘小雪",
            "cn": "明天考试，我在看书呢。",
            "en": "I have an exam tomorrow, so I'm reading."
          },
          {
            "speaker": "王一雪",
            "cn": "这些词要好好看看。",
            "en": "You should review these words carefully."
          },
          {
            "speaker": "刘小雪",
            "cn": "我看过了，意思也都懂了。",
            "en": "I've already reviewed them, and I understand their meanings."
          },
          {
            "speaker": "王一雪",
            "cn": "你的本子呢？本子上做错的题也要看一看。",
            "en": "Where's your notebook? You should also go over the questions you got wrong in it."
          },
          {
            "speaker": "刘小雪",
            "cn": "妈妈，是您准备考试还是我准备考试？",
            "en": "Mom! Are you the one preparing for the exam or am I?"
          }
        ],
        "postQuestions": [
          {
            "q": "刘小雪明天要做什么？"
          },
          {
            "q": "这些词的意思刘小雪都懂了吗？"
          }
        ],
        "words": [
          {
            "cn": "考试",
            "pos": "v./n.",
            "en": "take an examination; examination"
          },
          {
            "cn": "词",
            "pos": "n.",
            "en": "word"
          },
          {
            "cn": "本子",
            "pos": "n.",
            "en": "notebook"
          },
          {
            "cn": "错",
            "pos": "adj.",
            "en": "wrong; mistaken"
          },
          {
            "cn": "题",
            "pos": "n.",
            "en": "question; problem"
          },
          {
            "cn": "还是",
            "pos": "conj.",
            "en": "or"
          }
        ]
      },
      {
        "id": "10-03",
        "title": {
          "cn": "在客厅聊考试",
          "en": "Talking about the exam in the living room",
          "emoji": "🍵"
        },
        "intro": {
          "cn": "在客厅，王一雪和孩子们在聊天儿。",
          "en": "In the living room, Wang Yixue was chatting with the children."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-10/10-5.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-10/10-6.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "刘小雪考试考得怎么样？",
            "options": [
              "很不好",
              "没上次好",
              "比上次好"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "王一雪正在做什么？",
            "options": [
              "考试",
              "做菜",
              "洗手"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "刘小雪",
            "cn": "妈妈，我回来了！",
            "en": "Mom, I'm back!"
          },
          {
            "speaker": "王一雪",
            "cn": "我买了奶茶，就在桌子上，自己去拿吧。",
            "en": "I bought you a cup of bubble tea; it's on the table, get it by yourself."
          },
          {
            "speaker": "刘小雪",
            "cn": "谢谢妈妈！",
            "en": "Thank you, Mom!"
          },
          {
            "speaker": "王一雪",
            "cn": "今天考试考得怎么样？",
            "en": "How was your exam today?"
          },
          {
            "speaker": "刘小雪",
            "cn": "我觉得比上次好。",
            "en": "I think I did better than last time."
          },
          {
            "speaker": "王一雪",
            "cn": "真不错！饭菜快要做好了，你叫弟弟一起去洗手吧。",
            "en": "You are amazing! The food is almost ready. Go ask your little brother to wash his hands together with you."
          },
          {
            "speaker": "刘小明",
            "cn": "妈妈，我是第一名，姐姐还没洗完呢。",
            "en": "Mom, I'm the first one done; my sister hasn't finished yet."
          },
          {
            "speaker": "王一雪",
            "cn": "你洗得真快啊！",
            "en": "You washed your hands so quickly!"
          }
        ],
        "postQuestions": [
          {
            "q": "王一雪叫刘小雪做什么？"
          },
          {
            "q": "孩子们洗完手了吗？"
          }
        ],
        "words": [
          {
            "cn": "考",
            "pos": "v.",
            "en": "take an examination"
          },
          {
            "cn": "快要",
            "pos": "adv.",
            "en": "on the verge of, about to"
          }
        ]
      },
      {
        "id": "10-04",
        "title": {
          "cn": "在房间写日记",
          "en": "Writing a diary in the room",
          "emoji": "📔"
        },
        "intro": {
          "cn": "在房间，刘小雪在写日记。",
          "en": "In the room, Liu Xiaoxue was writing in her diary."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-10/10-7.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-10/10-8.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "判断正误：刘小雪考试前，爸爸帮她准备考试。",
            "options": [
              "对",
              "错"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "判断正误：刘小雪和弟弟上学，爸爸、妈妈比他们还忙。",
            "options": [
              "对",
              "错"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "快要开学了，爸爸帮弟弟准备书包、本子和笔。",
            "en": "School is about to start, and dad is helping my younger brother prepare his schoolbag, notebooks, and pens."
          },
          {
            "speaker": "",
            "cn": "我就要考试了，妈妈让我看书、看做错的题。",
            "en": "I'm about to take an exam, and mom asked me to read the books and review the questions I got wrong."
          },
          {
            "speaker": "",
            "cn": "我们上学，爸爸、妈妈比我们还忙。我问他们：“是我和弟弟上学还是你们上学？”我问完，他们都笑了。",
            "en": "It feels like our parents are even busier than us when it comes to school. I asked them, “Is it my younger brother and me going to school, or is it you?” After I asked, they both burst out laughing."
          }
        ],
        "postQuestions": [],
        "words": [
          {
            "cn": "笑",
            "pos": "v.",
            "en": "smile; laugh"
          }
        ]
      }
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "后面",
            "错",
            "帮",
            "考试",
            "笑"
          ],
          "items": [
            {
              "cn": "看到生日礼物，儿子高兴地____了。",
              "answer": ""
            },
            {
              "cn": "小雪，你们什么时候____？你准备好了吗？",
              "answer": ""
            },
            {
              "cn": "我们公司____有一个商店，下班后我就去那儿买东西。",
              "answer": ""
            },
            {
              "cn": "A：不好意思，你能____我叫一下白家月吗？ B：没问题，你等一下。",
              "answer": ""
            },
            {
              "cn": "A：这个字写____了，左边是“口”，不是“日”。 B：好的，我知道了。",
              "answer": ""
            }
          ]
        },
        "group2": {
          "options": [],
          "items": []
        }
      },
      "describePictures": [],
      "classroomActivity": {
        "cn": "双人活动",
        "en": "Pair Work",
        "description": "两人一组，讨论学习情况，互相询问学会了什么，学得怎么样，有没有做错的题，等等。尽可能使用本课所学生词和语法。",
        "descriptionEn": "Work in pairs. Discuss your learning progress by asking each other about what you have learned, how you are doing, and if you made any mistakes in your work, among other things. Try to use the vocabulary and grammar learned in this lesson as much as possible.",
        "topics": []
      }
    }
  },
  {
    "name": "L11 · 我最喜欢吃中国菜",
    "id": "11",
    "core": [
      {
        "hanzi": "头",
        "en": "head"
      },
      {
        "hanzi": "疼",
        "en": "hurt"
      },
      {
        "hanzi": "经常",
        "en": "frequently; often"
      },
      {
        "hanzi": "动",
        "en": "move"
      },
      {
        "hanzi": "着",
        "en": "used after a verb or an adjective to indicate the continuation of an action or a state"
      },
      {
        "hanzi": "路上",
        "en": "road; trip"
      },
      {
        "hanzi": "慢",
        "en": "slow"
      },
      {
        "hanzi": "进",
        "en": "come into"
      },
      {
        "hanzi": "药",
        "en": "medicine"
      },
      {
        "hanzi": "身体",
        "en": "body; health"
      },
      {
        "hanzi": "时",
        "en": "a period of time"
      },
      {
        "hanzi": "最",
        "en": "most"
      },
      {
        "hanzi": "药店",
        "en": "pharmacy"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "11-01",
        "title": {
          "cn": "在教室",
          "en": "In the classroom",
          "emoji": "🏫"
        },
        "intro": {
          "cn": "在教室，王一飞和白家月在聊天儿。",
          "en": "In the classroom, Wang Yifei and Bai Jiayue were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-11/11-1.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-11/11-2.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "白家月现在在哪儿？",
            "options": [
              "医院",
              "家里",
              "教室"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "王一飞现在去做什么？",
            "options": [
              "开车",
              "回家",
              "找医生"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "王一飞",
            "cn": "家月，都下课了，你怎么还不回家？",
            "en": "Jiayue, class is over. Why aren't you going home?"
          },
          {
            "speaker": "白家月",
            "cn": "我头疼，不太舒服。",
            "en": "I have a headache. I'm not feeling well."
          },
          {
            "speaker": "王一飞",
            "cn": "你这几天经常头疼，去医院看看吧。",
            "en": "You've been having headaches frequently these days. You should go to the hospital."
          },
          {
            "speaker": "白家月",
            "cn": "我想休息一下，现在不能动，一动就疼。",
            "en": "I want to rest for a while. I can't move right now—it hurts whenever I move."
          },
          {
            "speaker": "王一飞",
            "cn": "那你在这儿坐着，我去开车，一会儿送你去医院。",
            "en": "Then stay here and sit. I'll go get the car and take you to the hospital in a bit."
          },
          {
            "speaker": "白家月",
            "cn": "谢谢王老师。",
            "en": "Thank you, Ms. Wang."
          }
        ],
        "postQuestions": [
          {
            "q": "白家月为什么不回家？"
          },
          {
            "q": "白家月现在能不能动？为什么？"
          }
        ],
        "words": [
          {
            "cn": "头",
            "pos": "n.",
            "en": "head"
          },
          {
            "cn": "疼",
            "pos": "adj.",
            "en": "hurt"
          },
          {
            "cn": "经常",
            "pos": "adv.",
            "en": "frequently; often"
          },
          {
            "cn": "动",
            "pos": "v.",
            "en": "move"
          },
          {
            "cn": "着",
            "pos": "part.",
            "en": "used after a verb or an adjective to indicate the continuation of an action or a state"
          }
        ]
      },
      {
        "id": "11-02",
        "title": {
          "cn": "在王一飞车里",
          "en": "In Wang Yifei's car",
          "emoji": "🚗"
        },
        "intro": {
          "cn": "在王一飞车里，王一飞和白家月在聊天儿，李文打来一个电话。",
          "en": "In Wang Yifei's car, Wang Yifei and Bai Jiayue were chatting, and Li Wen made a phone call."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-11/11-3.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-11/11-4.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一飞在做什么？",
            "options": [
              "开车",
              "看病",
              "接电话"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "今天天气怎么样？",
            "options": [
              "很好",
              "下雨",
              "下雪"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "王一飞",
            "cn": "现在路上车多，还下着雪，我开慢一点儿。",
            "en": "There are a lot of cars on the road right now, and it's snowing. I'll drive a bit slower."
          },
          {
            "speaker": "白家月",
            "cn": "没问题，现在头没那么疼了。",
            "en": "No problem. My head doesn't hurt as much now."
          },
          {
            "speaker": "王一飞",
            "cn": "好。李文来电话了，你帮我接一下。",
            "en": "Okay. Li Wen is calling; please answer it for me."
          },
          {
            "speaker": "白家月",
            "cn": "喂，李文，王老师开着车呢，你找她有事吗？",
            "en": "Hello, Li Wen. Ms. Wang is driving right now. Do you need to talk to her?"
          },
          {
            "speaker": "李文",
            "cn": "没什么事。今天雪这么大，你们开车去哪儿啊？",
            "en": "It's nothing important. The snow is so heavy today. Where are you driving to?"
          },
          {
            "speaker": "白家月",
            "cn": "去医院，我头有点儿疼。",
            "en": "To the hospital. I have a bit of a headache."
          },
          {
            "speaker": "李文",
            "cn": "那我一会儿去看看你。",
            "en": "Then I'll come visit you later."
          }
        ],
        "postQuestions": [
          {
            "q": "王一飞为什么开慢一点儿？"
          },
          {
            "q": "李文一会儿要做什么？"
          }
        ],
        "words": [
          {
            "cn": "路上",
            "pos": "n.",
            "en": "road; trip"
          },
          {
            "cn": "慢",
            "pos": "adj.",
            "en": "slow"
          }
        ]
      },
      {
        "id": "11-03",
        "title": {
          "cn": "在房间看望白家月",
          "en": "Visiting Bai Jiayue in her room",
          "emoji": "🛏️"
        },
        "intro": {
          "cn": "在房间，李文来看望白家月。",
          "en": "In the room, Li Wen came to visit Bai Jiayue."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-11/11-5.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-11/11-6.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "白家月现在怎么样了？",
            "options": [
              "不想吃饭",
              "身体不舒服",
              "头不那么疼了"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "王一飞现在要做什么？",
            "options": [
              "去买药",
              "找医生",
              "去做菜"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "白家月",
            "cn": "李文，快请进！",
            "en": "Li Wen, please come in!"
          },
          {
            "speaker": "李文",
            "cn": "家月，你怎么样了？头还疼吗？",
            "en": "Jiayue, how are you feeling? Does your head still hurt?"
          },
          {
            "speaker": "白家月",
            "cn": "不那么疼了。医生开了一些药，吃完就好多了。",
            "en": "It doesn't hurt much. The doctor prescribed some medicine, and I feel much better after taking it."
          },
          {
            "speaker": "李文",
            "cn": "那就好！",
            "en": "That's good to hear!"
          },
          {
            "speaker": "王一飞",
            "cn": "家月，你想不想吃点儿东西？",
            "en": "Jiayue, do you want something to eat?"
          },
          {
            "speaker": "李文",
            "cn": "吃点儿吧，身体不舒服时更要好好吃饭。",
            "en": "Eat some. You should eat well when you feel uncomfortable."
          },
          {
            "speaker": "白家月",
            "cn": "吃点儿什么呢？",
            "en": "What should I eat?"
          },
          {
            "speaker": "王一飞",
            "cn": "你最喜欢吃中国菜，我做几个中国菜吧。",
            "en": "You like Chinese food the most, so I'll cook some Chinese dishes."
          },
          {
            "speaker": "白家月",
            "cn": "好的，谢谢王老师。",
            "en": "Okay, thank you, Ms. Wang."
          }
        ],
        "postQuestions": [
          {
            "q": "白家月为什么头不那么疼了？"
          },
          {
            "q": "李文让白家月做什么？"
          }
        ],
        "words": [
          {
            "cn": "进",
            "pos": "v.",
            "en": "come into"
          },
          {
            "cn": "药",
            "pos": "n.",
            "en": "medicine"
          },
          {
            "cn": "身体",
            "pos": "n.",
            "en": "body; health"
          },
          {
            "cn": "时",
            "pos": "n.",
            "en": "a period of time"
          },
          {
            "cn": "最",
            "pos": "adv.",
            "en": "most"
          }
        ]
      },
      {
        "id": "11-04",
        "title": {
          "cn": "在房间写日记",
          "en": "Writing a diary in the room",
          "emoji": "📔"
        },
        "intro": {
          "cn": "在房间，白家月在写日记。",
          "en": "In the room, Bai Jiayue was writing in her diary."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-11/11-7.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-11/11-8.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "判断正误：这几天天气不好，所以白家月生病了。",
            "options": [
              "对",
              "错"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "判断正误：因为头疼，所以白家月自己去了医院。",
            "options": [
              "对",
              "错"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "我这几天经常头疼，从药店买了点儿药，没去医院。",
            "en": "I've been having frequent headaches these days, so I bought some medicine at the pharmacy and didn't go to the hospital."
          },
          {
            "speaker": "",
            "cn": "今天下课后，王老师看我不舒服，就送我去医院了。",
            "en": "After class today, Ms. Wang noticed I wasn't feeling well and took me to the hospital."
          },
          {
            "speaker": "",
            "cn": "从医院回来，李文也来看我了。现在他们都回去了，我也要睡觉了。",
            "en": "When I got back from the hospital, Li Wen came to visit me. Now they've gone back home, and I am going to bed."
          }
        ],
        "postQuestions": [],
        "words": [
          {
            "cn": "药店",
            "pos": "n.",
            "en": "pharmacy"
          }
        ]
      }
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "经常",
            "慢",
            "时",
            "身体",
            "路上"
          ],
          "items": [
            {
              "cn": "____车多人多，你慢点儿开。",
              "answer": ""
            },
            {
              "cn": "他今天____不舒服，所以没来上课。",
              "answer": ""
            },
            {
              "cn": "我游泳游得很____，但我跑步跑得很快。",
              "answer": ""
            },
            {
              "cn": "A：____星期天我跟朋友去踢球。 B：我也喜欢踢球，下次叫我一起去吧。",
              "answer": ""
            },
            {
              "cn": "A：昨天雪太大，公交车开得很慢。 B：是啊，我到家都快9点了。",
              "answer": ""
            }
          ]
        },
        "group2": {
          "options": [],
          "items": []
        }
      },
      "describePictures": [],
      "classroomActivity": {
        "cn": "角色扮演",
        "en": "Role-Play",
        "description": "两人一组，一人扮演医生，一人扮演病人。病人头疼，所以来医院看病，医生询问什么时候开始疼的、吃过药没有、最近做过什么，等等。尽可能使用本课所学生词和语法。",
        "descriptionEn": "Work in pairs. One student plays the doctor and the other plays the patient. The patient has a headache and comes to the hospital for treatment. The doctor asks questions such as when the headache started, whether the patient has taken any medicine, what the patient has been doing recently, and so on. Try to use the vocabulary and grammar learned in this lesson as much as possible.",
        "topics": []
      }
    }
  },
  {
    "name": "L12 · 这里比北京冷多了",
    "id": "12",
    "core": [
      {
        "hanzi": "事情",
        "en": "affair; matter"
      },
      {
        "hanzi": "晴",
        "en": "sunny"
      },
      {
        "hanzi": "正",
        "en": "indicating an action just happening or a state just continuing"
      },
      {
        "hanzi": "外面",
        "en": "outside"
      },
      {
        "hanzi": "阴",
        "en": "cloudy"
      },
      {
        "hanzi": "从小",
        "en": "since childhood"
      },
      {
        "hanzi": "地铁",
        "en": "subway"
      },
      {
        "hanzi": "楼",
        "en": "building"
      },
      {
        "hanzi": "站",
        "en": "stop; station"
      },
      {
        "hanzi": "小时候",
        "en": "childhood"
      },
      {
        "hanzi": "好",
        "en": "very; quite"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "12-01",
        "title": {
          "cn": "接白家月的电话",
          "en": "Receiving Bai Jiayue's call",
          "emoji": "📞"
        },
        "intro": {
          "cn": "在房间，王一雪接到白家月的电话。",
          "en": "In the room, Wang Yixue was receiving a call from Bai Jiayue."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-12/12-1.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-12/12-2.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "白家月今天什么时候有课？",
            "options": [
              "上午",
              "下午",
              "晚上"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "北京天气怎么样？",
            "options": [
              "不是晴天",
              "正下着雪",
              "有点儿冷"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "王一雪",
            "cn": "喂，家月，是你啊！有什么事情吗？",
            "en": "Hello, Jiayue, it's you! Is there anything you need?"
          },
          {
            "speaker": "白家月",
            "cn": "没什么事，就想跟您说说话。",
            "en": "Nothing important. I just want to talk to you."
          },
          {
            "speaker": "王一雪",
            "cn": "好啊。你今天没课吗？",
            "en": "Alright. Don't you have class today?"
          },
          {
            "speaker": "白家月",
            "cn": "下午有课。您那里天气怎么样？",
            "en": "The class is in the afternoon. How's the weather in your place?"
          },
          {
            "speaker": "王一雪",
            "cn": "北京这几天虽然是晴天，但是有点儿冷。",
            "en": "Although it's sunny in Beijing these days, it's a bit cold."
          },
          {
            "speaker": "白家月",
            "cn": "我这里比北京冷多了，外边还正下着雪呢！",
            "en": "It's much colder here than in Beijing, and it's snowing outside right now!"
          }
        ],
        "postQuestions": [
          {
            "q": "白家月为什么打电话？"
          },
          {
            "q": "白家月那里的天气怎么样？"
          }
        ],
        "words": [
          {
            "cn": "事情",
            "pos": "n.",
            "en": "affair; matter"
          },
          {
            "cn": "晴",
            "pos": "adj.",
            "en": "sunny"
          },
          {
            "cn": "正",
            "pos": "adv.",
            "en": "indicating an action just happening or a state just continuing"
          }
        ]
      },
      {
        "id": "12-02",
        "title": {
          "cn": "给王一飞打电话",
          "en": "Calling Wang Yifei",
          "emoji": "☎️"
        },
        "intro": {
          "cn": "在客厅，王一雪给王一飞打电话。",
          "en": "In the living room, Wang Yixue was making a call to Wang Yifei."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-12/12-3.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-12/12-4.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一飞那里的天气怎么样？",
            "options": [
              "晴",
              "阴",
              "下雪"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "王一飞现在要去做什么？",
            "options": [
              "上课",
              "穿衣服",
              "买吃的"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "王一雪",
            "cn": "喂，一飞，听家月说你那边下雪了，下得大不大？",
            "en": "Hello, Yifei! I heard from Jiayue that it was snowing over there. Is it heavy?"
          },
          {
            "speaker": "王一飞",
            "cn": "今天不大，昨天比今天下得大。",
            "en": "Not heavy today. Yesterday's snow was heavier than today's."
          },
          {
            "speaker": "王一雪",
            "cn": "天气不好，你去外面的时候多穿点儿衣服。",
            "en": "The weather isn't good. Wear more clothes when you go outside."
          },
          {
            "speaker": "王一飞",
            "cn": "这几天我在网上上课，没出去过。",
            "en": "I've been teaching online these days, so I haven't gone out."
          },
          {
            "speaker": "王一雪",
            "cn": "那就好，有事记得给我打电话。",
            "en": "Alright, call me if you need any help."
          },
          {
            "speaker": "王一飞",
            "cn": "好的。现在不下雪了，我出去买点儿吃的。",
            "en": "Alright. It's not snowing now, so I'll go out to buy some food."
          },
          {
            "speaker": "王一雪",
            "cn": "一次多买点儿，阴天下雪什么的就少出去吧。",
            "en": "Buy more at once, and try to go out less when it's cloudy or snowy."
          }
        ],
        "postQuestions": [
          {
            "q": "王一飞这几天怎么给学生们上课？"
          },
          {
            "q": "王一雪为什么让王一飞多买点儿吃的？"
          }
        ],
        "words": [
          {
            "cn": "外面",
            "pos": "n.",
            "en": "outside"
          },
          {
            "cn": "阴",
            "pos": "adj.",
            "en": "cloudy"
          }
        ]
      },
      {
        "id": "12-03",
        "title": {
          "cn": "接李文的电话",
          "en": "Receiving Li Wen's call",
          "emoji": "🏃"
        },
        "intro": {
          "cn": "在房间，李文给白家月打电话。",
          "en": "In the room, Li Wen was making a call to Bai Jiayue."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-12/12-5.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-12/12-6.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "李文找白家月做什么？",
            "options": [
              "一起去跑步",
              "一起坐地铁",
              "一起见朋友"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "李文怎么去找白家月？",
            "options": [
              "跑步",
              "打车",
              "坐地铁"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "李文",
            "cn": "喂，家月，今天天气不错，我们去跑步吧！",
            "en": "Hello, Jiayue! The weather is nice today. Let's go for a run!"
          },
          {
            "speaker": "白家月",
            "cn": "你跑步跑得比我快，我们能一起跑吗？",
            "en": "You run faster than me. Can we run together?"
          },
          {
            "speaker": "李文",
            "cn": "可以的，我慢慢跑，等着你。",
            "en": "It's OK. I'll run slowly and wait for you."
          },
          {
            "speaker": "白家月",
            "cn": "好吧。你真爱跑步啊！",
            "en": "Alright. You really love running!"
          },
          {
            "speaker": "李文",
            "cn": "我从小就经常跟爸爸跑步，跑步能让人快乐！",
            "en": "I've been running with my dad since I was a child. Running makes people happy!"
          },
          {
            "speaker": "白家月",
            "cn": "好，那我准备一下。",
            "en": "Okay, I'll get ready."
          },
          {
            "speaker": "李文",
            "cn": "我现在坐地铁去找你，一会儿楼下见。",
            "en": "I'm taking the subway to meet you now. See you downstairs in a bit."
          }
        ],
        "postQuestions": [
          {
            "q": "李文是从什么时候开始跑步的？"
          },
          {
            "q": "李文和白家月在哪儿见？"
          }
        ],
        "words": [
          {
            "cn": "从小",
            "pos": "adv.",
            "en": "since childhood"
          },
          {
            "cn": "地铁",
            "pos": "n.",
            "en": "subway"
          },
          {
            "cn": "楼",
            "pos": "n.",
            "en": "building"
          }
        ]
      },
      {
        "id": "12-04",
        "title": {
          "cn": "在房间写日记",
          "en": "Writing a diary in the room",
          "emoji": "📔"
        },
        "intro": {
          "cn": "在房间，白家月在写日记。",
          "en": "In the room, Bai Jiayue was writing in her diary."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-12/12-7.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-12/12-8.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "判断正误：今天是个晴天，白家月去外面跑步了。",
            "options": [
              "对",
              "错"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "判断正误：白家月很喜欢跟李文一起跑步。",
            "options": [
              "对",
              "错"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "前几天天气不好，我没走路，每天坐两站地铁去学校。",
            "en": "The weather had been bad over the past few days, so I didn't walk to school; I took the subway for two stops to school every day."
          },
          {
            "speaker": "",
            "cn": "今天是个大晴天，李文让我跟他去外面跑步。他小时候经常跑步，跑得比我快，但是他会等我。",
            "en": "Today was a sunny day, and Li Wen asked me to go running outside with him. He often ran when he was a child. He ran faster than me, but he waited for me."
          },
          {
            "speaker": "",
            "cn": "跟李文一起跑步，我好高兴啊！",
            "en": "Running with Li Wen made me so happy!"
          }
        ],
        "postQuestions": [],
        "words": [
          {
            "cn": "站",
            "pos": "n.",
            "en": "stop; station"
          },
          {
            "cn": "小时候",
            "pos": "n.",
            "en": "childhood"
          },
          {
            "cn": "好",
            "pos": "adv.",
            "en": "very; quite"
          }
        ]
      }
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "事情",
            "正",
            "从小",
            "外面",
            "好"
          ],
          "items": [
            {
              "cn": "你看，前边的那个人____高啊！",
              "answer": ""
            },
            {
              "cn": "今天的天气没有昨天好，____正下着雨呢。",
              "answer": ""
            },
            {
              "cn": "对不起，公司这几天____很多，太忙了，所以忘了你的生日。",
              "answer": ""
            },
            {
              "cn": "A：我____就爱动，经常跟朋友一起踢球、跑步。 B：所以你身体这么好！",
              "answer": ""
            },
            {
              "cn": "A：小雪在做什么呢？ B：快要考试了，她____看书呢。",
              "answer": ""
            }
          ]
        },
        "group2": {
          "options": [],
          "items": []
        }
      },
      "describePictures": [],
      "classroomActivity": {
        "cn": "双人活动",
        "en": "Pair Work",
        "description": "两人一组，打电话谈论天气情况，并对比不同地方的天气差异，等等。尽可能使用本课所学生词和语法。",
        "descriptionEn": "Work in pairs. Make a phone call to talk about the weather conditions, compare the weather in different places, and so on. Try to use the vocabulary and grammar learned in this lesson as much as possible.",
        "topics": []
      }
    }
  },
  {
    "name": "L13 · 我们爱上中文课",
    "id": "13",
    "core": [
      {
        "hanzi": "新年",
        "en": "New Year"
      },
      {
        "hanzi": "教",
        "en": "teach"
      },
      {
        "hanzi": "花",
        "en": "flower"
      },
      {
        "hanzi": "希望",
        "en": "hope; wish"
      },
      {
        "hanzi": "上面",
        "en": "surface of an object"
      },
      {
        "hanzi": "洗手间",
        "en": "washroom; restroom"
      },
      {
        "hanzi": "里面",
        "en": "inside"
      },
      {
        "hanzi": "笔",
        "en": "stroke"
      },
      {
        "hanzi": "可能",
        "en": "probably; can"
      },
      {
        "hanzi": "上网",
        "en": "go online"
      },
      {
        "hanzi": "那样",
        "en": "so that"
      },
      {
        "hanzi": "告诉",
        "en": "tell"
      },
      {
        "hanzi": "班",
        "en": "class"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "13-01",
        "title": {
          "cn": "在教室商量新年礼物",
          "en": "Choosing a New Year gift",
          "emoji": "🌸"
        },
        "intro": {
          "cn": "在教室，白家月和陈天中在聊天儿。",
          "en": "In the classroom, Bai Jiayue and Chen Tianzhong were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-13/13-1.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-13/13-2.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "同学们想送给王老师什么？",
            "options": [
              "花",
              "衣服",
              "中文书"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "同学们今天要去哪儿看看？",
            "options": [
              "教室",
              "花店",
              "商店"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "白家月",
            "cn": "时间过得真快啊！新年就要到了。",
            "en": "Time flies! The New Year is almost here."
          },
          {
            "speaker": "陈天中",
            "cn": "这一年王老师教我们中文，每天工作都很累。",
            "en": "This year, Ms. Wang has been teaching us Chinese, and she works so hard every day."
          },
          {
            "speaker": "白家月",
            "cn": "是啊，她教得很好。因为她，我们都非常爱上中文课。",
            "en": "Yes, she teaches very well. Because of her, we all love attending Chinese class."
          },
          {
            "speaker": "陈天中",
            "cn": "我们给她准备个新年礼物吧。你觉得送给她什么好呢？",
            "en": "Let's prepare a New Year's gift for her. What do you think we can present to her?"
          },
          {
            "speaker": "白家月",
            "cn": "王老师喜欢花，就送给她花吧。",
            "en": "Ms. Wang likes flowers. I think we can give her flowers."
          },
          {
            "speaker": "陈天中",
            "cn": "那我们去花店看看，现在买花的人多，希望花店还有漂亮的花。",
            "en": "Then let's go to the flower shop; there are many people buying flowers now. I hope there are still some beautiful flowers in the shop."
          }
        ],
        "postQuestions": [
          {
            "q": "同学们为什么爱上中文课？"
          },
          {
            "q": "陈天中希望花店现在还有什么？"
          }
        ],
        "words": [
          {
            "cn": "新年",
            "pos": "n.",
            "en": "New Year"
          },
          {
            "cn": "教",
            "pos": "v.",
            "en": "teach"
          },
          {
            "cn": "花",
            "pos": "n.",
            "en": "flower"
          },
          {
            "cn": "希望",
            "pos": "v.",
            "en": "hope; wish"
          }
        ]
      },
      {
        "id": "13-02",
        "title": {
          "cn": "在上课",
          "en": "In class",
          "emoji": "✍️"
        },
        "intro": {
          "cn": "在教室，王一飞在上课。",
          "en": "In the classroom, Wang Yifei was teaching."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-13/13-3.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-13/13-4.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "今天的词比昨天多多少？",
            "options": [
              "四个",
              "七个",
              "十个"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "同学们写错了哪个字？",
            "options": [
              "口",
              "日",
              "间"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "白家月",
            "cn": "王老师，今天的词比昨天多了十个。",
            "en": "Ms. Wang, today's vocabulary has ten more words than yesterday's."
          },
          {
            "speaker": "王一飞",
            "cn": "是啊！你们都学会了吗？",
            "en": "Yes! Have you all learned them?"
          },
          {
            "speaker": "白家月",
            "cn": "学会了，没有问题。",
            "en": "We've learned them. No problem."
          },
          {
            "speaker": "王一飞",
            "cn": "好。现在我来说，你们在本子上面写。",
            "en": "Good. Now I'll say them, and you write them down in your notebooks."
          },
          {
            "speaker": "王一飞",
            "cn": "同学们，“洗手间”的“间”字写错了，它的里面是“日”，不是“口”。",
            "en": "Class, the character “间” in “洗手间” is wrong. The part inside is “日”, not “口”."
          },
          {
            "speaker": "白家月",
            "cn": "“日”比“口”多一笔，写“口”就是“问题”的“问”了。",
            "en": "“日” has one more stroke than “口”. Writing “口” turns it into the “问” in “问题”."
          },
          {
            "speaker": "王一飞",
            "cn": "没错，你说得很对。",
            "en": "Yes, you are right."
          }
        ],
        "postQuestions": [
          {
            "q": "王老师让同学们在哪儿写字？"
          },
          {
            "q": "“间”比“问”多几笔？"
          }
        ],
        "words": [
          {
            "cn": "上面",
            "pos": "n.",
            "en": "surface of an object"
          },
          {
            "cn": "洗手间",
            "pos": "n.",
            "en": "washroom; restroom"
          },
          {
            "cn": "里面",
            "pos": "n.",
            "en": "inside"
          },
          {
            "cn": "笔",
            "pos": "m.",
            "en": "stroke"
          }
        ]
      },
      {
        "id": "13-03",
        "title": {
          "cn": "在教室聊本子",
          "en": "Talking about a notebook",
          "emoji": "📓"
        },
        "intro": {
          "cn": "在教室，安妮和白家月在聊天儿。",
          "en": "In the classroom, Annie and Bai Jiayue were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-13/13-5.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-13/13-6.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "这个本子是在哪儿买的？",
            "options": [
              "商店",
              "超市",
              "网上"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "安妮让白家月送给她什么礼物？",
            "options": [
              "本子",
              "咖啡",
              "咖啡杯"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "安妮",
            "cn": "家月，你觉得这个本子怎么样？",
            "en": "Jiayue, what do you think of this notebook?"
          },
          {
            "speaker": "白家月",
            "cn": "很漂亮，多少钱一个？",
            "en": "It's very pretty. How much is it?"
          },
          {
            "speaker": "安妮",
            "cn": "比我们一起买的那个本子贵一点儿。",
            "en": "It's a bit more expensive than the notebook we bought together."
          },
          {
            "speaker": "白家月",
            "cn": "这么漂亮的本子，不可能贵一点儿吧？",
            "en": "For such a beautiful notebook, it couldn't be just a little more expensive, right?"
          },
          {
            "speaker": "安妮",
            "cn": "我是上网买的，真没那么贵。我买了两个，送你一个。",
            "en": "I bought it online, and it's really not that expensive. I bought two and will give you one."
          },
          {
            "speaker": "白家月",
            "cn": "谢谢！那我送给你什么呢？",
            "en": "Thank you! Then what should I give you in return?"
          },
          {
            "speaker": "安妮",
            "cn": "咖啡杯吧，我最喜欢喝咖啡了。",
            "en": "A coffee cup would be great. I like drinking coffee the most."
          },
          {
            "speaker": "白家月",
            "cn": "好，那样我们就都有新年礼物了！",
            "en": "Alright! Then we'll both have New Year's gifts!"
          }
        ],
        "postQuestions": [
          {
            "q": "白家月觉得这个本子怎么样？"
          },
          {
            "q": "白家月和安妮都有新年礼物了吗？"
          }
        ],
        "words": [
          {
            "cn": "可能",
            "pos": "v.",
            "en": "probably; can"
          },
          {
            "cn": "上网",
            "pos": "v.",
            "en": "go online"
          },
          {
            "cn": "那样",
            "pos": "pron.",
            "en": "so that"
          }
        ]
      },
      {
        "id": "13-04",
        "title": {
          "cn": "在房间写日记",
          "en": "Writing a diary in the room",
          "emoji": "📔"
        },
        "intro": {
          "cn": "在房间，白家月在写日记。",
          "en": "In the room, Bai Jiayue was writing in her diary."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-13/13-7.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-13/13-8.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "判断正误：安妮送了白家月一个新年礼物。",
            "options": [
              "对",
              "错"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "判断正误：白家月送了王老师漂亮的花。",
            "options": [
              "对",
              "错"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "新年就要到了，安妮送给我一个新本子。她告诉我是在网上买的，比我的本子贵一点儿。",
            "en": "The New Year is almost here. Annie gave me a new notebook. She told me she bought it online, and it's a bit more expensive than mine."
          },
          {
            "speaker": "",
            "cn": "我们班同学也送了王老师漂亮的花，希望她高高兴兴地过个新年。",
            "en": "Our classmates also gave Ms. Wang beautiful flowers, hoping she will have a happy New Year."
          }
        ],
        "postQuestions": [],
        "words": [
          {
            "cn": "告诉",
            "pos": "v.",
            "en": "tell"
          },
          {
            "cn": "班",
            "pos": "n.",
            "en": "class"
          }
        ]
      }
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "上网",
            "可能",
            "班",
            "告诉",
            "里面"
          ],
          "items": [
            {
              "cn": "你们____有多少学生？",
              "answer": ""
            },
            {
              "cn": "我经常____听歌、看电影。",
              "answer": ""
            },
            {
              "cn": "教室的门开着，但是____没有人。",
              "answer": ""
            },
            {
              "cn": "A：小李呢？我找她有点儿事。 B：____去洗手间了。她回来后，我让她去找你。",
              "answer": ""
            },
            {
              "cn": "A：姐姐，家月____我你已经接到她们了。谢谢你！ B：不客气，你的朋友就是我的朋友。",
              "answer": ""
            }
          ]
        },
        "group2": {
          "options": [],
          "items": []
        }
      },
      "describePictures": [],
      "classroomActivity": {
        "cn": "双人活动",
        "en": "Pair Work",
        "description": "新年就要到了，两人一组，互相赠送礼物，并邀请对方来家里聚会，等等。尽可能使用本课所学生词和语法。",
        "descriptionEn": "The New Year is approaching. Work in pairs and exchange gifts, invite your partner to a party at your home, and so on. Try to use the vocabulary and grammar learned in this lesson as much as possible.",
        "topics": []
      }
    }
  },
  {
    "name": "L14 · 一个人过年多没意思啊",
    "id": "14",
    "core": [
      {
        "hanzi": "站",
        "en": "stand"
      },
      {
        "hanzi": "包",
        "en": "bag; wrap; bundle"
      },
      {
        "hanzi": "过年",
        "en": "celebrate the Spring Festival"
      },
      {
        "hanzi": "没意思",
        "en": "boring"
      },
      {
        "hanzi": "位",
        "en": "used in deferential reference to people"
      },
      {
        "hanzi": "前面",
        "en": "front"
      },
      {
        "hanzi": "房子",
        "en": "house"
      },
      {
        "hanzi": "小孩儿",
        "en": "child; kid"
      },
      {
        "hanzi": "女孩儿",
        "en": "girl"
      },
      {
        "hanzi": "姓",
        "en": "be surnamed"
      },
      {
        "hanzi": "眼睛",
        "en": "eye"
      },
      {
        "hanzi": "跳舞",
        "en": "dance"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "14-01",
        "title": {
          "cn": "在回家路上",
          "en": "On the way home",
          "emoji": "🚶"
        },
        "intro": {
          "cn": "在回家路上，李文和王一飞边走边聊。",
          "en": "On their way home, Li Wen and Wang Yifei were walking and chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-14/14-1.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-14/14-2.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "李文看见哪儿有一个人？",
            "options": [
              "教室外面",
              "王一飞家里",
              "王一飞家楼下"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "那个人手里拿着什么？",
            "options": [
              "黑色的包",
              "黑色的裤子",
              "黑色的本子"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "李文",
            "cn": "王老师，你家楼下站着一个人。",
            "en": "Ms. Wang, there's someone standing downstairs at your building."
          },
          {
            "speaker": "王一飞",
            "cn": "我家楼下？我看看。",
            "en": "Downstairs at my building? Let me take a look."
          },
          {
            "speaker": "李文",
            "cn": "那个人穿着黑色的裤子，手里还拿着一个黑色的包。",
            "en": "That person is wearing black pants and holding a black bag."
          },
          {
            "speaker": "王一飞",
            "cn": "我看见那个人了，他是我的男朋友。",
            "en": "I see him. He is my boyfriend."
          },
          {
            "speaker": "李文",
            "cn": "那我们快过去吧。",
            "en": "Let's go over quickly then."
          }
        ],
        "postQuestions": [
          {
            "q": "那个人穿着什么？"
          },
          {
            "q": "那个人是来找谁的？"
          }
        ],
        "words": [
          {
            "cn": "站",
            "pos": "v.",
            "en": "stand"
          },
          {
            "cn": "包",
            "pos": "n./v./m.",
            "en": "bag; wrap; bundle"
          }
        ]
      },
      {
        "id": "14-02",
        "title": {
          "cn": "在楼下见面",
          "en": "Meeting downstairs",
          "emoji": "🤝"
        },
        "intro": {
          "cn": "在楼下，王一飞见到杨同乐。",
          "en": "Downstairs, Wang Yifei met Yang Tongle."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-14/14-3.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-14/14-4.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "杨同乐为什么来找王一飞？",
            "options": [
              "跟她一起过年",
              "来见她的朋友",
              "送给她新年礼物"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "李文住在哪儿？",
            "options": [
              "这个楼",
              "前面那个楼",
              "旁边那个楼"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "王一飞",
            "cn": "同乐，真是你啊！上次打电话，你说有时间过来看我，没想到这么快就来了！",
            "en": "Tongle, it really is you! Last time we talked on the phone, you said you'd visit me when you had time. I didn't expect you to come so soon!"
          },
          {
            "speaker": "杨同乐",
            "cn": "就要过年了，你一个人在这儿多没意思啊，所以我就早早过来了。",
            "en": "The Spring Festival is almost here. It's no fun for you to be here all alone, so I came here as soon as possible."
          },
          {
            "speaker": "王一飞",
            "cn": "你能来，我太高兴了！",
            "en": "I'm so happy you could come!"
          },
          {
            "speaker": "杨同乐",
            "cn": "一飞，你旁边这位是？",
            "en": "Yifei, who's this next to you?"
          },
          {
            "speaker": "王一飞",
            "cn": "同乐，这是李文，他在我们学校学医。李文，这是我男朋友杨同乐。",
            "en": "Tongle, this is Li Wen. He's studying medicine at our school. Li Wen, this is my boyfriend, Yang Tongle."
          },
          {
            "speaker": "杨同乐",
            "cn": "李文，很高兴认识你！",
            "en": "Li Wen, nice to meet you!"
          },
          {
            "speaker": "李文",
            "cn": "认识你我也很高兴！我家就在前面那个楼，有时间来玩。",
            "en": "Nice to meet you too! My home is just in that building up ahead. Feel free to come over when you have time."
          }
        ],
        "postQuestions": [
          {
            "q": "杨同乐来了，王一飞高兴吗？"
          },
          {
            "q": "王一飞是怎么给他们介绍的？"
          }
        ],
        "words": [
          {
            "cn": "过年",
            "pos": "v.",
            "en": "celebrate the Spring Festival"
          },
          {
            "cn": "没意思",
            "pos": "",
            "en": "boring"
          },
          {
            "cn": "位",
            "pos": "m.",
            "en": "used in deferential reference to people"
          },
          {
            "cn": "前面",
            "pos": "n.",
            "en": "front"
          }
        ]
      },
      {
        "id": "14-03",
        "title": {
          "cn": "在客厅聊天",
          "en": "Chatting in the living room",
          "emoji": "🛋️"
        },
        "intro": {
          "cn": "在王一飞家里，王一飞和杨同乐在客厅聊天儿。",
          "en": "At Wang Yifei's home, Wang Yifei and Yang Tongle were chatting in the living room."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-14/14-5.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-14/14-6.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "王一飞的房子怎么样？",
            "options": [
              "很不错",
              "不太大",
              "离学校不近"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "王一飞教楼下的小孩儿做什么？",
            "options": [
              "打篮球",
              "学中文",
              "做中国菜"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "杨同乐",
            "cn": "一飞，你住的房子真不错，很大，离学校也不远。",
            "en": "Yifei, your house is really nice, very big, and not far from school."
          },
          {
            "speaker": "王一飞",
            "cn": "是啊！我楼下还住着一家中国人，他们人很好。",
            "en": "Yes! There's a Chinese family living downstairs, and they are very nice."
          },
          {
            "speaker": "杨同乐",
            "cn": "这样你有事情就可以找他们帮忙。",
            "en": "Then you can ask them for help if you ever need anything."
          },
          {
            "speaker": "王一飞",
            "cn": "对，我也帮他们家的小孩儿学中文。",
            "en": "Yes, I also help their child learn Chinese."
          },
          {
            "speaker": "杨同乐",
            "cn": "我记得你跟我说过，是个女孩儿，学得也很好。",
            "en": "I remember you told me that child was a girl, and she learned so well."
          },
          {
            "speaker": "王一飞",
            "cn": "没错，她经常跑上来找我玩。",
            "en": "Exactly, she often comes upstairs to play with me."
          },
          {
            "speaker": "杨同乐",
            "cn": "你问问他们什么时候有时间，我请他们吃个饭。",
            "en": "You can ask them when they're free, and I'll treat them to a meal."
          }
        ],
        "postQuestions": [
          {
            "q": "王一飞家楼下住着什么人？"
          },
          {
            "q": "杨同乐要请楼下的人做什么？"
          }
        ],
        "words": [
          {
            "cn": "房子",
            "pos": "n.",
            "en": "house"
          },
          {
            "cn": "小孩儿",
            "pos": "n.",
            "en": "child; kid"
          },
          {
            "cn": "女孩儿",
            "pos": "n.",
            "en": "girl"
          }
        ]
      },
      {
        "id": "14-04",
        "title": {
          "cn": "在房间写日记",
          "en": "Writing a diary in the room",
          "emoji": "📔"
        },
        "intro": {
          "cn": "在房间，王一飞在写日记。",
          "en": "In the room, Wang Yifei was writing in her diary."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-14/14-7.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-14/14-8.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "判断正误：王一飞很喜欢唱歌跳舞。",
            "options": [
              "对",
              "错"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "判断正误：王一飞认识杨同乐的姐姐。",
            "options": [
              "对",
              "错"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "我男朋友姓杨，叫杨同乐。他高个子、大眼睛，唱歌唱得很好，跳舞跳得也不错。",
            "en": "My boyfriend's last name is Yang, and his full name is Yang Tongle. He is tall, has big eyes, sings very well, and is also good at dancing."
          },
          {
            "speaker": "",
            "cn": "他和我姐姐一起工作，是姐姐介绍我们认识的。",
            "en": "He and my cousin work together, and it was my cousin who introduced us."
          },
          {
            "speaker": "",
            "cn": "他告诉我，从见到我的第一天开始，他就喜欢上我了。",
            "en": "He told me that he liked me from the very first day he met me."
          }
        ],
        "postQuestions": [],
        "words": [
          {
            "cn": "姓",
            "pos": "v.",
            "en": "be surnamed"
          },
          {
            "cn": "眼睛",
            "pos": "n.",
            "en": "eye"
          },
          {
            "cn": "跳舞",
            "pos": "v.",
            "en": "dance"
          }
        ]
      }
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "位",
            "过年",
            "跳舞",
            "姓",
            "眼睛"
          ],
          "items": [
            {
              "cn": "他儿子的____大大的，很漂亮。",
              "answer": ""
            },
            {
              "cn": "他已经几年没回国了，今年想回国____。",
              "answer": ""
            },
            {
              "cn": "我从小就跟老师学____，学了十多年了。",
              "answer": ""
            },
            {
              "cn": "A：请你介绍一下自己。 B：我____李，叫李明，是从上海来的。",
              "answer": ""
            },
            {
              "cn": "A：您好！请问，就您一____吗？ B：还有个朋友，他一来我们就点菜。",
              "answer": ""
            }
          ]
        },
        "group2": {
          "options": [],
          "items": []
        }
      },
      "describePictures": [],
      "classroomActivity": {
        "cn": "双人活动",
        "en": "Pair Work",
        "description": "两人一组，模拟帮朋友看房子的场景，互相说明房子的优点、缺点，等等。尽可能使用本课所学生词和语法。",
        "descriptionEn": "Work in pairs. Role-play a scenario where you help a friend look at a house, and explain its advantages and disadvantages, and so on. Try to use the vocabulary and grammar learned in this lesson as much as possible.",
        "topics": []
      }
    }
  },
  {
    "name": "L15 · 我想再去一次中国",
    "id": "15",
    "core": [
      {
        "hanzi": "姓名",
        "en": "name"
      },
      {
        "hanzi": "出国",
        "en": "go abroad"
      },
      {
        "hanzi": "门票",
        "en": "entrance ticket"
      },
      {
        "hanzi": "高中",
        "en": "high school"
      },
      {
        "hanzi": "出门",
        "en": "leave home"
      },
      {
        "hanzi": "路",
        "en": "road; way"
      },
      {
        "hanzi": "颐和园",
        "en": "Summer Palace (in Beijing)"
      },
      {
        "hanzi": "机场",
        "en": "airport"
      },
      {
        "hanzi": "机票",
        "en": "air ticket"
      },
      {
        "hanzi": "飞",
        "en": "fly"
      },
      {
        "hanzi": "好像",
        "en": "be like"
      },
      {
        "hanzi": "鸟",
        "en": "bird"
      }
    ],
    "extended": [],
    "texts": [
      {
        "id": "15-01",
        "title": {
          "cn": "在教室考试",
          "en": "Taking an exam in the classroom",
          "emoji": "📝"
        },
        "intro": {
          "cn": "在教室，同学们在考试。",
          "en": "In the classroom, the students were taking an exam."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-15/15-1.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-15/15-2.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "同学们要开始做什么？",
            "options": [
              "学习",
              "考试",
              "跑步"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "白家月去过几次中国？",
            "options": [
              "一次",
              "两次",
              "七次"
            ],
            "answer": "A"
          }
        ],
        "lines": [
          {
            "speaker": "王一飞",
            "cn": "考试就要开始了，请大家写上姓名，写好后就可以做题了。",
            "en": "The exam is about to begin. Please write down your name, and once you're done, you can start answering the questions."
          },
          {
            "speaker": "白家月",
            "cn": "老师，我做完了。",
            "en": "Teacher, I'm finished."
          },
          {
            "speaker": "陈天中",
            "cn": "老师，我也做完了。",
            "en": "Teacher, I'm finished too."
          },
          {
            "speaker": "王一飞",
            "cn": "……对了，你们考完试想做什么？",
            "en": "…Oh, what are you going to do after the exam?"
          },
          {
            "speaker": "白家月",
            "cn": "我很想去中国，虽然去过一次，但是很想再去一次。",
            "en": "I want to go to China. I've been there once, but I really want to go again."
          },
          {
            "speaker": "王一飞",
            "cn": "不错，到中国后你就可以经常说中文了。",
            "en": "Good, you can often speak Chinese in China."
          }
        ],
        "postQuestions": [
          {
            "q": "考试开始前，王一飞让同学们做什么？"
          },
          {
            "q": "王一飞说到中国后可以经常做什么？"
          }
        ],
        "words": [
          {
            "cn": "姓名",
            "pos": "n.",
            "en": "name"
          }
        ]
      },
      {
        "id": "15-02",
        "title": {
          "cn": "在咖啡店聊旅游",
          "en": "Talking about travel in the cafe",
          "emoji": "☕"
        },
        "intro": {
          "cn": "在咖啡店，李文和白家月在聊天儿。",
          "en": "In the cafe, Li Wen and Bai Jiayue were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-15/15-3.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-15/15-4.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "白家月要去哪儿？",
            "options": [
              "北京",
              "学校",
              "同学家"
            ],
            "answer": "A"
          },
          {
            "type": "choice",
            "q": "李文的高中同学在哪儿工作？",
            "options": [
              "饭店",
              "电影院",
              "颐和园"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "白家月",
            "cn": "考完试了，我现在可以出国旅游了。",
            "en": "The exam is over, so now I can travel abroad."
          },
          {
            "speaker": "李文",
            "cn": "你要去哪儿？",
            "en": "Where are you planning to go?"
          },
          {
            "speaker": "白家月",
            "cn": "我要再去一次北京。",
            "en": "I want to go to Beijing again."
          },
          {
            "speaker": "李文",
            "cn": "为什么还去北京？",
            "en": "Why Beijing again?"
          },
          {
            "speaker": "白家月",
            "cn": "因为我想再吃一次烤鸭，再喝一次奶茶，再去北京大学看一次电影……",
            "en": "Because I want to eat Peking Duck again, drink bubble tea again, and watch a movie at Peking University again…"
          },
          {
            "speaker": "李文",
            "cn": "你想做的事情很多啊！",
            "en": "You want to do a lot of things!"
          },
          {
            "speaker": "白家月",
            "cn": "是啊，你看，我还在网上买好颐和园的门票了呢。",
            "en": "Yes, look, I've already bought a ticket for the Summer Palace online."
          },
          {
            "speaker": "李文",
            "cn": "我的高中同学就在颐和园上班，可以让他给你好好介绍介绍。",
            "en": "One of my high school classmates works at the Summer Palace, and he can give you a great tour."
          },
          {
            "speaker": "白家月",
            "cn": "太好了！出门旅游，多个朋友多条路。",
            "en": "That's amazing! When you travel, the more friends you have, the more paths you have."
          }
        ],
        "postQuestions": [
          {
            "q": "白家月为什么还要去北京？"
          },
          {
            "q": "白家月在哪儿买的门票？"
          }
        ],
        "words": [
          {
            "cn": "出国",
            "pos": "v.",
            "en": "go abroad"
          },
          {
            "cn": "门票",
            "pos": "n.",
            "en": "entrance ticket"
          },
          {
            "cn": "高中",
            "pos": "n.",
            "en": "high school"
          },
          {
            "cn": "出门",
            "pos": "v.",
            "en": "leave home"
          },
          {
            "cn": "路",
            "pos": "n.",
            "en": "road; way"
          },
          {
            "cn": "颐和园",
            "pos": "",
            "en": "Summer Palace (in Beijing)"
          }
        ]
      },
      {
        "id": "15-03",
        "title": {
          "cn": "在咖啡店聊机票",
          "en": "Talking about air tickets",
          "emoji": "✈️"
        },
        "intro": {
          "cn": "在咖啡店，李文和白家月在聊天儿。",
          "en": "In the cafe, Li Wen and Bai Jiayue were chatting."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-15/15-5.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-15/15-6.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "李文多长时间没回国了？",
            "options": [
              "一年",
              "六个月",
              "不到一年"
            ],
            "answer": "C"
          },
          {
            "type": "choice",
            "q": "白家月这次买的机票怎么样？",
            "options": [
              "很贵",
              "很便宜",
              "有点儿贵"
            ],
            "answer": "C"
          }
        ],
        "lines": [
          {
            "speaker": "白家月",
            "cn": "李文，你有一年没回国了吧？",
            "en": "Li Wen, you haven't been back to China for a year, right?"
          },
          {
            "speaker": "李文",
            "cn": "不到一年。我六月的时候回去了一次。",
            "en": "Not quite a year. I went back once this June."
          },
          {
            "speaker": "白家月",
            "cn": "我怎么忘了？还是我送你去的机场呢。",
            "en": "How could I forget? I was the one who took you to the airport."
          },
          {
            "speaker": "李文",
            "cn": "是啊。",
            "en": "Yes."
          },
          {
            "speaker": "白家月",
            "cn": "我记得你那次的机票很便宜。",
            "en": "I remember your air ticket was very cheap."
          },
          {
            "speaker": "李文",
            "cn": "没错，可能因为那个时候去北京的人不多吧。",
            "en": "Exactly. Maybe it was because there weren't many people going to Beijing at that time."
          },
          {
            "speaker": "白家月",
            "cn": "这次的机票虽然有点儿贵，但想到就要飞北京了，我还是很高兴的。",
            "en": "The air ticket is a little expensive this time, but I am so happy thinking about flying to Beijing."
          }
        ],
        "postQuestions": [
          {
            "q": "上次回国，是谁送李文去机场的？"
          },
          {
            "q": "白家月为什么很高兴？"
          }
        ],
        "words": [
          {
            "cn": "机场",
            "pos": "n.",
            "en": "airport"
          },
          {
            "cn": "机票",
            "pos": "n.",
            "en": "air ticket"
          },
          {
            "cn": "飞",
            "pos": "v.",
            "en": "fly"
          }
        ]
      },
      {
        "id": "15-04",
        "title": {
          "cn": "在房间写日记",
          "en": "Writing a diary in the room",
          "emoji": "📔"
        },
        "intro": {
          "cn": "在房间，李文在写日记。",
          "en": "In the room, Li Wen was writing in his diary."
        },
        "audio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-15/15-7.mp3",
        "wordAudio": "https://cdn.baulchino.com/new-hsk-books-audios/hsk-2-textbook/lesson-15/15-8.mp3",
        "questions": [
          {
            "type": "choice",
            "q": "判断正误：李文经常回北京，所以不想家。",
            "options": [
              "对",
              "错"
            ],
            "answer": "B"
          },
          {
            "type": "choice",
            "q": "判断正误：李文、白家月跟鸟一起回北京。",
            "options": [
              "对",
              "错"
            ],
            "answer": "B"
          }
        ],
        "lines": [
          {
            "speaker": "",
            "cn": "我六月的时候回过一次北京，现在有半年多没回去了，我有点儿想家。",
            "en": "I went back to Beijing once this June, and now it has been over six months since I last went back. I miss home a bit."
          },
          {
            "speaker": "",
            "cn": "就要过年了，我要回家过年。家月这次也要去北京，我们都是星期五的飞机。",
            "en": "The Spring Festival is coming, and I'll be going back to celebrate it. Jiayue is also going to Beijing—we're both on the same flight this Friday."
          },
          {
            "speaker": "",
            "cn": "家月说我们好像小鸟，一起飞到北京，再一起飞回这里。",
            "en": "Jiayue said we are like little birds, flying to Beijing together and then flying back here together."
          }
        ],
        "postQuestions": [],
        "words": [
          {
            "cn": "好像",
            "pos": "v.",
            "en": "be like"
          },
          {
            "cn": "鸟",
            "pos": "n.",
            "en": "bird"
          }
        ]
      }
    ],
    "exercises": {
      "fillInTheBlank": {
        "group1": {
          "options": [
            "出国",
            "姓名",
            "门票",
            "鸟",
            "机票"
          ],
          "items": [
            {
              "cn": "你看，那只小____多漂亮啊！",
              "answer": ""
            },
            {
              "cn": "我记得这里的____不到10块钱，现在怎么这么贵了？",
              "answer": ""
            },
            {
              "cn": "儿子就要上大学了，你给他准备了什么____东西啊？",
              "answer": ""
            },
            {
              "cn": "A：你买的是什么时候的____？ B：明天早上的，下午就到北京了。",
              "answer": ""
            },
            {
              "cn": "A：请您说一下他的____，我看看有没有这个人。 B：王大明。 A：不好意思，他没住在我们酒店。",
              "answer": ""
            }
          ]
        },
        "group2": {
          "options": [],
          "items": []
        }
      },
      "describePictures": [],
      "classroomActivity": {
        "cn": "双人活动",
        "en": "Pair Work",
        "description": "两人一组，谈论旅游经历，介绍去过哪里、去过几次、吃得怎么样、玩得怎么样以及旅游的感受，等等。尽可能使用本课所学生词和语法。",
        "descriptionEn": "Work in pairs. Discuss your travel experiences, including where you've been, how many times you've visited, how the food was, how the activities were, and your overall impressions of the trip, and so on. Try to use the vocabulary and grammar learned in this lesson as much as possible.",
        "topics": []
      }
    }
  }
];

// Backwards-compatible alias (neutral name is COURSE_LESSONS).
window.HSK2_NEW_LESSONS = window.COURSE_LESSONS_NEW;
