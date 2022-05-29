<template>
  <div class="page-layout">
      <page-header :breadcrumb="breadcrumb"></page-header>
    <div ref="page" class="page-content">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import PageHeader from '@/components/page/header/PageHeader.vue';
import {computed} from 'vue';
import {useRoute, RouteLocationMatched} from 'vue-router';
const route = useRoute()

const getRouteBreadcrumb = ()=>{
    let breadcrumb: RouteLocationMatched[]= []
    console.log(route)
    route.matched.forEach(item=>{
        breadcrumb.push(item)
    })
    breadcrumb.shift();
    return breadcrumb
}
const breadcrumb = computed(()=>{
    return getRouteBreadcrumb()
})
</script>
