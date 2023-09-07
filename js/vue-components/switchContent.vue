<template>
    <div @click='switchContent()' class="switchInput">
        <div id='switchContentType' class="ui slider checkbox">
            <input type="checkbox">
            <label>Show More</label>
        </div>
    </div>
</template>

<script>
const { onMounted } = Vue;
export default {
    name: 'switchContent',
    emits: ['switchType'],
    props: {
        contentType: {
            type: String,
            default: 'main',
        },
    },
    setup(props, { emit }) {
        function init() {
            if (props.contentType === 'main') {
                $('#switchContentType').checkbox('uncheck');
            } else {
                $('#switchContentType').checkbox('check');
            }
        }

        function switchContent() {
            emit('switchType');
        }

        onMounted(() => {
            init();
        });

        return { init, switchContent };
    },
};
</script>

<style scoped>
.switchInput {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 0.2rem;
    background-color: brown;
}
#switchContentType{
    padding: 0.5rem;
    margin: 0 0.5rem;
}
#switchContentType label{
    color: white;
    font-size: 0.5rem;
}
#switchContentType.ui.toggle.checkbox input:checked~label:before {
    background-color: #a5382f!important;
}

@media only screen and (max-width: 820px) {
   #switchContentType label{
        font-size: 0.75rem;
    }
}
</style>
