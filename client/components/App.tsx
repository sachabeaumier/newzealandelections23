import React, { PureComponent } from 'react'
import DonationsUnderTwentyKo from './DonationsUnderTwentyk'
import { fetchAllDonationsUnderTwenty } from '../actions/donations'
import { useAppDispatch } from '../hooks/redux'
import { useEffect } from 'react'
import Donationundertwentyk from './SingleDonationUnderTwentyk'
import { NavLink, Route, Routes } from 'react-router-dom'
import LineChartFunction from './Charts'
import AdjustedLineChartFunction from './AdjustedChart'
import Appli from './Appli'

function App() {
  return (
    <>
      <header className="header">
        <h1>New Zealand Political Donors Tracker API</h1>
      </header>
      <section>
        <p>
          This year, New Zealand will have a general election on the 14th of
          October 2023. Given the importance of this election, it is vitaly
          important to have full transparency around whom is funding our
          political parties if we are to believe we have a fully democratic
          system. Looking through the lens of political economy, the role of
          commerce and the way financial resources are used to press and
          incentivise the legislative politic towards donor's sectoral or
          personal interests should not be understated in the shaping of public
          policy and a party's legislative agenda.
        </p>

        <p>
          Applying datascraping tools like Python's beautifulSoup package onto
          the New Zealand Electoral Commission website, this API currently
          catalogues all individually publicized donations under and over
          $20,000 to New Zealand political parties from the beginning of 2023.
          An ongoing project, this API will soon catalogue historical donations
          made in the past (where time permits).
        </p>
      </section>
      <section className="main">
        <h2>2023 Individual Donations under $20,000</h2>

        <div>
          <LineChartFunction />
        </div>
        <h2>
          2023 Individual Donations under $20,000 adjusted without the Act Party
        </h2>

        <div>
          <AdjustedLineChartFunction />
        </div>

        <p>To access the APIs, do use the links below</p>
        <p>
          <a href="http://localhost:3000/api/v1/2023/donationstwentythousand">
            All Individual Donations made under $20,000
          </a>
        </p>
        <p>
          <a href="http://localhost:3000/api/v1/2023/donationsthirtythousand">
            All Individual Donations made over $20,000
          </a>
        </p>
        <div>
          <p>
            http://localhost:3000/api/v1/2023/donationsnotexceedingtwentythousand
          </p>
        </div>

        <div>
          <Appli />
        </div>
      </section>
    </>
  )
}

export default App
////////////////////////////////////
