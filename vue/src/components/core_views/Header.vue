<template>
  <div id="header">
    <p>Ticket</p>
    <router-link v-bind:to="{ name: 'logout' }" v-if="$store.state.token !== ''"
      >Logout</router-link
    >
  </div>
</template>

<script></script>

<style scoped>
#header {
  width: 98%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: flex-end;
  align-items: center;
}
</style>
