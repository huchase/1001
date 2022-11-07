import { Vector2D } from './vector2d'
const TAU_SEGMENTS = 60
const TAU = Math.PI * 2
const LINE_SEGMENTS = 60

export function regularShape(edges = 3, step: number, x: number, y: number): Vector2D[] {
  const ret = []
  const delta = Math.PI * (1 - (edges - 2) / edges)
  let p = new Vector2D(x, y)
  const dir = new Vector2D(step, 0)
  ret.push(p)
  for (let i = 0; i < edges; i++) {
    p = p.copy().add(dir.rotate(delta))
    ret.push(p)
  }
  return ret
}

export function arc(x0: number, y0: number, radius: number, startAng = 0, endAng = Math.PI * 2): Vector2D[] {
  const ang = Math.min(TAU, endAng - startAng)
  const ret = ang === TAU ? [] : [new Vector2D(x0, y0)] // TODO: !
  // const ret = []
  const segments = Math.round(TAU_SEGMENTS * ang / TAU)
  for (let i = 0; i <= segments; i++) {
    const x = x0 + radius * Math.cos(startAng + ang * i / segments)
    const y = y0 + radius * Math.sin(startAng + ang * i / segments)
    ret.push(new Vector2D(x, y))
  }
  return ret
}

export function ellipse(x0: number, y0: number, radiusX: number, radiusY: number, startAng = 0, endAng = Math.PI * 2): Vector2D[] {
  const ang = Math.min(TAU, endAng - startAng)
  const ret = ang === TAU ? [] : [new Vector2D(x0, y0)]
  const segments = Math.round(TAU_SEGMENTS * ang / TAU)
  for (let i = 0; i <= segments; i++) {
    const x = x0 + radiusX * Math.cos(startAng + ang * i / segments)
    const y = y0 + radiusY * Math.sin(startAng + ang * i / segments)
    ret.push(new Vector2D(x, y))
  }
  return ret
}

export function parabola(x0: number, y0: number, p: number, min: number, max: number): Vector2D[] {
  const ret: Vector2D[] = []
  for (let i = 0; i <= LINE_SEGMENTS; i++) {
    const s = i / 60
    const t = min * (1 - s) + max * s
    const x = x0 + 2 * p * t ** 2
    const y = y0 + 2 * p * t
    ret.push(new Vector2D(x, y))
  }
  return ret
}

