<template>
    <li>
        <div class="circle"></div>
        <div class="date">{{date}}</div>
        <div class="disc">
            <div class="timelineHead timelineHeadColor" :style="{'--color': colorHead, '--after': colorHeadAfter}">
                <div class="numberBox"><span>{{addZero(index)}}</span></div>
                <div class="title"><span>{{title}}</span></div>
            </div>
            <div class="timelineContent timelineContentColor" :style="{'--color': colorContent }">
                <ul>
                    <li v-for="(content, index) in contentList" :key="index">{{content}}</li>
                </ul>
                <img v-if="imgUrl!==''" class="timelineImg" :src="imgUrl">
            </div>
        </div>
    </li>
</template>

<script>
const { computed } = Vue;
export default {
    name: 'timeLine',
    props: {
        index: {
            type: Number,
            default: 1,
        },
        date: {
            type: String,
            default: '時間',
        },
        title: {
            type: String,
            default: '標題',
        },
        contentList: {
            type: Array,
            default: () => [],
        },
        imgUrl: {
            type: String,
            default: '',
        },
        styleType: {
            type: String,
            default: '',
        },
        colorGroup: {
            type: String,
            default: 'DeepCocoa',
        },
    },
    setup(props) {
        const getColor = (colorGroup, colorName) => {
            const colorGroups = {
                DeepCocoa: {
                    colorHead: '#9E605B',
                    colorHeadAfter: '#703E3B',
                    colorContent: '#D8A19C',
                },
                FieryOrange: {
                    colorHead: '#CD715E',
                    colorHeadAfter: '#9C423B',
                    colorContent: '#F1B7A7',
                },
                CoralHues: {
                    colorHead: '#8C3D35',
                    colorHeadAfter: '#B6655C',
                    colorContent: '#E3A39B',
                },
                CherryBlossom: {
                    colorHead: '#A14652',
                    colorHeadAfter: '#6E1F2B',
                    colorContent: '#D08A8F',
                },
                CrimsonRed: {
                    colorHead: '#BF5A4A',
                    colorHeadAfter: '#8D2C2C',
                    colorContent: '#ED9F8E',
                },
                DeepOrchid: {
                    colorHead: '#82526E',
                    colorHeadAfter: '#4B2E39',
                    colorContent: '#B9A3B6',
                },
                BurntOrange: {
                    colorHead: '#A35F23',
                    colorHeadAfter: '#C98D5B',
                    colorContent: '#F4D1AE',
                },
                RichTerracotta: {
                    colorHead: '#BF7A5E',
                    colorHeadAfter: '#8E5235',
                    colorContent: '#F0B099',
                },
                AmberRed: {
                    colorHead: '#9F463A',
                    colorHeadAfter: '#D06E5B',
                    colorContent: '#F2AA9B',
                },
                DeepCarmine: {
                    colorHead: '#A25B6D',
                    colorHeadAfter: '#7B2C3B',
                    colorContent: '#D1A4A9',
                },
            };

            return colorGroups[colorGroup][colorName];
        };
        const colorHead = computed(() => getColor(props.colorGroup, 'colorHead'));
        const colorHeadAfter = computed(() => getColor(props.colorGroup, 'colorHeadAfter'));
        const colorContent = computed(() => getColor(props.colorGroup, 'colorContent'));

        function addZero(num = 1) {
            if (num < 10) {
                return `0${num}`;
            }
            return num;
        }

        return {
            addZero, colorHead, colorHeadAfter, colorContent,
        };
    },
};
</script>

<style>

li div{
    display: inline-block;
    vertical-align: top;
}
li .circle{
    width: 2rem;
    height: 2rem;
    box-sizing: border-box;
    border-radius: 50%;
    background: rgb(202, 91, 91);
    z-index: 1;
    margin-right: 0.8rem;
    margin-top: 1.5rem;
}
.date{
    margin-top: 1.5rem;
    margin-left: 1rem;
    margin-right: 4rem;
    font-size: 1.75rem;
    line-height: 2.2rem;
    font-weight: 500;
    text-align: center;
}
.disc{
    width: calc(100% - 250px);
    padding-top: 1.25rem;
    margin: 0 0 2em 0;
    position: relative;
}
.timelineHead{
    width: 100%;
    display: flex;
    padding: 0.5rem;
}
.timelineHead::after{
    border-right-width: 2rem;
    border-right-style: solid;
    left: -3.0rem;
    position: absolute;
    content: "";
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
}
.timelineHeadColor{
    background-color: var(--color);
}
.timelineHeadColor::after{
    color: var(--after);
}
.timelineContent{
    width: 100%;
    padding: 1em ;
    float: left;
    color: white;
    font-weight: 300;
}
.timelineContent ul{
    list-style-type: disc;
    padding: 0 1rem 0 1.5rem;
}
.timelineContent ul li{
    margin: 0 0 1rem 0;
    line-height: 1.6rem;
}
.timelineContentColor{
    background-color: var(--color);
}
.numberBox{
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.151);
    font-size: 2.0em;
    text-align: center;
    color: white;
}
.numberBox span {
    padding: 1rem;
}
.timelineHead .title{
    color:white;
    font-size: 1.75rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    margin-left: 1.0rem;
    line-height: initial;
}
.timelineImg{
    display: block;
    margin: 2rem auto;
    width: calc(100% - 2rem);
    max-width: 40rem;
    box-shadow: 0 0 20px #373a3a;
}

@media only screen and (max-width: 1920px) {
    .timelineContent ul{
        width: auto;
    }
}

@media only screen and (max-width: 1400px) {
    .date{
        font-size: 1.5rem;
    }
}

@media only screen and (max-width: 1024px) {
    .timelineHead::after{
        display: none;
    }
    .disc{
        width: calc(100% - 180px);
    }
    .date{
        font-size: 1.5rem;
        margin-right: 1.5rem;
    }
    .timelineImg{
        margin: 2rem 1rem;
    }
}

@media only screen and (max-width: 425px) {
    li .circle{
        width: 1.25rem;
        height: 1.25rem;
        margin-right: 0.5rem;
        margin-top: 0.5rem;
    }
    .date{
        font-size: 1.25rem;
        margin-top: 0rem;
        margin-bottom: 0rem;
        width: 60%;
        text-align: left;
        padding: 0 0.8rem 0 0.8rem;
    }
    .timelineHead{
        padding: 0.75rem;
    }
    .timelineHead::after {
        display: none;
    }
    .disc{
        width: calc(100% - 20px);
        float: right;
        padding-top: 0;
        margin: 0.5rem 0 2rem 0;
    }
    .numberBox{
        font-size: 1.25rem;
    }
    .numberBox span {
        padding: 0.75rem;
    }
    .timelineHead .title{
        font-size: 1.25rem;
    }
    .timelineContent{
        padding: 0.5rem;
    }
    .timelineContent ul{
        padding: 0 0 0 1.5rem;
    }
    .timelineContent ul li{
        font-size: 0.9rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
}

</style>
