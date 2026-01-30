<template>
  <div>
    <h2>Borrar por ID</h2>
    <button @click="borrar">Borrar</button>

    <pre>{{ estudiante }}</pre>
  </div>
</template>

<script>
import { borrarFachada } from "@/clients/MatriculaClient";

export default {
  data() {
    return {
      estudiante: null
    }
  },
  methods: {
    async borrar() {
      const id = this.$route.params.id;
      this.estudiante = await borrarFachada(id);
    }
  }
}
</script>
