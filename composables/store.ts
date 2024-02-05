import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      someState: 'hello pinia',
      times: 5,
    }
  },
  actions: {
    increment() {
      const aa=testStore()
      console.log(aa.times);
      this.times++
    }
  },
  persist: true,
//   persist: {
//     storage: persistedState.localStorage, // sessionStorage
//   },
})