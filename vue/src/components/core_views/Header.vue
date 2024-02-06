<template>
    <div id="nav">
        <router-link
          v-bind:to="{ name: 'logout' }"
          v-if="$store.state.token !== ''"
          >Logout</router-link
        >
      </div>
</template>

<script>

</script>

<style scoped>

</style>