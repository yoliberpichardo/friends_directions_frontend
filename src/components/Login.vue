<script>
export default {

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
            <input type="text" placeholder="Email">
            <input type="password" placeholder="Password">
        </div>

        <div class="buttonContent">
            <p>Forgot your <a href="#">password</a>?</p>
            <button>Log In</button>
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