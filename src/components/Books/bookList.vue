<template lang="pug">
    v-container.grey.lighten-5
        v-row(dense)
            v-col(cols='8' offset=2)
                BookSearch
            v-col(cols='8' offset=2 v-for="i in bookList" :key="i.id")
                BookItem(:item="i")
</template>

<script>
    import BookItem from '@/components/Books/bookItem.vue';
    import BookSearch from '@/components/Books/bookSearch.vue';

    export default {
        name: 'BookList',
        components: {BookItem,BookSearch},
        data() {
            return {
                message: 'Слава Одину, Books работает!'
            }
        },
        computed: {
            bookList(){return this.$store.getters.bookList}
        }
    }
</script>

<style scoped lang="sass"></style>
