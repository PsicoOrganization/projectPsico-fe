<template>
    <section class="inicio" id="inicio">
        <div class="content">
            <h3>¡Bienvenido <span> {{username}} </span>!</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, incidunt! Illo recusandae error sit necessitatibus saepe suscipit? Recusandae at cum commodi quis doloribus beatae praesentium vero, ipsam voluptates, necessitatibus ab inventore! Non sint qui unde delectus veniam laboriosam, sit, laudantium asperiores nesciunt porro assumenda, minima voluptas autem doloribus placeat esse.</p>
            <a v-on:click="loadAccount" class="btnHome">CUENTA</a>
        </div>
        <div class="image">
            <img src="../assets/imgHome.png" alt="">
        </div>
    </section>
</template>
<script>
export default {
    name: "home",
    
    data: function(){
        return{
            username: localStorage.getItem('username') || "none"
        }
    },
    methods: {
        loadAccount: function(){
            this.$router.push({name:"account"})
        },
    },
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

    section{
        min-height: 100vh;
        padding:  0 9%;
        padding-top: 7.5rem;
        padding-bottom: 2rem;
    }

    .inicio{
        display: flex;
        align-items: center;
        justify-content: center;
        background: url(../assets/initFont.png) no-repeat;
        background-color: #ffffff;
        background-size: cover;
        background-position: center;
    }

    .inicio .image{
        width: 40vh;
        animation:  float 3s linear infinite;
    }

    @keyframes float{
        0%, 100%{
            transform: translateY(0rem);
        }
        50%{
            transform: translateY(-3.5rem);
        }
    }

    .inicio .content h3{
        font-size: 5.5rem;
        color: #4368F0;
        text-transform: uppercase;
    }

    .inicio .content h3 span{
         font-size: 5.5rem;
        color: #8589ED;
        text-transform: uppercase;

    }

    .inicio .content p {
        font-size: 1.7rem;
        color: #666;
        padding: 1rem 0;

    }

    .btnHome{
        display: inline-block;
        text-decoration: none;
        margin-top: 1rem;
        padding: .8rem 3rem;
        border-radius: 5rem;
        background: #4368F0;
        font-size: 1.8rem;
        color: white;
        cursor: pointer;
        box-shadow: 0.5rem 1rem rgba(0, 0, 0, .1);
        transition: all .3s linear;

    }

    .btnHome:hover{
        transform: scale(1.1);
    }
</style>