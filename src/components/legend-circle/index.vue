<template>
  <div class="info-bg">
    <div
      v-for="item in legend"
      :key="item.label"
      class="legend-row"
      @click="item.check = !item.check"
    >
      <div
        class="legend-circle"
        :style="{ background: item.check ? item.color : '' }"
      ></div>
      <div class="legend-label">{{ item.label }}</div>
    </div>

    <div
      v-for="item in iconLegend"
      :key="item.label"
      class="legend-row"
      @click="item.check = !item.check"
    >
      <i
        class="icon-class"
        :class="item.icon"
        :style="{ color: item.check ? '#008DFF' : '#fff' }"
      ></i>
      <div class="legend-label">{{ item.label }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    legend: {
      type: Array,
      default: () => {
        return [];
      },
    },
    iconLegend: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      txt: "",
    };
  },
};
</script>
<style lang="scss" scoped>
.info-bg {
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 10px #4dd2ff;
  border-radius: 10px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  padding: 15px;
  color: #fff;
  .legend-row {
    display: flex;
    align-items: center;
    margin: 20px 10px;
    cursor: pointer;
    .legend-circle {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-right: 10px;
      box-shadow: 0 0 10px #ccc;
    }
    .legend-label {
      font-size: 14px;
    }
    .icon-class {
      font-size: 20px;
      margin-right: 10px;
    }
  }
}
</style>
