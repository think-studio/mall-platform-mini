import { View } from '@tarojs/components';
import { Button } from '@nutui/nutui-react-taro';
import Router from '/@/routes/router';
import { styled } from 'linaria/lib/react';



function User() {
	return (
		<Wrapper>
			<Button type='primary'>
				我的
			</Button>
		</Wrapper>
	);
}


export default User;

const Wrapper = styled(View)`
	position: relative;
	height: 100vh;
	overflow: hidden;
`;
