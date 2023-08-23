import React from 'react'
import AuthOptions from './AuthOptions'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'

const Navigate = () => {
    return (
        <div className='flex justify-around items-center space-x-3 mt-2 mb-10 md:px-12'>
            <Link to="/">
                <div className='flex justify-start space-x-1 items-center'>
                    <MdArrowBack size={20} className='text-[#0259dc]' />
                    <span className='text-[#0259dc] text-sm'>Home</span>
                </div>
            </Link>
            <AuthOptions />
        </div>
    )
}

export default Navigate
