import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Author',
	setup() {
		return () => (
      <div>
        <div class="author-container">
          <img class="author-avatar" src="https://starsky-blog.oss-cn-guangzhou.aliyuncs.com/exampledir/head.jpg" />
          <p class="author-name">偷得浮生</p>
          <div class="site-desc">大吉大利</div>
        </div>
      </div>
    )
	},
})
