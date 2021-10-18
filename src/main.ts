import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router/index';
import { createHead } from '@vueuse/head';

// Bring in the styles for the app
import './styles/index.css';

// Create the app
const app = createApp(App);

// https://github.com/vueuse/head
const head = createHead();

// Setup Vue to use the Vue-Router
app.use(router);
// Setup Vue to use the Vue-usehead plugin
app.use(head);

// Mount the app
app.mount('#app');
