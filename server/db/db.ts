import connection from './connection'
import { Donation } from '../../client/common/donation'
import { DonationOverThirty } from '../../client/common/donationoverthirtyk'

// export function getAllDonations(db = connection): Promise<Donation[]> {
//   return db('notexceedingtwentyk').select('*')
// }

export function getAllDonations(db = connection): Promise<Donation[]> {
  return db('notexceedingtwentyk')
    .select('*')
    .then((rows) => {
      return rows.map((row) => {
        return {
          id: row.id,
          interested_commercial_sector_of_donor: JSON.parse(
            row.interested_commercial_sector_of_donor
          ),
          firms_connected_with_donor: JSON.parse(
            row.firms_connected_with_donor
          ),
          // other properties
        }
      })
    })
}

export function getOneDonationsForThirtyK(
  id: number,
  db = connection
): Promise<DonationOverThirty[]> {
  return db('notexceedingthirtythousand').first().where({ id })
}

export function getAllDonationsForThirtyK(
  db = connection
): Promise<DonationOverThirty[]> {
  return db('notexceedingthirtythousand').select('*')
}

export function getOneDonation(id: number, db = connection): Promise<Donation> {
  return db('notexceedingtwentyk').first().where({ id })
}

//update funcs

export function updateDonation(
  id: number,
  updatedDonation: Donation,
  db = connection
): Promise<Donation[]> {
  return db('notexceedingtwentyk')
    .update({ ...updatedDonation }, [
      'political_party',
      'donor',
      'donation_amount',
      'date_received_by_electoral_commission',
      'interested_commercial_sector_of_donor',
      'firms_connected_with_donor',
    ])
    .where('id', id)
}
