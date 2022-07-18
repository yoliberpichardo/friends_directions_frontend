<script>
import { onMounted } from 'vue-demi'
import Login from '../components/Login.vue'
import User from '../components/User.vue'
import NavBar from '../layouts/NavBar.vue'
import useStore from '../store/store'
import getOptions from '../api/dataBase'

export default {
  name: 'Home',
  components: {
    User,
    Login,
    NavBar
  },
  setup(){
    const use = useStore()
    const token = localStorage.getItem('token')

    onMounted(async () => {
      use.friendsData = await( await getOptions.post('/user',{},{
        headers:{
          authorization:`bearer ${token}`
        }
      })).data.dataFilter
    })

    return{
      use
    }
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