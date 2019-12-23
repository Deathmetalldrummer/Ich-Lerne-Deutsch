<template lang="pug">
    v-toolbar(color="transparent")
        v-app-bar-nav-icon(@click.stop="changeDrawer()").hidden-md-and-up
        v-toolbar-title
            router-link(to="/" tag='span' style="cursor:pointer") Ich Lerne Deutsch
        v-spacer
        MainMenu(main).hidden-sm-and-down
</template>

<script>
    import MainMenu from '@/components/main-menu/main-menu.vue'

    export default {
        name: 'Toolbar',
        components: {MainMenu},
        data() {
            return {
                message: 'Слава Одину, Toolbar работает!',
            }
        },
        methods: {
            changeDrawer(){
                this.$store.dispatch('drawer', !this.$store.getters.drawer);
            }
        }
    }
</script>

<style scoped src="./styles.sass" lang="sass"></style>
