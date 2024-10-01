<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="authenticate">
      <div>
        <label for="username">Username</label>
        <input v-model="username" id="username" type="text" required />
      </div>

      <div>
        <label for="password">Senha</label>
        <input v-model="password" id="password" type="password" required />
      </div>

      <button type="submit">Entrar</button>

      <p v-if="error" class="error-message">{{ error }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../store/userStore';
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const username = ref('')
const password = ref('')
const router = useRouter()
const error = ref<string | null>(null)


async function authenticate() {
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
}
.error-message {
  color: red;
}

div {
  margin: 10px;
}
</style>
