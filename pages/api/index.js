import nc from 'next-connect'

// build the handler and chain the verbs
const handler = nc()
  .get((req, res) => {
    res.json({ message: 'OK' })
  })
  .post((req, res) => {
    res.json({ message: 'posted' })
  })

export default handler
