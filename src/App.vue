<template>
  <nav>
    <router-link to="/consultarTodos">Consultar Todos</router-link> |
    <router-link to="/consultarId">Consultar por ID</router-link> |
    <router-link to="/actualizar">Actualizar</router-link> |
    <router-link to="/actulizarParcial">Actualizar Parcialmente</router-link> |
    <router-link to="/guardar">Guardar</router-link> |
    <router-link to="/borrar">Borrar</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
