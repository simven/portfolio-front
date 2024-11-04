import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { VueRecaptchaPlugin } from 'vue-recaptcha/head'
import ToastPlugin from 'vue-toast-notification';


const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);

app.use(VueRecaptchaPlugin, {
  v3SiteKey: '6LcxcOwfAAAAAEpQ-YowAGDZjNNXhHRXb5Dk-H8p',
})

app.use(ToastPlugin);

app.mount('#app');
