<template>
  <div id="inventory-window">
    <h1>InventoryView</h1>
  </div>
  <div class="inventory-component"> <InventoryComponent /> </div>  
</template>

<script>
import InventoryComponent from '../components/core_views/InventoryComponent.vue';

export default {
  name: "InventoryView",
  components: { InventoryComponent },
};
</script>

<style scoped>
/* Global styles can be added here */
</style>