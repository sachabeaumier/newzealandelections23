import request from 'superagent'
import { Donation } from '../common/donation'
import { DonationOverThirty } from '../common/donationoverthirtyk'

// export function getAllDonations(): Promise<Donation[]> {
//   return request
//     .get('/api/v1/2023/donationsnotexceedingtwentythousand')
//     .then((res) => res.body)
// }

// export function getAllDonations(): Promise<Donation[]> {
//   return request
//     .get('/api/v1/2023/donationsnotexceedingtwentythousand')
//     .then((res) => res.body.json)
// }

export function getAllDonations(): Promise<Donation[]> {
  return new Promise((resolve, reject) => {
    request
      .get('/api/v1/2023/donationsnotexceedingtwentythousand')
      .end((err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res.body)
        }
      })
  }).then((donations: any) => {
    return donations.map((donation) => {
      return {
        id: donation.id,
        interested_commercial_sector_of_donor: JSON.parse(
          donation.interested_commercial_sector_of_donor
        ),
        firms_connected_with_donor: JSON.parse(
          donation.firms_connected_with_donor
        ),
        // other properties
      }
    })
  })
}

// app.get('/api/v1/2023/donationsnotexceedingtwentythousand', (req, res) => {
//   getAllDonations()
//     .then((donations) => {
//       res.json(donations);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({ message: 'Internal server error' });
//     });
// });

export function getAllDonationsForThirtyK(): Promise<DonationOverThirty[]> {
  return request
    .get('/api/v1/2023/donationsnotexceedingthirtythousand')
    .then((res) => res.body)
}
