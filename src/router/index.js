import Vue from 'vue'
import VueRouter from 'vue-router'

// 页面二级容器
import Container from '../views/Container/Index.vue'
// 默认首页
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Index
  // },
  // 创建二级路由页面
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/qd/dashboard/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: "/urban/monitor",
    name: "urban-monitor",
    component: () => import('../views/qd/urban/monitor/monitor.vue'),
    meta: {
      title: '城市群运行监测-运行监测'
    }
  },
  {
    path: "/urban/urban",
    name: "urban-urban",
    component: () => import('../views/qd/urban/urban/analysis.vue'),
    meta: {
      title: '城市群运行监测-城市分析'
    }
  },
  {
    path: "/urban/mode",
    name: "urban-mode",
    component: () => import('../views/qd/urban/mode/analysis.vue'),
    meta: {
      title: '城市群运行监测-城际交通方式分析'
    }
  },
  {
    path: '/city/home',
    name: 'city-home',
    component: () => import('../views/qd/city/home.vue'),
    meta: {
      title: '城市级交通监测-综合情况'
    }
  },
  {
    path: '/city/traffic/car',
    name: 'city-traffic-car',
    component: () => import('../views/qd/city/traffic/car.vue'),
    meta: {
      title: '城市级交通监测-交通运行-车辆运行监测可视化'
    }
  },
  {
    path: '/city/traffic/road',
    name: 'city-traffic-road',
    component: () => import('../views/qd/city/traffic/road.vue'),
    meta: {
      title: '城市级交通监测-交通运行-道路运行监测可视化'
    }
  },
  {
    path: '/city/traffic/static',
    name: 'city-traffic-static',
    component: () => import('../views/qd/city/traffic/static.vue'),
    meta: {
      title: '城市级交通监测-交通运行-静态交通运行监测可视化'
    }
  },
  {
    path: '/city/safe',
    name: 'city-safe',
    component: () => import('../views/qd/city/safe/safe.vue'),
    meta: {
      title: '城市级交通监测-交通安全监测可视化'
    }
  },
  {
    path: '/city/service/bus',
    name: 'city-service-bus',
    component: () => import('../views/qd/city/service/bus.vue'),
    meta: {
      title: '城市级交通监测-公共交通服务-地面公交专题监测可视化'
    }
  },
  {
    path: '/city/service/subway',
    name: 'city-service-subway',
    component: () => import('../views/qd/city/service/subway.vue'),
    meta: {
      title: '城市级交通监测-公共交通服务-轨道交通专题监测可视化'
    }
  },
  {
    path: '/city/service/taxi',
    name: 'city-service-taxi',
    component: () => import('../views/qd/city/service/taxi.vue'),
    meta: {
      title: '城市级交通监测-公共交通服务-出租车网约车专题监测可视化'
    }
  },
  {
    path: '/city/service/slow',
    name: 'city-service-slow',
    component: () => import('../views/qd/city/service/slow.vue'),
    meta: {
      title: '城市级交通监测-公共交通服务-慢行交通专题监测可视化'
    }
  },
  {
    path: '/city/service/carbon',
    name: 'city-service-carbon',
    component: () => import('../views/qd/city/service/carbon.vue'),
    meta: {
      title: '城市级交通监测-公共交通服务-能耗排放专题监测可视化'
    }
  },
  {
    path: '/city/common',
    name: 'city-common',
    component: () => import('../views/qd/city/common/common.vue'),
    meta: {
      title: '城市级交通监测-公众参与'
    }
  },
  {
    path: '/roadnet',
    name: 'roadnet',
    component: () => import('../views/qd/roadnet/roadnet.vue'),
    meta: {
      title: '路网级中观运行监测'
    }
  },


  // {
  //   path: '/visitor',
  //   name: 'visitor',
  //   component: () => import('../views/sq/visitor/index.vue'),
  //   meta: {
  //     title: "访客"
  //   }
  // },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('../views/sq/login.vue'),
  //   meta: {
  //     title: "登录"
  //   }
  // },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = to.meta.title
  next()
}
)

export default router
