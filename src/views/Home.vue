<template>
  <div class="home">
    <NavBar />
    <User />
  </div>
</template>

<script>
import User from '../components/User.vue'
import NavBar from '../layouts/NavBar.vue'

export default {
  name: 'Home',
  components: {
    User,
    NavBar
}
}
</script>
