export default defineEventHandler(async (event) => {
//     const repo =  $fetch('https://api.github.com/repos/nuxt/nuxt', {
//     headers: {
//       Authorization: `token ${config.githubToken}`
//     }
//   })
// const body=readBody(event)
// const repo =await  $fetch('http://fuadm-t01.douquwl88.com' + "/front/getImgCodeKey.json",{
//   method:'post',
//   body
// })
// const query=getQuery(event)
// const repo =await  $fetch('http://fuadm-t01.douquwl88.com' + "/front/getImgCodeKey.json",{
//   query
// })



// console.log('服务端：',event);
console.log('服务端2：',getQuery(event));
// console.log('服务端3：',readBody(event));
const repo =await  $fetch('http://fuadm-t01.douquwl88.com' + "/front/getImgCodeKey.json")
console.log('/=/请求接口：',repo);
console.log(222);
return repo
    // return {
    //   hello: 'world'
    // }
  })