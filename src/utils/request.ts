import { createDiscreteApi, useMessage } from 'naive-ui'
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const { message } = createDiscreteApi(['message'])

const requests = axios.create({
	baseURL: '/api',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
	},
})

requests.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		// 请求带token
		// if (getToken()) {
		//   config.headers["Authorization"] = token_prefix + getToken();
		// }
		return config
	},
	(error: AxiosError) => {
		return Promise.reject(error)
	}
)

requests.interceptors.response.use(
	(response: AxiosResponse) => {
		if (response.status === 200) {
			return response.data
		}
		switch (response.status) {
			case 400:
				message.error('没有权限')
				break
			case 500:
				message.error('请求超时')
				break
		}
	},
	(error: AxiosError) => {
		let msg = error.message
		if (msg == 'Network Error') {
			msg = '后端接口连接异常'
		} else if (msg.includes('500')) {
			msg = '系统接口请求超时'
		} else if (msg.includes('Request failed with status code')) {
			msg = '系统接口' + msg.substring(msg.length - 3) + '异常'
		}
		message.error(msg, { duration: 5000 })
		return Promise.reject(error)
	}
)

export default requests
