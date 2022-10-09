<template>
  <div class="app-container">
    <div class="left-container animated" :class="{'fadeOutLeft': !showPanel, 'fadeInLeft': showPanel}">
      <sq-card height="31%" :title="'基本情况'">
        <div class="card-body">
          <div class="con-container" style="padding: 10px 20px;">
            <div class="md" style="width: 49%;height: 60px;">
              <sq-icontext-mv :data="cd1"></sq-icontext-mv>
            </div>
            <div class="md" style="width: 49%;height: 60px;">
              <sq-icontext-mv :data="cd2"></sq-icontext-mv>
            </div>
          </div>
          
          <div class="chart">
            <sq-pie :data="pdata1"></sq-pie>
          </div>
        </div>
      </sq-card>

      <sq-card height="39%" class="sep" :title="'线网情况'">
        <div class="card-body">
          <div class="con-container" style="padding: 10px 20px;">
            <div class="md" style="width: 49%;height: 60px;">
              <sq-icontext-mv :data="cd11"></sq-icontext-mv>
            </div>
            <div class="md" style="width: 49%;height: 60px;">
              <sq-icontext-mv :data="cd12"></sq-icontext-mv>
            </div>
            <div class="md" style="width: 49%;height: 60px;margin-top: 10px;">
              <sq-icontext-mv :data="cd13"></sq-icontext-mv>
            </div>
            <div class="md" style="width: 49%;height: 60px;margin-top: 10px;">
              <sq-icontext-mv :data="cd14"></sq-icontext-mv>
            </div>
            <div class="md" style="width: 49%;height: 60px;margin-top: 10px;">
              <sq-icontext-mv :data="cd15"></sq-icontext-mv>
            </div>
            <div class="md" style="width: 49%;height: 60px;margin-top: 10px;">
              <sq-icontext-mv :data="cd16"></sq-icontext-mv>
            </div>
            <div class="md" style="width: 49%;height: 60px;margin-top: 10px;">
              <sq-icontext-mv :data="cd17"></sq-icontext-mv>
            </div>
            <div class="md" style="width: 49%;height: 60px;margin-top: 10px;">
              <sq-icontext-mv :data="cd18"></sq-icontext-mv>
            </div>
          </div>
        </div>
      </sq-card>

      <sq-card class="sep" height="25%" :title="'公交专用道条数：32条'">
        <template slot="right" v-if="curtab">
          <div class="rg-cons">
            <sq-tab :tabData="tabs" v-model="curtab"></sq-tab>
          </div>
        </template>

        <div style="padding: 15px;">
          <sq-table :columns="columns" :tableData="tableData">
            
          </sq-table>
        </div>
      </sq-card>

      

    </div>

    <div class="right-container  animated" :class="{'fadeOutRight': !showPanel, 'fadeInRight': showPanel}">
      <sq-card height="31%" :title="'专题分析'">
        <div class="card-body">
          <div class="con-container" style="padding: 10px 20px;">
            <div class="md" style="width: 100%;height: 60px;">
              <sq-icontext-mv :data="cd3"></sq-icontext-mv>
            </div>
          </div>
          
          <div class="chart">
            <sq-pie :data="pdata1"></sq-pie>
          </div>
        </div>
      </sq-card>

      <sq-card height="39%" class="sep" :title="'线网情况'">
        <div class="card-body">
          <div class="con-container" style="padding: 10px 20px;">
            <div class="md" style="width: 49%;height: 60px;">
              <sq-icontext-mv :data="cd21"></sq-icontext-mv>
            </div>
            <div class="md" style="width: 49%;height: 60px;">
              <sq-icontext-mv :data="cd22"></sq-icontext-mv>
            </div>
            <div class="md" style="width: 49%;height: 60px;margin-top: 10px;">
              <sq-icontext-mv :data="cd23"></sq-icontext-mv>
            </div>
            <div class="md" style="width: 49%;height: 60px;margin-top: 10px;">
              <sq-icontext-mv :data="cd24"></sq-icontext-mv>
            </div>
            <div class="md" style="width: 49%;height: 60px;margin-top: 10px;">
              <sq-icontext-mv :data="cd25"></sq-icontext-mv>
            </div>
            <div class="md" style="width: 49%;height: 60px;margin-top: 10px;">
              <sq-icontext-mv :data="cd26"></sq-icontext-mv>
            </div>
            <div class="md" style="width: 49%;height: 60px;margin-top: 10px;">
              <sq-icontext-mv :data="cd27"></sq-icontext-mv>
            </div>
          </div>
        </div>
      </sq-card>

      
      <sq-card class="sep" height="25%" :title="'公交绿波时距图'">
        <div class="chart">
          <sq-line></sq-line>
        </div>
      </sq-card>
      
    </div>
    <div class="bottom-container">
      <i v-if="showPanel" class="close-icon-folder el-icon-s-fold" @click="showPanel = !showPanel"></i>
      <i v-else class="close-icon-folder el-icon-s-unfold" @click="showPanel = !showPanel"></i>
    </div>

    <div class="left-bg" v-if="showPanel"></div>
    <div class="right-bg" v-if="showPanel"></div>

  </div>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqTab from '@/components/Tab/index.vue'
