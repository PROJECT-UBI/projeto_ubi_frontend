import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import i18n from './i18n';
import App from './components/Suspender.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import ForgotPassword from './pages/ForgotPassword.vue';
import ResetPassword from './pages/ResetPassword.vue';
import CheckPage from './pages/CheckPage.vue';
import Home from './pages/Home.vue';
import BraceletRegistration from './pages/BraceletRegistration.vue'
import Settings from './pages/Settings.vue';
import MedicalRecords from './pages/MedicalRecords.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/forgotpassword', name: 'ForgotPassword', component: ForgotPassword },
    { path: '/resetpassword', name: 'ResetPassword', component: ResetPassword },
    { path: '/checkpage', name: 'CheckPage', component: CheckPage },
    { path: '/home', name: 'Home', component: Home },
    { path: '/bracelet', name: 'BraceletRegistration', component: BraceletRegistration },
    { path: '/settings', name: 'Settings', component: Settings },
    { path: '/medicalrecords', name: 'MedicalRecords', component: MedicalRecords },
  ],
});

i18n(createApp(App)).use(router).mount('#app');
