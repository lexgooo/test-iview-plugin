<template>
  <div class="mapTrackContainer">
    <el-amap ref="map" id="amapDemo" class="amap-demo" :center="center">
      <el-amap-marker v-if="position" :position="position.lastPosition" :offset="[-20, -45]" :z-index="1001" vid="track-marker">
        <lottie :options="options" :height="48" :width="40"></lottie>
      </el-amap-marker>
      <el-amap-marker v-for="(marker, index) in markers" :position="marker.point" :offset="marker.offset" :vid="index" :key="index">
        <img :src="marker.pic" :alt="marker.title" :width="marker.style.width" :height="marker.style.height">
      </el-amap-marker>
    </el-amap>
  </div>
</template>

<script>
// import { lazyAMapApiLoaderInstance } from "vue-amap";
import Lottie from 'vue-lottie'
import * as animationData from '../../../static/datas/location.json'

// let amapManager = new AMapManager()
// console.log()
// const loadPromise = lazyAMapApiLoaderInstance.load();
export default {
  components: {
    Lottie
  },
  props: {
    opsmap: {
      type: [Object, Array],
      default () {
        return {}
      }
    },
    position: {
      type: [Object, Array],
      default () {
        return {}
      }
    }
  },
  data () {
    let startPoint, endPoint, altCenter, pickups, discharges
    if (this.opsmap.tracks && this.opsmap.tracks.length && this.opsmap.tracks[0].path) {
      startPoint = this.opsmap.tracks[0].path[0]
      endPoint = this.opsmap.tracks[0].path[(this.opsmap.tracks[0].path.length - 1)]
      altCenter = this.opsmap.tracks[0].path[(~~(this.opsmap.tracks[0].path.length / 2))]
    } else {
      startPoint = [121.37514, 31.110679]
      endPoint = [121.37514, 31.110679],
      altCenter = [121.37514, 31.110679]
    }
    const start = {
      title: '起点',
      point: startPoint,
      pic: '/static/img/icon_map_start.png',
      style: {
        width: 40,
        height: 48
      },
      offset: [-20, -45]
    }
    const end = {
      title: '终点',
      point: endPoint,
      pic: '/static/img/icon_map_end.png',
      style: {
        width: 40,
        height: 48
      },
      offset: [-20, -45]
    }
    if (this.opsmap.pickupPoints && this.opsmap.pickupPoints.length) {
      pickups = this.opsmap.pickupPoints.map(item => {
        return {
          title: '提货点',
          point: item.mapPoint,
          pic: '/static/img/icon_map_pickup.png',
          style: {
            width: 40,
            height: 40
          },
          offset: [-20, -20]
        }
      })
    } else {
      pickups = []
    }
    if (this.opsmap.shippingPoints && this.opsmap.shippingPoints.length) {
      discharges = this.opsmap.shippingPoints.map(item => {
        return {
          title: '卸货点',
          point: item.mapPoint,
          pic: '/static/img/icon_map_discharge.png',
          style: {
            width: 40,
            height: 40
          },
          offset: [-20, -20]
        }
      })
    } else {
      discharges = []
    }
    let markers = []
    const waybillStatus = this.position && this.position.waybillStatus
    if (waybillStatus && !(waybillStatus === ('RECEIPTDOCUPLOADED' || 'SIGNED' || 'FAILTOPASS' || 'DOCREUPLOADED' || 'COMPLETE'))) {
      markers = [start, ...pickups, ...discharges]
    } else {
      markers = [start, ...pickups, ...discharges, end]
    }
    let center
    if (this.position && this.position.lastPosition) {
      center = this.position.lastPosition
    } else {
      center = altCenter
    }
    return {
      options: {animationData},
      center,
      markers
    }
  },
  created() {
    loadPromise.then(() => {
      AMapUI.loadUI(["misc/PathSimplifier"], (PathSimplifier) => {
        this.initPage(PathSimplifier);
      });
    });
  },
  methods: {
    // initPage(PathSimplifier, SimpleMarker) {
    initPage(PathSimplifier) {
      let pathSimplifierIns = new PathSimplifier({
        zIndex: 100,
        map: this.$refs.map.$$getInstance(),
        getPath(pathData, pathIndex) {
          return pathData.path;
        },
        renderOptions: {
          pathLineStyle: {
            strokeStyle: "#5EB95E",
            lineWidth: 4,
            dirArrowStyle: true
          }
        }
      });
      pathSimplifierIns.setData(this.opsmap.tracks);
    }
  }
};
</script>

<style lang="scss">
.mapTrackContainer {
  height: 100%;
  .amap-demo {
    height: calc(100% + 12px);
    position: relative;
    top: -6px;
  }
  .search-box {
    position: relative;
    top: 6px;
    left: 66px;
    height: 38px;
    width: 280px;
  }
}
</style>