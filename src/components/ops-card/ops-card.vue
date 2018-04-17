<template>
  <div class="ops-card" :class="top ? 'top-card' : 'normal-card'">
    <div class="card-head">
      <div class="card-left">
        <slot name="title-icon"></slot>
        <span class="title">{{title.name ? title.name : title}} {{title.value}}</span>
        <slot name="left-fuc-btn"></slot>
      </div>
      <div class="card-right"><slot name="right-fuc-btn"></slot></div>
    </div>
    <div class="card-body" v-show="show">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: [Object, String],
    show: {
      type: Boolean,
      default: true
    },
    top: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  .top-card {
    position: relative;
    top: -43px;
    margin: 0 -30px -40px -30px;
  }
  .normal-card {
    .card-body {
      position: relative;
      margin-top: 12px;
      padding-top: 12px;
      border: {
        top: {
          style: solid;
          width: 2px;
          color: #DFDFE6;
        }
      }
      &::after {
        content: '';
        width: 64px;
        height: 2px;
        background-color: #FDD000;
        position: absolute;
        top: -2px;
        left: 0;
      }
    }
  }
  .ops-card + .ops-card {
    margin-top: 20px;
    width: 100%;
  }
  .ops-card {
    background-color: #fff;
    padding: 20px;
    .card-head {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      .card-left {
        display: flex;
        align-items: center;
        flex: 4;
      }
      .card-right {
        flex: 1;
        display: flex;
        justify-content: flex-end;
      }
      .title {
        font-size: 16px;
        margin-right: 10px;
      }
    }
  }
</style>
