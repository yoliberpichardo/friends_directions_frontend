
<script>
    import { ref } from '@vue/reactivity'
    import {watch} from '@vue/runtime-core'
    import useStore from '../store/store'
    import getOptions from '../api/dataBase'
    export default {
        setup(){
            const use = useStore()
            const result = ref('')
            const token = localStorage.getItem('token')

            watch(result,() => {
                use.friendsSearch = result.value
            })

            const sendResquet = async (uid) => {
               const resquet_send = await getOptions.post('resquet_send', {friendID: uid},{
                headers:{
                    authorization:`bearer ${token}`
                }
               })
               console.log(resquet_send);
            }

            return{
                use,
                result,
                sendResquet
            }
        }
    }
</script>

<template>
    <div class="bodySearch">
        <div class="inputContent">
            <input type="text" v-model="result">
        </div>
        <div class="resutlFriends" v-for="friend in use.friendsUpdate()" :key="friend.uid">
            <div class="bodyResult">
                <div class="descriptContent">
                    <div class="nameContent">
                        <h2>{{friend.name}}</h2>
                    </div>
                    <div class="imgContent" @click="sendResquet(friend.uid)">
                        <img src="../assets/user.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bodySearch{
    color: #000;
}

.inputContent input{
    border: solid #000 .1px;
}

.descriptContent{
    display: flex;
    justify-content: center;
    margin: 2rem;
}

.imgContent img {
    width: 35px;
    height: 35px;
    margin: 0 3rem;
}

</style>