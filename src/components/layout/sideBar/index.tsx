import { defineComponent } from 'vue'
import Author from './author'

export default defineComponent({
	name: 'SideBar',
	setup() {
		return () => (
			<div>
				<Author class="side-card" />
			</div>
		)
	},
})