import SqSubTitle from '@/components/sub-title/index.vue'
import SqVIconText from '@/components/icon-text/vindex.vue'
import SqIcontextMv from '@/components/icon-text/indexmv.vue'
import SqSimVindex from '@/components/icon-text/sim-vindex.vue'
import SqBar from '@/components/Charts/Bar.vue'
import SqLine from '@/components/Charts/Line.vue'
import SqPie from '@/components/Charts/Pie.vue'
import SqTable from '@/components/table/index.vue'
export default {
  components: {
    SqCard,
    SqTab,
    SqSubTitle,
    SqVIconText,
    SqIcontextMv,
    SqSimVindex,
    SqBar,
    SqLine,
    SqPie,
    SqTable
  },
  data() {
    return {
      tabs: [
        { id: 1, name: '低效线路', type: 'date' },
        { id: 2, name: '重复线路', type: 'month' },
        { id: 3, name: '热力线路', type: 'year' },
      ],
      curtab: 'date',
      datepickerType: 'day',
      chooseDate: '',

      ydDatas: [
        { id: 1, title: '路内/路外的泊位总数', data: { type: 'text', val: 100, dw: '个' } },
        { id: 2, title: '路内/路外的停车场总数', data: { type: 'text', val: 20, dw: '个' } },
        { id: 3, title: '路内/路外的饱和度', data: { type: 'text', val: 0.6, dw: '较饱和' } },
      ],

      gfData: { type: 'text', val: 500, dw: 'kW' },

      cd1: { title: '车辆数', dw: '件', val: 50 },
      cd2: { title: '车企数', dw: '人', val: 10 },
      cd3: { title: '在途车辆数目', dw: '人', val: 68 },
      cd4: { title: '财产损失', dw: '百万', val: 100 },
      cd5: { title: '月同比变化值', dw: '无明显变化', val: 1.0 },

      
      cd11: { title: '线路数', dw: '条', val: 50 },
      cd12: { title: '站点数', dw: '个', val: 50 },
      cd13: { title: '线网总长度', dw: '公里', val: 50 },
      cd14: { title: '线路平均长度', dw: '公里', val: 50 },
      cd15: { title: '线网密度', dw: '', val: 50 },
      cd16: { title: '复线系数', dw: '', val: 50 },
      cd17: { title: '非直线系数', dw: '', val: 50 },
      cd18: { title: '站点覆盖率', dw: '%', val: 50 },

      
      cd21: { title: '地面公交的平均速度', dw: '条', val: 50 },
      cd22: { title: '公交专用道平均速度', dw: '个', val: 50 },
      cd23: { title: '准点率', dw: '公里', val: 50 },
      cd24: { title: '换乘率', dw: '公里', val: 50 },
      cd25: { title: '运能饱和度', dw: '', val: 50 },
      cd26: { title: '乘客交替系数', dw: '', val: 50 },
      cd27: { title: '平均拥挤度车辆', dw: '', val: 50 },

      cd11: { type: 'text', val: 2527, dw: 'tCO2e', up: true, title: '碳减排基准总值' },
      cd12: { type: 'text', val: 2527, dw: 'tCO2e', up: true, title: '核定碳减排量' },
      cd13: { type: 'text', val: 2527, dw: 'tCO2e', up: true, title: '实际碳排放量' },

      pdata1: [
        { value: 1048, name: '本地车', dw: '辆' },
        { value: 735, name: '本省外地', dw: '辆' },
        { value: 580, name: '外省', dw: '辆' },
      ],

      columns: [
        { name: '序号', prop: 'xh' },
        { name: '线路名称', prop: 'content' }
      ],
      tableData: [
        { id: 1, xh: 1, content: '线路1' },
        { id: 2, xh: 2, content: '线路1' },
        { id: 3, xh: 3, content: '线路1' },
        { id: 4, xh: 4, content: '线路1' },
      ],

      showPanel: true
    }
  },
  mounted() {
    this.curtab = this.tabs[0]
  }
}
</script>
<style lang="scss" scoped>
.rg-cons{
  display: flex;
  justify-content: space-between;
  .date-picker{
    width: 90px;
    margin-left: 5px;
  }
}
.fk-lists{
  height: 90px;
  display: flex;
  justify-content: space-between;
  padding: 0 0 0 18px;
  margin: 10px 0 10px 0;
  .fk{
    margin: 0 5px;
  }
}

.con-container{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .md{
    width: 48%;height: calc(100% - 30px);
    .con{
      padding: 20px 0 0 0;
      height: calc(100% - 40px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .fk{
        width: 40%;
      }
    }
  }
}

.chart{
  flex: 1;
  width: 100%;height: 100%;
}
@media screen and (min-width: 2560px) {
  .rg-cons{
    .date-picker{
      width: 110px;
      margin-left: 15px;
    }
  }
  .card-body{
    height: calc(100% - 30px);
  }
}
@media screen and (min-width: 3840px) {
  .rg-cons{
    .date-picker{
      width: 150px;
      margin-left: 15px;
    }
  }
  .card-body{
    height: calc(100% - 30px);
  }
}
</style>
