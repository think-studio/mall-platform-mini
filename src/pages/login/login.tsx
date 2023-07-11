import { View } from '@tarojs/components';
import { useEffect } from 'react';
import Router from '/@/routes/router';
import { Button } from '@nutui/nutui-react-taro';

function handleGoBack() {
	Router.back();
}

function Login() {
	useEffect(() => {
		console.log(Router.params);
	});
	return (
		<View>
			<View>我是登录页面</View>
			<View> 参数: {JSON.stringify(Router.params)}</View>
			<Button type='primary' className='btn' onClick={handleGoBack}>
				返回
			</Button>
		</View>
	);
}

export default Login;
