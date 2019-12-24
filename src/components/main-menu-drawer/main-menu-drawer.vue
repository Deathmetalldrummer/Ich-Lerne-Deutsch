<template lang="pug">
    v-list(subheader)
        v-subheader Menu
        v-list-item(link v-for="(item,i) in menuItems" :key="i")
            v-list-item-action
                v-icon(v-html="item.icon")
            v-list-item-content
                v-list-item-title {{item.title}}
</template>

<script>
    export default {
        name: 'MainMenuDrawer',
        data() {
            return {
                message: 'Слава Одину, Main-menu работает!',
            }
        },
        computed: {
            menuItems(){return this.$store.getters.menu}
        }
    }
</script>

<style scoped src="./styles.sass" lang="sass"></style>
