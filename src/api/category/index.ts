import { Result } from '@/model'
import requests from '@/utils/request'

/**
 * 分类VO
 */
export interface Category {
  /**
   * 分类id
   */
  id?: number;
  /**
   * 分类名
   */
  categoryName?: string;
}

/**
 * 查看文章列表
 * @param params 查询条件
 * @returns 文章列表
 */
export function getCategoryList(): Promise<Result<Category[]>> {
	return requests({
		url: '/category/list',
		method: 'get',
	})
}
