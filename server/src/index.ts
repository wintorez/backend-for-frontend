import express, { Express, Request, Response } from 'express'

const app: Express = express()
const port = process.env.PORT || 8443

app.get('/api/message', (req: Request, res: Response) => {
  res.send('Hello from BFF!')
})

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
