<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="text-center pt-3 text-success h3">CountOPedia</div>
  <hr />
  <div class="row">
    <div class="col-4 offset-1">
      <router-link
        class="form-control badge rounded-pill text-bg-warning p-4"
        aria-current="page"
        to="/"
        >Home</router-link
      >
    </div>
    <div class="col-4 offset-1">
      <router-link
        class="form-control badge rounded-pill text-bg-warning p-4"
        aria-current="page"
        to="/info"
        >Info</router-link
      >
    </div>
  </div>

  <RouterView />
</template>
