import VueRouter from 'vue-router'
import Vue from 'vue'
import data from './carouselOffers.json'

Vue.use(VueRouter)

export default {
    data(){
        return {
            dataOffers: {}
        }
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            this.dataOffers = data.data.products;
        }
    }
}