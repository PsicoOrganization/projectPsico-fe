<template>
  <div id="app" class="container">
    <div class="header">
      <div class="logo">
        <img src="./assets/logoNav.jpeg" id="logo" alt="Main Logo">
      </div>
      <nav>
        <ul>
          <li><a v-if="!is_auth" v-on:click="loadHomePage"> Inicio </a></li>
          <li><a v-if="!is_auth" v-on:click="loadPsychologist">Busca Experto</a></li>
          <li><a v-if="!is_auth" v-on:click="loadAboutUs">Nosotros</a></li>

          <li><a v-if="is_auth" v-on:click="loadHome">Inicio</a></li>
          <li><a v-if="is_auth" v-on:click="loadAccount">Cuenta</a></li>
          <li><a v-if="is_auth" v-on:click="logOut">Cerrar Sesion</a></li>
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
      v-on:logOut="logOut"
      ></router-view>
    </div>

    <footer class="footer">
      <div class="group1">
        <div class="box">
          <figure>
            <a href="#">
              <img src="./assets/logoNav.jpeg" alt="Logo Psico">
            </a>
          </figure>
        </div>
        <div class="box">
          <h2>SOBRE NOSOTROS</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, mollitia.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, mollitia.</p>
        </div>
        <div class="box">
          <h2>SIGUENOS</h2>
          <div class="red-social">
          
          </div>
        </div>
      </div>
      <div class="grupo2">
        <small>&copy; 2022 <b>Psico</b> - Todos los Derechos Reservados.</small>
      </div>
    </footer>
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
        this.is_auth = localStorage.getItem("isAuth") || false;

        if(this.is_auth == false){
            this.$router.push({name: "homepage"});
        }else{
          this.$router.push({name: "home"});
        }
    },

    loadAccount: function(){
      this.$router.push({name:"account"})
    },

    loadHome: function(){
      this.$router.push({name: "home"})
    },

    loadHomePage: function(){
      this.$router.push({name: "homepage"})
    },

    loadPsychologist: function(){
      this.$router.push({name: "psychologists"})
    },

    loadAboutUs: function(){
      this.$router.push({name: "aboutUs"})
    },

    loadLogIn: function(){
      this.$router.push({name: "logIn"})
    },
    
    loadSignUp: function(){
      this.$router.push({name: 'signUp'})
    },

     logOut: function(){
        localStorage.clear();
        alert("Sesion Cerrada");
        this.verifyAuth();
     },

    completedLogIn: function(data){  
      localStorage.setItem("isAuth",true);
      localStorage.setItem("username",data.username);
      localStorage.setItem("token_access",data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("Autenticacion Exitosa");
      this.verifyAuth();
    },

    completedSignUp: function(data){
        alert("Registro exitoso");
        this.completedLogIn(data);
    },

  },

  created: function(){
    this.verifyAuth()
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

/*Style Header*/

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

/*Style Footer */
.footer{
  width: 100%;
  background: #8589ED;

}

.footer .group1{
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 50px;
  padding: 45px 0;
}

.footer .group1 .box figure{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer .group1 .box figure img{
  width: 250px;
}

.footer .group1 .box h2{
  color: #FFFFFF;
  margin-bottom: 25px;
  font-size: 20px;
}

.footer .group1 .box p{
  color: #efefef;
  margin-bottom: 10px;
}

/* Red social To do...*/

.footer .group1 .red-social a{
  display: inline-block;
  text-decoration: none;
  width: 45%;
  height: 45px;
  line-height: 45px;
  color: #fff;
  margin-right: 10px;
  background-color: #B2C8FF;
  text-align: center;
  transition: all 300ms ease;
}

.footer .group1 .red-social a:hover{
  color: aqua;
}

.footer .grupo2{
  background-color: #0a1a2a;
  padding: 15px 10px;
  text-align: center;
  color: #fff;
}

.footer .grupo2 small{
  font-size: 15px;
}

</style>
