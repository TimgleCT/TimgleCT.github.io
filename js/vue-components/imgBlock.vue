<template>
    <div class="ui centered grid imgBlockGrid">
        <div v-for="(img, index) in setImgsList"
            :key="index"
            class="sixteen wide mobile eight wide tablet eight wide computer five wide widescreen column imgBlockColumn">
            <div @mouseover="showImgDesc(index)" @mouseleave="hideImgDesc(index)" class="blockColumnContent">
                <img @load="finishImgLoading()" class="coverImg" :src="img.imgUrl" :ref="(el)=>{ imgs[index] = el }" :style="img.imgStyle">
                <div class="desc" :style="img.descStyle" :class="{'d-none': !finishLoading}">
                    <div class="descContent">
                        <div class="title">{{img.title}}</div>
                        <div class="content">{{img.desc}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

const {
    ref, onMounted, onUnmounted, nextTick, watch,
} = Vue;

export default {
    name: 'img-block',
    props: {
        imgsList: {
            type: Array,
            default() {
                return [{
                    imgUrl: 'img/A1.jpg',
                    title: '圖片標題',
                    desc: '圖片敘述',
                }];
            },
        },
    },

    setup(props) {
        const imgs = ref([]);
        const imgsNum = ref(0);
        const finishLoading = ref(false);
        const setImgsList = ref(JSON.parse(JSON.stringify(props.imgsList)));
        const windowWidth = ref(window.innerWidth);
        const breakSize = ref([767, 1024, 1919]);
        function getDevice() {
            if (windowWidth.value <= breakSize.value[0]) {
                return 'mobile';
            }

            if (windowWidth.value > breakSize.value[0] && windowWidth.value <= breakSize.value[1]) {
                return 'tablet';
            }

            if (windowWidth.value > breakSize.value[1] && windowWidth.value <= breakSize.value[2]) {
                return 'computer';
            }
            return 'large screen';
        }

        function finishImgLoading() {
            imgsNum.value -= 1;
        }

        function getImgsHeight() {
            const imgHeight = [];
            for (let i = 0; i < imgs.value.length; i++) {
                imgHeight.push(imgs.value[i].clientHeight);
            }
            return imgHeight;
        }

        function setImgHeight() {
            let viewShape;
            const deviceType = getDevice();
            const imgsHeightList = getImgsHeight();

            switch (deviceType) {
            case 'mobile':
                viewShape = 1;
                break;

            case 'tablet':
                viewShape = 2;
                break;

            case 'computer':
                viewShape = 2;
                break;

            case 'large screen':
                viewShape = 3;
                break;

            default:
                viewShape = 3;
                break;
            }
            const viewImgList = arrayHelper.chunkArray(imgsHeightList, viewShape);

            let groupHeightList = [];

            viewImgList.forEach((group) => {
                const maxHeight = Math.max(...group);
                groupHeightList.push(group.map(() => maxHeight));
            });
            groupHeightList = groupHeightList.flat();
            setImgsList.value = setImgsList.value.map((obj, index) => ({
                // 使用展開運算符複製物件
                ...obj,
                // 在複製的物件上增加新的屬性
                imgHeight: groupHeightList[index],
                imgStyle: {
                    height: `${groupHeightList[index]}px`,
                },
                descHeight: 0,
                descStyle: {
                    height: '0px',
                },
            }));
        }

        function showImgDesc(imgIndex) {
            setImgsList.value[imgIndex].descHeight = setImgsList.value[imgIndex].imgHeight;
            setImgsList.value[imgIndex].descStyle = {
                height: `${setImgsList.value[imgIndex].imgHeight}px`,
            };
        }

        function hideImgDesc(imgIndex) {
            setImgsList.value[imgIndex].descHeight = 0;
            setImgsList.value[imgIndex].descStyle = {
                height: '0px',
            };
        }

        const handleResize = async () => {
            windowWidth.value = window.innerWidth;
            await nextTick();
            setImgHeight();
        };

        onMounted(() => {
            imgsNum.value = imgs.value.length;
            window.addEventListener('resize', handleResize);
        });

        onUnmounted(() => {
            window.removeEventListener('resize', handleResize);
        });

        watch(imgsNum, () => {
            if (imgsNum.value === 0) {
                setImgHeight();
                finishLoading.value = true;
            }
        });

        return {
            setImgsList, imgs, showImgDesc, hideImgDesc, finishImgLoading, finishLoading,
        };
    },
};
</script>

<style scoped>
.imgBlockGrid{
    padding-top: 1rem !important;
}
.imgBlockColumn{
    padding: 6px !important;
}
.imgBlockColumn .blockColumnContent{
    position: relative;
}
.desc .descContent{
    text-align: center;
    width: 100%;
}
.desc .descContent div{
    display: inline-block;
    width: 100%;
    color: white;
    padding: 0 1.5rem;
}
.desc .descContent .title{
    font-size: 2.5rem;
    margin: 1.5rem 0;
}
.desc .descContent .content{
    font-size: 1rem;
    margin: 1.5rem 0;
}
.imgBlockColumn img{
    width: 100%;
    margin-bottom: 0px;
    margin-top: 0px;
    opacity: 0.8;
}
.imgBlockColumn .desc{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    transition: height 1s;
    background-color: rgba(87, 87, 87, 0.6);
}
.coverImg{
    object-fit: cover;
}

.d-none{
    display: none !important;
}

@media only screen and (max-width: 992px) {
        .desc .descContent .title{
            font-size: 1.75rem;
            margin: 1.0rem 0;
        }

        .desc .descContent .content{
            font-size: 0.75rem;
            margin: 1.0rem 0;
        }
    }
</style>
