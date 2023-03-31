import React from 'react'
import './sidebar.css'

function sidebar() {
  return (
    <div className='side-menu'>
        <div className='brand-name'>
            {/* <img src={process.env.PUBLIC_URL + "/logo.png"} height="100"/> */}
            <h1>Brand</h1>
        </div>
        <ul>
        <li>
            <i class="fas fa-tachometer-alt"></i><span>Dashboard</span></li>
            <li><i class="fas fa-file-alt"></i> <span>Forms</span></li>
            <li><i class="fas fa-table"></i><span>Tables</span></li>
            <li><i class="fas fa-table"></i><span>Pages</span></li>
            <li><i class="fas fa-map-marker-alt"></i><span>Map</span></li>
            <li><i class="fas fa-life-ring"></i><span>Utilities</span></li>
        </ul>
    </div>
  )
}

export default sidebar