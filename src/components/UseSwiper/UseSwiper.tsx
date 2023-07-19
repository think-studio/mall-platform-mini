import { useEffect } from 'react';
import Taro from '@tarojs/taro'
import { View , Swiper, SwiperItem ,Image} from '@tarojs/components';
import { css } from '@linaria/core';

const DEFAULT_IMAGE=[
  'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/746ee6e9bd8a4a50beda75217067cfa6.jpeg',
  'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/746ee6e9bd8a4a50beda75217067cfa6.jpeg'
]
function UseSwiper() {
  useEffect(()=>{},[])
  return (
    <div className={layout}>
       <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay>
          {DEFAULT_IMAGE.map((item)=>{
            return(
              <SwiperItem>
                <View className='demo-text-1'>
                  <Image className="u-swiper-image" src={item}/>
                </View>
              </SwiperItem>
            )
          })}
      </Swiper>
    </div>
  )
}
export default UseSwiper
const layout = css`
    padding:4rpx;
    margin-bottom:20rpx;
    border:1px solid green;
`