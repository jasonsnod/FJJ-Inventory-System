import { createRouter as createRouter, createWebHistory } from "vue-router";
import { useStore } from "vuex";

// Import components
import DashboardView from "../views/DashboardView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import RegisterView from "../views/RegisterView.vue";
import InventoryView from "../views/InventoryView.vue";
import PickingView from "../views/PickingView.vue";
import PurchasingView from "../views/PurchasingView.vue";
import ReceivingView from "../views/ReceivingView.vue";
import ReturnsView from "../views/ReturnsView.vue";
import ShippingView from "../views/ShippingView.vue";

/**
 * The Vue Router is used to "direct" the browser to render a specific view component
 * inside of App.vue depending on the URL.
 *
 * It also is used to detect whether or not a route requires the user to have first authenticated.
 * If the user has not yet authenticated (and needs to) they are redirected to /login
 * If they have (or don't need to) they're allowed to go about their way.
 */
const routes = [
  {
    path: "/",
    name: "dashboard",
    component: DashboardView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/inventory",
    name: "inventory",
    component: InventoryView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/picking",
    name: "picking",
    component: PickingView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/purchasing",
    name: "purchasing",
    component: PurchasingView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/receiving",
    name: "receiving",
    component: ReceivingView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/returns",
    name: "returns",
    component: ReturnsView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/shipping",
    name: "shipping",
    component: ShippingView,
    meta: {
      requiresAuth: true,
    },
  },
];

// Create the router
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to) => {
  // Get the Vuex store
  const store = useStore();

  // Determine if the route requires Authentication
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

  // If it does and they are not logged in, send the user to "/login"
  if (requiresAuth && store.state.token === "") {
    return { name: "login" };
  }
  // Otherwise, do nothing and they'll go to their next destination
});

export default router;
