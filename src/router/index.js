import { createRouter, createWebHistory } from 'vue-router'
import Beranda from '../menu/Beranda.vue'
import ForumBahasa from '../menu/ForumBahasa.vue'
import KuisHarian from '../menu/KuisHarian.vue'
import LatihanMendengarkan from '../menu/LatihanMendengarkan.vue'
import ModulDasar from '../menu/ModulDasar.vue'
import Pencapaian from '../menu/Pencapaian.vue'
import Percakapan from '../menu/Percakapan.vue'
import PilihBahasa from '../menu/PilihBahasa.vue'
import Profil from '../menu/Profil.vue'

const routes = [
    { path: '/', component: Beranda},
    { path: '/forumbahasa', component: ForumBahasa},
    { path: '/kuisharian', component: KuisHarian},
    { path: '/latihanmendengarkan', component: LatihanMendengarkan},
    { path: '/moduldasar', component: ModulDasar},
    { path: '/pencapaian', component: Pencapaian},
    { path: '/percakapan', component: Percakapan},
    { path: '/pilihbahasa', component: PilihBahasa},
    { path: '/profil', component: Profil}
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router