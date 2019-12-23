<template lang="pug">
    v-app
        Drawer
        Toolbar
        v-content
            router-view
</template>

<script>
    import Drawer from '@/components/drawer/drawer.vue'
    import Toolbar from '@/components/toolbar/toolbar.vue'

    export default {
        name: 'App',
        components: {Drawer,Toolbar},
    };
</script>
