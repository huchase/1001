<script setup lang="ts">
import { hierarchy, pack } from 'd3-hierarchy'
import { initCanvas } from '../utils'
import { TAU } from '../cg'
const el = ref<HTMLCanvasElement | null>(null)
function draw(ctx: CanvasRenderingContext2D, node: any, { fillStyle = 'rgba(0, 0, 0, 0.2)', textColor = 'white' } = {}) {
  const children = node.children
  const { x, y, r } = node
  ctx.fillStyle = fillStyle
  ctx.beginPath()
  ctx.arc(x, y, r, TAU * 0, TAU)
  ctx.fill()
  if (children) {
    for (let i = 0; i < children.length; i++)
      draw(ctx, children[i])
  }
  else {
    const name = node.data.name
    ctx.fillStyle = textColor
    ctx.font = '1.5rem Arial'
    ctx.textAlign = 'center'
    ctx.fillText(name, x + 10, y)
  }
}
async function fn() {
  const data = await (await fetch('/city.json')).json()
  const regions = hierarchy(data).sum(d => 1).sort((a: any, b: any) => b.value - a.value)
  const root = (pack().size([1024, 1024]).padding(10))(regions)
  const { ctx } = initCanvas(el.value!)
  draw(ctx, root)
}

onMounted(() => {
  fn()
})
</script>

<template>
  <canvas ref="el" />
</template>
