import React, { useState, useEffect } from 'react'
import Sidebar from '../../Components/Sidebar'

import Navbar from '../../Components/Freelancer/Navbar'
import searchIcon from '../../assets/icons/Search2.png'
import smiley from '../../assets/icons/smiley_icon.png'
import send from '../../assets/icons/send_icon.png'
import fileAttach from '../../assets/icons/file_attach_icon.png'
import fourthProfilePicture from '../../assets/icons/fourth_profile.png'
import thirdProfileIcon from '../../assets/icons/third_profile.png'
import MessageNotifications from '../../Components/MessageNotifications'



const Messages = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [showNavbar, setShowNavbar] = useState(false)
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
    return (
        <div className='w-full h-screen relative flex bg-[#F5F5F5]'>
            {showNavbar && <Sidebar handleClick={handleClick} />}
            <div className='w-[76%] ml-auto mx-6 h-full max-md:mx-0  max-md:w-full'>
                <Navbar handleClick={handleClick} />
                <p className="text-xl font-['Montserrat'] font-semibold text-[#323232] w-full  mt-5">
                    Messages
                </p>

                <p className="font-['Montserrat'] text-[#323232] w-full mt-0 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
                <div className="text-sm font-['Montserrat'] text-[#ee2a1d] text-end mb-2">
                    Leave group
                </div>

                <div className='flex items-center justify-between w-full h-[75%] pb-3'>
                    <div className="shadow-[0px_4px_76px_0px_rgba(0,_0,_0,_0.1)]  bg-white flex flex-col justify-around   px-5 py-3 rounded w-1/3 h-full">
                        <div className='flex flex-row bg-[#e1edff]  w-full px-4 py-1 rounded items-center'>
                            <img src={searchIcon} alt="search icon" />
                            <input type="text" className="bg-transparent w-full ml-3 font-[' Poppins'] text-[#343f42]" />
                        </div>

                        <MessageNotifications heading="Team: Group Ferran" text="Lorem Ipsum is simply dummy text of the skajns dskjas........" image={thirdProfileIcon} number="12" time="12:05pm" />
                        <MessageNotifications heading="Team: Group Oscar" text="Lorem Ipsum is simply dummy text of the skajns dskjas........" image={thirdProfileIcon} number="12" time="12:05pm" />
                        <MessageNotifications heading="Client 1" text="Lorem Ipsum is simply dummy text of the skajns dskjas........" image={thirdProfileIcon} time="12:05pm" />
                        <MessageNotifications heading="Client 2" text="Lorem Ipsum is simply dummy text of the skajns dskjas........" image={thirdProfileIcon} time="12:05pm" />
                        <MessageNotifications heading="Client 3" text="Lorem Ipsum is simply dummy text of the skajns dskjas........" image={thirdProfileIcon} time="12:05pm" />
                        <MessageNotifications heading="Client 4" text="Lorem Ipsum is simply dummy text of the skajns dskjas........" image={thirdProfileIcon} time="12:05pm" />
                        <MessageNotifications heading="Client 5" text="Lorem Ipsum is simply dummy text of the skajns dskjas........" image={thirdProfileIcon} time="12:05pm" />

                    </div>

                    <div className="shadow-[0px_4px_76px_0px_rgba(0,_0,_0,_0.1)] bg-white flex flex-col  w-7/11 h-full  p-5 rounded justify-between">
                        <div className="flex w-1/4 items-center justify-between ">

                            <img
                                src={fourthProfilePicture}
                                className=" w-10"
                            />

                            <div className="flex flex-col mt-2  ">
                                <div className="text-2xl font-['Montserrat'] font-medium text-[#323232]">
                                    Osaze Abu
                                </div>
                                <div className="text-sm font-['Montserrat'] text-[#323232] ml-px">
                                    Online
                                </div>
                            </div>
                        </div>

                        <div className="border-solid bg-white flex w-full items-center py-2 px-5 border-black border rounded-lg">
                            <div className='flex items-center justify-between w-1/12'>
                                <img
                                    src={smiley}
                                    className=" w-5 m"
                                />
                                <img
                                    src={fileAttach}
                                    className="w-5"
                                />
                            </div>

                            <input className="text-sm font-['Montserrat'] font-medium text-[#7d7d7d] mt-2 ml-1 w-11/12 h-full" type="text" placeholder=' Type your message here' />
                            <div>
                                <img
                                    src={send}
                                    className="w-5"
                                />
                            </div>


                        </div>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default Messages
