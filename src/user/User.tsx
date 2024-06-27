import {Pagination} from "@mui/material"
import { Select,MenuItem,InputLabel } from "@mui/material"
import LazyLoad from "react-lazy-load"
 import {Img} from 'react-image'
import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState,useTransition } from "react"
 import {user} from '../DataType'
 import Profile from './blank.jpg'
 import './user.css'

// use sort later also fix that in the server folder
const User = () => {
  const baseUrl:string = import.meta.env.VITE_BASE_URl
   const [data,setData] = useState<user[]> ([])
   const [page ,setPage] = useState <number>(1)
   const [isPending, startTransition] = useTransition();
  console.log(data)
 
   useEffect(():void=>{
    const getData =  async ():Promise<void> =>{
     
        try{
          const {data} = await axios.get<user[]>(`${baseUrl}/admin/user?page=${page}`)
          startTransition(() =>{
            setData(data)
          })
          
        }catch(error){
         console.log(error)
        }
     
      
   }
    
    getData()
   },[baseUrl,page])

  return (
    <div className=' mainUser w-full h-screen flex flex-col overflow-x-auto '>
      <div className=' w-full flex justify-between px-5 items-center flex-col md:flex-row '>

   
      <h1 className=' text-zinc-900 text-xl '>All of user are here</h1>
      <div className=" mt-4">

      <InputLabel>Formate</InputLabel>
       <Select variant="standard" label="None"  sx={{width:"150px"}}>
  
          
     
       <MenuItem   >None</MenuItem>
        <MenuItem  value={1} >new on the top</MenuItem>
        <MenuItem value={-1}>old one the top</MenuItem>
       </Select>
       </div>
      </div>

       <div className="  flex flex-col w-full gap-2 px-7">
        {
          isPending && "loading....."
        }
        {
          data.map(item=>(
            <div className=" cutomizer w-full px-3 h-32 rounded shadow flex justify-between items-center mt-3" key={item._id}>
        
            <LazyLoad height={80}>
              <Img src={ item?.img || Profile } style={{
                width:"80px",
                height:"80px",
                borderRadius:"50%"
              }}/>
            </LazyLoad>
            <Link  to={`/userdetalis/${item._id}`}>{item.userName}</Link>
            <p className=" text-slate-500 font-light  hidden md:block">{item.email}</p>
          </div>
          ))
        }
        

       </div>
       <div className=" w-full justify-center items-center mt-3">

       <Pagination count={10} variant="outlined" color="primary" onChange={(event,page)=>setPage(page)}  />
      
       </div>
      </div>
  )
}

export default User