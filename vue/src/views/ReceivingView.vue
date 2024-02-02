<template>
  <div id="receiving-view">
    <h1>ReceivingView</h1>
  </div>
  <div class="core-component"> <CoreComponent /> </div>  
</template>

<script>
import CoreComponent from "../components/core_views/CoreComponent.vue";

export default {
  name: "ReceivingView",
  components: { CoreComponent },
};
</script>

<style scoped>
/* Global styles can be added here */
</style>