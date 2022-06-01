import axios from "axios";
import store from "./index";

export const tableModule = {
    state: () => ({
        dataIOC: null,
        currentMonth: 5,
        currentYear: 2022,
        filter: {
            month: 6,
            year: 2022
        },
        sortBy: 'date'
    }),
    getters: {

    },
    mutations: {
        setDataIOC(state, data) {
            state.dataIOC = data;
        },

        setCurrentDate(state, date) {
            state.currentMonth = date.month;
            state.currentYear = date.year;
        },
        setFilter(state, date) {
            let year = date.getFullYear();
            let month = date.getMonth();
            state.filter.month = month;
            state.filter.year = year;
        },
        setSortBy(state, value) {
            state.sortBy = value;
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
                date = (+date) - (Math.random()*3600*24*365*3*1000);
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
