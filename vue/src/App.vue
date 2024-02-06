<template>
  <div id="capstone-app">
    <!--:style="{ 'margin-left': sidebarWidth }" -->
    <Sidebar />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      integrity="sha384-GLhlTQ8iMYY7eLq1GGem5uHvYRUFislFzL+8eFZ/woqm4u0FqFqBsJETqL8+8IEZ"
      crossorigin="anonymous"
    />
    <main id="main-view">
      <Header />
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "./components/core_views/Header.vue";
import Sidebar from "./components/sidebar/sidebar.vue";
import { sidebarWidth } from "./components/sidebar/state";

export default {
  name: "App",
  components: { Sidebar, Header },
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

#main-view {
  margin-left: 56px;
}
</style>
