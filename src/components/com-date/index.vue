<template>
  <div class="com-select-date">
    <el-date-picker
      v-model="dataVal"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataVal: ''
    }
  }
}
</script>
<style lang="scss">
.com-select-date{
  width: 100px;
  height: 25px;
  background: linear-gradient(to bottom, #009FFF, #009FFF00);
  border-radius: 10px;
  box-shadow: 0 0 10px #4DD2FF;
  .el-date-editor.el-input{
    width: calc(100% - 10px);height: 100%;
    background: transparent !important;padding: 0 5px;
    font-family: 'HK' !important;color: #fff;
    .el-input__inner{
      padding: 0;height: 100%;
      border: none !important;background: transparent !important;
    }
    .el-input__prefix{
      left: auto;
      right: 0;top: -7px;
    }
  }
}
</style>
