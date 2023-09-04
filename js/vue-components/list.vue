<template>
    <div class="ui grid">
        <div v-for="(item, index) in list"
            :key="index"
            :ref="(el)=>{ listItems[index] = el }"
            class="list sixteen wide mobile sixteen wide tablet sixteen wide computer eight wide large screen five wide widescreen column">
            <list-item
                :title="item.title"
                :content="item.content">
                <template v-if="isArrayContent(item.contentType)" v-slot:content>
                    <tag-list
                        :tag-list="splitContentWithComma(item.content)"
                        :color-style="item.tagsColor"
                    ></tag-list>
                </template>
            </list-item>
        </div>
    </div>
</template>

<script>

const {
    ref,
} = Vue;

export default {
    name: 'list-block-list',
    components: {
        listItem: Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/listItem.vue')),
        tagList: Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/tagList.vue')),
    },
    props: {
        list: {
            type: Array,
            default() {
                return [{
                    title: '',
                    content: '',
                    contentType: 'string',
                    tagsColor: 'red',
                }];
            },
        },
    },

    setup() {
        const listItems = ref([]);

        function splitContentWithComma(str) {
            return str.split('、');
        }

        function isArrayContent(type) {
            return type === 'array';
        }

        return {
            listItems, splitContentWithComma, isArrayContent,
        };
    },
};
</script>

<style scoped>

.list{
    padding: 0 !important;
}

@media only screen and (max-width: 1024px) {

}

@media only screen and (max-width: 425px) {

}
</style>
