import React from 'react'
import microsoftIcon from '../../../assets/icons/Microsoft.png'
import starIcon from '../../../assets/icons/star_icon.png'

const ReviewNotification = () => {

    return (
        <div className="">
            <div className='flex w-11/12 justify-between mx-auto py-3'>
                <div className="flex items-start justify-center w-1/6 ">
                    <div className=" bg-darkerBlue flex justify-center items-center p-2 rounded-full">
                        <img src={microsoftIcon} className=" " />
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-start w-5/6 ">
                    <div className='flex items-center justify-between w-full'>
                        <p className="font-['Montserrat'] font-medium text-[#332233]">Osaze Abu</p>
                        <p className="font-['Montserrat'] font-medium text-[#0259db]">
                            View Details
                        </p>
                    </div>
                    <div className="self-stretch flex gap-1 items-start w-1/2 max-sm:w-full">
                        <img src={starIcon} className="" />
                        <div className="text-sm font-['Montserrat'] font-medium text-[#323232] ">
                            4.51
                            <span className="text-[#989797] ml-2">
                                Published 2 weeks ago
                            </span>
                        </div>
                    </div>
                    <p className="text-sm font-['Montserrat'] text-[#323232] w-full">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to m
                    </p>

                </div>
            </div>
            <div className='h-1 w-full bg-lightGrey'></div>
        </div>

    )
}

export default ReviewNotification
