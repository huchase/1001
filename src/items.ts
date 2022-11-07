export const infos = [
  {
    name: 'Try graph',
  },
  {
    name: 'Try canvas',
  },
  {
    name: 'Try svg',
  },
  {
    name: 'Try WebGL',
  },
  {
    name: 'Try rough.js',
  },
  {
    name: 'Plum tree',
  },
  {
    name: 'Line fitting',
  },
  {
    name: 'Parameter equation',
  },
]

export const items = infos.map((info, idx) => {
  return {
    ...info,
    no: `${idx + 1}`.padStart(3, '0'),
  }
}).reverse()
