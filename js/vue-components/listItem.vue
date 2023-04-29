<template>
    <div class = "listItem">
        <div class="listItemImage"><slot name="image"></slot></div>
        <div class="listItemContext">
            <h4 class="listItemHeader">{{title}}</h4>
            <hr>
            <div class="content">{{content}}</div>
        </div>
    </div>
</template>

<script>

const {
    onMounted, nextTick,
} = Vue;

export default {
    name: 'list-item',
    emits: ['mounted'],
    props: {
        title: {
            type: String,
            default: '標題',
        },
        content: {
            type: String,
            default: '內容',
        },
    },

    setup(props, { emit }) {
        onMounted(async () => {
            await nextTick();
            emit('mounted');
        });
        return {};
    },
};
</script>

<style scoped>

.listItem{
    padding: 0.5rem 1rem;
    width: 100%;
    display: flex;
    align-content: center;
}

.listItem hr{
    border: 1px solid white;
    border-radius: 4px;
}

.listItemImage{
    width: 25%;
}

.listItemContext{
    float: left;
    width: 75%;
    padding: 0.5rem 1rem 0.5rem 2rem;
}

.listItemHeader{
    font-size: 2.0rem;
    color: white;
    font-weight: 500;
}

.listItemContext .content{
    font-size: 0.8rem;
    padding: 5px ;
    color: white;
    font-weight: lighter;
}

@media only screen and (max-width: 1200px) {
    .listItemContext {
        width: 85%;
    }
    .listItemImage{
        width: 15%;
    }
}

@media only screen and (max-width: 1024px) {
    .listItemHeader{
        font-size: 1.5rem;
    }
    .listItemImage{
        width: 20%;
    }
    .listItemContext {
        width: 80%;
        padding: 0.5rem 15px 0.5rem 30px;
    }
}

@media only screen and (max-width: 425px) {
    .listItem{
        display: block;
    }
    .listItemHeader{
        text-align: center;
        font-size: 1.3rem;
    }
    .listItemImage{
        width: 85px;
        margin: auto;
        margin-top: 0.5rem;
    }
    .listItemContext{
        width: 100%;
        height: auto;
        padding: 0.5rem 0rem;
        margin: auto;
        margin-bottom: 0.5rem;
    }
    .listItemContext hr{
        width: 80%;
    }
    .listItemContext .content {
        font-size: 1.0rem;
        text-align: center;
        padding: 5px 1rem;
    }
}
</style>
