// const index = 'index';
// const login = 'login';
const home = 'home';
const category = 'category';
const cart = 'cart';
const user = 'user';

export const routes = {
	// [index]: 'pages/index/index',
	// [login]: 'pages/login/login',
	[home]: 'pages/tabbar/home/home',
	[category]: 'pages/tabbar/category/category',
	[cart]: 'pages/tabbar/cart/cart',
	[user]: 'pages/tabbar/user/user'
};

const routeNames = [home,category,cart,user] as const;

export type RouteName = (typeof routeNames)[number];

function getPages() {
	let result: string[] = [];
	for (const [_, value] of Object.entries(routes)) {
		result.push(value);
	}
	return result;
}

export const pages = getPages();
