<script>
import AppCards from './components/AppCards.vue';
import AppSearch from './components/AppSearch.vue';
import axios from "axios";
import { store } from "./store";

export default {
  components: {
    AppCards,
    AppSearch
  },
  data() {
    return {
      charArray: [],
      filteredCharacters: [] // Aggiungo un array per tenere traccia dei personaggi filtrati
    };
  },
  created() {
    axios.get("https://rickandmortyapi.com/api/character")
      .then((resp) => {
        this.charArray = resp.data.results;
        this.filteredCharacters = resp.data.results; // Inizializzo filteredCharacters con tutti i personaggi
      });
  },
  methods: {
    filterCharacters(status) {
      if (status === "All") {
        this.filteredCharacters = this.charArray; // Se viene selezionato "All", mostro tutti i personaggi
      } else {
        this.filteredCharacters = this.charArray.filter(char => char.status === status); // Altrimenti filtro i personaggi in base allo stato
      }
    }
  }
};
</script>

<template>
  <div>
    <header>
      <h1>The Rick and Morty App</h1>
      <AppSearch @filter="filterCharacters" />
    </header>
    <div class="container">
      <div class="row">
        <div class="col" v-for="(char, index) in filteredCharacters" :key="index">
          <AppCards 
            :charThumb="char.image"
            :charName="char.name"
            :charStatus="char.status"
            :charSpecies="char.species"
          />
        </div>
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
