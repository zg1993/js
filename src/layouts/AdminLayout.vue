<template>
  <a-layout>
    <a-layout-header>
      <div class="logo"></div>
      <a-menu mode="horizontal" theme="dark" class="layout-header-menu">
        <a-menu-item key="test" @click="router.push('/test')">Test</a-menu-item>
        <a-menu-item key="2">Nav 2</a-menu-item>
        <a-menu-item key="3">Nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" class="layout-sider">
        <!-- <a-menu mode="inline" :style="{height: '100%', borderRight: 0}"> -->
        <a-menu mode="inline" class="layout-sider-menu">
          <a-sub-menu key="sub1">
            <template #title><span>subnav1</span></template>
            <a-menu-item key="1">option1</a-menu-item>
            <a-menu-item key="2">option2</a-menu-item>
            <a-menu-item key="3">option3</a-menu-item>
            <a-menu-item key="4">option4</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>subnav2</span> </template>
              <a-menu-item key="1">option1</a-menu-item>
              <a-menu-item key="2">option2</a-menu-item>
              <a-menu-item key="3">option3</a-menu-item>
              <a-menu-item key="4">option4</a-menu-item>
              <a-menu-item key="41">option4</a-menu-item>
              <a-menu-item key="42">option4</a-menu-item>
              <a-menu-item key="43">option4</a-menu-item>
              <a-menu-item key="44">option4</a-menu-item>
              <a-menu-item key="45">option4</a-menu-item>
              <a-menu-item key="46">option4</a-menu-item>
              <a-menu-item key="11">option1</a-menu-item>
              <a-menu-item key="21">option2</a-menu-item>
              <a-menu-item key="31">option3</a-menu-item>
              <a-menu-item key="41">option4</a-menu-item>
              <a-menu-item key="411">option4</a-menu-item>
              <a-menu-item key="421">option4</a-menu-item>
              <a-menu-item key="431">option4</a-menu-item>
              <a-menu-item key="441">option4</a-menu-item>
              <a-menu-item key="451">option4</a-menu-item>
              <a-menu-item key="461">option4</a-menu-item>
           
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-content class="layout-content">
          <slot></slot>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import {useRouter,} from "vue-router"
const router = useRouter()

</script>
<style lang="less" scoped>
.logo{
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
}
.layout-header-menu{
  
}

.layout-sider{
  background: #fff;
}
.layout-sider-menu{
  height: 100%;
}
.layout-content{
  min-height: 70vh;
}
</style>
