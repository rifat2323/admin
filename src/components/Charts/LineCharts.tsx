import React, { useEffect, useState } from 'react'
import { LineChart,CartesianGrid, XAxis,YAxis,Tooltip,Legend,Line,ResponsiveContainer } from 'recharts'
import '../tophome/top.css'
const LineCharts = () => {
    const [chartWidth, setChartWidth] = useState<number>(330);
    
  
   
    
    const data = [
        {
          "name": "Page A",
          "lastYear": 4000,
          "thisYear": 2400,
          "amt": 2400
        },
        {
          "name": "Page B",
          "lastYear": 3000,
          "thisYear": 1398,
          "amt": 2210
        },
        {
          "name": "Page C",
          "lastYear": 2000,
          "thisYear": 9800,
          "amt": 2290
        },
        {
          "name": "Page D",
          "lastYear": 2780,
          "thisYear": 3908,
          "amt": 2000
        },
        {
          "name": "Page E",
          "lastYear": 1890,
          "thisYear": 4800,
          "amt": 65141
        },
        {
          "name": "Page F",
          "lastYear": 2390,
          "thisYear": 3800,
          "amt":4000
        },
        {
          "name": "Page G",
          "lastYear": 3490,
          "thisYear": 4300,
          "amt": 0
        }
      ]
      
  return (
    <ResponsiveContainer minWidth={100} height={280}>

  
    <LineChart width={150} height={280} data={data}
 /*  margin={{ top: 5, right: 30, left: 20, bottom: 5 }} */ className=''>
  <CartesianGrid strokeDasharray="8 8" stroke='#ccc' opacity={0.1} />
  <XAxis dataKey="name" axisLine={{stroke:"#fffcfc"}} />
  <YAxis  axisLine={{stroke:"#fffcfc"}} />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="thisYear" stroke="#1bc27c" />
  <Line type="monotone" dataKey="lastYear" stroke="#df7f12" />
</LineChart>
</ResponsiveContainer>
  )
}

export default LineCharts