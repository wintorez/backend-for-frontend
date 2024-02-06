import express, { Express, Request, Response } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

const app: Express = express()
const port = process.env.PORT || 8443

app.use(helmet())
app.use(morgan('combined'))

app.get('/api/message', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
