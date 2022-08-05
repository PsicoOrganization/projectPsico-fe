<template>
  <div id="app" class="container">
    <div class="header">
      <div class="logo">
        <img src="./assets/logoNav.png" id="logo" alt="Main Logo">
      </div>
      <nav>
        <ul>
          <li><a v-if="!is_auth" v-on:click="loadHomePage"> Inicio </a></li>
          <li><a>Busca Experto</a></li>
          <li><a>Nosotros</a></li>
        </ul>
      </nav>
      <li class="submenu"><a v-if="!is_auth" class="btn"><button>¿Eres profesional?</button></a>
      <ul class="hijos">
        <li><a v-on:click="loadLogIn">Iniciar Sesion</a></li>
        <li><a v-on:click="loadSignUp">Registrarse</a></li>
      </ul>
      </li>
    </div>

    <div class="main-component">
      <router-view
      v-on:completedLogIn="completedLogIn"
      v-on:completedSignUp="completedSignUp"
      ></router-view>
    </div>

    <div class="footer">
        <h2>Footer Psico</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',

  data: function(){
      return{
        is_auth: false
      }
  },

  methods: {
    verifyAuth: function(){
        if(this.is_auth == false){
            this.$router.push({name: "homepage"})
        }
    },

    loadHomePage: function(){
      this.$router.push({name: "homepage"})
    },

    loadLogIn: function(){
      this.$router.push({name: "logIn"})
    },
    
    loadSignUp: function(){
      this.$router.push({name: 'signUp'})
    },

     logOut: function(){
        alert("Sesion Cerrada")
     },

    completedLogIn: function(data){

    },

    completedSignUp: function(data){

    },

  },

  created: function(){

  }
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&display=swap');

*{
  box-sizing:  border-box;
  margin: 0;
  padding: 0;
  font-family: 'Nunito', sans-serif;
  font-size: 20px;
}

.submenu{
  list-style: none;
}

.header .btn button:hover{
  background-color: #8589ED;
  color: #BEE1FA;
  transform: scale(1.1);
}

.header li:hover .hijos{
	display: block;
}

.header .submenu .hijos{
	display: none;
	background: #8589ED;
	position: relative;
	width: 100%;
}

.header .submenu .hijos li{
	display: block;
	overflow: hidden;
	border-bottom: none;
}

.header .submenu .hijos li a{
	display: block;
}

.container{
  background-color: #BEE1FA;
}

.header{
  background-color: #8589ED;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 85px;
  padding: 5px 10%;
}

.header .logo{
  cursor: pointer;
  margin-right: auto;
}

.header .logo img{
    height: 70px;
    width: auto;
    transition: all 0.3s;
}

.header .logo img:hover{
  transform: scale(1.2);
}

.header .nav ul{
  list-style: none;

}

.header ul li{
  display: inline-block;
  padding: 0 20px;
    cursor: pointer;
}

.header ul li:hover{
  transform: scale(1.1);
}

.header ul a{
font-size: 700;
color: #FFFFFF;
text-decoration: none;
}

.header ul li a:hover{
  color: #BEE1FA;

}

.header .btn button{
  margin-left: 20px;
  font-weight: 700;
  color: #FFFFFF;
  padding: 9px 25px;
  background: #B2C8FF;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
}

</style>
