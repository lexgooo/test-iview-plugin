import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import WywzOpsPlugin from './index'
import 'iview/dist/styles/iview.css'
import VueAMap from 'vue-amap'

Vue.use(iView)
Vue.use(WywzOpsPlugin)
Vue.use(VueAMap)


VueAMap.initAMapApiLoader({
  key: '429d65f8092c63c029f2645b18636249',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.Circle', 'AMap.Geolocation'],
  uiVersion: '1.0'
})

new Vue({
  el: '#app',
  render: h => h(App)
})
