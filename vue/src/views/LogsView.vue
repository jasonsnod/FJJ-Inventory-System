<template>
  <div id="logs-view">
    <h1>LogsView</h1>
  </div>
  <div class="core-component"> <CoreComponent /> </div>  
</template>
  
<script>
import CoreComponent from "../components/core_views/CoreComponent.vue";

  export default {
    name: "LogView",
    components: { CoreComponent },
};
</script>
  
<style scoped>
/* Global styles can be added here */
</style>