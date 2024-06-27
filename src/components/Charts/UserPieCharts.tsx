import React from 'react'
import {UserDetails} from '../../DataType'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

interface ProductData {
  name: string | undefined;
  value: number | undefined;
 
}

interface Props {
  Products: ProductData[] | undefined;
}
const UserPieCharts = ({Products}:Props) => {

  console.log(Products)
    const data02 = [
        { name: 'January', value: 2400 },
        { name: 'February', value: 4567 },
        { name: 'March', value: 1398 },
        { name: 'April', value: 9800 },
        { name: 'May', value: 3908 },
        { name: 'June', value: 4800 },
      ];
      const data = Products && Products.length > 0 ? Products : data02;
      
  return (
<ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data }
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie dataKey="value" data={ data} cx={1200} cy={7000} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
  )
}

export default UserPieCharts