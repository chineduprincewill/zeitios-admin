import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import firstPicture from '../../../assets/image/first_picture.png'
import secondPicture from '../../../assets/image/second_picture.png'
import thirdPicture from '../../../assets/image/third_picture.png'
import Logo from '../../../assets/logo/Logo.png'
import fifthPicture from '../../../assets/image/fifth_picture.png'
import sixthPicture from '../../../assets/image/sixth_picture.png'
import seventhPicture from '../../../assets/image/seventh_picture.png'
import ninthPicture from '../../../assets/image/ninth_picture.png'
import tenthPicture from '../../../assets/image/tenth_picture.png'
import eleventhPicture from '../../../assets/image/eleventh_picture.png'
import starIcon from '../../../assets/icons/star_icon.png'
import googleIcon from '../../../assets/icons/Google.png'
import microsoftIcon from '../../../assets/icons/Microsoft.png'
import figmaIcon from '../../../assets/icons/Figma.png'
import adobeIcon from '../../../assets/icons/Adobe.png'
import rubyIcon from '../../../assets/icons/Ruby.png'
import quotes from '../../../assets/icons/quotes.png'
import bagIcon from '../../../assets/icons/bag.png'
import profileIcon from '../../../assets/icons/profile.png'
import boxIcon from '../../../assets/icons/box.png'
import facebookIcon from '../../../assets/icons/facebook.png'
import twitterIcon from '../../../assets/icons/twitter.png'
import linkedinIcon from '../../../assets/icons/linkedin.png'
import { RiFacebookFill } from 'react-icons/ri'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { sliderComponents } from '../../../data.js'
import SliderItems from './SliderItems'
import twelvethPicture from '../../../assets/image/twelveth_picture.png'

