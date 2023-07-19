import {useEffect} from 'react'
import { styled } from 'linaria/lib/react';
import { View } from '@tarojs/components';
import UseSwiper from "/@/components/UseSwiper/UseSwiper"
import FlexOne from './layout/flex-one';

const img:string='	https://lilishop-oss.oss-cn-beijing.aliyuncs.com/1313246c16f6471e8e751355a675fbfb.gif'	

function Preview() {
  const initMallInfo=()=>{

  }
  useEffect(()=>{
    initMallInfo()
  },[])
  return (
    <SwiperWrapper>
      <View>
        {/* //轮播图组件 */}
        <UseSwiper></UseSwiper>
        {/* 活动、节日主题排版 */}
        <FlexOne url={img}></FlexOne>
      </View>
    </SwiperWrapper>
  )
}
export default Preview
const SwiperWrapper=styled(View)`
  padding:4rpx;
`