import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../../common/Sidebar'
import filterIcon from '../../../assets/icons/filter_icon.png'
import JobNotifications from '../Components/JobNotifications'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { MdKeyboardArrowRight } from 'react-icons/md'



const ManageJobs = () => {
    // const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    // const [showNavbar, setShowNavbar] = useState(false)
    const [posts, setPosts] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
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
    // const handleClick = (e) => {
    //     console.log(showNavbar)
    //     setShowNavbar(prev => !prev)
    // }
    // useEffect(() => {
    //     const handleResize = () => {
    //         setScreenWidth(window.innerWidth);
    //     };

    //     window.addEventListener('resize', handleResize);

    //     // Cleanup the event listener when the component unmounts
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    // useEffect(() => {
    //     // Conditionally update the showDiv state based on screen width
    //     if (screenWidth >= 768) {
    //         setShowNavbar(true)
    //         // setShowDiv(true);
    //     } else {
    //         setShowNavbar(false)
    //         // setShowDiv(false);
    //     }
    // }, [screenWidth]);
    const pageNumbers = Array(pages);

    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
    }
    return (
        <div className='w-full min-h-screen pb-10 flex bg-[#F5F5F5]'>
            <Sidebar />
            <div className='w-[86%] lg:w-[72%] xl:w-[76%]  ml-auto h-full mx-4 max-md:w-full max-md:mx-0'>

                <div className='max-md:px-4'>

                    <p className="text-2xl font-['Montserrat'] font-semibold text-[#323232] w-full mt-28  py-0 max-md:px-2 max-md:text-center max-md:mx-3">
                        Manage Jobs
                    </p>

                    <p className="font-['Montserrat'] text-[#323232] w-full mt-0 max-md:px-2 max-md:text-center ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    </p>
                    <div className='w-full flex items-center justify-end mb-3 max-sm:mt-5'>
                        <button className="border-solid border-[#323232] flex justify-center w-1/7 max-xl:w-1/6 max-md:w-1/5 max-sm:w-[37%] items-center border rounded">
                            <img src={filterIcon} className="mr-2" />
                            Filter here
                        </button>
                    </div>

                    <div className="shadow-[0px_4px_76px_0px_rgba(0,_0,_0,_0.1)] bg-white flex flex-col justify-between  w-full  py-3 px-4 rounded ">

                        <div className="bg-blue-100 flex flex-row justify-between items-center px-4 max-lg:px-4 max-md:px-1 max-sm:text-[8px] max-sm:font-bold max-sm:py-2">
                            <div className="font-['Montserrat'] font-medium text-[#332233]">
                                Project Title
                            </div>
                            <div className="flex w-1/2 max-sm:w-[54%] items-start justify-between">
                                <div className="font-['Montserrat'] font-medium text-[#332233] ">
                                    Created & Expired
                                </div>
                                <div className="font-['Montserrat'] font-medium text-[#332233] ">
                                    Status
                                </div>
                                <div className="font-['Montserrat'] font-medium text-[#332233] ">
                                    Action
                                </div>
                            </div>
                        </div>
                        {postsPerPage.map(item => <JobNotifications key={item} />)}
                        <JobNotifications />
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
        </div>
    )
}

export default ManageJobs
