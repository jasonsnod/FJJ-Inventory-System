<template>
  <div id="capstone-app" :style="{ 'margin-left': sidebarWidth }">
    <Sidebar />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      integrity="sha384-GLhlTQ8iMYY7eLq1GGem5uHvYRUFislFzL+8eFZ/woqm4u0FqFqBsJETqL8+8IEZ"
      crossorigin="anonymous"
    />
    <div class="main-view">
      <div id="nav">
        <router-link
          v-bind:to="{ name: 'logout' }"
          v-if="$store.state.token !== ''"
          >Logout</router-link
        >
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/sidebar/Sidebar.vue";
import { sidebarWidth } from "./components/sidebar/state";

export default {
  name: "App",
  components: { Sidebar },
  setup() {
    return { sidebarWidth };
  },
};
</script>

<style>
#capstone-app {
  position: fixed;
  height: 100vh;
  width: 100vw;
}

.main-view {
  position: absolute;
  height: 100vh;
  width: 100vw;
}
</style>
