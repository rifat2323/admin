import React from 'react'
import { Bar, CartesianGrid, Legend, Tooltip, XAxis, YAxis,BarChart as BarCh,ResponsiveContainer} from 'recharts'

type DayRevenue = {
  day: string;
  totalRevenue: number;
};

type Props = {
  server: DayRevenue[] ;
};
const BarChart = ({server}:Props) => {
    const temp = [
        {
          "day": "saturday",
          
          "totalRevenue": 2400
        },
        {
          "day": "sunday",
          
          "totalRevenue": 1398
        },
        {
          "day": "monday",
          
          "totalRevenue": 9800
        },
        {
          "day": "tuesday",
          "uv": 2780,
          "totalRevenue": 3908
        },
        {
          "day": "wednesday",
          "uv": 1890,
          "totalRevenue": 4800
        },
        {
          "day": "thursday",
          "uv": 2390,
          "totalRevenue": 3800
        },
        {
          "day": "friday",
          
          "totalRevenue": 4300
        }
      ]
  const data = server?.length > 2? server:temp
  return (
  
  <ResponsiveContainer minWidth={100} height={280}>

 
   
  
    <BarCh  width={250} height={280} data={data}>
    <CartesianGrid strokeDasharray="0 0" stroke='#f3eeee' strokeOpacity={1} vertical={false} />
    <XAxis dataKey="day" axisLine={{ stroke: '#ffff',display:"none" }}  />
    <YAxis  axisLine={{ stroke: '#ffffff' }}/>
    <Tooltip cursor={{fill:"#f0ecec"}} />
    <Legend />
    <Bar dataKey="totalRevenue"  activeBar={false} fill="#090818"  />
   {/*  <Bar dataKey=#82ca9d" /> */}
  </BarCh>
  </ResponsiveContainer>
  )
}

export default BarChart