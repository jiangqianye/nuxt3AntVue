export const useWebsiteStore = defineStore('websiteStore', {
    state: () => ({
      name: '',
      description: ''
    }),
    actions: {
      async fetch() {
        // const infos = await $fetch('https://api.nuxt.com/modules/pinia')
        // const repo =await  $fetch('http://fuadm-t01.douquwl88.com' + "/front/getImgCodeKey.json")
        const { data } = await useFetch('/api/item')
        console.log('/=/响应444：',data);
  console.log('/=/发起请求');
        this.name = '111'
        this.description = '222'
        message.info("This is a normal message");
      }
    }
  })
  