<template>
    <div class="d-flex  mb-3 justify-content-between border-primary nav-bar">
        <h1 class="title">Iron Ore Concentrate Tables</h1>
        <div class="buttons-container d-flex justify-content-start">

            <h5 v-if="token" class="mt-2">{{$store.state.user.name}} </h5>
            <my-button @click.prevent="this.logout"  v-if="$store.state.user.isAuth">Logout</my-button>
            <my-button @click.prevent="this.toTable" v-if="!$store.state.user.isAuth" >Таблица</my-button>
            <router-link to="/table">table</router-link>

        </div>



    </div>
</template>

<script>
import router from '../router/router';


export default {
    name: 'nav-bar',
    components: {},
    props: {},
    data() {
        return {
            token: null
        }
    },
    mounted() {
        this.getToken();
    },

    updated() {

    },

    methods: {
        getToken() {
            this.token = localStorage.getItem('x_xsrf_token');
            console.log('token: ', this.token);
        },

        toTable() {
            $router.push('/table');
        },

        logout() {
            axios.post('http://localhost:8876/api/auth/logout', {
            }).then(response => {
                localStorage.removeItem('x_xsrf_token');
                })
              .catch(e => console.log(e));
            //   router.push('/');
        }

    }
}

</script>

<style scoped>
.btn {
    margin: 0 20px 0 10px;
}
.nav-bar {
    border-bottom: 2px solid;
    padding-bottom: 10px;
    margin-bottom: 40px;
}
</style>
