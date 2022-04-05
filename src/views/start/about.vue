<template>
    <div>
     <button type="button" @click="timer">timer{{num}}</button>
    </div>
</template>
<script setup lang="ts">
import {ref, reactive} from 'vue';
const num = ref(0);


function timer() {
    console.log('--33---');
    num.value++;
    console.log(num.value);
    // setInterval(()=>{
    //     console.log(num);
    //     num++;
    // }, 1000*2);
}
</script>
<style></style>