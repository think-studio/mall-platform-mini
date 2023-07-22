import {useEffect} from 'react'
import { styled } from 'linaria/lib/react';
import { View } from '@tarojs/components';
import UseSwiper from "/@/components/UseSwiper/UseSwiper"
import FlexOne from './layout/flex-one';
import FlexMenu from './layout/flex-menu';
import FlexWrapTwo from './layout/flex-wrap-two'

const img:string='	https://lilishop-oss.oss-cn-beijing.aliyuncs.com/1313246c16f6471e8e751355a675fbfb.gif'	

function Preview() {
  const initMallInfo=()=>{

  }
  useEffect(()=>{
    initMallInfo()
  },[])
  return (
    <PreviewLayout>
      <View>
        {/* 轮播图组件 */}
        <UseSwiper></UseSwiper>
        {/* 分类栏 */}
        <FlexMenu></FlexMenu>
        {/* 活动、节日主题排版 */}
        <FlexOne url={img}></FlexOne>
        {/* 两行布局 */}
        <FlexWrapTwo></FlexWrapTwo>
      </View>
    </PreviewLayout>
  )
}
export default Preview
const PreviewLayout=styled(View)`
  
`