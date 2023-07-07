import { Article, getArticleDetail } from '@/api/article'
import { isNil } from 'lodash'
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import $styles from './index.module.scss'

export default defineComponent({
	name: 'Article',
	setup() {
		const $route = useRoute()
		const articleInfo = ref<Article>({})
		onMounted(async () => {
			const id = $route.params.id
			const { code, data } = await getArticleDetail(Number(id))
			if (code === 200 && !isNil(data)) {
				articleInfo.value = data
			}
		})
		return () => (
			<div>
				<div class="page-header">
					<div class="page-title">
						<h1 class={$styles.articleTitle}>{articleInfo.value.articleTitle}</h1>
					</div>
				</div>
				<div class="bg">
					<div class="main-container">
						<div class={$styles.articleContainer}>
							<div>{articleInfo.value.articleContent}</div>
						</div>
					</div>
				</div>
			</div>
		)
	},
})
