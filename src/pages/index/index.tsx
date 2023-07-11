import { View } from '@tarojs/components';
import { Button } from '@nutui/nutui-react-taro';
import Router from '/@/routes/router';
import { styled } from 'linaria/lib/react';

function handleLogin() {
	Router.pushName('navigate', 'login', {
		name: 'liuhao'
	});
}

function Index() {
	return (
		<Wrapper>
			<Button type='primary' onClick={handleLogin}>
				登录
			</Button>
		</Wrapper>
	);
}

export default Index;

const Wrapper = styled(View)`
	position: relative;
	height: 100vh;
	background: yellow;
	overflow: hidden;
`;
