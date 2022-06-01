<template>
    <tr>
        <th scope="row" class="d-flex justify-content-end pe-4">{{transformDate()}}</th>
        <td>{{fe}}</td>
        <td>{{ al }}</td>
        <td>{{si}}</td>
        <td>{{ca}}</td>
        <td>{{s}}</td>
    </tr>
</template>

<script>
export default {
    name: "table-row",
    props: ['date', 'fe', 'si', 'al', 'ca', 's'],
    methods: {
        transformDate() {
            console.log('Table-date>>', this.date);
            let strDate = new Date(this.date*1000);
            let month = strDate.getMonth() > 9 ? strDate.getMonth() : '0'+ strDate.getMonth();
            return strDate.getDate()+' - '+ month +' - '+ strDate.getFullYear();
        },
    }
}
</script>

<style scoped>

</style>
