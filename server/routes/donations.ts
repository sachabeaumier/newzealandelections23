import express from 'express'
import {
  getAllDonations,
  getOneDonation,
  getAllDonationsForThirtyK,
  getOneDonationsForThirtyK
} from '../db/db'

const router = express.Router()

router.get('/', (req, res) => {
  getAllDonations()
    .then((donations) => {
      res.json(donations)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.get('/:id', (req, res) => {
  getOneDonation(Number(req.params.id))
    .then((donation) => res.json(donation))
    .catch((err) => res.status(500).json({ status: 500, error: err.message }))
})



export default router
