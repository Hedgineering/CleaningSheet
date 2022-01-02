import dotenv from 'dotenv'
// configure the source .env file to be from absolute path to our config.env
dotenv.config({ path: __dirname + '/../config.env' })

// We'll be using express to create and manage our server
import express, { Request, Response, NextFunction } from 'express'
const app = express()

// This middleware is built in to express, it basically
// makes it so that all request/response body contents are
// parsed as json
app.use(express.json())

// Connecting Routes
import authRouter from './routes/auth.js'
app.use('/api/auth', authRouter) // Simple routing, you can see express documentation for info

const PORT = process.env.PORT || 5000 // Use environment variable as priority

const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
)

app.get('/', (req: Request, res: Response) => {
  res.send('asdf')
})
