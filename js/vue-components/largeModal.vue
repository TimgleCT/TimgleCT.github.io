<template>
    <div class="ui longer large modal" :id="modalId">
        <i @click="closeModal()" class="close icon"></i>
        <div class="modalHead">{{modalHeader}}</div>
        <div class="scrolling image content">
            <slot></slot>
        </div>
        <div class="actions">
            <div @click="closeModal()" class="ui black deny button">
                關閉
            </div>
        </div>
    </div>
</template>

<script>
const {
    watch,
} = Vue;
export default {
    name: 'large-modal',
    props: {
        modalId: {
            type: String,
            default: 'largeModal',
        },
        modalHeader: {
            type: String,
            default: '',
        },
        showModal: {
            type: Boolean,
            default: false,
        },
    },

    setup(props, { emit }) {
        function openModal() {
            $(`#${props.modalId}`).modal({ closable: false }).modal('show');
        }

        function closeModal() {
            $(`#${props.modalId}`).modal({ closable: false }).modal('hide');
            emit('close-modal');
        }

        watch(() => props.showModal, (newVal) => {
            if (newVal === true) {
                openModal();
            } else {
                closeModal();
            }
        });

        return { closeModal };
    },
};
</script>

<style scoped>
.ui.modal .close.icon{
    top:0.8vw;
    right: 1vw;
    color:rgba(0, 0, 0, 0.61);
    font-size: 2.0rem;
}
.modalHead{
    font-size: 2vw;
    font-weight: 600;
    padding: 1vw 1.5vw;
    margin: 1vw 1vw 0 1vw;
    border-bottom: solid 2px rgba(62, 73, 73, 0.493);
}
@media only screen and (max-width: 1600px) {
    .ui.modal .close.icon{
        font-size: 1.5rem;
    }
}

@media only screen and (max-width: 1024px) {
    .ui.modal .close.icon{
        font-size: 1.0rem;
    }
}
@media only screen and (max-width: 425px) {
    .modalHead{
        font-size: 5vw;
        padding: 3vw 4.5vw
    }
}
</style>
