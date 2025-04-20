// import './assets/main.css'

import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import App from "./App.vue";
import ToastService from "primevue/toastservice"; // ✅ ADD THIs



const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: ".my-app-dark",
    },
  },
});
// app.use(PrimeVue);

app.use(ToastService); // ✅ ADD THIS
app.mount("#app");
