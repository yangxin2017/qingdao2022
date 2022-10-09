<template>
  <div class="info-bg">
    <span class="txt">实时2022年9月3日 11：45</span>
    <img src="@/assets/images/qd/info.png" alt="" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      txt: ''
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
}
</style>
