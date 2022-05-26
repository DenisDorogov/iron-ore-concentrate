import {createRouter, createWebHistory} from "vue-router";
import UserRegistration from "../components/UserRegistration";
import TablePage from "../components/TablePage";

const routes = [
    {
        path: '/',
        component: UserRegistration
    },
    {
        path: '/table',
        component: TablePage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
