<template>
  <div v-if="visible">
    <div class="modal"></div>
    <div class="info-bg-dialog">
      <div class="title">
        <span class="txt">{{ tl }}</span>
        <i class="close el-icon-close" @click="handleClose"></i>
      </div>
      <div class="body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tl: {
      type: String,
      default: '标题'
    }
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    dy_show() {
      this.visible = true
    },
    handleClose() {
      this.visible = false
    }
  }
}
</script>
<style lang="scss" scoped>
.modal{
  position: fixed;z-index: 990;
  width: 100%;height: 100%;
  left: 0%;top: 0%;
  background: rgba(0, 0, 0, 0.8);
}
.info-bg-dialog{
  position: absolute;z-index: 999;
  width: 50%;border-radius: 20px;
  left: 25%;top: 20%;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 10px #4DD2FF;
  padding: 10px 20px;
  .title{
    display: flex;
    justify-content: space-between;
    align-items: center;width: 100%;
    .txt{
      color: #77C5FE;font-size: 20px;
    }
    .close{
      cursor: pointer;font-size: 20px;
      color: #fff;
    }
  }
  .body{
    margin: 20px 0 0 0;
    padding: 10px 0;
    border: solid 1px #77c6fe62;
  }
}
</style>
