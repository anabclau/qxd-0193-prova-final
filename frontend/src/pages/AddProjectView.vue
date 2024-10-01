<template>
  <div class="add-project-container">
    <h2>Adicionar Projeto</h2>
    <form>
      <div>
        <label for="name">Nome do Projeto</label>
        <input id="name" type="text" required />
      </div>

      <div>
        <label for="description">Descrição</label>
        <textarea  id="description" required></textarea>
      </div>

      <button type="submit">Adicionar</button>

      
    </form>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.add-project-container {
  max-width: 500px;
  margin: 0 auto;
}
.error-message {
  color: red;
}

div {
  margin: 10px;
}
</style>
