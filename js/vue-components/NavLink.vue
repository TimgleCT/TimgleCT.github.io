<template>
    <a :href="url" @click="clickAction" class="pageLink">{{title}}</a>
</template>

<script>

export default {
    name: 'DropDown',
    emits: ['clickAction'],
    props: {
        url: {
            type: String,
            default: '#',
        },
        title: {
            type: String,
            default: '關於我',
        },
    },

    setup(props, { emit }) {
        function clickAction() {
            emit('clickAction');
        }
        return {
            clickAction,
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
</style>
