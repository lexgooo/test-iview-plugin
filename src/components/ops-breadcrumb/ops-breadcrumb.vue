<template>
  <div class="bread-crumb">
    <Breadcrumb>
      <BreadcrumbItem v-for="(item, index) in list" :key="index">{{ showName(item) }}</BreadcrumbItem>
    </Breadcrumb>
    <p class="title" v-if="!notitle">{{ showName(list[list.length - 1]) }}</p>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    },
    separator: String
  },
  computed: {
    notitle () {
      return this.$route.path.indexOf('notititlebreadcrumb') > -1
    }
  },
  methods: {
    isLast (index) {
      return index === this.list.length - 1
    },
    showName (item) {
      if (item.meta && item.meta.label) {
        item = item.meta && item.meta.label
      }
      if (item.name) {
        item = item.name
      }
      return item
    }
  }
}
</script>
<style lang="scss">
  .bread-crumb {
    position: relative;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #cfd8dc;
    background-color: #fff;
    padding: 16px 32px;
    .title {
      margin-top: 16px;
      color: #2E384D;
      font-size: 20px;
    }
  }
</style>
