import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Freelancer/Navbar'
import filterIcon from '../../assets/icons/filter_icon.png'
import ReviewNotification from '../../Components/ReviewNotification'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Reviews = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [showNavbar, setShowNavbar] = useState(false)

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
    const canGoNext = currentPage < pages;
    const handleClick = (e) => {
        console.log("good")
        console.log(showNavbar)
        setShowNavbar(prev => !prev)
    }
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Conditionally update the showDiv state based on screen width
        if (screenWidth >= 768) {
            setShowNavbar(true)
            // setShowDiv(true);
        } else {
            setShowNavbar(false)
            // setShowDiv(false);
        }
    }, [screenWidth]);
    const pageNumbers = Array(pages);

    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='w-full max-h-fit pb-10 relative flex bg-[#F5F5F5]'>
            {showNavbar && <Sidebar handleClick={handleClick} />}
            <div className='w-[76%] ml-auto mx-6 h-full max-md:mx-0  max-md:w-full'>
                <Navbar handleClick={handleClick} />
                <p className="text-xl font-['Montserrat'] font-semibold text-[#323232] w-full mt-10">
                    Reviews
                </p>

                <p className="font-['Montserrat'] text-[#323232] w-full mb-5 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
                <div className='w-full flex items-center justify-between'>
                    <div className='w-1/7 items-center flex border justify-around'>
                        <Link to="/freelancer/reviews/job">
                            <p className="text-base font-['Montserrat'] hover:underline font-semibold text-[#928e8e] hover:text-[#0259db]">
                                Jobs
                            </p>
                        </Link>
                        <Link to="/freelancer/reviews/project">
                            <p className="text-base font-['Montserrat'] font-semibold text-[#928e8e] hover:text-[#0259db] hover:underline">
                                Projects
                            </p>
                        </Link>

                    </div>
                    <button className="border-solid border-[#323232] flex flex-row justify-center gap-2 items-center border rounded w-1/6 p-2">
                        <img
                            src={filterIcon}
                            className="w-4 shrink-0"
                        />
                        <p className="font-['Montserrat'] font-medium text-[#323232]">
                            Filter here
                        </p>
                    </button>
                </div>
                <div className="shadow-[0px_4px_76px_0px_rgba(0,_0,_0,_0.1)] bg-white flex flex-col w-full items-center py-2 rounded h-full mt-3">
                    {postsPerPage.map(item => <ReviewNotification key={item} />)}

                    {/* <ReviewNotification />
                    <ReviewNotification /> */}
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

export default Reviews
