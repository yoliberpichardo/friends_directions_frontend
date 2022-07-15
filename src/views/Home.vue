<script>
import Login from '../components/Login.vue'
import User from '../components/User.vue'
import NavBar from '../layouts/NavBar.vue'

export default {
  name: 'Home',
  components: {
    User,
    Login,
    NavBar
  }
}
</script>

<template>
  <div class="home">
    <NavBar/>
  </div>
</template>

<style scoped>
  .home{
    width: 100%;
    height: 100%;
  }
</style>