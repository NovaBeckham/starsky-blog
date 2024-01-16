<template>
  <div class="flex items-start self-stretch relative" @click="handleClick">
    <div
      class="flex flex-col relative py-4 z-10 text-white font-medium ob-drop-shadow cursor-pointer"
    >
      <span class="flex text-3xl">繁星</span>
      <span class="font-extrabold text-xs uppercase">FANXING</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router"

const $router = useRouter()
const handleClick = () => {
  $router.push({ path: "/" })
}
</script>
