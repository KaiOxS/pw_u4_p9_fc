<template>
  <div>
    <h2>Guardar estudiante</h2>

    <input v-model="estudiante.nombre" placeholder="Nombre" />
    <input v-model="estudiante.apellido" placeholder="Apellido" />

    <button @click="guardar">Guardar</button>
  </div>
</template>

<script>
import { guardarFachada } from "@/clients/MatriculaClient";

export default {
  data() {
    return {
      estudiante: {
        nombre: "",
        apellido: ""
      }
    }
  },
  methods: {
    async guardar() {
      await guardarFachada(this.estudiante);
      alert("Estudiante guardado");
    }
  }
}
</script>
