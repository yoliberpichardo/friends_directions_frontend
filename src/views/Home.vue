<script>
import Login from '../components/Login.vue'
import User from '../components/User.vue'
import NavBar from '../layouts/NavBar.vue'

export default {
  name: 'Home',
  components: {
    User,
    NavBar,
    Login
}
}
</script>

<template>
  <div class="home">
    <NavBar />
    <Login/>
  </div>
</template>

<style scoped>
  .home{
    width: 100%;
    height: 100%;
  }
</style>