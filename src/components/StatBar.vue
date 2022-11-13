<script setup lang="ts">
const { width, height } = useWindowSize()
const { x, y } = useMouse()
</script>

<template>
  <div>
    <p>
      Window size: {{ width }} x {{ height }}
    </p>
    <p>
      Mouse position: {{ x }} x {{ y }}
    </p>
  </div>
</template>
