<template>
    <div class="container-md">
        <nav-bar></nav-bar>
        <user-registration v-if="!$store.state.user.isAuth"></user-registration>
        <table-page v-if="$store.state.user.isAuth"></table-page>
        <!--        <router-view></router-view>-->
    </div>

</template>


<script>
import UserRegistration from "./components/UserRegistration";
import NavBar from "./components/NavBar";
import TablePage from "./components/TablePage";


export default {
    name: 'App',
    components: {UserRegistration, NavBar, TablePage},

    data() {
        return {
            token: null
        }
    },
    watch: {
        token() {
            console.log('watch token');
            this.getToken();
        }
    },

    mounted() {
        this.getToken();
    },


    methods: {
        getToken() {
            this.token = localStorage.getItem('x_xsrf_token');
        },
    },
};
</script>


<style scoped>
.selector-for-some-widget {
    box-sizing: content-box;
}

.container-md {
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1.5rem;
    background-color: rgba(0, 123, 255, .15);
    border: 1px solid rgba(0, 123, 255, .2);

}
</style>
