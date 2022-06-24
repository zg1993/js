import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { processExpression } from '@vue/compiler-core'
import {resolve} from 'path'


console.log(__dirname)
console.log(resolve(__dirname, 'src'))
function pathResolve(){
  console.log(process.cwd);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    "process.env": {}
  },
  resolve: {
    alias:{
      // "@": '/src',
      "@": resolve(__dirname, 'src'),
    },
  }
})
