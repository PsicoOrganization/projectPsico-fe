<template>
    <div class="container">
        <div class="logo">
            <img src="../assets/logoSignUp.jpg" alt="sign up image">
        </div>
        <div class="container-signUp">
            <h2 id= "title">Registrese en Psico y empiece a ayudar a pacientes en todo el país </h2>
            <h2>Registro de cuenta</h2>
            <form v-on:submit.prevent="processSignUp">
                <div class="form-left">
                    <input type="text" v-model="user.name" placeholder="Nombre" required>
                    <input type="text" v-model="user.username" placeholder="Nombre de usuario" required>
                    <input type="tel" v-model="user.phone" placeholder="Telefono" pattern="[0-9]{10}" required>
                    <select name="gender" v-model="user.gender">
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                        <option value="O">Otro</option>
                    </select>
                    <select name="typeSpecialty" v-model="user.typeSpecialty.nameSpecialty">
                        <option value="Psicología ocupacional">Psicología ocupacional</option>
                        <option value="Psicología">Psicología</option>
                        <option value="Psicología clínica">Psicología clínica</option>
                        <option value="Neuropsicología">Neuropsicología</option>
                        <option value="Psiquiatría">Psiquiatría</option>
                        <option value="Psicología familiar">Psicología familiar</option>
                        <option value="Psicofarmacología">Psicofarmacología</option>
                    </select>
                </div>
                <div class="form-right">
                    <input type="text" v-model="user.address" placeholder="Dirección" required>                    
                    <input type="email" v-model="user.email" placeholder="Correo" required>
                    <input type="password" v-model="user.password" placeholder="contraseña" required>
                    <input type="number" v-model="user.consultation_price" placeholder="Precio de consulta" min="0">
                    <select name="ciudad" v-model="user.city.name">
                        <option value="Bogotá">Bogotá</option>
                        <option value="Medellin">Medellín</option>
                        <option value="Cali">Cali</option>
                        <option value="Cúcuta">Cúcuta</option>
                        <option value="Pereira">Pereira</option>
                        <option value="Barranquilla">Barranquilla</option>
                    </select>
                </div>
                <div class="form-footer">
                    <input type="textarea" v-model="user.description" placeholder="Escribe una breve descripción de tu trayectoria profesional">
                    <div class="form-button">
                        <button type="submit">Registrar cuenta</button>
                    </div>
                </div>
            </form>
    </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'signUp',
    data: function (){
        return{
            user:{
                username:"",
                password:"",
                name:"",
                email:"",
                address:"",
                phone:"",
                description:"",
                gender:"M",
                consultation_price: 0,
                city:{
                    name:"Bogotá"
                },
                typeSpecialty:{
                    nameSpecialty:"Psicología forense"
                }
            }
        }
    },
    methods:{
        processSignUp: function(){
            axios.post(
                "https://psico-app-be.herokuapp.com/user/",
                this.user,
                {headers: {}}
            )
                .then((result) =>{
                    let dataSignUp = {
                        username: this.user.username,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh,
                    }

                    this.$emit('completedSignUp',dataSignUp)
                })
                .catch((error) => {
                    alert("Error: Fallo en el registro"+ error.message);
                });
        }
    }
}
</script>
<style>

.container{
    background-color: white;
    display: grid;
}

.logo{
    grid-column: 1;
}
.logo img{
    height: 500px;
    width: 500px;
    padding: 5px;
}

.container-signUp{
    grid-column: 2;
    display: grid;
}

.container-signUp form{
    display: grid;
    padding: 10px;
}

#title{
    grid-column: 1 / 3;
    color: #4368F0;
    text-align: justify;
    font-family: 'Nunito', sans-serif;
    font-size: 30px; 
    padding: 10px;
}
.container-signUp h2{
    grid-column: 1 / 3;
    color: #4368F0;
    text-align: center;
    font-family: 'Nunito', sans-serif;
    font-size: 30px;
}

.container-signUp input{
    padding: 20px;
    margin: 10px;
    height: 30px;
    width: 300px;
    background-color: #F4FBFF;
    border-radius: 5px;
    border: solid 2px #4368F0;
    font-family: 'Nunito', sans-serif;
    font-size: 15px;
}

.container-signUp input::placeholder{
    color: #3D4F90;
}

.container-signUp input:focus{
    outline: solid 0px #4368F0;
    font-family: 'Nunito', sans-serif;
    font-size: 15px;
    color: #3D4F90;
}

.container-signUp select:focus{
    outline: solid 0px #4368F0;
    font-family: 'Nunito', sans-serif;
    font-size: 15px;    
}
.container-signUp select{
    margin: 10px;
    width: 300px;
    height: 45px;
    background-color:#F4FBFF;
    border-radius: 5px;
    color: #3D4F90;
    border: solid 2px #4368F0;
    font-family: 'Nunito', sans-serif;
    font-size: 15px;
}

.form-left{
    grid-column: 1;
    grid-row: 1;
    text-align: center;
}

.form-right{
    grid-column: 2;
    grid-row: 1;
    text-align: center;
}

.form-footer{
    grid-column: 1 / 3;
    grid-row: 2;
    text-align: center;
}

.form-footer input{
    width: 680px;
    height: 100px;
    margin: 10px;
}

.form-button{
    text-align: center;
}

.form-button button{
    width: 400px;
    padding: 10px;
    margin: 10px;
    background-color: #7167E1;
    border-radius: 5px;
    border: solid 2px #7167E1;
    color: #FFFFFF;
    cursor: pointer;
    font-family: 'Nunito', sans-serif;
    font-size: 18px;
}
    
</style>