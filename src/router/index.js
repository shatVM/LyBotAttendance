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
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/grade/:grade',
      name: 'group',
      component: GroupsView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
      meta: {
        requiresAuth: true,
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!localStorage.getItem('user-password')) window.location.href = '/login'
    else if (localStorage.getItem('user-password') !== 'MTEwMQ==') window.location.href = '/login'
    else next()
  } else next()
})

export default router
