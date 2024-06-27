import React,{useState} from 'react'
import {order} from '../../DataType'
import { BsThreeDots } from "react-icons/bs";
import axios from 'axios';
type Props = {
    orderItem : order
}

const OrderStatus = ({orderItem}:Props) => {
    const [isVisiable,setIsVisiable] = useState<boolean> (false)
    const [items,setItems] = useState<order> (orderItem)
      const baseUrl:string = import.meta.env.VITE_BASE_URl


    const handelVisiable =  () =>{
      setIsVisiable((prev)=>!prev)
    }
    const postStatus = async (value:"way"| 'delivered' ,id:string):Promise<void> =>{
      const newItems = {...items, deliveryStatus:value }
      setItems(newItems)
      setIsVisiable(false)
       try{
          const {data} = await axios.get(`${baseUrl}/admin/updateorderstatus?id=${id}&status=${value}`)
          console.log(data)
       }catch(error){
        console.log(error)
       }
      
    }
  return (
    <div className=' cutomizer w-full shadow py-5 flex flex-col md:flex-row px-2 justify-around items-center rounded-sm '>
     <p className=' text-slate-800 text-sm font-light'>userId:{items.userId}</p>
     <p className=' text-slate-900 text-sm font-light'>total:{items.total}</p>
     <p className=' text-slate-900 text-sm font-light'>paid:{items.paid ? "yes": "no"}</p>
     <p className=' text-slate-900 text-sm font-light'>active:{items.active ? "yes": "no"}</p>
     <p className=' text-slate-900 text-sm font-bold'>status:{items.deliveryStatus}</p>
     <div className=' relative' onMouseLeave={()=>setIsVisiable(false)}>
      <BsThreeDots className='group' fill='#000000' cursor={"pointer"} size={25} onClick={handelVisiable}/>
       <div className={`absolute -bottom-20  -left-16 z-10 bg-white shadow-lg rounded  w-32  h-20 flex justify-around items-center flex-col ${isVisiable ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}  transition duration-300`}>
        <li value={'way'} onClick ={(e)=>postStatus("way",items._id)}  className=' text-center font-bold text-zinc-800 cursor-pointer w-full py-2 hover:bg-slate-100 transition-all ' >on the way</li>
        <li value={'delivered'} onClick={(e)=>postStatus("delivered",items._id)}  className=' text-center font-bold text-zinc-800 cursor-pointer w-full py-2 hover:bg-slate-100'>delivered</li>
       </div>
     </div>

       
    </div>
  )
}

export default OrderStatus