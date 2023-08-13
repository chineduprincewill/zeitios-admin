import React, { useContext } from 'react'
import { HiOutlineDocumentText, HiUser } from 'react-icons/hi'
import { RxDashboard } from 'react-icons/rx'
import { FaRegUserCircle, FaTasks } from 'react-icons/fa'
import { FaRegComment } from 'react-icons/fa'
import { BsCreditCard } from 'react-icons/bs'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { AiOutlineLogout } from 'react-icons/ai'

const NavDB = () => {

    const { shownav } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('auth');
        navigate('/');
        location.reload();
    }

    const navlinks = [
        {
            id: 1,
            title: "Dashboard",
            url: "/dashboard",
            icon: <RxDashboard size={15} />
        },
        {
            id: 2,
            title: "Projects",
            url: "/projects",
            icon: <FaTasks size={15} />
        },
        {
            id: 3,
            title: "User",
            url: "/user",
            icon: <HiUser size={15} />
        },
        {
            id: 4,
            title: "Messages",
            url: "/messages",
            icon: <FaRegComment size={15} />
        },
        {
            id: 5,
            title: "Payouts",
            url: "/payouts",
            icon: <BsCreditCard size={15} />
        },
        {
            id: 6,
            title: "Statement",
            url: "/statement",
            icon: <HiOutlineDocumentText size={15} />
        },
    ]

    return (
        <ul className='space-y-2 w-[80%]'>
            {
                navlinks.map(nav => {
                    return (
                        <li className={`${location.pathname === nav.url ? 'bg-white text-[#0259dc]' : 'text-white'} px-3 py-2 rounded-sm`}>
                            <Link to={nav.url} key={nav.id} className='flex justify-start items-center space-x-3 my-1'>
                                {nav.icon}
                                <span className={`${shownav ? 'block' : 'hidden'} lg:block`}>{nav.title}</span>
                            </Link>
                        </li>
                    )
                })
            }

            <div className='flex justify-start px-3'><span className='text-blue-500 text-xs mt-6'>Account</span></div>
            
            <li className={`${location.pathname === 'my-profile' ? 'bg-white text-[#0259dc]' : 'text-white'} px-3 py-2 rounded-sm`}>
                <Link to='/my-profile' className='flex justify-start items-center space-x-3 my-1'>
                    <FaRegUserCircle size={15} />
                    <span className={`${shownav ? 'block' : 'hidden'} lg:block`}>My Profile</span>
                </Link>
            </li>
            <li className={`text-white px-3 py-2 rounded-sm`}>
                <div 
                    className='flex justify-start items-center space-x-3 my-1 cursor-pointer'
                    onClick={() => logout()}
                >
                    <AiOutlineLogout size={15} />
                    <span className={`${shownav ? 'block' : 'hidden'} lg:block`}>Logout</span>
                </div>
            </li>
        </ul>
    )
}

export default NavDB