<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Login/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/Login.vue';

export default {
  name: 'HomeView',
  components: {
     Login
  }
}
</script>
