import {
  DonationsAction,
  // DonationsOverThirtyKAction,
} from '../actions/donations'
import { Donation } from '../common/donation'
import { DonationOverThirty } from '../common/donationoverthirtyk'

const initialState = [] as Donation[]

// const donationsReducer = (
//   state = initialState,
//   action: DonationsAction
// ): Donation[] => {
//   const { type, payload } = action
//   switch (type) {
//     case 'SET_DONATION':
//       return payload

// }

const donationsReducer = (
  state: Donation[] = [], // Define the initial state here
  action: DonationsAction
): Donation[] => {
  const { type, payload } = action
  switch (type) {
    case 'SET_DONATION':
      return payload
    default:
      return state
  }
}

export default donationsReducer
