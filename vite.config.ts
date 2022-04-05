import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { processExpression } from '@vue/compiler-core'
import {resolve} from 'path'




function pathResolve(){
  console.log(process.cwd);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    "process.env": {}
  },
  // resolve: {
  //   alias:{
  //     "@": pathResolve('src') + '/',
  //   },
  // }
})
