<template>
    <div>
        <h3 class="">Регистрация пользователя</h3>
        <form @submit.prevent>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input v-model="form.email" type="email" class="form-control input" id="exampleInputEmail1"
                       aria-describedby="emailHelp">

            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input v-model="form.password" type="password" class="form-control input" id="exampleInputPassword1">
            </div>
            <button @click.pervent='sendForm' type="submit" class="btn btn-primary">Submit</button>
        </form>

    </div>
</template>

<script>
import axios from 'axios'
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
    name: "user-registration",
    components: {},
    data() {
        return {
            form: {
                email: '',
                password: '',
                name: '',
            }
        }
    },

    mounted() {
        this.setCurrentUser();
    },


    methods: {

        ...mapState({
            userId: 'user/userID',
            isAuth: 'user/isAuth',
            name: 'user/name',


        }),
        ...mapMutations({
            setCurrentUser: 'user/setCurrentUser',
            unSetCurrentlogout: 'user/unSetCurrentlogout'
        }),
        ...mapActions({
            fetchUser: 'user/fetchUser'
        }),

        sendForm() {
            let email = this.form.email;
            let password = this.form.password;
            this.fetchUser({email, password});
            this.form.email = null;
            this.form.password = null;
        },

    }
}
</script>


<style scoped>
.input {
    max-width: 300px;
}
</style>
