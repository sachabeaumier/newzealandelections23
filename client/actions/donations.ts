import type { ThunkAction } from '../store'
import { Donation } from '../common/donation'
import { getAllDonations } from '../apis/apiDonations'
import { setError } from './error'

export type DonationsAction = { type: 'SET_DONATION'; payload: Donation[] }

export function showDonations(setdonation: Donation[]): DonationsAction {
  return {
    type: 'SET_DONATION',
    payload: setdonation,
  }
}
