import type { Vector2D } from './vector2d'

export function sDraw(context: any, points: Vector2D[], {
  fillStyle = 'black',
  close = false,
  rule = 'nonzero',
} = {}) {
  context.beginPath()
  context.moveTo(...points[0])
  for (let i = 1; i < points.length; i++)
    context.lineTo(...points[i])

  if (close)
    context.closePath()
  context.fillStyle = fillStyle
  context.fill(rule)
}
