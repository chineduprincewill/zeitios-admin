import React, { useState } from 'react'
import Sidebar from '../../../common/Sidebar'
import PayoutIcon1 from '../../../assets/icons/payouts1_icon.png'
import PayoutIcon2 from '../../../assets/icons/payouts2_icon.png'
import PayoutIcon3 from '../../../assets/icons/payouts3_icon.png'
import PayoutIcon4 from '../../../assets/icons/payouts4_icon.png'
import StatementNotifications from '../components/StatementNotifications'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { MdKeyboardArrowRight } from 'react-icons/md'


const FreelancerStatment = () => {
    const [posts, setPosts] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,]);
    const [currentPage, setCurrentPage] = useState(1);
    const totalNotifications = posts.length;
    const pageSize = 6;
    const pages = Math.ceil(totalNotifications / pageSize);
    const goToPrev = () => {
        const prevPage = Math.max(currentPage - 1, 1);
        setCurrentPage(prevPage);
        console.log('prev', prevPage)
    };
    const goToNext = () => {
        const nextPage = Math.min(currentPage + 1, pages);
        setCurrentPage(nextPage);
        console.log('next', nextPage)
    };
    const start = pageSize * (currentPage - 1);
    const end = pageSize * currentPage;
    const postsPerPage = posts.slice(start, end);
    const canGoPrev = currentPage > 1;
    const canGoNext = currentPage < pages;
    const pageNumbers = Array(pages);

    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
    }
    return (
        <div className='w-full min-h-screen pb-10 relative flex bg-[#F5F5F5]'>
            <Sidebar />
            <div className='w-[86%] lg:w-[72%] xl:w-[76%] ml-auto mx-6 h-full max-md:mx-0 max-md:px-3  max-md:w-full'>
                <p className="text-xl font-['Montserrat'] font-semibold text-[#323232] w-full  mt-28">
                    Statement
                </p>

                <p className="font-['Montserrat'] text-[#323232] w-full mt-0 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
                <div className="flex flex-row justify-between w-full mt-5 h-40 max-md:h-32 max-sm:h-64 max-md:px-3 max-sm:flex-wrap max-sm:justify-around">
                    <div className="shadow-[0px_4px_21px_0px_rgba(1,_14,_35,_0.15)] w-2/9 max-sm:w-2/5  bg-white px-2 max-sm:my-2 py-8 rounded-[10px] flex flex-col justify-between">
                        <p className="text-stone-400 text-sm font-normal leading-none">
                            Net Income
                        </p>
                        <div className='flex justify-between items-center mb-2'>
                            <p className="max-xl:text-sm ml-0 text-zinc-800 text-xl font-medium">
                                $1550
                            </p>
                            <img src={PayoutIcon1} alt="icon" className='w-4 h-4' />
                        </div>
                    </div>
                    <div className="shadow-[0px_4px_21px_0px_rgba(1,_14,_35,_0.15)] max-sm:my-2 w-2/9 max-sm:w-2/5 overflow-hidden bg-white  px-2 py-8 rounded-[10px]  flex flex-col justify-between">
                        <p className="text-stone-400 text-sm font-normal leading-none">
                            Withdrawn
                        </p>
                        <div className='flex justify-between items-center mb-2'>
                            <p className="max-xl:text-sm ml-0 text-zinc-800 text-xl font-medium">
                                $750
                            </p>
                            <img src={PayoutIcon2} alt="icon" className='w-4 h-4' />
                        </div>
                    </div>
                    <div className="shadow-[0px_4px_21px_0px_rgba(1,_14,_35,_0.15)] max-sm:my-2 w-2/9 max-sm:w-2/5 overflow-hidden bg-white  px-2 py-8 rounded-[10px]  flex flex-col justify-between">
                        <p className="text-stone-400 text-sm font-normal leading-none">
                            Pending Payment
                        </p>
                        <div className='flex justify-between items-center mb-2'>
                            <p className="max-xl:text-sm ml-0 text-zinc-800 text-xl font-medium">
                                $800
                            </p>
                            <img src={PayoutIcon3} alt="icon" className='w-4 h-4' />
                        </div>
                    </div>
                    <div className="shadow-[0px_4px_21px_0px_rgba(1,_14,_35,_0.15)] max-sm:my-2 w-2/9 max-sm:w-2/5 overflow-hidden bg-white  px-2 py-8 rounded-[10px]  flex flex-col justify-between">
                        <p className="text-stone-400 text-sm font-normal leading-none">
                            Available for Withdrawal
                        </p>
                        <div className='flex justify-between items-center mb-2'>
                            <p className=" max-xl:text-sm ml-0 text-zinc-800 text-xl font-medium">
                                $150
                            </p>
                            <img src={PayoutIcon4} alt="icon" className='w-4 h-4' />
                        </div>
                    </div>
                </div>
                <div className="shadow-[0px_4px_76px_0px_rgba(0,_0,_0,_0.1)] mt-10 bg-white flex flex-col w-full py-2 rounded h-full">
                    {/* <div className="w-[1083px] h-[53px] "  /> */}
                    <div className="bg-blue-100 mx-3 flex flex-row justify-between items-center px-4 max-lg:px-4 max-md:px-1 max-sm:text-[8px] max-sm:font-bold py-2">
                        <div className="font-['Montserrat'] font-medium text-[#332233] w-1/4  flex justify-start">
                            Amount
                        </div>

                        <div className="font-['Montserrat'] font-medium text-[#332233] w-1/5  flex justify-start">
                            Purchase Date
                        </div>
                        <div className="font-['Montserrat'] font-medium text-[#332233] w-[30%]  flex justify-start">
                            Payment Method
                        </div>
                        <div className="font-['Montserrat'] font-medium text-[#332233] w-1/4 flex justify-end">
                            Payment Status
                        </div>

                    </div>
                    {postsPerPage.map(item => <StatementNotifications key={item} />)}

                    <div className="bg-[#f3f3f3] flex justify-between w-1/2 mx-auto items-center p-2 mt-5">
                        <button disabled={!canGoPrev} className="border-solid border-[#d9d9d9] bg-white flex w-4 items-center border rounded-sm" onClick={goToPrev}>
                            <MdKeyboardArrowLeft />
                        </button>
                        {pageNumbers.map((i) => {
                            return (
                                <button key={i} className="border-solid border-[#d9d9d9] bg-white flex px-2 items-center border rounded-sm " onClick={() => (setCurrentPage(i))}>
                                    {i}
                                </button>
                            )

                        })


                        }
                        <button disabled={currentPage === pages ? true : false} className="border-solid border-[#d9d9d9] bg-white flex w-4 items-center border rounded-sm" onClick={goToNext}>
                            <MdKeyboardArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreelancerStatment
