<template>
    <div class="inline_block">
        <div :style="divHeight" class="paragraphDiv">
            <div class="paragraph" v-for="(content, index) in contentList" :key="index" :ref="(el)=>{ paragraphs[index] = el }">
                <p v-html="content"></p>
            </div>
        </div>
        <div v-if="showReadMoreBtn()" @click="toggleShowMore" class="readMore floatRight">{{showMoreText}}</div>
    </div>
</template>

<script>

const {
    ref, computed, onBeforeUpdate, onMounted, watch,
} = Vue;

export default {
    name: 'content-paragraph',
    props: {
        contentList: {
            type: Array,
            default() {
                return ['paragraph'];
            },
        },
        height: {
            type: String,
            default: null,
        },

        collapseMode: {
            type: Boolean,
            default: true,
        },
    },

    setup(props) {
        const paragraphs = ref([]);
        const paragraphsHeight = ref(0);
        onMounted(() => {
            for (let i = 0; i < paragraphs.value.length; i++) {
                const paragraphStyle = window.getComputedStyle(paragraphs.value[i]);
                paragraphsHeight.value += (paragraphs.value[i].clientHeight + parseFloat(paragraphStyle.marginTop) + parseFloat(paragraphStyle.marginBottom));
            }
        });

        onBeforeUpdate(() => {
            paragraphs.value = [];
        });

        function isLastParagraph(index) {
            if (props.contentList.length === index + 1) {
                return true;
            }
            return false;
        }

        const isShowMore = ref(true);
        onMounted(() => {
            if (props.collapseMode) {
                isShowMore.value = false;
            }
        });

        function toggleShowMore() {
            isShowMore.value = !isShowMore.value;
        }
        const showMoreText = computed(() => {
            if (isShowMore.value) {
                return 'Go Back';
            }
            return 'Read More';
        });

        const divHeight = ref(null);
        watch(isShowMore, () => {
            if (!isShowMore.value) {
                divHeight.value = {
                    'max-height': props.height,
                };
            } else {
                divHeight.value = {
                    'max-height': `${paragraphsHeight.value}px`,
                };
            }
        });

        function showReadMoreBtn() {
            if (props.collapseMode && paragraphsHeight.value > parseFloat(props.height)) {
                return true;
            }
            return false;
        }

        return {
            isLastParagraph, divHeight, toggleShowMore, showMoreText, paragraphs, paragraphsHeight, isShowMore, showReadMoreBtn,
        };
    },

};
</script>

<style scoped>
    .inline_block{
        display: inline-block;
    }

    .paragraphDiv {
        transition: max-height 1s;
        overflow: hidden;
    }

    .readMore{
        background-color: rgb(16, 143, 175);
        border-radius: 5%;
        margin: 1rem 3rem;
        padding: 0.8rem;
        width: 8rem;
        color: white;
        text-align: center;
        cursor: pointer;
    }

    .readMore:hover{
        background-color: rgb(57, 168, 196);
    }

    .paragraph{
        margin: 0.8rem 0rem;
    }

    p {
        font-family: 'Noto Sans TC', sans-serif;
        letter-spacing: 2px;
        font-size: 1.2rem;
        line-height: 30px;
    }
</style>
