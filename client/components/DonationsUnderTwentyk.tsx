import { useAppSelector } from '../hooks/redux'
import Donationundertwentyk from './SingleDonationUnderTwentyk'

export default function DonationsUnderTwentyKo() {
  const alldonationsundertwentyk = useAppSelector((state) => state.donations)
  console.log('DonationsUnderTwentyKo: ', alldonationsundertwentyk)
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
