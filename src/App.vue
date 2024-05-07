<script>
import AppCards from './components/AppCards.vue';
import axios from "axios";
export default {
    components: {
        AppCards,
    },
    data() {
        return {
            charArray:[],     //array dei personaggi inizialmente vuoto
        };
    },
    created() {
        axios.get("https://rickandmortyapi.com/api/character")
        .then((resp)=> {
            this.charArray = resp.data.results;
            console.log(this.charArray);
        })
    }
};
</script>

<template>
    <header>
        <h1>The Rick and Morty App</h1>
    </header>
    <div class="container">
        <div class="row">
            <div class="col" v-for="(char, index) in charArray" :key="index">
              <AppCards 
                :charThumb="char.image"
                :charName="char.name"
                :charStatus="char.status"
                :charSpecies="char.species"
              />
            </div>
          </div>
    </div>
    
</template>

<style scoped lang="scss">
@use "./style/partials/mixin" as *;
    header {
        /* debug */
        height: 100px;
        text-align: center;
        @include flex(row, center, center);
    }
    .container{
        /* debug */
        height: fit-content;
       
        .row{
            @include flex(row, center, center);
            flex-wrap: wrap;
            gap: 1rem;
        }
    }


</style>
