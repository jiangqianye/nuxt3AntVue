const whiteList = ['/login', 'register']
export default defineNuxtRouteMiddleware((to, from) => {
    console.log('/=/检测路由：', to.name);
    // 首页没有token或者重定向
    const token = useGlobalStore().token
    if (!token || to.path === '/') {
        return navigateTo('/login')
    }
    // 获取token
    // const token=getToken()
    // if(!token&&!whiteList.includes(to.path)){
    //     return navigateTo('/login')
    // }
    // abortNavigation- 中止导航，并显示可选的错误消息。
})