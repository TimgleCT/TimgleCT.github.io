const { ref } = Vue;
const App = {
    components: {
        'user-nav': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/Nav.vue')),
        'unit-content': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/unit.vue')),
        'content-paragraph': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/paragraph.vue')),
    },
    setup() {
        const webStructure = ref([
            {
                title: {
                    En: 'Tim Chuang',
                    Zh: '關於我',
                },
                contentType: 'paragraph',
                content: [
                    '&nbsp&nbsp&nbsp&nbsp嗨~我是Tim，目前就讀於中央資管碩二。主要接觸資料科學與網頁程式設計的相關領域。曾在國泰暑期實習期間完成NLP的專案，開發SPEC⽂件推薦的API；⼤學畢業專題是智慧鬧鐘的Android APP，'
                    + '以CNN來幫助系統判斷使用者是否賴床；有時候也會上網找資料集來練習，例如前些陣子用台積電的歷史股價資料來練習LSTM。網頁程式設計的部分則有將前端串接Django的經驗，也有利用 Github Page 開發自己的RWD個⼈網頁，'
                    + '也有用 JavaScript 與 Open Data 寫出跟公車APP功能⼀樣的網站。',
                    '&nbsp&nbsp&nbsp&nbsp除了技術之外，我也與同學們組成小組參與了 2017 全國大專院校電子商務競賽，利用過去的經驗與技巧在 Facebook、Instagram 等社群媒體行銷與經營，並在 Dcard 上透過學生的文章成為美食版第一熱門文章，'
                    + '也成功地讓大家對此平台文章上的關注回流至粉絲專頁，使當日粉絲追蹤數提高將近一倍之多。 透過適當的行銷策略，最後奪得數位行銷獎優等的佳績。',
                    '&nbsp&nbsp&nbsp&nbsp此外，我喜歡團隊合作，⼀起完成目標的過程，因此我積極參加許多活動並擔任幹部，例如系學會擔任幹部、參加營隊籌備等等。',
                ],
            },
        ]);
        // 在這裡撰寫組件的邏輯
        return { webStructure };
    },
};

const app = Vue.createApp(App);
app.mount('#vueApp');
