import { useAppDispatch, useAppSelector } from '../hooks/redux'
import Donationundertwentyk from './SingleDonationUnderTwentyk'
import { showDonations } from '../actions/donations'
import { Link } from 'react-router-dom'

export default function DonationsUnderTwentyK() {
  const alldonationsundertwentyk = useAppSelector((state) => state.donations)

  return (
    <>
      <div className="grid-container"></div>
    </>
  )
}
