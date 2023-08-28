import React from 'react'
import thirdProfileIcon from '../../../assets/icons/third_profile.png'

const MessageNotifications = ({ heading, text, image, number, time, handleClick }) => {

    return (
        <div className="flex flex-row gap-4 w-full items-center " onClick={handleClick}>
            <img
                src={image}
                className=""
            />
            <div className="flex flex-col w-5/6 gap-1 items-start ">
                <div className='flex justify-between items-center  w-full'>
                    <p className="font-['Montserrat'] text-sm font-medium text-[#323232]">
                        {heading}
                    </p>
                    <p className="text-xs font-['Montserrat'] text-[#343f42] w-min">{time}</p>

                </div>
                <div className="flex justify-between items-start w-full">
                    <div className="text-[0.7rem] font-['Montserrat'] text-[#343f42] ">
                        {text}
                    </div>
                    {number && <div className='bg-[#032b68] p-[0.1rem] rounded-full self-start'>
                        <div className="text-xs font-['Montserrat'] font-medium text-white">{number}</div>
                    </div>}

                </div>
            </div>
        </div>
    )
}

export default MessageNotifications
