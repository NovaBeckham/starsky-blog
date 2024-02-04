/*
 * @Description:
 * @Author: hyx
 * @Date: 2024-02-01 14:15:50
 */

import { Result, TopAndFeaturedArticlesDTO } from "@/interface"
import requests from "@/utils/request"

const getTopAndFeaturedArticles: () => Promise<
  Result<TopAndFeaturedArticlesDTO>
> = () => {
  return requests("/api/article/topAndFeatured")
}

export { getTopAndFeaturedArticles }
