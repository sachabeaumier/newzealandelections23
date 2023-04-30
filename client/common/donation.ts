export interface Donation {
  id?: number
  political_party: string
  donor: string
  date_received_by_electoral_commission: string
  interested_commercial_sector_of_donor: string[]
  firms_connected_with_donor: string[]
}
