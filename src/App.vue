<template>
  <div id="app">
    <login></login>
    <router-view />
  </div>
</template>

<script> 
import login from "./views/Login.vue";

export default {
  views: {
    login
  }
};
</script>

<style>
</style>