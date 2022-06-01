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
            let strDate = new Date(this.date);
            let month = strDate.getMonth() > 9 ? strDate.getMonth() : '0'+ strDate.getMonth();
            let date = strDate.getDate() > 9 ? strDate.getDate() : '0' + strDate.getDate();
            return date+' - '+ month +' - '+ strDate.getFullYear();
        },
    }
}
</script>

<style scoped>

</style>
