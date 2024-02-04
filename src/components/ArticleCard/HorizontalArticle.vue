<template>
  <div class="article-container">
    <div class="feature-article">
      <div class="feature-thumbnail">
        <img
          v-if="article.articleCover"
          class="ob-hz-thumbnail"
          v-lazy="article.articleCover"
        />
        <img v-else class="ob-hz-thumbnail" src="@/assets/default-cover.jpg" />
        <span class="thumbnail-screen" :style="bannerHoverGradient" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useAppStore } from "@/stores/app"
import { useArticleStore } from "@/stores/article"
import { toRef } from "vue"
import { computed } from "vue"

const appStore = useAppStore()
const articleStore = useArticleStore()

const article = toRef(articleStore.$state, "topArticle")

const bannerHoverGradient = computed(() => {
  return {
    background: appStore.themeConfig.header_gradient_css,
  }
})
</script>
