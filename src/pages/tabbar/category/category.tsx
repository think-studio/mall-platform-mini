import { View } from '@tarojs/components';
import { Button } from '@nutui/nutui-react-taro';
import Router from '/@/routes/router';
import { styled } from 'linaria/lib/react';


function Category() {
	return (
		<Wrapper>
			<Button type='primary'>
				购物车
			</Button>
		</Wrapper>
	);
}

export default Category;

const Wrapper = styled(View)`
	position: relative;
	height: 100vh;
	background: yellow;
	overflow: hidden;
`;
