<template>
    <div class="nav" :class="{'open': coverPageState}">
        <div class="navContainer">
            <img class='photoSticker' :src="user.img.url" :alt="user.name.Zh" />
            <h3 class="navHeader">{{user.name.Zh}}</h3>
            <h4 class="navHeader">{{user.name.En}}</h4>
        </div>
        <div class="barBlock">
            <template v-for="(rout, index) in routers" :key="index">
                <template v-if="hasChildren(rout)">
                    <DropDown :mainTitle="rout.title">
                        <template v-for="(child, index) in rout.children" :key="index">
                            <NavLink :title="child.title" @clickAction="moveToUnit(child.id)"></NavLink>
                        </template>
                    </DropDown>
                </template>
                <template v-else>
                    <NavLink :title="rout.title" @clickAction="moveToUnit(rout.id)"></NavLink>
                </template>
            </template>
        </div>
        <div class='navFooter'>
            <SwitchContent
                :content-type='contentType'
                @switch-type='switchContentType()'
            ></SwitchContent>
        </div>
    </div>

    <header ref='mobileHeader' class="mobileNav" @click="openNav">
        <div class="ui button navBtn">☰</div>
        <span>{{user.name.En}}</span>
    </header>

    <div v-show="coverPageState" class="coverPage" @click="closeNav"></div>

</template>

<script>

const { ref } = Vue;

export default {
    name: 'UserNav',
    emits: ['switchContentType'],
    components: {
        DropDown: Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/DropDown.vue')),
        NavLink: Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/NavLink.vue')),
        SwitchContent: Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/switchContent.vue')),
    },
    props: {
        user: {
            type: Object,
            default() {
                return {
                    name: {
                        En: 'Tim Chuang',
                        Zh: '莊于霆',
                    },
                    img: {
                        url: 'img/profile.jpg',
                    },
                };
            },

        },
        routers: {
            type: Array,
            default() {
                return [];
            },
        },
        contentType: {
            type: String,
            default: 'main',
        },
    },
    setup(props, { emit }) {
        const coverPageState = ref(false);
        const mobileHeader = ref(null);

        function hasChildren(rout = {}) {
            if (rout.children === undefined) {
                return false;
            }
            if (rout.children.length === 0) {
                return false;
            }
            return true;
        }

        function openNav() {
            coverPageState.value = true;
        }

        function closeNav() {
            coverPageState.value = false;
        }

        function closeNavInMobileMode() {
            if (window.innerWidth <= 768) {
                closeNav();
            }
        }

        function switchContentType() {
            emit('switchContentType');
        }

        function getMobileHeaderHeight() {
            return mobileHeader.value.offsetHeight;
        }

        function moveToUnit(id) {
            closeNavInMobileMode();
            const targetElementTop = document.getElementById(id).offsetTop;
            // 計算最終的滾動位置，考慮標頭的高度
            const scrollPosition = targetElementTop - getMobileHeaderHeight();
            // 使用 scrollTo() 方法滾動到指定位置
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth', // 添加平滑滾動效果
            });
        }

        return {
            hasChildren,
            coverPageState,
            openNav,
            closeNav,
            closeNavInMobileMode,
            switchContentType,
            mobileHeader,
            moveToUnit,
        };
    },
};
</script>

<style scoped>
    .coverPage{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 3;
        top: 0;
    }

    .barBlock{
        padding: 8px 16px;
    }

    .mobileNav{
        display: none;
        background-color:#f44336;
        color: #fff;
        padding: 8px 16px;
        font-size: 1.25rem !important;
        position: fixed;
        width: 100%;
        top: 0;
    }

    .childrenMargin{
        margin-left: 2rem;
    }

    .photoSticker{
        width: 55%;
        display: block;
        margin: auto;
        border-radius: 50%;
        border: 1px solid rgb(253, 253, 253);
    }

    .nav{
        width: 20vw;
        max-width: 250px;
        height: 100%;
        font-weight: bold;
        color: #fff;
        background-color: #f44336;
        font-size: 1.0rem;
        top: 0;
        position: fixed;
        overflow: hidden;
        line-height: 1.5rem;
    }

    .pageLink {
        width: 100%;
        display: block;
        padding: 8px 16px;
        text-align: left;
        cursor: pointer;
        color: white;
    }

    .pageLink:hover {
        background-color: white;
        color: black;
    }

    .navContainer {
        width: 100%;
        margin-bottom: 40px;
        padding: 48px 16px 8px 16px;
        min-width: calc(min(250px, 20vw, 100%));
    }

    .navHeader {
        padding-top: 5px;
        padding-bottom: 0px;
        font-weight: 500;
        text-align: center;
        margin: 5px 0px 0px 0px;
    }

    h3.navHeader {
        font-size: 1.75rem;
        margin-top: 1.0rem;
        letter-spacing: 10px;
    }

    h4.navHeader {
        font-size: 1.5rem;
        padding-top: 0px;
        margin: 0px;
        white-space: pre;
    }

    .navFooter{
        position: absolute;
        bottom: 0px;
        width: 100%;
    }

    @media only screen and (max-width: 1440px) {
        .navContainer {
            margin-bottom: 1.75rem;
            padding-top: 1.75rem;
        }
        h3.navHeader {
            font-size: 2.0rem;
        }
        h4.navHeader {
            font-size: 1.5rem;
        }
    }

    @media only screen and (max-width: 1024px) {
        .nav{
            font-size: 0.8rem;
        }
        h3.navHeader {
            font-size: 1.5rem;
        }
        h4.navHeader {
            font-size: 1.25rem;
        }
    }

    @media only screen and (max-width: 820px) {
        .mobileNav{
            display: flex;
            align-items: center;
            position: fixed;
            z-index: 2;
        }
        .mobileNav span{
            margin-left: 1.0rem;
        }
        .nav{
            width: 0;
            padding: 0;
            margin: 0;
            transition: width 1s;
            overflow: hidden;
            z-index: 4;
        }
        .open{
            z-index: 4;
            width: calc(min(250px, 50vw));
        }

        .navContainer {
            min-width: calc(min(250px, 50vw));
        }

        .navFooter,
        .barBlock {
            min-width: calc(min(250px, 50vw));
        }

        .barBlock{
            padding: 8px 8px;
        }

        .navBtn {
            background-color: rgba(255, 122, 122, 0.856) !important;
            color: white !important;
            font-size: 1.0rem !important;
        }
        .navBtn:hover{
            background-color: rgb(248, 161, 161) !important;
            color: white !important;
        }
    }
</style>
