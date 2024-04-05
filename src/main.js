import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import i18n from './i18n';
import App from './components/Suspender.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import ForgotPassword from './pages/ForgotPassword.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/forgotpassword', name: 'ForgotPassword', component: ForgotPassword },
  ],
});

i18n(createApp(App)).use(router).mount('#app');
