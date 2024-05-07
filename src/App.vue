<script>

import axios from "axios";
export default {
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

</template>

<style scoped lang="scss">

</style>
