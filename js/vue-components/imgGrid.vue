<template>
    <div class="ui centered grid">
        <div v-for="(img, index) in imgList"
            :key="index"
            class="eight wide mobile eight wide tablet five wide computer five wide widescreen column">
            <div class="imageInfo">
                <img :src="img.src">
                <div class="label">{{img.label}}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'img-grid',
    props: {
        imgList: {
            type: Array,
            default() {
                return [{
                    src: 'img/A1.jpg',
                    label: '圖片敘述',
                }];
            },
        },
    },

    setup() {},
};
</script>

<style scoped>
img {
    width: 100%;
}
.imageInfo{
    padding: 7.5% 15%;
}
.label{
    margin-top: 1.0rem;
    font-size: 1.0rem;
    text-align: center;
}
@media only screen and (max-width: 1024px) {
    .imageInfo{
        padding: 1.0rem 0.5rem;
    }
}

@media only screen and (max-width: 820px) {
    .imageInfo{
        padding: 1.25rem 1.75rem;
    }
}

@media only screen and (max-width: 425px) {
    .imageInfo{
        padding: 1.25rem 0.25rem;
    }
}
</style>
