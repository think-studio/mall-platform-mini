import { Icon, View } from '@tarojs/components';
import { styled } from 'linaria/lib/react';
import { Button, Cell ,Col,Row } from '@nutui/nutui-react-taro';
import { IconFont, } from '@nutui/icons-react-taro'
function OrderInfo() {
    const orderList=[
        {
            title:'待付款',
            icon:'dongdong'
        },
        {
            title:'待收货',
            icon:'dongdong'
        },
        {
            title:'待评价',
            icon:'shop'
        },
        {
            title:'售后',
            icon:'service'
        },
        {
            title:'全部订单',
            icon:'order'
        }
    ]
    return (
        <Wrapper>
            <View className='order'>
            <Row gutter="10" className='order-title'>
                <Col span="8">
                    <View  style={{padding:'10rpx 0'}}>商品收藏 1</View>
                </Col>
                <Col span="8">
                    <View style={{padding:'10rpx 0'}}>店铺收藏 6</View>
                </Col> 
                <Col span="8">
                    <View style={{padding:'10rpx 0'}}>我的足迹 9</View>
                </Col> 
            </Row>
            <View className='order-detail flex-between'>
                {orderList.map(item=>{
                    return (
                        <View className='order-item flex-content'>
                            <IconFont name={item.icon}/>
                            <View>{item.title}</View>
                        </View>
                    )
                })}
            </View>
            </View>
        </Wrapper>

    )
}
export default OrderInfo

const Wrapper = styled(View)`
     width:100%;
    
    .order{
        width:100%;
        .order-title{
            width: 100%;
            text-align: center;
        }
        .order-detail{
            font-size: 24rpx;
            justify-content: space-around;
            color: #999;
            .order-item{
                flex-direction: column;
            }
        }
    }
    .flex-between{
        display: flex;
		justify-content: space-between;
    }
    .flex-content{
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

