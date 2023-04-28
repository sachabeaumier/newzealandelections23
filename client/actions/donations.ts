import type { ThunkAction } from '../store'
import { Donation } from '../common/donation'
import { DonationOverThirty } from '../common/donationoverthirtyk'
import { getAllDonations } from '../apis/apiDonations'
import { setError } from './error'

export type DonationsAction = { type: 'SET_DONATION'; payload: Donation[] }
export type DonationsOverThirtyKAction = { type: 'SET_DONATION'; payload: DonationOverThirty[] }


export function showDonations(setdonation: Donation[]): DonationsAction {
  return {
    type: 'SET_DONATION',
    payload: setdonation,
  }
}

export function showDonationsOverThirty(setdonation: DonationOverThirty[]): DonationsOverThirtyKAction {
  return {
    type: 'SET_DONATION',
    payload: setdonation,
  }
}
