<template>
  <div id="returns-view">
    <h1>ReturnsView</h1>
  </div>
  <div class="core-component"> <CoreComponent /> </div>    
</template>

<script>
import CoreComponent from "../components/core_views/CoreComponent.vue";

export default {
  name: "ReturnsView",
  components: { CoreComponent },
};
</script>

<style scoped>
#returns-view {
    margin-left: 10%;
}
</style>