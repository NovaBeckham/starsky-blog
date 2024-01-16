<template>
  <div
    @click.stop.prevent="handleClick"
    class="block cursor-pointer hover:bg-ob-trans my-1 px-4 py-1 font-medium hover:text-ob-bright"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useDropdownStore } from "@/stores/dropdown"

const Props = defineProps({
  name: {
    type: String,
  },
})

const dropdownStore = useDropdownStore()
const handleClick = () => {
  dropdownStore.setCommand(Props.name ?? "")
}
</script>
