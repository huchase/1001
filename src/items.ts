export const infos = [
  {
    name: 'Try graph',
  },
  {
    name: 'Try canvas',
  },
]

export const items = infos.map((info, idx) => {
  return {
    ...info,
    no: `${idx + 1}`.padStart(3, '0'),
  }
})
