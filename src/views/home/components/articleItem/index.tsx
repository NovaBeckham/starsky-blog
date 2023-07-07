import { Article, getArticleList } from '@/api/article'
import { PageQuery } from '@/model'
import { NIcon } from 'naive-ui'
import { isNil, map } from 'lodash'
import { defineComponent, onMounted, reactive } from 'vue'
import $styles from './index.module.scss'
import { Calendar } from '@vicons/ionicons5'
import { Category } from '@vicons/carbon'
import { formatDate } from '@/utils/date'
import { useRouter } from 'vue-router'

interface State {
	queryParams: PageQuery
	articleList: Article[]
}

export default defineComponent({
	name: 'ArticleItem',
	setup() {
		const $router = useRouter()
		const pageState = reactive<State>({
			queryParams: {
				current: 1,
				size: 5,
			},
			articleList: [],
		})
		onMounted(async () => {
			const { success, data } = await getArticleList(pageState.queryParams)
			if (success && !isNil(data)) {
				pageState.articleList = data.records
			}
		})
		const toDetail = async (id: number) => {
			$router.push(`/article/${id}`)
		}
		return () => (
			<>
				{map(pageState.articleList, (item) => {
					return (
						<div class={$styles.articleItem}>
							<div class={$styles.articleCover}>
								<img class={$styles.articleImg} src={item.articleCover} />
							</div>
							<div class={$styles.info}>
								<div class={$styles.meta}>
									<span class={$styles.item}>
										<NIcon size="0.9rem" style={{ marginRight: '0.15rem' }}>
											<Calendar />
										</NIcon>
										{formatDate(item.createTime ?? '')}
									</span>
								</div>
								<h3 class={$styles.title}>{item.articleTitle}</h3>
								<div class={$styles.content}>{item.articleContent}</div>
								<div class={$styles.category}>
									<NIcon size="0.85rem" style={{ marginRight: '0.15rem' }}>
										<Category />
									</NIcon>
									<span>{item.category?.categoryName}</span>
								</div>
								<a class={$styles.btn} onClick={() => toDetail(item.id as number)}>
									more...
								</a>
							</div>
						</div>
					)
				})}
			</>
		)
	},
})
