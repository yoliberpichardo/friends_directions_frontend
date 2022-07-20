<script>
import { onMounted, ref } from 'vue-demi'
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
    const viewMenu = ref(false)
    const viewSearch = ref(false)

    onMounted(async () => {
      use.friendsData = await( await getOptions.post('/user',{},{
        headers:{
          authorization:`bearer ${token}`
        }
      })).data.dataFilter
    })

    return{
      use,
      viewMenu,
      viewSearch
    }
  }
}
</script>

<template>
  <div class="home">
    <div class="bodyHome">
      <div class="contentSearch">
        <div v-if="viewSearch" class="contentInput">
          <input type="text">
        </div>
        <div @click="viewSearch = !viewSearch" class="contentImgSearch">
          <img v-if="!viewSearch" src="../assets/search.svg" alt="search">
          <img v-if="viewSearch" src="../assets/back.svg" alt="back">
        </div>
      </div>
      <div class="containerNavbar">
        <div @click="viewMenu = !viewMenu" class="contentImgMenu">
          <img v-if="!viewMenu" src="../assets/menu.svg" alt="menu"/>
          <img v-if="viewMenu" src="../assets/close.svg" alt="close"/>
        </div>
        <NavBar v-if="viewMenu"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .home{
    width: 100%;
    height: 100%;
  }

  .bodyHome{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
  }

  .contentSearch{
    display: flex;
    flex-direction: row;
  }

  .containerNavbar{
    display: flex;
    flex-direction: column;
  }
</style>