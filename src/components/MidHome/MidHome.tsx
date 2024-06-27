import React, { useEffect,useState } from 'react'
import './mid.css'
import axios from 'axios';
import BarChart from './../Charts/BarChart';

import LineCharts from './../Charts/LineCharts';

type days ={
  day:string,
  totalRevenue:number
}
const MidHome = () => {
  const baseUrl = import.meta.env.VITE_BASE_URl as string
  const [daysRavinue,setDaysRavinue] = useState<days[] | []>([])
  const [productSold,setPRoductSold] = useState<days[] | []>([])
  console.log(daysRavinue)
  useEffect(()=>{
    const fetchData = async (): Promise<void> =>{
      try{
          const {data} =await axios.get(`${baseUrl}/adminshow/totalreveneu`)
          setDaysRavinue(data)
      }catch(error){
        console.log(error);
      }
    }
    fetchData()
  },[])
  useEffect(()=>{
    const fetchData = async (): Promise<void> =>{
      try{
          const {data} =await axios.get(`${baseUrl}/adminshow/productSold`)
          setPRoductSold(data)
      }catch(error){
        console.log(error);
      }
    }
    fetchData()
  },[])
  return (
    <div className='MidHome'>
       
     <div className='barChart1'>
     <h1 className=' text-indigo-950 font-semibold text-md mb-2 mt-1'>Total Revenue</h1>
     <BarChart server = {daysRavinue}/>
     </div>
  
   <div className='lineChart2 cutomizer'>
   <h1 className=' text-indigo-950 font-semibold text-md mb-2 mt-1'>Customer</h1>
 <LineCharts/>
   </div>
   <div className='barChat2 cutomizer'>
   <h1 className=' text-indigo-950 font-semibold text-md mb-2 mt-1'>ProductSold</h1>
    <BarChart server={productSold}/>
   </div>

    </div>
  )
}

export default MidHome