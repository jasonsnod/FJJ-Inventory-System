<template>
  <div id="capstone-app">
    <div id="nav">
      <router-link
        v-bind:to="{ name: 'logout' }"
        v-if="$store.state.token !== ''"
        >Logout</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "ReceivingView",
};
</script>

<style>
/* Global styles can be added here */
</style>
