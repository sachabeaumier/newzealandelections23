import React, { PureComponent } from 'react'
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  CartesianGrid,
  Label,
} from 'recharts'
import * as D from '../common/donation'

const thirtydata = [
  {
    date_received_by_electoral_commission: '26 January 2022',
    'ACT New Zealand': 0,
    'New Zealand First': 35000,
    'New Zealand Labour Party': 0,
    'New Zealand National Party': 0,
    'The Green Party of Aotearoa New Zealand': 0,
    'The New Zealand National Party': 0,
    'Grand Total': 35000,
  },
  {
    date_received_by_electoral_commission: '14 March 2022',
    'ACT New Zealand': 885000,
    'New Zealand First': 0,
    'New Zealand Labour Party': 0,
    'New Zealand National Party': 0,
    'The Green Party of Aotearoa New Zealand': 0,
    'The New Zealand National Party': 0,
    'Grand Total': 885000,
  },
  {
    date_received_by_electoral_commission: '18 March 2022',
    'ACT New Zealand': 100000,
    'New Zealand First': 0,
    'New Zealand Labour Party': 0,
    'New Zealand National Party': 0,
    'The Green Party of Aotearoa New Zealand': 0,
    'The New Zealand National Party': 0,
    'Grand Total': 100000,
  },
  {
    date_received_by_electoral_commission: '21 March 2022',
    'ACT New Zealand': 0,
    'New Zealand First': 0,
    'New Zealand Labour Party': 0,
    'New Zealand National Party': 0,
    'The Green Party of Aotearoa New Zealand': 60782,
    'The New Zealand National Party': 0,
    'Grand Total': 60782,
  },
  {
    date_received_by_electoral_commission: '25 March 2022',
    'ACT New Zealand': 39530,
    'New Zealand First': 0,
    'New Zealand Labour Party': 0,
    'New Zealand National Party': 0,
    'The Green Party of Aotearoa New Zealand': 0,
    'The New Zealand National Party': 0,
    'Grand Total': 39530,
  },
  {
    date_received_by_electoral_commission: '4 April 2022',
    'ACT New Zealand': 0,
    'New Zealand First': 0,
    'New Zealand Labour Party': 0,
    'New Zealand National Party': 0,
    'The Green Party of Aotearoa New Zealand': 0,
    'The New Zealand National Party': 397600,
    'Grand Total': 397600,
  },
  {
    date_received_by_electoral_commission: '8 April 2022',
    'ACT New Zealand': 0,
    'New Zealand First': 0,
    'New Zealand Labour Party': 0,
    'New Zealand National Party': 0,
    'The Green Party of Aotearoa New Zealand': 0,
    'The New Zealand National Party': 264700,
    'Grand Total': 264700,
  },
  {
    date_received_by_electoral_commission: '13 April 2022',
    'ACT New Zealand': 0,
    'New Zealand First': 0,
    'New Zealand Labour Party': 0,
    'New Zealand National Party': 0,
    'The Green Party of Aotearoa New Zealand': 0,
    'The New Zealand National Party': 401000,
    'Grand Total': 401000,
  },
  {
    date_received_by_electoral_commission: '14 April 2022',
    'ACT New Zealand': 0,
    'New Zealand First': 0,
    'New Zealand Labour Party': 0,
    'New Zealand National Party': 0,
    'The Green Party of Aotearoa New Zealand': 0,
    'The New Zealand National Party': 250000,
    'Grand Total': 250000,
  },
  {
    date_received_by_electoral_commission: '22 April 2022',
    'ACT New Zealand': 0,
    'New Zealand First': 0,
    'New Zealand Labour Party': 100000,
    'New Zealand National Party': 0,
    'The Green Party of Aotearoa New Zealand': 0,
    'The New Zealand National Party': 0,
    'Grand Total': 100000,
  },
  {
    date_received_by_electoral_commission: '29 April 2022',
    'ACT New Zealand': 0,
    'New Zealand First': 0,
    'New Zealand Labour Party': 0,
    'New Zealand National Party': 0,
    'The Green Party of Aotearoa New Zealand': 0,
    'The New Zealand National Party': 50000,
    'Grand Total': 50000,
  },
  {
    date_received_by_electoral_commission: '9 May 2022',
    'ACT New Zealand': 0,
    'New Zealand First': 0,
    'New Zealand Labour Party': 0,
    'New Zealand National Party': 0,
    'The Green Party of Aotearoa New Zealand': 0,
    'The New Zealand National Party': 130000,
    'Grand Total': 130000,
  },
  {
    date_received_by_electoral_commission: '10 May 2022',
    'ACT New Zealand': 0,
    'New Zealand First': 0,
    'New Zealand Labour Party': 0,
    'New Zealand National Party': 0,
    'The Green Party of Aotearoa New Zealand': 0,
    'The New Zealand National Party': 55000,
    'Grand Total': 55000,
  },
  {
    date_received_by_electoral_commission: '17 May 2022',
    'ACT New Zealand': 0,
    'New Zealand First': 0,
    'New Zealand Labour Party': 0,
    'New Zealand National Party': 0,
    'The Green Party of Aotearoa New Zealand': 0,
    'The New Zealand National Party': 251995,
    'Grand Total': 251995,
  },
  {
    date_received_by_electoral_commission: '26 May 2022',
    'ACT New Zealand': 0,
    'New Zealand First': 0,
    'New Zealand Labour Party': 0,
    'New Zealand National Party': 0,
    'The Green Party of Aotearoa New Zealand': 0,
    'The New Zealand National Party': 104600,
    'Grand Total': 104600,
  },
  {
    date_received_by_electoral_commission: '27 May 2022',
    'ACT New Zealand': 0,
    'New Zealand First': 0,
    'New Zealand Labour Party': 0,
    'New Zealand National Party': 0,
    'The Green Party of Aotearoa New Zealand': 0,
    'The New Zealand National Party': 46000,
    'Grand Total': 46000,
  },
  {
    date_received_by_electoral_commission: '10 June 2022',
    'ACT New Zealand': 0,
    'New Zealand First': 0,
    'New Zealand Labour Party': 0,
    'New Zealand National Party': 0,
    'The Green Party of Aotearoa New Zealand': 0,
    'The New Zealand National Party': 50000,
    'Grand Total': 50000,
  },
  {
    date_received_by_electoral_commission: '23 June 2022',
    'ACT New Zealand': 31000,
    'New Zealand First': 0,
    'New Zealand Labour Party': 0,
    'New Zealand National Party': 0,
    'The Green Party of Aotearoa New Zealand': 0,
    'The New Zealand National Party': 0,
    'Grand Total': 31000,
  },
  {
    date_received_by_electoral_commission: '7 July 2022',
    'ACT New Zealand': 0,
    'New Zealand First': 0,
    'New Zealand Labour Party': 0,
    'New Zealand National Party': 0,
    'The Green Party of Aotearoa New Zealand': 0,
    'The New Zealand National Party': 250000,
    'Grand Total': 250000,
  },
  {
    date_received_by_electoral_commission: '5 September 2022',
    'ACT New Zealand': 60000,
    'New Zealand First': 0,
    'New Zealand Labour Party': 0,
    'New Zealand National Party': 0,
    'The Green Party of Aotearoa New Zealand': 0,
    'The New Zealand National Party': 0,
    'Grand Total': 60000,
  },
  {
    date_received_by_electoral_commission: '12 October 2022',
    'ACT New Zealand': 0,
    'New Zealand First': 0,
    'New Zealand Labour Party': 0,
    'New Zealand National Party': 0,
    'The Green Party of Aotearoa New Zealand': 30744,
    'The New Zealand National Party': 0,
    'Grand Total': 30744,
  },
  {
    date_received_by_electoral_commission: '14 November 2022',
    'ACT New Zealand': 0,
    'New Zealand First': 0,
    'New Zealand Labour Party': 0,
    'New Zealand National Party': 0,
    'The Green Party of Aotearoa New Zealand': 30945,
    'The New Zealand National Party': 0,
    'Grand Total': 30945,
  },
  {
    date_received_by_electoral_commission: '25 November 2022',
    'ACT New Zealand': 0,
    'New Zealand First': 0,
    'New Zealand Labour Party': 0,
    'New Zealand National Party': 0,
    'The Green Party of Aotearoa New Zealand': 0,
    'The New Zealand National Party': 60000,
    'Grand Total': 60000,
  },
  {
    date_received_by_electoral_commission: '5 December 2022',
    'ACT New Zealand': 35500,
    'New Zealand First': 0,
    'New Zealand Labour Party': 0,
    'New Zealand National Party': 0,
    'The Green Party of Aotearoa New Zealand': 0,
    'The New Zealand National Party': 0,
    'Grand Total': 35500,
  },
  {
    date_received_by_electoral_commission: '14 December 2022',
    'ACT New Zealand': 0,
    'New Zealand First': 0,
    'New Zealand Labour Party': 50000,
    'New Zealand National Party': 0,
    'The Green Party of Aotearoa New Zealand': 0,
    'The New Zealand National Party': 0,
    'Grand Total': 50000,
  },
  {
    date_received_by_electoral_commission: '22 December 2022',
    'ACT New Zealand': 0,
    'New Zealand First': 0,
    'New Zealand Labour Party': 0,
    'New Zealand National Party': 0,
    'The Green Party of Aotearoa New Zealand': 0,
    'The New Zealand National Party': 30340,
    'Grand Total': 30340,
  },
  // {
  //   date_received_by_electoral_commission: 'Grand Total',
  //   'ACT New Zealand': 1151030,
  //   'New Zealand First': 35000,
  //   'New Zealand Labour Party': 150000,
  //   'New Zealand National Party': 30340,
  //   'The Green Party of Aotearoa New Zealand': 122471,
  //   'The New Zealand National Party': 2341235,
  //   'Grand Total': 3799736,
  // },
]

export default class ThirtyLineChartFunction extends PureComponent {
  render() {
    return (
      <LineChart
        width={500}
        height={300}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        data={thirtydata}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date_received_by_electoral_commission">
          <Label value="date" position="bottom" />
        </XAxis>
        <YAxis>
          <Label value="Amount" angle={-90} position="left" />
        </YAxis>
        <Tooltip />

        <Line
          type="monotone"
          dataKey="DemocracyNZ"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="The Green Party of Aotearoa New Zealand"
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="ACT New Zealand"
          stroke="#f0dc02"
          activeDot={{ r: 8 }}
        />

        <Line
          type="monotone"
          dataKey="New Zealand Labour Party"
          stroke="#e60505"
          activeDot={{ r: 8 }}
        />

        <Line
          type="monotone"
          dataKey="The New Zealand National Party"
          stroke="#1331f0"
        />
        <Line type="monotone" dataKey="New Zealand First" stroke="#030202" />
      </LineChart>
    )
  }
}
