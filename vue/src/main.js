import { createApp } from 'vue'
import CapstoneApp from './App.vue'
import { createStore } from './store'
import router from './router'
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Create the Vue app
const app = createApp(CapstoneApp)

// Register the FontAwesomeIcon component
app.component('font-awesome-icon', FontAwesomeIcon)

// Set the base URL for server API communication with axios
axios.defaults.baseURL = import.meta.env.VITE_REMOTE_API;

// Check for the token in local storage and set the authorization header if it exists
let currentToken = localStorage.getItem('token');
let currentUser = JSON.parse(localStorage.getItem('user'));

if (currentToken) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
}

// Create the Vuex store passing in the stored credentials
const store = createStore(currentToken, currentUser);

// Use Vuex and Vue Router in the app
app.use(store);
app.use(router);

// Mount the app to the '#app' element
app.mount('#app');

//all font awesome imports done from https://fontawesome.com/docs/web/use-with/vue/add-icons