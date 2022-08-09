<template>
    <section class="main_header">
        <div class="containerH header_container">
            <div class="header_left">
                <h1>ENCUENTRA TU ESPECIALISTA RAPIDO Y SENCILLO.</h1>
                <p>Miles de profesionales en salud mental están aquí para ayudarte.</p>
                <a v-on:click="loadPsychologist" class="btnH btn-primary">Busca al experto</a>
            </div>
            <div class="header_right">
                <div class="header_right-image">
                    <img class="imgH" src="../assets/5568-removebg-preview.png" alt="">
                </div>
            </div>
        </div>
    </section>
    <section class="categories">
        <div class="containerC categories_container">
            <div class="categories_left">
                <h1>CATEGORIAS</h1>
                <p> Podrás buscar entre una gran variedad de categorías profesionales especializados que estarán dispuestos a ayudarte con tu problema.</p>  
            </div>
            <div class="categories_right">
                <article class="category">
                    <h5>Terapia de pareja</h5>
                    <div class="category_icon">
                        <img src="../assets/enamorado.png" alt="">
                    </div>
                </article>
                <article class="category">
                    <h5>Psicología clínica</h5>
                    <div class="category_icon">
                        <img src="../assets/felicidado.png" alt="">
                    </div>
                </article>
                <article class="category">
                   <h5>Psicoterapia</h5>
                    <div class="category_icon-one">
                        <img src="../assets/saludmental.png" alt="">
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "homePage",
  methods: {
   loadPsychologist: function(){
      this.$router.push({name: "psychologists"})
    },
},
}
</script>

<style>

:root{
    --color-primary: #6c63ff;
    --color-success: #00bf8c;
    --color-warning: #f7c94b;
    --color-danger: #7794FE;
    --color-danger-variant:rgba(247, 88, 66, 0.4);
    --color-white: #fff;
    --color-light: rgba(255, 255, 255, 0.7);
    --color-black: #000;
    --color-bg: #BEE1FA;
    --color-bg1: #B2C8FF;
    --color-bg2: #8589ED;

    --container-width-lg: 80%;
    --container-width-md: 90%;
    --container-width-sm: 94%;

    --transition: all 400ms ease ;

}
    .main_header{
    background-color: var(--color-bg);
    position: relative;
    overflow: hidden;
    min-height: 80vh;
    margin-bottom: 3rem;
    }
    
    .header_container{
    display: grid;
    grid-template-columns: 40% 60%;
    align-items: center;
    gap: 4rem;
    height: 100%;
    margin-top: -6.8rem;
}
.header_left{
    margin-top: 2rem;
}
.header_left h1 {
    color: #4368F0;
    font-size: 1.4rem;
}
.header_left p {
    color: #3D4F90;
    margin: 1rem 0 2.4rem;
}

.btnH {
    display: inline-block;
    background: var(--color-white);
    color: var(--color-black);
    padding: 1rem 2rem ;
    border: 1px solid transparent;
    font-weight: 500;
    transition: var(--transition);
    border-radius: 10px;
    text-decoration: none;
}
.btnH:hover{
    background: var(--color-bg2);
    color: var(--color-white);
    border-color: var(--color-white);

}
.btn-primary{
    background: var(--color-danger);
    color: var(--color-white);
    cursor: pointer;
}

.imgH{
    width: 100%;
    display: block;
    object-fit: cover;
}


.categories{
    background: var(--color-bg1);
    position: relative;
    top: 0;
    margin-top: -3rem;
    min-height: 34vw;
}
.categories h1 {
    color: #4368F0;
    line-height: 0;
    font-size: 1.4rem;
    margin-bottom: 2rem;
}

.categories_container{
    display: grid;
    grid-template-columns: 40% 60%;
    gap: 2rem;
}

.categories_left p{
    color: #3D4F90;
    margin: 1rem 0 1rem;
}

.categories_right{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    margin-top: -3rem;
}

.category{
    background: var(--color-bg2);
    padding: 2rem;
    border-radius: 2rem;
    transition: var(--transition);
    margin-left: .8rem;
    color: var(--color-white);
}

.category:hover{
    box-shadow: 0 2rem 2rem rgba(87, 0, 248, 0.3);
}

.category h5{
    text-align: center;
    margin-bottom: .5rem;
    margin-top: -1rem;
    font-size: 1rem;
}
.category_icon img{
    max-width: 100%; 
    margin: 0 auto;
}
.category_icon-one{
    margin-top: 1.4rem;
}

</style>