<template>
  <div
    class="ob-dropdown relative z-50"
    @click="handleToggle"
    @mouseover="hoverHandler"
    @mouseleave="leaveHandler"
    v-click-away="onClickAway"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { provide, reactive, ref } from "vue"
import { useDropdownStore } from "@/stores/dropdown"
import { watch } from "vue"

const Props = defineProps({
  hover: {
    type: Boolean,
    default: true,
  },
})
const emit = defineEmits(["command"])

const eventId = ref(0)
// const active = ref(false)
const sharedState = reactive({
  active: false,
})
const dropdownStore = useDropdownStore()

provide("sharedState", sharedState)

watch(
  () => dropdownStore.commandName,
  (newName, oldName) => {
    if (eventId.value === dropdownStore.uid) {
      emit("command", newName ? newName : oldName)
    }
  }
)

const handleToggle = () => {
  if (!sharedState.active) {
    eventId.value = dropdownStore.setUid()
  }
  if (!Props.hover) {
    sharedState.active = !sharedState.active
  }
}

const onClickAway = () => {
  if (!Props.hover) {
    sharedState.active = false
    eventId.value = 0
  }
}

const hoverHandler = () => {
  if (!sharedState.active) {
    eventId.value = dropdownStore.setUid()
  }
  if (Props.hover) {
    sharedState.active = true
  }
}

const leaveHandler = () => {
  if (Props.hover) {
    sharedState.active = false
    eventId.value = 0
  }
}
</script>
