import React from 'react'
import Sidebar from '../../../common/Sidebar'
import PageHeader from '../../../common/PageHeader'

const FreelancerStatment = () => {
    return (
        <div>
            <Sidebar />
            <div className='flex'>
                <div className='hidden md:w-[80px] lg:w-[200px]'>...</div>
                <div className='grow md:ml-[80px] lg:ml-[250px] bg-gray-100 px-3 lg:px-12'>
                    <PageHeader />
                </div>
                <div>
                    {/* 
                        YOUR PAGE COMPONENTS APPEAR HERE
                    */}
                </div>
            </div>
        </div>
    )
}

export default FreelancerStatment
