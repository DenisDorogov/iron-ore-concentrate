import {createRouter, createWebHistory} from "vue-router";
import UserRegistration from "../components/UserRegistration";
import TablePage from "../components/TablePage";

const routes = [
    {
        path: '/',
        component: UserRegistration,
        name: 'registration'
    },
    {
        path: '/table',
        component: TablePage,
        name: 'table'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach((to, from, next )=> {
    const token = localStorage.getItem('x_xsrf_token');
    if (!token) {
        if (to.name === 'registration') next()
    } else next({name: 'registration'});

    if (to.name === 'registration' && token) next({name: 'table'});

})

export default router;
