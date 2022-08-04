<template>
  <div id="app" class="app">
    <div class="header">
      <nav>
        <button v-if="is_auth"> Inicio </button>
        <button v-if="is_auth"> Cuenta </button>
        <button v-if="is_auth"> Cerrar Sesion</button>
        <button v-if="!is_auth" v-on:click="loadLogIn"> Iniciar Sesion</button>
        <button v-if="!is_auth" v-on:click="loadSignUp"> Registrarse </button>

      </nav>
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
            this.$router.push({name: "main"})
        }
    },

    loadLogIn: function(){
      this.$router.push({name: "logIn"})
    },
    
    loadSignUp: function(){
      this.$router.push({name: 'signUp'})
    },
  },

  created: function(){

  }
}
</script>
<style>
  
</style>
