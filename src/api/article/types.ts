/**
 * 文章
 */
export interface Article {
  /**
   * 文章id
   */
  id?: number;
  /**
   * 文章缩略图
   */
  img?: string;
  /**
   * 文章标题
   */
  title?: string;
  /**
   * 文章摘要
   */
  summary?: string;
  /**
   * 文章分类
   */
  cid?: number;
  /**
   * 文章内容
   */
  content?: string;
  /**
   * 发表时间
   */
  createdAt?: string;
  /**
   * 更新时间
   */
  updatedAt?: string;
}