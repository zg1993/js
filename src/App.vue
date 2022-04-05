<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import { ref, provide } from "vue";
import { THEME_KEY } from "vue-echarts";
import {useRoute, useRouter} from 'vue-router'
const router = useRouter()
router.push({path: "/about"})
console.log(router.getRoutes())
let data = {
  title: {
    text: "Traffic Sources",
    left: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"],
  },
  series: [
    {
      name: "Traffic Sources",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 335, name: "Direct" },
        { value: 310, name: "Email" },
        { value: 234, name: "Ad Networks" },
        { value: 135, name: "Video Ads" },
        { value: 1548, name: "Search Engines" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
}
provide(THEME_KEY, "dark");
const option = ref(data);
const chartEvents = (e:any)=>{
  console.log('hello')
  console.log(e);
}

</script>

<template>
<br>
  <router-link to="/">go to home</router-link>
  <router-link to="/about">got to about</router-link>
  <router-link to="/users/ssafdadsf">User</router-link>
  <p>
  <router-link :to="{name: 'user', params: {id: '11111122222'}}">named->userId</router-link>
</p>
<router-view></router-view>
  <img alt="Vue logo" src="./assets/logo.png" />
  <a href="http://localhost:3000/about">click to about</a>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <v-chart class="chart" :option="option" @click="chartEvents"/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.chart {
  height: 40vh;
}
</style>
