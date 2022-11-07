<script setup lang="ts">
import { hierarchy, pack } from 'd3-hierarchy'
async function one() {
  const svgroot = document.getElementById('pic')

  const data = await (await fetch('/city.json')).json()
  const regions = hierarchy(data)
    .sum(d => 1)
    .sort((a, b) => b.value - a.value)

  const apack = pack()
    .size([1600, 1600])
    .padding(3)

  const root = apack(regions)

  function draw(parent: any, node: any, { fillStyle = 'rgba(0, 0, 0, 0.2)', textColor = 'white' } = {}) {
    const { x, y, r } = node
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    circle.setAttribute('cx', x)
    circle.setAttribute('cy', y)
    circle.setAttribute('r', r)
    circle.setAttribute('fill', fillStyle)
    circle.setAttribute('data-name', node.data.name)
    parent.appendChild(circle)
    // ...
    const children = node.children
    // console.log("ONE");
    if (children) {
      const group = document.createElementNS('http://www.w3.org/2000/svg', 'g')
      group.setAttribute('data-name', node.data.name)
      for (let i = 0; i < children.length; i++)
        draw(group, children[i], { fillStyle, textColor })

      parent.appendChild(group)
      // console.log("TWO");
    }
    else {
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
      text.setAttribute('fill', textColor)
      text.setAttribute('font-family', 'Arial')
      text.setAttribute('font-size', '1.5rem')
      text.setAttribute('text-anchor', 'middle')
      text.setAttribute('x', x)
      text.setAttribute('y', y)
      const name = node.data.name
      text.textContent = name
      parent.appendChild(text)
      // console.log("THREE");
    }
  }

  draw(svgroot, root)

  const activeTarget: any = null
  const titleEl: any = document.getElementById('title')

  function getTitle(target: any) {
    const name = target.getAttribute('data-name')
    if (target.parentNode && target.parentNode.nodeName === 'g') {
      const parentName = target.parentNode.getAttribute('data-name')
      return `${parentName}-${name}`
    }
    return name
  }
  svgroot.addEventListener('mousemove', (evt) => {
    let target: any = evt.target
    if (target.nodeName === 'text') {
      target = target.previousSibling
      // target = target.parentNode;
      // target.setAttribute('fill', 'rgb(255,0,255)')
      titleEl.textContent = getTitle(target)
    }
    if (activeTarget !== target) {
      if (activeTarget)
        activeTarget.setAttribute('fill', 'rgba(0, 0, 1, 0.2)')
    }

    target.setAttribute('fill', 'rgba(0, 128, 0, 0.1)')
    activeTarget = target
  })
}
onMounted(() => {
  one()
})
</script>

<template>
  <div>
    <svg id="pic" xmlns="http://www.w3.org/2000/svg" version="1.1" />
  </div>
</template>

<style scoped>
svg {
  height: 1600px;
  width: 1600px;
}
</style>
