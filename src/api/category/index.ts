import { Result } from '@/model'
import requests from '@/utils/request'

interface Category {
	name: string
	id: number
}

/**
 * 查看文章列表
 * @param params 查询条件
 * @returns 文章列表
 */
export function getCategoryList(): Promise<Result<Category[]>> {
	return requests({
		url: '/category/getList',
		method: 'get',
	})
}
