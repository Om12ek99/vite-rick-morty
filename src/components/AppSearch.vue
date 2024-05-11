<template>
    <div class="search">
      <select v-model="selectedStatus" @change="selectChar">
        <option v-for="status in statusOptions" :value="status" :key="status">{{ status }}</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedStatus: "All",
        statusOptions: ["All", "Dead", "Alive", "unknown"]
      };
    },
    methods: {
      selectChar() {
        if (this.selectedStatus === "All") {
          this.$emit("filter", "All");
        } else {
          this.$emit("filter", this.selectedStatus);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .search {
    margin-top: 1rem;
  }
  </style>