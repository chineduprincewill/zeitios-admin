import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdKeyboardArrowDown } from 'react-icons/md'
import { CiSearch } from 'react-icons/ci'
import Logo from '../../../assets/logo/Logo.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true)
    const [showDropdown, setShowDropdown] = useState(false)
    const [showDiv, setShowDiv] = useState(false)
    const [text, setText] = useState('')
    const handleClick = (e) => {
        e.preventDefault();
        setShowDropdown(prev => !prev)
    }
    const handleDiv = (e) => {
        e.preventDefault();
        setShowDiv(prev => !prev)
    }
    const handleNavbar = (e) => {
        e.preventDefault();
        setShowNavbar(prev => !prev)
    }
    return (
        <>
            <div className="flex w-full p-2 items-center justify-around font-['Montserrat'] text-lg">
                {/* <div className="max-md:border max-sm:border max-sm:border-white max-md:border-white lg:border-none  max-sm:rounded-lg max-md:rounded-lg lg:rounded-none max-sm:p-2 max-md:p-2 max-sm:ml-4 max-md:ml-4 lg:ml-0 lg:h-0 lg:w-0" >
                    <FontAwesomeIcon icon="fa-solid fa-bars" className=" max-sm:text-white max-md:text-white lg:h-0 lg:w-0 " onClick={handleNavbar}> </FontAwesomeIcon>
                </div> */}

                <div>
                    <img src={Logo} alt="Logo" className="" />
                </div>

                <div className="flex justify-around items-center max-sm:absolute max-lg:absolute max-sm:mt-28 max-lg:mt-28 max-sm:bg-basic max-sm:p-2 max-sm:w-full">
                    <div className="text-white lg:px-2 px-1 max-sm:text-sm max-md:text-sm hover:cursor-pointer hover:text-blue-100"> Home </div>
                    <div className="text-white lg:px-2 px-1 max-sm:text-sm max-md:text-sm hover:cursor-pointer hover:text-blue-100"> About </div>
                    <div className="text-white lg:px-2 flex flex-col justify-around items-center relative px-1 max-sm:text-sm max-md:text-sm">  <div className="text-white lg:px-2 px-1 flex justify-around items-center hover:cursor-pointer hover:text-blue-100"> Browse Jobs <MdKeyboardArrowDown onClick={handleClick} className='h-4 w-4' /> </div>
                        {showDropdown && <div className="bg-secondary p-3 absolute mt-[5.5rem] max-lg:mt-[6.5rem] max-sm:mt-20 max-md:mt-[5.5rem] text-sm cursor-pointer font-['Poppins']">
                            <div className='hover:cursor-pointer hover:text-blue-100'>Freelancers</div>
                            <div className='hover:cursor-pointer hover:text-blue-100'>Teams</div>
                        </div>}
                    </div>
                    <div className="text-white lg:px-2 px-1 max-sm:text-sm max-md:text-sm hover:cursor-pointer hover:text-blue-100"> Services </div>
                    <div className="text-white lg:px-2 px-1 max-sm:text-sm max-md:text-sm hover:cursor-pointer hover:text-blue-100"> Blog </div>
                    <div className="text-white lg:px-2 px-1 max-sm:text-sm max-md:text-sm hover:cursor-pointer hover:text-blue-100 "> Contacts </div>
                </div>

                {showDiv ? <input type="text" autoFocus value={text} className='bg-transparent px-2 text-white w-1/6 rounded-xl border border-white' onChange={(e) => {
                    setText(e.target.value);
                }} placeholder="Search ....." /> : <div>
                    < CiSearch className='text-white h-8 w-8' onClick={handleDiv} />
                </div>}


                <Link to="/login" className="border border-white md:p-3  p-1 text-white rounded-md text-center text-2xl hover:cursor-pointer hover:bg-primary hover:border-none">Login</Link>
                <Link to="/register-options" className="bg-primary text-white md:p-3  p-1 text-center rounded-md text-2xl hover:cursor-pointer hover:bg-transparent hover:border hover:border-white">Register</Link>
            </div>

        </>


    )
}

export default Navbar
library.add(fab, fas, far)