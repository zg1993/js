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

import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import {Button, message} from "ant-design-vue";
// router 
import setUpRouter from './router/index';

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

console.log("-----"+ process.env)

const app = createApp(App);
setUpRouter(app);
app.use(Antd);
app.component("v-chart", ECharts);
app.use(Button).mount("#app");
app.config.globalProperties.$message = message

