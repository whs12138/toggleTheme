import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {
  state: () => {
    return {
      msg: 'hello Pinia',
      themeBgc: '#FFF',
      themeTxt: '#1A1A1A',
    }
  },
  getters: {},
  actions: {
    toggleTheme() {
      this.themeBgc = this.themeBgc === '#FFF' ? '#1A1A1A' : '#FFF'
      this.themeTxt = this.themeTxt === '#1A1A1A' ? '#CCC' : '#1A1A1A'
    }
  }
})