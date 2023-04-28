import express from 'express'
import path from 'path'
import donations from './routes/donations'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/2023/donationsnotexceedingtwentythousand', donations)

export default server
