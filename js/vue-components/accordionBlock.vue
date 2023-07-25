<template>
    <div
        @click="toggleAccordion()"
        class="dropDownImg group dropDownImgColor"
        :style="{'--backgroundColor': setStyle.backgroundColor, '--borderColor': setStyle.borderColor}">
        <div class="head" :style="{'--headBackgroundColor': setStyle.headBackgroundColor}">
            {{title}}
            <i class="chevron down icon" :style="rotateIcon"></i>
        </div>
        <div ref="accordionRef" class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
const { ref, computed } = Vue;
export default {
    name: 'accordion-block',
    props: {
        title: {
            type: String,
            default: '',
        },
        accordionStyle: {
            type: String,
            default: 'beige',
        },
    },

    setup(props) {
        const state = ref(1);
        const accordionRef = ref(null);
        const styleSet = {
            beige: {
                borderColor: '#eed3b1',
                backgroundColor: 'rgb(235, 215, 190)',
                headBackgroundColor: '#eed3b1',
            },
            brown: {
                borderColor: '#D8B484',
                backgroundColor: 'rgb(231, 201, 161)',
                headBackgroundColor: '#D8B484',
            },
            rust: {
                borderColor: '#B16B2F',
                backgroundColor: 'rgb(184, 132, 86)',
                headBackgroundColor: '#B16B2F',
            },
            copper: {
                borderColor: '#C76331',
                backgroundColor: 'rgb(212, 125, 82)',
                headBackgroundColor: '#C76331',
            },
            maroon: {
                borderColor: '#9A2513',
                backgroundColor: 'rgb(170, 76, 61)',
                headBackgroundColor: '#9A2513',
            },
        };

        const setStyle = computed(() => styleSet[props.accordionStyle]);
        const rotateIcon = computed(() => {
            if (state.value === 1) {
                return { transform: 'rotate(0deg)' };
            }
            return { transform: 'rotate(180deg)' };
        });

        function toggleAccordion() {
            $(accordionRef.value).toggle(500);
            state.value *= -1;
        }

        return {
            accordionRef, toggleAccordion, setStyle, rotateIcon,
        };
    },
};
</script>

<style scoped>

.dropDownImg{
    width: 95%;
    margin: 2.0rem auto 0rem auto;
    color: white;
    border-radius: 10px;
    cursor: pointer;
}

.dropDownImg .content{
    display: none;
    padding: 1.0rem;
}

.dropDownImg .head{
    padding: 1.5rem;
    font-size: 1.75rem;
}

.dropDownImg .head i{
    float: right;
    transition: 0.6s;
}

.dropDownImg .head:hover{
    opacity: 75%;
}

.dropDownImgColor{
    border: 5px solid var(--borderColor);
    background-color: var(--backgroundColor);
}

.dropDownImgColor .head{
    background-color: var(--headBackgroundColor);
}

@media only screen and (max-width: 1024px) {
    .dropDownImg{
        margin: 1.5rem auto 0rem auto;
    }
}

@media only screen and (max-width: 425px) {
    .dropDownImg{
        margin: 1rem auto 0rem auto;
        width: 100%;
    }
    .dropDownImg .head{
        padding: 0.75rem;
        font-size: 1.25rem;
    }
}

</style>
