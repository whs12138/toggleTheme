<script setup>
  import { mainStore } from './store'
  import { storeToRefs } from 'pinia'
  const store = mainStore()
  const { themeBgc, themeTxt } = storeToRefs(store)
</script>

<template>
  <div class="app-box">
    <router-view>

    </router-view>
  </div>
</template>

<style >
.app-box {
  width: 100%;
  height: 100%;
  background-color: v-bind(themeBgc);
  color: v-bind(themeTXT);
  transition: all 0.4s ease;
}
</style>
