<template >

    <div class="information">
      <h1>Información de la Cuenta del Psicólogo</h1>
      <h2>Usuario: <span>{{username}}</span></h2>
      <h2>Nombre: <span>{{name}}</span></h2>
      <h2>Email: <span>{{email}}</span></h2>
      <h2>Dirección: <span>{{address}}</span></h2>
      <h2>Teléfono: <span>{{phone}}</span></h2>
      <h2>Descripción: <span>{{description}}</span></h2>
      <h2>Género: <span>{{gender}}</span></h2>
      <h2>Valor de la Consulta: <span>{{consultation_price}} COP</span></h2>
      <h2>Ciudad: <span>{{city}}</span></h2>
      <h2>Especialidad: <span>{{especiality}}</span></h2>  
    </div>

</template>



<script>
import jwt_decode from "jwt-decode";
import axios from "axios";

export default {
    name: 'Account',

    data: function() {
      return{
        username: "",
        name: "",
        email: "",
        address: "",
        phone: "",
        description: "",
        gender: "",
        consultation_price: 0,
        city: "",
        especiality: "",
        loaded: false,
      }
    },

    methods: {
      getData: async function() {
        if(localStorage.getItem("token_access") === null ||  localStorage.getItem("token_refresh") === null) {
          this.$emit('logOut');
          return;
        }
        
        await this.verifyToken();

        let token = localStorage.getItem("token_access");
        let userId =  jwt_decode(token).user_id.toString();

        axios.get(
          `https://psico-app-be.herokuapp.com/user/${userId}/`,
          {headers: {'Authorization': `Bearer ${token}`}}
        )

        .then((result) => {
          this.username = result.data.username;
          this.name = result.data.name;
          this.email = result.data.email;
          this.address = result.data.address;
          this.phone = result.data.phone;
          this.description = result.data.description;
          this.gender = result.data.gender;
          this.consultation_price = result.data.price;
          this.city = result.data.city.name;
          this.especiality = result.data.typeSpecialty.nameSpecialty;
          this.loaded = true;
        })

        .catch(() => {
          this.$emit('logOut');
        })
      },

      verifyToken: function() {
        return axios.post(
          'https://psico-app-be.herokuapp.com/refresh/',
          {refresh: localStorage.getItem("token_refresh")},
          {headers: {}}
          )
          .then((result) => {
            localStorage.setItem("token_access", result.data.access);
          })
          .catch(() => {
            this.$emit('logOut');
          })
      }
    },

    created: async function() {
      this.getData();
    },
}
</script>


<style>
  .information{
    margin: auto;
    padding: 5%;
    width: 70%;
    height: 90%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    
  }

  .information h1{
    margin: 20px 100px;
    justify-content: center;
    color: #0a1a2a;
  }

  .information h2{
    color: #8589ed;
    justify-content: initial;
  }

  .information span{
    color: #463577;
    font-weight: bold;
    margin: 0 0 0 15px;
  }
    
</style>