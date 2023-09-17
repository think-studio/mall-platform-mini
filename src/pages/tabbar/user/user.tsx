import { View } from '@tarojs/components';
import { Button, Image } from '@nutui/nutui-react-taro';
import Router from '/@/routes/router';
import { styled } from 'linaria/lib/react';
import Navbar from '/@/components/Navbar/Navbar';
import { IconFont } from '@nutui/icons-react-taro'
import OrderInfo from './components/orderInfo'

function User() {
	const avater_img = require("/@/static/images/avatar.png")
	return (
		<Wrapper>
			<View className='user-header flex-center'>
				<View className='user-info flex-between'>
					<View className="user-vatar flex-between">
						<Image width='60px' height='60px' src={avater_img}></Image>
						<View>尚未登录</View>
					</View>
					<View className="user-setting">
						<IconFont name="right" size="12" />
					</View>
				</View>
			</View>
			{/* 订单 */}
			<View className='order-info'>
				<OrderInfo></OrderInfo>
			</View>
		</Wrapper>
	);
}


export default User;

const Wrapper = styled(View)`
	position: relative;
	height: 100vh;
	overflow: hidden;
	background-color: #e7e7e7;
	.user-header{
		max-width: 100%;
		height: 30%;
		background-position: top;
		background-repeat: no-repeat;
		background-size: cover;
		border-bottom-left-radius: 30rpx;
		border-bottom-right-radius: 30rpx;
		background-image: url("/@/static/images/main-bg.png");
	}
	.user-info{
		width: 80%;
		color: #fff;
		height: 30%;
		display: flex;
		.user-vatar{
			width: 50%;
		}
	}
	.order-info{
		width: 94%;
		margin: 0 3%;
		background: #fff;
		padding: 10rpx 0;
		border-radius: 10rpx;
		box-shadow: 0 2rpx 12rpx 0 #f6f6f6;
		transform: translateY(-30rpx);
	}
	.flex-center{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.flex-between{
		display: flex;
		justify-content: space-between;
		
	}

`;
