<template lang="pug">
    v-app
        Drawer
        AppBar
        v-content
            router-view
</template>

<script>
    import Drawer from '@/components/drawer.vue'
    import AppBar from '@/components/app-bar.vue'

    export default {
        name: 'App',
        components: {Drawer,AppBar},
    };
</script>
