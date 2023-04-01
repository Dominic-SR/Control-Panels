import React from 'react'
import Sidebar from "../Components/Sidebar/sidebar";
import Navbar from "../Components/Navbar/navebar";
import "./AppLayer.css"

function AppLayer() {
  return (
    <>
    <Sidebar/>
    <div className='container'>
      <Navbar/>
    </div>
    </>
  )
}

export default AppLayer