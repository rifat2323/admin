import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { IoBarChartSharp } from "react-icons/io5";
import { IoPieChartSharp } from "react-icons/io5";
import { IoMdPricetag } from "react-icons/io";
import { MdOutlineTagFaces } from "react-icons/md";
import LineCharts from '../Charts/LineCharts';
import  './top.css'
import axios from 'axios'


type data = {
   totalSales:number,
   totalSalesIncise:number,
   total_Order:number,
   total_OrderIncise:number,
   product_sold:number,
   product_sold_OrderIncise:number,
   new_customer:number
}
const TopHome = () => {
   const  baseUrl = import.meta.env.VITE_BASE_URl as string
   const [info,setInfo] = useState<data>(Object)
   console.log(info)
    useEffect(()=>{
      const fetchData =  async ():Promise<void>  =>{
          
         try{
          const {data} =  await axios.get<data>(`${baseUrl}/adminshow/highlightsadmins`)
          console.log(data)
          setInfo(data)

         }catch(error){
            console.log(error)
         }
      }
      fetchData();
    },[])
  return (
    <div className='topHome'>
     <div className='todasSales'>
        <div className='topText'>
      <h1 className=' text-xl text-black capitalize'>today sales</h1>
      <p className=' text-sm text-zinc-500 capitalize'>sales summary</p>
        </div>
        <div className='topSlaesCard'>
         <div className='topSlaesCardone colorsCard1'>
            <IoBarChartSharp fill='#e892f7'  size={20}/>
            <p className=' text-neutral-950 text-xl font-semibold'>$1K</p>
            <p className=' text-sm text-zinc-500 capitalize'>totals sales</p>
            <p className=' text-[12px] text-blue-900 capitalize'>+9% incise from last day</p>
            
         </div>
         <div className='topSlaesCardone colorsCard2'>
            <IoPieChartSharp fill='#f7907e'  size={20}/>
            <p className=' text-neutral-950 text-xl font-semibold'>300</p>
            <p className=' text-sm text-zinc-500 capitalize'>total Order</p>
            <p className=' text-[12px] text-blue-900 capitalize'>+9% incise from last day</p>
            
         </div>
         <div className='topSlaesCardone colorsCard3'>
            <IoMdPricetag fill='#f1abf7'  size={20}/>
            <p className=' text-neutral-950 text-xl font-semibold'>5</p>
            <p className=' text-sm text-zinc-500 capitalize'>product sold</p>
            <p className=' text-[12px] text-blue-900 capitalize'>+9% incise from last day</p>
            
         </div>
         <div className='topSlaesCardone colorsCard4'>
            <MdOutlineTagFaces fill='#f792a6'  size={20}/>
            <p className=' text-neutral-950 text-xl font-semibold'>10</p>
            <p className=' text-sm text-zinc-500 capitalize'>new customer</p>
            <p className=' text-[12px] text-blue-900 capitalize'>+9% incise from last day</p>
            
         </div>
        </div>

     </div>
     <div className='topCharts'>
     <h1 className=' text-indigo-950 font-semibold text-md mb-2 mt-1'>Yearly seals</h1>
         <LineCharts/>
     </div>
    </div>
  )
}

export default TopHome