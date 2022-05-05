<template>
  <div>
    <!-- <a-button type="primary" @click="showModal">Open Modal of 1000px width</a-button> -->
    <a-modal
      v-model:visible="visible"
      width="1000px"
      title="Basic Modal"
      @ok="handleOk"
    >
      <a-table :columns="colunms" :data-source="data"> </a-table>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, ref } from "vue";


const columns = [
  {
    title: 'project',
    dataIndex: 'project',
   },
]
const visible = ref(false);
const emit = defineEmits(["ok"]);
// const props = defineProps({
//   modalVisible: Boolean,
//   default: false,

// });
const open = () => {
  console.log("open");
  visible.value = true;
};
defineExpose({
  open,
});
// export default defineComponent({
//   setup() {
//     const visible = ref<boolean>(false);

//     const showModal = () => {
//       visible.value = true;
//     };

const handleOk = (e: MouseEvent) => {
  // console.log(e);
  emit("ok", e);
  visible.value = false;
};
//     return {
//       visible,
//       showModal,
//       handleOk,
//     };
//   },
// });
</script>
