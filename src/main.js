import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './routes.js';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_FIREBASE_CONNECT;
axios.defaults.headers.get["Accepts"] = "application/json";

createApp(App).use(router).mount('#app');
