const index = 'index';
const login = 'login';

export const routes = {
	[index]: 'pages/index/index',
	[login]: 'pages/login/login'
};

const routeNames = [index, login] as const;

export type RouteName = (typeof routeNames)[number];

function getPages() {
	let result: string[] = [];
	for (const [_, value] of Object.entries(routes)) {
		result.push(value);
	}
	return result;
}

export const pages = getPages();
