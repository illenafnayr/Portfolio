import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AlienAttack from "../components/games/alien-attack/AlienAttack.vue"


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/games/alien-attack",
    name: "AlienAttack",
    component: AlienAttack
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
