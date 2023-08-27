import React from 'react'
import { formatCurrency } from '../../../../common/helpers/checkRole'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const StatementStatistics = () => {

    return (
        <div className='w-full grid md:flex md:justify-between bg-transparent py-4 space-y-6 md:space-y-0'>
            <div className='w-full md:w-[46%] lg:w-[23%] bg-white rounded-md p-4 shadow-lg'>
                <div className='w-full my-8 text-gray-400 text-sm'>
                    <span>Net Income</span>
                </div>
                <div className='w-full flex justify-between items-center mb-3 text-lg'>
                    <span>{ formatCurrency(1550)}</span>
                    <AiOutlineCheckCircle size={20} className='text-[#0259dc]' />
                </div>
            </div>

            <div className='w-full md:w-[46%] lg:w-[23%] bg-white rounded-md p-4 shadow-lg'>
                <div className='w-full my-8 text-gray-400 text-sm'>
                    <span>Withdrawn</span>
                </div>
                <div className='w-full flex justify-between items-center mb-3 text-lg'>
                    <span>{ formatCurrency(750)}</span>
                    <AiOutlineCheckCircle size={20} className='text-[#0259dc]' />
                </div>
            </div>

            <div className='w-full md:w-[46%] lg:w-[23%] bg-white rounded-md p-4 shadow-lg'>
                <div className='w-full my-8 text-gray-400 text-sm'>
                    <span>Pending Payment</span>
                </div>
                <div className='w-full flex justify-between items-center mb-3 text-lg'>
                    <span>{ formatCurrency(800)}</span>
                    <AiOutlineCheckCircle size={20} className='text-[#0259dc]' />
                </div>
            </div>

            <div className='w-full md:w-[46%] lg:w-[23%] bg-white rounded-md p-4 shadow-lg'>
                <div className='w-full my-8 text-gray-400 text-sm'>
                    <span>Available for withdrawal</span>
                </div>
                <div className='w-full flex justify-between items-center mb-3 text-lg'>
                    <span>{ formatCurrency(150)}</span>
                    <AiOutlineCheckCircle size={20} className='text-[#0259dc]' />
                </div>
            </div>
        </div>
    )
}

export default StatementStatistics
