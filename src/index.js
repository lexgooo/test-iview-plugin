import OpsCard from './components/ops-card'
import OpsBreadcrumb from './components/ops-breadcrumb'

const components = {
  OpsCard,
  OpsBreadcrumb
}

const WywzOpsPlugins = {
  install (Vue, option={}) {
    Object.keys(components).forEach(key => {
      Vue.component(key, components[key])
    })
  }
}

export default WywzOpsPlugins