import React, { useState, useEffect } from 'react'
import Sidebar from '../../../common/Sidebar'
import searchIcon from '../../../assets/icons/Search2.png'
import smiley from '../../../assets/icons/smiley_icon.png'
import send from '../../../assets/icons/send_icon.png'
import fileAttach from '../../../assets/icons/file_attach_icon.png'
import fourthProfilePicture from '../../../assets/icons/fourth_profile.png'
import thirdProfileIcon from '../../../assets/icons/third_profile.png'
import MessageNotifications from '../Components/MessageNotifications'

const FreelancerMessages = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [showChat, setShowChat] = useState(false)
    const handleClick = (e) => {
        console.log(showChat)
        setShowChat(prev => !prev)
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
        if (screenWidth >= 640) {
            console.log(true)
            // setShowDiv(true);
        } else {
            console.log(false)
            // setShowDiv(false);
        }
    }, [screenWidth]);
    if (screenWidth < 640) {
        return (
            <div className='w-full min-h-screen relative flex bg-[#F5F5F5]'>
                <Sidebar />
                <div className=' h-full mx-0 px-3   w-full'>

                    <p className="text-xl font-['Montserrat'] font-semibold text-[#323232] w-full  mt-28">
                        Messages
                    </p>

                    <p className="font-['Montserrat'] text-[#323232] w-full mt-0 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    </p>
                    <div className="text-sm font-['Montserrat'] text-[#ee2a1d] text-end mb-2">
                        Leave group
                    </div>

                    <div className=" w-full h-[35rem] pb-3 relative  ">
                        {showChat ?
                            <div className={`shadow bg-white flex flex-col h-full  p-5 rounded justify-between absolute w-full `}>
                                <div className="flex w-1/4 items-center justify-around border ">

                                    <img
                                        src={fourthProfilePicture}
                                        className=" w-10"
                                    />

                                    <div className="flex flex-col ">
                                        <div className="  font-['Montserrat'] font-medium text-[#323232] text-sm">
                                            Osaze Abu
                                        </div>
                                        <div className=" font-['Montserrat'] text-[#323232] ml-px text-xs">
                                            Online
                                        </div>
                                    </div>
                                </div>

                                <div className="border-solid bg-white flex w-full items-center  py-2 px-2 border-black border rounded-lg justify-between">
                                    <div className='flex items-center justify-between'>
                                        <img
                                            src={smiley}
                                            className=" w-5 mr-2"
                                        />
                                        <img
                                            src={fileAttach}
                                            className="w-5"
                                        />
                                    </div>

                                    <input className="text-sm font-['Montserrat'] font-medium w-[80%] text-[#7d7d7d] ml-1  h-full" type="text" placeholder=' Type your message here' />
                                    <div className=''>
                                        <img
                                            src={send}
                                            className="w-5 "
                                        />
                                    </div>


                                </div>


                            </div> :
                            <div className={`shadow  bg-white flex flex-col justify-around px-5 py-3 rounded h-full absolute w-full`}>
                                <div className='flex flex-row bg-[#e1edff]  w-full px-4 py-1 rounded items-center'>
                                    <img src={searchIcon} alt="search icon" />
                                    <input type="text" className="bg-transparent w-full ml-3 font-[' Poppins'] text-[#343f42]" />
                                </div>

                                <MessageNotifications key='1' heading="Team: Group Ferran" text="Lorem Ipsum is simply dummy text of the skajns dskjas........" image={thirdProfileIcon} number="12" time="12:05pm" handleClick={handleClick} />
                                <MessageNotifications key='2' heading="Team: Group Oscar" text="Lorem Ipsum is simply dummy text of the skajns dskjas........" image={thirdProfileIcon} number="12" time="12:05pm" handleClick={handleClick} />
                                <MessageNotifications key='3' heading="Client 1" text="Lorem Ipsum is simply dummy text of the skajns dskjas........" image={thirdProfileIcon} time="12:05pm" handleClick={handleClick} />
                                <MessageNotifications key='4' heading="Client 2" text="Lorem Ipsum is simply dummy text of the skajns dskjas........" image={thirdProfileIcon} time="12:05pm" handleClick={handleClick} />
                                <MessageNotifications key='5' heading="Client 3" text="Lorem Ipsum is simply dummy text of the skajns dskjas........" image={thirdProfileIcon} time="12:05pm" handleClick={handleClick} />
                                <MessageNotifications key='6' heading="Client 4" text="Lorem Ipsum is simply dummy text of the skajns dskjas........" image={thirdProfileIcon} time="12:05pm" handleClick={handleClick} />
                                <MessageNotifications key='7' heading="Client 5" text="Lorem Ipsum is simply dummy text of the skajns dskjas........" image={thirdProfileIcon} time="12:05pm" handleClick={handleClick} />

                            </div>}



                    </div>


                </div>

            </div>
        )
    }
    return (
        <div className='w-full min-h-screen relative flex bg-[#F5F5F5]'>
            <Sidebar />
            <div className='w-[86%] lg:w-[72%] xl:w-[76%] ml-auto mx-6 h-full max-md:mx-0 max-md:px-3  max-md:w-full'>

                <p className="text-xl font-['Montserrat'] font-semibold text-[#323232] w-full  mt-5">
                    Messages
                </p>

                <p className="font-['Montserrat'] text-[#323232] w-full mt-0 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
                <div className="text-sm font-['Montserrat'] text-[#ee2a1d] text-end mb-2">
                    Leave group
                </div>

                <div className="flex items-center justify-between w-full h-[35rem] pb-3 max-sm:relative max-sm:flex-none  ">
                    <div className={`shadow  bg-white flex flex-col justify-around px-5 py-3 rounded w-1/3 max-lg:w-[42%] max-md:w-[46%] max-xl:w-[37%] h-full max-sm:absolute max-sm:opacity-100 max-sm:w-full`}>
                        <div className='flex flex-row bg-[#e1edff]  w-full px-4 py-1 rounded items-center'>
                            <img src={searchIcon} alt="search icon" />
                            <input type="text" className="bg-transparent w-full ml-3 font-[' Poppins'] text-[#343f42]" />
                        </div>

                        <MessageNotifications key='1' heading="Team: Group Ferran" text="Lorem Ipsum is simply dummy text of the skajns dskjas........" image={thirdProfileIcon} number="12" time="12:05pm" />
                        <MessageNotifications key='2' heading="Team: Group Oscar" text="Lorem Ipsum is simply dummy text of the skajns dskjas........" image={thirdProfileIcon} number="12" time="12:05pm" />
                        <MessageNotifications key='3' heading="Client 1" text="Lorem Ipsum is simply dummy text of the skajns dskjas........" image={thirdProfileIcon} time="12:05pm" />
                        <MessageNotifications key='4' heading="Client 2" text="Lorem Ipsum is simply dummy text of the skajns dskjas........" image={thirdProfileIcon} time="12:05pm" />
                        <MessageNotifications key='5' heading="Client 3" text="Lorem Ipsum is simply dummy text of the skajns dskjas........" image={thirdProfileIcon} time="12:05pm" />
                        <MessageNotifications key='6' heading="Client 4" text="Lorem Ipsum is simply dummy text of the skajns dskjas........" image={thirdProfileIcon} time="12:05pm" />
                        <MessageNotifications key='7' heading="Client 5" text="Lorem Ipsum is simply dummy text of the skajns dskjas........" image={thirdProfileIcon} time="12:05pm" />

                    </div>

                    <div className={`shadow bg-white flex flex-col  w-7/11 max-md:w-1/2 max-lg:w-[55%] max-xl:w-3/5 h-full  p-5 rounded justify-between max-sm:absolute max-sm:opacity-0 max-sm:w-full `}>
                        <div className="flex w-1/3 max-xl:w-[45%] max-lg:w-[45%] max-md:w-1/2 items-center justify-around ">

                            <img
                                src={fourthProfilePicture}
                                className=" w-10"
                            />

                            <div className="flex flex-col ">
                                <div className="text-xl  font-['Montserrat'] font-medium text-[#323232] max-md:text-sm max-lg:text-lg">
                                    Osaze Abu
                                </div>
                                <div className="text-sm font-['Montserrat'] text-[#323232] ml-px max-md:text-xs">
                                    Online
                                </div>
                            </div>
                        </div>

                        <div className="border-solid bg-white flex w-full items-center  py-2 px-5 max-lg:px-2 border-black border rounded-lg justify-between">
                            <div className='flex items-center justify-between'>
                                <img
                                    src={smiley}
                                    className=" w-5 mr-2"
                                />
                                <img
                                    src={fileAttach}
                                    className="w-5"
                                />
                            </div>

                            <input className="text-sm font-['Montserrat'] font-medium w-4/5 max-md:w-[70%] text-[#7d7d7d] ml-1  h-full" type="text" placeholder=' Type your message here' />
                            <div className=''>
                                <img
                                    src={send}
                                    className="w-5 "
                                />
                            </div>


                        </div>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default FreelancerMessages
