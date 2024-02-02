<template>
  <div id="purchasing-view">
    <h1>PurchasingView</h1>
  </div>
  <div class="core-component"> <CoreComponent /> </div>    
</template>

<script>
import CoreComponent from "../components/core_views/CoreComponent.vue";

export default {
  name: "PurchasingView",
  components: { CoreComponent },
};
</script>

<style scoped>
/* Global styles can be added here */
</style>