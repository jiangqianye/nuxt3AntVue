# nuxt3AntVue
nuxt3+antd-vue后台管理系统，aes-js/sass

1、nuxt3：请求API两次、
在组件中使用$fetch而不包装它会导致两次获取数据：首先在服务器上，然后在水合作用期间再次在客户端上，因为不会将状态从服务器传输到客户端。因此，由于客户端必须再次获取数据，因此双方都会执行 fetch。useAsyncData-----官网
useFetch是在组件设置函数中处理数据获取的最直接方法。
$fetch基于用户交互发出网络请求非常有用。


2、组件渲染Hydration node mismatch 
<ClientOnly>《/》包裹警告的组件，仅客户端渲染

3、Usefetch
    //   useFetch('api/item',{
    //     params:{}
    // })   get请求
{method:’post’,body:{}}


4、全局函数
可以在composables定义全局函数：export default async function (obj: object, token?: boolean) {}
和store用法一样：await httpsFunc(obj,true)

5、composables嵌套文件，需要额外引入配置：

  imports:{
    dirs:[
      'composables/**'
    ]
  }








