import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('useGlobalStore', {
    state: () => {
        return {
            someState: 'hello pinia',
            times: 5,
            token: ''
        }
    },
    actions: {
        increment() {
            const aa = testStore()
            console.log(aa.times);
            this.times++
        }
    },
    persist: true,
    //   persist: {
    //     storage: persistedState.localStorage, // sessionStorage
    //   },
})