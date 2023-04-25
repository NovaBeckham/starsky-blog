import { defineComponent } from 'vue'
import Brand from './components/brand'
import Images from './components/swiper'

export default defineComponent({
	name: 'Home',
	setup() {
		return () => (
			<div>
				<Images />
				<Brand />
			</div>
		)
	},
})
