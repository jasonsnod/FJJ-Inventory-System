<template>
  <!-- Binds the div to the value of the sidebar -->
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <img
      class="website-logo"
      src="src\Images\website-logo.png"
      alt="FJJ Inventory Systems Logo"
    />

    <Sidebarlink to="/" icon="fa-solid fa-bars">Dashboard</Sidebarlink>
    <Sidebarlink to="/inventory" icon="fa-solid fa-boxes-stacked"
      >Inventory</Sidebarlink
    >
    <Sidebarlink to="/purchasing" icon="fa-solid fa-store"
      >Purchasing</Sidebarlink
    >
    <Sidebarlink to="/picking" icon="fa-brands fa-wolf-pack-battalion"
      >Picking</Sidebarlink
    >
    <Sidebarlink to="/receiving" icon="fa-solid fa-pallet"
      >Receiving</Sidebarlink
    >
    <Sidebarlink to="/shipping" icon="fa-solid fa-truck-fast"
      >Shipping</Sidebarlink
    >
    <Sidebarlink to="/returns" icon="fa-solid fa-ghost">Returns</Sidebarlink>
    <Sidebarlink to="/logs" icon="fa-solid fa-ghost">Logs</Sidebarlink>
    <!--TODO: PLACEHOLDER ICON FOR ADDED VIEW-->

    <!-- The icon is rotated 180 degrees when the collapsed variable is true
            The @click event on the collapse icon triggers the toggleSidebar method.-->
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<script>
import Sidebarlink from "./Sidebarlink.vue";
import { collapsed, toggleSidebar, sidebarWidth } from "./state";

export default {
  props: {},
  components: { Sidebarlink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
</script>

<style>
/* This selector (:root) selects the highest-level parent element in an HTML document, which is the root element */
:root {
  --sidebar-bg-color: #000000;
  --sidebar-item-hover: #23aeff;
  --sidebar-item-active: #0dffeb;
}
</style>

<style scoped>
.sidebar {
  color: azure;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  /* The ease timing function starts slowly, accelerates through the middle of the transition, and then slows down again as it reaches the end */
  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.website-logo {
  border-radius: 50%;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: antiquewhite;

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
