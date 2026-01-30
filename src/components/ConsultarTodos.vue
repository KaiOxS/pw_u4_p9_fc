<template>
    <div class="container">

        <h2>CONSULTAR TODOS LOS ESTUDIANTES</h2>
        <button @click="consultar">Consultar</button>

        <div class="estudiantes">
            <table border="1">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Fecha Nacimiento</th>
                        <th>Género</th>
                        <th>Provincia</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="{ id, nombre, apellido, fechaNacimiento, genero, provincia } in estudiantes" :key="id">
                        <td>
                            {{ nombre }}
                        </td>
                        <td>
                            {{ apellido }}
                        </td>
                        <td>
                            {{ fechaNacimiento }}
                        </td>
                        <td>
                            {{ genero }}
                        </td>
                        <td>
                            {{ provincia }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>
import { consultarTodosFachada } from "@/clients/MatriculaClient";

export default {
    data() {
        return {
            id: null,
            nombre: null,
            apellido: null,
            fechaNacimiento: null,
            genero: null,
            provincia: null,
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

<style scoped>
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
    display: flex;
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