<template>
  <div class="app-container">
    <!-- 左侧面板 -->
    <div
      class="left-container animated"
      :class="{ fadeOutLeft: !showPanel, fadeInLeft: showPanel }"
    >
      <sq-card height="30%" :title="'公路'">
        <div class="sumvalue">
          <div>公路总里程:23456公里</div>
          <div>高速总里程:5586公里</div>
        </div>
        <div
          style="
            padding: 15px;
            height: calc(100% - 60px);
            width: calc(100% - 30px);
          "
        >
          <sq-table :columns="columns" :tableData="tableData"> </sq-table>
        </div>
      </sq-card>
      <sq-card height="30%" :title="'航班'" style="margin-top: 4%">
        <div class="sumvalue">
          <div>日均航班数:234航班</div>
        </div>
        <div
          style="
            padding: 15px;
            height: calc(100% - 60px);
            width: calc(100% - 30px);
          "
        >
          <sq-table :columns="columns" :tableData="tableData1"> </sq-table>
        </div>
      </sq-card>
      <sq-card height="30%" :title="'航运'" style="margin-top: 4%">
        <div class="sumvalue">
          <div>日均往来船舶总量:40条</div>
        </div>
        <div
          style="
            padding: 15px;
            height: calc(100% - 60px);
            width: calc(100% - 30px);
          "
        >
          <sq-table :columns="columns" :tableData="tableData2"> </sq-table>
        </div>
      </sq-card>
    </div>

    <!-- 右侧面板 -->
    <div
      class="right-container animated"
      :class="{ fadeOutLeft: !showPanel, fadeInLeft: showPanel }"
    >
      <sq-card height="30%" :title="'铁路、城际轨道'">
        <div
          style="
            padding: 15px;
            height: calc(100% - 30px);
            width: calc(100% - 30px);
          "
        >
          <sq-table :columns="rightcolumns" :tableData="righttableData">
          </sq-table>
        </div>
      </sq-card>

      <sq-card height="30%" class="sep" :title="'客运分担占比'">
        <div class="chart">
          <sq-pie :data="pdata1"></sq-pie>
        </div>
      </sq-card>

      <legend-circle
        :legend="legendData"
        :iconLegend="iconData"
        style="margin-top: 4%"
      ></legend-circle>
    </div>

    <!-- 收缩展开按钮 -->
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

    <!-- 背景 -->
    <div class="left-bg" v-if="showPanel"></div>
    <div class="right-bg" v-if="showPanel"></div>
  </div>
</template>
<script>
import SqCard from "@/components/Card/index.vue";
import SqTable from "@/components/table/index.vue";
import SqPie from "@/components/Charts/Pie.vue";
import LegendCircle from "@/components/legend-circle/index.vue";
export default {
  components: {
    SqCard,
    SqTable,
    SqPie,
    LegendCircle,
  },
  data() {
    return {
      odtime: "",
      showPanel: true,

      columns: [
        { name: "", prop: "name" },
        { name: "客运", prop: "ky" },
        { name: "货运", prop: "hy" },
      ],
      tableData: [
        { id: 1, name: "车辆数", ky: "xxxx", hy: "xxxx" },
        { id: 2, name: "日均运量", ky: "xxxx", hy: "xxxx" },
        { id: 3, name: "年运量", ky: "xxxx", hy: "xxxx" },
      ],
      tableData1: [
        { id: 1, name: "日均运量", ky: "xxxx", hy: "xxxx" },
        { id: 2, name: "年运量", ky: "xxxx", hy: "xxxx" },
      ],
      tableData2: [
        { id: 1, name: "日均运量", ky: "xxxx", hy: "xxxx" },
        { id: 2, name: "年运量", ky: "xxxx", hy: "xxxx" },
      ],

      rightcolumns: [
        { name: "城际轨道", prop: "cj" },
        { name: "铁路", prop: "tl" },
      ],
      righttableData: [
        { id: 1, cj: "日客：7707", tl: "日客：7707" },
        { id: 2, cj: "年客：7707", tl: "年客：7707" },
        { id: 3, cj: "", tl: "日客：7707" },
        { id: 4, cj: "", tl: "年客：7707" },
      ],

      pdata1: [
        { value: 543, name: "公路", dw: "辆" },
        { value: 783, name: "铁路", dw: "次" },
        { value: 83, name: "航空", dw: "次" },
        { value: 43, name: "航运", dw: "艘" },
      ],

      legendData: [
        {
          label: "1小时",
          color: "#4B7902",
          check: true,
        },
        {
          label: "2小时",
          color: "#F59A23",
          check: true,
        },
        {
          label: "3小时",
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
        {
          label: "铁路",
          icon: "el-icon-loading",
          check: true,
        },
        {
          label: "城际",
          icon: "el-icon-loading",
          check: true,
        },
        {
          label: "公交",
          icon: "el-icon-loading",
          check: true,
        },
        {
          label: "港口",
          icon: "el-icon-loading",
          check: true,
        },
      ],
    };
  },
  mounted() {},
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
.right-container {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
</style>
