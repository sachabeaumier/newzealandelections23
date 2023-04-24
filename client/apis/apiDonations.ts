import request from 'superagent'
import { Donation } from '../common/donation'

export function getAllDonations(): Promise<Donation[]> {
  return request
    .get('/api/v1/2023/donationsnotexceedingtwentythousand')
    .then((res) => res.body)
}
