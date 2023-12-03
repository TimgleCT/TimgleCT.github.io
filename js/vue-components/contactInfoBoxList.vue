<template>
    <div class='contactInfoBoxList'>
        <div class="ui centered grid">
            <div v-for='(contact, index) in contactList'
                :key='index'
                class="eight wide mobile eight wide tablet five wide computer five wide widescreen column"
            >
                <contact-info-box
                    :media-name='contact.mediaName'
                    :media-icon='contact.mediaIconSrc'
                    :label='contact.label'
                    :medial-url='contact.medialUrl'
                ></contact-info-box>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'contact-info-box-list',
    components: {
        'contact-info-box': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/contactInfoBox.vue')),
    },
    props: {
        contactList: {
            type: Array,
            default() {
                return [];
            },
        },
    },

    setup() {},
};
</script>

<style scoped>

.contactInfoBoxList{
    width: 50%;
    margin: auto;
    padding: 1rem 0 3rem 0;
}

@media only screen and (max-width: 1200px) {
    .contactInfoBoxList{
        width: 60%;
    }
}

@media only screen and (max-width: 425px) {
    .contactInfoBoxList{
        width: 80%;
    }
}
</style>
