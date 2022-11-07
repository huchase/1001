<script setup lang="ts">
import { arc, draw, ellipse, parabola, regularShape, useCtx } from '../math'

onMounted(() => {
  // const canvas: any = document.querySelector('canvas')
  // const ctx: any = canvas.getContext('2d')
  // const { width, height } = canvas
  // ctx.translate(0.5 * width, 0.5 * height)
  // ctx.scale(1, -1)
  const ctx = useCtx()
  draw(regularShape(3, 300, 0, 0), ctx, 'red')
  draw(arc(0, 0, 250), ctx, 'green')
  draw(ellipse(0, 0, 250, 50), ctx, 'gray')
  draw(parabola(0, 0, 5.5, -10, 10), ctx, 'purple')
})
</script>

<template>
  <canvas height="1024" width="1024" />
</template>

<style scoped>
</style>
