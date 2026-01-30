<template>
    <div class="container">

        <h2>CONSULTAR ESTUDIANTE POR SU ID</h2>
        <p type="ID:"><input id="id_estudiante" type="number" v-model.number="id"></p>
        <button @click="consultarPorId(id)">Consultar</button>

        <div class="estudiantes" v-if="estudiante">
            <p>Nombre: {{ estudiante.nombre }}</p>
            <p>Apellido: {{ estudiante.apellido }}</p>
            <p>Fecha de Nacimiento: {{ estudiante.fechaNacimiento }}</p>
            <p>Género: {{ estudiante.genero }}</p>
            <p>Provincia: {{ estudiante.provincia }}</p>
        </div>
    </div>

</template>

<script>
import { consultarPorIdFachada } from "@/clients/MatriculaClient";

export default {
    data() {
        return {
            id: null,
            estudiante: null
        }
    },
    methods: {
        async consultarPorId(id) {
            this.estudiante = await consultarPorIdFachada(id);
        }
    }
}
</script>

<style scoped>
p::before {
    content: attr(type);
}

p {
    font-weight: bold;
}

.container {
    display: flex;
    flex-direction: column;
    width: 500px;
    background-color: skyblue;
    border-radius: 20px;
    padding: 20px;
    margin: 40px auto;

}

button {
    border-radius: 20px;
}

.estudiantes {
    margin-top: 20px;
    display: block;
    text-align: left;
    align-items: center;

    justify-content: center;
}

table,
th,
tr,
td {
    padding: 10px;
    border-radius: 10px;
}
</style>