import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import liff from "@line/liff";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// Global variable
// app.config.globalProperties.$liff = liff;
app.provide("$liff", liff);

app.mount("#app");
