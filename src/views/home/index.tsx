import SideBar from '@/components/layout/sideBar'
import { defineComponent } from 'vue'
import ArticleItem from './components/articleItem'
import Brand from './components/brand'
import Swiper from './components/swiper'
import $styles from './index.module.scss'

export default defineComponent({
	name: 'Home',
	setup() {
		return () => (
			<div>
				<Swiper />
				<Brand />
				<div class="bg">
					<div class={`main-container ${$styles.mt}`}>
						<div class="left-container">
							<ArticleItem />
						</div>
						<SideBar class="right-container" />
					</div>
				</div>
			</div>
		)
	},
})
