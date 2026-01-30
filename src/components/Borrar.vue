<template>
    <div class="container">

        <h2>ELIMINAR ESTUDIANTE POR SU ID</h2>
        <p type="ID:"><input id="id_estudiante" type="number" v-model.number="id"></p>
        <button @click="borrar(id)">Eliminar</button>
        <p v-if="mensaje" style="color: red;">{{ mensaje }}</p>
    </div>

</template>

<script>
import { borrarFachada } from "@/clients/MatriculaClient";

export default {
    data() {
        return {
            id: null,
            mensaje: null,
            estudiante: null
        }
    },
    methods: {
        async borrar(id) {
            this.estudiante = await borrarFachada(id);
            this.mensaje = "Estudiante eliminado"
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