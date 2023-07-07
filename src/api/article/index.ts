import { PageQuery, PageResult, Result } from '@/model'
import requests from '@/utils/request'
import { Category } from '../category'

/**
 * 文章
 */
export interface Article {
	/**
	 * 文章id
	 */
	id?: number
	/**
	 * 文章缩略图
	 */
	articleCover?: string
	/**
	 * 文章标题
	 */
	articleTitle?: string
	/**
	 * 文章内容
	 */
	articleContent?: string
	/**
	 * 文章分类
	 */
	category?: Category
	/**
	 * 是否删除 (0否 1是)
	 */
	isDelete?: number
	/**
	 * 状态 (1公开 2私密 3草稿)
	 */
	status?: number
	/**
	 * 发表时间
	 */
	createTime?: string
	/**
	 * 更新时间
	 */
	updateTime?: string
}

/**
 * 查看文章列表
 * @param params 查询条件
 * @returns 文章列表
 */
export function getArticleList(params: PageQuery): Promise<Result<PageResult<Article[]>>> {
	return requests({
		url: '/article/list',
		method: 'get',
		params,
	})
}

/**
 * 获取文章详情
 * @param id
 * @returns 文章详情
 */
export function getArticleDetail(id: number): Promise<Result<Article>> {
	return requests({
		url: `/article/${id}`,
		method: 'get',
	})
}
