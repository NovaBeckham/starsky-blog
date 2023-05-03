import { defineComponent, onMounted, ref } from 'vue'
import $styles from './index.module.scss'

export default defineComponent({
	name: 'Brand',
	setup() {
		const hitokoto = ref('')
		const fetchData = async () => {
			const res = await fetch('https://v1.hitokoto.cn')
			const data = await res.json()
			hitokoto.value = data.hitokoto
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
