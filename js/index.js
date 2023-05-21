const { ref } = Vue;
const App = {
    components: {
        'user-nav': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/Nav.vue')),
        'unit-content': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/unit.vue')),
        'content-paragraph': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/paragraph.vue')),
        'img-block': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/imgBlock.vue')),
        'rotate-card': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/rotateCard.vue')),
        'list-block': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/listBlock.vue')),
        'list-item': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/listItem.vue')),
        'list-block-list': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/list.vue')),
        'time-line-block': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/timeLineBlock.vue')),
    },
    setup() {
        const webStructure = ref([
            {
                domId: 'aboutMePage',
                isHeader: true,
                title: {
                    En: 'Tim Chuang',
                    Zh: '關於我',
                },
                contentType: 'paragraph image',
                content: [
                    '&nbsp&nbsp&nbsp&nbsp嗨~我是Tim，目前就讀於中央資管碩二。主要接觸資料科學與網頁程式設計的相關領域。曾在國泰暑期實習期間完成NLP的專案，開發SPEC⽂件推薦的API；⼤學畢業專題是智慧鬧鐘的Android APP，'
                    + '以CNN來幫助系統判斷使用者是否賴床；有時候也會上網找資料集來練習，例如前些陣子用台積電的歷史股價資料來練習LSTM。網頁程式設計的部分則有將前端串接Django的經驗，也有利用 Github Page 開發自己的RWD個⼈網頁，'
                    + '也有用 JavaScript 與 Open Data 寫出跟公車APP功能⼀樣的網站。',
                    '&nbsp&nbsp&nbsp&nbsp除了技術之外，我也與同學們組成小組參與了 2017 全國大專院校電子商務競賽，利用過去的經驗與技巧在 Facebook、Instagram 等社群媒體行銷與經營，並在 Dcard 上透過學生的文章成為美食版第一熱門文章，'
                    + '也成功地讓大家對此平台文章上的關注回流至粉絲專頁，使當日粉絲追蹤數提高將近一倍之多。 透過適當的行銷策略，最後奪得數位行銷獎優等的佳績。',
                    '&nbsp&nbsp&nbsp&nbsp此外，我喜歡團隊合作，⼀起完成目標的過程，因此我積極參加許多活動並擔任幹部，例如系學會擔任幹部、參加營隊籌備等等。',
                ],
                imgs: [
                    {
                        imgUrl: 'img/A4.jpg',
                        title: '課務部團隊經營',
                        desc: '第六屆資管營課務部是我最珍惜的團隊。期間我帶領成員完成營隊課程活動規劃與執行，並成功凝聚原本不熟的大家。成功的團隊經營，讓成員產生歸屬感。即使主要負責的企劃不同，大家也很主動、樂意支援其他部員，'
                        + '一起討論解決其他人遇到的問題。使課務部不再是各組獨立作戰，而是部門一起向前。',
                    },
                    {
                        imgUrl: 'img/A5.jpg',
                        title: '系學會的重任',
                        desc: '在經歷選舉的競爭後，有幸接下系學會會長的職務。任期間首創課輔部門，促進同學間學習互助風氣、實行財務透明化，增加同學繳系費的意願、推動系學會參與系際與校際活動，交流成果豐碩。'
                        + '不過任期間也遭遇到許多挑戰與困難，如系服購買爭議與活動虧損等，但皆透過各部門的合作、積極與系上同學溝通與諮詢師長意見等方式，帶領系學會度過難關。',
                    },
                    {
                        imgUrl: 'img/A2.jpg',
                        title: '大學畢業專題',
                        desc: '大學的學業成果結晶。與組員一同在管院212實驗室埋頭開發與討論的時光令人回味。從一開始決定挑戰人工智慧相關應用、一同找師長討論可行性與技術、到實作開發Android APP與嵌入AI模型、'
                        + '再到向同學朋友們推廣APP以蒐集資料與訓練，最後在展演上呈現成果並獲得專題比賽第三名。雖然當初使用的方法現在回頭來看並不是那麼的適當，但過程中大家的努力與交情，是不可多得的收穫。',
                    },
                    {
                        imgUrl: 'img/A3.jpeg',
                        title: 'NUKIM 畢業',
                        desc: '完成高大資管的四年學業是我人生重要的里程碑。這四年高大資管系除了提供課業知識外，也提供許多體驗外務活動的管道，給我發揮與學習的機會。期間認識了許多人生不可多得的朋友與恩師，也讓我更認識自己與了解未來想走的人生道路。',
                    },
                    {
                        imgUrl: 'img/CatheyLifeCIP.jpg',
                        title: '國泰CIP實習計畫',
                        desc: '國泰人壽CIP實習是正式踏入職場前的試煉，幫助我從態度上與技能上從學生慢慢調整社會人士。實習期間主要接觸NLP的技術，為部門內的聊天機器人添加SPEC推薦功能，期望加速SA撰寫SPEC的速度。實習期間雖然不長，'
                        + '但實習表現與成果深受部門主管與公司肯定，獲得預聘的機會。',
                    },
                    {
                        imgUrl: 'img/AUOSmartManufacture.jpg',
                        title: '友達起點',
                        desc: '友達光電是我職涯中的第一個工作機會，也是我擔任前端工程師的起點。除了專注於前端開發外，我還涉足了自動化測試、軟體加密部署和客戶接觸等領域。'
                        + '我負責的產品不僅為公司帶來千萬的收益，也成為公司主力產品之一。也感謝公司讓我有機會與耐心親切的主管和活潑有趣的同仁一起合作，讓我在這份工作上有相當好的體驗。',
                    },
                ],
            },
            {
                domId: 'educationPage',
                isHeader: false,
                title: {
                    En: 'Education',
                    Zh: '學歷',
                },
                contentType: 'rotateCard',
                rotateCard: [
                    {
                        colorStyle: 'yellow',
                        backgroundImg: 'img/highschool.jpg',
                        middleLogoImg: 'img/school-1.png',
                        bigTitle: '高中',
                        mediumTitle: '私立普台高級中學',
                        smallTitle: '自然組',
                        tag: '校排第七',
                        rotateContent: {
                            title: '人格特質的養成',
                            subTitle: '盡守本份、處事理性、待人和善、樂於助人',
                            img: 'img/school1-1.JPG',
                            descriptionList: [
                                {
                                    icon: 'img/schoolicon.png',
                                    title: '住宿生活',
                                    desc: '練習溝通與獨立生活',
                                },
                                {
                                    icon: 'img/papericon.png',
                                    title: '自主管理',
                                    desc: '事先規劃今日作業目標',
                                },
                                {
                                    icon: 'img/helpicon.png',
                                    title: '做事態度',
                                    desc: '參與志工與班級幹部',
                                },
                            ],
                        },
                    },
                    {
                        colorStyle: 'orange',
                        backgroundImg: 'img/college.jpg',
                        middleLogoImg: 'img/school2.png',
                        bigTitle: '大學',
                        mediumTitle: '國立高雄大學',
                        smallTitle: '資訊管理學系',
                        tag: '系排第二',
                        rotateContent: {
                            title: '社會力的建立',
                            subTitle: '團隊合作、專業基礎、領導能力、危機處理',
                            img: 'img/school2-1.jpg',
                            descriptionList: [
                                {
                                    icon: 'img/code.png',
                                    title: '專業養成',
                                    desc: '資訊與管理均衡發展',
                                },
                                {
                                    icon: 'img/team.png',
                                    title: '領導團隊',
                                    desc: '系學會與營隊的磨練',
                                },
                                {
                                    icon: 'img/medal.png',
                                    title: '合作競賽',
                                    desc: '與團隊共獲殊榮',
                                },
                            ],
                        },
                    },
                    {
                        colorStyle: 'red',
                        backgroundImg: 'img/college-2.jpg',
                        middleLogoImg: 'img/school3.png',
                        bigTitle: '研究所',
                        mediumTitle: '國立中央大學',
                        smallTitle: '資訊管理學系碩士班',
                        tag: '獲最佳論文獎',
                        rotateContent: {
                            title: '鑽研出專業專精',
                            subTitle: '邏輯思考、問題解決、細心細膩、栽培自我',
                            img: 'img/school3-1.jpg',
                            descriptionList: [
                                {
                                    icon: 'img/think.png',
                                    title: '思考訓練',
                                    desc: '撰寫論文的訓練過程',
                                },
                                {
                                    icon: 'img/graduation-hat.png',
                                    title: '充實實力',
                                    desc: '參與學生團隊與企導計畫',
                                },
                                {
                                    icon: 'img/workteam.png',
                                    title: '初入職場',
                                    desc: '參與國泰CIP實習計畫',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                domId: 'skills',
                isHeader: false,
                title: {
                    En: 'Skills',
                    Zh: '能力自評',
                },
                contentType: 'listBlock',
                content: [
                    {
                        title: '技術能力',
                        iconUrl: 'img/coding.png',
                        style: 'red',
                        listItems: [
                            {
                                score: 80,
                                maxScore: 100,
                                title: '網頁前端',
                                content: 'Vue.js、Echarts、ESLint、RWD Web、Bootstrap、Element UI、Semantic UI、HTML、CSS、JavaScript、JQuery',
                            },
                            {
                                score: 30,
                                maxScore: 100,
                                title: '後端應用',
                                content: 'Django、Android Studio、.NET Core Website Deploy',
                            },
                            {
                                score: 60,
                                maxScore: 100,
                                title: '版本控制',
                                content: 'GitHub、GitLab、Tortoise Git',
                            },
                            {
                                score: 30,
                                maxScore: 100,
                                title: '軟體測試',
                                content: '制定測試個案、JMeter、Cypress',
                            },
                            {
                                score: 40,
                                maxScore: 100,
                                title: '資料科學',
                                content: 'Python、NLP、Keras',
                            },
                        ],
                    },
                    {
                        title: '管理能力',
                        iconUrl: 'img/management.png',
                        style: 'purple',
                        listItems: [
                            {
                                score: 90,
                                maxScore: 100,
                                title: '軟體應用',
                                content: 'Word、PowerPoint、Draw.io',
                            },
                            {
                                score: 85,
                                maxScore: 100,
                                title: '活動策畫',
                                content: '活動規畫、撰寫企劃書、廠商簽約、活動執行、執行後檢討',
                            },
                            {
                                score: 80,
                                maxScore: 100,
                                title: '領導團隊',
                                content: '團隊溝通、向心力培養、制度建立、會議主持',
                            },
                            {
                                score: 75,
                                maxScore: 100,
                                title: '社群公關',
                                content: '社群小編、文案撰寫、Dcard 廣告文',
                            },
                        ],
                    },
                ],
            },
            {
                domId: 'workExperience',
                isHeader: false,
                title: {
                    En: 'Work',
                    Zh: '工作經驗',
                },
                contentType: 'timeLine',
                content: [
                    {
                        title: '友達光電 智慧製造發展處 前端工程師',
                        date: '2021.08',
                        contentList: [
                            '負責對外產品－No Code 戰情室系統切版與前端程式開發。',
                            '負責對內專案－人才發展系統切版與前端程式開發。',
                            '使用Vue.js、ECharts、Bootstrap',
                            '為單位引進Cypress，以進行E2E自動化測試。',
                            '同步接觸軟體測試、產品加密、產品部屬、客戶服務。',
                            '撰寫系統使用說明文件。',
                            '多人協作開發的版控經驗。',
                        ],
                        img: '',
                        style: 'DeepCocoa',
                    },
                    {
                        title: '國泰人壽 壽險資訊部 CIP暑期實習生',
                        date: '2020.07',
                        contentList: [
                            '研究與實作GPT-2和BERT兩種自然語言處理的模型，並撰寫範例⽂件。',
                            '為了優化部門內聊天機器⼈的功能，開發SPEC⽂件推薦的API。',
                            '開發過程歷經資料清洗、前處理、貼標籤、模型選擇、調整參數的⼯作。',
                            '撰寫該API如何使用與原理的⽂件。',
                            '實習結束後獲得主管肯定獲得預聘機會。',
                        ],
                        img: 'img/CIP_Intern.jpg',
                        style: 'DeepCocoa',
                    },
                ],
            },
            {
                domId: 'clubExperience',
                isHeader: false,
                title: {
                    En: 'Club',
                    Zh: '社團經驗',
                },
                contentType: 'timeLine',
                content: [
                    {
                        title: '中大EMBA 企業導師計畫',
                        date: '2019.10',
                        contentList: [
                            '與另外兩位同學一同為互動創新股份有限公司創辦人 張中星先生的導生。',
                            '不定期聚餐分享煩惱與聆聽企業導師的建議。',
                            '期末分享該學年的收穫。',
                        ],
                        img: 'img/EMBA_enterprise_Teacher.jpg',
                        style: 'CherryBlossom',
                    },
                    {
                        title: 'Python 學生團隊 組員',
                        date: '2019.10',
                        contentList: [
                            '學習利用Python進行數據分析。EX: 資料前處理、視覺化、建立機器或深度學習模型。',
                            '舉辦暑期營給外部認識參加，擔任營隊課堂助教。',
                            '第二年擔任網頁程式設計講師傳承知識給學弟妹。',
                        ],
                        img: 'img/python_team.jpg',
                        style: 'CherryBlossom',
                    },
                    {
                        title: '高大選委會 委員',
                        date: '2018.04',
                        contentList: [
                            '擔任文書組組員，進行海報文宣製作。',
                            '負責系上同學參選三合一選舉相關事宜。',
                        ],
                        img: 'img/election.png',
                        style: 'CherryBlossom',
                    },
                    {
                        title: '高大資管營 副營長',
                        date: '2017.10',
                        contentList: [
                            '協助營長處理問題與加強各部門溝通。',
                            '幹部會議與檢討會時擔任紀錄。',
                        ],
                        img: 'img/7camp.jpg',
                        style: 'CherryBlossom',
                    },
                    {
                        title: '系學會 會長',
                        date: '2017.07',
                        contentList: [
                            '首創系學會財務透明化，公布雙月財報，與落實財務使用宣導，使系費繳交率超越上屆。',
                            '重新整頓系上學生空間，提供學生整齊、有規劃的環境。',
                            '活化系學會粉絲專頁，使新生入學與活動時， 容易取得資訊與協助。',
                            '開設課輔部門，定時舉辦讀書會交流課業內容。',
                        ],
                        img: 'img/departmentSociety.jpg',
                        style: 'CherryBlossom',
                    },
                    {
                        title: '台灣互聯網高峰會 高大學生代表',
                        date: '2017.06',
                        contentList: [
                            '帶領系學會成員代表高雄大學前往台北大學參與多校校際活動。',
                            '電商界企業主經驗分享，包含 Dcard、雲豹科技、瘋狂賣客、愛評網等企業。',
                        ],
                        img: 'img/internetMeeting.jpg',
                        style: 'CherryBlossom',
                    },
                    {
                        title: '高大資管營 課務長',
                        date: '2016.10',
                        contentList: [
                            '各項課程活動組織管理，追蹤進度與內容規劃。',
                            '首創整合性課程，以駭客松形式統整營期間課程收穫。',
                            '成功凝聚了部員的向心力，讓部員認同課務部並產生歸屬感。',
                        ],
                        img: 'img/6camp.jpg',
                        style: 'CherryBlossom',
                    },
                    {
                        title: '全球普台制服日創辦人',
                        date: '2016.09',
                        contentList: [
                            '2016年首度舉辦母校高中制服日，成功連結畢業校友懷念母校。',
                            '以粉絲專頁宣傳推動，利用各校校友倒數貼文與留言分享的抽獎活動，增加校友共鳴與參與。',
                        ],
                        img: 'img/uniformDay.jpg',
                        style: 'CherryBlossom',
                    },
                    {
                        title: '迎新宿營 機動長',
                        date: '2016.09',
                        contentList: [
                            '負責迎新宿營籌備與營期期間的場地、器材、 人力支援等規劃。',
                        ],
                        img: '',
                        style: 'CherryBlossom',
                    },
                ],
            },
            {
                domId: 'competitionExperience',
                isHeader: false,
                title: {
                    En: 'Competition',
                    Zh: '競賽經驗',
                },
                contentType: 'timeLine',
                content: [
                    {
                        title: '碩士論文計畫發表會 Session L 最佳論文獎',
                        date: '2021.04',
                        contentList: [
                            '於Session L的六篇論⽂中脫穎⽽出。',
                            '論⽂題目靈感取⾃於在國泰實習時的⼼得。',
                            '題⽬為：資訊科技能力與組織信任對組織的警覺留神和企業流程能力的影響。',
                        ],
                        img: 'img/proposal.jpg',
                        style: 'DeepCarmine',
                    },
                    {
                        title: '畢業專題競賽 第三名',
                        date: '2018.12',
                        contentList: [
                            '利⽤Keras來實現CNN類神經網路模型開發智慧型鬧鐘軟體，名為Timekeeper的Android應用程式。',
                            '藉由⼿機內建的加速度感測器、麥克風與螢幕使⽤狀態來了解使⽤者關閉鬧鐘後的⼿機使⽤⾏為，並以CNN類神經網路模型來判斷使⽤者是否起床，進而決定是否幫其⾃動增設貪睡鬧鐘，解決⼈們關閉鬧鐘後不⼩⼼睡著的問題。',
                            '本專題獲得科技部⼤專⽣研究計畫的補助，也在第六屆激發學⽣創意競賽中獲得佳作。',
                        ],
                        img: 'img/graduateChampion.jpg',
                        style: 'DeepCarmine',
                    },
                    {
                        title: '106 年度招生影片創作暨主題式微電影競賽 宣傳片 參獎',
                        date: '2017.09',
                        contentList: [
                            '擔任組長，負責影片創意發想、追蹤拍攝與剪輯的進度、主持小組討論。',
                            '小組成員為管理學院四系的系學會會長，為首次整合四系系學會資源完成的作品，以管理學院招生宣傳片榮獲宣傳片參獎。',
                        ],
                        img: '',
                        style: 'DeepCarmine',
                    },
                    {
                        title: '2017 ECIC 全國大專院校電子商務競賽 數位行銷 優等獎',
                        date: '2017.06',
                        contentList: [
                            '擔任組員，負責產品社群行銷。',
                            '與NPO Channel合作，設立品牌"限時凍態"於Yahoo電商平台上販售鮮奶動捲。',
                            '利用 Dcard 美食版的寫文，成為當時美食版第一熱門文章並成功打開陌生市場與知名度。',
                            'Facebook 粉絲專頁網址：https://reurl.cc/M7q7WK',
                        ],
                        img: 'img/ecChampain.jpg',
                        style: 'DeepCarmine',
                    },
                ],
            },
            {
                domId: 'volunteerExperience',
                isHeader: false,
                title: {
                    En: 'Volunteer',
                    Zh: '志工經驗',
                },
                contentType: 'timeLine',
                content: [
                    {
                        title: 'IM Pioneer 資訊服務隊',
                        date: '2017.02',
                        contentList: [
                            '前往學校周邊鄰里開設銀髮族手機使用課程。',
                            '教學範圍包跨手機基本操作、社群軟體(如Facebook、Line)與網路購物(蝦皮)的使用。',
                        ],
                        img: 'img/IMP.jpg',
                        style: 'DeepOrchid',
                    },
                ],
            },
        ]);
        // 在這裡撰寫組件的邏輯
        return { webStructure };
    },
};

const app = Vue.createApp(App);
app.mount('#vueApp');
