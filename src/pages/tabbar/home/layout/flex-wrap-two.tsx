import React from 'react'
import { View, Image } from '@tarojs/components';
import { styled } from 'linaria/lib/react';
import { layoutPadding,imgSize } from '/@/styles/layout'
const ListInfo={
  configType:'sale',
  layout:'flexTwo',
  leftList:[
    {
      id:"111",
      url:"https://lilishop-oss.oss-cn-beijing.aliyuncs.com/a5eb13650d8244479b123398ab2cfebc.png"
    }
  ],
  rightList:[
    {
      id:"222",
      url:"https://lilishop-oss.oss-cn-beijing.aliyuncs.com/e4e9b76ffeb948ca83061477c0bf3ee0.png"
    },
    {
      id:"133311",
      url:"https://lilishop-oss.oss-cn-beijing.aliyuncs.com/166891a00a894a14902cbd7ded01b5dc.png"
    }
  ],
}
const leftListLen=ListInfo.leftList.length
const rightListLen=ListInfo.rightList.length
const flexWrapTwo=()=> {
  return (
    <Layout style={layoutPadding}>
      <View className='flex-content'>
          <View className='flex-left'>
            {ListInfo.leftList.map(item=>{
              return(
                <Image className='flex-left-img' src={item?.url}></Image>
              )
            })}
          </View>
          <View className='flex-right'>
          {ListInfo.rightList.map(item=>{
              return(
                <Image className='flex-right-img' src={item?.url}></Image>
              )
            })}
          </View>
      </View>
    </Layout>
  )
}

export default flexWrapTwo

const Layout = styled(View)`
  .flex-content{
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    .flex-left{
      flex: 1;
      .flex-left-img{
        width: 100%;
        height: ${leftListLen==1&&rightListLen>1?(170*rightListLen):170}rpx;
      }
    }
    .flex-right{
      flex: 1;
      .flex-right-img{
        width: 100%;
        height: ${rightListLen==1&&leftListLen>1?(170*leftListLen):170}rpx;
      }
    }
  }


`
