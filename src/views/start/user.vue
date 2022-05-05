<template>
    <div>
    Use1r: {{$route.params}}
    name1: {{name}}
    </div>
</template>

<script>
    import {useRouter} from "vue-router";
export default {
  data: function(){
      return {
          name: 'zg'
      }
  },
  mounted:()=>{
      console.log('mounted')
    //   let Mock = require('mockjs')
  },
  methods: {

  },
}
const router = useRouter()
// setTimeout(() => {    
//     console.log('router push')
//     router.push({path: 'about', hash:'#team'})
// }, 3000);
</script>

<style></style>
