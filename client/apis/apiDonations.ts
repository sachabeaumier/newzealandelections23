import request from 'superagent'
import { Donation } from '../common/donation'
import { DonationOverThirty } from '../common/donationoverthirtyk'

export function getAllDonations(): Promise<Donation[]> {
  return request
    .get('/api/v1/2023/donationsnotexceedingtwentythousand')
    .then((res) => res.body)
}

export function getAllDonationsForThirtyK(): Promise<DonationOverThirty[]> {
  return request
    .get('/api/v1/2023/donationsnotexceedingthirtythousand')
    .then((res) => res.body)
}
