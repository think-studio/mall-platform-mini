
import { View, Image } from '@tarojs/components';
import { styled } from 'linaria/lib/react';
import { layoutPadding } from '/@/styles/layout'

const menuList=[
    {
        id:'111',
        title:'秒杀活动',
        url:'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/0f423fb60f084b2caade164fae25a9a0.png'
    },
    {
        id:'222',
        title:'每日拼团',
        url:'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/24b886dd9ea84559bdf173320b6c7366.png'
    },
    {
        id:'333',
        title:'领券中心',
        url:'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/d1a0cea8d5554bafafef7734efc08820.png'
    },
    {
        id:'444',
        title:'积分商品',
        url:'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/9a107ef24c444b30bf3a577ed9630fe1.jpeg'
    },
    {
        id:'555',
        title:'每日签到',
        url:'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/ebc6c9e114d6416f9985a3ff7c8ea19f.png'
    },
    {
        id:'666',
        title:'生活家电',
        url:'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/ada7d39419554cb1ab52b3d5aae1563a.png'
    }, {
        id:'777',
        title:'手机数码',
        url:'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/230f48f024a343c6be9be72597c2dcd0.png'
    }, {
        id:'888',
        title:'砍价活动',
        url:'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/155c65e778204372ac196ab6cd7cd598.png'
    }, {
        id:'999',
        title:'直播活动',
        url:'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/665dd952b54e4911b99b5e1eba4b164f.png'
    }, {
        id:'110',
        title:'个人中心',
        url:'https://lilishop-oss.oss-cn-beijing.aliyuncs.com/9bd0d0ed2ec546619d62889f2ae465c7.jpeg'
    }
]
const menuItems=menuList.map(item=>{
    return (
        <View className='menu-item'>
            <Image  className='menu-img' src={item.url}></Image>
            <View className='menu-title'>{item.title}</View>
        </View>
    )
})
function FlexMenu() {
    return (
        <Layout style={layoutPadding}>
            <View className='menu-content'>
                {menuItems}
            </View>
        </Layout>
    )
}
export default FlexMenu

const Layout = styled(View)`
    .menu-content{
        width: calc(100vw - 32rpx);
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        .menu-item{
            width: 20%;
            margin: 10px 0;
            text-align: center;
            .menu-img{
                display: flex;
                margin: 0 auto;
                width: 88rpx;
                height: 88rpx;
            }
            .menu-title{
                font-size: 24rpx;
            }
        }
    }
   
`