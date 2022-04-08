import VueRouter from 'vue-router'
import Vue from 'vue'
import VueCookies from 'vue-cookies'

Vue.use(VueRouter)
Vue.use(VueCookies)

export default {
    data(){
        return {
        }
    },
    methods: {
        closeSession() {
            this.$cookies.remove("token");
            window.location.reload()  
        }
    }
}