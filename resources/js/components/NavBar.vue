<template>
    <div class="d-flex  mb-3 justify-content-evenly border-primary nav-bar">
        <h1 class="title">Iron Ore Concentrate Tables</h1>
        <div class="buttons-container d-flex justify-content-start">
            {{$store.state.user.isAuth ? $store.state.user.name : underfined}}
            <my-button @click.prevent="$router.push('/table')" >Таблица</my-button>
            <my-button @click.prevent="this.logout">Logout</my-button>
        </div>
        

        
    </div>
</template>

<script>
import router from '../router/router';
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
    name: 'nav-bar',
    components: {},
    props: {},
    methods: {
        logout() {
            axios.post('http://localhost:8876/api/auth/logout', {
            }).then(response => {
                console.log(response)
                
                })
              .catch(e => console.log(e));
              router.push('/');
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