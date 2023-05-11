import { getArticleDetail, getArticleList } from '@/api/article'
import { Article } from '@/api/article/types'
import { PageQuery } from '@/model'
import { NIcon } from 'naive-ui'
import { isEmpty, isNil, map } from 'ramda'
import { defineComponent, onMounted, reactive } from 'vue'
import $styles from './index.module.scss'
import { Calendar } from '@vicons/ionicons5'
import { Category } from '@vicons/carbon'
import { formatDate } from '@/utils/date'
import { getCategoryList } from '@/api/category'
import { useRouter } from 'vue-router'

interface State {
	queryParams: PageQuery
	articleList: Article[]
	categoryList: Array<{ name: string; id: number }>
}

const categoryFilter = (key: number, list: Array<{ name: string; id: number }>) => {
	if (isEmpty(list)) {
		return key
	}
	const data = list.find((item) => item.id === key)
	if (data) {
		return data.name
	}
	return key
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
			categoryList: [],
		})
		onMounted(async () => {
			const { code: categoryCode, data: categoryData } = await getCategoryList()
			if (categoryCode === 200 && !isNil(categoryData)) {
				pageState.categoryList = categoryData
			}
			const { code: articleCode, data: articleData } = await getArticleList(pageState.queryParams)
			if (articleCode === 200 && !isNil(articleData)) {
				pageState.articleList = articleData.records
			}
		})
		const toDetail = async (id: number) => {
			$router.push(`/article/${id}`)
		}
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
										{formatDate(item.updatedAt ?? '')}
									</span>
								</div>
								<h3 class={$styles.title}>{item.title}</h3>
								<div class={$styles.summary}>{item.summary}</div>
								<div class={$styles.category}>
									<NIcon size="0.85rem" style={{ marginRight: '0.15rem' }}>
										<Category />
									</NIcon>
									<span>{categoryFilter(item.cid as number, pageState.categoryList)}</span>
								</div>
								<a class={$styles.btn} onClick={() => toDetail(item.id as number)}>more...</a>
							</div>
						</div>
					)
				}, pageState.articleList)}
			</>
		)
	},
})
