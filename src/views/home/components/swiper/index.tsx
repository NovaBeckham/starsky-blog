import { defineComponent } from 'vue'
import $styles from './index.module.scss'
import img1 from '@/assets/images/2ce1129fceee7f14cb4cf554ed167534.jpg'
import img2 from '@/assets/images/5b43ce3015351615d3654b8cac53c525.jpg'
import img3 from '@/assets/images/6becdfb5062ec2e1f9b9b16dd4b65d7e.jpg'
import img4 from '@/assets/images/80ae8255603788a1305d4bcc177097a2.jpg'
import img5 from '@/assets/images/84aae58f4246f8419cf018d7d7f6bae8.jpg'
import img6 from '@/assets/images/379ce4b2ddf4b087441c196fbffa2f3b.jpg'

export default defineComponent({
	name: 'Swiper',
	setup() {
		return () => (
			<div class={$styles.imgs}>
				<ul>
					<li class={$styles.item} style={{ 'background-image': `url(${img1})` }}></li>
					<li class={$styles.item} style={{ 'background-image': `url(${img2})` }}></li>
					<li class={$styles.item} style={{ 'background-image': `url(${img3})` }}></li>
					<li class={$styles.item} style={{ 'background-image': `url(${img4})` }}></li>
					<li class={$styles.item} style={{ 'background-image': `url(${img5})` }}></li>
					<li class={$styles.item} style={{ 'background-image': `url(${img6})` }}></li>
				</ul>
			</div>
		)
	},
})
