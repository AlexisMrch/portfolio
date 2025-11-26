<template>
  <div
    class="fixed inset-0 bg-black/80 flex items-center justify-center p-6 z-50"
    @click="close"
  >
    <div
      class="bg-slate-800 text-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl"
      @click.stop
    >
      <div class="flex justify-between items-start mb-6">
        <h4 class="text-3xl font-bold">{{ project.title }}</h4>
        <button
          @click="close"
          class="text-gray-400 hover:text-white transition duration-300"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <div class="flex flex-wrap gap-2 mb-6">
        <span
          v-for="(tech, idx) in project.technologies"
          :key="idx"
          class="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
        >
          {{ tech }}
        </span>
      </div>

      <p class="text-gray-300 mb-6 leading-relaxed">{{ project.longDesc }}</p>

      <div class="flex gap-4">
        <a
          :href="project.github"
          class="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-2 rounded-lg transition duration-300"
          target="_blank"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
        <a
          :href="project.demo"
          class="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition duration-300"
          target="_blank"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
          Démo
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  project: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>

<style scoped>
</style>