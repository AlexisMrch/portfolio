<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <Header />
    <Hero />
    <Projects @select-project="handleProjectSelect" />
    <Skills />
    <Contact />
    <Footer />
    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      @close="selectedProject = null"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import ProjectModal from './components/ProjectModal.vue'

const selectedProject = ref(null)

const handleProjectSelect = (project) => {
  selectedProject.value = project
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>