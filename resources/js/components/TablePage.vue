<template>
    <div>
        <h1 class="user-name">User Name</h1>
        <label for="exampleInputEmail1" class="form-label">Введите данные месяца</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Дата</th>
      <th scope="col">Fe</th>
      <th scope="col">Si</th>
      <th scope="col">Al</th>
      <th scope="col">Ca</th>
      <th scope="col">S</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>

    </div>
</template>


<script>
import axios from 'axios'

    export default {
        name: "table-page",
        components: {},
        methods: {
          getData() {
            axios.get('/api/get')
                  .then( response => console.log('/api/get: ', response))
          }
        },
        mounted() {
          this.getData();

        }
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