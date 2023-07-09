<template>
    <div @click="clickFunction" class="colorBox colorBoxColor" :style="{'--backgroundColor': backgroundColor, '--textColor': textColor }">
        <div class = "ui right ribbon label" :class="labelStyle">{{label}}</div>
        <div class = "circleImg" :style="{'--iconBackgroundColor': iconBackgroundColor }">
            <img :src="iconURL">
        </div>
        <div class = "colorBoxContent">
            <h4>{{title}}</h4>
            <div v-for="(tag, index) in tags" :key="index">{{tag}}</div>
        </div>
    </div>
</template>

<script>
const { computed } = Vue;
export default {
    name: 'color-box',
    props: {
        title: {
            type: String,
            default: '標題',
        },
        color: {
            type: String,
            default: 'pink',
        },
        label: {
            type: String,
            default: '',
        },
        iconURL: {
            type: String,
            default: '',
        },
        tags: {
            type: Array,
            default: () => [],
        },
        clickFunction: {
            type: Function,
            default: () => 0,
        },
    },

    setup(props) {
        const colorGroups = {
            blue: {
                backgroundColor: 'rgb(48, 123, 197)',
                color: 'white',
                iconBackgroundColor: '#0359AE',
                labelStyle: 'violet',
            },
            tiffanyGreen: {
                backgroundColor: 'rgb(71, 192, 176)',
                color: 'white',
                iconBackgroundColor: '#14B09B',
                labelStyle: 'olive',
            },
            brown: {
                backgroundColor: 'rgb(204, 196, 179)',
                color: 'white',
                iconBackgroundColor: 'rgb(211, 193, 156)',
                labelStyle: 'brown',
            },
            pink: {
                backgroundColor: 'rgb(241, 169, 170)',
                color: 'white',
                iconBackgroundColor: '#EB8F90',
                labelStyle: 'pink',
            },
            orange: {
                backgroundColor: 'rgb(255, 195, 143)',
                color: 'white',
                iconBackgroundColor: '#FFB471',
                labelStyle: 'orange',
            },
            grey: {
                backgroundColor: 'rgb(172, 193, 216)',
                color: 'white',
                iconBackgroundColor: 'rgb(164, 182, 202)',
                labelStyle: 'grey',
            },
            pinkPurple: {
                backgroundColor: 'rgb(199, 114, 161)',
                color: 'white',
                iconBackgroundColor: 'rgb(170 82 131)',
                labelStyle: 'red',
            },
            purple: {
                backgroundColor: 'rgb(111, 113, 172)',
                color: 'white',
                iconBackgroundColor: 'rgb(92 94 161)',
                labelStyle: 'purple',
            },
            teal: {
                backgroundColor: 'rgb(147, 189, 189)',
                color: 'white',
                iconBackgroundColor: 'rgb(124 185 185)',
                labelStyle: 'teal',
            },
        };

        function getColor(type, itemName) {
            return colorGroups[type][itemName];
        }

        const backgroundColor = computed(() => getColor(props.color, 'backgroundColor'));
        const textColor = computed(() => getColor(props.color, 'color'));
        const iconBackgroundColor = computed(() => getColor(props.color, 'iconBackgroundColor'));
        const labelStyle = computed(() => getColor(props.color, 'labelStyle'));

        return {
            getColor, backgroundColor, textColor, iconBackgroundColor, labelStyle,
        };
    },
};
</script>

<style scoped>
    .colorBox{
        width: 100%;
        height: 500px;
        padding: 0.5rem 2.5rem 0.5rem 2.5rem;
        position: relative;
        transition: all 250ms cubic-bezier(0.02,0.01,0.47,1);
        box-shadow: 0 4px 16px rgba(48,55,66,0.15);
    }
    .colorBox:hover{
        box-shadow: 0 16px 32px rgba(48, 55, 66, 0.76);
        transform: translate(0,-5px);
        transition-delay: 0s !important;
        z-index: 1;
        cursor: pointer;
    }
    .colorBoxColor{
        background-color: var(--backgroundColor);
        color: var(--textColor);
    }
    .circleImg{
        background-color: var(--iconBackgroundColor);
    }
    .circleImg{
        width: 10rem;
        height: 10rem;
        min-width: 8rem;
        min-height: 8rem;
        padding-top: 1.75rem;
        border: solid 2px white;
        border-radius: 50%;
        margin: 5rem auto 11% auto;
    }
    .circleImg img{
        display: block;
        margin: auto;
        width: 60%;
    }
    .colorBoxContent{
        margin-top: .5vw;
        text-align: center;
        margin-bottom: 1.2vw;
    }
    .colorBoxContent h4{
        text-align: center;
        font-size: 1.7rem;
        font-weight: 500;
        margin-bottom: 9%;
    }
    .colorBoxContent div{
        display: inline-block;
        font-size: 0.85rem;
        min-width: 5rem;
        border-radius: 6px;
        border: solid 2px white;
        margin: 0.5rem;
        padding: 0.5rem;
    }
    .ui[class*="right ribbon"].label{
        padding: 0.5rem 0.8rem 0.5rem 0.8rem;
        position: absolute;
        top:1rem;
        left: calc(100% + 1.1rem);
        z-index: 1;
        font-size: 1.1rem;
        font-weight: 400;
        backface-visibility: hidden;
        transition: 0.6s;
        transform-style: preserve-3d;
    }
    @media only screen and (max-width: 1024px) {
        .circleImg{
            width: 6rem;
            height: 6rem;
            padding-top: 1.5rem;
            margin: 2.5rem auto 11% auto;
        }
        .colorBox {
            height: 400px;
            padding: 0.5rem 1rem 0.5rem 1rem;
        }
    }
    @media only screen and (max-width: 500px) {
        .colorBox {
            height: 350px;
        }
        .circleImg{
            width: 5rem;
            height: 5rem;
            padding-top: 1.5rem;
            margin: 2.5rem auto 11% auto;
        }
        .colorBoxContent div{
            font-size: 0.5rem;
            padding: 0.25rem;
            margin: 0.25rem;
        }
        .colorBoxContent h4{
            font-size: 1.5rem;
        }
        .ui[class*="right ribbon"].label{
            font-size: 0.75rem;
            left: calc(100% + 0.75rem);
        }
    }
</style>
