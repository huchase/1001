<script setup lang="ts">
import { Vector2D } from '../cg'
import { initCanvas } from '../utils'
function sDraw(context: any, points: Vector2D[], {
  fillStyle = 'black',
  close = false,
  rule = 'nonzero',
} = {}) {
  context.beginPath()
  context.moveTo(...points[0])
  for (let i = 1; i < points.length; i++)
    context.lineTo(...points[i])

  if (close)
    context.closePath()
  context.fillStyle = fillStyle
  context.fill(rule)
}

const el = ref<HTMLCanvasElement | null>(null)
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
  const { ctx } = initCanvas(el.value!, 800, 800, true)
  sDraw(ctx, polygon)
  ctx.translate(150, 150)
  sDraw(ctx, stars, { rule: 'nonzero' })
  ctx.translate(-300, -300)
  sDraw(ctx, stars, { rule: 'evenodd' })
})
</script>

<template>
  <canvas ref="el" />
</template>
