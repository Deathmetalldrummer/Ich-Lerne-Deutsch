<template lang="pug">
    v-container.fill-height(fluid)
        v-row(align='center' justify='center')
            v-col(cols='12' sm='8' md='6')
                v-card.elevation-12
                    v-toolbar(color='primary' dark flat)
                        v-toolbar-title Логан
                    v-card-text
                        v-alert(disabled='true' type="error" v-if='formError.status') {{formError.message}}
                        v-form
                            v-text-field(v-model='email' label='Мыло' name='Email' prepend-icon='email' type='email')
                            v-text-field#password(v-model='password' label='Пароль' name='password' prepend-icon='lock' type='password')
                    v-card-actions
                        v-spacer
                        v-btn(:disabled='isDisabled' color='primary' @click="signUp()") Зарегаться
</template>

<script>
     export default {
         name: 'Signup',
        data() {
            return {
                email: null,
                password: null,
                message: 'Слава Одину, Signup работает!'
            }
        },
         computed: {
             isDisabled(){return this.$store.getters.formProcessing},
             formError(){return this.$store.getters.formError},
         },
         methods: {
             signUp(){
                 console.log(this.email);
                 console.log(this.password);
             }
         }
        }
</script>

<style scoped lang='sass'>
</style>
