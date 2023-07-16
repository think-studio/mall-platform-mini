import { View } from '@tarojs/components';
import { Button } from '@nutui/nutui-react-taro';
import Router from '/@/routes/router';
import { styled } from 'linaria/lib/react';



function Cart() {
	return (
		<Wrapper>
			<Button type='primary'>
				分类
			</Button>
		</Wrapper>
	);
}

export default Cart;


const Wrapper = styled(View)`
	position: relative;
	height: 100vh;
	border: 1px solid pink;
	overflow: hidden;
`;
