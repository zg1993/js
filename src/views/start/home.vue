<template>
<div>
    <button @click="clickButton">click {{count}} home</button>
    <div>{{name}}</div>
    <button @click="toAbout">About111</button>
    </div>
    <F ref="modal"></F>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import { useRouter, useRoute } from "vue-router";
import F from '@/components/f.vue'
const count = ref(0)
const modal = ref()
const name = ref('')
const clickButton = ()=>{
    count.value++;
    modal.value.open()
    }

const router = useRouter()
const route = useRoute()
const toAbout = ()=>{
    router.push({
        name: 'A',
        path: '/about',
        query: {
            content: 'sfsa',
            id : '001',
        },
        params: {
            name: 'zg',
            age: 40,
        }
    })
    // console.log(route.params)
    // console.log(router.options.routes)
}

</script>
<style></style>


