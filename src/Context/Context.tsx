import React,{createContext,  useState,useEffect} from 'react'

 const dataProvider = createContext()
 type order ={
    _id:string,
    userId:string,
    productIdes:{
       
       
           productId:string,
           productCount:number
           _id:string
       
   
     }[],
     total:number,
     paid:boolean,
     deliveryStatus: "paid" | 'way' | 'delivered',
     active:boolean
   
   }
const Context = ({children}) => {
    const baseUrl = import.meta.env.VITE_BASE_URl as string
    const url = new URL('../worker/Worker.ts',import.meta.url)
 
   
    const [activeOrder,setActiveOrder] = useState<order[] >()
   useEffect(()=>{
    const worker = new Worker(url,{type:"module"})
    worker.onmessage = (event)=>{
        const data = event.data
        setActiveOrder(data)

    }
    worker.postMessage(`${baseUrl}/admin/activeorder`)
   return ()=>{
    worker.terminate()
   }
   },[])
  return (
    <dataProvider.Provider value={{setActiveOrder,activeOrder}}>
      {children}
    </dataProvider.Provider>
  )
}
 export {dataProvider}
export default Context