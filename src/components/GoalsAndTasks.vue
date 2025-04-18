<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const props = defineProps({
  goals: {
    type: Array,
    required: true,
    default: () => []
  },
  title: {
    type: String,
    default: 'Цілі та Задачі'
  }
})

const selectedGoal = computed(() => {
  if (!route.params.goalId) return null
  return props.goals.find(goal => goal.id === route.params.goalId)
})

const goToGoal = (goalId) => {
  router.push({ name: 'goal', params: { goalId } })
}

const copyCurrentUrl = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href)
    alert('Посилання скопійовано до буферу обміну!')
  } catch (err) {
    alert('Не вдалося скопіювати посилання')
  }
}

const helpWithGoal = () => {
  return;
  const message = `Я хочу допомогти з ціллю: ${selectedGoal.value.title}`
  window.location.href = `mailto:?subject=${encodeURIComponent(message)}&body=${encodeURIComponent(window.location.href)}`
}
</script>

<template>
  <article class="goals-tasks">
    <header>
      <h2>{{ title }}</h2>
    </header>
    <div class="content">
      <template v-if="selectedGoal">
        <div class="goal-item">
          <h3 class="goal-title">
            <span class="back-button" @click="router.push('/')">←</span>
            Ціль: {{ selectedGoal.title }}
          </h3>
          <ul class="tasks-list">
            <li v-for="task in selectedGoal.tasks" :key="task.id" class="task-item">
              {{ task.title }}
            </li>
          </ul>
          <div class="buttons-container">
            <button class="app-button copy-url-button" @click="copyCurrentUrl">Поширити посилання на ціль</button>
            <button class="app-button help-button" @click="helpWithGoal">Готовий допомогти з ціллю</button>
          </div>
        </div>
      </template>
      <template v-else>
        <div v-for="goal in goals" :key="goal.id" class="goal-item" @click="goToGoal(goal.id)">
          <h3 class="goal-title">{{ goal.title }}</h3>
          <div class="task-count">{{ goal.tasks.length }} завдань</div>
        </div>
      </template>
    </div>
  </article>
</template>

<style scoped>
.buttons-container {
  margin-top: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.app-button {
  margin: 0;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
}

.copy-url-button {
  background-color: #4CAF50;
  color: white;
}

.copy-url-button:hover {
  background-color: #45a049;
}

.help-button {
  background-color: #2196F3;
  color: white;
}

.help-button:hover {
  background-color: #1976D2;
}

.goals-tasks {
  max-width: 800px;
  margin: 0 auto;
}

.content {
  padding: 1rem;
}

.goal-item {
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f8f9fa;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.goal-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.goal-title {
  margin: 0 0 1rem;
  color: #2c3e50;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
}

.back-button {
  margin-right: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background-color: #e9ecef;
}

.back-button:hover {
  background-color: #dee2e6;
}

.task-count {
  color: #6c757d;
  font-size: 0.9rem;
}

.tasks-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.task-item {
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>
