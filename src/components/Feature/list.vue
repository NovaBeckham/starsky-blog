<template>
  <div class="inverted-main-grid py-8 gap-8 box-border">
    <ul class="grid lg:grid-cols-2 gap-8">
      <template v-if="featuredArticles.length > 0">
        <li v-for="article in featuredArticles" :key="article.id">
          <ArticleCard class="home-featured-article" :data="article" />
        </li>
      </template>
      <template v-else>
        <li v-for="n in 2" :key="n">
          <ArticleCard :data="{}" />
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useArticleStore } from "@/stores/article"
import { toRef } from "vue"
import ArticleCard from "@/components/ArticleCard/index.vue"

const articleStore = useArticleStore()
const featuredArticles = toRef(articleStore.$state, "featuredArticles")
</script>

<style lang="scss">
.home-featured-article {
  .article-content {
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
    .article-footer {
      margin-top: 13px;
    }
  }
}
</style>
