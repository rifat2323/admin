import { useState,Suspense,lazy } from "react";



const MidHome = lazy(()=>import("../components/MidHome/MidHome"))
const TopHome = lazy(()=>import("../components/tophome/TopHome"))
import { ColorRing } from "react-loader-spinner";

const Home = () => {
 
     


  return (
    <div className=' w-full h-screen flex flex-col bg-[##f3f4f6]  overflow-x-auto    '>
      <Suspense fallback={
         <ColorRing
         visible={true}
         height="80"
         width="80"
         ariaLabel="color-ring-loading"
         wrapperStyle={{}}
         wrapperClass="color-ring-wrapper"
         colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
         />
      }>
      <TopHome/>
      </Suspense>



   <Suspense fallback = {
    <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="color-ring-loading"
    wrapperStyle={{}}
    wrapperClass="color-ring-wrapper"
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
   }>
   <MidHome/>
   </Suspense>
  
      </div>
  )
}

export default Home