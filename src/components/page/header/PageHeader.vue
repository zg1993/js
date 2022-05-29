<template>
  <div class="breadcrumb">
    <a-breadcrumb>
      <a-breadcrum-itme :key="index" v-for="(item, index) in breadcrumb">
        <router-link :to="{ path: item.path }">
          {{ item.meta.title }}
        </router-link>
      </a-breadcrum-itme>
    </a-breadcrumb>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
// import { RouteLocationMatched } from "vue-router";

const props = defineProps(["breadcrumb"]);
console.log(props);
</script>
<style lang="less" scoped></style>
