import type { RouteRecordRaw } from "vue-router";
// import {resolve} from "path"
// import TabsView from '@/layouts/tabs/TabsView.vue';
// import BlankView from '@/layouts/BlankView.vue'
// import PageView from '@/layouts/pageView.vue'

// const carbonManage = () => import("@/layouts/BlankView.vue");
// const rule = ()=>import("@/views/carbonManage/index.vue");
const view = {
  tabs: () => import("@/layouts/tabs/TabsView.vue"),
  blank: () => import("@/layouts/BlankView.vue"),
  page: () => import("@/layouts/pageView.vue"),
};

const routes: RouteRecordRaw[] = [
  {
    name: "首页",
    path: "/",
    component: view.tabs,
    children: [
      {
        name: "用户管理",
        path: "userManage",
        component: () => import("@/views/userManage/index.vue"),
        children: [
          // {
          //   name:"用户列表",
          //   path:"list",
          //   component: () => import
          // },
          // {
          //   name: "用户详情",
          //   path: "detail",
          //   component: rule,
          // },
        ],
      },
    ],
  },
  {name: "Test", path: "/test", component: ()=>import("@/views/Test.vue")},
];
console.log("localRoutes" + document.location.toString());
export default routes;
