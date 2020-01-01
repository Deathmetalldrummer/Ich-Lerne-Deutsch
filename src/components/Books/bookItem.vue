<template lang="pug">
    v-card(color='purple' dark).d-flex.flex-no-wrap
        v-avatar.ma-3(size='25%' tile)
            v-img(src='https://m.media-amazon.com/images/I/A1JOst8l0oL._SS500_.jpg')
            //TODO: сделать ссылку на ютюб
        div.flex-grow-1
            v-card-title.headline {{bookItem.title}}
            v-card-subtitle {{bookItem.description}}
            v-divider
            v-card-subtitle Уровень: {{level}}, {{bookItem.parts}} частей
            v-card-actions
                v-rating(v-model='bookItem.rating' half-increments color="yellow" readonly background-color='yellow lighten-2')
                span {{bookItem.rating}} ({{bookItem.ratingCount}})
                v-spacer
                v-btn(color="purple darken-2") Открыть
</template>

<script>
    export default {
        name: 'BookItem',
        props: ['item'],
        data() {
            return {
                message: 'Слава Одину, Book работает!'
            }
        },
        computed: {
            bookItem(){return this.item},
            level(){return this.bookItem.level.join('/')}
        }
    }
</script>

<style scoped lang="sass"></style>
