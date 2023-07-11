import Taro from '@tarojs/taro';
import { tokenLocalData } from './storage/data';

const TARO_ENDPOINT_ENV = process.env.TARO_ENDPOINT_ENV || 'dev';
const EndPointUrl = {
	dev: '',
	test: '',
	prod: ''
};

const ServerUrl = EndPointUrl[TARO_ENDPOINT_ENV];
const DEFAULT_MESSAGE = '请求超时，请稍后再试';
const EXCEEDED_MESSAGE = '访问超限，请稍后再试';

export type SupportedMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type RequestOptions<P> = {
	path: string;
	method?: SupportedMethod;
	data?: P;
	header?: Record<string, string | number>;
	withToken?: boolean;
	withoutErrorMessage?: boolean;
	isAuction?: boolean;
};

type ErrorObj = {
	error: string;
	message: string;
};

type CommonResult = {
	header: Record<string, string | number>;
	statusCode: number;
};

interface SucceededResult<T> extends CommonResult {
	data: T;
}

interface ErrorResult extends CommonResult {
	data: ErrorObj;
}

type PossibleResult<T> = ErrorResult | SucceededResult<T>;

const isExceededError = <T>(res: PossibleResult<T>) => res.statusCode === 429;

const isUnauthorized = <T>(res: PossibleResult<T>): res is ErrorResult =>
	res.statusCode === 401;
const isNotSucceeded = <T>(res: PossibleResult<T>): res is ErrorResult =>
	res.statusCode < 200 || res.statusCode > 300;

export const request = <T, P = object>({
	path,
	method = 'GET',
	data,
	header,
	withToken = true,
	withoutErrorMessage = false
}: RequestOptions<P>): Promise<SucceededResult<T>> => {
	const token = withToken ? tokenLocalData.get() : undefined;

	return new Promise((resolve, reject) => {
		Taro.request({
			url: `${ServerUrl}${path}`,
			header: {
				...header,
				'x-auth-type': 'BIDDER',
				Authorization: `Bearer ${token}`
			},
			data,
			method,
			success(res: PossibleResult<T>) {
				if (isUnauthorized(res)) {
					if (withoutErrorMessage) {
						return reject(res);
					}

					// 在处理处理token失效

					return reject(res);
				}

				if (isNotSucceeded(res)) {
					// sendErrorEvent(res)

					if (withoutErrorMessage) {
						return reject(res);
					}

					Taro.hideLoading({
						complete() {
							Taro.showToast({
								title: isExceededError(res)
									? EXCEEDED_MESSAGE
									: DEFAULT_MESSAGE,
								icon: 'none',
								duration: 3000
							});
						}
					});
					return reject(res);
				}

				resolve(res);
			},
			fail(err) {
				console.error('>>>', err);
				reject(err);
			}
		});
	});
};
