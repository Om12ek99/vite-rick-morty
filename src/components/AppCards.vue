<script>
export default {
    data(){
        return{

        }
    },
    props: {
        charName: String,   
        charThumb: String,
        charStatus: String,
        charSpecies: String,    
    }
}
</script>

<template>
    <div class="card">
        <img :src= "charThumb"
             :alt= "charName">
        <h3> {{charName}} </h3>
        <h5> {{charStatus}} </h5>
        <h5> {{charSpecies}} </h5>
    </div>
</template>

<style scoped lang="scss">
</style>