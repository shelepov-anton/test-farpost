import cors from 'cors'
import express, { Application } from 'express'
import moderationFeedRoute from '@/routes/moderationFeedRoute'

// Server Initialization
const app: Application = express()

// Configuration
const PORT = 3001
const API_PATH = '/api/v1/'
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200,
}

// Request handlers
app.use(cors(corsOptions))
app.use(API_PATH, moderationFeedRoute)

// Start server
app.listen(PORT, () => {
    console.log('Server is Successfully Running on port: ' + PORT)
})
