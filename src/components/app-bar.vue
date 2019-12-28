<template lang="pug">
    v-app-bar(app color="transparent")
        v-app-bar-nav-icon(@click.stop="changeDrawer()").hidden-md-and-up
        v-toolbar-title
            router-link(to="/" tag='span' style="cursor:pointer") Ich Lerne Deutsch
        v-spacer
        MainMenu.hidden-sm-and-down
</template>

<script>
    import MainMenu from '@/components/main-menu.vue'

    export default {
        name: 'AppBar',
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

<style scoped lang="sass"></style>
