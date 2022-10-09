<template>
  <div class="com-select">
    <select>
      <option v-for="item in datas" :key="item.id">{{ item.text }}</option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    datas: {
      type: Array,
      default: []
    }
  }
}
</script>
<style lang="scss" scoped>
.com-select{
  width: 80px;
  height: 25px;
  background: linear-gradient(to bottom, #009FFF, #009FFF00);
  border-radius: 10px;
  box-shadow: 0 0 10px #4DD2FF;
  select{
    width: 100%;height: 100%;padding: 0 5px;
    color: #fff;font-family: 'HK';
    background: transparent;border: none;
    option{
      background: #053050;
      padding: 5px 5px;
      font-size: 14px;
    }
  }
}
</style>
