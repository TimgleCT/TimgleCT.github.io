<template>
    <div class = "listBlock group">
        <div class = "listBlockIcon" :class="listIconStyle">
            <div class="iconBlock">
                <img :src="icon_url">
                <span>{{title}}</span>
            </div>
        </div>
        <div class = "listBlockItemList" :class="listItemsStyle">
            <slot></slot>
        </div>
    </div>
</template>

<script>

export default {
    name: 'list-block',
    props: {
        title: {
            type: String,
            default: '標題',
        },
        icon_url: {
            type: String,
            default: 'imgUrl',
        },
        block_style: {
            type: String,
            default: 'red',
        },
    },

    setup(props) {
        function setListStyle() {
            switch (props.block_style) {
            case 'red':
                return ['listIconColor-red', 'listItemListColor-red'];

            case 'purple':
                return ['listIconColor-purple', 'listItemListColor-purple'];

            default:
                return ['listIconColor-red', 'listItemListColor-red'];
            }
        }

        const [listIconStyle, listItemsStyle] = setListStyle();

        return {
            listIconStyle, listItemsStyle,
        };
    },
};
</script>

<style scoped>
.listBlock{
    width: 100%;
    padding: 2rem 0.8rem 1rem 0.8rem;
    border-radius: 16px;
    display: flex;
    flex-flow:row wrap;
}
.listBlockIcon{
    width: 15%;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    display: flex;
    align-items: center;
}
.listIconColor-red{
    background-color: rgba(187, 93, 93, 0.815);
}
.listIconColor-purple{
    background-color: rgba(134, 49, 120, 0.884);
}
.listBlockIcon .iconBlock{
    width: 100%;
    margin: 10%;
}
.listBlockIcon span{
    font-size: 1.75rem;
    font-weight: 400;
    color: white;
    display: block;
    width: 100%;
    text-align: center;
    padding: calc(min(20%, 2.0rem)) 0rem;
}
.listBlockIcon img{
    width: 25%;
    margin: auto;
    display: block;
}
.listBlockItemList{
    width: 85%;
    float: left;
    padding: 2.0rem 1.5em;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
}
.listItemListColor-red{
    background-color: #e19a9a;
}
.listItemListColor-purple{
    background-color: rgba(158, 82, 145, 0.815);
}

@media only screen and (max-width: 1400px) {
    .listBlockIcon{
        width: 22.5%;
    }
    .listBlockItemList{
        width: 77.5%;
    }
    .listBlockIcon{
        align-items: flex-start;
        padding-top: 2.0rem;
    }
}

@media only screen and (max-width: 1200px) {

}

@media only screen and (max-width: 1024px) {
    .listBlockIcon{
        width: 30%;
    }
    .listBlockItemList{
        width: 70%;
    }
    .listBlockIcon .iconBlock{
        margin: 5%;
    }
    .listBlockIcon span{
        font-size: 1.5rem;
        padding: 1rem 0 0.5rem 0;
    }
    .listBlockIcon img{
        width: 20%;
        margin-top: 0.5rem;
    }
}

@media only screen and (max-width: 425px) {
    .listBlockIcon{
        width: 100%;
        padding-top: 0rem;
        border-top-right-radius: 15px;
        border-bottom-left-radius: 0;
    }
    .listBlockItemList{
        width: 100%;
        border-top-right-radius: 0;
        border-bottom-left-radius: 15px;
    }
}
</style>
