<template>
    <div class="nav" :class="{'open': coverPageState}">
        <div class="navContainer">
            <img id="myProfile" :src="user.img.url" :alt="user.name.Zh" />
            <h3 class="navHeader">{{user.name.Zh}}</h3>
            <h4 class="navHeader">{{user.name.En}}</h4>
        </div>
        <div class="barBlock">
            <template v-for="(rout, index) in routers" :key="index">
                <template v-if="hasChildren(rout)">
                    <DropDown :mainTitle="rout.title" :domId="rout.link">
                        <template v-for="(child, index) in rout.children" :key="index">
                            <NavLink :url="child.link" :title="child.title" @clickAction="closeNavInMobileMode"></NavLink>
                        </template>
                    </DropDown>
                </template>
                <template v-else>
                    <NavLink :url="rout.link" :title="rout.title" @clickAction="closeNavInMobileMode"></NavLink>
                </template>
            </template>
        </div>
    </div>

    <header class="mobileNav" @click="openNav">
        <a href="#" class = "ui button" id ="menuBtn">☰</a>
        <span>{{user.name.En}}</span>
    </header>

    <div v-show="coverPageState" class="coverPage" @click="closeNav"></div>

</template>

<script>

const { ref } = Vue;

export default {
    name: 'UserNav',
    components: {
        DropDown: Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/DropDown.vue')),
        NavLink: Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/NavLink.vue')),
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
                return [
                    {
                        title: '關於我',
                        link: '#aboutMePage',
                        children: [
                            { title: '學歷', link: '#educationPage' },
                            { title: '能力自評', link: '#skills' },
                        ],
                    },
                    {
                        title: '相關經驗',
                        link: '#workExperience',
                        children: [
                            { title: '工作經驗', link: '#workExperience' },
                            { title: '社團經驗', link: '#clubExperience' },
                            { title: '競賽經驗', link: '#competitionExperience' },
                            { title: '志工服務經驗', link: '#volunteerExperience' },
                        ],
                    },
                    {
                        title: '重要事件',
                        link: '#importantEvent',
                        children: [],
                    },
                    {
                        title: '作品集',
                        link: '#portfolio',
                        children: [],
                    },
                    {
                        title: '其他證明文件',
                        link: '#certificate',
                        children: [],
                    },
                    {
                        title: '聯絡資訊',
                        link: '#contact',
                        children: [],
                    },
                ];
            },
        },
    },
    setup() {
        const coverPageState = ref(false);

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

        return {
            hasChildren,
            coverPageState,
            openNav,
            closeNav,
            closeNavInMobileMode,
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

    .mobileNav{
        display: none;
        background-color:#f44336;
        color: #fff;
        padding: 8px 16px;
        font-size: 24px !important;
        position: fixed;
        width: 100%;
        top: 0;
    }

    .childrenMargin{
        margin-left: 2rem;
    }

    .nav{
        width: 20vw;
        max-width: 280px;
        height: 100%;
        font-weight: bold;
        color: #fff;
        background-color: #f44336;
        padding: 8px 16px;
        font-size: 1.1rem;
        top: 0;
        position: fixed;
        overflow: auto;
        line-height: 1.5;
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
        padding-top: 40px;
        min-width: calc(min(250px, 20vw, 100%));
    }

    .barBlock {
        min-width: calc(min(250px calc(20vw - 32px)));
    }

    .navHeader {
        padding-top: 5px;
        padding-bottom: 0px;
        font-weight: 500;
        text-align: center;
        margin: 5px 0px 0px 0px;
    }

    h3.navHeader {
        font-size: 2.5rem;
        margin-top: 1.5rem;
    }

    h4.navHeader {
        font-size: 2.0rem;
        padding-top: 0px;
        margin: 0px;
        white-space: pre;
    }

    @media only screen and (max-width: 1440px) {
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
            display: block;
            position: fixed;
            z-index: 2;
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

        .barBlock {
            min-width: calc(min(250px, 50vw));
        }
    }
</style>
