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
  {
    name: 'Try square',
  },
  {
    name: 'Try earcut.js',
  },
  {
    name: 'Pint & Square',
  },
  {
    name: 'Point & Square II',
  },
  {
    name: 'Fireworks',
  },
  {
    name: 'Color band',
  },
  {
    name: 'Cubehelix',
  },
  {
    name: 'Draft',
  },
  {
    name: 'Draft II',
  },
  {
    name: 'Draft III',
  },
  {
    name: 'Draft IV',
  },
  {
    name: 'Draft V',
  },
  {
    name: 'Draft VI',
  },
]

export const items = infos.map((info, idx) => {
  return {
    ...info,
    no: `${idx + 1}`.padStart(3, '0'),
  }
}).reverse()
