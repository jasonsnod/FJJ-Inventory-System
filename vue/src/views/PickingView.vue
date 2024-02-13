<template>
  <div id="picking-window">
    <h1>PickingView</h1>
  </div>
  <div class="picking-component"> <PickingComponent /> </div>  
</template>

<script>
import PickingComponent from '../components/core_views/PickingComponent.vue';

export default {
  name: "PickingView",
  components: { PickingComponent },
};
</script>

<style scoped>
#picking-window {
    margin-left: 10%;
}
</style>