import Vue from 'vue'
import Router from 'vue-router'
import Overview from '@/components/patient-overview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/overview',
      name: 'patient-overview',
      component: Overview
    }
  ]
})
