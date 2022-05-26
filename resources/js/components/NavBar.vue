<template>
    <div class="d-flex justify-content-evenly border-primary nav-bar">
        <h1 class="title">Iron Ore Concentrate Tables</h1>
        <div class="buttons-container d-flex justify-content-start">
            <my-button @click="$router.push('/table')" >Таблица</my-button>
            <my-button @click="$router.push('/logout')">Logout</my-button>
        </div>
        

        
    </div>
</template>

<script>

export default {
    name: 'nav-bar',
    components: {},
    props: {},
    methods: {}
}

</script>

<style scoped>
.btn {
    margin: 0 20px 0 10px;
}
.nav-bar {
    border-bottom: 2px solid;
    padding-bottom: 10px;

}
</style>