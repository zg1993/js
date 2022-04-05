<template>
    <button @click="clickButton">click {{count}}</button>
    <div>{{name}}</div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
export default {
    data(){
        return {
            name: "zg",
            count: 3,
        }
    },
    methods: {
        clickButton(){
            console.log('clickButton');
            this.count++;
        }
    }
}
</script>
<style></style>


