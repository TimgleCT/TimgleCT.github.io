<template>
    <a :href="medialUrl">
        <div class = "contactBox">
            <div class = "contactBoxImg">
                <img :src="mediaIcon">
            </div>
            <div class = "colorBoxContent">
                <h4>{{mediaName}}</h4>
                <div class="meta">{{label}}</div>
            </div>
        </div>
    </a>
</template>

<script>

export default {
    name: 'contact-info-box',
    props: {
        mediaName: {
            type: String,
            default: '',
        },
        mediaIcon: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: '',
        },
        medialUrl: {
            type: String,
            default: '',
        },
    },

    setup() {},
};
</script>

<style scoped>
.contactBox{
    width: 100%;
    padding: 1rem;
    transition: all 250ms cubic-bezier(0.02,0.01,0.47,1);
    box-shadow: 0 4px 16px rgba(48,55,66,0.15);
    background-color: rgb(102, 175, 243);
    border-radius: 20px;
    color: white;
}
.contactBox .contactBoxImg{
    width: 40%;
    margin: 10% auto 8% auto;
}
.contactBoxImg img{
    width: 100%;
}
.contactBox h4{
    margin-bottom: 0;
    font-size: 1.0rem;
}
.contactBox .meta{
    border: none;
    font-size: 0.85rem;
    opacity: 0.75;
    color: rgba(255, 255, 255, 0.644);
}
.contactBox:hover{
    box-shadow: 0 16px 32px rgba(48, 55, 66, 0.76);
    transform: translate(0,-5px);
    transition-delay: 0s !important;
    z-index: 1;
    cursor: pointer;
}
.colorBoxContent div{
    padding: 0.5rem;
}
.colorBoxContent{
    text-align: center;
}

@media only screen and (max-width: 1024px) {
    .contactBox .colorBoxContent h4{
        font-size: 1.0rem;
    }
    .contactBox .meta {
        font-size: 0.8rem;
    }
}

@media only screen and (max-width: 820px) {
    .contactBox .colorBoxContent h4{
        font-size: 1.25rem;
    }
    .contactBox .meta {
        font-size: 1.0rem;
    }
}

@media only screen and (max-width: 425px) {
    .contactBox{
        margin: 2% 1.0% 2% 2.5%;
    }
    .contactBox .colorBoxContent h4{
        font-size: 0.9rem;
    }
    .contactBox .meta {
        font-size: 0.75rem;
        opacity: 0.8;
    }
}

</style>
