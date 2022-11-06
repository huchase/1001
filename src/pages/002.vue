<script setup lang="ts">
import { hierarchy, pack } from 'd3-hierarchy'
function one() {
  const canvas: any = document.getElementById('box')
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = 'red'
  ctx.beginPath()
  ctx.save()
  ctx.translate(50, 50)
  ctx.rect(0.5 * canvas.width - 50, 0.5 * canvas.height - 50, 200, 200)
  ctx.restore()
  ctx.fill()
}

async function two() {
  const data = await (await fetch('/src/data/city.json')).json()
  const regions = hierarchy(data).sum(d => 1).sort((a: any, b: any) => b.value - a.value)
  const apack = pack().size([1600, 1600]).padding(10)
  const root = apack(regions)

  const canvas: any = document.querySelector('.app')
  const context = canvas.getContext('2d')
  const TAU = 2 * Math.PI

  function draw(ctx: any, node: any, { fillStyle = 'rgba(0, 0, 0, 0.2)', textColor = 'white' } = {}) {
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

  draw(context, root)
}

onMounted(() => {
  one()
  two()
})
</script>

<template>
  <canvas id="box" height="512" width="512" />
  <canvas class="app" height="1600" width="1600" />
</template>
