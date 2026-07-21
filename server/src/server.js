import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import contactRoutes from './routes/contactRoutes.js'

dotenv.config()
const app = express()
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }))
app.use(express.json())
app.get('/api/health', (_req, res) => res.json({ status: 'ok', message: 'City Harvest API is ready for connection.' }))
app.use('/api/contact', contactRoutes)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`API listening on port ${port}`))
