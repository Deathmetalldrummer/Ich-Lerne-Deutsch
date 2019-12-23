<template lang="pug">
    v-navigation-drawer(absolute temporary v-model="drawer").hidden-md-and-up
        MainMenu
</template>

<script>
    import MainMenu from '@/components/main-menu/main-menu.vue'

    export default {
        name: 'Drawer',
        components: {MainMenu},
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
