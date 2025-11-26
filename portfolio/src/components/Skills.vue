<template>
  <section id="competences" class="bg-slate-800/50 text-white">
    <div class="container mx-auto px-6 py-20">
      <h3 class="text-4xl font-bold mb-12 text-center">Compétences</h3>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
        <div
          v-for="(skill, idx) in skills"
          :key="idx"
          class="bg-slate-800 rounded-lg p-6 flex flex-col items-center gap-3 hover:bg-slate-700 transition duration-300 border border-slate-700 shadow-lg transform hover:scale-105"
        >
          <component :is="getIcon(skill.icon)" class="w-8 h-8 text-blue-400" />
          <span class="font-semibold text-center">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'
import { portfolioData } from '../data/portfolio-data'

const skills = portfolioData.skills

const getIcon = (iconType) => {
  const icons = {
    code: () => h('svg', {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24',
      class: 'w-8 h-8'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
      })
    ]),
    database: () => h('svg', {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24',
      class: 'w-8 h-8'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
      })
    ]),
    smartphone: () => h('svg', {
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24',
      class: 'w-8 h-8'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
      })
    ])
  }

  return icons[iconType] || icons.code
}
</script>

<style scoped>
</style>