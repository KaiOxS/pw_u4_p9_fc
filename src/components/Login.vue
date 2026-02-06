<template>
  <div class="container">
    <div class="login">
      <h2>Login</h2>
      <input v-model="usuario" type="text" placeholder="Usuario" />
      <input v-model="password" type="password" placeholder="Contraseña" />
      <button v-on:click="login()">Entrar</button>
    </div>
  </div>
</template>

<script>
import { obtenerTokenFachada } from "@/clients/AuthorizationClient";
export default {
  data() {
    return {
      usuario: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const TOKEN = await obtenerTokenFachada();
      if (TOKEN !== null) {
        console.log("Autenticación Exitosa");
        localStorage.setItem("token", TOKEN);
        localStorage.setItem("estaAutenticado", true);
      } else {
        console.log("Error de Autenticación");
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 8px;
}
.login {
  width: 300px;
  margin: 100px;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 8px;
  text-align: center;
}
input {
  width: 90%;
  margin-bottom: 10px;
  padding: 8px;
}
button {
  width: 75%;
  padding: 8px;
  cursor: pointer;
}
</style>