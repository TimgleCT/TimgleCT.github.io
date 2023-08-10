<template>
  <div class="timeline">
        <div class="timelineBody">
            <ul class="timelineLi group">
                <time-line
                    v-for="(experience, experienceIndex) in contentList"
                    :key="experienceIndex"
                    :index="experienceIndex + 1"
                    :title="experience.title"
                    :date="experience.date"
                    :content-list="experience.contentList"
                    :img-url="experience.img"
                    :color-Group="experience.style"
                ></time-line>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'time-line': Vue.defineAsyncComponent(() => VueLoader.loadComponent('./js/vue-components/timeLine.vue')),
    },
    name: 'timeLineBlock',
    props: {
        contentList: {
            type: Array,
            default: () => [],
        },
    },
};
</script>

<style>

.timeline{
    margin-top: 2rem;
    margin-bottom: 3rem;
    box-shadow: 0 0 15px #a0a0a0;
}

.timelineBody .timelineLi{
    padding: 1em 0 0 2em;
    margin: 0;
    list-style: none;
    position: relative;
}

.timelineBody .timelineLi::before{
    content: ' ';
    height: 100%;
    width: 5px;
    background-color: #d14747;
    position: absolute;
    top: 0;
    left: 2.4rem;
    z-index: -1;
}

@media only screen and (max-width: 1200px) {
    .timeline{
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
}

@media only screen and (max-width: 425px) {
    .timeline{
        margin-bottom: 3rem;
        margin-top: 2rem;
    }
    .timelineBody .timelineLi{
        padding: 1rem 0 0 0;
    }
    .timelineBody .timelineLi::before{
        width: 3px;
        left: 0.5rem;
    }
}

</style>
