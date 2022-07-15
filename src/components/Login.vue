<script>
import {ref} from '@vue/runtime-core'
import getOptions from '../api/dataBase'
import router from '../router/index'
export default {
    name: 'Login',
    setup(props) {
        const result_email = ref('')
        const result_password = ref('')

        const sendData = async () => {
            const userCompare = await getOptions.post('login',{
                    "email": result_email.value,
                    "password": result_password.value,
            })
            localStorage.setItem('token',userCompare.data.token)
            return router.replace({ path: '/search' })
        
        }

        return{
            result_email,
            result_password,
            sendData
        }   
    },
    methods:{
        redirectRouter() {
            
        }
    }
}
</script>

<template>
  <div class="bodyLogin">
    <div class="descriptionLogin">
        <h1>Log In</h1>
        <p>Login here using your email and password</p>
    </div>
    <div class="bodyForm">
        <div class="inputContent">
            <input type="text" placeholder="Email" v-model="result_email">
            <input type="password" placeholder="Password" v-model="result_password">
        </div>

        <div class="buttonContent">
            <p>Forgot your <a href="#">password</a>?</p>
            <button @click="sendData">Log In</button>
        </div>
    </div>
  </div>
</template>

<style scope>
    .bodyLogin{
        background: #28d9e6;
        width: 30rem;
        height: 28rem;
        padding: 1.5rem;
        margin: 10% auto;
        display: flex;
        flex-direction: column;
        border-radius: 1rem;
    }

    .descriptionLogin{
        height: 30%;
    }

    .descriptionLogin h1, .descriptionLogin p {
        margin: 1rem;
    }

    .bodyForm{
        height: 70%;
        display: flex;
        flex-direction: column;
    }

    .inputContent{
        height: 60%;
        margin: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .inputContent input{
        width: 20rem;
        height: 2rem;
        margin: 1rem auto;
        padding: 7px;
        border-radius: 0.5rem;
        border: none;
        text-size-adjust: 1rem;
    }
    
    .buttonContent{
        height: 30%;
        display: flex;
        flex-direction: column;
    }

    .buttonContent button{ 
        width: 40%;
        height: 2rem;
        background-color: #fff;
        border-style: none;
        border-radius: 0.5rem;
        margin: 1rem auto;
    } 

</style>