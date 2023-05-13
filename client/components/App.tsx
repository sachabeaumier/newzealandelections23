import LineChartFunction from './Charts'
import AdjustedLineChartFunction from './AdjustedChart'
import BarChartFuncOverTwentyThous from './GrandTotalOver20K2022'

import ThirtyLineChartFunction from './ThirtyChart'

function App() {
  return (
    <>
      <header className="header">
        <h1>New Zealand Political Donors Tracker API</h1>
      </header>
      <section>
        <p>
          New Zealand is to hold a general election on the 14th of October 2023.
          Given the importance of this election, it is vitally important to have
          full transparency around whom is funding our political parties if we
          are to have faith in a democratic system. Looking through the lens of
          political economy, the influence and distribution of economic
          resources within a society must be understood as concomitant with that
          of the political system it resides in. Therefore the role of financial
          resources by those of the donor's sectoral or business interests
          should not be understated in the shaping of public policy and a
          party's legislative and political agenda.
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
          <p>
            This graph collates from the beginning of 2023 all the individual
            donations made of an amount less than $20,000. A list of the
            donor's, their amounts and the associated political parties can be
            found in the API below.
          </p>

          <p>
            <a href="http://localhost:3000/api/v1/2023/donationstwentythousand">
              All Individual Donations made under $20,000
            </a>
          </p>
        </div>

        <div>
          <LineChartFunction />
        </div>

        <div>
          <h2>
            2023 Individual Donations under $20,000 adjusted without the Act
            Party
          </h2>
          <AdjustedLineChartFunction />
        </div>

        <div>
          <h2>2022 Individual Donations over $20,000</h2>
          <ThirtyLineChartFunction />
        </div>

        <div>
          <h2>2022 Total of All Individual Donations over $20,000</h2>
          <BarChartFuncOverTwentyThous />
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
        <div></div>
      </section>
    </>
  )
}

export default App
////////////////////////////////////
