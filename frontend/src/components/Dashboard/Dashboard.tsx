import React from 'react'
import DashSidebar from './utils/DashSidebar'
import MainBody from './utils/MainBody'

const Dashboard = () => {
  return (
    <div className='h-screen w-full overflow-hidden flex'>
        <DashSidebar />  
        <MainBody />
        
    </div>
  )
}

export default Dashboard