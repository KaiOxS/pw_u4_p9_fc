<template>
  <div>
    <h2>Consultar estudiante por ID</h2>
    <button @click="consultar">Consultar</button>

    <pre>{{ estudiante }}</pre>
  </div>
</template>

<script>
import { consultarPorIdFachada } from "@/clients/MatriculaClient";

export default {
  data() {
    return {
      estudiante: null
    }
  },
  methods: {
    async consultar() {
      const id = this.$route.params.id;
      this.estudiante = await consultarPorIdFachada(id);
    }
  }
}
</script>
