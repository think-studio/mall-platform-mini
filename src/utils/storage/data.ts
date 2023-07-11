import { LocalDataManager } from '.';

export const tokenLocalData = new LocalDataManager<string>(
	'token',
	1000 * 3600 * 24 * 7
);
