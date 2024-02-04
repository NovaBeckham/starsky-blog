/*
 * @Description:
 * @Author: hyx
 * @Date: 2024-01-29 10:40:29
 */

/**
 * 结果返回接口
 */
export interface Result<T> {
  /**
   * 返回状态
   */
  flag: boolean
  /**
   * 状态码
   */
  code: number
  /**
   * 返回信息
   */
  msg: string
  /**
   * 返回数据
   */
  data?: T
}

interface UserInfo {
  id?: number
  email?: string
  nickname?: string
  avatar?: string
  intro?: string
  webSite?: string
  bjCover?: string
  createTime?: string
  updateTime?: string
}

interface Tags {
  id?: number
  name?: string
  sort?: number
  clickVolume?: number
  createTime?: string
  updateTime?: string
}

export interface ArticleCardDTO {
  id?: number
  articleCover?: string
  title?: string
  content?: string
  isStick?: number
  isRecommend?: number
  author?: UserInfo
  categoryName?: string
  tags?: Tags[]
  isPublish?: number
  createTime?: string
  updateTime?: string
}

export interface TopAndFeaturedArticlesDTO {
  topArticle?: ArticleCardDTO
  featuredArticles?: ArticleCardDTO[]
}
