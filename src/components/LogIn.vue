<template>
<body>
    <div class="container-login container">
        <div class="img-form">

        </div>
        <form class="form">
            <div class="nameCompany">
                <h2>Psico</h2>
            </div>
            <div class="textForm">
                <h2>Comience a trabajar con un clic,<br> Explore Psico</h2>
                <h3>Iniciar sesion</h3>
            </div>
            <div class="input">
                <label for="usuario">Usuario</label>
                <input placeholder="Ingresar Usuario" type="text" id="usuario">
            </div>
            <div class="input">
                <label for="password">Contraseña</label>
                <input placeholder="Ingresar contraseña" type="password" id="password">
            </div>
            <div class="input">
                <input type="submit" value="Ingresar">
            </div>
            <div class="separator">
                <h3> - O - </h3>
            </div>
            <div class="input" id="registater">
                <input type="submit" value="Registrate">
            </div>
        </form>
    </div>
</body>
</template>
<script>
export default {
    name: 'logIn',
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

.container{
    margin: 0 auto;
    width: 100%;
    height: 100%;
}

.container-login{
    display: flex;
}

.img-form{
    background-image: url(../assets/login.png);
    background-position: center;
    background-size: cover;
    flex:  0 0 calc(60%);
    position: relative;
}

.img-form::before{
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to right, rgba(141,169,196,.5), rgba(19, 98, 189, 0.5));
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