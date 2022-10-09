<template>
  <div class="app-container">
    <div class="left-container animated" :class="{'fadeOutLeft': !showPanel, 'fadeInLeft': showPanel}">
      <sq-card height="49%" :title="'基本情况'">
        <div class="card-body">
          <div class="con-container" style="padding: 10px 20px;">
            <div class="md" style="width: 49%;height: 60px;">
              <sq-icontext-mv :data="cd1"></sq-icontext-mv>
            </div>
            <div class="md" style="width: 49%;height: 60px;">
              <sq-icontext-mv :data="cd2"></sq-icontext-mv>
            </div>
            <div class="md" style="width: 49%;height: 60px;margin-top: 10px;">
              <sq-icontext-mv :data="cd3"></sq-icontext-mv>
            </div>
            <div class="md" style="width: 49%;height: 60px;margin-top: 10px;">
              <sq-icontext-mv :data="cd4"></sq-icontext-mv>
            </div>
            <div class="md" style="width: 49%;height: 60px;margin-top: 10px;">
              <sq-icontext-mv :data="cd5"></sq-icontext-mv>
            </div>
          </div>
          <div style="padding: 15px;">
            <sq-table :columns="columns" :tableData="tableData">
                
            </sq-table>
            </div>
        </div>
      </sq-card>

      

    </div>

    <div class="right-container  animated" :class="{'fadeOutRight': !showPanel, 'fadeInRight': showPanel}">
      <sq-card height="25%" :title="'日均客流排名'">
        <template slot="right" v-if="curtab">
          <div class="rg-cons">
            <sq-tab :tabData="tabs" v-model="curtab"></sq-tab>
          </div>
        </template>

        <div style="padding: 15px;">
          <sq-table :columns="columns2" :tableData="tableData2">
            
          </sq-table>
        </div>
      </sq-card>

      <sq-card class="sep" height="25%" :title="'平均乘坐车站数分布分析'">
        <div class="chart">
          <sq-bar></sq-bar>
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
        { id: 1, name: '站点', type: 'date' },
        { id: 2, name: '线路', type: 'month' },
        // { id: 3, name: '拥堵里程', type: 'year' },
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

      cd1: { title: '线路数', dw: '件', val: 50 },
      cd2: { title: '换乘站数', dw: '人', val: 10 },
      cd3: { title: '站点数', dw: '人', val: 68 },
      cd4: { title: '线网总长度', dw: '百万', val: 100 },
      cd5: { title: '运营里程', dw: '公里', val: 1.0 },

      cd11: { type: 'text', val: 2527, dw: 'tCO2e', up: true, title: '碳减排基准总值' },
      cd12: { type: 'text', val: 2527, dw: 'tCO2e', up: true, title: '核定碳减排量' },
      cd13: { type: 'text', val: 2527, dw: 'tCO2e', up: true, title: '实际碳排放量' },

      pdata1: [
        { value: 1048, name: '本地车', dw: '辆' },
        { value: 735, name: '本省外地', dw: '辆' },
        { value: 580, name: '外省', dw: '辆' },
      ],

      columns: [
        { name: '线路名', prop: 'name' },
        { name: '换乘站数', prop: 'hc' },
        { name: '站点数', prop: 'zd' },
        { name: '线路长度', prop: 'cd' }
      ],
      tableData: [
        { id: 1, xh: 1, name: '线路1', hc: 10, zd: 19, cd: 500 },
        { id: 2, xh: 2, name: '线路1', hc: 10, zd: 19, cd: 500 },
        { id: 3, xh: 3, name: '线路1', hc: 10, zd: 19, cd: 500 },
        { id: 4, xh: 4, name: '线路1', hc: 10, zd: 19, cd: 500 },
      ],

      

      columns2: [
        { name: '排名', prop: 'name' },
        { name: '站点名称/线路名称', prop: 'hc' },
        { name: '站点客流量', prop: 'zd' }
      ],
      tableData2: [
        { id: 1, xh: 1, name: '线路1', hc: 10, zd: 19, cd: 500 },
        { id: 2, xh: 2, name: '线路1', hc: 10, zd: 19, cd: 500 },
        { id: 3, xh: 3, name: '线路1', hc: 10, zd: 19, cd: 500 },
        { id: 4, xh: 4, name: '线路1', hc: 10, zd: 19, cd: 500 },
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
