<template>
    <div class = "unit group" :id = "id" :class="{ 'header': isHeader }">
        <h1 class = "title">{{unitTitle.Zh}} － <span class = "noLetterSpace">{{unitTitle.En}}</span></h1>
        <hr class = "line">
        <div class="unitContent">
            <slot></slot>
        </div>
    </div>
</template>

<script>

export default {
    name: 'unit-content',
    props: {
        unitTitle: {
            type: Object,
            default() {
                return {
                    En: 'Education',
                    Zh: '學歷',
                };
            },
        },
        id: {
            type: String,
            default: 'educationPage',
        },
        isHeader: {
            type: Boolean,
            default: false,
        },
    },

    setup() {
        return {};
    },

};
</script>

<style>
    .unit {
        width: 100%;
        margin-top: 1.5vw;
        margin-bottom: 3vw;
        overflow: hidden;
    }
    .header {
        margin-top: 40px;
        margin-bottom: 30px;
    }

    .line {
        width: 120px;
        border: 5px solid red;
        border-radius: 4px;
        margin: 20px 20px 1.5vw 20px;
    }
</style>
