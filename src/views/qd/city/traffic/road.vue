<template>
  <div class="app-container">
    <div class="left-container animated" :class="{'fadeOutLeft': !showPanel, 'fadeInLeft': showPanel}">
      <sq-card height="22%" :title="'碳能情况'">
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
          </div>
        </div>
      </sq-card>

      <sq-card height="23%" class="sep" :title="'交通事件列表显示'">
        <div style="padding: 15px;">
          <sq-table :columns="columns" :tableData="tableData">
            
          </sq-table>
        </div>
      </sq-card>

      <sq-card class="sep" height="23%" :title="'交通事件趋势'">
        <div class="chart">
          <sq-line></sq-line>
        </div>
      </sq-card>

      <sq-card height="23%" class="sep" :title="'交通状况统计分析'">
        <div class="chart">
          <sq-bar></sq-bar>
        </div>
      </sq-card>

    </div>

    <div class="right-container  animated" :class="{'fadeOutRight': !showPanel, 'fadeInRight': showPanel}">
      <sq-card class="sep" height="23%" :title="'道路级配'">
        
      </sq-card>

      <sq-card class="sep" height="23%" :title="'道路运行趋势'">
        <template slot="right" v-if="curtab">
          <div class="rg-cons">
            <sq-tab :tabData="tabs" v-model="curtab"></sq-tab>
          </div>
        </template>

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
        { id: 1, name: '交通指数', type: 'date' },
        { id: 2, name: '平均速度', type: 'month' },
        { id: 3, name: '拥堵里程', type: 'year' },
      ],
      curtab: 'date',
      datepickerType: 'day',
      chooseDate: '',

      ydDatas: [
        { id: 1, title: '客运交通量', data: { type: 'text', val: 521, dw: '辆' } },
        { id: 2, title: '货运交通量', data: { type: 'text', val: 5221, dw: '辆' } },
      ],

      gfData: { type: 'text', val: 500, dw: 'kW' },

      cd1: { title: '路网密度', dw: '公里/万平方公里', val: 101.7 },
      cd2: { title: '交通指数', dw: '畅通', val: 3.0 },
      cd3: { title: '平均速度', dw: 'KM/h', val: 68 },
      cd4: { title: '拥堵里程', dw: 'KM', val: 100 },

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
        { name: '事件内容', prop: 'content' },
        { name: '发生时间', prop: 'time' }
      ],
      tableData: [
        { id: 1, xh: 1, time: '12:00', content: '交通事件a' },
        { id: 2, xh: 2, time: '12:00', content: '交通事件a' },
        { id: 3, xh: 3, time: '12:00', content: '交通事件a' },
        { id: 4, xh: 4, time: '12:00', content: '交通事件a' },
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
