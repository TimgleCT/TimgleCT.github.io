<template>
    <div class="dropDown" @mouseover="hoverDropDownState(true)" @mouseleave="hoverDropDownState(false)">
        <div class="pageLink">
            {{ mainTitle }}
        </div>
        <div :class="{ 'slide': dropDownState }" class="dropDownContent">
            <slot></slot>
        </div>
    </div>
</template>

<script>

const { ref } = Vue;

export default {
    name: 'DropDown',
    props: {
        mainTitle: {
            type: String,
            default: '關於我',
        },
    },

    setup() {
        const dropDownState = ref(false);

        function hoverDropDownState(state = false) {
            dropDownState.value = state;
        }

        return {
            dropDownState,
            hoverDropDownState,
        };
    },
};
</script>

<style scoped>
    .pageLink {
        width: 100%;
        display: block;
        padding: 8px 16px;
        text-align: left;
        cursor: pointer;
        color: white;
        font-size: 1.0rem;
    }

    .pageLink:hover {
        background-color: white;
        color: black;
    }

    .dropDownContent {
        max-height: 0px;
        transition: max-height 1s;
        overflow: hidden;
    }

    .dropDownContent ::v-deep div{
        font-size: 0.8rem;
        background-color: rgb(248, 96, 96);
        padding-left: 40px;
    }

    .dropDownContent ::v-deep div:hover{
        display: block;
        background-color: rgba(238, 157, 157, 0.89);
        color:rgb(255, 255, 255);
    }

    .slide {
        max-height: 200px;
    }

</style>
