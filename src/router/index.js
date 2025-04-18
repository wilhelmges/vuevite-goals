import { createRouter, createWebHistory } from 'vue-router'
import GoalsAndTasks from '../components/GoalsAndTasks.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: GoalsAndTasks,
    props: route => ({ 
      goals: [], // Default empty array when no goal is selected
      selectedGoalId: null 
    })
  },
  {
    path: '/goal/:goalId',
    name: 'goal',
    component: GoalsAndTasks,
    props: route => ({ 
      selectedGoalId: route.params.goalId 
    })
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
