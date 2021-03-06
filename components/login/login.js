import VueRouter from 'vue-router'
import Vue from 'vue'
import VueCookies from 'vue-cookies'
import dataLogin from './login.json'

Vue.use(VueRouter)
Vue.use(VueCookies)

export default {
    data(){
        return {
            password: null,
            data: {}
        }
    },
    created() {
        this.getData()
    },
    mounted() {
        let token = this.$cookies.get('token')
        if (token) {
            this.$emit('sesionres', 'activo')
        }
    },
    methods: {
        sesion() {
            if(this.password == '12345') {
                this.$emit('sesionres', 'activo')
                this.$cookies.set('token', this.password, { path: '/', maxAge: 60 * 60 * 24 * 7})
            }
        },
        getData() {
            this.data = dataLogin.login
        }
    }
}