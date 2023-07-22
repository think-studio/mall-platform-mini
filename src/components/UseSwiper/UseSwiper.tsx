import { useEffect } from 'react';
import { View , Swiper, SwiperItem ,Image} from '@tarojs/components';
import { styled } from 'linaria/lib/react';
import {layoutPadding,imgSize} from '/@/styles/layout'
const DEFAULT_IMAGE=[
  'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/746ee6e9bd8a4a50beda75217067cfa6.jpeg',
  'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/418275e94412478eae148acf1cf5dec9.png'
]
function UseSwiper() {
  useEffect(()=>{},[])
  return (
    <Layout style={layoutPadding}>
       <Swiper
        className='swiper-border'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay>
          {DEFAULT_IMAGE.map((item)=>{
            return(
              <SwiperItem className="swiper-item">
                  <Image  src={item} style={imgSize}/>
              </SwiperItem>
            )
          })}
      </Swiper>
    </Layout>
  )
}
export default UseSwiper
const Layout = styled(View)`
 /* border: 1px solid green; */
    .swiper-border{
      width: 100%;
      height: 350rpx;
      border-radius: 20rpx;
      overflow: hidden;
      /* border:1px solid blue; */
      .swiper-item{
       
      }
    }

`

