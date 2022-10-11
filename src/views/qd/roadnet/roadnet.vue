<template>
  <div class="app-container">
    <div class="bottom-tab-button">
      <!-- buttonList -->
      <el-button
        type="primary"
        size="mini"
        v-for="item in buttonList"
        :key="item.label"
        @click="tabClick(item.label)"
        :style="{
          backgroundColor: item.label === clickTab ? '#000E15 !important' : '',
        }"
      >
        {{ item.label }}
      </el-button>
    </div>

    <!-- 默认内容 -->
    <template v-if="clickTab == ''">
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
        class="right-container animated right-home"
        :class="{ fadeOutRight: !showPanel, fadeInRight: showPanel }"
      >
        <real-info style="height: 41px"></real-info>

        <legend-circle
          :legend="legendData"
          :iconLegend="iconData"
          style="margin-top: 4%"
        ></legend-circle>
      </div>
    </template>

    <!-- 干道内容 -->
    <template v-if="clickTab == '干道'">
      <div
        class="left-container animated"
        :class="{ fadeOutLeft: !showPanel, fadeInLeft: showPanel }"
      >
        <sq-card height="30%" :title="'基本信息'">
          <sq-table :columns="gdcolumns" :tableData="gdtableData"> </sq-table>
        </sq-card>
        <sq-card height="30%" class="sep" :title="'流量'">
          <sq-line
            :xData="demoLineData.xData"
            :data="demoLineData.data"
            :showtl="true"
          ></sq-line>
        </sq-card>
        <sq-card height="30%" class="sep" :title="'交通指数'">
          <sq-line
            :xData="demoLineData.xData"
            :data="demoLineData.data"
            :showtl="true"
          ></sq-line>
        </sq-card>
      </div>

      <div
        class="right-container animated"
        :class="{ fadeOutRight: !showPanel, fadeInRight: showPanel }"
      >
        <sq-card height="30%" :title="'拥堵里程'">
          <sq-line
            :xData="demoLineData.xData"
            :data="demoLineData.data"
            :showtl="true"
          ></sq-line>
        </sq-card>
        <sq-card height="30%" class="sep" :title="'平均速度'">
          <sq-line
            :xData="demoLineData.xData"
            :data="demoLineData.data"
            :showtl="true"
          ></sq-line>
        </sq-card>
        <sq-card height="30%" class="sep" :title="'停车次数'">
          <sq-line
            :xData="demoLineData.xData"
            :data="demoLineData.data"
            :showtl="true"
          ></sq-line>
        </sq-card>
      </div>
    </template>

    <!-- 区域内容 -->
    <template v-if="clickTab == '区域'">
      <div
        class="left-container animated"
        :class="{ fadeOutLeft: !showPanel, fadeInLeft: showPanel }"
      >
        <sq-card height="30%" :title="'基本信息'">
          <sq-table :columns="qycolumns" :tableData="qytableData"> </sq-table>
        </sq-card>
        <sq-card height="18.5%" class="sep" :title="'区域拥堵指数'">
          <sq-line
            :xData="demoLineData.xData"
            :data="demoLineData.data"
            :showtl="true"
          ></sq-line>
        </sq-card>
        <sq-card height="18.5%" class="sep" :title="'区域平均速度'">
          <sq-line
            :xData="demoLineData.xData"
            :data="demoLineData.data"
            :showtl="true"
          ></sq-line>
        </sq-card>
        <sq-card height="18.5%" class="sep" :title="'区域拥堵里程'">
          <sq-line
            :xData="demoLineData.xData"
            :data="demoLineData.data"
            :showtl="true"
          ></sq-line>
        </sq-card>
      </div>

      <div
        class="right-container animated"
        :class="{ fadeOutRight: !showPanel, fadeInRight: showPanel }"
      >
        <sq-card height="30%" :title="'区域驾入流量'">
          <sq-line
            :xData="demoLineData.xData"
            :data="demoLineData.data"
            :showtl="true"
          ></sq-line>
        </sq-card>
        <sq-card height="30%" class="sep" :title="'区域驾出流量'">
          <sq-line
            :xData="demoLineData.xData"
            :data="demoLineData.data"
            :showtl="true"
          ></sq-line>
        </sq-card>
        <sq-card height="30%" class="sep" :title="'区域检测流量'">
          <sq-line
            :xData="demoLineData.xData"
            :data="demoLineData.data"
            :showtl="true"
          ></sq-line>
        </sq-card>
      </div>
    </template>

    <!-- 行政区内容 -->
    <template v-if="clickTab == '行政区'">
      <div
        class="left-container animated"
        :class="{ fadeOutLeft: !showPanel, fadeInLeft: showPanel }"
      >
        <sq-card height="30%" :title="'基本信息'">
          <sq-table :columns="xzqcolumns" :tableData="xzqtableData"> </sq-table>
        </sq-card>
        <sq-card height="30%" class="sep" :title="'拥堵里程'">
          <sq-line
            :xData="demoLineData.xData"
            :data="demoLineData.data"
            :showtl="true"
          ></sq-line>
        </sq-card>
        <sq-card height="30%" class="sep" :title="'平均速度'">
          <sq-line
            :xData="demoLineData.xData"
            :data="demoLineData.data"
            :showtl="true"
          ></sq-line>
        </sq-card>
      </div>

      <div
        class="right-container animated"
        :class="{ fadeOutRight: !showPanel, fadeInRight: showPanel }"
      >
        <sq-card height="30%" :title="'拥堵里程'">
          <sq-line
            :xData="demoLineData.xData"
            :data="demoLineData.data"
            :showtl="true"
          ></sq-line>
        </sq-card>
        <sq-card height="30%" class="sep" :title="'实时在途车辆数'">
          <sq-line
            :xData="demoLineData.xData"
            :data="demoLineData.data"
            :showtl="true"
          ></sq-line>
        </sq-card>
        <!-- <sq-card height="30%" class="sep" :title="'停车次数'">
          <sq-line
            :xData="demoLineData.xData"
            :data="demoLineData.data"
            :showtl="true"
          ></sq-line>
        </sq-card> -->
      </div>
    </template>

    <!-- 底部内容 -->
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

    <legend-circle
      v-if="clickTab && clickTab != ''"
      :legend="legendData"
      class="legend-position fadeInUp animated"
      :style="!showPanel ? { right: '10px' } : { right: '650px' }"
    ></legend-circle>
  </div>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqVIconText from "@/components/icon-text/vindex.vue";
