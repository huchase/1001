<script setup lang="ts">
const router_ = useRouter()
function back() {
  // router_.back()
  router_.push({ path: '/' })
}
</script>

<template>
  <nav text-5xl inline-flex gap-9>
    <button icon-btn @click="back">
      <div i-carbon:home />
    </button>
    <button icon-btn @click="toggleDark()">
      <div dark:i-carbon-moon i-carbon-sun />
    </button>
    <a
      icon-btn i-carbon-logo-github
      rel="noreferrer"
      href="https://github.com/huchase"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>
