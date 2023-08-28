import React from 'react'

const PayoutNotifications = ({ amount, date, method, status, color }) => {
    return (
        <div className=" h-full flex flex-col justify-center mx-3  ">
            <div className='flex justify-between items-center px-4 py-3 '>
                <div className=" text-zinc-700 text-base font-normal w-1/4  flex justify-start">{amount}</div>
                <div className=" text-zinc-700 text-base font-normal w-1/4  flex justify-center">{date}</div>
                <div className=" text-zinc-700 text-base font-normal w-1/4  flex justify-center">{method}</div>
                <div className='w-1/4  flex justify-end'>
                    <button className={`p-2 rounded-[10px] border border-${color} justify-center items-center gap-2.5 inline-flex`} >
                        <div className={`text-${color} text-sm font-medium`}>{status}</div>
                    </button>
                </div>
            </div>
            <div className='h-[1px] w-full bg-lightGrey'>
            </div>
        </div>
    )
}

export default PayoutNotifications
