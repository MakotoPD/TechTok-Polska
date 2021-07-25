import { wrapFunctional } from './utils'

export { default as Menu } from '../..\\components\\menu.vue'

export const LazyMenu = import('../..\\components\\menu.vue' /* webpackChunkName: "components/menu" */).then(c => wrapFunctional(c.default || c))