const Home = () => {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const Data = sliderComponents
    const [data, setData] = useState({ name: '', email: '', phoneNumber: '', message: '' })
    const [number, setNumber] = useState(3)
    const [secondNumber, setSecondNumber] = useState(1)
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const colors = ['bg-dark', 'bg-darkerBlue',];
    const image = ['bg-home', '',];
    const secondImage = ['', twelvethPicture];
    const sliderData = Data[number]
    const secondHandleClick = (e) => {
        console.log(number, secondNumber)
        if (screenWidth < 640) {
            if (secondNumber === 6) {
                setSecondNumber(1)
            } else {
                setSecondNumber(secondNumber + 1)
            }
        }
        if (number === 6) {

            setNumber(3)
        } else {
            setNumber(number + 1)

        }


    }
    const firstHandleClick = (e) => {
        console.log(number, secondNumber)
        if (screenWidth < 640) {
            if (secondNumber === 1) {
                setSecondNumber(6)
            } else {
                setSecondNumber(secondNumber - 1)
            }
        }
        if (number === 3) {
            setNumber(6)
        } else {
            setNumber(number - 1)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const currentColor = colors[currentColorIndex];
    const currentImage = image[currentColorIndex]
    const currentSecondImage = secondImage[currentColorIndex]

    // if (screenWidth < 640) {
    //     setNumber(1)
    //     secondSlideComponents = sliderComponents.slice(number - 1, number)
    // }
    //console.log(screenWidth)
    return (
        <div>

            <div className={`h-full w-full pb-20 relative transition duration-500 ${currentImage} bg-blend-multiply font-['Montserrat'] transition duration-500 ${currentColor}`}>
                <Navbar />
                <div className='flex'>
                    <div className='w-2/3 pb-24'>
                        <h1 className="text-center text-white md:text-5xl text-2xl  font-bold mt-20 max-sm:mt-[6.5rem] max-md:mt-[6.5rem] max-lg:mt-[7rem] w-full max-md:pl-3">Find the best Freelance service for your business</h1>
                        <p className="text-center font-normal text-white md:text-2xl text-sm w-full max-md:pl-3">Work with talented people and see your ideas turn into reality</p>
                        <div className=" w-full md:w-2/3 mx-auto  flex justify-center  items-center mt-20 max-md:pl-3">
                            <button className="text-white bg-primary md:p-3 p-2 rounded-lg mr-5 lg:mr-16 hover:cursor-pointer hover:bg-transparent hover:border hover:border-white">Hire a team</button>
                            <button className="text-white border border-white md:p-3 p-2 rounded-lg hover:cursor-pointer hover:bg-primary hover:border-none">Hire a freelancer</button>
                        </div>
                    </div>
                    <div className='w-1/3 self-end flex justify-center'>
                        <img src={currentSecondImage} alt="" className={` w-64 max-md:w-52   transition-opacity duration-500 ${currentSecondImage ? 'opacity-100' : 'opacity-0'
                            }`} />
                    </div>
                </div>

                <div className="bg-basic w-full p-4 flex-wrap text-white  flex items-center justify-around align-self-bottom">
                    <div className=" px-2 py-2 text-center w-1/2 md:w-1/4">
                        <h1 className="font-bold text-2xl">52k</h1>
                        <p className="text-lg">Total Freelancer</p>
                    </div>
                    <div className=" px-2 py-2 text-center w-1/2 md:w-1/4">
                        <h1 className="font-bold text-2xl">50k</h1>
                        <p className="text-lg">Positive Review</p>
                    </div>
                    <div className="px-2 py-2 text-center w-1/2 md:w-1/4">
                        <h1 className="font-bold text-2xl">35k</h1>
                        <p className="text-lg">Project Recieved</p>
                    </div>
                    <div className=" px-2 py-2 text-center w-1/2 md:w-1/4">
                        <h1 className="font-bold text-2xl">350k</h1>
                        <p className="text-lg">Project Completed</p>
                    </div>
                </div>

            </div>
            <div className=" w-full pt-10 pb-20">
                <h1 className="text-center font-bold text-3xl">About Zeitious</h1>
                <p className="text-center text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quui nostrud </p>
                <div className="w-2/3 max-lg:w-5/6 max-sm:w-full max-md:w-5/6 max-sm:flex-col  p-4 flex justify-around items-center mx-auto mt-10">
                    <div className="w-2/5 max-sm:w-5/6  max-sm:mb-5 ">
                        <img src={firstPicture} alt="" className="object-cover max-sm:w-full  " />
                    </div>
                    <div className="w-1/2 2xl:w-2/5 max-lg:w-1/2 max-sm:w-5/6 max-md:w-1/2 text-start max-sm:text-center px-3 text-base">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        <p>elit, sed do eiusmod tempor incididunt ut labore et</p>
                        <p>dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                        <p>nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
                        <p>ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                        <p>in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa</p>
                        <p>qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="w-11/12 mx-auto p-4">
                    <h1 className="font-bold text-3xl">Browse Jobs</h1>
                    <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start">
                        <p className="text-sm">Know your worth and find the job that qualifies your life</p>
                        <p className=" text-primary text-sm"><a href="/">Browse All</a></p>
                    </div>
                </div>
                <div className="w-11/12 mx-auto flex flex-wrap justify-between items-stretch p-4 max-sm:p-2 text-xs">
                    <div className=" flex justify-between  w-2/5 max-sm:w-full max-md:w-5/12 rounded-md  p-6 shadow-md max-sm:p-2 max-sm:py-6 mb-10  ">
                        <div className=' '>
                            <div className='rounded-full p-4 bg-blue-100'>
                                <img src={googleIcon} alt="Google" />
                            </div>
                        </div>
                        <div className='w-3/4'>
                            <div className='w-full mb-5'>
                                <h2 className=" font-medium text-xl text-lightGray">Web Developer</h2>
                                <p>Google</p>
                            </div>
                            <div className='w-full mb-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quui nostrud... </div>
                            <div className='flex justify-between items-center w-full max-md:flex-col max-md:items-start'>
                                <p> $20k-$30k Hourly</p>
                                <p>1-5 Days</p>
                                <p>Remote</p>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-between max-sm:w-full w-2/5 max-md:w-5/12 p-6 rounded-md shadow-md max-sm:p-2 max-sm:py-6 mb-10">
                        <div className=''>
                            <div className='rounded-full p-4 bg-lightOrange'>
                                <img src={microsoftIcon} alt="Google" />
                            </div>
                        </div>
                        <div className='w-3/4'>
                            <div className='w-full mb-5'>
                                <h2 className="text-xl font-medium text-lightGray">Web Developer</h2>
                                <p>Microsoft</p>
                            </div>
                            <div className='w-full mb-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quui nostrud... </div>
                            <div className='flex justify-between items-center w-full max-md:flex-col max-md:items-start'>
                                <p> $20k-$30k Hourly</p>
                                <p>1-5 Days</p>
                                <p>Remote</p>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-between max-sm:w-full max-md:w-5/12 rounded-md  w-2/5 p-6 shadow-md max-sm:p-2 max-sm:py-6 mb-10">
                        <div className=''>
                            <div className=' bg-blue-100    rounded-full p-4'>
                                <img src={googleIcon} alt="Google" />
                            </div>
                        </div>
                        <div className='w-3/4'>
                            <div className='w-full mb-5'>
                                <h2 className="text-xl font-medium text-lightGray">Web Developer</h2>
                                <p>Google</p>
                            </div>
                            <div className='w-full mb-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quui nostrud... </div>
                            <div className='flex justify-between items-center w-full max-md:flex-col max-md:items-start'>
                                <p> $20k-$30k Hourly</p>
                                <p>1-5 Days</p>
                                <p>Remote</p>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-between max-sm:w-full max-md:w-5/12  w-2/5 p-6 shadow-md rounded-md max-sm:px-2 max-sm:py-6 mb-10">
                        <div className=''>
                            <div className='rounded-full p-4 bg-lightOrange'>
                                <img src={microsoftIcon} alt="Google" />
                            </div>
                        </div>
                        <div className='w-3/4'>
                            <div className='w-full mb-5'>
                                <h2 className="text-xl font-medium text-lightGray">Web Developer</h2>
                                <p>Microsoft</p>
                            </div>
                            <div className='w-full mb-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quui nostrud... </div>
                            <div className='flex justify-between items-center w-full max-md:flex-col max-md:items-start'>
                                <p> $20k-$30k Hourly</p>
                                <p>1-5 Days</p>
                                <p>Remote</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className=' bg-blue-100 w-full relative'>
                <div className="w-11/12 mx-auto p-4 pt-16">
                    <h1 className="font-bold text-3xl">Trending Services</h1>
                    <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start">
                        <p className="text-[16px] ">Most viewed and all-time rendered services</p>
                        <p className=" text-primary text-[16px]"><a href="/">View All</a></p>
                    </div>
                </div>
                <div className="flex absolute z-10 cursor-pointer opacity-50 top-0 bottom-0 m-auto right-0 max-sm:right-1 lg:right-5 md:right-1 h-10 w-10 bg-transparent text-black rounded-full items-center justify-center border border-black" onClick={secondHandleClick}><MdKeyboardArrowRight className='w-10 h-10' /></div>
                <div className="w-11/12 mx-auto flex max-md:flex-wrap justify-between items-stretch p-4 max-sm:p-2 relative text-[14px]">
                    {screenWidth < 640 ? sliderComponents.slice(secondNumber - 1, secondNumber).map((slide) => {
                        return <SliderItems sliderData={slide} key={slide.id} />
                    }) : sliderComponents.slice(number - 3, number).map((slide) => {
                        return <SliderItems sliderData={slide} key={slide.id} />
                    })}

                </div>
                <div className="flex z-10 absolute cursor-pointer opacity-50 top-0  bottom-0 m-auto left-0 max-sm:left-1 lg:left-5 md:left-1 h-10 w-10 bg-transparent text-black rounded-full items-center justify-center border border-black" onClick={firstHandleClick}>< MdKeyboardArrowLeft className='w-10 h-10' /></div>
            </div>
            <div className="w-full">
                <div className="w-11/12 mx-auto p-4 pt-16 text-[16px]">
                    <h1 className="font-bold text-3xl">Highest Rated Freelancers</h1>
                    <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start">
                        <p className="max-sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                        <p className=" text-primary"><a href="/">Browse All</a></p>
                    </div>
                </div>
                <div className="w-11/12 mx-auto flex flex-wrap justify-between items-stretch p-4  max-sm:p-2 text-[14px]">
                    <div className="   w-2/5 max-sm:w-full max-md:w-4/9  p-6 shadow-md rounded-md max-sm:p-2 max-sm:py-6 mb-10  ">
                        <div className="flex justify-between items-start w-full">
                            <div className='w-1/3 '>
                                <img src={secondPicture} alt="image" className="h-20 w-20 rounded-full" />
                                <div>
                                    <h3 className="font-medium text-2xl">Osaze Victor</h3>
                                    <p className="text-sm"> UI/UX Designer</p>
                                </div>
                            </div>
                            <div className='w-1/3  text-end'>
                                <p className="text-primary">View Profile</p>
                            </div>
                        </div>

                        <div className="w-full  flex justify-between items-center mt-5 ">
                            <div className='w-2/3 flex max-lg:flex-col justify-start items-start'><img src={starIcon} alt="star icon" /><p className="ml-4 text-lightGray max-lg:ml-0"><span className="font-medium text-darkGray mr-2">4.51 </span>  (123 reviews)</p></div>
                            <div className='w-1/4 max-lg:w-1/3 flex justify-between items-center'>
                                <img src={figmaIcon} alt="figma" />
                                <img src={adobeIcon} alt="adobe" />
                                <img src={rubyIcon} alt="icon" />
                            </div>
                        </div>
                        <div className="w-full flex justify-between  mt-5">
                            <div className=" text-start" >
                                <p>Location</p>
                                <p>Nigeria</p>

                            </div>
                            <div className="  text-start">
                                <p>Rate</p>
                                <p>$50/hr</p>

                            </div>
                            <div className=" text-start">
                                <p >Job success</p>
                                <p>95%</p>
                            </div>
                        </div>
                    </div>
                    <div className="   w-2/5 max-sm:w-full max-md:w-4/9  p-6 shadow-md rounded-md  max-sm:p-2 max-sm:py-6 mb-10  ">
                        <div className="flex justify-between items-start w-full">
                            <div className='w-1/3 '>
                                <img src={secondPicture} alt="image" className="h-20 w-20 rounded-full" />
                                <div>
                                    <h3 className="font-medium text-2xl">Osaze Victor</h3>
                                    <p className="text-sm"> UI/UX Designer</p>
                                </div>
                            </div>
                            <div className='w-1/3  text-end'>
                                <p className="text-primary">View Profile</p>
                            </div>
                        </div>

                        <div className="w-full  flex justify-between items-center mt-5 ">
                            <div className='w-2/3 flex max-lg:flex-col justify-start items-start'><img src={starIcon} alt="star icon" /><p className="ml-4 max-lg:ml-0 text-lightGray"><span className="font-medium text-darkGray mr-2">4.51 </span>  (123 reviews)</p></div>
                            <div className='w-1/4 max-lg:w-1/3 flex justify-between items-center'>
                                <img src={figmaIcon} alt="figma" />
                                <img src={adobeIcon} alt="adobe" />
                                <img src={rubyIcon} alt="icon" />
                            </div>
                        </div>
                        <div className="w-full flex justify-between  mt-5">
                            <div className=" text-start" >
                                <p>Location</p>
                                <p>Nigeria</p>

                            </div>
                            <div className=" text-start">
                                <p>Rate</p>
                                <p>$50/hr</p>

                            </div>
                            <div className=" text-start">
                                <p >Job success</p>
                                <p>95%</p>
                            </div>
                        </div>
                    </div>
                    <div className="   w-2/5 max-sm:w-full max-md:w-4/9  p-6 shadow-md rounded-md  max-sm:p-2 max-sm:py-6 mb-10  ">
                        <div className="flex justify-between items-start w-full">
                            <div className='w-1/3 '>
                                <img src={secondPicture} alt="image" className="h-20 w-20 rounded-full" />
                                <div>
                                    <h3 className="font-medium text-2xl">Osaze Victor</h3>
                                    <p className="text-sm"> UI/UX Designer</p>
                                </div>
                            </div>
                            <div className='w-1/3  text-end'>
                                <p className="text-primary">View Profile</p>
                            </div>
                        </div>

                        <div className="w-full  flex justify-between items-center mt-5">
                            <div className='w-2/3 max-lg:flex-col flex justify-start items-start'><img src={starIcon} alt="star icon" /><p className="ml-4 max-lg:ml-0 text-lightGray"><span className="font-medium text-darkGray mr-2">4.51 </span>  (123 reviews)</p></div>
                            <div className='w-1/4 max-lg:w-1/3 flex justify-between items-center'>
                                <img src={figmaIcon} alt="figma" />
                                <img src={adobeIcon} alt="adobe" />
                                <img src={rubyIcon} alt="icon" />
                            </div>
                        </div>
                        <div className="w-full flex justify-between  mt-5">
                            <div className=" text-start" >
                                <p>Location</p>
                                <p>Nigeria</p>

                            </div>
                            <div className=" text-start">
                                <p>Rate</p>
                                <p>$50/hr</p>

                            </div>
                            <div className=" text-start">
                                <p >Job success</p>
                                <p>95%</p>
                            </div>
                        </div>
                    </div>
                    <div className="   w-2/5 max-sm:w-full max-md:w-4/9  p-6 shadow-md rounded-md  max-sm:p-2 max-sm:py-6 mb-10  ">
                        <div className="flex justify-between items-start w-full">
                            <div className='w-1/3 '>
                                <img src={secondPicture} alt="image" className="h-20 w-20 rounded-full" />
                                <div>
                                    <h3 className="font-medium text-2xl">Osaze Victor</h3>
                                    <p className="text-sm"> UI/UX Designer</p>
                                </div>
                            </div>
                            <div className='w-1/3  text-end'>
                                <p className="text-primary">View Profile</p>
                            </div>
                        </div>

                        <div className="w-full  flex justify-between items-center mt-5 ">
                            <div className='w-2/3 max-lg:flex-col flex justify-start items-start'><img src={starIcon} alt="star icon" /><p className="ml-4 max-lg:ml-0 text-lightGray"><span className="font-medium text-darkGray mr-2">4.51 </span>  (123 reviews)</p></div>
                            <div className='w-1/4 max-lg:w-1/3 flex justify-between items-center'>
                                <img src={figmaIcon} alt="figma" />
                                <img src={adobeIcon} alt="adobe" />
                                <img src={rubyIcon} alt="icon" />
                            </div>
                        </div>
                        <div className="w-full flex justify-between  mt-5">
                            <div className=" text-start" >
                                <p>Location</p>
                                <p>Nigeria</p>

                            </div>
                            <div className=" text-start">
                                <p>Rate</p>
                                <p>$50/hr</p>

                            </div>
                            <div className=" text-start">
                                <p >Job success</p>
                                <p>95%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div className='w-full text-center mt-10'>
                    <h2 className="text-3xl font-medium">Testimonials</h2>
                    <p className="text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                </div>
                <div className="w-full text-center flex flex-col items-center mt-10">
                    <div><img src={quotes} alt="quotes" /></div>
                    <div className=' text-[22px] p-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
                <div className="w-full text-center mt-10">
                    <p className='text-[16px]'>Osaze Michael</p>
                    <p className="text-sm">Client</p>
                </div>
                <div className="flex items-center justify-around w-2/5 max-md:w-2/3 max-sm:w-full max-lg:w-1/2 mt-10 mx-auto mb-24">
                    <div className="rounded-full"><img src={secondPicture} alt="profile picture" /></div>
                    <div className="rounded-full"><img src={thirdPicture} alt="profile picture" /></div>
                    <div className="rounded-full"><img src={secondPicture} alt="profile picture" /></div>
                    <div className="rounded-full"><img src={thirdPicture} alt="profile picture" /></div>
                    <div className="rounded-full"><img src={secondPicture} alt="profile picture" /></div>
                </div>
            </div>
            <div className="w-full relative">
                <div className='bg-lightPink w-2/3 max-lg:w-11/12  max-sm:w-full pt-16  pb-[28rem] z-2 absolute top-0 left-0  pl-16 max-lg:pl-8 max-sm:pl-4'>
                    <div>
                        <h2 className="font-bold text-3xl ">Need something done?</h2>
                        <p className=' max-lg:w-1/2 max-sm:w-full text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    </div>

                </div>
                <div className='absolute right-0 top-10 w-[36rem] max-lg:w-80 max-md:w-64 max-xl:w-[30rem] max-lg:h-[30rem] max-lg:top-6 h-[28rem] max-sm:w-0 max-sm:h-0 z-20 cursor-pointer bg-transparent bg-fourthPicture bg-blend-multiply'>

                    {/* <img src={fourthPicture} alt="" className='object-cover' /> */}
                </div>
                <div className="flex  max-md:flex-wrap max-lg:flex-wrap  items-center justify-between w-7/12 max-lg:w-5/6 max-sm:w-11/12 mt-10
                absolute left-16 max-lg:left-8 max-sm:left-4 top-32 max-lg:top-32 max-sm:top-40 z-30 cursor-pointer text-sm">
                    <div className="pt-5 shadow-md rounded-md px-4 max-sm:px-2 max-sm:h-80 bg-white w-2/7 max-sm:flex max-sm:flex-col max-sm:justify-center   max-lg:w-3/10 max-lg:mb-5 ">
                        <img src={bagIcon} alt="icon" className='max-sm:h-10 max-sm:w-10' />
                        <div className='mt-5'>
                            <p className='text-sm mb-5 font-medium'>Post a Job</p>
                            <p className=' mb-5 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>
                    </div>
                    <div className="pt-5 shadow-md rounded-md px-4 max-sm:px-2 max-sm:h-80 max-sm:flex max-sm:flex-col max-sm:justify-center   bg-white w-2/7  max-lg:w-3/10 max-lg:mb-5   ">
                        <img src={profileIcon} alt="icon" className='max-sm:h-10 max-sm:w-10' />
                        <div className='mt-5'>
                            <p className='text-sm font-medium mb-5'>Choose Freelancer</p>
                            <p className=' mb-5 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>
                    </div>
                    <div className="pt-5 shadow-md rounded-md px-4 max-sm:px-2 max-sm:h-80 max-sm:flex max-sm:flex-col max-sm:justify-center  bg-white w-2/7  max-lg:w-3/10 max-lg:mb-5  ">
                        <img src={boxIcon} alt="icon" className='max-sm:h-10 max-sm:w-10' />
                        <div className='mt-5'>
                            <p className='text-sm font-medium mb-5'>Pay safely</p>
                            <p className=' mb-5 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full mt-[46rem] pb-5">
                <div className="w-11/12 mx-auto p-4 max-md:px-0">
                    <h1 className="font-bold text-3xl">Our Blog</h1>
                    <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start">
                        <p className="max-sm:text-sm text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                        <p className=" text-primary text-[16px] max-sm:text-sm "><a href="/">View All</a></p>
                    </div>
                </div>
                <div className="w-11/12 mx-auto flex max-md:flex-wrap justify-between items-stretch p-4 max-md:px-0 max-sm:p-2 ">
                    <div className="   w-2/7 max-sm:w-full max-md:w-3/10   shadow-md rounded-md  mb-10 pb-10 ">
                        <div className='mb-5 w-full border'>
                            <img src={fifthPicture} alt="image" className="object-cover w-full" />
                        </div>
                        <div className='px-5 my-2 max-sm:my-5 text-lightGray text-[16px]'>January 13, 2023</div>
                        <div className='px-5 my-2 max-sm:my-5 text-[14px] font-medium' >Learn a tech skills today and work from the comfort of your home</div>
                        <div className='px-5 my-2 max-sm:my-5 text-[14px] text-darkGray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</div>
                    </div>
                    <div className="   w-2/7 max-sm:w-full max-md:w-3/10   shadow-md rounded-md  mb-10 pb-10 ">
                        <div className='mb-5 w-full border '>
                            <img src={sixthPicture} alt="image" className="object-cover w-full" />
                        </div>
                        <div className='px-5 my-2 max-sm:my-5 text-lightGray text-[16px]'>January 13, 2023</div>
                        <div className='px-5 my-2 max-sm:my-5 text-[14px] font-medium' >Learn a tech skills today and work from the comfort of your home</div>
                        <div className='px-5 my-2 max-sm:my-5 text-[14px] text-darkGray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</div>
                    </div>
                    <div className="   w-2/7 max-sm:w-full max-md:w-3/10   shadow-md rounded-md  mb-10 pb-10  ">
                        <div className='mb-5 w-full border'>
                            <img src={seventhPicture} alt="image" className="object-cover w-full" />
                        </div>
                        <div className='px-5 my-2 max-sm:my-5 text-[16px] text-lightGray'>January 13, 2023</div>
                        <div className='px-5 my-2 max-sm:my-5 text-[14px] font-medium' >Learn a tech skills today and work from the comfort of your home</div>
                        <div className='px-5 my-2 max-sm:my-5 text-[14px] text-darkGray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</div>
                    </div>



                </div>
            </div>
            <div className='w-full bg-[#ffb19d] pt-16 px-16 max-sm:px-5 pb-16'>
                <div className=''>
                    <h1 className="font-bold text-3xl"> Contact Us</h1>
                    <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                </div>
                <div className='w-full flex items-center justify-between mt-10'>
                    <form className=' bg-white w-1/3 max-sm:w-full  max-lg:w-2/5 max-xl:w-3/11 flex flex-col items-center shadow-[0px_34px_34px_0px_rgba(13,_46,_97,_0.05)] rounded-md text-[14px] border-solid border-[#f5f5f5] border pt-10'>
                        <div className='flex flex-col justify-center w-5/8 my-3 text-[#1f1f1f]'>
                            <label>Name</label>
                            <input type="text" id="name" value={data.name} onChange={(e) => { setData({ ...data, [e.target.id]: e.target.value }) }} className='shrink-0 border-[0.05rem] p-1 border-solid border-[#c4c4c4] bg-transparent rounded-sm' />
                        </div>
                        <div className='flex flex-col justify-center w-5/8 my-3'>
                            <label>Email</label>
                            <input type="text" id="email" value={data.email} onChange={(e) => { setData({ ...data, [e.target.id]: e.target.value }) }} className='shrink-0 border-[0.05rem] p-1 border-solid border-[#c4c4c4] bg-transparent rounded-sm' />
                        </div>
                        <div className='flex flex-col justify-center w-5/8 my-3'>
                            <label>Phone Number</label>
                            <input type="text" id="phoneNumber" value={data.phoneNumber} onChange={(e) => { setData({ ...data, [e.target.id]: e.target.value }) }} className='shrink-0 border-[0.05rem] p-1 border-solid border-[#c4c4c4] bg-transparent rounded-sm' />
                        </div>
                        <div className='flex flex-col justify-center w-5/8 mt-3 mb-5'>
                            <label>Message</label>
                            <textarea rows="4" id="message" value={data.message} onChange={(e) => { setData({ ...data, [e.target.id]: e.target.value }) }} className='shrink-0 border-[0.05rem] p-1 border-solid border-[#c4c4c4] bg-transparent rounded-sm w-full resize-none' />
                        </div>
                        <div className='mt-5 mb-8 w-5/8'>
                            <button className='bg-darkBlue text-white text-center w-full text-[20px] rounded-sm p-2'> Submit</button>
                        </div>
                    </form>
                    <div className='  bg-eighthPicture w-4/9 h-96 max-sm:h-0 max-sm:w-0'></div>
                </div>
            </div>
            <div className=' bg-darkerBlue w-full px-5 pt-10 mt-20'>
                <div className=" w-full flex justify-center items-center flex-col">
                    <h1 className="text-4xl font-semibold text-white text-center">Subscribe to our Newsletter</h1>
                    <div className=" mb-8 text-white text-center text-[16px]">Get timely updates from your favourite products</div>
                    <form className=" w-1/3 max-sm:w-2/3 max-lg:w-3/8 bg-white  flex items-center p-2 rounded-md text-[14px]">
                        <input id="text" type="text" placeholder="your email address" className="bg-transparent w-5/6" />
                        <button className="rounded-md w-1/4 text-white py-2 flex items-center justify-center bg-darkBlue"> Send</button>
                    </form>
                </div>
                <div className="flex max-sm:flex-wrap justify-between  w-full pt-10 pb-10 mt-10 text-white px-5 text-[15px] font-normal">
                    <div className=" w-1/4 max-sm:w-1/2 flex flex-col max-sm:mb-10 ">
                        <h1 className=" text-lg mb-4  ">NAVIGATION</h1>
                        <div className="flex flex-col">
                            <div className=""> Home</div>
                            <div className=""> About Us</div>
                            <div className=""> What We Do </div>
                            <div className=""> To The Power of 10</div>
                            <div className=""> Donate</div>

                        </div>

                    </div>
                    <div className=" w-1/4 max-sm:w-1/2 flex flex-col max-sm:mb-10 ">
                        <h1 className=" text-lg mb-4 ">WHAT WE DO</h1>
                        <div className="flex  flex-col">
                            <div className=""> Web & App Development</div>
                            <div className=""> UI/UX Design</div>
                            <div className=""> Graphics Design </div>

                        </div>

                    </div>
                    <div className=" w-1/4 max-sm:w-1/2 flex flex-col max-sm:mb-10 ">
                        <h1 className=" text-lg mb-4 ">CATEGORIES</h1>
                        <div className="flex flex-col">
                            <div className=""> Jobs</div>
                            <div className=""> Freelancer</div>
                            <div className=""> Team</div>

                        </div>

                    </div>
                    <div className=" w-1/4 max-sm:w-1/2 flex flex-col max-sm:mb-10">
                        <h1 className=" text-lg mb-4 ">SUPPORT</h1>
                        <div className="flex  flex-col">
                            <div className=""> support@zeitios.com</div>
                            <div className="">  +66 2399 1145</div>
                            <div className=""> Contact Us</div>
                            <div className=""> Facebook</div>
                            <div className=""> Linkedin</div>
                            <div className=""> Twitter</div>

                        </div>

                    </div>

                </div>
                <div className='flex justify-between items-center w-full py-10 px-10 max-sm:px-0 max-md:px-5 border-t-[0.001px] border-white max-sm:flex-col max-sm:items-center'>
                    <div className='w-1/3 max-lg:w-1/4 max-sm:w-1/5 max-sm:my-2 '><img src={Logo} alt="" /></div>
                    <div className='w-1/3 max-lg:w-1/2 max-sm:w-3/4 text-white max-sm:text-center max-sm:my-2'>© 2023 Zeitios. All Rights Reserved. </div>
                    <div className='w-2/11 max-lg:w-1/4 max-sm:w-1/2 flex items-center justify-around max-sm:my-2'>
                        <div className='rounded-full p-3 border border-white text-white'>
                            {/* <img src={facebookIcon} alt="" className='' /> */}
                            < RiFacebookFill />

                        </div>
                        <div className='rounded-full p-3 border border-white text-white'>
                            {/* <img src={twitterIcon} alt="" /> */}
                            < AiOutlineTwitter />
                        </div>
                        <div className='rounded-full p-3 border border-white text-white'>
                            {/* <img src={linkedinIcon} alt="" /> */}
                            < FaLinkedinIn />
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home
