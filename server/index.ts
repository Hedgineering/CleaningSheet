import dotenv from 'dotenv'
// configure the source .env file to be from absolute path to our config.env
dotenv.config({path: __dirname + '/../config.env'})

import express from 'express'
const app = express()

const PORT = process.env.PORT || 5000 // Use environment variable as priority

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
