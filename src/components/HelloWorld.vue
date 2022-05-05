<script setup lang="ts">
import { ref, reactive, computed , nextTick,watch} from "vue";
import { Modal } from "ant-design-vue";
import { useRouter } from "vue-router";
import todoButton from "./todoButton.vue";
// import selectModal from "./../views/antDesign/selectModal.vue";
import selectModal from "@/views/antDesign/selectModal.vue";
import F from './f.vue'

defineProps<{ msg: string }>();
const router = useRouter();
const count = ref(0);
type SelectInstance = InstanceType<typeof selectModal>;
const Select = ref<EditInstance | null>();
// const Select = ref();
const clickButton = () => {
  console.log(router);
  router.push("/users/1234");
};
const countDown = () => {
  let secondsToGo = 5;
  const modal = Modal.success({
    title: "This is a notification message",
    content: `This modal will be destroyed after ${secondsToGo} second.`,
  });
  const interval = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `This modal will be destroyed after ${secondsToGo} second.`,
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
    modal.destroy();
  }, secondsToGo * 1000);
};
// const modalVisible :boolean = ref(false);
const showModal = ()=>{
  console.log("show Modal");
  Select.value.open()
  
  // Select.value.open()
}
const onSelect = (e) => {
  console.log(e);
  
  // modalVisible.value = false;
}
interface Stu {
  name: string,
          age: number
}
const getMap = (): Stu =>{
  return {name: 'zg',
          age : 11}
}
const m = computed(()=>{return getMap()})
const dict1 = reactive({
  x: 'name',
  y: 'age',
})
console.log(typeof dict1);
interface D{
  name:string,
  age:number
}
type k1 = keyof D;
const name = computed(()=>{return m[dict1.y as keyof typeof m]})
const formState = reactive({})
const see = ref(false);
const formRef = ref()
const value = ref('');
const ff = ref()
const onOpenDailog = async ()=>{
  // Object.assign(formState,{name: ''})
  see.value = true;
  // await nextTick( ()=>{
  //   console.log(formRef.value)
  //   formRef.value.resetFields()

  // })
  
  
  
 
  
}
const cancel = ()=>{
  see.value=false
}
const ok = ()=>
{
formRef.value.resetFields()
see.value = false;
console.log(formState)

}

// watch(
//     () => formRef.value,
//     (newVal, oldVal) => {
//       console.log(see.value)
//       console.log(`watch监听变化前的数据：${oldVal}`)
//       console.log(`watch监听变化后的数据：${newVal}`)
//       if (newVal){
//         console.log(formRef.value)
//         formRef.value.resetFields()
//       }
//     },
//     {
      
      
//     }
//   )
const onOpenDailog1 = ()=>{
ff.value.open()
}
</script>

<template>
<div>
  {{value}}111
   <F ref='ff'/>
   
  <a-modal :visible="see" @ok="ok" title="dialog" @cancel="cancel" destroyOnClose>
  <a-form ref="formRef"  :model="formState" >
    <a-form-item label="Activity name">
      <a-input v-model:value="formState.name" />
    </a-form-item>
    </a-form>
  </a-modal>
  <a-descriptions title="User Info">
    <a-descriptions-item label="UserName">Zhou Maomao {{ (getMap() as any)[dict1.x]}}</a-descriptions-item>
    <a-descriptions-item label="Address">
      {{m[dict1.y as keyof typeof m]}}No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China 
    </a-descriptions-item>
    </a-descriptions>
   <h1>{{ msg }}</h1>
  
    <todoButton class="btn-primary">add todo</todoButton>
  
  <a-button @click="countDown">Open modal to close in 5s</a-button>
  
  <a-button type="primary">Primary Button{{ count }}</a-button>

  <a-button @click="onOpenDailog">Default Button</a-button>
  <a-button @click="onOpenDailog1">Default1 Button</a-button>
  <selectModal @ok="onSelect" ref="Select"></selectModal>
  </div>
  
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
.btn-primary {
  width: 30px;
  height: 30px;
  color: red;
}
</style>
