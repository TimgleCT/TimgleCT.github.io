<template>
    <div @click="clickFunction" class="colorBox colorBoxColor" :style="{'--backgroundColor': backgroundColor, '--textColor': textColor }">
        <div class="ui right ribbon label ribbonBackgroundColor ribbonFoldBorderColor"
            :style="{'--ribbonBackgroundColor': ribbonBackgroundColor, '--ribbonFoldBorderColor': ribbonFoldBorderColor }">
            {{label}}
        </div>
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
            paleMouse: {
                backgroundColor: '#8593b5',
                color: 'white',
                iconBackgroundColor: '#6d7a99',
                ribbonBackgroundColor: '#5b6785',
                ribbonFoldBorderColor: '#555861',
            },
            heliotrope: {
                backgroundColor: '#e3a9a8',
                color: 'white',
                iconBackgroundColor: '#e7b7b5',
                ribbonBackgroundColor: '#c59c9b',
                ribbonFoldBorderColor: '#ab7170',
            },
            lightVermilion: {
                backgroundColor: '#F0908D',
                color: 'white',
                iconBackgroundColor: '#dd8d8c',
                ribbonBackgroundColor: '#ff9a98',
                ribbonFoldBorderColor: '#cfb3b3',
            },
            plumGray: {
                backgroundColor: '#9E7A7A',
                color: 'white',
                iconBackgroundColor: '#917777',
                ribbonBackgroundColor: '#8f4b4b',
                ribbonFoldBorderColor: '#6d3838',
            },
            irisQuartz: {
                backgroundColor: '#A18594',
                color: 'white',
                iconBackgroundColor: '#917684',
                ribbonBackgroundColor: '#bf94ab',
                ribbonFoldBorderColor: '#735d69',
            },
            paleCloudedGray: {
                backgroundColor: '#B3ADA0',
                color: 'white',
                iconBackgroundColor: '#9f9b93',
                ribbonBackgroundColor: '#979082',
                ribbonFoldBorderColor: '#736649',
            },
            paleSlateGray: {
                backgroundColor: '#877F84',
                color: 'white',
                iconBackgroundColor: '#757274',
                ribbonBackgroundColor: '#71646c ',
                ribbonFoldBorderColor: '#5f4c58',
            },
            halfColonialWhite: {
                backgroundColor: '#A69ABD',
                color: 'white',
                iconBackgroundColor: '#998fab',
                ribbonBackgroundColor: '#7b6e95',
                ribbonFoldBorderColor: '#3b3547',
            },
            ceruleanBlue: {
                backgroundColor: '#95A3B3',
                color: 'white',
                iconBackgroundColor: '#7e8d9f',
                ribbonBackgroundColor: '#697d93',
                ribbonFoldBorderColor: '#4e5761',
            },
            gainsboro: {
                backgroundColor: '#B0C4DE',
                color: 'white',
                iconBackgroundColor: '#99aec9',
                ribbonBackgroundColor: '#97a9c1',
                ribbonFoldBorderColor: '#76879d',
            },
            paleBlossom: {
                backgroundColor: '#C6C6C6',
                color: 'white',
                iconBackgroundColor: '#C6C6C6',
                ribbonBackgroundColor: '#C6C6C6',
                ribbonFoldBorderColor: '#C6C6C6',
            },
            palePeriwinkle: {
                backgroundColor: '#BBC8E6',
                color: 'white',
                iconBackgroundColor: '#BBC8E6',
                ribbonBackgroundColor: '#BBC8E6',
                ribbonFoldBorderColor: '#BBC8E6',
            },
            wisteriaPurple: {
                backgroundColor: '#81559B',
                color: 'white',
                iconBackgroundColor: '#81559B',
                ribbonBackgroundColor: '#81559B',
                ribbonFoldBorderColor: '#81559B',
            },
            mouseGray: {
                backgroundColor: '#888C8D',
                color: 'white',
                iconBackgroundColor: '#888C8D',
                ribbonBackgroundColor: '#888C8D',
                ribbonFoldBorderColor: '#888C8D',
            },
        };

        function getColor(type, itemName) {
            return colorGroups[type][itemName];
        }

        const backgroundColor = computed(() => getColor(props.color, 'backgroundColor'));
        const textColor = computed(() => getColor(props.color, 'color'));
        const iconBackgroundColor = computed(() => getColor(props.color, 'iconBackgroundColor'));
        const ribbonBackgroundColor = computed(() => getColor(props.color, 'ribbonBackgroundColor'));
        const ribbonFoldBorderColor = computed(() => getColor(props.color, 'ribbonFoldBorderColor'));

        return {
            getColor, backgroundColor, textColor, iconBackgroundColor, ribbonBackgroundColor, ribbonFoldBorderColor,
        };
    },
};
</script>

<style scoped>
    .colorBox{
        width: 100%;
        height: 550px;
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
    .ribbonBackgroundColor{
        background-color: var(--ribbonBackgroundColor) !important;
        color:white;
    }
    .ribbonFoldBorderColor{
        border-color: var(--ribbonFoldBorderColor) !important;
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
        font-size: 1.5rem;
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
        top: 1rem;
        left: calc(100% + 1rem);
        z-index: 1;
        font-size: 0.85rem;
        font-weight: 400;
        backface-visibility: hidden;
        transition: 0.6s;
        transform-style: preserve-3d;
    }
    @media only screen and (max-width: 1400px) {
        .colorBox {
            height: 450px;
        }
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
            font-size: 0.75rem;
            padding: 0.25rem;
            margin: 0.25rem;
        }
        .colorBoxContent h4{
            font-size: 1.5rem;
        }
        .ui[class*="right ribbon"].label{
            left: calc(100% + 0.75rem);
        }
    }
</style>
