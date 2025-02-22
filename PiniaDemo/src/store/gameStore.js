import { defineStore } from "pinia";

export const useGameStore = defineStore("gameStore", {
  state: () => ({
    score: 0,
    maxHeath: 100,
    maxAttack: 30,
    maxDefense: 10,
  }),
});
