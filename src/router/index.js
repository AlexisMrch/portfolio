import { createRouter, createWebHashHistory  } from 'vue-router'
import SkillsVue from '@/views/SkillsVue.vue'
import ProfilVue from "@/views/ProfilVue.vue";

const router = createRouter({
  history: createWebHashHistory(),
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
