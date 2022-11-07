<script setup lang="ts">
import { Vector2D, sDraw, useCtx } from '../math'
const points = [new Vector2D(0, 90)]
for (let i = 1; i <= 4; i++) {
  const p = points[0].copy().rotate(i * Math.PI * 0.4)
  points.push(p)
}
const polygon = [
  ...points,
]
const stars = [
  points[0],
  points[2],
  points[4],
  points[1],
  points[3],
]
onMounted(() => {
  const ctx = useCtx()
  sDraw(ctx, polygon)
  ctx.translate(150, 150)
  sDraw(ctx, stars, { rule: 'evenodd' })
})
</script>

<template>
  <canvas height="1024" width="1024" />
</template>

<style scoped>

</style>
