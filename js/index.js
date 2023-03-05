const App = {
    components: {
        'user-nav': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/_vue-components/Nav.vue')),
    },
    setup() {
        // 在這裡撰寫組件的邏輯
    },
};

const app = Vue.createApp(App);
app.mount('#vueApp');
