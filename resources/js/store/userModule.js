import axios from "axios";
import router from '../router/router';

export const userModule = {
    state: () => ({
        userId: null,
        // isAuth: false,
        isAuth: true,//TODO Заглушка проблемы с БД

        name: ''
    }),
    getters: {
        getCurrentUserName() {
            return this.state.name;
        }
    },
    mutations: {
        setCurrentUser(state, data) {
            let user;
            if (data === undefined) {
                user = JSON.parse(localStorage.getItem('user'));
            } else {
                user = data;
                localStorage.setItem('user', JSON.stringify({id: user.id, name: user.name}));
            }
            console.log('setCurrentUser-user', user);
            state.userId = user.id,
                state.isAuth = true,
                state.name = user.name

        },
        unSetCurrentlogout(state) {
            state.userId = null,
                state.isAuth = false,
                state.name = '',
                localStorage.removeItem('user');
        }


    },
    actions: {
        fetchUser({state, commit, rootState}, data) {
            axios.get('/sanctum/csrf-cookie')
                .then(res => {
                    axios.post('http://localhost:8876/api/auth/login', {
                        email: data.email,
                        password: data.password
                    }).then(response => {
                        console.log('fetchUser-response: ', response);
                        localStorage.setItem('x_xsrf_token', response.config.headers['X-XSRF-TOKEN']);
                        commit('setCurrentUser', response.data.data);
                        // state.commit('user/setCurrentUser');

                    })
                }).catch(e => console.log(e.response));
        }
    },
    namespaced: true
}
