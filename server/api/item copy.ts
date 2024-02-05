export default defineEventHandler(async (event) => {
//     const repo =  $fetch('https://api.github.com/repos/nuxt/nuxt', {
//     headers: {
//       Authorization: `token ${config.githubToken}`
//     }
//   })

// axios.post('http://fuadm-t01.douquwl88.com' + "/front/getImgCodeKey.json").then(res2 => {
//     res.json(res2.data);
//   });
console.log(111);
const repo =await  $fetch('http://fuadm-t01.douquwl88.com' + "/front/getImgCodeKey.json")
console.log('/=/请求接口：',repo);
console.log(222);
return repo
    // return {
    //   hello: 'world'
    // }
  })