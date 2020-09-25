import { createApp } from "vue";
import routers from "./routers";
import App from "./App.vue";
// importação do bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App)  
  .use(routers)  
  .mount("#app");
