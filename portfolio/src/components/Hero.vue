<template>
  <section class="text-white">
    <div class="container mx-auto px-6 py-20 text-center">
      <h2 class="text-5xl font-bold mb-4">{{ data.name }}</h2>
      <p class="text-2xl text-blue-400 mb-6">{{ data.title }}</p>
      <p class="text-gray-300 max-w-2xl mx-auto mb-8">
        {{ data.bio }}
      </p>
      <button
        @click="downloadCV"
        class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition transform hover:scale-105 duration-300"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
        </svg>
        Télécharger mon CV
      </button>
    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '../data/portfolio-data'

const data = portfolioData

const downloadCV = () => {
  // Logique de téléchargement du CV
  console.log('Téléchargement du CV...')
  // window.open('/path/to/cv.pdf', '_blank')
}
</script>

<style scoped>
</style>