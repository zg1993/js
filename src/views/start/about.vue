<template>
    <div>
     <button type="button" @click="timer">timer11{{num}}</button>
     <a-form :model="formState">
     <a-input v-model:value="formState.name"></a-input>
     </a-form>
    </div>
</template>
<script setup lang="ts">
import {ref, reactive} from 'vue';
import { useRoute } from 'vue-router';
const num = ref(0);
const route = useRoute()
const formState = ref({
    name: ''
});
// console.log(route.query)
// console.log(route.params)
function timer() {
    // console.log('--33---');
    num.value++;
    // console.log(num.value);
    // setInterval(()=>{
    //     console.log(num);
    //     num++;
    // }, 1000*2);
}
</script>
<style></style>