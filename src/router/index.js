import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./route"
import {createRouterGuards} from "@/router/router-guards"

Vue.use(VueRouter)
const router = new VueRouter({
    routes
})

createRouterGuards(router) // guards

export default router
