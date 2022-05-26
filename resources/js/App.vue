<template>
    <nav-bar></nav-bar>
    <user-registration></user-registration>
</template>


<script>
import UserRegistration from "./components/UserRegistration";
import NavBar from "./components/NavBar";

  export default {
    name: 'App',
    components: {UserRegistration, NavBar},

    mounted() {
      console.log("Example component mounted");
    }
  };
</script>


<style scoped>
  .selector-for-some-widget {
  box-sizing: content-box;
}
</style>