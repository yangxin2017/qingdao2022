<template>
  <div class="timeline-bar">
    <md-com-date style="margin-left: 15px;"></md-com-date>
    <sq-tab :tabData="tabs" v-model="curtab" style="margin: 0 10px;"></sq-tab>
    <span class="sep-line"></span>
    <span class="cir-fk"><i class="el-icon-caret-right"></i></span>
    <md-com-select :datas="speeds"></md-com-select>
    <div class="timeline" v-if="times.length > 0">
      <div class="time-k" :style="{'width': (100 / times.length) + '%'}" v-for="item,ix in times" :key="ix">
        <span class="t">{{ item }}</span>
        <div class="kd">
          <span class="l" style="margin-left: 10%"></span>
          <span class="l l2"></span>
          <span class="l"></span>
          <span class="l l2"></span>
          <span class="l"></span>
          <span class="l l2"></span>
          <span class="l"></span>
          <span class="l l2"></span>
          <span class="l"></span>
        </div>
      </div>
      <div class="time-k">
        <span class="t">{{ lastTime }}</span>
      </div>

      <div class="yb"><i class="el-icon-caret-right"></i></div>
    </div>
  </div>
</template>
<script>
import MdComSelect from '@/components/com-select/index.vue'
import MdComDate from '@/components/com-date/index.vue'
import SqTab from '@/components/Tab/index.vue'
export default {
  components: {
    MdComSelect,
    MdComDate,
    SqTab
  },
  data() {
    return {
      tabs: [
        { id: 1, name: '10min', type: '10' },
        { id: 2, name: '20min', type: '20' },
        { id: 3, name: '30min', type: '30' },
      ],
      curtab: { id: 3, name: '30min', type: '30' },
      speeds: [
        { id: 1, text: '1X' },
        { id: 2, text: '2X' },
        { id: 3, text: '5X' },
        { id: 4, text: '10X' }
      ],
      times: [],
      lastTime: ''
    }
  },
  mounted() {
    this.initTimes()
  },
  methods: {
    initTimes() {
      for (let i=0;i<24;i++) {
        let s = (i < 10) ? '0' + i : i
        s = s + ':00'
        this.times.push(s)
      }
      this.lastTime = '24:00'
    }
  }
}
</script>
<style lang="scss" scoped>
.timeline-bar{
  position: absolute;
  bottom: 8px;width: calc(100% - 60px);
  margin: 0 10px 0 50px;height: 30px;
  display: flex;
  align-items: center;

  .sep-line{
    height: 100%;border-left: solid 1px #BFDFFF;
    width: 10px;
  }
  .cir-fk{
    width: 27px;height: 27px;border-radius: 20px;
    border: solid 1px #1385E1;background: #094A80;
    text-align: center;cursor: pointer;margin-right: 10px;
    box-shadow: 0 0 10px #4dd2ff;
    i{
      color: #fff;font-size: 22px;position: relative;top: 2px;
    }
  }
  .timeline{
    flex: 1;margin-left: 10px;height: 100%;
    border-top: solid 1px #fff;
    border-bottom: solid 1px #fff;
    display: flex;padding: 0 40px;position: relative;
    .time-k{
      height: 12px;position: relative;
      border-left: solid 1px #fff;top: 4px;
      .t{
        position: absolute;width: 40px;
        text-align: center;font-size: 12px;
        color: #ccc;left: -21px;bottom: -15px;
      }
      .kd{
        display: flex;position: relative;top: 5px;
      }
      .l{
        width: 10%;position: relative;
        border-left: solid 1px #ccc;height: 4px;
        top: 3px;
        &.l2{
          height: 7px;top: 0px;
        }
      }
    }
    .yb{
      position: absolute;
      left: 50%;top: 0;
      height: calc(100% - 2px);
      border: solid 1px #FFFF00;
      margin-left: 40px;
      i{
        color: #FFFF00;font-size: 20px;
        position: absolute;top: 5px;left: -7px;
      }
    }
  }
}
</style>
