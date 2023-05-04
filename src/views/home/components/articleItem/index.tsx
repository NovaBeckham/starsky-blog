import { getArticleList } from '@/api/article'
import { Article } from '@/api/article/types'
import { PageQuery } from '@/model'
import { NIcon } from 'naive-ui'
import { isNil, map } from 'ramda'
import { defineComponent, onMounted, reactive } from 'vue'
import $styles from './index.module.scss'
import { Calendar } from '@vicons/ionicons5'
import { Category } from '@vicons/carbon'
import { formatDate } from '@/utils/date'

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
								<img class={$styles.articleImg} src={item.img} />
							</div>
							<div class={$styles.info}>
								<div class={$styles.meta}>
									<span class={$styles.item}>
										<NIcon size="0.9rem" style={{ marginRight: '0.15rem' }}>
											<Calendar />
										</NIcon>
										{formatDate(item.updatedAt)}
									</span>
								</div>
								<h3 class={$styles.title}>{item.title}</h3>
								<div class={$styles.summary}>{item.summary}</div>
								<div class={$styles.category}>
									<NIcon size="0.85rem" style={{ marginRight: '0.15rem' }}>
										<Category />
									</NIcon>
									<span>{item.cid}</span>
								</div>
							</div>
						</div>
					)
				}, pageState.articleList)}
			</>
		)
	},
})
