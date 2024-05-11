import { reactive } from 'vue';

export const store = reactive ({
    status: ["All","Dead","Alive","unknown"],
    selectedStatus:"All",
    listChar:[],        //lista dei personaggi importati
    count: 20,
});