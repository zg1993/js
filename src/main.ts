import { createApp } from "vue";
import App from "./App.vue";
import ECharts, { THEME_KEY } from "vue-echarts";
import { use } from "echarts/core";
import { PieChart,LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,

} from "echarts/components";
// import {Form} from 'ant-design-vue'

import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// import {Button, message} from "ant-design-vue";
// router 
import setUpRouter from './router/index';
import {mockXHR} from './mock/index.ts'

use([
  CanvasRenderer,
  LineChart,
  PieChart,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);

// console.log(process.env)
// console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'mock') {
  // require('./mock/index.ts')
  mockXHR()
}
const app = createApp(App);
setUpRouter(app);
app.use(Antd);
app.component("v-chart", ECharts);
app.mount("#app");
// app.config.globalProperties.$message = message

