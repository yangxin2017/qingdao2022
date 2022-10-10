<template>
  <div class="app-container">
    <!-- 左侧面板 -->
    <div
      class="left-container animated"
      :class="{ fadeOutLeft: !showPanel, fadeInLeft: showPanel }"
    >
      <sq-card height="40%" :title="'1小时通勤城市'">
        <div
          style="
            padding: 15px;
            height: calc(100% - 30px);
            width: calc(100% - 30px);
          "
        >
          <sq-table :columns="columns" :tableData="tableData"> </sq-table>
        </div>
      </sq-card>
    </div>

    <!-- 右侧面板 -->
    <div
      class="right-container animated"
      :class="{ fadeOutLeft: !showPanel, fadeInLeft: showPanel }"
    >
      <legend-circle :legend="legendData"></legend-circle>
      <div class="odTime">
        OD热力：
        <el-date-picker
          v-model="odtime"
          type="datetime"
          placeholder="选择日期时间"
          size="mini"
        >
        </el-date-picker>
      </div>
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
import LegendCircle from "@/components/legend-circle/index.vue";
export default {
  components: {
    SqCard,
    SqTable,
    LegendCircle,
  },
  data() {
    return {
      odtime: "",
      showPanel: true,

      columns: [
        { name: "城市名称", prop: "cityname" },
        { name: "日客运总量", prop: "ky" },
        { name: "日货运总量", prop: "hy" },
      ],
      tableData: [
        { id: 1, cityname: "xxxx", ky: "xxxx", hy: "xxxx" },
        { id: 2, cityname: "xxxx", ky: "xxxx", hy: "xxxx" },
        { id: 3, cityname: "xxxx", ky: "xxxx", hy: "xxxx" },
        { id: 4, cityname: "xxxx", ky: "xxxx", hy: "xxxx" },
        { id: 5, cityname: "xxxx", ky: "xxxx", hy: "xxxx" },
        { id: 6, cityname: "xxxx", ky: "xxxx", hy: "xxxx" },
        { id: 7, cityname: "xxxx", ky: "xxxx", hy: "xxxx" },
        { id: 8, cityname: "xxxx", ky: "xxxx", hy: "xxxx" },
        { id: 9, cityname: "xxxx", ky: "xxxx", hy: "xxxx" },
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
  justify-content: flex-end;
  flex-direction: column;
  .odTime {
    margin-top: 4%;
    color: #fff;
  }
}
</style>
