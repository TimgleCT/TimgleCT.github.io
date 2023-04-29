<template>
    <div class="ui grid">
        <div v-for="(item, index) in list"
            :key="index"
            :ref="(el)=>{ listItems[index] = el }"
            class="list sixteen wide mobile sixteen wide tablet sixteen wide computer eight wide large screen five wide widescreen column">
            <list-item
                :title="item.title"
                :content="item.content"
                @mounted="fixListItemsHeight()">
                <template v-slot:image>
                    <percent-chart
                        :numerator="item.score"
                        :denominator="item.maxScore"
                        :showTooltip="false"
                        :showLegend="false">
                    </percent-chart>
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
        percentChart: Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/percentChart.vue')),
    },
    props: {
        list: {
            type: Array,
            default() {
                return [{
                    title: '',
                    content: '',
                }];
            },
        },
    },

    setup() {
        const listItems = ref([]);

        function fixListItemsHeight() {
            const items = Array.from(listItems.value);
            let maxHeight = 0;
            for (let index = 0; index < items.length; index++) {
                if (items[index].clientHeight === 0) {
                    return 0;
                }
                maxHeight = Math.max(maxHeight, items[index].clientHeight);
            }
            for (let index = 0; index < items.length; index++) {
                items[index].children[0].style.height = `${maxHeight}px`;
            }
            return 1;
        }
        return {
            listItems, fixListItemsHeight,
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
