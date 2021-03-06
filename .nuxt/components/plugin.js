import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Menu: () => import('../..\\components\\menu.vue' /* webpackChunkName: "components/menu" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
