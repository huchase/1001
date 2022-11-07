<script setup lang="ts">
import GlRenderer from 'gl-renderer'
onMounted(() => {
  const vertex = `
      attribute vec2 a_vertexPosition;
      attribute vec2 uv;

      varying vec2 vUv;

      void main() {
        gl_PointSize = 1.0;
        vUv = uv;
        gl_Position = vec4(a_vertexPosition, 1, 1);
      }
    `

  const fragment = `
      #ifdef GL_ES
      precision highp float;
      #endif

      varying vec2 vUv;

      float random (vec2 st) {
          return fract(sin(dot(st.xy,
                              vec2(12.9898,78.233)))*
              43758.5453123);
      }

      void main() {
          vec2 st = vUv * 10.0;
          gl_FragColor.rgb = vec3(random(floor(st)));
          gl_FragColor.a = 1.0;
      }
    `

  const canvas = document.querySelector('canvas')
  const renderer = new GlRenderer(canvas)

  // load fragment shader and createProgram
  const program = renderer.compileSync(fragment, vertex)
  renderer.useProgram(program)

  renderer.setMeshData([{
    positions: [
      [-1, -1],
      [-1, 1],
      [1, 1],
      [1, -1],
    ],
    attributes: {
      uv: [
        [0, 0],
        [0, 1],
        [1, 1],
        [1, 0],
      ],
    },
    cells: [[0, 1, 2], [2, 0, 3]],
  }])

  renderer.render()
})
</script>

<template>
  <canvas height="1024" width="1024" />
</template>

<style scoped>

</style>
