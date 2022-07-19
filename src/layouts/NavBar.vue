<script>
import router from '../router'
import useStore from '../store/store'
export default {
    setup(){
        const use = useStore()
    
        return{
            use
        }
    }

}
</script>

<template>
    <div class="bodyNav">
        <div class="contentRouter">
            <router-link to="/home">Inicio</router-link>
            <router-link to="/home/search">Amigos</router-link>
            <router-view></router-view>
        </div>
        <!-- <div class="inputContent">
            <input type="text" v-model="use.friendsSearch">
        </div> -->
    </div>
</template>

<style scoped>

    .bodyNav {
        width: 100%;
        height: 3rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 1rem;
        background-color: #000;
    }
    .contentRouter {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .contentRouter a {
        color: #fff;
        font-size: 1.5rem;
        text-decoration: none;
        margin: 0 10px;
    }
</style>