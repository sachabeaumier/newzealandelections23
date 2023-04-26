/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('notexceedingthirtythousand').del()
  await knex('notexceedingthirtythousand').insert([
    {
      political_party: 'New Zealand National Party',
      donation_amount: 30340,
      date_received_by_electoral_commission: '22 December 2022',
      donor: 'Peter Goodfellow',
      address: '37 Ngaiwi Street Ōrākei Auckland',
    },
    {
      political_party: 'New Zealand Labour Party',
      donation_amount: 50000,
      date_received_by_electoral_commission: '14 December 2022',
      donor: 'Phillip Mills Family',
      address: '6 Cremorne Street Herne Bay Auckland',
    },
    {
      political_party: 'ACT New Zealand',
      donation_amount: 35500,
      date_received_by_electoral_commission: '5 December 2022',
      donor: 'Aaron Bhatnagar',
      address: '61 St Stephens Avenue Parnell Auckland',
    },
    {
      political_party: 'The New Zealand National Party',
      donation_amount: 60000,
      date_received_by_electoral_commission: '25 November 2022',
      donor: 'Bayley Corporation Limited',
      address: '30 Gaunt Street Auckland Central Auckland 1010',
    },
    {
      political_party: 'The Green Party of Aotearoa New Zealand',
      donation_amount: 30945,
      date_received_by_electoral_commission: '14 November 2022',
      donor: 'James Shaw',
      address: '29 Orangi Kaupapa Road Northland Wellington 6012',
    },
    {
      political_party: 'The Green Party of Aotearoa New Zealand',
      donation_amount: 30744,
      date_received_by_electoral_commission: '12 October 2022',
      donor: 'Marama Davidson',
      address: '5 Stratford Road Manurewa Auckland 2105',
    },
    {
      political_party: 'ACT New Zealand',
      donation_amount: 60000,
      date_received_by_electoral_commission: '5 September 2022',
      donor: 'Gary Lane',
      address: '9 Argyle Street Herne Bay Auckland',
    },
    {
      political_party: 'The New Zealand National Party',
      donation_amount: 250000,
      date_received_by_electoral_commission: '7 July 2022',
      donor: 'Murray John Bolton',
      address: 'Level 18, Suite 11 Albert Street Auckland',
    },
    {
      political_party: 'ACT New Zealand',
      donation_amount: 31000,
      date_received_by_electoral_commission: '23 June 2022',
      donor: 'Morris Owen',
      address: 'HeyApt 1A/120 St Aubyn Street New Plymouth 4310',
    },
    {
      political_party: 'The New Zealand National Party',
      donation_amount: 50000,
      date_received_by_electoral_commission: '10 June 2022',
      donor: 'JBSR Limited',
      address: 'Level 167 Shortland Street Auckland',
    },
    {
      political_party: 'The New Zealand National Party',
      donation_amount: 46000,
      date_received_by_electoral_commission: '27 May 2022',
      donor: 'Bryan Storey for Storey Family Trust',
      address: '34 Schofield Street Grey Lynn Auckland',
    },
    {
      political_party: 'The New Zealand National Party',
      donation_amount: 104600,
      date_received_by_electoral_commission: '26 May 2022',
      donor: 'Bayley Corporation Limited',
      address: '30 Gaunt Street Auckland Central Auckland',
    },
    {
      political_party: 'The New Zealand National Party',
      donation_amount: 100000,
      date_received_by_electoral_commission: '17 May 2022',
      donor: 'Benjamin Thomas Gough',
      address: '28 Waiwetu Street Christchurch',
    },
    {
      political_party: 'The New Zealand National Party',
      donation_amount: 100000,
      date_received_by_electoral_commission: '17 May 2022',
      donor: 'Christopher & Banks Ltd',
      address: 'Level 26188 Quay Street Auckland',
    },
    {
      political_party: 'The New Zealand National Party',
      donation_amount: 51995,
      date_received_by_electoral_commission: '17 May 2022',
      donor: 'Speargrass Holdings Ltd (Speargrass Trust)',
      address: '88 Speargrass Flat Road Dalefield Queenstown',
    },
    {
      political_party: 'The New Zealand National Party',
      donation_amount: 55000,
      date_received_by_electoral_commission: '10 May 2022',
      donor: 'Grant Baker',
      address: '7 Hampton Drive St Heliers Auckland',
    },
    {
      political_party: 'The New Zealand National Party',
      donation_amount: 130000,
      date_received_by_electoral_commission: '9 May 2022',
      donor: 'Brendan Lindsay and Jocelyn Lindsay',
      address: '11A Burwood Crescent Remuera Auckland',
    },
    {
      political_party: 'The New Zealand National Party',
      donation_amount: 50000,
      date_received_by_electoral_commission: '29 April 2022',
      donor: 'Hugh Ross Jones',
      address: '39 Saltburn Road Milford',
    },
    {
      political_party: 'New Zealand Labour Party',
      donation_amount: 100000,
      date_received_by_electoral_commission: '22 April 2022',
      donor: 'Hon Robert Smellie QC',
      address:
        'Grace Joel Retirement Village 59/184 St Heliers Bay Road St Heliers Auckland',
    },
    {
      political_party: 'The New Zealand National Party',
      donation_amount: 250000,
      date_received_by_electoral_commission: '14 April 2022',
      donor: 'Nicholas James Mowbray',
      address: '186 Mahoenui Valley Road Coatesville Auckland',
    },
    {
      political_party: 'The New Zealand National Party',
      donation_amount: 50000,
      date_received_by_electoral_commission: '13 April 2022',
      donor: 'Lani Hagaman',
      address: '10 Coldstream Court Christchurch',
    },
    {
      political_party: 'The New Zealand National Party',
      donation_amount: 250000,
      date_received_by_electoral_commission: '13 April 2022',
      donor: 'Graeme Richard Hart',
      address: 'Level 9148 Quay Street Auckland',
    },
    {
      political_party: 'The New Zealand National Party',
      donation_amount: 101000,
      date_received_by_electoral_commission: '13 April 2022',
      donor: 'James Francis Speedy',
      address: '18 Elimas Drive Pakuranga Auckland',
    },
    {
      political_party: 'The New Zealand National Party',
      donation_amount: 62500,
      date_received_by_electoral_commission: '8 April 2022',
      donor: 'Peter James Vela',
      address: '176 Pencarrow Road Tamahere Hamilton',
    },
    {
      political_party: 'The New Zealand National Party',
      donation_amount: 50000,
      date_received_by_electoral_commission: '8 April 2022',
      donor: 'Michael George Thorburn',
      address: '91 Arney Road Remuera Auckland',
    },
    {
      political_party: 'The New Zealand National Party',
      donation_amount: 100000,
      date_received_by_electoral_commission: '8 April 2022',
      donor: 'Craig Leonard Heatley',
      address: '10C Brett Avenue Takapuna Auckland',
    },
    {
      political_party: 'The New Zealand National Party',
      donation_amount: 52200,
      date_received_by_electoral_commission: '8 April 2022',
      donor: 'Jeffrey Graeme Douglas',
      address: '285 Victoria Avenue Remuera Auckland',
    },
    {
      political_party: 'The New Zealand National Party',
      donation_amount: 100000,
      date_received_by_electoral_commission: '4 April 2022',
      donor: 'Gary Rodney Lane',
      address: '9 Argyle Street Herne Bay Auckland',
    },
    {
      political_party: 'The New Zealand National Party',
      donation_amount: 44600,
      date_received_by_electoral_commission: '4 April 2022',
      donor: 'Stonewood Group',
      address: 'Shed 19 Princes Wharf 137 Quay Street Auckland',
    },
    {
      political_party: 'The New Zealand National Party',
      donation_amount: 103000,
      date_received_by_electoral_commission: '4 April 2022',
      donor: 'Graeme Thomas Harrison',
      address: '143 Forest DriveMethven',
    },
    {
      political_party: 'The New Zealand National Party',
      donation_amount: 50000,
      date_received_by_electoral_commission: '4 April 2022',
      donor: 'Mark J Wyborn',
      address: '1C/89 Halsey Street Auckland Central Auckland',
    },
    {
      political_party: 'The New Zealand National Party',
      donation_amount: 100000,
      date_received_by_electoral_commission: '4 April 2022',
      donor: 'Trevor Farmer',
      address: '6/16 Viaduct Harbour Avenue Auckland Central Auckland',
    },
    {
      political_party: 'ACT New Zealand',
      donation_amount: 39530,
      date_received_by_electoral_commission: '25 March 2022',
      donor: 'Dr Donald Thomas Brash',
      address: '311/184 Symonds Street Eden Terrace Auckland',
    },
    {
      political_party: 'The Green Party of Aotearoa New Zealand',
      donation_amount: 30466,
      date_received_by_electoral_commission: '21 March 2022',
      donor: 'Marama Davidson',
      address: '5 Stratford Road Manurewa Auckland2105',
    },
    {
      political_party: 'The Green Party of Aotearoa New Zealand',
      donation_amount: 30316,
      date_received_by_electoral_commission: '21 March 2022',
      donor: 'James Shaw',
      address: '29 Orangi Kaupapa Road Northland Wellington 6021',
    },
    {
      political_party: 'ACT New Zealand',
      donation_amount: 100000,
      date_received_by_electoral_commission: '18 March 2022',
      donor: 'Trevor Farmer',
      address: '6/16 Viaduct Harbour Avenue Auckland Central Auckland',
    },
    {
      political_party: 'ACT New Zealand',
      donation_amount: 50000,
      date_received_by_electoral_commission: '14 March 2022',
      donor: 'Stephen Jennings',
      address: '568 South Road Omata New Plymouth',
    },
    {
      political_party: 'ACT New Zealand',
      donation_amount: 100000,
      date_received_by_electoral_commission: '14 March 2022',
      donor: 'Graeme Edwards',
      address: '4/119 St Stephens Avenue Parnell Auckland',
    },
    {
      political_party: 'ACT New Zealand',
      donation_amount: 100000,
      date_received_by_electoral_commission: '14 March 2022',
      donor: 'Graeme Hart',
      address: '743 Riddell Road Glendowie Auckland',
    },
    {
      political_party: 'ACT New Zealand',
      donation_amount: 100000,
      date_received_by_electoral_commission: '14 March 2022',
      donor: 'Lynn Craig Turner',
      address: '78 Paritai Drive Orakei Auckland',
    },
    {
      political_party: 'ACT New Zealand',
      donation_amount: 100000,
      date_received_by_electoral_commission: '14 March 2022',
      donor: 'Dame Jenny Gibbs',
      address: '31 Paritai Drive Orakei Auckland',
    },
    {
      political_party: 'ACT New Zealand',
      donation_amount: 100000,
      date_received_by_electoral_commission: '14 March 2022',
      donor: 'Rodney Drury',
      address: '10 Carlton Gore Road Roseneath Wellington',
    },
    {
      political_party: 'ACT New Zealand',
      donation_amount: 100000,
      date_received_by_electoral_commission: '14 March 2022',
      donor: 'Murray Chandler',
      address: '14/97 Shortland Street Auckland Central Auckland',
    },
    {
      political_party: 'ACT New Zealand',
      donation_amount: 120000,
      date_received_by_electoral_commission: '14 March 2022',
      donor: 'John Harman',
      address: '2/55 Sentinel Road Herne Bay Auckland',
    },
    {
      political_party: 'ACT New Zealand',
      donation_amount: 65000,
      date_received_by_electoral_commission: '14 March 2022',
      donor: 'Grant Baker',
      address: '7 Hampton Drive St Heliers Auckland',
    },
    {
      political_party: 'ACT New Zealand',
      donation_amount: 50000,
      date_received_by_electoral_commission: '14 March 2022',
      donor: 'Michael George Thorburn',
      address: '91 Arney Road Remuera Auckland',
    },
    {
      political_party: 'New Zealand First',
      donation_amount: 35000,
      date_received_by_electoral_commission: '26 January 2022',
      donor: 'Troy Bowker',
      address: 'Caniwi Capital 111 The Terrace Wellington',
    },
  ])
}