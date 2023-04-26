import { DirectiveBinding, onMounted, onUnmounted, Ref, ref } from 'vue'

const loadImage = (url: string) => {
	return new Promise((resolve, reject) => {
		const img = new Image()
		img.src = url
		img.onload = resolve
		img.onerror = reject
	})
}

interface ImageElement extends HTMLImageElement {
	imageLoading?: Ref<boolean>
}

export default {
	mounted(el: ImageElement, binding: DirectiveBinding<string>) {
		const imageSrc = binding.value
		const imageLoading = ref(true)
		loadImage(imageSrc).then(() => {
			el.setAttribute('src', imageSrc)
			imageLoading.value = false
		})

		el.imageLoading = imageLoading

		const scrollHandler = () => {
			if (imageLoading.value) {
				const rect = el.getBoundingClientRect()
				if (rect.top < window.innerHeight && rect.bottom > 0) {
					loadImage(imageSrc).then(() => {
						el.setAttribute('src', imageSrc)
						imageLoading.value = false
					})
					window.removeEventListener('scroll', scrollHandler)
				}
			}
		}
		window.addEventListener('scroll', scrollHandler)
		onMounted(() => {
			scrollHandler()
		})

		onUnmounted(() => {
			window.removeEventListener('scroll', scrollHandler)
		})
	},
	unmounted(el: ImageElement) {
		delete el.imageLoading
	},
}
