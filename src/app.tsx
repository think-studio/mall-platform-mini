import { useEffect } from 'react';
import { useDidShow, useDidHide } from '@tarojs/taro';

import { Provider } from 'react-redux';
import { store } from './store';

// 全局样式
import './app.scss';
import Router from './routes/router';

Router.beforeEach((to, from, next) => {
	console.log('to', to);
	console.log('from', from);
	next(to);
});

function App(props) {
	// 可以使用所有的 React Hooks
	useEffect(() => {});

	// 对应 onShow
	useDidShow(() => {});

	// 对应 onHide
	useDidHide(() => {});

	return <Provider store={store}>{props.children}</Provider>;
}

export default App;
