<template>
  <div class="article-container">
    <div class="article">
      <div class="article-thumbnail">
        <img
          v-if="Props.data.articleCover"
          v-lazy="Props.data.articleCover"
          alt=""
        />
        <img v-else src="@/assets/default-cover.jpg" />
        <span class="thumbnail-screen" :style="gradientBackground" />
      </div>
      <div class="article-content">
        <span>
          <b v-if="Props.data.categoryName">{{ Props.data.categoryName }}</b>
          <ul v-if="Props.data.tags && Props.data.tags.length > 0">
            <li v-for="tag in Props.data.tags" :key="tag.id">
              <em># {{ tag.name }}</em>
            </li>
          </ul>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ArticleCardDTO } from "@/interface"
import { useAppStore } from "@/stores/app"
import { PropType, computed } from "vue"

const Props = defineProps({
  data: {
    type: Object as PropType<ArticleCardDTO>,
    required: true,
  },
})

const appStore = useAppStore()

const gradientBackground = computed(() => {
  return { background: appStore.themeConfig.header_gradient_css }
})
</script>
