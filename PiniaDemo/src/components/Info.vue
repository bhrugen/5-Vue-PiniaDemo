<template>
  <div>
    <h1 class="text-center">Info</h1>
    <p class="text-center">This is the Info page</p>
    <p>
      This is a simple game where you can increment, decrement, or randomize the
      score. The score starts at 50 and you can win by reaching
      {{ gameStore.getWinningScore }}.
    </p>

    Winning Score:
    <input type="text" class="form-control" v-model="gameStore.maxHeath" />
  </div>
</template>

<script setup>
import { useGameStore } from "../store/gameStore";
const gameStore = useGameStore();
</script>
