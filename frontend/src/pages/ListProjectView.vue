<template>
  <div class="user-projects-container">
    <RouterLink to="/projects/add">Novo projeto</RouterLink>
    <h2>Projetos de {{ user.name }}</h2>
    <ul v-if="!error">
      <li v-for="project in projects" :key="project.id">
        {{ project.name }} - {{ project.progress }}% concluído
        <button class="btn btn-danger">Remover</button>
      </li>
    </ul>
    <div v-else>
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getProjects } from '../services/projectService';
import type { Project, User } from '../types';''

const projects = ref<Project[]>([]);
const user = ref<User>({} as User);
const error = ref<string | null>(null);


async function loadUserProjects() {
  const projectsResult = await getProjects();
  if (projectsResult instanceof Error) {
      error.value = 'Error ao recuperar os projetos'
  } else {
    projects.value = projectsResult
  }
};

onMounted(loadUserProjects);
</script>

<style scoped>
.user-projects-container {
  max-width: 800px;
  margin: 0 auto;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
}
.btn-danger {
  color: white;
  background-color: red;
  margin-left: 10px;
}
</style>
