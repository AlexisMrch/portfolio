<template>
  <section id="projets" class="text-white">
    <div class="container mx-auto px-6 py-20">
      <h3 class="text-4xl font-bold mb-12 text-center">Mes Projets</h3>
      <div class="grid md:grid-cols-3 gap-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          @click="selectProject(project)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineEmits } from 'vue'
import ProjectCard from './ProjectCard.vue'
import { portfolioData } from '../data/portfolio-data'

const projects = portfolioData.projects

const emit = defineEmits(['select-project'])

const selectProject = (project) => {
  emit('select-project', project)
}
</script>

<style scoped>
</style>