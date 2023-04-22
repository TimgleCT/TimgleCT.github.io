<template>
    <div class = "listItem">
        <!-- <slot name="icon"></slot> -->
        <div class="con">
            <div class="percent-circle percent-circle-left">
            <div id = "frontEndleft" class="left-content"></div>
            </div>
            <div class="percent-circle percent-circle-right">
            <div class="right-content"></div>
            </div>
            <div class="text-circle">80%</div>
        </div>
        <div class = "listItemContext">
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
.con {
    position:relative;
    float: left;
    top:30px;
    height:5vw;
    width:5vw;
}

.listItem{
    float: left;
    padding: 1rem;
    width: 100%;
}

.listItem hr{
    border: 1px solid white;
    border-radius: 4px;
}

.listItemContext{
    float: left;
    width: 75%;
    padding: 1.5rem 1rem 1.5rem 2rem;
}

.listItemHeader{
    font-size: 2vw;
    color: white;
    font-weight: 500;
}

.listItemContext .content{
    font-size: 1em;
    padding: 5px ;
    color: white;
    font-weight: lighter;
}

@media only screen and (max-width: 1024px) {
    .listItemContext {
        padding: 0.5vh 15px 2vh 30px;
    }
}

@media only screen and (max-width: 425px) {
    .listItemHeader{
        text-align: center;
        font-size: 1.3rem;
    }
    .listItemContext{
        width: 100%;
        height: auto;
        padding: 2vh 0px;
        margin: auto;
    }
    .listItemContext hr{
        width: 80%;
    }
    .listItemContext .content {
        font-size: 1.0rem;
        text-align: center;
        padding: 5px 50px;
    }
}
</style>
