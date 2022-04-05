import VueRouter from 'vue-router'
import Vue from 'vue'
import VueCookies from 'vue-cookies'

import login from './../components/login/login.vue'
import home from './../components/home/home.vue'
import layout from './layout.vue'

Vue.use(VueCookies)
Vue.use(VueRouter)

export default {
    data(){
        return {
            sesion_res: 'init',
        }
    },
    components: {
        login,
        home,
        layout
    },
    methods: {
        sesion_req(value){
            if(value){
                this.sesion_res = value
            }
        }
    }
}