import RealInfo from "@/components/RealInfo/index.vue";
import LegendCircle from "@/components/legend-circle/index.vue";
import SqTable from "@/components/table/index.vue";
import SqLine from "@/components/Charts/Moreline.vue";
export default {
  components: {
    SqCard,
    SqVIconText,
    RealInfo,
    LegendCircle,
    SqTable,
    SqLine,
  },
  data() {
    return {
      buttonList: [{ label: "干道" }, { label: "区域" }, { label: "行政区" }],
      clickTab: "",
      ydDatas: [
        {
          id: 1,
          title: "干道数",
          data: { type: "text", val: "980", dw: "万" },
        },
        { id: 2, title: "区域数", data: { type: "text", val: 74, dw: "%" } },
        { id: 3, title: "行政区数", data: { type: "text", val: 33, dw: "%" } },
      ],

      legendData: [
        {
          label: "行政区",
          color: "#4B7902",
          check: true,
        },
        {
          label: "区域",
          color: "#F59A23",
          check: true,
        },
        {
          label: "干道",
          color: "#EC808D",
          check: true,
        },
      ],

      iconData: [
        {
          label: "公路",
          icon: "el-icon-loading",
          check: true,
        },
      ],

      gdcolumns: [
        { name: "序号", prop: "number" },
        { name: "干道名称", prop: "name" },
        { name: "干道长度", prop: "length" },
        { name: "操作", prop: "cz" },
      ],
      gdtableData: [
        { id: 1, number: 1, name: "线路1", length: 10, cz: "查看详情" },
        { id: 2, number: 2, name: "线路1", length: 10, cz: "查看详情" },
        { id: 3, number: 3, name: "线路1", length: 10, cz: "查看详情" },
        { id: 4, number: 4, name: "线路1", length: 10, cz: "查看详情" },
      ],

      qycolumns: [
        { name: "序号", prop: "number" },
        { name: "区域名称", prop: "name" },
        { name: "区域长度", prop: "length" },
        { name: "操作", prop: "cz" },
      ],
      qytableData: [
        { id: 1, number: 1, name: "线路1", length: 10, cz: "查看详情" },
        { id: 2, number: 2, name: "线路1", length: 10, cz: "查看详情" },
        { id: 3, number: 3, name: "线路1", length: 10, cz: "查看详情" },
        { id: 4, number: 4, name: "线路1", length: 10, cz: "查看详情" },
      ],

      xzqcolumns: [
        { name: "序号", prop: "number" },
        { name: "行政区名称", prop: "name" },
        { name: "行政区长度", prop: "length" },
        { name: "操作", prop: "cz" },
      ],
      xzqtableData: [
        { id: 1, number: 1, name: "线路1", length: 10, cz: "查看详情" },
        { id: 2, number: 2, name: "线路1", length: 10, cz: "查看详情" },
        { id: 3, number: 3, name: "线路1", length: 10, cz: "查看详情" },
        { id: 4, number: 4, name: "线路1", length: 10, cz: "查看详情" },
      ],

      demoLineData: {
        xData: [
          "00:00",
          "01:00",
          "02:00",
          "03:00",
          "04:00",
          "05:00",
          "06:00",
          "07:00",
          "08:00",
          "09:00",
          "10:00",
          "11:00",
          "12:00",
        ],
        data: [
          {
            name: "当前",
            data: [
              120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230,
            ],
            color: "#EC808D",
          },
          {
            name: "上周同期",
            data: [
              220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330,
            ],
            color: "#F59A23",
          },
          {
            name: "上周平均",
            data: [
              150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190, 330,
            ],
            color: "#4B7902",
          },
        ],
      },

      showPanel: true,
    };
  },
  mounted() {},
  methods: {
    tabClick(tab) {
      if (this.clickTab == tab) {
        this.clickTab = "";
      } else {
        this.clickTab = false;
        this.$nextTick(() => {
          this.clickTab = tab;
        });
      }
    },
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
.right-home {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
}
.bottom-tab-button {
  position: fixed;
  left: 50%;
  bottom: 4%;
  z-index: 50;
  transform: translateX(-50%);
}
.legend-position {
  position: fixed;
  bottom: 8%;
  z-index: 50;
}
</style>
