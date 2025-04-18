<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import GoalsAndTasks from './components/GoalsAndTasks.vue'

const route = useRoute()
const router = useRouter()

const goalsData = ref([
  {
    "id": "MDA3MTQ2MjM0MzgwNTQwODI5NTU6MDow",
    "title": "розробка",
    "tasks": [
      {
        "id": "OW1oVktZVGdXMTgydll4Vg",
        "title": "задеплоїти проект у Google cloud"
      },
      {
        "id": "TGJFWDc4R01jV3MtN0FXVg",
        "title": "створити проект на Ethereum"
      }
    ]
  },
  {
    "id": "UWw0OTlLYVpONWpxR3VBYg",
    "title": "shopping",
    "tasks": [
      {
        "id": "ekRueW9ZbGVsbmJQVU1Ldg",
        "title": "запиcатись на тиждень моди"
      },
      {
        "id": "YnhQSzR4MXU0QUZGVGhDQg",
        "title": "уточнити типоколір"
      },
      {
        "id": "aUJrS0NtSlBPX2k4elFScA",
        "title": "купити костюм"
      }
    ]
  },
])

</script>

<template>
  <router-view :goals="goalsData" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
