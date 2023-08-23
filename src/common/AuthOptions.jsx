import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const AuthOptions = () => {

    const location  = useLocation();

    return (
        <div className='flex justify-center my-2'>
            {
                location.pathname === '/login' && <span className='text-sm text-gray-600'>You don't have an account? <Link to='/register-options' className='text-[#0259dc]'>Register</Link></span>
            }
            {
                (location.pathname === '/register' || location.pathname === '/resend-code' || location.pathname === '/register-options') && <span className='text-sm text-gray-600'>Have an existing account? <Link to='/login' className='text-[#0259dc]'>Login</Link></span>
            }
            
        </div>
    )
}

export default AuthOptions