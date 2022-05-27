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
        component: TablePage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;
