<template>
    <div class="imgs-slideshow">
        <template v-for="(img, index) in imgList" :key="index">
            <div class="mainImgs" v-if="showImgs(index)">
                <div v-if="!preview" class="numberText">{{index + 1}} / {{imgList.length}}</div>
                <img class="mainImg" :src="img">
            </div>
        </template>
        <a class="prev" @click="moveImgsSlides('back')">&#10094;</a>
        <a class="next" @click="moveImgsSlides('go')">&#10095;</a>
        <div v-if="validDesc" class="imgDesc">
            <p>{{imgDescriptionList[currentImgIndex]}}</p>
        </div>
        <div v-if="preview" class="row smallImgRow">
            <div v-for="(img, index) in imgList" :key="index" class="column" @click="moveImgsSlidesToIndex(index)">
                <img class="smallImg" :src="img" :class="{'active': showImgs(index)}">
            </div>
        </div>
    </div>
</template>

<script>

const {
    ref, onMounted, nextTick, computed,
} = Vue;

export default {
    name: 'imgs-slides',
    emits: ['loaded'],
    props: {
        imgList: {
            type: Array,
            default() {
                return [''];
            },
        },
        imgDescriptionList: {
            type: Array,
            default() {
                return [''];
            },
        },
        preview: {
            type: Boolean,
            default: false,
        },
    },

    setup(props, { emit }) {
        const currentImgIndex = ref(0);

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

        function moveImgsSlidesToIndex(index) {
            currentImgIndex.value = index;
        }

        function showImgs(index) {
            return index === currentImgIndex.value;
        }

        const validDesc = computed(() => (props.imgList.length === props.imgDescriptionList.length) && (props.imgDescriptionList.length !== 0));

        onMounted(async () => {
            await nextTick();
            emit('loaded');
        });

        return {
            moveImgsSlides, showImgs, validDesc, moveImgsSlidesToIndex, currentImgIndex,
        };
    },
};
</script>

<style scoped>
.imgs-slideshow{
    position: relative;
    padding: 2rem 0;
    height: max-content;
}
.mainImgs{
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
}
.imgs-slideshow .mainImg{
    width: 100%;
    height: 100%;
    object-fit: contain;
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

.imgDesc {
    text-align: center;
    background-color: rgba(87, 85, 78, 0.658);
    font-size: 1.5rem;
    font-weight: 200;
    padding: 0.75rem;
    color: white;
    height: auto !important;
}

.numberText {
    color: #f2f2f2;
    background-color: #9b9b9b77;
    border-radius: 8px;
    font-size: 1rem;
    padding: 8px 12px;
    position: absolute;
    top: 7%;
    left: 2%;
}

.smallImgRow{
    display: flex;
    align-items: flex-start;
    height: auto;
    width: 100%;
}

.smallImg {
    opacity: 0.6;
    cursor: pointer;
    width: 100%;
    height: 150px;
    object-fit: cover;
}

.active,
.smallImg:hover {
    opacity: 1;
}

@media only screen and (max-width: 425px) {
    .imgs-slideshow{
        padding: 0;
    }
    .mainImgs{
        height: 200px;
    }
    .smallImg{
        height: 50px;
    }
    .imgDesc{
        padding: 0.5rem;
    }
    .imgDesc p{
        font-size: 1.0rem;
        line-height: 16px;
    }
    .prev,
    .next {
        padding: 10px;
        font-size: 12px;
    }
}
</style>
