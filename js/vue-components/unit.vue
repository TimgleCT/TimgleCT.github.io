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
    padding-top: 1.5rem;
    padding-bottom: 3rem;
    margin-bottom: 0;
    overflow: hidden;
}

.noLetterSpace{
    letter-spacing: 0px;
}

.title{
    font-size: 2.5rem;
}

.line {
    width: 120px;
    border: 5px solid red;
    border-radius: 4px;
    margin: 1.2rem 1.2rem 1.0rem 1.2rem;
}

@media only screen and (max-width: 820px) {
    .unit {
        padding-bottom: 2rem;
    }
    .title{
        font-size: 2.0rem;
    }
    .line {
        margin: 1.2rem 1.2rem 0.5rem 1.2rem;
    }
}

@media only screen and (max-width: 425px) {
    .unit {
        padding-bottom: 1rem;
    }
}
</style>
