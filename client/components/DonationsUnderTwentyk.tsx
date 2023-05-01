import { useAppDispatch, useAppSelector } from '../hooks/redux'
import Donationundertwentyk from './SingleDonationUnderTwentyk'
import { DonationsUnderTwenty } from '../actions/donations'
import { Link } from 'react-router-dom'
import { Donation } from '../common/donation'
import { fetchAllDonationsUnderTwenty } from '../actions/donations'

export default function DonationsUnderTwentyKo() {
  const alldonationsundertwentyk = useAppSelector((state) => state.donations)

  return (
    <>
      <div className="grid-container">
        {alldonationsundertwentyk.map((donation: any) => (
          <Donationundertwentyk key={donation.id} {...donation} />
        ))}
      </div>
    </>
  )
}
