<template>
    <section class="about">
        <div class="containerA about_logros-container">
            <div class="about_logros-left">
                <img src="../assets/goals-pana.png" alt="" class="imgA">
            </div>
            <div class="about_logros-right">
                <h1>Alcance</h1>
                <p>Construir una herramienta de software web que resuelva la necesidad de obtener un servicio psicológico. Este sistema debe ser capaz de mostrar la información de una manera clara para que cualquier cliente potencial pueda contactar con el profesional que le interese en esta área.</p>
            </div>
        </div>
    </section>
    <section class="team">
        <h2>Nuestro equipo</h2>
        <div class="containerT team_container">
            <article class="team_member">
                <div class="team_mamber-image">
                    <img src="../assets/andres.jpg" alt="">
                </div>
                <div class="team_member-info">
                    <h4>Andres Felipe Nausan Fajardo</h4>
                    <p>Desarrollador</p>
                </div>
            </article>
            <article class="team_member">
                <div class="team_mamber-image">
                    <img src="../assets/gloria.jpg" alt="">
                </div>
                <div class="team_member-info">
                    <h4>Gloria Patricia Duran Benavides</h4>
                    <p>Desarrollador</p>
                </div>
            </article>
            <article class="team_member">
                <div class="team_mamber-image">
                    <img src="../assets/michael.jpg" alt="">
                </div>
                <div class="team_member-info">
                    <h4>Michael steven mogollon leon</h4>
                    <p>Desarrollador</p>
                </div>
            </article>
            <article class="team_member">
                <div class="team_mamber-image">
                    <img src="../assets/sebastian.jpg" alt="">
                </div>
                <div class="team_member-info">
                    <h4>Sebastian felipe Martinez Samaca</h4>
                    <p>Desarrollador</p>
                </div>
            </article>
            <article class="team_member">
                <div class="team_mamber-image">
                    <img src="../assets/wilson.jpg" alt="">
                </div>
                <div class="team_member-info">
                    <h4>Wilson Arbey Delgado Manzo</h4>
                    <p>Desarrollador</p>
                </div>
            </article>
        </div>
    </section>
</template>
<script>
export default {
    name: 'aboutUs',
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
/*=== logros == */
.about{
    margin-top: 0rem;
    background-color: var(--color-bg);
    position: relative;
    overflow: hidden;
    min-height: 80vh;
    margin-bottom: 3rem;
}

.about_logros-container{
    display: grid;
    grid-template-columns: 40% 60%;
    align-items: center;
    gap: 5rem;
    margin-top: -6rem;
}

.about_logros-right{
    margin: 0.6rem 4rem 2.5rem;
}
.about_logros-right h1 {
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #4368F0;
}
.about_logros-right p {
  color: #3D4F90;
  text-align: justify;
}

.imgA{
    width: 100%;
    display: block;
    object-fit: cover;
}
/* === equipo === */

.team{
    background: var(--color-bg1);
    box-shadow: inset 0 0 3rem rgba(237, 229, 252, 0.5);
    min-height: 34vw;
    margin-top: -3rem;
}

.team h2{
  text-align: center;
  margin-bottom: 1rem;
  margin-top: -4rem;
  font-size: 1.7rem;
  line-height: 1.2;
  color: #4368F0;
}
.team_container{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
}

.team_container img {
  width: 100%;
  filter: saturate(0);
}
.team_member{
    background-color: var(--color-bg2);
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 1rem;
    transition: var(--transition);   
    color: var(--color-white);     
}

.team_member:hover{
    background: var(--color-danger);
    border-color: var(--color-primary);
}

.team_member:hover img{
    filter: saturate(1);
}

.team_member-info *{
    text-align: center;
    margin-top: .1rem;
}
.team_member-info h4{
  line-height: .9;
  font-size: .9rem;
 
}
.team_member-info p {
    color: var(--color-white);
}
</style>