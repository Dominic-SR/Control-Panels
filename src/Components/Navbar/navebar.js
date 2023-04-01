import React from 'react'
import './navbar.css'
function navebar() {
  return (
        <div className='header'>
            <div className='nav'>
                <div className='search'>
                    <input type='text' placeholder='search' />
                    <button type="submit"><i className='fas fa-search'></i></button>
                </div>

                <div className='user'>
                    <a href="#" className='btn'>Add New</a>
                    <i className='fas fa-bell'></i>
                    <div className='img-case'>
                      <img src={process.env.PUBLIC_URL + "/user.png"} alt="" />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default navebar