<template>
  <div class="app-container">
    <div
      class="left-container animated"
      :class="{ fadeOutLeft: !showPanel, fadeInLeft: showPanel }"
    >
      <sq-card height="18%" :title="'基本信息'">
        <div class="fk-lists">
          <sq-v-icon-text
            class="fk"
            v-for="item in ydDatas"
            :key="item.id"
            :title="item.title"
            :data="item.data"
          ></sq-v-icon-text>
        </div>
      </sq-card>

      <sq-card height="30%" class="sep" :title="'视频监控'"> </sq-card>
    </div>

    <div
      class="right-container animated"
      :class="{ fadeOutRight: !showPanel, fadeInRight: showPanel }"
    >
      <real-info style="height: 41px"></real-info>
    </div>
    <div class="bottom-container">
      <i
        v-if="showPanel"
        class="close-icon-folder el-icon-s-fold"
        @click="showPanel = !showPanel"
      ></i>
      <i
        v-else
        class="close-icon-folder el-icon-s-unfold"
        @click="showPanel = !showPanel"
      ></i>
    </div>

    <div class="left-bg" v-if="showPanel"></div>
    <div class="right-bg" v-if="showPanel"></div>
  </div>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqTab from "@/components/Tab/index.vue";
import SqSubTitle from "@/components/sub-title/index.vue";
import SqVIconText from "@/components/icon-text/vindex.vue";
import SqIcontextMv from "@/components/icon-text/indexmv.vue";
import SqSimVindex from "@/components/icon-text/sim-vindex.vue";
import SqBar from "@/components/Charts/Bar.vue";
import SqLine from "@/components/Charts/Line.vue";
import SqPie from "@/components/Charts/Pie.vue";
import SqTable from "@/components/table/index.vue";
import RealInfo from "@/components/RealInfo/index.vue";
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
    RealInfo,
  },
  data() {
    return {
      tabs: [
        { id: 1, name: "出租车", type: "date" },
        { id: 2, name: "网约车", type: "month" },
        // { id: 3, name: '拥堵里程', type: 'year' },
      ],
      curtab: "date",
      datepickerType: "day",
      chooseDate: "",

      ydDatas: [
        {
          id: 1,
          title: "干道数",
          data: { type: "text", val: "980", dw: "万" },
        },
        { id: 2, title: "区域数", data: { type: "text", val: 74, dw: "%" } },
        { id: 3, title: "行政区数", data: { type: "text", val: 33, dw: "%" } },
      ],

      ydDatas2: [
        {
          id: 1,
          title: "单程平均通勤耗时",
          data: { type: "text", val: "980", dw: "分钟" },
        },
        {
          id: 2,
          title: "45min以内通勤人口比重",
          data: { type: "text", val: 74, dw: "%" },
        },
        {
          id: 3,
          title: "居民出行延误比",
          data: { type: "text", val: 33, dw: "%" },
        },
      ],

      gfData: { type: "text", val: 500, dw: "kW" },

      cd1: { title: "共享单车投放总量", dw: "件", val: 50 },
      cd2: { title: "在途数", dw: "人", val: 10 },
      cd3: { title: "站点数", dw: "人", val: 68 },
      cd4: { title: "线网总长度", dw: "百万", val: 100 },
      cd5: { title: "运营里程", dw: "公里", val: 1.0 },

      cd11: {
        type: "text",
        val: 2527,
        dw: "tCO2e",
        up: true,
        title: "碳减排基准总值",
      },
      cd12: {
        type: "text",
        val: 2527,
        dw: "tCO2e",
        up: true,
        title: "核定碳减排量",
      },
      cd13: {
        type: "text",
        val: 2527,
        dw: "tCO2e",
        up: true,
        title: "实际碳排放量",
      },

      pdata1: [
        { value: 1048, name: "私家车出行", dw: "辆" },
        { value: 735, name: "公共交通出行", dw: "辆" },
        { value: 735, name: "其他", dw: "辆" },
      ],
      pdata2: [
        { value: 1048, name: "本地车", dw: "辆" },
        { value: 735, name: "本省外地", dw: "辆" },
        { value: 580, name: "外省", dw: "辆" },
      ],

      columns: [
        { name: "排名", prop: "name" },
        { name: "企业名称", prop: "hc" },
        { name: "订单数", prop: "zd" },
        { name: "订单数占比", prop: "cd" },
      ],
      tableData: [
        { id: 1, xh: 1, name: "线路1", hc: 10, zd: 19, cd: 500 },
        { id: 2, xh: 2, name: "线路1", hc: 10, zd: 19, cd: 500 },
        { id: 3, xh: 3, name: "线路1", hc: 10, zd: 19, cd: 500 },
        { id: 4, xh: 4, name: "线路1", hc: 10, zd: 19, cd: 500 },
      ],

      columns2: [
        { name: "排名", prop: "name" },
        { name: "企业名称", prop: "hc" },
        { name: "订单数", prop: "zd" },
        { name: "订单数占比", prop: "cd" },
      ],
      tableData2: [
        { id: 1, xh: 1, name: "线路1", hc: 10, zd: 19, cd: 500 },
        { id: 2, xh: 2, name: "线路1", hc: 10, zd: 19, cd: 500 },
        { id: 3, xh: 3, name: "线路1", hc: 10, zd: 19, cd: 500 },
        { id: 4, xh: 4, name: "线路1", hc: 10, zd: 19, cd: 500 },
      ],

      showPanel: true,
    };
  },
  mounted() {
    this.curtab = this.tabs[0];
  },
};
</script>
<style lang="scss" scoped>
.rg-cons {
  display: flex;
  justify-content: space-between;
  .date-picker {
    width: 90px;
    margin-left: 5px;
  }
}
.fk-lists {
  height: 90px;
  display: flex;
  justify-content: space-between;
  padding: 0 0 0 18px;
  margin: 10px 0 10px 0;
  .fk {
    margin: 0 5px;
  }
}

.con-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .md {
    width: 48%;
    height: calc(100% - 30px);
    .con {
      padding: 20px 0 0 0;
      height: calc(100% - 40px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .fk {
        width: 40%;
      }
    }
  }
}

.chart {
  flex: 1;
  width: 100%;
  height: 100%;
}
@media screen and (min-width: 2560px) {
  .rg-cons {
    .date-picker {
      width: 110px;
      margin-left: 15px;
    }
  }
  .card-body {
    height: calc(100% - 30px);
  }
}
@media screen and (min-width: 3840px) {
  .rg-cons {
    .date-picker {
      width: 150px;
      margin-left: 15px;
    }
  }
  .card-body {
    height: calc(100% - 30px);
  }
}
</style>
