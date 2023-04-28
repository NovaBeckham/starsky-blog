import { defineComponent, onMounted, ref } from 'vue'
import $styles from './index.module.scss'

export default defineComponent({
	name: 'Brand',
	setup() {
		const hitokoto = ref('')
		const fetchData = () => {
			fetch('https://v1.hitokoto.cn')
				.then((res) => {
					return res.json()
				})
				.then((data) => {
					hitokoto.value = data.hitokoto
				})
		}
		onMounted(() => {
			fetchData()
		})
		return () => (
			<div class={$styles.brandContainer}>
				<div class={$styles.brand}>
					<p class={$styles.artboard}>Hello World</p>
					<div class={$styles.title}>
						{hitokoto.value}
						<span class={$styles.easyTypedCursor}>|</span>
					</div>
				</div>
			</div>
		)
	},
})
