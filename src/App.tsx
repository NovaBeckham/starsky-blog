import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
	name: 'App',
	render() {
		return (
			<div class="app-wrapper">
				<main class="main-wrapper">
					<RouterView />
				</main>
			</div>
		)
	},
})
