export function useCtx() {
  const canvas: any = document.querySelector('canvas')
  const ctx: any = canvas.getContext('2d')
  const { width, height } = canvas
  ctx.translate(0.5 * width, 0.5 * height)
  ctx.scale(1, -1)
  return ctx
}
