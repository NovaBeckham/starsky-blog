<template>
  <transition name="dropdown-content">
    <div
      v-if="!Props.expand && sharedState.active"
      class="origin-top-right absolute right-0 mt-2 w-48 bg-ob-deep-900 rounded-lg py-2 shadow-md"
    >
      <slot />
    </div>
    <div
      v-else-if="Props.expand && sharedState.active"
      class="flex flex-col justify-center items-center mt-2 w-48 bg-ob-deep-900 rounded-lg py-2"
    >
      <slot />
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { inject } from "vue"

const Props = defineProps({
  expand: {
    type: Boolean,
    default: false,
  },
})

const sharedState = inject("sharedState", { active: false })

</script>

<style lang="scss" scoped>
.dropdown-content-enter-active,
.dropdown-content-leave-active {
  transition: all 0.2s;
}
.dropdown-content-enter,
.dropdown-content-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
