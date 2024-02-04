<template>
  <div id="feature">
    <HorizontalArticle class="home-horizontal-article" />
    <slot />
  </div>
</template>

<script lang="ts" setup>
import HorizontalArticle from "@/components/ArticleCard/HorizontalArticle.vue"
</script>

<style lang="scss">
.home-horizontal-article {
  .feature-content {
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
