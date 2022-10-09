<template>
  <div class="app-container">
    <div class="left-container animated" :class="{'fadeOutLeft': !showPanel, 'fadeInLeft': showPanel}">
      <sq-card height="14%" :title="'交通指数'">
        <div class="card-body">
          <div class="con-container" style="padding: 10px 20px;">
            <div class="md" style="width: 100%;height: 60px;">
              <sq-icon-text :data="cd1" class="lc">
                <template slot="image">
                  <img src="@/assets/images/icons/car.png" />
                </template>
              </sq-icon-text>
            </div>
          </div>
        </div>
      </sq-card>

      <sq-card height="14%" class="sep" :title="'安全指数'">
        <div class="card-body">
          <div class="con-container" style="padding: 10px 20px;">
            <div class="md" style="width: 100%;height: 60px;">
              <sq-icon-text :data="cd2" class="lc">
                <template slot="image">
                  <img src="@/assets/images/icons/car.png" />
                </template>
              </sq-icon-text>
            </div>
          </div>
        </div>
      </sq-card>

      <sq-card height="14%" class="sep" :title="'路网CO2放量'">
        <div class="card-body">
          <div class="con-container" style="padding: 10px 20px;">
            <div class="md" style="width: 100%;height: 60px;">
              <sq-icon-text :data="cd3" class="lc">
                <template slot="image">
                  <img src="@/assets/images/icons/car.png" />
                </template>
              </sq-icon-text>
            </div>
          </div>
        </div>
      </sq-card>

      <sq-card height="14%" class="sep" :title="'单程平均耗时'">
        <div class="card-body">
          <div class="con-container" style="padding: 10px 20px;">
            <div class="md" style="width: 100%;height: 60px;">
              <sq-icon-text :data="cd4" class="lc">
                <template slot="image">
                  <img src="@/assets/images/icons/car.png" />
                </template>
              </sq-icon-text>
            </div>
          </div>
        </div>
      </sq-card>

      

    </div>

    <div class="right-container  animated" :class="{'fadeOutRight': !showPanel, 'fadeInRight': showPanel}">
      <real-info style="height: 41px;"></real-info>

      <predict-infor class="sep" style="height: 41px;"></predict-infor>
      
      <sq-card height="23%" class="sep" :title="'交通流预测'">
        <div style="padding: 15px;">
          <sq-table :columns="columns" :tableData="tableData">
            <template v-for="item in tableData" :slot="'data-' + item.id">
              <div :key="item.id" class="op-txt">
                <span class="txt ok" @click="handleShowAnalysys(item)" style="text-decoration: underline;cursor: pointer;">{{ item.op.txt }}</span>
              </div>
            </template>
          </sq-table>
        </div>
      </sq-card>

    </div>
    <div class="bottom-container">
      <i v-if="showPanel" class="close-icon-folder el-icon-s-fold" @click="showPanel = !showPanel"></i>
      <i v-else class="close-icon-folder el-icon-s-unfold" @click="showPanel = !showPanel"></i>

      <sq-time-line-bar>
      </sq-time-line-bar>
    </div>

    <div class="left-bg" v-if="showPanel"></div>
    <div class="right-bg" v-if="showPanel"></div>

    <sq-dialog ref="refDialog" :tl="'算法分析'">
      <div class="chart" style="height: 250px;">
        <sq-line></sq-line>
      </div>
    </sq-dialog>
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
import RealInfo from '@/components/RealInfo/index.vue'
import PredictInfor from '@/components/Predict/index.vue'
import SqIconText from '@/components/icon-text/index.vue'
import SqDialog from '@/components/Dialog/index.vue'
import SqTimeLineBar from '@/components/TimelineBar/index.vue'
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
    SqTable,
    SqIconText,
    PredictInfor,
    RealInfo,
    SqDialog,
    SqTimeLineBar
  },
  data() {
    return {
      tabs: [
        { id: 1, name: '出租车', type: 'date' },
        { id: 2, name: '网约车', type: 'month' },
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

      cd1: { title: '交通指数（实时）', dw: '畅通', val: 3.0, type: 'status' },
      cd2: { title: '安全指数（实时）', dw: '安全', val: 2.8, type: 'status' },
      cd3: { title: '路网CO2放量（今日）', dw: '吨', val: 1234 },
      cd4: { title: '单程平均耗时（今日）', dw: '分钟', val: 48 },
      // cd5: { title: '运营里程', dw: '分钟', val: 48 },

      cd11: { type: 'text', val: 2527, dw: 'tCO2e', up: true, title: '碳减排基准总值' },
      cd12: { type: 'text', val: 2527, dw: 'tCO2e', up: true, title: '核定碳减排量' },
      cd13: { type: 'text', val: 2527, dw: 'tCO2e', up: true, title: '实际碳排放量' },

      pdata1: [
        { value: 1048, name: '在途车辆数', dw: '辆' },
        { value: 735, name: '停驶车辆数', dw: '辆' },
      ],
      pdata2: [
        { value: 1048, name: '本地车', dw: '辆' },
        { value: 735, name: '本省外地', dw: '辆' },
        { value: 580, name: '外省', dw: '辆' },
      ],

      columns: [
        { name: '算法名利', prop: 'name' },
        { name: '相对误差', prop: 'wc' },
        { name: '算法分析', prop: 'op' },
      ],
      tableData: [
        { id: 1, xh: 1, name: 'HA', wc: '8.2%', fx: 19, op: { txt: '分析', val: 1 } },
        { id: 2, xh: 2, name: 'ARIMA', wc: '7.4%', fx: 19, op: { txt: '分析', val: 1 } },
        { id: 3, xh: 3, name: 'VAR', wc: '6.8%', fx: 19, op: { txt: '分析', val: 1 } },
        { id: 4, xh: 4, name: 'LSTM', wc: '7.9%', fx: 19, op: { txt: '分析', val: 1 } },
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
  },
  methods: {
    handleShowAnalysys(item) {
      this.$refs.refDialog.dy_show()
      console.log(item)
    }
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
