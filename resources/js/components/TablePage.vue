<template>
    <div>
        <h1 class="user-name">User Name</h1>
        <label for="exampleInputEmail1" class="form-label">Введите данные месяца</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">

        <form>
            <div class="filter-table d-flex mt-3 mb-3">
                <h3 Class="me-4 mt-1">Выбор месяца</h3>
                <select v-model="selectedMonth" class="sel form-select  ms-2" aria-label=".form-select-lg example">
                    <option value="0">ЯНВАРЬ</option>
                    <option value="1">ФЕВРАЛЬ</option>
                    <option value="2">МАРТ</option>
                    <option value="3">АПРЕЛЬ</option>
                    <option value="4">МАЙ</option>
                    <option value="5">ИЮНЬ</option>
                    <option value="6">ИЮЛЬ</option>
                    <option value="7">АВГУСТ</option>
                    <option value="8">СЕНТЯБРЬ</option>
                    <option value="9">ОКТЯБРЬ</option>
                    <option value="10">НОЯБРЬ</option>
                    <option value="11">ДЕКАБРЬ</option>
                </select>
                <select v-model="selectedYear" class="sel form-select  ms-2" aria-label=".form-select-lg example">
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
                <my-button @click.prevent="chooseMonth" class="ms-2">Показать</my-button>
            </div>
        </form>

<!--        <table class="table">-->
<!--            <thead>-->
<!--            <tr>-->
<!--                <th scope="col">Дата</th>-->
<!--                <th scope="col">Fe, %</th>-->
<!--                <th scope="col">Si, %</th>-->
<!--                <th scope="col">Al, %</th>-->
<!--                <th scope="col">Ca, %</th>-->
<!--                <th scope="col">S, %</th>-->
<!--            </tr>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--            <table-row-->
<!--                v-for="row in tableData"-->
<!--                :date="row.date"-->
<!--                :fe="row.fe"-->
<!--                :al="row.al"-->
<!--                :si="row.si"-->
<!--                :ca="row.ca"-->
<!--                :s="row.s"-->
<!--            ></table-row>-->

<!--            </tbody>-->
<!--        </table>-->
        <Spreadsheet :tableData="arrayData" :key="componentKey" />
    </div>
</template>


<script>
import axios from 'axios'
import MyButton from "./UI/MyButton";
import {mapActions, mapState, mapMutations, mapGetters} from "vuex";
import TableRow from "./TableRow";
import Spreadsheet from "./Spreadsheet";


export default {
    name: "table-page",
    components: {TableRow, MyButton, Spreadsheet},

    data() {
        return {
            selectedMonth: 3,
            selectedYear: 2022,
            tableData: [],
            arrayData: [],
            componentKey: 0
        }
    },

    computed: {



        ...mapState({
            dataIOC: state => state.table.dataIOC,

            // 'filter': state => state.table.filter,
            // 'sortBy': state => state.table.sortBy
        }),

        getRowData() {
            // console.log('dataIOC', store.state.table.dataIOC);
            // return store.state.table.dataIOC;
        }
    },


    methods: {
        ...mapActions({
            fillTheTable: 'table/fillTheTable'
        }),

        ...mapMutations({
            // setDataIOC: 'table/setDataIOC',
            setCurrentDate: 'table/setCurrentDate',
            //  'table/setFilter'
            // setSortBy: 'table/setSortBy',

        }),

        updateJspreadsheet() {
            this.componentKey += 1;
            // this.Jspreadsheet.$forceUpdate();
        },
        transformDataToArray() {
            let result = [];
            this.tableData.map( item => {
                let date = new Date(item['date']);
                let strDate = this.transformDate(date);
                result.push([strDate, item['fe'], item['si'], item['al'], item['ca'], item['s']]);
            })
            this.arrayData = result;
        },

        transformDate(numDate) {
            let strDate = new Date(numDate);
            let month = strDate.getMonth() > 9 ? strDate.getMonth() : '0'+ strDate.getMonth();
            let date = strDate.getDate() > 9 ? strDate.getDate() : '0' + strDate.getDate();
            return date+' - '+ month +' - '+ strDate.getFullYear();
        },


        chooseMonth() {
            this.setCurrentDate({month: this.selectedMonth, year: this.selectedYear});
            let nextMonth = +( this.selectedMonth) + 2;
            let month = +( this.selectedMonth) + 1;
            let start = new Date(this.selectedYear, month, 1);
            let end = new Date(this.selectedYear, nextMonth, 1);
            this.tableData = [];
            let result = this.dataIOC.map( (item) => {
                if (item.date > +start && item.date <= +end) {
                    this.tableData.push(item)
                };
            })
            this.transformDataToArray();
            this.updateJspreadsheet();
            return result;
        },

        getData() {
            axios.get('/api/get')
                .then(response => console.log('/api/get: ', response))
        },

        generate() {
            this.fillTheTable(100);
        }

    },
    mounted() {
        // this.transformDataToArray();

    },
    beforeCreate() {
        console.log('before-create: ', this.tableData)
    },

    created() {


        this.fillTheTable(200);
        this.chooseMonth();
        // this.transformDataToArray();
        console.log('created: ', this.tableData)
    },

    watch: {
        // selectedMonth() { console.log('watch selectedMonth: ', this.selectedMonth)}
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

.filter-table {

}

.sel {
    max-width: 120px;
}
</style>
