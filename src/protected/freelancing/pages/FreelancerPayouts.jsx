import React, { useState } from 'react'
import Sidebar from '../../../common/Sidebar'
import filterIcon from '../../../assets/icons/filter_icon.png'
import PayoutNotifications from '../components/PayoutNotifications'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { PayoutData } from '../../../data'

const FreelancerPayouts = () => {
    const [posts, setPosts] = useState(PayoutData);
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
        <div className='w-full min-h-screen relative flex bg-[#F5F5F5]'>
            <Sidebar />
            <div className='w-[86%] lg:w-[72%] xl:w-[76%] ml-auto mx-6 h-full max-md:mx-0 max-md:px-3  max-md:w-full'>
                <p className="text-xl font-['Montserrat'] font-semibold text-[#323232] w-full  mt-28">
                    Payout
                </p>

                <p className="font-['Montserrat'] text-[#323232] w-full mt-0 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
                <div className='w-full flex items-center justify-end'>
                    <button className="border-solid border-[#323232] flex flex-row justify-center gap-2 items-center border rounded w-[18%] max-lg:w-1/5 max-md:w-[22%] max-sm:w-[42%] p-2">
                        <img
                            src={filterIcon}
                            className="w-4 shrink-0"
                        />
                        <p className="font-['Montserrat'] font-medium text-[#323232]">
                            Filter here
                        </p>
                    </button>
                </div>
                <div className="shadow bg-white flex flex-col w-full py-2 rounded h-full mt-3">
                    {/* <div className="w-[1083px] h-[53px] "  /> */}
                    <div className="bg-blue-100 mx-3 flex flex-row justify-between items-center px-4 max-lg:px-4 max-md:px-1 max-sm:text-[8px] max-sm:font-bold py-2">
                        <div className="font-['Montserrat'] font-medium text-[#332233] w-1/4  flex justify-start">
                            Amount
                        </div>

                        <div className="font-['Montserrat'] font-medium text-[#332233] w-1/4  flex justify-center">
                            Purchase Date
                        </div>
                        <div className="font-['Montserrat'] font-medium text-[#332233] w-1/4  flex justify-center">
                            Payment Method
                        </div>
                        <div className="font-['Montserrat'] font-medium text-[#332233] w-1/4 flex justify-end">
                            Payment Status
                        </div>

                    </div>
                    {postsPerPage.map(item => < PayoutNotifications amount={item.amount} date={item.date} method={item.method} status={item.status} color={item.color} key={item} />)}

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

export default FreelancerPayouts
