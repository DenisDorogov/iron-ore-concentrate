import axios from "axios";
import router from '../router/router';

export const userModule = {
    state: () => ({
        userId: null,
        isAuth: false,
        name: ''
    }),
    getters: {
        getCurrentUserName() {
            return this.name
        }
    },
    mutations: {
        setCurrentUser(state, data) {
            state.userId = data.id,
            state.isAuth = true,
            state.name = data.name
        },
        unSetCurrentlogout(state) {
            state.userId = null,
            state.isAuth = false,
            state.name = ''
        }

    },
    actions: {
        fetchUser( {state, commit}, data ) {
            axios.get('/sanctum/csrf-cookie')
                .then(res => {
                    axios.post('http://localhost:8876/api/auth/login', {
                        email: data.email,
                        password: data.password
                    }).then(response => {
                        localStorage.setItem('x_xsrf_token', response.config.headers['X-XSRF-TOKEN']);
                        commit('setCurrentUser', response.data.data);
                        this.router.push({name: 'table'})
                    }) 
                }).catch(e => console.log(e.response));
        } 
    },
    namespaced: true
}