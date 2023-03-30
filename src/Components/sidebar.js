import React from 'react'
import './sidebar.css'

function sidebar() {
  return (
    <div className='side-menu'>
        <div className='brand-name'>
            <h1>Brand</h1>
        </div>
        <ul>
            <li><span>Dashboard</span></li>
            <li><span>Students</span></li>
            <li><span>Teachers</span></li>
            <li><span>Schools</span></li>
            <li><span>Income</span></li>
            <li><span>Help</span></li>
            <li><span>Settings</span></li>
        </ul>
    </div>
  )
}

export default sidebar