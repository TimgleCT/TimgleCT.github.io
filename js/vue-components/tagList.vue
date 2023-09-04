<template>
    <div class="tagsList">
        <div v-for='(tag, index) in tagList' class="ui label skillTag" :class="color" :key="index">{{tag}}</div>
    </div>
</template>

<script>
const { computed } = Vue;
export default {
    name: 'tagList',
    props: {
        tagList: {
            type: Array,
            default: () => [],
        },
        colorStyle: {
            type: String,
            default: 'red',
        },
    },

    setup(props) {
        const colorList = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'teal', 'violet', 'purple', 'pink', 'brown', 'grey', 'black', 'customPink', 'customPurple'];
        const color = computed(() => props.colorStyle, () => {
            const { colorStyle } = props;
            if (colorList.find((ele) => ele === colorStyle) === undefined) {
                throw new Error('未支援此顏色');
            } else {
                color.value = colorStyle;
            }
        });
        return { color };
    },
};
</script>

<style scoped>
.skillTag{
    font-weight: 400;
    font-size: 0.6rem;
    margin: 0.25rem 0.5rem 0.25rem 0rem;
}
.ui.customPink.label{
    background-color: #f5b5b5!important;
    border-color: #f5b5b5!important;
    color: #fff!important;
}
.ui.customPurple.label{
    background-color: #be95cf!important;
    border-color: #be95cf!important;
    color: #fff!important;
}

@media only screen and (max-width: 450px) {
    .tagsList {
        text-align: center;
    }
}
</style>
