import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdHomeFilled } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { CiSignpostDuo1 } from "react-icons/ci";

const NavBar = () => {
  return (
    <div className=' w-1/5 h-screen bg-background3 flex flex-col justify-around items-center border-r border-accent'>
   <NavLink to={'/'} className={({ isActive, isPending }) =>
    isPending ? " flex justify-center items-center gap-1 transition-all duration-300" : isActive ? "      text-white bg-midblue rounded-lg w-full md:w-2/3 flex justify-center items-center gap-1 h-14 transition" : "flex justify-center items-center gap-1 transition-all duration-300 w-2/3 h-14"}><MdHomeFilled/><span className=' hidden md:block'>Home</span></NavLink>
   <NavLink to={'/user'} className={({ isActive, isPending }) =>
    isPending ? " flex justify-center items-center gap-1 transition-all duration-300" : isActive ? "        text-white bg-midblue rounded-lg w-full md:w-2/3 flex justify-center items-center gap-1 h-14 transition" : "flex justify-center items-center gap-1 transition-all duration-300 w-2/3 h-14"}><FaUsers/><span className=' hidden md:block'>user</span></NavLink>
   <NavLink to={'/profile'} className={({ isActive, isPending }) =>
    isPending ? " flex justify-center items-center gap-1 transition-all duration-300" : isActive ? "      text-white bg-midblue rounded-lg w-full md:w-2/3 flex justify-center items-center gap-1 h-14 transition" : "flex justify-center items-center gap-1 transition-all duration-300 w-2/3 h-14"}><CgProfile/><span className=' hidden md:block'>Profile</span></NavLink>
   <NavLink to={'/order'} className={({ isActive, isPending }) =>
    isPending ? " flex justify-center items-center gap-1 transition-all duration-300" : isActive ? "      text-white bg-midblue rounded-lg w-full md:w-2/3 flex justify-center items-center gap-1 h-14 transition" : "flex justify-center items-center gap-1 transition-all duration-300 w-2/3 h-14"}><MdOutlineNotificationsActive/><span className=' hidden md:block'>Order</span></NavLink>
   <NavLink to={'/post'} className={({ isActive, isPending }) =>
    isPending ? " flex justify-center items-center gap-1 transition-all duration-300" : isActive ? "      text-white bg-midblue rounded-lg w-full md:w-2/3 flex justify-center items-center gap-1 h-14 transition" : "flex justify-center items-center gap-1 transition-all duration-300 w-2/3 h-14"}><CiSignpostDuo1/><span className=' hidden md:block'>Post</span></NavLink>
  
      
    </div>
  )
}

export default NavBar