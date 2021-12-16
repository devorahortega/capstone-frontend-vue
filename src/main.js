import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VModal from "vue-js-modal";
import "vue-js-modal/dist/styles.css";

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

Vue.config.productionTip = false;

Vue.use(VModal, {});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

var myModal = document.getElementById("myModal");
var myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});
