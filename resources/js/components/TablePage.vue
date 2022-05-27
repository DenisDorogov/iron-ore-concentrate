<template>
    <div>
        <h1 class="user-name">User Name</h1>
        <label for="exampleInputEmail1" class="form-label">Введите данные месяца</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
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
    --bs-table-color: var(--bs-body-color);
    --bs-table-bg: transparent;
    --bs-table-border-color: var(--bs-border-color);
    --bs-table-accent-bg: transparent;
    --bs-table-striped-color: var(--bs-body-color);
    --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
    --bs-table-active-color: var(--bs-body-color);
    --bs-table-active-bg: rgba(0, 0, 0, 0.1);
    --bs-table-hover-color: var(--bs-body-color);
    --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
    width: 100%;
    margin-bottom: 1rem;
    color: var(--bs-table-color);
    vertical-align: top;
    border-color: var(--bs-table-border-color);

    margin-top: 40px;

}
.user-name {
    margin-top: 40px;
}
</style>