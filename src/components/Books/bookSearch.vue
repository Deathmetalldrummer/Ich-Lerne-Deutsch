<template lang="pug">
    v-container
        v-row
            v-col.col-8
                v-text-field(label="Search" v-model='search')
            v-col.col-4
                v-select(:items="selectItems" v-model='searchLevel' multiple label="Level")
</template>

<script>
    export default {
        name: 'BookSearch',
        data() {
            return {
                selectItems: ["A1","A2","B1","B2","C1","C2"],
                message: 'Слава Одину, Book работает!'
            }
        },
        computed: {
            search: {
                get(){return this.$store.getters.bookSearch},
                set(val){console.log('search :', val);this.$store.dispatch('bookSearch', val)},
            },
            searchLevel: {
                get(){return this.$store.getters.searchLevel},
                set(val){console.log('searchLevel :', val);this.$store.dispatch('bookSearchLevel', val)},
            }
        }
    }
</script>

<style scoped lang="sass"></style>
