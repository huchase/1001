<script setup lang="ts">
import { initCanvas } from '../utils'
import { Vector2D } from '../cg'
import { pCubicBezier, pHelical, pParabola, pQuadricBezier, pStar } from '../cg/para'
const el = ref<HTMLCanvasElement | null>(null)
onMounted(() => {
  const { ctx } = initCanvas(el.value!, 1024, 1024, true)
  pParabola(-5.5, 5.5).draw(ctx, { strokeStyle: 'gray' })
  pHelical(0, 50, 1000, 5).draw(ctx, { strokeStyle: 'blue' })
  pStar(0, Math.PI * 2, 1000, 150).draw(ctx, { strokeStyle: 'orange' })

  // Quad Bezier
  const p0 = new Vector2D(0, 0)
  const p1 = new Vector2D(100, 0)
  p1.rotate(0.75)
  const p2 = new Vector2D(200, 0)
  pQuadricBezier(0, 1, 300, [
    p0,
    p1,
    p2,
  ]).draw(ctx, { strokeStyle: 'red' })
  {
    const p0 = new Vector2D(0, 0)
    const p1 = new Vector2D(100, 0)
    p1.rotate(0.75)
    const p2 = new Vector2D(150, 0)
    p2.rotate(-0.75)
    const p3 = new Vector2D(200, 0)
    pCubicBezier(0, 1, 100, [
      p0,
      p1,
      p2,
      p3,
    ]).draw(ctx, { strokeStyle: 'red' })
  }
})
</script>

<template>
  <canvas ref="el" />
</template>

<style scoped>

</style>
