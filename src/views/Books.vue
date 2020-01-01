<template lang="pug">
    BookList
</template>

<script>
    import BookList from '@/components/Books/bookList.vue';

    export default {
        name: 'Books',
        components: {BookList},
        data() {
            return {
                message: 'Слава Одину, Books работает!'
            }
        }
    }
</script>

<style scoped lang='sass'>
</style>
