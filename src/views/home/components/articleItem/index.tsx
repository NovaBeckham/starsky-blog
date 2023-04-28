import { getArticleList } from '@/api/article'
import { Article } from '@/api/article/types'
import { PageQuery } from '@/model'
import { isNil, map } from 'ramda'
import { defineComponent, onMounted, reactive } from 'vue'
import $styles from './index.module.scss'

interface State {
	queryParams: PageQuery
	articleList: Article[]
}

export default defineComponent({
	name: 'ArticleItem',
	setup() {
		const pageState = reactive<State>({
			queryParams: {
				current: 1,
				size: 5,
			},
			articleList: [],
		})
		onMounted(() => {
			getArticleList(pageState.queryParams).then(({ code, data }) => {
				if (code === 200 && !isNil(data)) {
					pageState.articleList = data.records
				}
			})
		})
		return () => (
			<>
				{map((item) => {
					return (
						<div class={$styles.articleItem}>
							<div class={$styles.articleCover}>
								<a href={`/article/${item.id}`}>
									<img class={$styles.articleImg} v-lazy={item.img} />
								</a>
							</div>
						</div>
					)
				}, pageState.articleList)}
			</>
		)
	},
})
