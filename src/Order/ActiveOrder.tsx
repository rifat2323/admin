import React,{useEffect,useState,useMemo,useContext} from 'react'
import axios from 'axios'
import {order} from '../DataType'
import OrderStatus from '../components/OrderStatus/OrderStatus'
import { dataProvider } from '../Context/Context'


const ActiveOrder = () => {
  /* const [activeOrder,setActiveOrder] = useState<order[]>() */
  const {activeOrder,setActiveOrder} = useContext(dataProvider)
 
/*  const baseUrl:string = import.meta.env.VITE_BASE_URl
 
  useEffect(():void=>{
      const fetchData = async ():Promise<void> =>{
         try{
          const {data} = await axios.get<order[]>(`${baseUrl}/admin/activeorder`)
         
            setActiveOrder(data)
         
          
         }catch(error){
          console.log(error)
         }
      }
      fetchData()
  },[baseUrl]) */
  const result = useMemo(()=>activeOrder,[activeOrder])

  return (
    <div className='mainUser w-full flex flex-col min-h-screen py-5'>
       <h1 className=' text-2xl md:text-4xl text-slate-900 font-bold'>All your active orders are here</h1>
       <div className=' w-full px-5 flex flex-col mt-5'>
        <h1 className=' text-zinc-900 text-xl'>Total Active order is : {activeOrder?.length}</h1>
           <div className=' w-full flex flex-col justify-center items-center  gap-4'>
            {
              result?.map(item=>(
                <OrderStatus orderItem ={item} key={item._id}/>
              ))
            }
          
           </div>
       </div>

    </div>
  )
}

export default ActiveOrder