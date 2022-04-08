import VueRouter from 'vue-router'
import Vue from 'vue'
import VueCookies from 'vue-cookies'
import dataFooter from './footer.json'

Vue.use(VueRouter)
Vue.use(VueCookies)

export default {
    data(){
        return {
            data: {}
        }
    },
    created() {
        this.getData()
    },
    methods: {
        closeSession() {
            this.$cookies.remove("token")
            window.location.reload()  
        },
        getData() {
            this.data = dataFooter.footer
        }
    }
}