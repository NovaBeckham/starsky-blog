import { getArticleList } from '@/api/article'
import { Article } from '@/api/article/types'
import { PageQuery } from '@/model'
import { isNil, map } from 'ramda'
import { defineComponent, onMounted, reactive } from 'vue'
import { RouterLink } from 'vue-router'
import Brand from './components/brand'
import Images from './components/swiper'
import $styles from './index.module.scss'

interface State {
	queryParams: PageQuery
	articleList: Article[]
}

export default defineComponent({
	name: 'Home',
	setup() {
		const pageState = reactive<State>({
			queryParams: {
				current: 1,
				size: 5,
			},
			articleList: [],
		})
		onMounted(() => {
			getArticleList(pageState.queryParams).then(({ success, data }) => {
				if (success && !isNil(data)) {
					pageState.articleList = data.record
				}
			})
		})
		return () => (
			<div>
				<Images />
				<Brand />
				<div class="bg">
					<div class={`main-container ${$styles.mt}`}>
						<div class="left-container">
							<div class={$styles.articleItem}>
								{map((item) => {
									return (
										<>
											<div class={$styles.articleCover}>
												<a href={`/article/${item.id}`}>
													<img class={$styles.articleImg} v-lazy={item.img} />
												</a>
											</div>
										</>
									)
								}, pageState.articleList)}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	},
})
