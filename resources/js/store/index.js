import {createStore} from "vuex";
import {tableModule} from "./tableModule";
import {userModule} from "./userModule";

export default createStore({
    state: {
      isAuth: false,
    },
    modules: {
        table: tableModule,
        user: userModule
    }
})