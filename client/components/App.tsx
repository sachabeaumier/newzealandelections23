import React, { PureComponent } from 'react'
import DonationsUnderTwentyKo from './DonationsUnderTwentyk'
import { fetchAllDonationsUnderTwenty } from '../actions/donations'
import { useAppDispatch } from '../hooks/redux'
import { useEffect } from 'react'
import Donationundertwentyk from './SingleDonationUnderTwentyk'
import { NavLink, Route, Routes } from 'react-router-dom'
import LineChartFunction from './Charts'
import AdjustedLineChartFunction from './AdjustedChart'

function App() {
  return (
    <>
      <header className="header">
        <h1>New Zealand Political Donors Tracker API</h1>
      </header>
      <section>
        <p>2023 is an Election year</p>
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

        <p>
          This Line Graph plots collated data concerning individual donations of
          under $20,0000 made donors to New Zealand political Parties since the
          beginning of 2023
        </p>
      </section>
    </>
  )
}

export default App
////////////////////////////////////
