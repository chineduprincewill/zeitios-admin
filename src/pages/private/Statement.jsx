import React from 'react'
import Sidebar from '../../components/Sidebar'
import PageHeader from '../../components/PageHeader'

const Statement = () => {
    return (
        <div>
            <Sidebar />
            <div className='flex'>
                <div className='hidden md:w-[80px] lg:w-[200px]'>...</div>
                <div className='grow md:ml-[80px] lg:ml-[200px] bg-gray-100 px-3 lg:px-12'>
                    <PageHeader />
                </div>
            </div>
        </div>
    )
}

export default Statement