<template>
  <div id="dashboard-view">
    <h1>DashboardView</h1>
  </div>
  <div class="core-component"> <CoreComponent /> </div>
</template>

<script>
import CoreComponent from "../components/core_views/CoreComponent.vue";

export default {
  name: "DashboardView",
  components: { CoreComponent },
}
</script>

<style scoped>
#dashboard-view {
    margin-left: 10%;
}
</style>