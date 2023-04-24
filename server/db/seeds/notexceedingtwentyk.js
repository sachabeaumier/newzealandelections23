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
      interested_commercial_sector_of_donor:
        '[“Property Development”, “Property”, “Hotels”,“Banking and Financial Services”]',
      firms_connected_with_donor:
        '[“Carter Group”, “Pyne Gould”, “Heartland Bank”]',
    },
    {
      political_party: 'New Zealand First',
      donor: 'Trevor Farmer',
      donation_amount: 50000,
      date_received_by_electoral_commission: '14/04/2023',
      interested_commercial_sector_of_donor:
        '[“Property Development”, “Property”, “Horseracing”]',
      firms_connected_with_donor:
        '[“Viaduct Harbour Holdings”, “Tramco”, “Tappenden Holdings”]',
    },
    {
      political_party: 'New Zealand First',
      donor: 'Mark Whyborn',
      donation_amount: 50000,
      date_received_by_electoral_commission: '12/04/2023',
      interested_commercial_sector_of_donor:
        '[“Property Development”, “Property”, “Hotels”, “Horseracing”]',
      firms_connected_with_donor: '[“Viaduct Harbour Holdings”]',
    },
    {
      political_party: 'National Party',
      donor: 'Graeme Thomas Harrison',
      donation_amount: 22000,
      date_received_by_electoral_commission: '12/04/2023',
      interested_commercial_sector_of_donor:
        '[“Meat”, “Fisheries”, “Dairy”, “Agriculture”]',
      firms_connected_with_donor: '[“ANZCO”, “Sealords”, “Itoham Foods”]',
    },
    {
      political_party: 'Labour',
      donor: 'Islay Little',
      donation_amount: 100000,
      date_received_by_electoral_commission: '6/04/2023',
      interested_commercial_sector_of_donor: '[“na”]',
      firms_connected_with_donor: '[“na”]',
    },
    {
      political_party: 'Green Party of Aotearoa',
      donor: 'Phillip Mills',
      donation_amount: 50000,
      date_received_by_electoral_commission: '3/4/23',
      interested_commercial_sector_of_donor: '[“gyms”]',
      firms_connected_with_donor: '[“Les Mills”]',
    },
    {
      political_party: 'National Party',
      donor: 'Velocity Freight Limited',
      donation_amount: 100000,
      date_received_by_electoral_commission: '3/4/23',
      interested_commercial_sector_of_donor: '[“Logistics”, “Freight”]',
      firms_connected_with_donor: '[“Mainstream”]',
    },
    {
      political_party: 'National Party',
      donor: 'Tracy Summerfield',
      donation_amount: 20030,
      date_received_by_electoral_commission: '3/4/23',
      interested_commercial_sector_of_donor: '[“Education”, “Childcare”]',
      firms_connected_with_donor: '[“The Cats Pyjamas Preschool”]',
    },
    {
      political_party: 'ACT',
      donor: 'Christopher Meehan',
      donation_amount: 50000,
      date_received_by_electoral_commission: '24/03/2023',
      interested_commercial_sector_of_donor: '[“Property Development”]',
      firms_connected_with_donor:
        '[“Winton Property Group”, “Waterfall Park Developments ”, “Lakeside Developments”]',
    },
    {
      political_party: 'ACT',
      donor: 'Align Farm Investments Limited',
      donation_amount: 100000,
      date_received_by_electoral_commission: '24/03/2023',
      interested_commercial_sector_of_donor: '[“Farming”, “Dairy”] ',
      firms_connected_with_donor: '[“Picardy Holdings Limited\n”]',
    },
    {
      political_party: 'ACT',
      donor: 'Christopher Reeve',
      donation_amount: 25000,
      date_received_by_electoral_commission: '24/03/2023',
      interested_commercial_sector_of_donor:
        '[“Medical Technology”, “Property”, “Property Developer”]',
      firms_connected_with_donor:
        '[“Upstream Medical Technologies”, “Caldera”]',
    },
    {
      political_party: 'ACT',
      donor: 'Christopher & Banks Limited',
      donation_amount: 100000,
      date_received_by_electoral_commission: '24/03/2023',
      interested_commercial_sector_of_donor:
        '[“Banking and Financial Services”, “Technology”]',
      firms_connected_with_donor: '[“PushPay”, “Diligent”]',
    },
    {
      political_party: 'ACT',
      donor: 'Graeme Edwards, Beethoven TrustApartment',
      donation_amount: 50000,
      date_received_by_electoral_commission: '24/03/2023',
      interested_commercial_sector_of_donor: '[“na”]',
      firms_connected_with_donor: '[“na”]',
    },
    {
      political_party: 'ACT',
      donor: 'Gary Lane',
      donation_amount: 50000,
      date_received_by_electoral_commission: '24/03/2023',
      interested_commercial_sector_of_donor:
        '[“Pharmaceuticals, “Boat building”, “Banking and Financial Services”, “Property”, “Food”, “Golf Courses”]',
      firms_connected_with_donor: '[“Lane Capital Group”]',
    },
    {
      political_party: 'ACT',
      donor: 'Murray Chandler',
      donation_amount: 100000,
      date_received_by_electoral_commission: '24/03/2023',
      interested_commercial_sector_of_donor: '[“na”]',
      firms_connected_with_donor: '[“na”]',
    },
    {
      political_party: 'ACT',
      donor: 'Graeme Richard Hart',
      donation_amount: 100000,
      date_received_by_electoral_commission: '24/03/2023',
      interested_commercial_sector_of_donor:
        '[“Construction”, “Building Supplies”, “Packaging”, “Banking and Financial Services”]',
      firms_connected_with_donor:
        '[“Carter Holt Harvey”, “Reynolds Consumer Products”]',
    },
    {
      political_party: 'ACT',
      donor: 'Trevor Farmer',
      donation_amount: 100000,
      date_received_by_electoral_commission: '24/03/2023',
      interested_commercial_sector_of_donor:
        '[“Property Development”, “Property”, “Horseracing”]',
      firms_connected_with_donor:
        '[“Viaduct Harbour Holdings”, “Tramco”, “Tappenden Holdings”]',
    },
    {
      political_party: 'ACT',
      donor: 'Michael George Thorburn',
      donation_amount: 50000,
      date_received_by_electoral_commission: '24/03/2023',
      interested_commercial_sector_of_donor: '[“Retail”]',
      firms_connected_with_donor: '[“Thorburn Holdings Limited”, “ECC”]',
    },
    {
      political_party: 'ACT',
      donor: 'Nicholas James Mowbray',
      donation_amount: 100000,
      date_received_by_electoral_commission: '23/03/2023',
      interested_commercial_sector_of_donor: '[“Manufacturing”]',
      firms_connected_with_donor: '[“ZURU”]',
    },
    {
      political_party: 'ACT',
      donor: 'Brendan Lindsay',
      donation_amount: 50000,
      date_received_by_electoral_commission: '17/03/2023',
      interested_commercial_sector_of_donor: '[“Manufacturing”]',
      firms_connected_with_donor:
        '[“Sistema Plastics”, “Cambridge Horse Stud”]',
    },
    {
      political_party: 'National Party',
      donor: 'Vanessa Weenink',
      donation_amount: 20040,
      date_received_by_electoral_commission: '17/03/2023',
      interested_commercial_sector_of_donor: '[“na”]',
      firms_connected_with_donor: '[“Papanui Medical Centre”]',
    },
    {
      political_party: 'Labour',
      donor: 'New Zealand Dairy Workers Union',
      donation_amount: 50000,
      date_received_by_electoral_commission: '13/03/2023',
      interested_commercial_sector_of_donor: '[“Workers Union”]',
      firms_connected_with_donor: '[“New Zealand Dairy Workers Union”]',
    },
    {
      political_party: 'ACT',
      donor: 'Sir Peter Vela',
      donation_amount: 50000,
      date_received_by_electoral_commission: '10/03/2023',
      interested_commercial_sector_of_donor: '[“Fishing”, “Horseracing”]',
      firms_connected_with_donor: '[“Vela Fishing”, “Pencarrow Stud”]',
    },
    {
      political_party: 'ACT',
      donor: 'Dame Jenny Gibbs',
      donation_amount: 50000,
      date_received_by_electoral_commission: '10/03/2023',
      interested_commercial_sector_of_donor: '[“na”]',
      firms_connected_with_donor: '[“na”]',
    },
    {
      political_party: 'DemocracyNZ',
      donor: 'Steve Dent',
      donation_amount: 20000,
      date_received_by_electoral_commission: '7/03/2023',
      interested_commercial_sector_of_donor: '[“na”]',
      firms_connected_with_donor: '[“na”]',
    },
    {
      political_party: 'New Zealand First',
      donor: 'The Estate of Hugh BarrC/-',
      donation_amount: 116162,
      date_received_by_electoral_commission: '3/3/23',
      interested_commercial_sector_of_donor: '[“na”]',
      firms_connected_with_donor: '[“na”]',
    },
  ])
}
