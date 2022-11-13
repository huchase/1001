<script setup lang="ts">
import { initCanvas } from '../utils'
import { arc, ellipse, parabola, regularShape } from '../cg/points'
import { drawPoints as draw } from '../cg'
const el = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  const { ctx } = initCanvas(el.value!, 1024, 1024, true)
  draw(regularShape(3, 300, 0, 0), ctx, { strokeStyle: 'red' })
  draw(arc(0, 0, 250), ctx, { strokeStyle: 'green' })
  draw(ellipse(0, 0, 250, 50), ctx, { strokeStyle: 'gray' })
  draw(parabola(0, 0, 5.5, -10, 10), ctx, { strokeStyle: 'purple' })
})
</script>

<template>
  <canvas ref="el" />
</template>
