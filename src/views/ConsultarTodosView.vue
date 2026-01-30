<template>
  <div>
    <h2>Consultar todos los estudiantes</h2>
    <button @click="consultar">Consultar</button>

    <pre>{{ estudiantes }}</pre>
  </div>
</template>

<script>
import { consultarTodosFachada } from "@/clients/MatriculaClient";

export default {
  data() {
    return {
      estudiantes: []
    }
  },
  methods: {
    async consultar() {
      this.estudiantes = await consultarTodosFachada();
    }
  }
}
</script>
