import { defineStore } from 'pinia'

export const useStore2 = defineStore('main2', {
  state: () => {
    return {
      someState: 'hello pinia',
    }
  },
  persist: true,
//   persist: {
//     storage: persistedState.localStorage, // sessionStorage
//   },
})