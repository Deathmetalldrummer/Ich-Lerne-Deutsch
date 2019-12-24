<template lang="pug">
    v-app
        Drawer
        AppBar
        v-content
            router-view
</template>

<script>
    import Drawer from '@/components/drawer/drawer.vue'
    import AppBar from '@/components/app-bar/app-bar.vue'

    export default {
        name: 'App',
        components: {Drawer,AppBar},
    };
</script>
