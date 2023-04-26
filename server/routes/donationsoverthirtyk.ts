import express from 'express'
import { getAllDonationsForThirtyK } from '../db/db'

const router = express.Router()

router.get('/', (req, res) => {
  getAllDonationsForThirtyK()
    .then((donations) => {
      res.json(donations)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

export default router
