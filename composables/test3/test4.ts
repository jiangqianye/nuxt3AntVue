import { defineStore } from 'pinia'

export const testStore = defineStore('test4', {
  state: () => {
    return {
      someState: 'hello pinia',
      times: 0,
    }
  },
  actions: {
    increment() {
      this.times++
    }
  },
  persist: true,
//   persist: {
//     storage: persistedState.localStorage, // sessionStorage
//   },
})