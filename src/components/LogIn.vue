<template>
<body>
    <div class="containerLogIn">
        <div class="img-form">
            <img src="../assets/login.png" alt="">
        </div>
        <div class="container-login">
            <form v-on:submit.prevent="proccessLogInUser" class="form">
            <div class="nameCompany">
                <h2>Psico</h2>
            </div>
            <div class="textForm">
                <h2>Comience a trabajar con un clic,<br> Explore Psico</h2>
                <h3>Iniciar sesion</h3>
            </div>
            <div class="input">
                <label for="usuario">Usuario</label>
                <input placeholder="Ingresar Usuario" type="text" id="usuario" v-model="user.username">
            </div>
            <div class="input">
                <label for="password">Contraseña</label>
                <input placeholder="Ingresar contraseña" type="password" id="password" v-model="user.password">
            </div>
            <div class="input">
                <input type="submit" value="Ingresar">
            </div>
            <div class="separator">
                <h3> - O - </h3>
            </div>
            <div class="input" id="registater">
                <input v-on:click="loadSignUp" type="submit" value="Registrate">
            </div>
        </form>
        </div>    
    </div>
</body>
</template>
<script>
import axios from 'axios';
export default {
    name: 'logIn',

    data: function(){
        return{
            user: {
                username:"",
                password:""
            }
        }
    },

    methods: {
        proccessLogInUser: function(){
            axios.post(
                "https://psico-app-be.herokuapp.com/login/",
                this.user,
                {headers: {} }
            ).then((result) => {
                let dataLogin = {
                    username: this.user.username,
                    token_access: result.data.access,
                    token_refresh: result.data.refresh,
                }
                this.$emit('completedLogIn',dataLogin)
            }).catch((err) => {
                if (err.response.status == "401") {
                    alert("ERROR 401: Credenciales Incorrectas.");
                }   
            });
        },

        loadSignUp: function(){
            this.$router.push({name: 'signUp'});
        }
    },

}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&display=swap');

:root{
    --font: 'Nunito', sans-serif;
    --white: #ffffff;
    --blue: #4368F0;
    --morado: #8589ED;
    --gray: #F4FBFF;
    --blue_dark: #3D4F90;

}

html{
    box-sizing: border-box;
}

*,*::after, *::before{
    box-sizing: inherit;
}

body{
    background-color: var(--blue);
    align-items: center;
}

/* .container{
    margin: 0 auto;
    width: 100%;
    height: 100%;
    display: grid;
} */

.containerLogIn{
    margin: 0 auto;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 40% 60%;
}

.container-login{
    display: grid;
    grid-column: 2;
}

.img-form{
   justify-items: center;
   align-items: center;
   background-color: #879ef4;
   display: grid;
   grid-column: 1;
}

.img-form img{
    width: auto;
    height: auto;

}

.form{
    padding: 50px;
    background-color: var(--white);
}

.separator h3{
    font-size: 20px;
    margin: auto;
    text-align: center;
    color: #8589ED;
}

.nameCompany h2{
    color: var(--blue);
    font-size: 30px;
    text-align: right;
}

.textForm h3{
    margin-top: 25px;
    color: var(--blue);
}

.textForm h2, label{
    color: var(--blue);
}

.textForm h2{
    font-size: 40px;
    text-align: center;
}

.textForm h3{
    font-size: 25px;
    text-align: center;
}

.input label{
    display: block;
    font-size: 22px;
    font-weight: bold;
    margin: 20px 0;
}

.input input{
    width: 100%;
    padding: 10px 16px;
    border-radius: 5px;
    outline: none;
    border-width: 2px;
    border-color: var(--blue);
}

.input input[type="submit"]{
    margin-top: 30px;
    margin-bottom: 20px;
    background-color: var(--blue);
    color: var(--white);
    font-size: 20px;
    font-weight: bold;
    border: none;
}

.input input[type="submit"]:hover{
    cursor: pointer;
    background-color: var(--blue_dark);
}

#registater input{
    background-color: var(--morado);
    color: var(--white);
    font-size: 20px;
    font-weight: bold;
    border: none;
}

#registater input:hover{
    cursor: pointer;
    background-color: mediumslateblue;
}
</style>