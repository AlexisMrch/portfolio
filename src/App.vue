<script setup>
import {RouterView} from 'vue-router'
import Navbar from "@/components/Navbar.vue";

</script>

<template>
  <div class="container">
    <Navbar/>
    <RouterView/>
  </div>
</template>

<style scoped>

* {
  margin : 0;
  padding : 0;
}

.container {
  display: flex;
  padding: 0;
  margin: 0;
  width: 100%;
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}
</style>
