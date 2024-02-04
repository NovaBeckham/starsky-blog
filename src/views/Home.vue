<template>
  <div class="block">
    <Feature v-if="themeConfig.feature">
      <FeatureList />
    </Feature>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/stores/app"
import { computed } from "vue"
import Feature from "@/components/Feature/index.vue"
import FeatureList from "@/components/Feature/list.vue"
import { onMounted } from "vue"
import { getTopAndFeaturedArticles } from "@/api"
import { markdownToHtml } from "@/utils/markdown"
import { useArticleStore } from "@/stores/article"

const appStore = useAppStore()
const articleStore = useArticleStore()

const themeConfig = computed(() => appStore.themeConfig)

const fetchTopAndFeatured = () => {
  getTopAndFeaturedArticles().then(({ data, flag }) => {
    if (flag && data) {
      if (data.topArticle) {
        data.topArticle.content = markdownToHtml(data.topArticle.content)
          .replace(/<\/?[^>]*>/g, "")
          .replace(/[|]*\n/, "")
          .replace(/&npsp;/gi, "")
      }
      if (data.featuredArticles) {
        data.featuredArticles.forEach((item) => {
          item.content = markdownToHtml(item.content)
            .replace(/<\/?[^>]*>/g, "")
            .replace(/[|]*\n/, "")
            .replace(/&npsp;/gi, "")
        })
      }
      articleStore.topArticle = data.topArticle ?? {}
      articleStore.featuredArticles = data.featuredArticles ?? []
    }
  })
}

onMounted(() => {
  fetchTopAndFeatured()
})
</script>
