import React from 'react'

const StatementNotifications = () => {
    return (
        <div className=" h-full flex flex-col justify-center mx-3 ">
            <div className='flex justify-between items-center px-4 py-3 '>
                <div className=" text-zinc-700 text-base font-normal w-1/4  flex justify-start">January 15, 2023</div>
                <div className=" text-zinc-700 text-base font-normal w-1/5  flex justify-start">UI/UX</div>
                <div className=" text-zinc-700 text-base font-normal w-[30%]  flex justify-start">I will design website UI UX in figma</div>
                <div className='w-1/4  flex justify-end text-base font-normal text-zinc-700'>  $1,500</div>
            </div>
            <div className='h-[1px] w-full bg-lightGrey'>
            </div>
        </div>
    )
}

export default StatementNotifications
