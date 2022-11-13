<script setup lang="ts">
import { initCanvas } from '../utils'
import { cubehelix } from '../cg/cubehelix'
const el = ref<HTMLCanvasElement | null>(null)
onMounted(() => {
  const { ctx } = initCanvas(el.value!, 1024, 1024, true)

  const color = cubehelix()
  const T = 2000

  function update(t: any) {
    const p = 0.5 + 0.5 * Math.sin(t / T)
    ctx.clearRect(0, -256, 512, 512)
    const { r, g, b } = color(p)
    ctx.fillStyle = `rgb(${255 * r},${255 * g},${255 * b})`
    ctx.beginPath()
    ctx.rect(20, -20, 480 * p, 40)
    ctx.fill()
    window.ctx = ctx
    requestAnimationFrame(update)
  }
  update(0)
})
</script>

<template>
  <canvas ref="el" />
</template>

<style scoped>

</style>
