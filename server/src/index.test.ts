import request from 'supertest'
import express from 'express'
import helmet from 'helmet'

const app = express()
app.use(helmet())

app.get('/api/message', (req, res) => {
  res.send('Hello World!')
})

describe('Express Server', () => {
  it('GET /api/message returns Hello World!', async () => {
    const response = await request(app).get('/api/message')
    expect(response.status).toBe(200)
    expect(response.text).toBe('Hello World!')
  })
})
