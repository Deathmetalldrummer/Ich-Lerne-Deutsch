<template lang="pug">
    v-toolbar-items
        v-btn(v-for="(item,i) in menuItems" :to="item.route" :key="i" text)
            v-icon(left v-html="item.icon")
            | {{item.title}}
</template>

<script>
    export default {
        name: 'MainMenu',
        data() {
            return {
                message: 'Слава Одину, Main-menu работает!',
            }
        },
        computed: {
            menuItems(){return this.$store.getters.menu(false)}
        }
    }
</script>

<style scoped lang="sass"></style>
