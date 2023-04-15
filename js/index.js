const { ref } = Vue;
const App = {
    components: {
        'user-nav': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/Nav.vue')),
        'unit-content': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/unit.vue')),
        'content-paragraph': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/paragraph.vue')),
        'img-block': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/imgBlock.vue')),
        'rotate-card': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/rotateCard.vue')),
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
        ]);
        // 在這裡撰寫組件的邏輯
        return { webStructure };
    },
};

const app = Vue.createApp(App);
app.mount('#vueApp');
