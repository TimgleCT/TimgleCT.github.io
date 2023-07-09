<template>
    <large-modal
        :modal-id="modalId"
        :modal-header="modalHeader"
        :show-modal="show"
        @close-modal="closeModal()">
        <div class="ui grid">
            <div class="sixteen wide mobile sixteen wide tablet sixteen wide computer column largeModalImg"
                 :class="setImgDescRatioDiff()[0]"
                 :style="{'--objectFit': objectFit }">
                <imgs-slides
                    :img-list="imgList"
                    :img-description-list="imgDescriptionList"
                    :preview="true"
                ></imgs-slides>
            </div>
             <div class="sixteen wide mobile sixteen wide tablet sixteen wide computer column largeModalDesc" :class="setImgDescRatioDiff()[1]">
                <div class="ui header">{{contentHeader}}</div>
                <template v-for="(content, index) in contentList" :key="index">
                    <p v-html="'&nbsp&nbsp&nbsp&nbsp' + content"></p>
                </template>
            </div>
        </div>
    </large-modal>
</template>

<script>
const {
    ref, watch,
} = Vue;
export default {
    name: 'img-slide-desc-modal',
    components: {
        imgsSlides: Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/imgSlides.vue')),
        largeModal: Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/largeModal.vue')),
    },
    props: {
        modalId: {
            type: String,
            default: 'imgSlideDescModal',
        },
        modalHeader: {
            type: String,
            default: '',
        },
        imgList: {
            type: Array,
            default: () => [],
        },
        imgDescriptionList: {
            type: Array,
            default: () => [],
        },
        contentHeader: {
            type: String,
            default: '',
        },
        contentList: {
            type: Array,
            default: () => [],
        },
        show: {
            type: Boolean,
            default: false,
        },
        imgDescRatioDiff: {
            type: String,
            default: 'large',
        },
    },

    setup(props, { emit }) {
        const objectFit = ref('cover');
        function closeModal() {
            emit('close-modal');
        }

        function setImgDescRatioDiff() {
            switch (props.imgDescRatioDiff) {
            case 'large':
                return ['ten wide large screen ten wide widescreen', 'six wide large screen six wide widescreen'];

            case 'medium':
                return ['eight wide large screen eight wide widescreen', 'eight wide large screen eight wide widescreen'];

            case 'small':
                return ['six wide large screen six wide widescreen', 'ten wide large screen ten wide widescreen'];

            default:
                return ['ten wide large screen ten wide widescreen', 'six wide large screen six wide widescreen'];
            }
        }

        function setImageObjectFit() {
            if (window.innerWidth < 1200 && props.imgDescRatioDiff === 'small') {
                objectFit.value = 'contain';
            } else {
                objectFit.value = 'fill';
            }
        }

        watch(() => props.imgDescRatioDiff, () => {
            setImageObjectFit();
        });

        return { closeModal, setImgDescRatioDiff, objectFit };
    },
};
</script>

<style scoped>
.imgs-slideshow::v-deep{
    padding: 0 0 1rem 0;
}
.imgs-slideshow::v-deep .mainImg{
    object-fit: var(--objectFit);
}
.largeModalDesc{
    height: 100%;
    overflow-y: auto;
}
.largeModalImg{
    height: 100%;
}
.ui.header{
    font-size: 1.5rem;
    font-family: inherit;
}
.ui.modal .content>.image{
    text-align: inherit !important;
}
@media only screen and (max-width: 1200px) {
    .largeModalImg{
        height: auto;
    }
    .largeModalDesc{
        height: auto;
    }
}
</style>
