<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha384-GLhlTQ8iMYY7eLq1GGem5uHvYRUFislFzL+8eFZ/woqm4u0FqFqBsJETqL8+8IEZ" crossorigin="anonymous">
  <div id="capstone-app">
    <div id="nav">
      <router-link v-bind:to="{ name: 'logout' }" v-if="$store.state.token !== ''">Logout</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Global styles can be added here */
</style>