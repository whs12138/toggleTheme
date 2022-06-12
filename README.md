## Toggle the view theme.
### `Pinia` + `v-bind`
- Pinia: [https://pinia.web3doc.top/](https://pinia.web3doc.top/)
- Vue-router4 :[https://router.vuejs.org/zh/introduction.html](https://router.vuejs.org/zh/introduction.html)
- Vue3 新文档：[https://staging-cn.vuejs.org/](https://staging-cn.vuejs.org/)

> Vite 创建 项目

`npm init vite@latest xxx`

> 安装和挂载 Pinia
#### 安装
```
 npm install pinia
```
#### 挂载
```
// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app
  .use(pinia)
  .mount('#app')
```
```
// src.store/index.js
import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {
  state: () => {
    return {
      msg: 'hello Pinia'
    }
  },
  getters: {},
  actions: {}
})
```
```
// src/components/HelloWorld.vue
<script setup>
  import { mainStore } from '../store/index'
  const store = mainStore()
</script>

<template>
  {{ store.msg }}
</template>
```

> 安装和挂载Vue-router

#### 安装
`npm install vue-router`

#### 挂载
```
// src/router/index.js

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../component/HelloWorld.vue'),
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})

```

```
// src/main.js
import router from './router/index'
createApp(App)
  .use(router)
  .mount('#app')

```
