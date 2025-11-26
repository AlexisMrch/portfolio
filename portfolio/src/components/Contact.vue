
<template>
  <section id="contact" class="text-white">
    <div class="container mx-auto px-6 py-20">
      <h3 class="text-4xl font-bold mb-12 text-center">Contact</h3>
      <div class="max-w-md mx-auto text-center">
        <p class="text-gray-300 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. N'hésitez pas à me contacter pour toute opportunité ou collaboration.
        </p>
        <a
          :href="`mailto:${email}`"
          class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition transform hover:scale-105 duration-300 shadow-lg"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          {{ email }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '../data/portfolio-data'

const email = portfolioData.email
</script>

<style scoped>
</style>