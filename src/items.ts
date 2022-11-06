export const infos = [
  {
    name: 'Start',
  },
  {
    name: 'Arc',
  },
]

export const items = infos.map((info, idx) => {
  return {
    ...info,
    no: `${idx + 1}`.padStart(3, '0'),
  }
})
