import Taro from '@tarojs/taro'
import { isFunction } from "@tarojs/shared";

//获取系统设置信息

export const getSystemInfo=()=>{
    // const cacheInfo=getSystemInfo.prototype?.cache
    // if(cacheInfo?.globalSystemInfo&&!cacheInfo.globalSystemInfo.ios){
    //     return cacheInfo.globalSystemInfo
    // }
    //h5 下没有navbar
    if(!isFunction(Taro.getSystemInfoSync)) return null
    let systemInfo:any=Taro.getSystemInfoSync()||{model:'',system:''}
    let ios=!!(systemInfo.system.toLowerCase().search('ios')+1)
    let rect
    try {
        rect=Taro.getMenuButtonBoundingClientRect?Taro.getMenuButtonBoundingClientRect():null
        if(rect===null){
            throw 'getMenuButtonBoundingClientRect error'
        }
    } catch (error) {
        //胶囊上下间距
        let gap
        //宽度
        let width=96
        if(systemInfo.platform==='android'){
            gap=8
        }else if(systemInfo.platform==='devtools'){
            gap=ios?5.5:7.5
        }else{
            gap=4
            width=88
        }
        if(!systemInfo.statusBarHeight){
            systemInfo.statusBarHeight=systemInfo.screenHeight-systemInfo.windowHeight-20
        }
        //获取不到胶囊信息时，自定义一个
        rect={
            bottom:systemInfo.statusBarHeight+gap+32,
            height:32,
            left:systemInfo.windowWidth-width-10,
            right:systemInfo.windowWidth-10,
            top:systemInfo.statusBarHeight+gap,
            width:width
        }
    }
    let navBarHeight=''
    if(!systemInfo.statusBarHeight){
        //打开WIFI和打电话下
        systemInfo.statusBarHeight=systemInfo.screenHeight-systemInfo.windowHeight-20
        navBarHeight=(function(){
            let gap=rect.top-systemInfo.statusBarHeight
            return 2*gap+rect.height

        })()
        systemInfo.statusBarHeight=0
        systemInfo.navBarExtendHeight=0
    }else{
        navBarHeight=(function(){
            let gap=rect.top-systemInfo.statusBarHeight
            return systemInfo.statusBarHeight+2*gap+rect.height
        })()
        systemInfo.navBarExtendHeight=ios?4:0
    }
    //导航栏高度
    systemInfo.navBarHeight=navBarHeight
    //胶囊按钮信息
    systemInfo.capsulePosition=rect
    systemInfo.ios=ios
    //缓存到全局变量
    // getSystemInfo.prototype.cache.globalSystemInfo=systemInfo
    console.log('systemInfo',systemInfo)
    return systemInfo
}