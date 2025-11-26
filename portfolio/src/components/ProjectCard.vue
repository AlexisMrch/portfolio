<template>
  <div
    class="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition duration-300 cursor-pointer transform hover:scale-105 border border-slate-700 shadow-lg"
  >
    <h4 class="text-xl font-bold mb-3">{{ project.title }}</h4>
    <p class="text-gray-400 mb-4">{{ project.shortDesc }}</p>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="(tech, idx) in project.technologies"
        :key="idx"
        class="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
      >
        {{ tech }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
</style>