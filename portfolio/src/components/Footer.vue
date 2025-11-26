<template>
  <footer class="bg-slate-900 text-gray-400 border-t border-slate-700">
    <div class="container mx-auto px-6 py-8 text-center">
      <p>© {{ currentYear }} {{ name }} - Tous droits réservés</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { portfolioData } from '../data/portfolio-data'

const name = portfolioData.name
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
</style>