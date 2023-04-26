import connection from './connection'
import { Donation } from '../../client/common/donation'
import { DonationOverThirty } from '../../client/common/donationoverthirtyk'

export function getAllDonations(db = connection): Promise<Donation[]> {
  return db('notexceedingtwentyk').select('*')
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
