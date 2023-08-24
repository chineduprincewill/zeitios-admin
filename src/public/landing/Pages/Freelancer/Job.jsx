import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Freelancer/Navbar'
import thirteenthImage from '../../assets/image/thirteenth_picture.png'

const Job = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [showNavbar, setShowNavbar] = useState(false)
    const handleClick = (e) => {
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
    return (
        <div className='w-full h-screen flex bg-[#F5F5F5]'>
            {showNavbar && <Sidebar handleClick={handleClick} />}
            <div className='w-[76%] h-full mx-6 max-md:w-full max-md:mx-0 ml-auto'>
                <Navbar handleClick={handleClick} />
                <p className="text-2xl font-['Montserrat'] font-semibold text-[#323232] w-full mt-3  py-0 max-md:px-2 max-md:text-center">
                    Jobs
                </p>

                <p className="font-['Montserrat'] text-[#323232] w-full mt-0 max-md:px-2 max-md:text-center ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
                <img src={thirteenthImage} alt="image" className='mx-auto mt-10 max-md:mt-5' />
                <div className="font-['Montserrat'] text-[#323232] mt-5 max-md:mt-2 text-center max-md:px-2 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </div>
                <Link to="/freelancer/reviews/job/all">
                    <button className="bg-[#0259db] items-center rounded-sm mt-5 max-md:mt-2 w-1/3 mx-auto flex justify-center p-3 ">
                        <p className="font-['Montserrat'] font-medium text-white">Find Jobs</p>
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default Job
