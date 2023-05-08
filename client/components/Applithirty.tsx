import { useEffect, useState, PureComponent } from 'react'

export default function AppliThirty() {
  const [data, setdata] = useState()

  useEffect(() => {
    const fetchDatas = async () => {
      const res = await fetch(
        'http://localhost:3000/api/v1/2023/donationsnotexceedingthirtythousand'
      )
      const data = await res.json()
      console.log(data)
      setdata(data?.data)
    }
    fetchDatas()
  }, [])

  return <div className="AppliThirty">Donations over Thirty Test</div>
}