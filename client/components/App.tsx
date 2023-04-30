import Donationundertwentyk from './SingleDonationUnderTwentyk'
import DonationsUnderTwentyKo from './DonationsUnderTwentyk'
import { fetchAllDonationsUnderTwenty } from '../actions/donations'
import { useAppDispatch } from '../hooks/redux'
import { useEffect } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'

function App() {
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(fetchAllDonationsUnderTwenty())
  // }, [])

  return (
    <>
      <div>
        <h1>New Zealand Political Party Donors Tracker API</h1>
        <header className="header">
          <h1>New Zealand Political Party Donors Tracker API</h1>
        </header>
        <section className="main">
          <h1>New Zealand Political Party Donors Tracker API</h1>

          {/* <Home /> */}
          {/* add your code here */}
          {/* <Routes>
            <Route path="/" element={<DonationsUnderTwentyKo />} />
          </Routes> */}
        </section>
      </div>
    </>
  )
}

export default App
