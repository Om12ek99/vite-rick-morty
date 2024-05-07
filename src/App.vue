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
</template>

<style scoped lang="scss">
@use "./style/partials/mixin" as *;
    header {
        /* debug */
        height: 200px;
        background-color: aqua;
        text-align: center;
        @include flex(row, center, center);
    }
</style>
