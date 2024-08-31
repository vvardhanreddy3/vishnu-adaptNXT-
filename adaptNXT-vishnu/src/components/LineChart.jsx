import React, { useState } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
  } from 'recharts';

const data = [
    {
      name: '06/30/2024-7/6/2024',
      Sales: 1404,
      Orders: 1600,
      right: 0
    },
    {
      name: '7/7/2024-7/13/2024',
      Sales: 804,
      Orders: 800,
      right: 2
    },
    {
      name: '7/21/2024-7/27/2024',
      Sales: 410,
      Orders: 800,
      right: 4
    }
  ];

const LineCharts = () => {
  return (
    <ResponsiveContainer width="100%" height="75%">
    <LineChart width="80%" height="60%" data={data}>
        <Line type="monotone" dataKey="Orders" stroke="orange" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Sales" stroke="#1CD6CD" />
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="name" padding={{ left: 3, right: 3 }}/>
        <YAxis yAxisId="right" orientation="right" dataKey="right"/>
        <YAxis />
        <Tooltip />
        <Legend />
    </LineChart>
    </ResponsiveContainer>
  )
}

export default LineCharts