<script setup lang="ts">
import rough from 'roughjs'
function one() {
  const rc = rough.canvas(document.querySelector('canvas'))
  const ctx = rc.ctx
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
  one()
})
</script>

<template>
  <canvas height="1024" width="1024" />
</template>

<style scoped>
canvas {
  width: 1024px;
  height: 1024px;
  border: 1px solid gray;
}
</style>
