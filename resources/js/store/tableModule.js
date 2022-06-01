import axios from "axios";
import {getDatabase} from "firebase/database";
import store from "./index";

export const tableModule = {
    state: () => ({
        dataIOC: null,
        currentMonth: null,
        sortBy: null
    }),
    getters: {

    },
    mutations: {
        setDataIOC(state, data) {
            state.dataIOC = data;
        }

    },
    actions: {
        fillTheTable({state, commit, rootState}, count) {
            let data = [];
            for (let i = 1; i <= count; i++) {
                let al = Math.round((Math.random()*10+10)*100)/100;
                let si = Math.round((Math.random()*2+5)*100)/100;
                let ca = Math.round((Math.random()*5+3)*100)/100;
                let s = Math.round((Math.random()*3+2)*100)/100;
                let fe = 99-al-si-ca-s;
                fe = fe.toFixed(2);
                let date = new Date();
                date = date - Math.random()*153600000;
                let row = {
                    id: i,
                    date: date,
                    fe: fe,
                    al: al,
                    si: si,
                    ca: ca,
                    s: s
                };
                data.push(row);
            }

            commit('setDataIOC', data);
        }

    },
    namespaced: true
}
