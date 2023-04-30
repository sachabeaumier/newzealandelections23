import * as D from '../common/donation'

export default function Donationundertwentyk(donation: D.Donation) {
  return (
    <div>
      <h2>Political Party:</h2>
      <p>{donation.political_party}</p>
      <h2>Date donation received by the Electoral Commission:</h2>
      <p>{donation.date_received_by_electoral_commission}</p>
      <h2>Donor:</h2>
      <p>{donation.donor}</p>
      <h2>Firms connected with Donor:</h2>
      <p>{donation.firms_connected_with_donor}</p>
      <h2>Economic Sector associated with donor:</h2>
      <p>{donation.interested_commercial_sector_of_donor}</p>

      <p></p>
    </div>
  )
}
