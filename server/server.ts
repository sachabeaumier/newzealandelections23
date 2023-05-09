import express from 'express'
import path from 'path'
import donations from './routes/donations'
import donationsoverthirtyk from './routes/donationsoverthirtyk'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/2023/donationstwentythousand', donations)
server.use('/api/v1/2023/donationsthirtythousand', donationsoverthirtyk)

server.get('*', (req, res) => {
  res.sendFile(__dirname, './public/index.html')
})

export default server
