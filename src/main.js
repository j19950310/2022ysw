import { createApp } from "vue";
import router from "@/plugin/router";
import App from "./App.vue";
import "@/style/main.scss";

createApp(App).use(router).mount("#app");
