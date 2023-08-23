import React, { useState } from 'react'
import { resendCode } from './actions/authActions';
import Navigate from '../../common/Navigate';
import Banner from '../../common/Banner';

const ResendCode = () => {

    const [username, setUsername] = useState();
    const [resending, setResending] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const handleResend = (e) => {
        e.preventDefault();

        const data = {
            username,
            appId : import.meta.env.VITE_APPID,
            resendCode : true
        }

        resendCode(data, setSuccess, setError, setResending);
    }



    return (
        <div
            className='w-full flex justify-center items-center h-screen bg-[#c3d0c6]'
        >
            <div className='w-full md:w-[70%] grid lg:grid-cols-2 px-4 md:px-0'>
                <Banner />
        
                <div className='bg-white p-8 lg:p-12'>
                    <div className='mb-12'>
                        <div className='w-full flex justify-center text-3xl text-gray-800 font-medium'><span>Resend Code</span></div>
                    </div>
                    <span className='text-red-500 text-sm'>{error}</span>
                    {success !== null && <span className='text-green-500 text-sm'>An SMS has been sent to your Phone Number</span>}
                    <form onSubmit={handleResend}>
                        <div className='space-y-1 my-4'>
                            <span className='text-gray-600 text-sm'>Username</span>
                            <input 
                                type='text'
                                className='w-full border border-gray-400 rounded-sm p-1 text-gray-600'
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className='mt-12'>
                            <button className='w-full p-3 rounded-sm bg-[#0259dc] text-white'>
                                {resending ? 'Resending...' : 'Resend'}
                            </button>
                            <Navigate />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResendCode
