<template>
<a-modal :visible="see" @ok="ok" title="dialog" @cancel="cancel">
<a-form ref="formRef"  :model="formState" >
    <a-form-item label="Activity name" name="name">
      <a-input v-model:value="formState.name" />
    </a-form-item>
</a-form>
</a-modal>
</template>
<script lang="ts" setup>
import { defineEmits,ref ,reactive,defineExpose, nextTick, onMounted,onUpdated} from 'vue';
const formRef = ref()
const formState = reactive({
    name: '',
    age: '',
})
const emit= defineEmits(['ok']);
const open = async ()=>{
    console.log(formState)
    see.value = true
    await nextTick()
    console.log(formRef.value)
    formRef.value.resetFields()
    console.log(formState)
    
}
const see = ref(false)
// onMounted(()=>{
//     console.log('onMounted')
//     console.log(formRef.value)
// })
// onUpdated(()=>{
//     console.log('onupdated')
//     console.log(formRef.value)
// })
const ok = ()=>
{
    see.value = false
    emit('ok')
}

defineExpose({
    open,
})

</script>
