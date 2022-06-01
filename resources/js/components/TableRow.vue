<template>
    <tr>
        <th scope="row">{{date.month}}-{{date.year}}</th>
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
    props: ['date', 'fe', 'si', 'al', 'ca', 's']
}
</script>

<style scoped>

</style>
