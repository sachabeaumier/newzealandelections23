/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('notexceedingtwentyk').del()
  await knex('notexceedingtwentyk').insert([
    {
      political_party: 'National Party',
      donor: 'Philip Maurice Carter',
      donation_amount: 50000,
      date_received_by_electoral_commission: '17/04/2023',
      interested_commercial_sector_of_donor: [
        'property_development',
        'property',
        'hotels',
        'banking_and_finance',
      ],
      firms_connected_with_donor: [
        'carter_group',
        'pyne_gould',
        'heartland_bank',
      ],
    },
    {
      political_party: 'New Zealand First',
      donor: 'Trevor Farmer',
      donation_amount: 50000,
      date_received_by_electoral_commission: '14/04/2023',
      interested_commercial_sector_of_donor: [
        'property_development',
        'property',
        'horseracing',
      ],
      firms_connected_with_donor: [
        'viaduct_holdings_company',
        'tramco',
        'tappenden_holdings',
      ],
    },
    {
      political_party: 'New Zealand First',
      donor: 'Mark Whyborn',
      donation_amount: 50000,
      date_received_by_electoral_commission: '12/04/2023',
      interested_commercial_sector_of_donor: [
        'property_evelopment',
        'property',
        'hotels',
        'horseracing',
      ],
      firms_connected_with_donor: ['viaduct_holdings_company'],
    },
    {
      political_party: 'National Party',
      donor: 'Graeme Thomas Harrison',
      donation_amount: 22000,
      date_received_by_electoral_commission: '12/04/2023',
      interested_commercial_sector_of_donor: [
        'meat',
        'fisheries',
        'dairy',
        'agriculture',
      ],
      firms_connected_with_donor: ['ANZCO', 'sealords', 'itoham_foods'],
    },
    {
      political_party: 'Labour',
      donor: 'Islay Little',
      donation_amount: 100000,
      date_received_by_electoral_commission: '6/04/2023',
      interested_commercial_sector_of_donor: ['na'],
      firms_connected_with_donor: ['na'],
    },
    {
      political_party: 'Green Party of Aotearoa',
      donor: 'Phillip Mills',
      donation_amount: 50000,
      date_received_by_electoral_commission: '3/4/23',
      interested_commercial_sector_of_donor: ['gyms'],
      firms_connected_with_donor: ['les_mills'],
    },
    {
      political_party: 'National Party',
      donor: 'Velocity Freight Limited',
      donation_amount: 100000,
      date_received_by_electoral_commission: '3/4/23',
      interested_commercial_sector_of_donor: ['logistics', 'freight'],
      firms_connected_with_donor: ['mainstream'],
    },
    {
      political_party: 'National Party',
      donor: 'Tracy Summerfield',
      donation_amount: 20030,
      date_received_by_electoral_commission: '3/4/23',
      interested_commercial_sector_of_donor: ['education', 'childcare'],
      firms_connected_with_donor: ['the_cats_pyjamas_preschool'],
    },
    {
      political_party: 'ACT',
      donor: 'Christopher Meehan',
      donation_amount: 50000,
      date_received_by_electoral_commission: '24/03/2023',
      interested_commercial_sector_of_donor: '[“property_development”]',
      firms_connected_with_donor: [
        'winton_property_group',
        'waterfall_park_developments',
        'lakeside_developments',
      ],
    },
    {
      political_party: 'ACT',
      donor: 'Align Farm Investments Limited',
      donation_amount: 100000,
      date_received_by_electoral_commission: '24/03/2023',
      interested_commercial_sector_of_donor: ['farming', 'dairy'],
      firms_connected_with_donor: ['picardy_holdings_limited'],
    },
    {
      political_party: 'ACT',
      donor: 'Christopher Reeve',
      donation_amount: 25000,
      date_received_by_electoral_commission: '24/03/2023',
      interested_commercial_sector_of_donor: [
        'medical_technology',
        'property',
        'property_developer',
      ],
      firms_connected_with_donor: ['upstream_medical_technologies', 'caldera'],
    },
    {
      political_party: 'ACT',
      donor: 'Christopher & Banks Limited',
      donation_amount: 100000,
      date_received_by_electoral_commission: '24/03/2023',
      interested_commercial_sector_of_donor: [
        'banking_and_finance',
        'technology',
      ],
      firms_connected_with_donor: ['pushPay', 'diligent'],
    },
    {
      political_party: 'ACT',
      donor: 'Graeme Edwards, Beethoven TrustApartment',
      donation_amount: 50000,
      date_received_by_electoral_commission: '24/03/2023',
      interested_commercial_sector_of_donor: ['na'],
      firms_connected_with_donor: ['na'],
    },
    {
      political_party: 'ACT',
      donor: 'Gary Lane',
      donation_amount: 50000,
      date_received_by_electoral_commission: '24/03/2023',
      interested_commercial_sector_of_donor: [
        'pharmaceuticals',
        'boat_building',
        'banking_and_finance',
        'property',
        'food',
        'golf_courses',
      ],
      firms_connected_with_donor: ['lane_capital_group'],
    },
    {
      political_party: 'ACT',
      donor: 'Murray Chandler',
      donation_amount: 100000,
      date_received_by_electoral_commission: '24/03/2023',
      interested_commercial_sector_of_donor: ['na'],
      firms_connected_with_donor: ['na'],
    },
    {
      political_party: 'ACT',
      donor: 'Graeme Richard Hart',
      donation_amount: 100000,
      date_received_by_electoral_commission: '24/03/2023',
      interested_commercial_sector_of_donor: [
        'construction',
        'building_supplies',
        'packaging',
        'banking_and_finance',
      ],
      firms_connected_with_donor: [
        'carter_holt_harvey',
        'reynolds_consumer_products',
      ],
    },
    {
      political_party: 'ACT',
      donor: 'Trevor Farmer',
      donation_amount: 100000,
      date_received_by_electoral_commission: '24/03/2023',
      interested_commercial_sector_of_donor: [
        'property_development',
        'property',
        'horseracing',
      ],
      firms_connected_with_donor: [
        'viaduct_holdings_company',
        'tramco',
        'tappenden_holdings',
      ],
    },
    {
      political_party: 'ACT',
      donor: 'Michael George Thorburn',
      donation_amount: 50000,
      date_received_by_electoral_commission: '24/03/2023',
      interested_commercial_sector_of_donor: ['retail'],
      firms_connected_with_donor: ['thorburn_holdings_limited', 'ECC'],
    },
    {
      political_party: 'ACT',
      donor: 'Nicholas James Mowbray',
      donation_amount: 100000,
      date_received_by_electoral_commission: '23/03/2023',
      interested_commercial_sector_of_donor: ['Manufacturing'],
      firms_connected_with_donor: ['ZURU'],
    },
    {
      political_party: 'ACT',
      donor: 'Brendan Lindsay',
      donation_amount: 50000,
      date_received_by_electoral_commission: '17/03/2023',
      interested_commercial_sector_of_donor: ['manufacturing'],
      firms_connected_with_donor: ['sistema_plastics', 'cambridge_horse_stud'],
    },
    {
      political_party: 'National Party',
      donor: 'Vanessa Weenink',
      donation_amount: 20040,
      date_received_by_electoral_commission: '17/03/2023',
      interested_commercial_sector_of_donor: ['na'],
      firms_connected_with_donor: ['papanui_medical_centre'],
    },
    {
      political_party: 'Labour',
      donor: 'New Zealand Dairy Workers Union',
      donation_amount: 50000,
      date_received_by_electoral_commission: '13/03/2023',
      interested_commercial_sector_of_donor: ['union'],
      firms_connected_with_donor: ['NZ_dairy_workers_union'],
    },
    {
      political_party: 'ACT',
      donor: 'Sir Peter Vela',
      donation_amount: 50000,
      date_received_by_electoral_commission: '10/03/2023',
      interested_commercial_sector_of_donor: JSON.stringify([
        'fishing',
        'horseracing',
      ]),
      firms_connected_with_donor: JSON.stringify([
        'vela_fishing',
        'pencarrow_stud',
      ]),
    },
    {
      political_party: 'ACT',
      donor: 'Dame Jenny Gibbs',
      donation_amount: 50000,
      date_received_by_electoral_commission: '10/03/2023',
      interested_commercial_sector_of_donor: ['na'],
      firms_connected_with_donor: ['na'],
    },
    {
      political_party: 'DemocracyNZ',
      donor: 'Steve Dent',
      donation_amount: 20000,
      date_received_by_electoral_commission: '7/03/2023',
      interested_commercial_sector_of_donor: ['na'],
      firms_connected_with_donor: ['na'],
    },
    {
      political_party: 'New Zealand First',
      donor: 'The Estate of Hugh Barr',
      donation_amount: 116162,
      date_received_by_electoral_commission: '3/3/23',
      interested_commercial_sector_of_donor: ['na'],
      firms_connected_with_donor: ['na'],
    },
  ])
}
