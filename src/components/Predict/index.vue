<template>
  <div class="info-bg">
    <div class="chk">
      <span class="fk" @click="toggleChk1()">
        <i class="el-icon-check" v-if="chk1"></i>
      </span>
      <span class="txt">异常交通事件检测</span>
    </div>
    <div class="chk">
      <span class="fk" @click="toggleChk2()">
        <i class="el-icon-check" v-if="chk2"></i>
      </span>
      <span class="txt">异常交通事件预测</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chk1: true,
      chk2: true
    }
  },
  methods: {
    toggleChk1() {
      this.chk1 = !this.chk1
    },
    toggleChk2() {
      this.chk2 = !this.chk2
    }
  }
}
</script>
<style lang="scss" scoped>
.info-bg{
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 10px #4DD2FF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  .txt{
    font-size: 18px;color: #BFDFFF;
  }
  .chk{
    display: flex;
    align-items: center;
    .fk{
      width: 22px;height: 22px;border: solid 1px #aaa;background: #061120;
      margin: 0 7px 0 0;text-align: center;cursor: pointer;
      i{
        color: #00D1FF;
        font-size: 20px;
      }
    }
  }
}
</style>
