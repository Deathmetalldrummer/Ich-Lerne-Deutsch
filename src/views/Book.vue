<template lang="pug">
    v-container
        v-row
            v-col.col-12
                BookItem(:item="bookItem")
                    v-btn(color="purple darken-2") Добавить


        v-row
            v-col(v-for='i in 10').col-4
                v-card
                    v-img.white--text.align-end(height='200px' src='https://cdn.vuetifyjs.com/images/cards/docks.jpg')
                        v-card-title Top 10 Australian beaches
                    v-card-subtitle.pb-0 Number 10
                    v-card-text.text--primary
                        div Whitehaven Beach
                        div Whitsunday Island, Whitsunday Islands
                    v-card-actions
                        v-btn(color='orange' text)
                            | Share
                        v-btn(color='orange' text)
                            | Explore
</template>

<script>
import BookItem from '@/components/Books/bookItem'
    export default {
        name: 'Books',
        components: {BookItem},
        data() {
            return {
                message: 'Слава Одину, Books работает!'
            }
        },
        computed: {
            bookItem(){return this.$store.getters.book(this.$route.params.id)}
        }
    }
</script>

<style scoped lang='sass'>
</style>
