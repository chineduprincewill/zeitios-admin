import React from 'react'
import { useLocation } from 'react-router-dom'

const PageHeader = () => {

    const location  = useLocation();
    //const useremail = JSON.parse(localStorage.getItem('auth'));
    const pagetitle = location.pathname.replace('/', '').replace('-', ' ');

    return (
        <div className='w-full flex justify-between items-center py-3 mt-6'>
            <span className='text-3xl capitalize'>{pagetitle}</span>
            <span className='text-[#0259dc]'>Welcome!</span>
        </div>
    )
}

export default PageHeader