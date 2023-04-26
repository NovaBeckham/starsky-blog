import { Article } from '@/api/article/types'
import { PageQuery } from '@/model'
import { map } from 'ramda'
import { defineComponent, reactive } from 'vue'
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
		const data = reactive<State>({
			queryParams: {
				current: 1,
				size: 5,
			},
			articleList: [],
		})
		return () => (
			<div>
				<Images />
				<Brand />
				<div class={$styles.bg}>
					<div class={$styles.leftContainer}>
						{map((item) => {
							return (
								<div class={$styles.articleCover}>
									<RouterLink to={`/article/${item.id}`}>
										<img class={$styles.articleImg} v-lazy={item.img} />
									</RouterLink>
								</div>
							)
						}, data.articleList)}
					</div>
				</div>
			</div>
		)
	},
})
