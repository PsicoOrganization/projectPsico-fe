<template>
    <div class="core">
        <div class="filter">
            <button v-if="isDataCharged" v-on:click="filterByType">Buscar por categoria</button>
            <select v-if="isDataCharged" v-model="typeSpecialty">
                <option value="Psicología ocupacional">Psicología ocupacional</option>
                <option value="Psicología">Psicología</option>
                <option value="Psicología clínica">Psicología clínica</option>
                <option value="Neuropsicología">Neuropsicología</option>
                <option value="Psiquiatría">Psiquiatría</option>
                <option value="Psicología familiar">Psicología familiar</option>
                <option value="Psicofarmacología">Psicofarmacología</option>
            </select>
            <button v-on:click="getPsychologists">Ver todos los psicologos</button>
        </div>
        <section class="car" v-if="!showFiltered">
            <h2>Lista de profesionales</h2>
            <div class="card_one" v-for="item in psychologists" :key="item.id">
                <div class="left_column">
                    <h6>{{ item.typeSpecialty.nameSpecialty }}</h6>
                    <h2><b>Precio de consulta: </b><i>$ </i>{{ item.price }}</h2>
                </div>
                <div class="right_colum">
                    <div class="title_card">
                        <h2>{{ item.name }}</h2>
                    </div>
                    <div class="items">
                        <p><b>Correo electronico: </b>{{ item.email }}</p>
                        <p><b>Dirección: </b>{{ item.address }}</p>
                        <p><b>Telefono: </b>{{ item.phone }}</p>
                        <p><b>Genero: </b>{{ item.gender }}</p>
                        <p><b>Ciudad: </b>{{ item.city.name }}</p>
                    </div>
                    <div class="descrip">
                        <b>Descripción</b>
                        <p>{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="car" v-if="showFiltered">
            <h2>lista filtrada de profesionales</h2>
            <div class="card_one" v-for="item in filteredList" :key="item.id">
                <div class="left_column">
                    <h6>{{ item.typeSpecialty.nameSpecialty }}</h6>
                    <h2><b>Precio de consulta: </b><i>$ </i>{{ item.price }}</h2>
                </div>
                <div class="right_colum">
                    <div class="title_card">
                        <h2>{{ item.name }}</h2>
                    </div>
                    <div class="items">
                        <p><b>Correo electronico: </b>{{ item.email }}</p>
                        <p><b>Dirección: </b>{{ item.address }}</p>
                        <p><b>Telefono: </b>{{ item.phone }}</p>
                        <p><b>Genero: </b>{{ item.gender }}</p>
                        <p><b>Ciudad: </b>{{ item.city.name }}</p>
                    </div>
                    <div class="descrip">
                        <b>Descripción</b>
                        <p>{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: "psychologists",
    data: function () {
        return {
            psychologists: {},
            typeSpecialty: "",
            filteredList: {},
            showFiltered: false,
            isDataCharged: false
        }
    },
    methods: {
        getPsychologists: function () {
            axios.get(
                "https://psico-app-be.herokuapp.com/psicos/",
                { headers: {} }
            )
                .then((result) => {
                    this.psychologists = result.data;
                    this.showFiltered = false;
                    this.isDataCharged = true;
                })
                .catch((error) => {
                    alert(error.message);
                });
        },

        filterByType: function () {
            this.showFiltered = true;
            this.filteredList = {};
            let typeSpecialty = "typeSpecialty";
            let nameSpecialty = "nameSpecialty";
            for (let [key, value] of Object.entries(this.psychologists)) {
                let type = value[typeSpecialty];
                if (type[nameSpecialty] == this.typeSpecialty) {
                    this.filteredList[key] = value;
                }
            }
        }
    }
}
</script>
<style>
:root {
    --color-primary: #6c63ff;
    --color-success: #00bf8c;
    --color-warning: #f7c94b;
    --color-danger: #7794FE;
    --color-danger-variant: rgba(247, 88, 66, 0.4);
    --color-white: #fff;
    --color-light: rgba(255, 255, 255, 0.7);
    --color-black: #000;
    --color-bg: #BEE1FA;
    --color-bg1: #B2C8FF;
    --color-bg2: #8589ED;

    --container-width-lg: 80%;
    --container-width-md: 90%;
    --container-width-sm: 94%;

    --transition: all 400ms ease;

}

.core {
    background-color: var(--color-bg1);
}

.filter {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding-top: 1rem;
    background: transparent;
}

.filter button{
    background-color: var(--color-bg2);
    padding: .5rem 1rem ;
    border: 1px solid transparent;
    border-radius: 10px;
    font-size: .9rem;
    color: var(--color-white);
}
.filter button:hover{
    background: var(--color-bg2);
    color: var(--color-white);
    border-color: var(--color-white);
    cursor: pointer;
    transition: var(--transition);
}
.filter button:active{
    transform: scale(1.1);
}
.car {
    padding: 0;
    margin-top: 1rem;
    margin-left: 3rem;
    margin-right: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.car h2{
    font-size: 2rem;
    color: var(--color-primary);
}

.card_one {
    background-color: aliceblue;
    border-radius: 1rem;
    box-shadow: 0 1rem 1rem rgba(67, 11, 119, 0.459);
    display: flex;
    margin: 1rem;
    overflow: hidden;
    width: 38rem;
    height: 20rem;
}

.card_one h6 {
    opacity: 0.6;
    letter-spacing: .1rem;
    text-transform: uppercase;
}

.card_one h2 {
    letter-spacing: .1rem;
    margin: 1rem 0;
    color: black;
}

.left_column {
    color: rgb(255, 255, 255);
    background-color: var(--color-primary);
    padding: 2rem;
    max-width: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.left_column h2{
    color: var(--color-white);
    font-size: .9rem;
}
.right_colum {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
}

.right_colum p {
    font-size: .8rem;
    color: black;
}
.items{
    margin-top: -2rem;
}

.title_card{
    position: relative;
    top:-1.6rem;
}
.title_card h2 {
    font-size: 2rem;
}
.descrip p {
    font-size: .7rem;
}
</style>