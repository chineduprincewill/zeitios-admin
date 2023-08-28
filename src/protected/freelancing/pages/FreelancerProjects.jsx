import React from 'react'
import Sidebar from '../../../common/Sidebar'
import microsoftIcon from '../../../assets/icons/Microsoft.png'

const FreelancerProjects = () => {
    return (
        <div className='w-full min-h-screen relative flex bg-[#F5F5F5]'>
            <Sidebar />
            <div className='w-[86%] lg:w-[72%] xl:w-[76%] ml-auto mx-6 h-full max-md:mx-0 max-md:px-3  max-md:w-full pb-5'>
                <p className="text-xl font-['Montserrat'] font-semibold text-[#323232] w-full  mt-28">
                    Projects
                </p>

                <p className="font-['Montserrat'] text-[#323232] w-full mt-0 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
                <div className="w-full h-[35rem] max-md:h-[40rem] max-sm:h-[65rem] bg-white rounded-[5px] shadow px-4 pt-5 mt-5">
                    <div className='flex items-center w-full mt-5 mb-10 max-lg:w-full max-lg:justify-normal'>
                        <div className="bg-lightOrange flex justify-center items-center p-2 rounded-full mr-4">
                            <img
                                src={microsoftIcon}
                                className=""
                            />
                        </div>
                        <p className=" text-zinc-700 text-base font-semibold">Full-stack Developer to help us build our websites</p>
                    </div>
                    <div className='flex justify-between items-center mb-2'>
                        <p className="text-zinc-700 text-xl max-md:text-sm font-semibold">Project Overview</p>
                        <p className="text-blue-700 text-base max-md:text-xs font-medium">Submit a proposal</p>

                    </div>
                    <div className="w-full text-zinc-800 text-base font-normal mt-3 max-md:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quui nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore
                        magna aliqua. Ut enim ad minim veniam, quui nostrud. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua.
                        Ut enim ad minim veniam, quui nostrud Lorem ipsum dolor5sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quui nostrud....
                    </div>
                    <div className='flex w-full items-start justify-around mt-5 max-sm:flex-col max-md:mt-10 '>
                        <div className="flex flex-col gap-2 max-sm:gap-0 items-start justify-between w-[30%] max-md:w-1/4 max-sm:w-full max-sm:mb-5">
                            <p className="text-zinc-700 text-base font-semibold">Skills</p>
                            <div className='flex w-full max-md:flex-col max-sm:grid max-sm:grid-cols-3'>
                                <p className="text-zinc-800 text-xs font-normal mr-2">UI design</p>
                                <p className="text-zinc-800 text-xs font-normal mr-2">Figma</p>
                                <p className="text-zinc-800 text-xs font-normal mr-2">Prototype</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 max-sm:gap-0 items-start justify-between w-1/4 max-sm:w-full max-sm:mb-5">
                            <p className="text-zinc-700 text-base font-semibold">Freelance Type</p>
                            <p className="text-zinc-800 text-xs font-normal">Freelancer</p>
                        </div>
                        <div className="flex flex-col gap-2 max-sm:gap-0 items-start justify-between w-[40%] max-md:w-1/2 max-sm:w-full max-sm:mb-5">
                            <div className=" text-zinc-700 text-base font-semibold">Detail Project</div>
                            <div className='flex w-full max-sm:grid max-sm:grid-cols-2'>
                                <div className='flex flex-col items-start mr-5 '>
                                    <div className=" text-zinc-700 text-sm font-medium">7 Successive Projects</div>
                                    <div className=" text-neutral-400 text-xs font-normal">Projects Verified</div>
                                </div>
                                <div className='flex flex-col items-start'>
                                    <div className=" text-zinc-700 text-sm font-medium">$15k+ spent</div>
                                    <div className=" text-neutral-400 text-xs font-normal">Payment Verified</div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className='w-1/2 mt-10 max-lg:mt-6 max-lg:w-2/3 max-md:w-full max-md:mt-10'>
                        <div className='h-[0.05rem] w-4/5 bg-lightBlue mx-auto flex items-center justify-between'>
                            <div className='rounded-full w-2 h-2 bg-primary'></div>
                            <div className='rounded-full w-2 h-2 bg-primary'></div>
                            <div className='rounded-full w-2 h-2 bg-primary'></div>
                            <div className='rounded-full w-1 h-1 bg-primary'></div>
                            <div className='rounded-full w-2 h-2 bg-lightMilk'></div>
                        </div>
                        <div className="flex items-center justify-around  w-full">
                            <div className="text-xs max-sm:text-[10px] font-['Montserrat'] text-[#323232] mb-px mr-px max-lg:text-center">
                                Milestone 1
                            </div>
                            <div className="text-xs max-sm:text-[10px] font-['Montserrat'] text-[#323232] max-lg:text-center">
                                Milestone 2
                            </div>
                            <div className="text-xs max-sm:text-[10px] font-['Montserrat'] text-[#323232] max-lg:text-center">
                                Milestone 3
                            </div>
                            <div className="text-xs max-sm:text-[10px] font-['Montserrat'] text-[#323232] mr-px max-lg:text-center">
                                Milestone 4
                            </div>
                            <div className="text-xs max-sm:text-[10px] font-['Montserrat'] text-[#323232] max-lg:text-center">
                                Milestone 5
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FreelancerProjects
