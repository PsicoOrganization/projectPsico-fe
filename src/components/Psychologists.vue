<template>
    <div>
        <h1>Paginas donde se muestran todos los psicologos</h1>
        <button v-if="isDataCharged" v-on:click="filterByType">Buscar por categoria</button>
        <select v-if="isDataCharged" v-model="typeSpecialty">
            <option value="Psicología forense">Psicología forense</option>
            <option value="Psicología ocupacional">Psicología ocupacional</option>
        </select>
        <button v-on:click="getPsychologists">Ver todos los psicologos</button>
        <div>
            <ul v-if="!showFiltered">
                <li>lista de psicologos</li>
                <li  v-for="item in psychologists" :key="item.id">
                    <h1>Información</h1>
                    {{item.username}}<br>
                    {{item.name}}<br>
                    {{item.email}}<br>
                    {{item.address}}<br>
                    {{item.phone}}<br>
                    {{item.description}}<br>
                    {{item.gender}}<br>
                    {{item.price}}<br>
                    {{item.city.name}}<br>
                    {{item.typeSpecialty.nameSpecialty}}
                </li>
            </ul>
            <ul v-if="showFiltered">
                <li>lista filtrada de psicologos</li>
                <li  v-for="item in filteredList" :key="item.id">
                    <h1>Información</h1>
                    {{item.username}}<br>
                    {{item.name}}<br>
                    {{item.email}}<br>
                    {{item.address}}<br>
                    {{item.phone}}<br>
                    {{item.description}}<br>
                    {{item.gender}}<br>
                    {{item.price}}<br>
                    {{item.city.name}}<br>
                    {{item.typeSpecialty.nameSpecialty}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: "psychologists",
    data: function(){
        return{
            psychologists: {},
            typeSpecialty: "",
            filteredList : {},
            showFiltered: false,
            isDataCharged: false
        }
    },
    methods:{
        getPsychologists: function(){
            axios.get(
                "https://psico-app-be.herokuapp.com/psicos/",
                {headers:{}}
            )
            .then((result)=>{
                this.psychologists = result.data;
                this.showFiltered = false;
                this.isDataCharged = true;
            })
            .catch((error)=>{
                alert(error.message);
            });
        },

        filterByType:function(){
            this.showFiltered = true;
            this.filteredList = {};
            let typeSpecialty = "typeSpecialty";
            let nameSpecialty = "nameSpecialty";
            for(let [key,value] of Object.entries(this.psychologists)){
                let type = value[typeSpecialty];
                if(type[nameSpecialty] == this.typeSpecialty){
                    this.filteredList[key] = value;
                }
            }
        }
    }
}
</script>
<style>
    
</style>