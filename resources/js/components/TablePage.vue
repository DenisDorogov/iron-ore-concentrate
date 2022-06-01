<template>
    <div>
        <h1 class="user-name">User Name</h1>
<!--        <my-button @click.prevent="generate">Generate</my-button>-->
        <label for="exampleInputEmail1" class="form-label">Введите данные месяца</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">

        <p>Добавить данные</p>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">Дата</th>
                <th scope="col">Fe, %</th>
                <th scope="col">Si, %</th>
                <th scope="col">Al, %</th>
                <th scope="col">Ca, %</th>
                <th scope="col">S, %</th>
            </tr>
            </thead>
            <tbody>
            <table-row
                v-for="row in tableData"
                :date="row.date"
                :fe="row.fe"
                :al="row.al"
                :si="row.si"
                :ca="row.ca"
                :s="row.s"
            ></table-row>

            </tbody>
        </table>
    </div>
</template>


<script>
import axios from 'axios'
import MyButton from "./UI/MyButton";
import {mapActions, mapState} from "vuex";
import TableRow from "./TableRow";
// import store from "../store/index";

export default {
    name: "table-page",
    components: {TableRow, MyButton},
    data() {
        return {

        }
    },

    computed: {
        ...mapState({
            tableData: state => state.table.dataIOC,
        }),

        getRowData() {
            console.log('dataIOC', store.state.table.dataIOC);
            return store.state.table.dataIOC;
        }
    },
    created() {

    },

    methods: {
        getData() {
            axios.get('/api/get')
                .then(response => console.log('/api/get: ', response))
        },

        generate() {
            this.fillTheTable(100)
        },
        ...mapActions({
            fillTheTable: 'table/fillTheTable'
        }),

        convertData(sec) {
            return {year: getFullYear(sec), month: getMonth(sec)};
        }


    },

    mounted() {
        this.fillTheTable(100);
    },
}
</script>


<style scoped>
.table {
    margin-top: 40px;

}

.user-name {
    margin-top: 40px;

}
</style>
