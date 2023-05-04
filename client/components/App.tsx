// import Donationundertwentyk from './SingleDonationUnderTwentyk'
import DonationsUnderTwentyKo from './DonationsUnderTwentyk'
import { fetchAllDonationsUnderTwenty } from '../actions/donations'
import { useAppDispatch } from '../hooks/redux'
import { useEffect } from 'react'
import Donationundertwentyk from './SingleDonationUnderTwentyk'
import { NavLink, Route, Routes } from 'react-router-dom'
// import Home from './Home'

function App() {
  return (
    <>
      <header className="header">
        <h1>New Zealand Political Donors Tracker API</h1>
      </header>
      <section className="main">
        <p>Welcome to </p>

        {/* <Routes>
          <Route path="/" element={<Donationundertwentyk />} />
        </Routes> */}

        <Routes>
          <Route path="/" element={<DonationsUnderTwentyKo />} />
        </Routes>
      </section>
    </>
  )
}

export default App
////////////////////////////////////
