import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router/index';

// Bring in the styles for the app
import './styles/index.css';

// Create the app
let app = createApp(App);

// Setup Vue to use the Vue-Router
app.use(router);

// Mount the app
app.mount('#app');
