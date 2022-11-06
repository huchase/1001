<script setup lang="ts">
const router = useRouter()
function fn() {
  router.back()
}
const { width, height } = useWindowSize()
const { x, y } = useMouse({ type: 'client' })
const { element } = useElementByPoint({ x, y })
const bounding = reactive(useElementBounding(element))
useEventListener('scroll', bounding.update, true)
const boxStyles = computed(() => {
  if (element.value) {
    return {
      display: 'block',
      width: `${bounding.width}px`,
      height: `${bounding.height}px`,
      left: `${bounding.left}px`,
      top: `${bounding.top}px`,
      backgroundColor: '#3eaf7c44',
      transition: 'all 0.05s linear',
    } as Record<string, string | number>
  }
  return {
    display: 'none',
  }
})
const pointStyles = computed<Record<string, string | number>>(() => ({
  transform: `translate(calc(${x.value}px - 50%), calc(${y.value}px - 50%))`,
}))
</script>

<template>
  <div />
  <nav text-xl mt-6 inline-flex gap-2>
    <button icon-btn @click="fn">
      <div i-carbon:menu />
    </button>

    <!-- <button icon-btn>
      <div i-carbon:play-outline i-carbon:pause-outline />
    </button> -->
    <button icon-btn @click="toggleDark()">
      <div dark:i-carbon-moon i-carbon-sun />
    </button>

    <a
      icon-btn i-carbon-logo-github
      rel="noreferrer"
      href="https://github.com/huchase"
      target="_blank"
      title="GitHub"
    />
  </nav>
  <div>
    <p>screen: {{ width }} x {{ height }}</p>
  </div>
  <div
    :style="boxStyles"
    fixed
    pointer-events-none
    z-9999
    border="1 $vp-c-brand"
  />
  <div
    :style="pointStyles"
    fixed
    top-0
    left-0
    pointer-events-none
    w-2
    h-2
    rounded-full
    bg-green-400
    shadow
    z-999
  />
</template>
