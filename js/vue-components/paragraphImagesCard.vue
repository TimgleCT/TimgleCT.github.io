<template>
    <div class = "imgBox group">
        <template v-if="isMobile()">
            <div class="ui grid">
                <div class="four wide column">
                    <img class="imgBoxImg" :class="setHeadShotFloat()" :src="headShot">
                </div>
                <div class="twelve wide column imgBoxContent">
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
                ref="paragraph"
                >
                <div>
                    <imgs-slides
                        :img-list="imgList"
                        @loaded="setParagraphHeight"
                    ></imgs-slides>
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
        imgsSlides: Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/imgSlides.vue')),
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
        const paragraph = ref(null);
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

        function setParagraphHeight() {
            paragraph.value.setMaxHeight();
        }

        setViewConfig();

        return {
            setHeadShotFloat, setReadMoreBtnFloat, isMobile, setContentPadding, paragraph, setParagraphHeight,
        };
    },
};
</script>

<style scoped>
.imgBox{
    width: 95%;
    max-width: 80rem;
    padding: 1rem 0.5rem;
    margin: 3rem auto 3rem auto;
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

.imgBoxContent h4{
    font-size: 1.5rem;
}

.imgBoxContent > div{
    display: block;
}

.imgBox .ui.grid > div{
    display: flex !important;
    align-items: center;
}

.imgBoxContent::v-deep .readMore{
    margin: 2rem 3rem 1rem 3rem;
}

.floatLeft{
    float: left;
}

.floatRight{
    float: right;
}

@media only screen and (max-width: 425px) {
    .imgBoxContent h4{
        font-size: 1.25rem;
    }
    .imgBox .imgBoxContent{
        padding: 0 1rem 0.5rem 1rem;
    }
    .imgBoxImg{
        width: 100%;
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
}
</style>
