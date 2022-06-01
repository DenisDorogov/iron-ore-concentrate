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
                console.log('Moduledate--', +date);
                date = (+date)/1000 - (Math.random()*3600*24*365*3);
                console.log('Moduledate  ', date);

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
        },


    },

    namespaced: true
}
