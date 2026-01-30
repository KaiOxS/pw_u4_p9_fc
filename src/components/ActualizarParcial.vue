<template>
    <div class="container">

        <h2>ACTUALIZAR UN CAMPO DE UN ESTUDIANTE</h2>

        <div class="estudiantes">

            <p type="ID ESTUDIANTE:"><input id="id_estudiante" type="number" v-model.number="id"></p>
            <p type="CAMPO A MODIFICAR:">
                <select v-model="campoSeleccionado">
                    <option disabled value="">-- Seleccione un campo --</option>
                    <option value="nombre">Nombre</option>
                    <option value="apellido">Apellido</option>
                    <option value="fechaNacimiento">Fecha de Nacimiento</option>
                    <option value="genero">Género</option>
                    <option value="provincia">Provincia</option>
                </select>
            </p>

            <div v-if="campoSeleccionado === 'nombre'">
                <p type="Nuevo nombre:"><input type="text" v-model="valorNuevo"></p>
            </div>

            <div v-if="campoSeleccionado === 'apellido'">
                <p type="Nuevo apellido:"><input type="text" v-model="valorNuevo"></p>
            </div>

            <div v-if="campoSeleccionado === 'fechaNacimiento'">
                <p type="Nueva fecha de nacimiento:"><input type="date" v-model="valorNuevo"></p>
            </div>

            <div v-if="campoSeleccionado === 'genero'">
                <p type="Nuevo género:"><input type="text" v-model="valorNuevo"></p>
            </div>

            <div v-if="campoSeleccionado === 'provincia'">
                <p type="Nueva provincia:"><input type="text" v-model="valorNuevo"></p>
            </div>

            <p v-if="mensaje" style="color: red;">{{ mensaje }}</p>
        </div>
        <button @click="actualizarParcial(id, { [campoSeleccionado]: valorNuevo })">Actualizar</button>
    </div>

</template>

<script>
import { actualizarParcialFachada } from "@/clients/MatriculaClient";

export default {
    data() {
        return {
            campoSeleccionado: "",
            id: null,
            valorNuevo: "",
            mensaje: null,
        }
    },
    methods: {
        async actualizarParcial(id, body) {
            await actualizarParcialFachada(id, body);
            this.mensaje = `Campo ${this.campoSeleccionado} actualizado correctamente!!`
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