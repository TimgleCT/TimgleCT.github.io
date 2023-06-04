<template>
    <div class = "imgBox group">
        <template v-if="isMobile()">
            <div class="ui grid">
                <div class="four wide column">
                    <img class="imgBoxImg" :class="setHeadShotFloat()" :src="headShot">
                </div>
                <div class="twelve wide column">
                    <h4>{{title}}</h4>
                </div>
            </div>
        </template>

        <img v-if="!isMobile()" class="imgBoxImg" :class="setHeadShotFloat()" :src="headShot">
        <div class = "imgBoxContent" :class="setContentPadding()">
            <h4 v-if="!isMobile()">{{title}}</h4>
            <paragraph
                :content-list="contentList"
                height="100px"
                :collapse-mode="true"
                :readMoreBtnDirection="setReadMoreBtnFloat()"
                >
                 <div class="imgs-slideshow">
                    <template v-for="(img, index) in imgList" :key="index">
                        <div v-if="showImgs(index)">
                            <img :src="img">
                        </div>
                    </template>
                    <a class="prev" @click="moveImgsSlides('back')">&#10094;</a>
                    <a class="next" @click="moveImgsSlides('go')">&#10095;</a>
                </div>
            </paragraph>
        </div>
    </div>
</template>

<script>

const {
    ref,
} = Vue;

export default {
    name: 'paragraph-images-card',
    components: {
        paragraph: Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/paragraph.vue')),
    },
    props: {
        contentList: {
            type: Array,
            default() {
                return [''];
            },
        },
        imgList: {
            type: Array,
            default() {
                return [''];
            },
        },
        headShot: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        headShotDirection: {
            type: String,
            default: 'left',
        },
    },

    setup(props) {
        const currentImgIndex = ref(0);
        const viewConfigs = {
            headShotDirection: 'right',
            readMoreBtnDirection: 'right',
        };

        function isMobile() {
            if (window.innerWidth <= 425) {
                return true;
            }
            return false;
        }

        function setViewConfig() {
            if (isMobile()) {
                return;
            }
            switch (props.headShotDirection) {
            case 'left':
                viewConfigs.headShotDirection = 'left';
                viewConfigs.readMoreBtnDirection = 'right';
                break;

            case 'right':
                viewConfigs.headShotDirection = 'right';
                viewConfigs.readMoreBtnDirection = 'left';
                break;

            default:
                console.error('Unknown direction. Please set headShotDirection with right or left.');
                break;
            }
        }

        function setHeadShotFloat() {
            switch (viewConfigs.headShotDirection) {
            case 'left':
                return 'floatLeft';

            case 'right':
                return 'floatRight';

            default:
                console.error('Unknown direction. Please set headShotDirection with right or left.');
                return '';
            }
        }

        function setContentPadding() {
            switch (viewConfigs.headShotDirection) {
            case 'left':
                return 'imgBoxContentPaddingLeft';

            case 'right':
                return 'imgBoxContentPaddingRight';

            default:
                console.error('Unknown direction. Please set headShotDirection with right or left.');
                return '';
            }
        }

        function setReadMoreBtnFloat() {
            return viewConfigs.readMoreBtnDirection;
        }

        function moveImgsSlides(moveAction = 'go') {
            const step = (moveAction === 'go') ? 1 : -1;
            if (currentImgIndex.value + step < 0) {
                currentImgIndex.value = props.imgList.length - 1;
                return;
            }
            if (currentImgIndex.value + step > props.imgList.length - 1) {
                currentImgIndex.value = 0;
                return;
            }
            currentImgIndex.value += step;
        }

        function showImgs(index) {
            return index === currentImgIndex.value;
        }

        setViewConfig();

        return {
            setHeadShotFloat, setReadMoreBtnFloat, moveImgsSlides, showImgs, isMobile, setContentPadding,
        };
    },
};
</script>

<style scoped>
.imgBox{
    width: 95%;
    max-width: 80rem;
    padding: 1rem 0.5rem;
    margin: 2rem auto 3rem auto;
    box-shadow: 0 0 10px #373a3a;
}
.imgBoxImg{
    width: 30%;
    max-width: 20rem;
    border-radius: 50%;
    padding: 3% 4% ;
}
.hide{
    display: none;
}
.imgBox .imgBoxContentPaddingLeft{
    padding: 2rem 1rem 2rem 25%;
}
.imgBox .imgBoxContentPaddingRight{
    padding: 2rem 25% 2rem 1.5rem;
}
.imgBox p{
    line-height: 30px;
}
.imgs-slideshow{
    position: relative;
    padding: 2rem 0;
    height: max-content;
}
.imgs-slideshow > div{
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
}
.imgs-slideshow img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.imgBoxContent > div{
    display: block;
}
.prev,
.next {
    cursor: pointer;
    position: absolute;
    top: 60%;
    width: auto;
    padding: 16px;
    margin-top: -50px;
    color: white;
    background-color: rgba(95, 91, 91, 0.432);
    font-weight: bold;
    font-size: 20px;
    border-radius: 0 8px 8px 0;
    user-select: none;
    -webkit-user-select: none;
}
.next {
    right: 0;
    border-radius: 8px 0 0 8px;
}
.prev:hover,
.next:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: orange;
}

.imgBox .ui.grid > div{
    display: flex !important;
    align-items: center;
}

.imgBoxContent::v-deep .readMore{
    margin: 2rem 3rem 1rem 3rem;
}

@media only screen and (max-width: 425px) {
    .imgBox .imgBoxContent{
        padding: 0 1rem 0.5rem 1rem;
    }
    .imgBoxImg{
        width: 100%;
    }
    .imgs-slideshow{
        padding: 0;
    }
    .floatLeft, .floatRight {
        float: initial;
    }

    .imgBoxContent::v-deep .readMore{
        margin: 1.5rem 1.5rem 0.5rem 1.5rem;
    }

    .ui.grid {
        margin: 0;
    }

    .ui.grid .wide.column {
        padding: 0 0.5rem;
    }

    .imgs-slideshow > div{
        height: 250px;
    }
}
</style>
