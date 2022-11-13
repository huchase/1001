<script setup lang="ts">
import { drawPoints as draw } from '../cg'
onMounted(() => {
  const vertices = [
    [-0.7, 0.5],
    [-0.4, 0.3],
    [-0.25, 0.71],
    [-0.1, 0.56],
    [-0.1, 0.13],
    [0.4, 0.21],
    [0, -0.6],
    [-0.3, -0.3],
    [-0.6, -0.3],
    [-0.45, 0.0],
  ]

  const canvas: any = document.querySelector('canvas')
  const ctx: any = canvas.getContext('2d')
  const { width, height } = canvas
  ctx.translate(0.5 * width, 0.5 * height)
  ctx.scale(1, -1)

  const poitions = vertices.map(([x, y]) => [x * 256, y * 256])

  function isPointInPath(ctx: any, x: number, y: number) {
    const cloned = ctx.canvas.cloneNode().getContext('2d')
    cloned.translate(0.5 * width, 0.5 * height)
    cloned.scale(1, -1)
    let ret: any = false
    draw(poitions, cloned, { strokeStyle: 'transparent' }, 'red')
    ret |= cloned.isPointInPath(x, y)
    if (!ret) {
      draw([[100, 100], [100, 200], [150, 200]], cloned, { strokeStyle: 'transparent' }, 'blue')
      ret |= cloned.isPointInPath(x, y)
    }
    return ret
  }
  // debugger
  draw(poitions, ctx, { strokeStyle: 'transparent' }, 'red')
  draw([[100, 100], [100, 200], [150, 200]], ctx, { strokeStyle: 'transparent' }, 'blue')

  const { left, top } = canvas.getBoundingClientRect()

  canvas.addEventListener('mousemove', (evt: any) => {
    const { x, y } = evt
    // 坐标转换
    const offsetX = x - left
    const offsetY = y - top

    ctx.clearRect(-256, -256, 512, 512)

    if (isPointInPath(ctx, offsetX, offsetY)) {
      draw(poitions, ctx, { strokeStyle: 'transparent' }, 'green')
      draw([[100, 100], [100, 200], [150, 200]], ctx, { strokeStyle: 'transparent' }, 'orange')
    }
    else {
      draw(poitions, ctx, { strokeStyle: 'transparent' }, 'red')
      draw([[100, 100], [100, 200], [150, 200]], ctx, { strokeStyle: 'transparent' }, 'blue')
    }
  })
})
</script>

<template>
  <canvas height="1024" width="1024" />
</template>

<style scoped>

</style>
