import { Vector2D } from './vector2d'
import { drawPoints as drawPara } from './drawPoints'
// export function drawPara(points: Vector2D[], context: any, {
//   strokeStyle = 'black',
//   fillStyle = null,
//   close = false,
// } = {}) {
//   context.strokeStyle = strokeStyle
//   context.beginPath()
//   context.moveTo(...points[0])
//   for (let i = 1; i < points.length; i++)
//     context.lineTo(...points[i])

//   if (close)
//     context.closePath()
//   if (fillStyle) {
//     context.fillStyle = fillStyle
//     context.fill()
//   }
//   context.stroke()
// }

export function paraMetic(xFunc: (...args: any[]) => any, yFunc: (...args: any[]) => any) {
  return function (start: number, end: number, seg = 100, ...args: any) {
    const points: Vector2D[] = []
    for (let i = 0; i <= seg; i++) {
      const p = i / seg
      const t = start * (1 - p) + end * p
      const x = xFunc(t, ...args) // 计算参数方程组的x
      const y = yFunc(t, ...args) // 计算参数方程组的y
      points.push(new Vector2D(x, y))
    }
    return {
      draw: drawPara.bind(null, points),
      points,
    }
  }
}

// Parabola
// fn(-5.5, 5.5).draw(ctx)
export const pParabola = paraMetic(
  t => 25 * t,
  t => 25 * t ** 2,
)

// Helical
// fn(0, 50, 1000, 5).draw(ctx, { strokeStyle: 'blue' });
export const pHelical = paraMetic(
  (t, l) => l * t * Math.cos(t),
  (t, l) => l * t * Math.sin(t),
)

// Star
// fn(0, Math.PI * 2, 1000,150 ).draw(ctx, { strokeStyle: 'red' });
export const pStar = paraMetic(
  (t, l) => l * Math.cos(t) ** 3,
  (t, l) => l * Math.sin(t) ** 3,
)

// Quadric Bezier
export const pQuadricBezier = paraMetic(
  (t, [{ x: x0 }, { x: x1 }, { x: x2 }]) => (1 - t) ** 2 * x0 + 2 * t * (1 - t) * x1 + t ** 2 * x2,
  (t, [{ y: y0 }, { y: y1 }, { y: y2 }]) => (1 - t) ** 2 * y0 + 2 * t * (1 - t) * y1 + t ** 2 * y2,
)

// Cubic Bezier
export const pCubicBezier = paraMetic(
  (t, [{ x: x0 }, { x: x1 }, { x: x2 }, { x: x3 }]) => (1 - t) ** 3 * x0 + 3 * t * (1 - t) ** 2 * x1 + 3 * (1 - t) * t ** 2 * x2 + t ** 3 * x3,
  (t, [{ y: y0 }, { y: y1 }, { y: y2 }, { y: y3 }]) => (1 - t) ** 3 * y0 + 3 * t * (1 - t) ** 2 * y1 + 3 * (1 - t) * t ** 2 * y2 + t ** 3 * y3,
)
