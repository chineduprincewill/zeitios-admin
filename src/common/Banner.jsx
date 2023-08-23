import React from 'react'
import Logo from '../assets/logo/Logo.png'

const Banner = () => {
    return (
        <div>
            <img src={Logo} alt='logo' className='fixed top z-20 mt-3 ml-3'/>
            <div 
                className={`col-span-1 hidden lg:flex h-[650px] bg-[url('https://weworkremotely.com/images/4-reasons-why-you-should-consider-remote-work.png')] bg-cover justify-start`}
            >
                <div className='w-full h-full flex justify-center items-center bg-[#0259dc] opacity-60 backdrop-brightness-75'></div>
            </div>
        </div>
    )
}

export default Banner
