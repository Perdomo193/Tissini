import VueRouter from 'vue-router'
import Vue from 'vue'
import VueCookies from 'vue-cookies'

Vue.use(VueRouter)
Vue.use(VueCookies)

export default {
    data(){
        return {
            password: null
        }
    },
    methods: {
        sesion() {
            if(this.password == '12345') {
                this.$emit('sesionres', 'activo')
            }
        }
    }
}