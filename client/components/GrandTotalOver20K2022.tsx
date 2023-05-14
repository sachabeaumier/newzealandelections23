import { PureComponent } from 'react'
import {
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
  CartesianGrid,
  Bar,
  BarChart,
} from 'recharts'

const grandtotaldata = [
  {
    date_received_by_electoral_commission: 'Grand Total',
    'ACT New Zealand': 1151030,
    'New Zealand First': 35000,
    'New Zealand Labour Party': 150000,
    'New Zealand National Party': 30340,
    'The Green Party of Aotearoa New Zealand': 122471,
    'The New Zealand National Party': 2341235,
    'Grand Total': 3799736,
  },
]
export default class BarChartFuncOverTwentyThous extends PureComponent {
  render() {
    return (
      <BarChart width={730} height={250} data={grandtotaldata}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis>
          <Label value="Amount" position="left" />
        </YAxis>
        <Tooltip />
        <Legend />
        <Bar dataKey="ACT New Zealand" fill="#f0dc02" />
        <Bar dataKey="New Zealand First" fill="#030202" />
        <Bar dataKey="The Green Party of Aotearoa New Zealand" fill="#82ca9d" />
        <Bar dataKey="New Zealand Labour Party" fill="#e60505" />
        <Bar dataKey="The New Zealand National Party" fill="#1331f0" />
        {/* <Bar dataKey="Grand Total" fill="#82ca9d" /> */}
      </BarChart>
    )
  }
}
