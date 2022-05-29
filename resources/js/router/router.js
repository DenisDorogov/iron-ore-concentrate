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
console.log('process.env.BASE_URL',process.env.BASE_URL)
const router = createRouter({
    history: createWebHistory(/*process.env.BASE_URL*/),
    routes,
})

router.beforeEach((to, from, next )=> {
    const token = localStorage.getItem('x_xsrf_token');
    // debugger;

    if (!token) {
        if (to.name === 'registration') {
            return next();
        } else {
            return next({name: 'registration'})
        };
    }

    if (to.name === 'registration' && token) next({name: 'table'});
    });

export default router;
