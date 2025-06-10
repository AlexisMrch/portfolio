import { createRouter, createWebHistory } from 'vue-router'
import SkillsVue from '@/views/SkillsVue.vue'
import ProfilVue from "@/views/ProfilVue.vue";

const router = createRouter({
  history: createWebHistory('/portfolio/'),
  routes: [
    {
      path: '/',
      redirect : '/profil',

    },

    {
      path: '/profil',
      name: 'profil',
      component: ProfilVue,
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsVue,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/profil'
    }


  ],
})

export default router
