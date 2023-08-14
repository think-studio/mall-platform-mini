import { pages } from './routes';
export default defineAppConfig({
	enableShareAppMessage: true,
	pages: pages,
	window: {
		backgroundTextStyle: 'light',
		navigationBarBackgroundColor: '#fff',
		navigationBarTitleText: 'WeChat',
		navigationBarTextStyle: 'black',
		navigationStyle:'custom'
	},
	tabBar: {
		color: '#666',
		selectedColor: '#ff573e',
		backgroundColor: 'white',
		list: [
			{
				pagePath: 'pages/tabbar/home/home',
				text: '首页',
				iconPath: 'static/tabbar/home.png',
				selectedIconPath: 'static/tabbar/home-s.png'
			},
			{
				pagePath: 'pages/tabbar/category/category',
				text: '分类',
				iconPath: 'static/tabbar/category.png',
				selectedIconPath: 'static/tabbar/category-s.png'
			},
			{
				pagePath: 'pages/tabbar/cart/cart',
				text: '购物车',
				iconPath: 'static/tabbar/cart.png',
				selectedIconPath: 'static/tabbar/cart-s.png'
			},
			{
				pagePath: 'pages/tabbar/user/user',
				text: '我的',
				iconPath: 'static/tabbar/mine.png',
				selectedIconPath: 'static/tabbar/mine-s.png'
			}
		]
	}
});
