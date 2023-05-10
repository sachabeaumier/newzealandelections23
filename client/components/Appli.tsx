import { useEffect, useState, PureComponent } from 'react'
import ThirtyLineChartFunction from './ThirtyChart'

export default function Appli() {
  const [data, setdata] = useState()

  useEffect(() => {
    const fetchDatas = async () => {
      const res = await fetch(
        'http://localhost:3000/api/v1/2023/donationsnotexceedingtwentythousand'
      )
      const data = await res.json()
      console.log(data)
      setdata(data?.data)
    }
    fetchDatas()
  }, [])

  return (
    <div className="Appli">
      How to use Recharts with React
      <Appli data={data} />
    </div>
  )
}
