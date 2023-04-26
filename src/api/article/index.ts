import { PageQuery } from '@/model'
import requests from '@/utils/request'

/**
 * 查看文章列表
 * @param params 查询条件
 * @returns 文章列表
 */
export function getArticleList(params: PageQuery) {
	return requests({
		url: '/article/list',
		method: 'get',
		params,
	})
}
