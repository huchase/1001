<script setup lang="ts">
const { x, y } = useMouse({ type: 'client' })
const { element } = useElementByPoint({ x, y })
const bounding_ = reactive(useElementBounding(element))
useEventListener('scroll', bounding_.update, true)
const boxStyles_ = computed(() => {
  if (element.value) {
    return {
      display: 'block',
      width: `${bounding_.width}px`,
      height: `${bounding_.height}px`,
      left: `${bounding_.left}px`,
      top: `${bounding_.top}px`,
      // backgroundColor: '#3eaf7c44',
      border: '2px solid #3eaf7c',
      transition: 'all 0.05s linear',
    } as Record<string, string | number>
  }
  return {
    display: 'none',
  }
})
const pointStyles_ = computed<Record<string, string | number>>(() => ({
  transform: `translate(calc(${x.value}px - 50%), calc(${y.value}px - 50%))`,
}))
</script>

<template>
  <div
    :style="boxStyles_"
    fixed
    pointer-events-none
    z-9999
    border="1 $vp-c-brand"
  />
  <div
    :style="pointStyles_"
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
