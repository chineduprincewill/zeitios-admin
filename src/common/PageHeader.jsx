import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const PageHeader = () => {

    const location  = useLocation();
    const { userid } = useContext(AuthContext);
    //const useremail = JSON.parse(localStorage.getItem('auth'));
    const pagetitle = location.pathname.replace('/', '').replace('-', ' ').replace('freelancer', '').replace('client', '');

    return (
        <div className='w-full flex justify-start items-center pb-6 pt-12 mt-12'>
          {pagetitle.includes('dashboard') ? 
            <div className='grid space-y-2'>
                <span className='text-3xl capitalize'>welcome back, {userid}</span>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic placeat nobis id.</span>
            </div> :
            <div className='grid space-y-2'>
              <span className='text-3xl capitalize'>{pagetitle}</span>
              <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic placeat nobis id.</span>
          </div>
          }
        </div>
    )
}

export default PageHeader