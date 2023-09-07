const { ref, computed } = Vue;
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
        'paragraph-images-card': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/paragraphImagesCard.vue')),
        'color-box-block': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/colorBoxBlock.vue')),
        'img-slide-desc-modal': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/imgSlideDescModal.vue')),
        'accordion-block': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/accordionBlock.vue')),
        'img-grid': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/imgGrid.vue')),
        'mail-form': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/mailForm.vue')),
        'contact-info-box-list': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/contactInfoBoxList.vue')),
    },
    setup() {
        const contentType = ref('main');
        const imgSlideDescModal = ref({
            modalHeader: '',
            imgList: [''],
            imgDescriptionList: [''],
            contentHeader: '',
            contentList: [''],
            show: false,
        });

        function closeImgSlideDescModal() {
            imgSlideDescModal.value.show = false;
        }

        function initImgSlideDescModal(modalHeader, imgList, imgDescriptionList, contentHeader, contentList, show, imgDescRatioDiff) {
            imgSlideDescModal.value.modalHeader = modalHeader;
            imgSlideDescModal.value.imgList = imgList;
            imgSlideDescModal.value.imgDescriptionList = imgDescriptionList;
            imgSlideDescModal.value.contentHeader = contentHeader;
            imgSlideDescModal.value.contentList = contentList;
            imgSlideDescModal.value.show = show;
            imgSlideDescModal.value.imgDescRatioDiff = imgDescRatioDiff || 'large';
        }

        function initContentType() {
            const params = new URLSearchParams(window.location.search);
            if (params.get('view') === 'more') {
                contentType.value = 'more';
            } else {
                contentType.value = 'main';
            }
        }

        initContentType();

        function switchContentType() {
            if (contentType.value === 'main') {
                contentType.value = 'more';
            } else {
                contentType.value = 'main';
            }
        }

        function removeObjectsWithMoreProperty(arr) {
            return arr.map((item) => {
                if (typeof item !== 'object' || item === null) {
                    return item;
                }

                if ('TTTmoreTTT' in item) {
                    return undefined; // 刪除具有'more'屬性的物件
                }

                // 使用Object.keys()迭代物件的鍵
                const newItem = { ...item }; // 創建新的物件

                Object.keys(item).forEach((key) => {
                    if (typeof item[key] === 'object' && item[key] !== null) {
                        if (!Array.isArray(item[key])) {
                            // 如果是物件，則遞歸調用此函數
                            const filtered = removeObjectsWithMoreProperty([item[key]]);
                            if (!filtered.length) {
                                delete newItem[key]; // 如果內部物件也被刪除，則刪除該屬性
                            }
                        } else {
                            // 如果是物件陣列，則遞歸調用此函數
                            const filteredArray = removeObjectsWithMoreProperty(item[key]);
                            if (!filteredArray.length) {
                                delete newItem[key]; // 如果內部物件陣列也被刪除，則刪除該屬性
                            } else {
                                newItem[key] = filteredArray; // 更新內部物件陣列
                            }
                        }
                    }
                });

                return newItem;
            }).filter(Boolean); // 刪除undefined的物件
        }

        const webRouter = [
            {
                title: '關於我',
                id: 'aboutMePage',
                children: [
                    { title: '學歷', id: 'educationPage' },
                    { title: '技能', id: 'skills' },
                ],
            },
            {
                title: '相關經驗',
                id: 'workExperience',
                children: [
                    { title: '工作經驗', id: 'workExperience' },
                    { title: '社團經驗', id: 'clubExperience' },
                    { title: '競賽經驗', id: 'competitionExperience' },
                    { title: '志工服務經驗', id: 'volunteerExperience', TTTmoreTTT: true },
                ],
            },
            {
                title: '重要事件',
                id: 'importantEvent',
                children: [],
            },
            {
                title: '作品集',
                id: 'portfolio',
                children: [],
            },
            {
                title: '其他證明文件',
                id: 'certificate',
                children: [],
            },
            {
                title: '聯絡資訊',
                id: 'contact',
                children: [],
            },
        ];

        const webViewRouter = computed(() => {
            if (contentType.value === 'main') {
                return removeObjectsWithMoreProperty(webRouter);
            }
            return webRouter;
        });

        const webContent = [
            {
                domId: 'aboutMePage',
                isHeader: true,
                title: {
                    En: 'Tim Chuang',
                    Zh: '關於我',
                },
                contentType: 'paragraph image',
                content: [
                    `&nbsp&nbsp&nbsp&nbsp嗨~我是Tim，目前在友達光電智慧製造處擔任前端工程師。我主要負責單位主力的對外產品 － Machine VIX 戰情室系統的開發。透過支援圖表的靈活繪製與戰情室元件的自由拖拉縮放，期望其成為簡單易用機台資料監控平台。
                    Machine VIX 目前也成功導入四間客戶，並為友達創造千萬收入。此外，我也負責公司內部人才發展系統的前端開發，該系統整合並梳理了公司各部門智慧製造相關人才的資訊。
                    通過管理系統上的技能、培訓和專案等記錄，使人才能夠提交人才等級認證，這個系統已經成功地在公司提供內部超過上千名同仁使用。`,
                    `&nbsp&nbsp&nbsp&nbsp在求學過程中，我也累積一些網頁系統開發經驗。曾利用政府的 Open Data 開發模仿公車APP功能或查看農產品價格走勢的網站。
                    或是利用 Github Page 開發自己的響應式網頁，而最近我對其進行了重構，除了改以Vue 3為框架外，也實現各區塊的元件化，並成功地整合了電子郵件服務，實現了寄信功能。`,
                    `&nbsp&nbsp&nbsp&nbsp儘管目前專注於前端技術開發，但在求學期間我也對資料科學相關領域有相當的興趣。比如曾在國泰人壽實習期間完成NLP的專案，開發SPEC⽂件推薦的API。或是如⼤學畢業專題為一款智慧鬧鐘的Android APP，以CNN來幫助系統判斷使用者是否賴床。
                    也曾因為好奇使然，寫了一段Python程式使我能夠以指定的關鍵字爬取 Dcard 相關文章，以便查看特定關鍵字的熱度。`,
                    `&nbsp&nbsp&nbsp&nbsp另外，我喜歡團隊合作，享受⼀起完成目標的過程。因此在工作上喜歡與同事一起討論系統設計與使用者體驗，或是一起思考導致Bug出現的可能原因。透過團隊的互動與交流，使我們加速完成工作目標外也提升自己的能力或見識。
                    而在學生時代，我也積極參加許多活動並擔任幹部，例如系學會擔任幹部、參加營隊籌備等等，也從中體驗與收穫許多如領導力、溝通力等寶貴經驗。`,
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
                    Zh: '技能',
                },
                contentType: 'listBlock',
                content: [
                    {
                        title: '技術',
                        iconUrl: 'img/coding.png',
                        style: 'red',
                        listItems: [
                            {
                                title: '前端相關',
                                content: 'Vue.js、Echarts、ESLint、RWD Web、Bootstrap、Element UI、Semantic UI、HTML、CSS、JavaScript、JQuery',
                                contentType: 'array',
                                tagsColor: 'customPink',
                            },
                            {
                                title: '後端相關',
                                content: 'Django、Flask API',
                                contentType: 'array',
                                tagsColor: 'customPink',
                            },
                            {
                                title: '版本控制',
                                content: 'GitHub、GitLab、Tortoise Git',
                                contentType: 'array',
                                tagsColor: 'customPink',
                            },
                            {
                                title: '軟體測試',
                                content: '測試個案文件、Jest、JMeter、Cypress',
                                contentType: 'array',
                                tagsColor: 'customPink',
                            },
                            {
                                title: '資料科學',
                                content: 'Python、NLP、Keras',
                                contentType: 'array',
                                tagsColor: 'customPink',
                            },
                            {
                                title: '其它',
                                content: 'Docker、Azure DevOps CI',
                                contentType: 'array',
                                tagsColor: 'customPink',
                            },
                        ],
                    },
                    {
                        title: '管理',
                        iconUrl: 'img/management.png',
                        style: 'purple',
                        listItems: [
                            {
                                title: '團隊領導',
                                content: '團隊溝通、向心力培養、制度建立、會議主持',
                                contentType: 'array',
                                tagsColor: 'customPurple',
                            },
                            {
                                title: '活動策畫',
                                content: '活動規畫、撰寫企劃書、廠商簽約、活動執行、執行後檢討',
                                contentType: 'array',
                                tagsColor: 'customPurple',
                            },
                        ],
                    },
                ],
            },
            {
                domId: 'workExperience',
                isHeader: false,
                title: {
                    En: 'Career',
                    Zh: '工作經驗',
                },
                contentType: 'timeLine',
                content: [
                    {
                        title: '友達光電 智慧製造發展處 前端工程師',
                        date: '2021.08',
                        contentList: [
                            '負責對外產品－Machine VIX戰情室系統前端程式開發。',
                            '負責對內專案－人才發展系統前端程式開發。',
                            '使用Vue.js、Element UI、ECharts、Bootstrap',
                            '為單位引進Jest/Cypress，以進行前端單元測試與E2E自動化測試。',
                            '串接 Azure DevOps CI，使程式提交後即在雲端進行編譯與單元測試。',
                            '建立產品 DockerFile並以 Docker Compose 構建服務。',
                            '同步接觸軟體測試、產品加密、產品部屬、客戶服務，與作為實習生mentor。',
                            '撰寫系統使用說明文件。',
                            '多人協作開發的版控經驗。',
                        ],
                        img: 'img/AUO-5.jpg',
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
                        TTTmoreTTT: true,
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
                        TTTmoreTTT: true,
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
                        TTTmoreTTT: true,
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
                        TTTmoreTTT: true,
                    },
                    {
                        title: '迎新宿營 機動長',
                        date: '2016.09',
                        contentList: [
                            '負責迎新宿營籌備與營期期間的場地、器材、 人力支援等規劃。',
                        ],
                        img: '',
                        style: 'CherryBlossom',
                        TTTmoreTTT: true,
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
                        TTTmoreTTT: true,
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
                        TTTmoreTTT: true,
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
                TTTmoreTTT: true,
            },
            {
                domId: 'importantEvent',
                isHeader: false,
                title: {
                    En: 'Important Events',
                    Zh: '重要事件',
                },
                contentType: 'paragraphImagesCard',
                content: [
                    {
                        title: '2023 AUO友達實習生 Mentor',
                        contentList: [
                            `&nbsp&nbsp&nbsp&nbsp2023年初，部門主管委任我為當年度實習生的Mentor，負責帶領實習生認識職場生活、了解單位文化與完成工作項目。讓正式進入職場才不到2年的我，面對第一場帶人的考驗。
                            因過去也曾為實習生且受當時Mentor的優秀指導與協助，所以當角色對換時，有股使命感希望自己也能成為優秀的Mentor，讓實習生能收穫滿滿的從公司畢業。`,
                            `&nbsp&nbsp&nbsp&nbsp當時單位正在導入自動化測試，期望降低每次改版皆須人工測試的時間成本與提升產品可靠度。因此安排實習生來協助利用Cypress對現有產品MVIX進行E2E自動化測試。
                            協助完成實習專案期間，我除了分享相關的知識外，也適時地提供實習生解決問題的方向，透過提問的方式來讓實習生思考怎麼做會更好，此外也定期關心實習生的進度狀況或是有無遭遇到什麼困難，並適時的提供協助。
                            或是與主管開會期間，當主管無法理解實習生的回答或實習生無法回答主管的問題時，即時的切入進行補充說明。`,
                            `&nbsp&nbsp&nbsp&nbsp我很幸運，遇到的實習生也相當優秀。除了工作能力一流外，工作上也會主動提出問題。在提供指導時，也常常是一點就通。因此從一開始帶著實習生認識MVIX與Cypress，
                            到制定測試情境案例、撰寫自動化測試程式到最後的成果發表都讓我相當放心。最後也成功獲得主管肯定，並於實習生成果發表上拿下第2名的佳績且獲得pre-offer的機會。讓我放下心中的重擔，完成心中的使命。`,
                        ],
                        headShot: 'img/AUO_Logo.jpg',
                        headShotDirection: 'left',
                        imgList: [
                            'img/AUO-3.jpg',
                            'img/AUO-1.jpg',
                            'img/AUO-2.jpg',
                        ],
                    },
                    {
                        title: '高大資管第十六屆系學會 會長',
                        contentList: [
                            '&nbsp&nbsp&nbsp&nbsp為了實現過去對自己的期許與有個希望回饋系上的心，在大家的支持下當選了第十六屆系學會會長，更是考驗著政策執行力、部門溝通力與危機處理能力。',
                            '&nbsp&nbsp&nbsp&nbsp任內首度推動系學會財務透明化、落實系費使用宣導，增加學生對系學會財務使用的信心，成功使系費繳交率超越上屆達到九成。也首創設立課輔部門，定時舉辦讀書會交流課業內容，推動系上讀書會風氣。'
                            + '也推動與外校單位交流，帶領系學會成員參與台北大學舉辦之台灣互聯網高峰會，不但聽取電商界企業主的經驗分享，也與各校學生自治代表經驗交流。且最後交接給下一屆學弟妹時，完成完整的交接文件並交付，使過去經驗不中斷於離開的我們。',
                            '&nbsp&nbsp&nbsp&nbsp擔任會長同樣的也有諸多不順遂的地方，例如系服購買制度與活動虧損責任議題。遇到危機便與幹部、師長共同討論如何解決，開會並訂定完整的制度，補足原本的不足，並在第一時間處理， 將錯誤的損失降成最低。在其中學著危機處理與承擔責任。'
                            + '直到現在，仍非常感謝那年陪伴學生完成系學會任務的幹部與老師們。',
                        ],
                        headShot: 'img/IM_Logo.jpg',
                        headShotDirection: 'right',
                        imgList: [
                            'img/DS-1.jpg',
                            'img/DS-2.jpg',
                            'img/DS-3.jpg',
                            'img/DS-4.jpg',
                            'img/DS-5.jpg',
                            'img/DS-6.jpg',
                            'img/DS-7.jpg',
                            'img/DS-8.jpg',
                            'img/DS-9.jpg',
                        ],
                    },
                    {
                        title: '2017 ECIC 全國大專院校電子商務競賽',
                        contentList: [
                            '&nbsp&nbsp&nbsp&nbsp本小組與 NPO Channel 合作，幫助其透過網路通路販售鮮奶凍捲。我們透過對該產品的特性、市場、優勢以及 NPO Channel 社會企業的了解，'
                            + '針對品牌進行設計，創立了"限時凍態"的品牌。',
                            '&nbsp&nbsp&nbsp&nbsp目標為希望打出了原料天然、健康無毒、公益活潑、限時配送的品牌形象。以 Facebook 粉絲團為行銷的主要平台，透過貼文、節慶、遊戲、吉祥物「牛牛」的打造與活動的操作，'
                            + '來推廣產品。此外也在其他平台如蝦皮、Yahoo、Instagram、Dcard 平台推廣，將各平台的使用者導回 Facebook 社群之中。最後在比賽中，榮獲數位行銷優等獎的成績，兩個月創造81條奶凍捲，45,000元的業績。',
                        ],
                        headShot: 'img/ec.jpg',
                        headShotDirection: 'left',
                        imgList: [
                            'img/ec-11.jpg',
                            'img/ec-7.jpg',
                            'img/uniform-3.jpg',
                            'img/ec-3.jpg',
                            'img/ec-6.jpg',
                            'img/ec-1.jpg',
                            'img/ec-2.png',
                            'img/ec-8.jpg',
                            'img/ec-2.png',
                            'img/ec-4.jpg',
                            'img/ec-5.jpg',
                            'img/ec-10.jpg',
                        ],
                        TTTmoreTTT: true,
                    },
                    {
                        title: '2016 11/11 第一屆 全球普台制服日',
                        contentList: [
                            '&nbsp&nbsp&nbsp&nbsp在大二期間，時不時看到大學身邊同學參與其母校高中的制服日活動，與母校產生連結外，也與畢業的同學們一同懷念過去高中的時光。'
                            + '當時的我，除了心生羨慕外，也認為這是一個很值得舉辦的活動，便向志同道合的朋友們提議，並主導籌辦這次的制服日。',
                            '&nbsp&nbsp&nbsp&nbsp我們參考了其他學校的制服日活動後，先是訂定制服日日期、創建了粉專、設計Logo、與同學們討論如何吸引校友參加、粉專要有什麼內容與活動等等，'
                            + '之後與各校校友代表一同努力宣傳，成功使制服日當日的 Instagram 與 Facebook 充滿校友們穿起制服回憶高中的貼文，'
                            + '捲起一股懷念風潮，也驚動了母校高中長官們的注意，鼓勵此活動的永續發展。',
                        ],
                        headShot: 'img/uniformDayProfile.jpg',
                        headShotDirection: 'right',
                        imgList: [
                            'img/uniform-1.png',
                            'img/uniform-2.jpg',
                            'img/uniform-3.jpg',
                            'img/uniform-4.jpg',
                            'img/uniform-5.jpg',
                            'img/uniform-6.png',
                            'img/uniform-7.jpg',
                        ],
                        TTTmoreTTT: true,
                    },
                ],
            },
            {
                domId: 'portfolio',
                isHeader: false,
                title: {
                    En: 'Portfolio',
                    Zh: '作品集',
                },
                contentType: 'colorBoxBlock',
                content: [
                    {
                        title: 'Machine VIX',
                        color: 'paleMouse',
                        label: '2023',
                        iconURL: 'img/dashboard.png',
                        tags: [
                            'Vue.js',
                            'ECharts',
                            'Element UI',
                            'Cypress',
                            'Jest',
                            'Docker',
                        ],
                        clickFunction() {
                            initImgSlideDescModal(
                                'Machine VIX － No Code 機台參數監控戰情室',
                                [
                                    'img/MVIX-1.png',
                                    'img/MVIX-10.png',
                                    'img/MVIX-2.png',
                                    'img/MVIX-3.png',
                                    'img/MVIX-4.png',
                                ],
                                [
                                    '示範戰情室',
                                    '透過拖拉縮放快速編輯戰情室',
                                    '彈性、快速建立圖表',
                                    '多戰情室管理',
                                    '超規通報設定',
                                ],
                                '機台資料即時視覺化服務',
                                [
                                    `&nbsp&nbsp&nbsp&nbsp Machine VIX (簡稱MVIX) 提供使用者能以戰情室圖表的方式即時監控機台的參數資料。並提供參數的規格設定，於超規時送出通報提醒使用者機台異常。
                                    MVIX強調優化使用者體驗與No Code彈性，因此讓使用者可透過拖拉參數、點選模板與少量的輸入輕鬆地建立所需的圖表，不必讓工程師為其客製，使用者可根據自身需求彈性調整。
                                    我們也提供多項圖表模板可供選擇，除了簡單的折線圖、長條圖、碼表圖、字卡等，也提供多參數的混合圖表，讓不同的參數可以於同一張圖表進行比較。`,
                                    `&nbsp&nbsp&nbsp&nbsp 另外，市面上的許多戰情室系統需要工程師來協助建立，且無法快速的調整與修改。MVIX提供易用的UI介面，讓戰情室的各個區塊大小、排版可以用拖拉與縮放的方式快速調整，
                                    而區塊的內容也透過簡單的輸入定義內容，讓使用者可依自身需求定義其戰情室，不再需要透過IT人員。MVIX的戰情室區塊除了支援前述的圖表之外，也支援即時影像、嵌入第三方系統、圖片影片等，
                                    讓戰情室的資訊更多元，例：串接機台設備的即時影像、機器視覺等影像讓圖表的資料更能具體呈現機台運作現狀。`,
                                    `&nbsp&nbsp&nbsp&nbsp當機台資料開始出現異常時，MVIX也能透過Web API或SMTP Email的方式通知相關人士。並提供異常通報結案的功能，達到異常事件的閉環管理。
                                    期望若有輕度機台狀態管理需求的使用者，透過MVIX即可滿足其需求。`,
                                    `&nbsp&nbsp&nbsp&nbsp MVIX產品為我在AUO主要負責開發的產品，負責系統的前端程式開發。以Vue.js作為前端框架並搭配Element UI、Bootstrap完成UI介面，
                                    並利用ECharts完成圖表的彈性繪製，還有Vue-grid-layout實作戰情室元件的拖拉縮放，最終達到提供彈性自定義戰情室的目的。程式碼品質方面已ESLint協助控管，
                                    並進行單元測試(Jest)與E2E測試(Cypress)的撰寫，並協助部門將相關測試整合至Azure DevOps的CI中。也協助將MVIX打包成 Docker Image，
                                    並搭配Docker Compose讓產品可以快速部屬在各種環境。`,
                                    `&nbsp&nbsp&nbsp&nbsp MVIX在團隊的努力下成功成為公司雙軸轉型的主推產品之一，除了在公司的智慧製造展展出外，也成功的向外推廣，已有至少四家客戶採用，
                                    並為公司創造超過千萬以上的收入。`,
                                    '&nbsp&nbsp&nbsp&nbsp<a href=\'https://mvix-outside.azurewebsites.net/dashboard/viewdashboard?dashboardId=797&mode=read-only\'>MVIX 公開站台連結</a>',
                                ],
                                true,
                            );
                        },
                    },
                    {
                        title: 'SPEC 文件推薦API',
                        color: 'heliotrope',
                        label: '2020',
                        iconURL: 'img/document.png',
                        tags: [
                            'Flask API',
                            'Python',
                            'NLP',
                            'ML',
                            'DL',
                        ],
                        clickFunction() {
                            initImgSlideDescModal(
                                'SPEC文件推薦API',
                                [
                                    'img/SPECAPI-6.png',
                                    'img/SPECAPI-2.png',
                                    'img/SPECAPI-3.png',
                                    'img/SPECAPI-4.png',
                                    'img/SPECAPI-5.png',
                                ],
                                [
                                    '本專案執行結果',
                                    '取出每篇SPEC使用的資料表與模組',
                                    '去除停用詞、標點符號、換行符號等',
                                    '貼標籤的規則',
                                    '模型預測結果',
                                ],
                                '利用NLP的技術，快速的找到可參考的系統規格書',
                                [
                                    `&nbsp&nbsp&nbsp&nbsp本專案為SPEC文件推薦，為2020年暑假在國泰⼈壽壽險資訊部實習的實習專案，
                                    目的期望透過SPEC推薦系統使系統分析師在撰寫SPEC時若遇到不熟悉的領域或缺乏靈感時，
                                    能夠透過輸入寫到⼀半的SPEC⽂件至推薦系統，而推薦系統的推薦可使其快速的找到過去可參考的SPEC。`,
                                    `&nbsp&nbsp&nbsp&nbsp在使用方面，使用者僅需上傳SPEC文件(docx檔案)，系統將推薦其他過去相關的SPEC檔名與相關的機率，
                                    並以JSON回傳推薦結果。但本專案目前的資料集內僅含AA理賠的主程式SPEC，若要擴充其推薦能力需要加新的SPEC檔案至dataset/spec資料夾內，
                                    並執行create_dataset.py以產出新的SPEC關聯資料集。`,
                                    `&nbsp&nbsp&nbsp&nbsp本專案歷經了SPEC⽂件的前處理(jieba斷詞)、特徵⼯程(TFIDF、PCA)與分群(KMeans、階層演算法)、驗證分群(COS相似度)、
                                    上標籤還有模型訓練(隨機森林、類神經網路)與評估，最後架設成Flask API 與部門內的聊天機器⼈串接。
                                    專案結束後獲得部門主管肯定，在實習結束後給予預聘的offer。`,
                                    '&nbsp&nbsp&nbsp&nbsp<a href=\'https://github.com/TimgleCT/SPEC_Recommendation_API\'>GitHub連結</a>',
                                ],
                                true,
                            );
                        },
                    },
                    {
                        title: 'LSTM股價預測',
                        color: 'lightVermilion',
                        label: '2021',
                        iconURL: 'img/stock.png',
                        tags: [
                            'Python',
                            'DL',
                            'LSTM',
                        ],
                        clickFunction() {
                            initImgSlideDescModal(
                                'LSTM股價預測',
                                [
                                    'img/LSTMStock-1.png',
                                    'img/LSTMStock-2.png',
                                    'img/LSTMStock-3.png',
                                    'img/LSTMStock-4.png',
                                    'img/LSTMStock-5.png',
                                ],
                                [
                                    'TSMC美股股票資料集',
                                    '簡易的LSTM模型',
                                    '訓練過程的Loss',
                                    '模型連續預測30天的預測結果',
                                    '預測4/29的股價',
                                ],
                                '閒暇時的自我練習',
                                [
                                    `&nbsp&nbsp&nbsp&nbsp本專案為自己利用閒暇時間，為了複習資料分析與python所實作的自學專案。
                                    我從美國Yahoo股票網站下載台積電與台灣50 ETF股價歷史資訊(日期、開盤價、收盤價、最高價、最低價、成交量與調整後的收盤價)，
                                    將資料前處理後(標準化&將日期分為年、月、日、星期)。以30天的股票歷史資料去預測第31天的調整後收盤價，模型僅採用一層的LSTM，
                                    曾試圖增加層數或LSTM單元的結果並有明顯差異，甚至是結果更差。也有嘗試增加其他的特徵資料，例如道瓊指數、標準普爾500指數與納斯達克100指數，
                                    結果也未有顯著的變好。`,
                                    '&nbsp&nbsp&nbsp&nbsp<a href=\'https://reurl.cc/kVxVzr\'>Colab連結</a>',
                                ],
                                true,
                            );
                        },
                        TTTmoreTTT: true,
                    },
                    {
                        title: '預測Dcard熱門文章',
                        color: 'plumGray',
                        label: '2020',
                        iconURL: 'img/dcardLogo.png',
                        tags: [
                            'Python',
                            'ML',
                            'DL',
                        ],
                        clickFunction() {
                            initImgSlideDescModal(
                                '預測Dcard熱門文章',
                                [
                                    'img/DcardPopularArticle-1.png',
                                    'img/DcardPopularArticle-2.png',
                                    'img/DcardPopularArticle-3.png',
                                    'img/DcardPopularArticle-4.png',
                                    'img/DcardPopularArticle-5.png',
                                ],
                                [
                                    'Liner SVM 預測結果',
                                    'SVM 預測結果',
                                    '隨機森林預測結果',
                                    '模1D-CNN模型預測結果',
                                    'GRU模型預測結果',
                                ],
                                '應徵2020 Dcard資料工程師實習生作業',
                                [
                                    `&nbsp&nbsp&nbsp&nbsp本作品為2020年4月應徵Dcard資料工程師時，Dcard所指派之作業，目的是要透過文章發文後11小時內的收藏、留言、愛心、分享數，
                                    來預測其在36小時後是否會成為熱門文章(愛心數>=1000)。
                                    訓練資料集約有78萬筆資料，測試資料約有22萬筆資料。起初我期望以CNN深度學習來完成本作業，過程中有諸多挑戰與困難，
                                    例如：資料不平衡的問題(非熱門文章數>>熱門文章數)、資料前處理的時間耗時。在作業時間截止前雖有完成，但效能表現不到Dcard要求標準，
                                    故沒有順利晉級到下一階段。`,
                                    `&nbsp&nbsp&nbsp&nbsp但在事後我有繼續完善本作業，在截止後的一週後優化完成，有解決交作業時資料前處理時間過長的問題，
                                    也有透過嘗試其他機器學習演算法來達到更好的預測效果。我總共用了五種方法來實作本作業，
                                    分別是CNN、GRU、SVM、Liner SVM、Random Forest，而在最終以機器學習的Random Forest表現最好，準確度達98%，F1值達0.57。`,
                                ],
                                true,
                            );
                        },
                        TTTmoreTTT: true,
                    },
                    {
                        title: '中央買菜郎',
                        color: 'irisQuartz',
                        label: '2020',
                        iconURL: 'img/vegetable.png',
                        tags: [
                            'Django',
                            'Html',
                            'CSS',
                            'Kendo UI',
                            'Open Data',
                            'Heroku',
                        ],
                        clickFunction() {
                            initImgSlideDescModal(
                                '中央買菜郎',
                                [
                                    'img/ncuGroceryShoppingMan-1.png',
                                    'img/ncuGroceryShoppingMan-2.png',
                                    'img/ncuGroceryShoppingMan-3.png',
                                    'img/ncuGroceryShoppingMan-4.png',
                                    'img/ncuGroceryShoppingMan-5.png',
                                ],
                                [
                                    '登入後首頁',
                                    '選擇查詢市場',
                                    '預算清單',
                                    '一週價格走勢',
                                    '加入預算清單',
                                ],
                                '以 Django MTV 架構完成的開放資料應用',
                                [
                                    `&nbsp&nbsp&nbsp&nbsp當代比價風氣興盛，人們購物時常上網比價，買到心中認為CP值最高的商品；人們會先估好預算，
                                    帶足夠的現金再出門採買，然而農產品這類商品的購買卻只能靠經驗來判斷，一般民眾不易取得相關資訊。`,
                                    `&nbsp&nbsp&nbsp&nbsp中央買菜郎能透過行政院農委會的開放資料揭露農產品市場價格之外，也提供收藏、預算表、價格走勢的功能
                                    揭露農產品市場價格可協助消費者在購買能產品時預防奸商；收藏幫助使用者快速查看常買的商品價格；預算表幫助消費者
                                    安排菜單與預算，而價格走勢則能幫助消費者了解此產品何時買較為划算。`,
                                    `&nbsp&nbsp&nbsp&nbsp本專案後端採用 Django MTV的框架編寫，前端有使用部分 Kendo UI 的元件，最後也上傳至雲端部屬平台 
                                    Heroku，不過因 Heroku 免費方案資料庫存量的限制，無法全面運作。`,
                                    '&nbsp&nbsp&nbsp&nbsp<a href = \'https://github.com/TimgleCT/NCUIM_Grocery_Shopping_Man\'>GitHub網址</a>',
                                ],
                                true,
                            );
                        },
                    },
                    {
                        title: 'TimeKeeper 智慧鬧鐘',
                        color: 'paleCloudedGray',
                        label: '2020',
                        iconURL: 'img/alarmclock.png',
                        tags: [
                            'Android',
                            'Keras',
                            'DL',
                            'MySQL',
                            'PHP',
                        ],
                        clickFunction() {
                            initImgSlideDescModal(
                                'TimeKeeper 智慧鬧鐘',
                                [
                                    'img/timekeeper-8.png',
                                    'img/timekeeper-1.png',
                                    'img/timekeeper-2.png',
                                    'img/timekeeper-3.png',
                                    'img/timekeeper-4.png',
                                ],
                                [
                                    '三種模式可供選擇',
                                    '系統首頁',
                                    '好友頁面',
                                    '加入好友頁面',
                                    '個人資料頁面',
                                ],
                                '結合AI、社群、Open Data的時間管家',
                                [
                                    `&nbsp&nbsp&nbsp&nbspTimekeeper是一款利用人工智慧、社群網路與開放資料來實現智慧鬧鐘的軟體。
                                    利⽤手機內建的加速度感測器、麥克風與螢幕使用狀態來了解使用者關閉鬧鐘後的手機使用行為，
                                    並以CNN類神經網路模型來判斷使用者是否起床，進而決定是否幫其自動增設貪睡鬧鐘，
                                    解決⼈們關閉鬧鐘後不⼩⼼睡著的問題。`,
                                    `&nbsp&nbsp&nbsp&nbsp若是Timekeeper還是無法叫醒使用者，Timekeeper還可通知使用者的其他好友，
                                    期望社群好友以實際的方式來幫助叫醒使用者，
                                    藉此可以解決使用者因熟睡聽不見鬧鐘的困擾，也可以讓好友們掌握使用者是否已經起床的資訊，
                                    免於睡過頭而對團隊造成傷害的情形發生。`,
                                    `&nbsp&nbsp&nbsp&nbsp系統也能藉由向政府資料開放平台內的行政機關辦公日曆表，
                                    與災害示警公開資料平台內的資訊，取得放假資料與臨時停班停課通知，讓使用者不必等待政府公告就能安心的休息。`,
                                    `&nbsp&nbsp&nbsp&nbsp本專題為我們首次完成 Android 的應用程式，而我負責後端程式編寫，完成人工智慧、登入註冊、社群好友的功能。
                                    本專題也獲得科技部⼤專⽣研究計畫的補助、在第六屆激發學⽣創意競賽中獲得佳作，並於專題展中榮獲第三名。`,
                                    '<img style=\'width:100%\' src = \'img/timekeeper-5.png\'>',
                                ],
                                true,
                                'small',
                            );
                        },
                    },
                    {
                        title: 'Dcard 文章關鍵字熱度爬蟲',
                        color: 'paleSlateGray',
                        label: '2020',
                        iconURL: 'img/web-crawler.png',
                        tags: [
                            'Python',
                            'lxml',
                            'Web Crawler',
                        ],
                        clickFunction() {
                            initImgSlideDescModal(
                                'Dcard 文章關鍵字熱度爬蟲',
                                [
                                    'img/lxmlDcard-1.png',
                                    'img/lxmlDcard-2.png',
                                    'img/lxmlDcard-3.png',
                                    'img/lxmlDcard-4.png',
                                    'img/lxmlDcard-5.png',
                                ],
                                [
                                    '2019年4月 蔡英文熱度',
                                    '2019年4月 郭台銘熱度',
                                    '2019年4月 賴清德熱度',
                                    '2019年4月 柯文哲熱度',
                                    '2019年4月 朱立倫熱度',
                                ],
                                '簡單的 Dcard 時事版文章爬蟲',
                                [
                                    `&nbsp&nbsp&nbsp&nbsp2019年4月，全台對2020總統大選候選人的未來將由誰來出線非常關注，媒體、社群討論度極高，
                                    大家都非常好奇與爭論民調的輸贏，而當時我因旁聽Python的課程，加上對該議題的好齊心，
                                    便起心想透過爬蟲來了解在 Dcard 上，各個可能候選人的討論熱度，便試做這個爬蟲程式。`,
                                    `&nbsp&nbsp&nbsp&nbsp這隻爬蟲是使用 Python 的 lxml 套件，依照 XPath 取得網頁上的內容。
                                    也利用了 Selenium 的 Web Driver 來模擬滑鼠滾動以自動載入多數頁面。在取得文章標題後依照使用者先前輸入之關鍵字篩選，
                                    最後將符合結果的統計出來，便能得知該議題在某段時間內 Dcard 時事版的討論熱度。`,
                                    `<a href = 'https://github.com/TimgleCT/Tim-s-Portfolio/tree/master/Dcard%E6%99%82%E4%BA%8B%E7%89%88%E6%A8%99%E
                                    9%A1%8C%E9%97%9C%E9%8D%B5%E5%AD%97%E7%88%AC%E8%9F%B2_%E8%87%AA%E5%AD%B8'>GitHub 網址</a>`,
                                ],
                                true,
                            );
                        },
                    },
                    {
                        title: '高雄老司機',
                        color: 'halfColonialWhite',
                        label: '2020',
                        iconURL: 'img/bus.png',
                        tags: [
                            'Html',
                            'CSS',
                            'Javascript',
                            'Open data',
                        ],
                        clickFunction() {
                            initImgSlideDescModal(
                                '高雄老司機',
                                [
                                    'img/bus-1.png',
                                    'img/bus-2.png',
                                    'img/bus-3.png',
                                    'img/bus-4.png',
                                    'img/bus-5.png',
                                ],
                                [
                                    '高雄老司機首頁',
                                    '路線動態搜尋畫面',
                                    '依關鍵字顯示符合路線',
                                    '顯示該路線動態',
                                    '收藏路線',
                                ],
                                '網頁版的高雄公車通',
                                [
                                    `&nbsp&nbsp&nbsp&nbsp利⽤PTX交通部開放資料提供的高雄公⾞動態資訊與路線資料，
                                    參考高雄公車通 App 的功能，將其以 Javascript 仿製出來，可以說是網頁板的高雄公車通。`,
                                    `&nbsp&nbsp&nbsp&nbsp高雄老司機可查詢公⾞站牌、路線的即時的動態資訊、收藏站牌與路線，
                                    路線動態資訊由即時向開放資料的API取得，
                                    ，而收藏功能使用 local storage 實作。高雄公車通也已將服務放在 GitHub Pages上。`,
                                    `&nbsp&nbsp&nbsp&nbsp在此專案中，我負責路線查詢的部分。向開放資料 API 取得路線、站牌、即時動態資料，
                                    並使其能夠隨著使用者的輸入，動態篩選出使用者欲查的路線；以及定時更新頁面以顯示最新資訊。`,
                                    '<a href=\'https://timglect.github.io/BusApp\'>高雄老司機網址</a>',
                                ],
                                true,
                            );
                        },
                    },
                    {
                        title: '中文數字手寫辨識',
                        color: 'ceruleanBlue',
                        label: '2020',
                        iconURL: 'img/artificial-intelligence.png',
                        tags: [
                            'AI',
                            'Keras',
                            'CNN',
                        ],
                        clickFunction() {
                            initImgSlideDescModal(
                                '中文數字手寫辨識',
                                [
                                    'img/chineseNum-1.jpg',
                                    'img/chineseNum-2.jpg',
                                    'img/chineseNum-3.jpg',
                                    'img/chineseNum-4.jpg',
                                    'img/chineseNum-5.jpg',
                                ],
                                [
                                    '經處理的 28 x 28 中文數字手寫圖片',
                                    'CNN 類神經網路結構',
                                    '準確度隨著訓練次數的增加而上升',
                                    'loss 值隨著訓練次數增加而減少',
                                    '混淆矩陣',
                                ],
                                '深度學習的入門',
                                [
                                    `&nbsp&nbsp&nbsp&nbsp課堂上全班合力蒐集約一萬八千份的中文數字(一 ~ 十)手寫圖片資料。在將收集到的手寫資料預處理後，
                                    將其轉為 28 x 28 的圖片大小，再利用 Keras 實現 CNN 卷積式類神經網路進行深度學習。 CNN 模組由兩層卷積層兩層池化層組成，
                                    最後由softmax來進行分類。而訓練與測試資料的分配，其中的一萬六千份資料作為訓練資料，兩千份做為測試資料，
                                    最後模型訓練結果準確度達到九成。`,
                                    `&nbsp&nbsp&nbsp&nbsp本專案是我首次接觸到人工智慧的技術與 Python 語言的應用，
                                    了解資料預處理與優化對於深度學習準確度的重要性。。此專案在使用 CNN 之前，
                                    也有使用無卷積池化的單純 MLP 多層感知機的實作，但結果準確度相對較差。`,
                                    `<a href='https://github.com/TimgleCT/Tim-s-Portfolio/tree/master/%E4%B8%AD%E6%96%87%E6%95%B8%E5%AD%97%E6
                                    %89%8B%E5%AF%AB%E5%9C%96%E7%89%87%E8%BE%A8%E8%AD%98_%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E5%B0%88%E6%A1%88'>GitHub 網址</a>`,
                                ],
                                true,
                            );
                        },
                        TTTmoreTTT: true,
                    },
                    {
                        title: 'Timer',
                        color: 'gainsboro',
                        label: '2020',
                        iconURL: 'img/pin.png',
                        tags: [
                            'Node.js',
                            'Open data',
                            'Heroku',
                        ],
                        clickFunction() {
                            initImgSlideDescModal(
                                'Timer Bus',
                                [
                                    'img/timer-1.jpg',
                                    'img/timer-2.jpg',
                                    'img/timer-3.jpg',
                                    'img/timer-4.jpg',
                                    'img/timer-5.jpg',
                                ],
                                [
                                    '首頁－輸入目的地',
                                    '檢視大眾運輸與行人路線規劃',
                                    '路線中捷運站即時動態',
                                    'loss 值隨著訓練次數增加而減少',
                                    '行走中仍可檢視文字規劃',
                                ],
                                'Google 路線規劃與捷運即時動態資料的結合',
                                [
                                    `&nbsp&nbsp&nbsp&nbsp本專案利用 Node.js 的後端技術與 Google Map API 實作大眾運輸導航功能，
                                    並將服務佈署於雲端伺服器 Heroku。但不同的是加上利用了 PTX 交通部開放資料取得捷運動態資訊，
                                    可得知導航路線中的捷運站下班車還剩下多少時間，幫助使用者掌握自身步行速度。`,
                                    `&nbsp&nbsp&nbsp&nbsp其中我負責利用 Node.js 提供的 request 模組抓取 PTX 交通部開放資料，取出 Google
                                    API 路線規劃所經之捷運站動態資料。而這次專案也是我們首次以 Node.js 架構完成後端的實作，
                                    也第一次學習 Heroku 雲端伺服器服務的使用與開放資料的應用。`,
                                ],
                                true,
                                'small',
                            );
                        },
                        TTTmoreTTT: true,
                    },
                ],
            },
            {
                domId: 'certificate',
                isHeader: false,
                title: {
                    En: 'Certificate',
                    Zh: '其他證明文件',
                },
                contentType: 'accordionImgs',
                content: [
                    {
                        title: '實習證明',
                        style: 'beige',
                        imgList: [
                            {
                                src: 'img/CatheyIntern.jpg',
                                label: '國泰人壽 壽程科 實習證明',
                            },
                            {
                                src: 'img/CatheyPreoffer.jpg',
                                label: '國泰人壽 預聘書',
                            },
                        ],
                    },
                    {
                        title: '書卷獎',
                        style: 'brown',
                        imgList: [
                            {
                                src: 'img/bookAward-1.jpg',
                                label: '大一上 第二名 書卷獎',
                            },
                            {
                                src: 'img/bookAward-2.jpg',
                                label: '大一下 第一名 書卷獎',
                            },
                            {
                                src: 'img/bookAward-3.jpg',
                                label: '大二下 第二名 書卷獎',
                            },
                            {
                                src: 'img/bookAward-4.jpg',
                                label: '碩一上 第二名 書卷獎',
                            },
                        ],
                    },
                    {
                        title: '其他競賽獎狀',
                        style: 'rust',
                        imgList: [
                            {
                                src: 'img/competition-8.jpg',
                                label: '碩士論文計畫發表會 Session L 最佳論文獎',
                            },
                            {
                                src: 'img/competition-1.jpg',
                                label: '畢業專題 第三名',
                            },
                            {
                                src: 'img/competition-2.jpg',
                                label: '第六屆 激發學生創意競賽 佳作',
                            },
                            {
                                src: 'img/competition-3.jpg',
                                label: '2017 ECIC 全國大專院校電子商務競賽 數位行銷 優等獎',
                            },
                            {
                                src: 'img/competition-4.jpg',
                                label: '106年 招生影片創作暨主題式微電影競賽 入圍(管理學院)',
                            },
                            {
                                src: 'img/competition-7.jpg',
                                label: '106年 招生影片創作暨主題式微電影競賽 參獎(管理學院)',
                            },
                            {
                                src: 'img/competition-5.jpg',
                                label: '106年 招生影片創作暨主題式微電影競賽 入圍(資管系)',
                            },
                            {
                                src: 'img/competition-6.jpg',
                                label: '2018 倫理個案分析暨微電影競賽 個案組 佳作',
                            },
                        ],
                    },
                    {
                        title: '幹部與活動證明',
                        style: 'copper',
                        imgList: [
                            {
                                src: 'img/leader-1.jpg',
                                label: '第十六屆 系學會 會長',
                            },
                            {
                                src: 'img/leader-2.jpg',
                                label: '第七屆 高大資管營 副召',
                            },
                            {
                                src: 'img/leader-3.jpg',
                                label: '第六屆 高大資管營 課務部 部長',
                            },
                            {
                                src: 'img/EMBAEnterpriseTeacherProgram.jpg',
                                label: '中央大學EMBA 企業導師計畫 參加證書',
                            },
                            {
                                src: 'img/PythonSummerCampTA.jpg',
                                label: 'Python 學生團隊 暑期營 助教證書',
                            },
                            {
                                src: 'img/PythonTeam.jpg',
                                label: 'Python 學生團隊 技能核定書',
                            },
                            {
                                src: 'img/leader-4.jpg',
                                label: '2016 資管週 財務長',
                            },
                            {
                                src: 'img/leader-5.jpg',
                                label: '109級 迎新宿營 機動長',
                            },
                        ],
                    },
                    {
                        title: '志工感謝狀',
                        style: 'maroon',
                        imgList: [
                            {
                                src: 'img/volunteer-1.jpg',
                                label: '105年 IM Pioneer 翠屏里服務感謝狀',
                            },
                            {
                                src: 'img/volunteer-2.jpg',
                                label: '106年 IM Pioneer 翠屏里服務感謝狀',
                            },
                        ],
                    },
                ],
            },
            {
                domId: 'contact',
                isHeader: false,
                title: {
                    En: 'Contact Me',
                    Zh: '聯絡資訊',
                },
                contentType: 'contactInfo',
                content: {
                    content: [`&nbsp&nbsp&nbsp&nbsp如果您想對我有更細一步的了解，或是您覺得這個個人網站還有哪邊可以改進的意見，
                                還是只是想認識認識交個朋友交流交流，都可以透過下方的連絡方式與我聯絡。我很高興可以認識大家，都很歡迎。`],
                    contactInfo: [
                        {
                            mediaName: 'Facebook',
                            label: '莊于霆',
                            mediaIconSrc: 'img/facebook.png',
                            medialUrl: 'https://www.facebook.com/profile.php?id=100002342939054',
                        },
                        {
                            mediaName: 'LinkedIn',
                            label: '莊于霆',
                            mediaIconSrc: 'img/linkedin.png',
                            medialUrl: 'https://www.linkedin.com/in/%E8%8E%8A-%E4%BA%8E%E9%9C%86-7a7b39198/',
                        },
                        {
                            mediaName: 'Instagram',
                            label: 'timgle_ct',
                            mediaIconSrc: 'img/instagram.png',
                            medialUrl: 'https://www.instagram.com/timgle_ct/?hl=zh-tw',
                        },
                        {
                            mediaName: 'Github',
                            label: 'TimgleCT',
                            mediaIconSrc: 'img/github.png',
                            medialUrl: 'https://github.com/TimgleCT',
                        },
                        {
                            mediaName: 'Gmail',
                            label: 'ct25283115',
                            mediaIconSrc: 'img/gmail.png',
                            medialUrl: '',
                        },
                        {
                            mediaName: 'Phone',
                            label: '0973079448',
                            mediaIconSrc: 'img/telephone.png',
                            medialUrl: '',
                        },
                    ],
                },
            },
        ];

        const webStructure = computed(() => {
            if (contentType.value === 'main') {
                return removeObjectsWithMoreProperty(webContent);
            }
            return webContent;
        });
        // 在這裡撰寫組件的邏輯
        return {
            webStructure, imgSlideDescModal, closeImgSlideDescModal, contentType, switchContentType, webViewRouter,
        };
    },
};

const app = Vue.createApp(App);
app.mount('#vueApp');
