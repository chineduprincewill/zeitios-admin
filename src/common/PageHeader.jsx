import React from 'react'
import { useLocation } from 'react-router-dom'

const PageHeader = () => {

    const location  = useLocation();
    //const useremail = JSON.parse(localStorage.getItem('auth'));
    const pagetitle = location.pathname.replace('/', '').replace('-', ' ').replace('freelancer', '').replace('client', '');

    return (
        <div className='w-full flex justify-between items-center pb-6 pt-12 mt-12'>
            <span className='text-3xl capitalize'>{pagetitle}</span>
            <span className='text-[#0259dc]'>Welcome!</span>
        </div>
    )
}

export default PageHeader