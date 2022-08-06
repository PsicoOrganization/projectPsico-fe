<template>
    <div>
        <h1>¡Bienvenido <span> {{username}} </span>!</h1>
    </div>
</template>
<script>
export default {
    name: "home",
    
    data: function(){
        return{
            username: localStorage.getItem('username') || "none"
        }
    }
}
</script>
<style>
    
</style>