<template>
  <div class="sq-header">
    <div class="menu">
      <div class="nav-button" v-for="item in menusLeft" :key="item.id" :class="{'nav-button-click': curPath == item.path}">
        <div v-if="item.children" class="submenu">
          <span class="nav-button-text">{{ item.title }}</span>
          <ul class="menu2">
            <li v-for="item2 in item.children" :key="item2.id">

              <div v-if="item2.children">
                <span class="nav-button-text">{{ item2.title }}</span>
                <ul class="menu3">
                  <li v-for="item3 in item2.children" :key="item3.id">
                    <router-link :to="item3.path">
                      <span class="nav-button-text">{{ item3.title }}</span>
                    </router-link>
                  </li>
                </ul>
              </div>
              
              <router-link v-else :to="item2.path">
                <span class="nav-button-text">{{ item2.title }}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <router-link v-else :to="item.path">
          <span class="nav-button-text">{{ item.title }}</span>
        </router-link>
      </div>
    </div>
    
    <div class="title">城市交通运行状态智能监测
      <!-- <iframe style="padding: 0;" width="500" height="40" src="https://i.tianqi.com/?c=code&amp;a=getcode&amp;id=40&amp;icon=1" frameborder="0"></iframe> -->
    </div>
    <div class="menu rg">
      <div class="nav-button" v-for="item in menusRight" :key="item.id" :class="{'nav-button-click': curPath == item.path}">
        <router-link :to="item.path">
          <span class="nav-button-text">{{ item.title }}</span>
        </router-link>
      </div>
      <div class="nav-right-icon-time">
        <div class="time-class">
          <div>{{ week }}</div>
          <div>{{ time }}</div>
        </div>
        <div class="nav-right-icon-time-line"></div>
        <span class="temp">30℃</span>
        <div class="nav-right-icon-time-line"></div>
        <i class="el-icon-user-solid" style="cursor:pointer;" @click="handleLogout"></i>
      </div>
    </div>

  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    showMenu: {
      type: Boolean,
      default: true
    },
    isVisitor: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ]),
  },
  data() {
    return {
      menusLeft: [
        { 
          id: 'l1', title: "城市群运行监测", icon: "", path: "/sq/data",
          children: [
            { id: 'l11', title: '运行监测', path: '' },
            { id: 'l12', title: '城市分析', path: '' },
            { id: 'l13', title: '城际交通方式分析', path: '' }
          ]
        },
        { 
          id: 'l2', title: "城市级交通监测", icon: "", path: "",
          children: [
            { id: 'l20', title: '综合情况', path: '/city/home' },
            {
              id: 'l21', title: '交通运行', path: '',
              children: [
                { id: 'l211', title: '车辆运行监测可视化', path: '/city/traffic/car' },
                { id: 'l212', title: '道路运行监测可视化', path: '/city/traffic/road' },
                { id: 'l213', title: '静态交通运行监测可视化', path: '/city/traffic/static' }
              ]
            },
            { id: 'l22', title: '交通安全监测可视化', path: '/city/safe' },
            {
              id: 'l23', title: '公共交通服务', path: '',
              children: [
                { id: 'l231', title: '地面公交专题监测可视化', path: '/city/service/bus' },
                { id: 'l232', title: '轨道交通专题监测可视化', path: '/city/service/subway' },
                { id: 'l233', title: '出租车网约车专题监测可视化', path: '/city/service/taxi' },
                { id: 'l234', title: '慢行交通专题监测可视化', path: '/city/service/slow' },
                { id: 'l235', title: '能耗排放专题监测可视化', path: '/city/service/carbon' }
              ]
            },
            { id: 'l24', title: '公众参与', path: '/city/common' },
          ]
        },
        { 
          id: 'l3', title: "路网级中观运行监测", icon: "", path: "/roadnet" 
        },
      ],
      menusRight: [
        { id: 'r1', title: "路口级交通运行仿真", icon: "", path: "/sq/supply" },
      ],
      week: "",
      time: "",
      curPath: ''
    }
  },
  watch: {
    '$route'(to, from) {
      this.curPath = to.path
    }
  },
  mounted() {
    this.getNowTime()
    console.log('-------------------', this.roles)
  },
  methods: {
    getNowTime() {
      // 获取今天是周几
      let week = new Date().getDay();
      let weekList = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      this.week = weekList[week];

      // 获取今天是YYYY-MM-DD
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      // 如果月份小于10，则前面加0
      if (month < 10) {
        month = "0" + month;
      }
      // 如果天数小于10，则前面加0
      if (day < 10) {
        day = "0" + day;
      }
      this.time = year + "-" + month + "-" + day;
    },
    async handleLogout() {
      await this.$store.dispatch('user/logout')
      window.location.href = '/web/#/login'
    }
  }
}
</script>
<style lang="scss" scoped>

