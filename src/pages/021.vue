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

      uniform float uTime;

      float random (vec2 st) {
          return fract(sin(dot(st.xy,
                              vec2(12.9898,78.233)))*
              43758.5453123);
      }

      void main() {
          vec2 st = vUv * vec2(100.0, 50.0);

          st.x -= (1.0 + 10.0 * random(vec2(floor(st.y)))) * uTime;

          vec2 ipos = floor(st);  // integer
          vec2 fpos = fract(st);  // fraction

          vec3 color = vec3(step(random(ipos), 0.7));
          color *= step(0.2,fpos.y);

          gl_FragColor.rgb = color;
          gl_FragColor.a = 1.0;
      }
    `

  const canvas = document.querySelector('canvas')
  const renderer = new GlRenderer(canvas)

  // load fragment shader and createProgram
  const program = renderer.compileSync(fragment, vertex)
  renderer.useProgram(program)
  renderer.uniforms.uTime = 0.0

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

  requestAnimationFrame(function update(t) {
    renderer.uniforms.uTime = 4 * t / 1000
    requestAnimationFrame(update)
  })
})
</script>

<template>
  <canvas height="1024" width="1024" />
</template>

<style scoped>

</style>
