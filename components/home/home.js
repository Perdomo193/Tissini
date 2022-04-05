import footerPage from './../footer/footer.vue'
import carousel from './../carousel/carousel.vue'
import newProducts from './../offerts/newProducts.vue'
import bestSeller from './../offerts/bestSeller.vue'
import carouselOffers from './../carousel/carouselOffers.vue'
import lines from './../offerts/lines.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

export default {
    data(){
        return {
            sesion_auth: false
        }
    },
    components: {
        footerPage,
        carousel,
        carouselOffers,
        newProducts,
        bestSeller,
        lines
    }
}