import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyDxQ9tCu1Dq6dsyp8k8zzOfMhZ4vEtIn1Q",
  authDomain: "my-address-pj-246f1.firebaseapp.com",
  databaseURL: "https://my-address-pj-246f1.firebaseio.com",
  projectId: "my-address-pj-246f1",
  storageBucket: "my-address-pj-246f1.appspot.com",
  messagingSenderId: "863283930586",
  appId: "1:863283930586:web:033f93e270331112b04ce3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
