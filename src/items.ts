export const infos = [
  {
    name: '几种画图表方法',
  },
  {
    name: '尝试 Canvas',
  },
  {
    name: '尝试 SVG',
  },
  {
    name: '尝试 WebGL',
  },
  {
    name: '尝试开源库 rough.js',
  },
  {
    name: '梅花树',
  },
  {
    name: '线段拟合',
  },
  {
    name: '参数方程',
  },
  {
    name: '面的画法',
  },
  {
    name: '三角剖分',
  },
  {
    name: '点在面中吗?1',
  },
  {
    name: '点在面中吗?2',
  },
  {
    name: '烟花',
  },
  {
    name: '颜色带',
  },
  {
    name: 'Cubehelix 颜色系统',
  },
  {
    name: '图片转灰色',
  },
  {
    name: '草稿1',
  },
  {
    name: '草稿2',
  },
  {
    name: '草稿3',
  },
  {
    name: '草稿4',
  },
  {
    name: '草稿5',
  },
]

export const items = infos.map((info, idx) => {
  return {
    ...info,
    no: `${idx + 1}`.padStart(3, '0'),
  }
}).reverse()
