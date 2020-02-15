<template lang="pug">
    BookView
</template>

<script>
    import BookView from '@/components/Books/bookView.vue';

    export default {
        name: 'BookParts',
        components: {BookView},
        data() {
            return {
                message: 'Слава Одину, Books работает!'
            }
        }
    }
</script>

<style scoped lang='sass'>
</style>
