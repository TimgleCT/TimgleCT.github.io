<template>
    <div class="ui centered grid colorBoxBlock">
        <div v-for="(colorBox, index) in colorBoxList" :key="index" class="box sixteen wide mobile eight wide tablet eight wide computer five wide widescreen column">
            <color-box
                :title="colorBox.title"
                :color="colorBox.color"
                :label="colorBox.label"
                :icon-uRL="colorBox.iconURL"
                :tags="colorBox.tags"
                :click-function="colorBox.clickFunction"
            ></color-box>
        </div>
    </div>
</template>

<script>
export default {
    name: 'color-box-block',
    components: {
        colorBox: Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/colorBox.vue')),
    },
    props: {
        colorBoxList: {
            type: Array,
            default: () => [],
        },
    },

    setup() {
        return {};
    },
};
</script>

<style scoped>

.colorBoxBlock{
    padding: 2rem 3rem 2rem 3rem;
}
.colorBoxBlock .box{
    padding: 0 !important;
}

@media only screen and (max-width: 1024px) {
    .colorBoxBlock {
        padding: 3rem 2rem 2rem 2rem;
    }
}

@media only screen and (max-width: 425px) {
    .colorBoxBlock {
        padding: 3rem 2rem 2rem 2rem;
    }
}

</style>
