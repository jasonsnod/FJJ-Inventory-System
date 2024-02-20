<template>
  <div id="shipping-view">
    <h1>ShippingView</h1>
  </div>
  <div class="core-component"> <CoreComponent /> </div>  
</template>

<script>
import CoreComponent from "../components/core_views/CoreComponent.vue";

export default {
  name: "ShippingView",
  components: { CoreComponent },
};
</script>

<style scoped>
#shipping-view {
    margin-left: 10%;
}
</style>