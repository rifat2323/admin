import { TextField } from '@mui/material'

import React,{useEffect,useState,useTransition} from 'react'
import {UserDetails} from '../DataType'
import axios from 'axios'
import { useParams } from 'react-router'
import LazyLoad from 'react-lazy-load'
import {Img} from 'react-image'
import UserPieCharts from '../components/Charts/UserPieCharts'

const SingaleUser = () => {
    const baseUrl:string = import.meta.env.VITE_BASE_URl
    const [userData,setUserData] = useState<UserDetails>(Object)
    const {id} = useParams()
    const [isPending, startTransition] = useTransition()
    
    useEffect(()=>{
        const fetchDta =  async ():Promise<void> =>{
           try{
              const {data} = await axios.get<UserDetails>(`${baseUrl}/admin/user/${id}`)
              startTransition(()=>{
                setUserData(data)
              })
              
           }catch(error){
            console.log(error)
           }
        }
        fetchDta()
    },[])
    const Products = userData?.userBuyInfo?.map(item=>({value:item.total ?? 0, name:`${item.productIds?.length ?? 0} items`})) ?? []
  return (
    <div className=' w-full flex flex-col px-4 py-4 '>

         <h1 className=' text-zinc-950 font-extrabold text-2xl mb-4'>User info of {userData?.userInfo?.userName}</h1>
        <div className=' cutomizer w-full flex justify-around gap-5 md:gap-0 flex-col md:flex-row shadow items-center py-3 rounded-md'>
       {
        isPending ? "loading...":(
            <>
           
            <img src= {userData?.userInfo?.img ? userData?.userInfo?.img  : '' } style={{width:"100px", height:"100px", borderRadius:"50%"}} alt="user image" />
           <TextField label="user name" variant="outlined" value={userData?.userInfo?.userName} disabled/>
           <TextField label="user email" variant="outlined" value={userData?.userInfo?.email} disabled/>

           </>

        )
       }
        </div>
        {
            userData.userBuyInfo && (
                <>
              
                <div className=' w-full justify-center items-center min-h-56 mt-5 '>
         
                <UserPieCharts  Products ={Products}/>
        
                  </div>
                  <div className=' w-full justify-center items-center flex-col gap-2 px-4 '>
                    <h1 className=' text-slate-700 text-2xl font-bold my-4' >Purchase History 🙂</h1>
                     {
                       userData.userBuyInfo.map(item=>item.productIds?.map(item=>(
                            
                        <div className=' cutomizer w-full px-2 py-5 shadow flex justify-around flex-col md:flex-row md:py-2 items-center rounded' key={item.productId.id}>
                        <LazyLoad height={60} className=' h-8 w-full md:w-16'>
                          <Img src={item.productId.image} className=' h-16 md:h-16 w-full md:w-16 object-cover md:object-fill'/>
  
                        </LazyLoad>
                         <p className=' text-zinc-900 font-bold text-xl'>{item.productId.productName}</p>
                         <p className=' text-zinc-900 font-bold text-xl'>brand:{item.productId.brand}</p>
                         <p className=' text-zinc-900 font-bold text-xl'>price:${item.productId.price}</p>
                         <p className=' text-zinc-900 font-bold text-xl'>quantity:{item.productCount}</p>
                         <p className=' text-zinc-900 font-bold text-xl'> total: ${item.productCount * item.productId.price}</p>


                        </div>





                       )))


                     }
                      

                  
                 
                  </div>
                  </>
            ) 
        }
        
       
        
        </div>
  )
}

export default SingaleUser