<template lang="pug">
div
    v-list(subheader v-if="!mainMenu")
        v-subheader Menu
        v-list-item(link v-for="(item,i) in menuItems" :key="i")
            v-list-item-action
                v-icon(v-html="item.icon")
            v-list-item-content
                v-list-item-title {{item.title}}

    v-toolbar-items(v-if="mainMenu")
        v-btn(v-for="(item,i) in menuItems" :to="item.route" :key="i" text)
            v-icon(left v-html="item.icon")
            | {{item.title}}
</template>

<script>
    export default {
        name: 'MainMenu',
        props: {
            main: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                message: 'Слава Одину, Main-menu работает!',
                menuItems: [
                {
                    icon:'visibility',
                    title:'Читать',
                    route:'/books'
                },{
                    icon:'extension',
                    title:'Учить слова',
                    route:'/words'
                },{
                    icon:'account_circle',
                    title:'Мой кабинет',
                    route:'/profile'
                },{
                    icon:'exit_to_app',
                    title:'Выйти',
                    route:'/logout'
                },{
                    icon:'input',
                    title:'Войти',
                    route:'/signin'
                },{
                    icon:'lock_open',
                    title:'Зарегестрироваться',
                    route:'/signup'
                }
                ],
            }
        },
        computed: {
            mainMenu(){return this.main}
        }
    }
</script>

<style scoped src="./styles.sass" lang="sass"></style>
