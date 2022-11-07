<script setup lang="ts">
import { cubehelix } from '../math/cubehelix'
import { useCtx } from '../math'

onMounted(() => {
  // const canvas = document.querySelector('canvas')
  // const ctx = canvas.getContext('2d')

  // ctx.translate(0, 256)
  // ctx.scale(1, -1)
  const ctx = useCtx()

  const color = cubehelix()
  const T = 2000

  function update(t) {
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
  <canvas height="1024" width="1024" />
</template>

<style scoped>

</style>
