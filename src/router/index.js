import Vue from 'vue'
import Router from 'vue-router'
import RewardsInfo from '@/components/RewardsInfo'
import Posters from '@/components/Posters'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'RewardsInfo',
        component: RewardsInfo
    }, {
        path: '/posters',
        name: 'Posters',
        component: Posters
    }]
})