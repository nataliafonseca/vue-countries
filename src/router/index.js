import Vue from "vue";
import VueRouter from "vue-router";

import CountryView from "../views/CountryView.vue";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/:countryCode",
    name: "country",
    props: true,
    component: CountryView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
