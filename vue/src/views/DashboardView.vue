<template>
  <div class="home">
    <h1>Dashboard</h1>
    <p>You must be authenticated to see this</p>
  </div>

  <router-link :to="{ name: 'inventory' }">Inventory</router-link>
  <router-link :to="{ name: 'purchasing' }">Purchasing</router-link>
  <router-link :to="{ name: 'picking' }">Picking</router-link>
  <router-link :to="{ name: 'receiving' }">Receiving</router-link>
  <router-link :to="{ name: 'shipping' }">Shipping</router-link>
  <router-link :to="{ name: 'returns' }">Returns</router-link>
</template>

<script>
export default {
  name: "DashboardView",
};
</script>

<style scoped></style>
