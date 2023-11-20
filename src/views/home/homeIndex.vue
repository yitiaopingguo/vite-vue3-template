<template>
    <div>
        <HomeHeader></HomeHeader>
        <HomeContent></HomeContent>
        <HomeFooter></HomeFooter>
    </div>
</template>
<script lang="js">
export default {
    props: {
    },
    components: {
        HomeHeader : () => import('./components/homeHeader.vue'),
        HomeContent : () => import('./components/homeContent.vue'),
        HomeFooter : () => import('./components/homeFooter.vue')
    },
    data() {
        return {
          
        }
    },
    created() {

    },
    mounted() {

    },
    computed: {

    },
    methods: {
        
    },
}
</script>

<style scoped lang="scss">

</style>
