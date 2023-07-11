import Taro from '@tarojs/taro';
import qs from 'qs';
import { RouteName, routes } from '.';

type NextFn = (params: { name: RouteName; params?: Recordable }) => void;
type BeforeEachCallback = (to: any, from: any, next: NextFn) => void;
type ToType = 'navigate' | 'redirect';

function joinParams(name, params?: Recordable) {
	let url = routes[name];
	if (params) {
		url = `/${url}?${qs.stringify(params)}`;
	}
	return url;
}

function findRouteNameByPath(path?: string) {
	if (!path) {
		throw new Error('路由丢失');
	}
	let result = '';
	Object.keys(routes).forEach((key) => {
		if (path.includes(routes[key])) {
			result = key;
		}
	});
	return result;
}

function _to(type: ToType, name: RouteName, params?: Recordable) {
	const url = joinParams(name, params);
	switch (type) {
		case 'navigate':
			Taro.navigateTo({
				url
			});
			break;
		case 'redirect':
			Taro.redirectTo({
				url
			});
			break;
	}
}

class Router {
	private static instance = Taro.getCurrentInstance();
	private static toType: ToType = 'navigate';
	private static beforeEachCallback: BeforeEachCallback;
	private static next({
		name,
		params
	}: {
		name: RouteName;
		params?: Recordable;
	}) {
		_to(this.toType, name, params);
	}
	// 跳转到下一级
	static pushName(type: ToType, name: RouteName, params?: Recordable) {
		this.toType = type;
		if (
			this.beforeEachCallback &&
			typeof this.beforeEachCallback === 'function'
		) {
			const to = {
				name: name,
				params: params
			};
			const from = {
				name: findRouteNameByPath(this.instance.router?.path)
			};
			this.beforeEachCallback(to, from, this.next.bind(this));
		} else {
			_to(type, name, params);
		}
	}

	// 返回
	static back() {
		Taro.navigateBack();
	}
	// 获取当前页面的参数
	static get params() {
		return this.instance.router?.params;
	}
	// 路由守卫
	static beforeEach(callback: BeforeEachCallback) {
		this.beforeEachCallback = callback;
	}
}

export default Router;
