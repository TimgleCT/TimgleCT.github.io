<template>
    <div class = "cardBlock group">
        <div v-if="!isNullTag(tag)" class="ui right ribbon label" :class="styleOption[colorStyle].tagColorClass">{{tag}}</div>
        <div class = "cardFront" ref="cardFront" :style="cardHeight">
            <div class="background opacityBackground" :style="getBackgroundImgCSS(backgroundImg)"></div>
            <h3 class = "cardHead">{{bigTitle}}</h3>
            <img @load="finishImgLoading()" class = "cardImg" :src="logoImg">
            <h4 class="cardH4">{{mediumTitle}}</h4>
            <h4 class="cardH4">{{smallTitle}}</h4>
        </div>

        <div class = "cardBack" :class="styleOption[colorStyle].cardBackColorClass" ref="cardBack" :style="cardHeight">
            <img @load="finishImgLoading()" class = "cardImgBack" :src="rotateImg">
            <h4 class = "cardBackHeader">{{rotateTitle}}</h4>
            <div class="meta">
                {{rotateSubTitle}}
            </div>
            <div class = "cardBackContent">
                <div v-for="(content, index) in rotateContentList" :key="index" class="listItem group" :class="styleOption[colorStyle].listItemColorClass">
                    <img @load="finishImgLoading()" class="listIcon" :src="content.icon">
                    <div class = "floatLeft">
                        <div class = "listHeader">{{content.title}}</div>
                        <div class = "listP">{{content.desc}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

const {
    ref, onMounted, watchEffect,
} = Vue;

export default {
    name: 'content-rotateCard',
    props: {
        bigTitle: {
            type: String,
            default: '大標題',
        },

        mediumTitle: {
            type: String,
            default: '中標題',
        },

        smallTitle: {
            type: String,
            default: '小標題',
        },

        tag: {
            type: String,
            default: '備註',
        },

        colorStyle: {
            type: [String, Object, Array],
            default: 'yellow',
        },

        backgroundImg: {
            type: String,
            default: 'img/highschool.jpg',
        },

        logoImg: {
            type: String,
            default: 'img/schoolicon.png',
        },

        rotateImg: {
            type: String,
            default: 'img/school1-1.JPG',
        },

        rotateTitle: {
            type: String,
            default: '標題',
        },

        rotateSubTitle: {
            type: String,
            default: '副標題',
        },

        rotateContentList: {
            type: Array,
            default() {
                return [{
                    icon: 'img/schoolicon.png',
                    title: '標題',
                    desc: '描述',
                }];
            },
        },
    },

    setup(props) {
        const imgsNum = ref(2);
        const cardFront = ref(null);
        const cardBack = ref(null);
        const cardHeight = ref({ height: 'auto' });
        const styleOption = ref({
            yellow: {
                tagColorClass: 'yellow',
                cardBackColorClass: 'cardColorOrange-1',
                listItemColorClass: 'listItemColor-1',
            },
            orange: {
                tagColorClass: 'orange',
                cardBackColorClass: 'cardColorOrange-2',
                listItemColorClass: 'listItemColor-2',
            },
            red: {
                tagColorClass: 'red',
                cardBackColorClass: 'cardColorOrange-3',
                listItemColorClass: 'listItemColor-3',
            },
        });

        function finishImgLoading() {
            imgsNum.value -= 1;
        }

        function isNullTag(tag) {
            return (tag === '備註');
        }

        function getBackgroundImgCSS(url) {
            return {
                background: `url(${url})`,
                'background-size': 'cover',
                'background-position-x': 'center',
                'background-repeat': 'no-repeat',
            };
        }

        function setCardHeight() {
            const cardFrontHeight = cardFront.value.clientHeight;
            const cardBackHeight = cardBack.value.clientHeight;
            if (imgsNum.value === 0) {
                const higherHeight = (cardFrontHeight > cardBackHeight) ? cardFrontHeight : cardBackHeight;
                cardHeight.value = {
                    height: `${higherHeight}px`,
                };
            }
        }

        watchEffect(() => {
            if (cardFront.value && cardBack.value) {
                setCardHeight();
            }
        });

        onMounted(() => {
            imgsNum.value += props.rotateContentList.length;
        });

        return {
            isNullTag, getBackgroundImgCSS, styleOption, cardBack, cardFront, cardHeight, finishImgLoading,
        };
    },

};
</script>

<style scoped>
    .cardBlock{
        width: 31%;
        margin: 40px 1% 40px 1%;
        float: left;
        position:relative;
    }
    .cardHead{
        font-size: 2.5em;
        margin-bottom: 1.7rem;
        letter-spacing: 2px;
        text-align: center;
    }
    .cardH4{
        text-align: center;
        font-weight: 500;
    }
    .cardImg{
        width: 40%;
        display: block;
        margin: auto auto 3rem auto;
    }
    .cardImgBack{
        width: 100%;
        display: block;
        margin: auto;
        border-radius: 16px 16px 0px 0px;
    }
    .cardBlock:hover .cardBack{
        transform: rotateY(0deg);
    }
    .cardBlock:hover .cardFront {
        transform: rotateY(180deg);
    }
    .cardBlock:hover .ui[class*="right ribbon"].label {
        transform: rotateY(180deg);
    }
    .cardFront{
        width: 100%;
        padding: 15% 0px 15% 0px;
        border: 2px solid rgb(241, 51, 26);
        border-radius: 16px;
        backface-visibility: hidden;
        transition: 0.6s;
        transform-style: preserve-3d;
    }
    .cardBack{
        width: 100%;
        padding: 0px 0px 5px 0px;
        border-radius: 16px;
        backface-visibility: hidden;
        transition: 0.6s;
        transform-style: preserve-3d;
        transform: rotateY(-180deg);
        position:absolute;
        top: 0px;
        left: 0px;
    }
    .ui[class*="right ribbon"].label{
        padding: 0.4em 0.4em 0.4em 0.4em;
        position: absolute;
        top:1em;
        left: calc(100% + 1.1em);
        z-index: 1;
        font-size: 1.1em;
        font-weight: 400;
        backface-visibility: hidden;
        transition: 0.6s;
        transform-style: preserve-3d;
    }
    .cardColorOrange-1{
        color: snow;
        background-color: rgb(243, 151, 90);
        border: 2px solid rgb(240, 182, 143);
    }
    .cardColorOrange-2{
        color: snow;
        background-color: #F4874B;
        border: 2px solid rgb(230, 149, 95);
    }
    .cardColorOrange-3{
        color: snow;
        background-color: #F46A4E;
        border: 2px solid rgb(228, 97, 10);
    }
    .cardBackHeader{
        padding: 0px 20px 0px 20px;
        margin-bottom: 2px;
    }
    .meta{
        padding: 0px 20px 0px 30px;
        font-size: 0.9em;
        color: rgba(255, 255, 255, 0.644);
    }
    .listIcon{
        width: calc(min(11.5%, 2.5rem));
        height: calc(min(11.5%, 2.5rem));
        margin-right: calc(min(5%, 1rem));
    }
    .cardBackContent{
        padding: calc(min(2.5%, 1rem)) calc(min(2.5%, 1rem)) 0px calc(min(2.5%, 1rem));
    }
    .listHeader{
        font-size: 1rem;
        font-weight: 500;
    }
    .listP{
        font-size: 0.8rem;
        font-weight: 300;
    }
    .listItem{
        display: flex;
        align-items: center;
        margin: 0.8em 7.5px 0.8em 7.5px;
        padding: 5px 7.5px 5px 7.5px;
        border-radius: 8px;
    }
    .listItemColor-1{
        border: 1.3px solid rgb(241, 186, 104);
        color: rgb(255, 255, 255);
        background-color: rgb(241, 186, 104);
    }
    .listItemColor-2{
        border: 1.3px solid rgb(207, 81, 13);
        color: rgb(255, 255, 255);
        background-color: rgb(207, 81, 13);
    }
    .listItemColor-3{
        border: 1.3px solid rgb(184, 44, 17);
        color: rgb(255, 255, 255);
        background-color:  rgb(184, 44, 17);
    }
    .opacityBackground{
        border-radius: 16px;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: -1;
        opacity: 0.2;
    }
    @media only screen and (max-width: 1024px) {
        .cardHead{
            font-size: 1.75rem;
        }
        .cardH4{
            font-size: 1.25rem;
        }
        .cardBackContent{
            padding: calc(min(2.5%, 0.8rem)) calc(min(2.5%, 0.8rem)) 0px calc(min(2.5%, 0.8rem));
        }
        .meta{
            padding: 0px 10px 0px 30px;
            font-size: 0.75rem;
        }
        .listItem{
            margin: 0.8rem 0px 0.8rem 0px;
        }
        .listHeader{
            font-size: 0.9rem;
            font-weight: 500;
        }
        .listP{
            font-size: 0.7rem;
            font-weight: 300;
        }
        .listIcon{
            width: calc(min(11.5%, 1.5rem));
            height: calc(min(11.5%, 1.5rem));
            margin-right: calc(min(5%, 0.5rem));
        }
    }

    @media only screen and (max-width: 750px) {
        .cardBlock{
            width: 95%;
            margin: 15px 1.5% 15px 1.5%;
        }
        .cardHead{
            margin-bottom: 2rem;
            font-size: 1.5rem;
        }
        .cardImg{
            margin-bottom: 3rem;
        }
        .cardH4{
            font-size: 1.3rem;
        }
        .meta{
            font-size: 0.75rem;
        }
        .cardBackHeader{
            margin-top: 1rem;
        }
        .cardBackContent{
            padding: 0px 0.8rem 0rem 0.8rem;
            margin-bottom: 1rem;
        }
        .listHeader{
            font-size: 1rem;
            font-weight: bold;
        }
        .listP{
            font-size: 0.8rem;
            font-weight: normal;
        }
        .listIcon{
            width: 2.5rem;
            height: 2.5rem;
            margin-right: 1rem;
        }
    }
</style>
