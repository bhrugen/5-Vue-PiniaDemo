import { defineStore } from "pinia";

export const useGameStore = defineStore("gameStore", {
  state: () => ({
    score: 50,
    maxHeath: 100,
    maxAttack: 30,
    maxDefense: 10,
  }),
});
