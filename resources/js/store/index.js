import {createStore} from "vuex";
import {tableModule} from "./tableModule";
import {userModule} from "./userModule";

let store = createStore({
    state: {
        isAuth: false,
    },
    mutations: {
        toAuth(state) {
            state.isAuth = true;
        },
        toCancelAuth(state) {
            state.isAuth = false;
        }
    },
    modules: {
        table: tableModule,
        user: userModule
    }
})

export default store;
