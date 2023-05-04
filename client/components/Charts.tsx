import React, { PureComponent } from 'react'
import {
  RadarChart,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  CartesianGrid,
  Label,
} from 'recharts'
import * as D from '../common/donation'

const lineChartData = [
  {
    date: '03/03/2023',
    ACT: 0,
    DemocracyNZ: 0,
    Greens: 0,
    Labour: 0,
    National: 0,
    NZFirst: 116162,
    Total: 116162,
  },
  {
    date: '07/03/2023',
    ACT: 0,
    DemocracyNZ: 20000,
    Greens: 0,
    Labour: 0,
    National: 0,
    NZFirst: 0,
    Total: 20000,
  },
  {
    date: '10/03/2023',
    ACT: 100000,
    DemocracyNZ: 0,
    Greens: 0,
    Labour: 0,
    National: 0,
    NZFirst: 0,
    Total: 100000,
  },
  {
    date: '13/03/2023',
    ACT: 0,
    DemocracyNZ: 0,
    Greens: 0,
    Labour: 50000,
    National: 0,
    NZFirst: 0,
    Total: 50000,
  },
  {
    date: '17/03/2023',
    ACT: 50000,
    DemocracyNZ: 0,
    Greens: 0,
    Labour: 0,
    National: 20040,
    NZFirst: 0,
    Total: 70040,
  },
  {
    date: '23/03/2023',
    ACT: 100000,
    DemocracyNZ: 0,
    Greens: 0,
    Labour: 0,
    National: 0,
    NZFirst: 0,
    Total: 100000,
  },
  {
    date: '24/03/2023',
    ACT: 725000,
    DemocracyNZ: 0,
    Greens: 0,
    Labour: 0,
    National: 0,
    NZFirst: 0,
    Total: 725000,
  },
  {
    date: '03/04/2023',
    ACT: 0,
    DemocracyNZ: 0,
    Greens: 50000,
    Labour: 0,
    National: 120030,
    NZFirst: 0,
    Total: 170030,
  },
  {
    date: '06/04/2023',
    ACT: 0,
    DemocracyNZ: 0,
    Greens: 0,
    Labour: 100000,
    National: 0,
    NZFirst: 0,
    Total: 100000,
  },
  {
    date: '12/04/2023',
    ACT: 0,
    DemocracyNZ: 0,
    Greens: 0,
    Labour: 0,
    National: 22000,
    NZFirst: 50000,
    Total: 72000,
  },
  {
    date: '14/04/2023',
    ACT: 0,
    DemocracyNZ: 0,
    Greens: 0,
    Labour: 0,
    National: 0,
    NZFirst: 0,
    Total: 0,
  },
  {
    date: '17/04/2023',
    ACT: 0,
    DemocracyNZ: 0,
    Greens: 0,
    Labour: 0,
    National: 50000,
    NZFirst: 0,
    Total: 50000,
  },
  {
    date: 'Grand Total',
    ACT: 975000,
    DemocracyNZ: 20000,
    Greens: 50000,
    Labour: 150000,
    National: 212070,
    NZFirst: 216162,
    Total: 1623232,
  },
]

// const renderLineChart = (
//   <LineChart
//     width={730}
//     height={250}
//     data={lineChartData}
//     margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//   >
//     <CartesianGrid strokeDasharray="3 3" />
//     <XAxis dataKey="date" />
//     <YAxis />
//     <Tooltip />
//     <Legend />
//     <Line type="monotone" dataKey="value1" stroke="#8884d8" />
//     <Line type="monotone" dataKey="value5" stroke="#82ca9d" />
//   </LineChart>
// )

export default class LineChartFunction extends PureComponent {
  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={lineChartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date">
          <Label value="Date of Donation" position="bottom" />
        </XAxis>
        <YAxis>
          <Label value="Amount" angle={-90} position="left" />
        </YAxis>

        <Tooltip />
        <Line
          type="monotone"
          dataKey="ACT"
          stroke="#f0dc02"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="DemocracyNZ"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="Greens"
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
        />

        <Line
          type="monotone"
          dataKey="Labour"
          stroke="#e60505"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="National" stroke="#1331f0" />
        <Line type="monotone" dataKey="NZFirst" stroke="#030202" />
      </LineChart>
    )
  }
}
