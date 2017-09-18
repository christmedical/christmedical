import Vue from 'vue'
import Router from 'vue-router'
import Overview from '@/components/patient-overview'
import Nav from '@/components/nav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/overview',
      name: 'patient-overview',
      component: Overview
    },
    {
      path: '/nav',
      name: 'nav',
      component: Nav
    }
  ]
})
