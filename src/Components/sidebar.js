import React from 'react'

function sidebar() {
  return (
    <div className='side-menu'>
        <div className='brand-name'>
            Brand...
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