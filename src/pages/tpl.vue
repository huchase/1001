<script setup lang="ts">
import { initCanvas } from '../utils'
const el = ref<HTMLCanvasElement | null>(null)
onMounted(() => {
  const canvas = el.value!
  const ctx = initCanvas(canvas)
  //
})
</script>

<template>
  <canvas ref="el" />
</template>

<style scoped>

</style>
