<script setup lang="ts">
import rough from 'roughjs'
function fn() {
  const rc = rough.canvas(document.querySelector('canvas')!)
  const ctx: CanvasRenderingContext2D = rc.ctx
  ctx.translate(256, 256)
  ctx.scale(1, -1)

  const hillOpts = { roughness: 10.8, strokeWidth: 2, fill: 'blue' }

  rc.path('M-180 0L-80 100L20 0', hillOpts)
  rc.path('M-20 0L80 100L180 0', hillOpts)

  rc.circle(0, 150, 105, {
    stroke: 'red',
    strokeWidth: 4,
    fill: 'rgba(255,255, 0, 0.4)',
    fillStyle: 'solid',
    roughness: 10,
  })
}

onMounted(() => {
  fn()
})
</script>

<template>
  <canvas height="512" width="512" />
</template>
