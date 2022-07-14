
<script>
    import { ref } from '@vue/reactivity'
    import {watch} from '@vue/runtime-core'
    import useStore from '../store/store'
import getOptions from '../api/dataBase'
    export default {
        setup(){
            const friendsData = ref([])
            const use = useStore()
            const result = ref('')

            watch(result,() => {
                use.friendsSearch = result.value
            })

            const sendResquet = async (uid) => {
               await getOptions.post('resquet_send', {friendID: uid},{
                headers:{
                    authorization:"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDA3MGQwYzFhYjk2ZDI0OGMzYzZhMiIsImlhdCI6MTY1NzgyODY1NH0.eyRVUjFYV32QsqKSivqPzXmfGAxYOlX8PQ5nNZjSdag"
                }
               })
            }

            return{
                friendsData,
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