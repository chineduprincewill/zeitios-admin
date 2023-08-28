import React from 'react'
import microsoftIcon from '../../../assets/icons/Microsoft.png'
import threedotIcon from '../../../assets/icons/threedot.png'

const JobNotifications = () => {
    return (
        <div className="flex flex-col w-full items-start">
            <div className="w-full flex flex-row items-center  justify-between px-4 max-md:px-1 py-5">
                <div className='flex  justify-between items-center max-sm:flex-col max-sm:items-start mr-2 border'>
                    <div className="bg-lightOrange flex justify-center items-center p-2 rounded-full max-sm:mb-2">
                        <img
                            src={microsoftIcon}
                            className=" max-sm:w-4"
                        />
                    </div>
                    <div className="flex flex-col gap-1  items-start ml-2 max-sm:ml-0">
                        <div className="font-['Montserrat'] max-sm:text-[11px] font-medium text-[#323232]">
                            Full-stack Developer to help us build our websites
                        </div>
                        <div className="text-sm font-['Poppins'] max-sm:text-[11px]  text-[#343f42]">
                            Mr Charles Mark
                        </div>
                    </div>
                </div>
                <div className='flex w-1/2 max-lg:w-[60%] max-sm:w-3/4  justify-between items-center'>
                    <div className=" flex flex-col gap-1 items-start max-sm:mr-1">
                        <div className="font-['Poppins'] max-sm:text-[11px]  text-[#343f42]">
                            January 15, 2023
                        </div>
                        <div className="font-['Poppins'] max-sm:text-[11px]  text-[#343f42]">
                            May 15, 2023
                        </div>
                    </div>

                    <button className=" border-solid border-[#3bb001] max-sm:text-[11px]  flex text-sm font-['Montserrat'] font-medium text-[#3bb001] rounded-lg border-2 p-2 items-center max-sm:p-1 max-sm:mr-1">
                        Active
                    </button>

                    <img src={threedotIcon} className="" />
                </div>

            </div>
            <div className='h-1 w-full bg-lightGrey'>
            </div>
        </div>



    )
}

export default JobNotifications
