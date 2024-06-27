import { useState,Suspense,lazy } from 'react'

import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';


 import {PathnameDisplay} from './hook/Pathname';
 import NavBar from './components/Navbar/NavBar';
 import Laoder from './components/laoder/Laoder';
 const Home = lazy(()=>import('./Home/Home'))
 const User = lazy(()=>import('./user/User'))
 const Profile = lazy(()=>import('./profile/Profile'))
 const Order = lazy(()=> import ("./Order/ActiveOrder"))
 const Post = lazy(()=> import("./Post/Post"))
 const UserDetalis = lazy(()=>import('./sigleUser/SingaleUser'))
 import Context from './Context/Context';
function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className=' flex gap-1 flex-grow-0 flex-shrink-0 m-0 p-0'>
     <BrowserRouter>
    <Context>
     <NavBar/>
     <Routes>
      <Route path='/' element={
        <Suspense fallback={<Laoder/>}>
          <Home/>
        </Suspense>
      
      
      }/>
      <Route path='/user' element={  <Suspense fallback={<Laoder/>}>
          <User/>
        </Suspense>}/>
      <Route path='/profile' element={  <Suspense fallback={<Laoder/>}>
          <Profile/>
        </Suspense>}/>
      <Route path='/order' element={  <Suspense fallback={<Laoder/>}>
          <Order/>
        </Suspense>}/>
      <Route path='/post' element={  <Suspense fallback={<Laoder/>}>
          <Post/>
        </Suspense>}/>
      <Route path='/userdetalis/:id' element={  <Suspense fallback={<Laoder/>}>
          <UserDetalis/>
        </Suspense>}/>
     </Routes>
     </Context>
     </BrowserRouter>
    </div>
  )
}

export default App
