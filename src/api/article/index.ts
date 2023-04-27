import { PageQuery, PageResult, Result } from '@/model'
import requests from '@/utils/request'
import { Article } from './types'

/**
 * 查看文章列表
 * @param params 查询条件
 * @returns 文章列表
 */
export function getArticleList(params: PageQuery): Promise<Result<PageResult<Article[]>>> {
	return requests({
		url: '/article/hotList',
		method: 'get',
		params,
	})
}
