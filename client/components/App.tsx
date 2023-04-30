import Donationundertwentyk from './SingleDonationUnderTwentyk'
import DonationsUnderTwentyK from './DonationsUnderTwentyk'
import { fetchAllDonationsUnderTwenty } from '../actions/donations'
import { useAppDispatch } from '../hooks/redux'
import { useEffect } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllDonationsUnderTwenty())
  }, [])
  return (
    <>
      <h1>New Zealand Political Party Donors Tracker API</h1>
      <header className="header">
        <h1>New Zealand Political Party Donors Tracker API</h1>
      </header>
      <section className="main">
        <Home />
        {/* add your code here */}
        {/* <Routes>
          <Route path="/" element={<DonationsUnderTwentyK />} />
        </Routes> */}
      </section>
    </>
  )
}

export default App
