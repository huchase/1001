export function initCanvas(canvas: HTMLCanvasElement, width = 1024, height = 1024, center = false) {
  const ctx = canvas.getContext('2d')!

  const dpr = window.devicePixelRatio || 1

  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`
  canvas.width = dpr * width
  canvas.height = dpr * height
  ctx.scale(dpr, dpr)
  if (center) {
    ctx.translate(0.5 * width, 0.5 * height)
    ctx.scale(1, -1)
  }
  return { ctx, dpr }
}
