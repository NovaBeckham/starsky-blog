<template>
  <div class="header-container">
    <header class="site-header">
      <Logo />
      <Navigation />
    </header>
  </div>
</template>

<script lang="ts" setup>
import Logo from "./Logo.vue"
import Navigation from "./Navigation.vue"
</script>

<style lang="scss" scoped>
.header-container {
  .site-header {
    max-width: var(--max-width);
    @apply relative flex z-50 my-0 mx-auto py-4;
  }
}
</style>
