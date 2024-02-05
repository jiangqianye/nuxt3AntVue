import { defineStore } from 'pinia'

export const useLoginStore = defineStore('useLoginStore', {
    // state: () => {
    //     return {

    //     }
    // },
    state: () => ({

    }),
    actions: {
        async increment() {
            const aa = await testStore()
            console.log(aa.times);
            // this.times++

        },
        async login(obj: object) {
            // const res = await useFetchFunc(obj,true)
            // console.log('返回值:', res);
            // if (res) {
            //     useGlobalStore().token='token'
            // }

            // const { data } = await useFetch("/api/item" );
            // const res = await useFetchFunc(obj,true)

            const res = await httpsFunc(obj,true)
            console.log('/=/222:',res);
        },
        async login2(obj: object) {
            const res = await useFetchFunc(obj,true)
            console.log('返回值:', res);
            if (res) {
                useGlobalStore().token='token'
            }
        }
    },
})