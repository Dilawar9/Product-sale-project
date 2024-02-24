import React from 'react'
import Navebar from '../navebar/Navebar'
import { Outlet } from 'react-router-dom'
function Home() {
  return (
    <>
      <div className='grid grid-cols-4'>
        <div className='left'>
          <Navebar />
        </div>
        <div className='col-span-2'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Home;