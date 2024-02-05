import { message } from 'ant-design-vue';
// const obj = {
//   url: "url",
//   method: "",
//   params: values,
// };

// 自定义请求接口处理----代替拦截器
export default async function(obj:object,token?:boolean){
console.log('/=/token：',useGlobalStore().token);
    if(false){
        // token验证
        navigateTo('/test1')
        return
    }

  //   useFetch('api/item',{
  //     params:{}
  // })

  const res=  await useFetch('/api/item')
  message.error('This is an error message');
  if(false){
    // 错误拦截
    return
  }
  if(false){
    // http拦截
    return
  }
  console.log('/=/进入拦截器：',res);
  return '你日日'
}