<template>
    <div class="container">

        <h2>GUARDAR UN ESTUDIANTE</h2>

        <div class="estudiantes">

            <p type="NOMBRE:"><input id="nombre_estudiante" type="text" v-model="nombre"></p>
            <p type="APELLIDO:"><input id="apellido_estudiante" type="text" v-model="apellido"></p>
            <p type="FECHA DE NACIMIENTO:"><input id="fecha_estudiante" type="date" v-model="fechaNacimiento"></p>
            <p type="GÉNERO:"><input id="genero_estudiante" type="text" v-model="genero"></p>
            <p type="PROVINCIA:"><input id="provincia_estudiante" type="text" v-model="provincia"></p>

            <p v-if="mensaje" style="color: red;">{{ mensaje }}</p>
        </div>
        <button @click="guardar({ nombre, apellido, fechaNacimiento, genero, provincia })">Guardar</button>
    </div>

</template>

<script>
import { guardarFachada } from "@/clients/MatriculaClient";

export default {
    data() {
        return {
            id: null,
            nombre: null,
            apellido: null,
            fechaNacimiento: null,
            genero: null,
            provincia: null,
            estudiante: null,
            mensaje: null,
        }
    },
    methods: {
        async guardar(body) {
            await guardarFachada(body);
            this.mensaje = "Estudiante guardado correctamente"
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