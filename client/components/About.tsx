const About = () => {
  return (
    <>
      <div className="aboutmain">
        <section className="about_section">
          <h1>What is the purpose of this website</h1>
          <p>
            This website aims to track and understand the nature of financial
            donations made to New Zealand political parties for this coming
            election in 2023. Within the discipline of Political Economy, the
            drivers of change and innovation within the market economy is not
            abstract or seperate from the political but rather concimitant and
            predicated on the way the state implements public policy to
            construct the parameters of how firms interact or constitute itself
            (i.e. the actually existing market as an institution with its own
            rules and regulations of conduct). This project aims to build a more
            cohesive picture of this holistic conceptualization of the market by
            analyzing the nature of financial donations made to political
            parties, identifying sectoral interests that aim to influence/lobby
            the type of policy decisions political parties may make after the
            2023 New Zealand election
          </p>
        </section>
        <section className="about_how_section">
          <h1>Methododolgy and technology used</h1>
          <p>
            The majority of this data was scrapped using the Python BeautfulSoup
            package and plotted together with React ReCharts for the frontend
            visualization.
          </p>
        </section>
      </div>
    </>
  )
}
