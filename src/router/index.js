import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AlienAttack from "../components/games/alien-attack/AlienAttack.vue"
import DeckOfCards from "../components/games/deck-of-cards/DeckOfCards.vue"


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
  {
    path: "/games/deck-of-cards",
    name: "DeckOfCards",
    component: DeckOfCards
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
