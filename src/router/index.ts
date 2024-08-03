import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import LayoutView from '../views/LayoutView.vue'
import ProjectView from '../views/project/ProjectView.vue'
import CommunityView from '../views/community/CommunityView.vue'
import PersonView from '../views/person/PersonView.vue'
import AIView from '../views/news/ai/AIView.vue'
import ARView from '../views/news/ar/ARView.vue'
import INView from '../views/news/in/INView.vue'
import AllView from '../views/news/all/AllView.vue'
import AIDetailView from '../views/news/ai/AIDetailView.vue'
import ARDetailView from '../views/news/ar/ARDetailView.vue'
import INDetailView from '../views/news/in/INDetailView.vue'
import AllDetailView from '../views/news/all/AllDetailView.vue'
import ContentDetailView from '../views/home/ContentDetailView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: LayoutView,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/project',
          name: 'project',
          component: ProjectView
        },
        {
          path: '/community',
          name: 'community',
          component: CommunityView
        },
        {
          path: '/person',
          name: 'person',
          component: PersonView
        },
        {
          path: '/ai',
          name: 'ai',
          component: AIView
        },
        {
          path: '/ar',
          name: 'ar',
          component: ARView
        },
        {
          path: '/in',
          name: 'in',
          component: INView
        },
        {
          path: '/news',
          name: 'news',
          component: AllView
        },
        {
          path:'/news/:id',
          name: 'NewsDetail',
          component: AllDetailView
        },
        {
          path:'/ai/:id',
          name: 'AIDetail',
          component: AIDetailView
        },
        {
          path:'/ar/:id',
          name: 'ARDetail',
          component: ARDetailView
        },
        {
          path:'/in/:id',
          name: 'INDetail',
          component: INDetailView
        },
        {
          path:'/content/:id',
          name: 'ContentDetail',
          component: ContentDetailView
        }
      ]
    }
  ]
})

export default router
