import { createRouter, createWebHistory } from 'vue-router'
import GroupsView from '@/views/GroupsView.vue'
import SettingsView from '@/views/SettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Один і тей самий компонент GroupsView використовується для обох шляхів.
    // В середині компонента буде використовуватися $route.params.grade,
    // щоб отримати клас груп, або поставити його за замовчуваннням.
    {
      path: '/',
      name: 'homepage',
      component: GroupsView,
    },
    {
      path: '/grade/:grade',
      name: 'group',
      component: GroupsView,
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
    },
  ],
})

export default router