.submenu{
  ul{
    list-style: none;margin:0;padding:0;
  }
  .menu2{
    position: absolute;
    z-index: 9999999;
    top: 45px;left: 0;
    li{
      line-height: 40px;
      background: rgba(0, 0, 0, 0.9);
      color: #fff;
      text-align: center;
      padding: 0 10px;
      position: relative;
      border-bottom: solid 1px #fff;
      span{
        white-space: nowrap;
      }
    }
    display: none;
    .nav-button-text{
      background-image: -webkit-linear-gradient(top, #fff, #d5f7fd, #d5f7fd) !important;
    }
  }
  .menu3{
    position: absolute;
    left: 164px;top:0;
    display: none;
    .nav-button-text{
      background-image: -webkit-linear-gradient(top, #fff, #d5f7fd, #d5f7fd) !important;
    }
  }
}
.nav-button:hover{
  .menu2{display: block;}
  .menu2 > li:hover{
    background: rgba(0, 255, 255, 0.9);
    .menu3{
      display: block;
      li:hover{
        background: rgba(0, 255, 255, 0.9);
      }
    }
  }
}

.sq-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title{
    
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "HY";
    // 文字投影
    text-shadow: 0 5px 10px #000;
    padding: 10px 0 0 0;
  }
  .menu{
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0 0 0 20px;
    &.rg{
      padding: 0 20px 0 0;
      text-align: right;
      justify-content: flex-end;
      .nav-button{
        margin: 0 15px;
      }
    }
  }
}
.nav-button {
  font-family: "HY";
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center !important;
  background-size: cover !important;
  position: relative;
  cursor: pointer;
  &:first-child{
    margin-left: 0 !important;
  }
  &:last-child{
    margin-right: 0 !important;
  }
  .nav-button-text {
    background-image: -webkit-linear-gradient(top, #fff, #d5f7fd, #d5f7fd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
  }

  // 去掉下划线
  a {
    text-decoration: none;
  }
  .router-link-active {
    text-decoration: none;
  }
}
.nav-button::before {
  content: "";
  position: absolute;
  
  background: url("@/assets/images/public/navicon.png");
  background-position: center !important;
  background-size: cover !important;
}
.nav-button::after {
  content: "";
  position: absolute;
  // 背景图旋转180°
  transform: rotate(180deg);
  background: url("@/assets/images/public/navicon.png");
  background-position: center !important;
  background-size: cover !important;
}
.nav-button-click {
  background: url("@/assets/images/public/navbackclick.png");
  .nav-button-text {
    background-image: -webkit-linear-gradient(top, #fff, #ffbc4d);
  }
}
.nav-button-click::before {
  content: "";
  position: absolute;
  background: url("@/assets/images/public/naviconclick.png");
  background-position: center !important;
  background-size: cover !important;
}
.nav-button-click::after {
  content: "";
  position: absolute;
  // 背景图旋转180°
  transform: rotate(180deg);
  background: url("@/assets/images/public/naviconclick.png");
  background-position: center !important;
  background-size: cover !important;
}

.nav-right-icon-time {
  color: #fff;
  display: flex;
  align-items: center;
  .time-class {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    letter-spacing: 2px;
    font-weight: 900;
    div{
      font-size: 12px;
    }
    .temp{
      font-size: 12px;
    }
  }
  .nav-right-icon-time-line {
    height: 26px;
    width: 2px;
    background: rgba($color: #fff, $alpha: 0.35);
    margin: 0 3px;
  }
}
</style>
