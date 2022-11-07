import type { Vector2D } from './vector2d'

export function draw(points: Vector2D[], ctx: any, strokeStyle = 'black', fillStyle = null) {
  ctx.strokeStyle = strokeStyle
  ctx.beginPath()
  ctx.moveTo(...points[0])
  for (let i = 1; i < points.length; i++)
    ctx.lineTo(...points[i])

  ctx.closePath()
  if (fillStyle) {
    ctx.fillStyle = fillStyle
    ctx.fill()
  }
  ctx.stroke()
}
