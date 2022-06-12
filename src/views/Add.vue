<!--  -->
<template>
  <div class="add-box">
    <button @click="store.toggleTheme">
      toggle
    </button>
    <i class="iconfont icon-clipboard-todo"></i> @github: whs12138/TODO
    <h3> 使至塞上</h3>
    <p>单车欲问边，属国过居延。</p>
    <p>征蓬出汉塞，归雁入胡天。</p>
    <p>大漠孤烟直，长河落日圆。</p>
    <p>萧关逢候骑，都护在燕然。</p>
  </div>
</template>

<script setup>
import { } from 'vue'
import { mainStore } from '../store';
import { storeToRefs } from 'pinia'

const store = mainStore()
const { themeTxt, themeBgc }  = storeToRefs(store)
</script>

<style lang="scss" scoped>
* {
  transition: color 0.4s ease;
  color: v-bind(themeTxt);
}
button {
  transition: all 0.4s ease;
  padding: 2px 4px;
  background-color: v-bind(themeBgc);
  border: 1px dotted v-bind(themeTxt);
}
.add-box {
  width: 100%;
  height: 280px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>