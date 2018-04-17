import OpsCard from './components/ops-card'
import OpsSidebar from './components/ops-sidebar'
import OpsBreadcrumb from './components/ops-breadcrumb'
import OpsMapTrack from './components/ops-map-track'

const components = {
  OpsCard,
  OpsSidebar,
  OpsBreadcrumb,
  OpsMapTrack
}

const WywzOpsPlugins = {
  install (Vue, option={}) {
    Object.keys(components).forEach(key => {
      Vue.component(key, components[key])
    })
  }
}

export default WywzOpsPlugins