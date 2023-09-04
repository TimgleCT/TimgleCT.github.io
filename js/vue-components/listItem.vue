<template>
    <div class = "listItem">
        <div v-if="hasImageSlot" class="listItemImage"><slot name="image"></slot></div>
        <div class="listItemContext" :style="{'--width': listItemContextWidth}">
            <h4 class="listItemHeader">{{title}}</h4>
            <hr>
            <div class="content">
                <slot v-if="hasContentSlot" name="content"></slot>
                <span v-else>{{content}}</span>
            </div>
        </div>
    </div>
</template>

<script>

const {
    computed, useSlots,
} = Vue;

export default {
    name: 'list-item',
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

    setup() {
        const hasImageSlot = !!useSlots().image;
        const hasContentSlot = !!useSlots().content;
        const listItemContextWidth = computed(() => (hasImageSlot ? '75%' : '100%'));

        return { hasImageSlot, hasContentSlot, listItemContextWidth };
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
    width: var(--width);
    padding: 0.5rem 1rem 0.5rem 2rem;
}

.listItemHeader{
    font-size: 1.5rem;
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
    .listItemHeader{
        font-size: 1.75rem;
    }
    .listItemContext .content{
        font-size: 1.0rem;
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
        font-size: 1.5rem;
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
        margin-bottom: 1.5rem;
    }
    .listItemContext hr{
        width: 80%;
    }
    .listItemHeader{
        font-size: 1.5rem;
    }
    .listItemContext .content {
        font-size: 1.0rem;
        font-weight: 300;
    }
}
</style>
