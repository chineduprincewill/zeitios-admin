import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../../common/Sidebar'
import thirteenthImage from '../../../assets/image/thirteenth_picture.png'

const Jobs = () => {
    return (
        <div className='w-full h-screen flex bg-[#F5F5F5]'>
            <Sidebar />
            <div className='w-[86%] lg:w-[72%] xl:w-[75%] h-full mx-6 max-md:w-full max-md:mx-0 ml-auto'>
                <p className="text-2xl font-['Montserrat'] font-semibold text-[#323232] w-full mt-28  py-0 max-md:px-2 max-md:text-center">
                    Jobs
                </p>

                <p className="font-['Montserrat'] text-[#323232] w-full mt-0 max-md:px-2 max-md:text-center ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
                <img src={thirteenthImage} alt="image" className='mx-auto mt-10 max-md:mt-5' />
                <div className="font-['Montserrat'] text-[#323232] mt-5 max-md:mt-2 text-center max-md:px-2 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </div>
                <Link to="/jobs/all">
                    <button className="bg-[#0259db] items-center rounded-sm mt-5 max-md:mt-2 w-1/3 mx-auto flex justify-center p-3 ">
                        <p className="font-['Montserrat'] font-medium text-white">Find Jobs</p>
                    </button>
                </Link>

            </div>
            {/* <div className='flex'>
                <div className='hidden md:w-[80px] lg:w-[200px]'>...</div>
                <div className='grow md:ml-[80px] lg:ml-[250px] bg-gray-100 px-3 lg:px-12'>
                    <PageHeader />
                </div>
                <div> */}
            {/* 
                        YOUR PAGE COMPONENTS APPEAR HERE
                    */}
        </div>
        //     </div>
        // </div>
    )
}

export default Jobs
