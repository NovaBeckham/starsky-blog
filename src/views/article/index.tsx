import { getArticleDetail } from '@/api/article'
import { Article } from '@/api/article/types'
import { isNil } from 'ramda'
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
	name: 'Article',
	setup() {
    const $route = useRoute()
    const articleInfo = ref<Article>({})
    onMounted(async () => {
      const id = $route.params.id
      const { code, data } = await getArticleDetail(Number(id))
      if (code === 200 && !isNil(data)) {
        articleInfo.value = data
      }
    })
		return () => (
      <div>
        <div>
          <div>
            <h1>{articleInfo.value.title}</h1>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
	},
})
