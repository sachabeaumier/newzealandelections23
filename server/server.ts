import express from 'express'
import path from 'path'
import donations from './routes/donations'
import donationsoverthirtyk from './routes/donationsoverthirtyk'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/2023/donationsnotexceedingtwentythousand', donations)
server.use(
  '/api/v1/2023/donationsnotexceedingthirtythousand',
  donationsoverthirtyk
)

export default server
