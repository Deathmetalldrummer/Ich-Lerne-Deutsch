<template lang="pug">
    v-navigation-drawer(absolute temporary v-model="drawer").hidden-md-and-up
        MainMenuDrawer
</template>

<script>
    import MainMenuDrawer from '@/components/main-menu-drawer/main-menu-drawer.vue'

    export default {
        name: 'Drawer',
        components: {MainMenuDrawer},
        data: () => ({
        }),
        computed: {
            drawer: {
                get(){return this.$store.getters.drawer},
                set(val){this.$store.dispatch('drawer', val)},
            }
        }
    }
</script>

<style scoped src="./styles.sass" lang="sass"></style>
