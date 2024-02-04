/*
 * @Description:
 * @Author: hyx
 * @Date: 2024-02-01 13:56:53
 */

import { ArticleCardDTO } from "@/interface"
import { defineStore } from "pinia"

export const useArticleStore = defineStore("articleStore", {
  state: () => {
    return {
      topArticle: {} as ArticleCardDTO,
      featuredArticles: [] as ArticleCardDTO[]
    }
  },
  actions: {},
})
