import React, { Fragment, useContext, useEffect, useState } from 'react'
import { HiOutlineDocumentText, HiUser } from 'react-icons/hi'
import { RxDashboard } from 'react-icons/rx'
import { FaRegUserCircle, FaTasks } from 'react-icons/fa'
import { FaRegComment } from 'react-icons/fa'
import { BsBriefcase, BsCalendarWeek, BsCreditCard } from 'react-icons/bs'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { AiOutlineHeart, AiOutlineLogout } from 'react-icons/ai'
import { MdOutlineReviews } from 'react-icons/md'
import { TbDeviceDesktopCog } from 'react-icons/tb'
import { checkRole } from './helpers/checkRole'

const NavDB = () => {

    const { user, shownav, logout } = useContext(AuthContext);
    const [userRole, setUserRole] = useState(user && user.website);
    const [navlinks, setNavlinks] = useState(null);

    //console.log(user.website);
    console.log(userRole);

    //const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        location.reload();
    }

    const adminlinks = [
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

    const clientlinks = [
        {
            id: 1,
            title: "Dashboard",
            url: "/client-dashboard",
            icon: <RxDashboard size={15} />
        },
        {
            id: 2,
            title: "My Project",
            url: "/my-project",
            icon: <FaTasks size={15} />
        },
        {
            id: 3,
            title: "Saved",
            url: "/saved",
            icon: <AiOutlineHeart size={15} />
        },
        {
            id: 4,
            title: "Messages",
            url: "/client-messages",
            icon: <FaRegComment size={15} />
        },
        {
            id: 5,
            title: "Reviews",
            url: "/client-reviews",
            icon: <MdOutlineReviews size={15} />
        },
        {
            id: 6,
            title: "Payouts",
            url: "/client-payouts",
            icon: <BsCreditCard size={15} />
        },
        {
            id: 7,
            title: "Statement",
            url: "/client-statement",
            icon: <HiOutlineDocumentText size={15} />
        },
    ]

    const freelancerlinks = [
        {
            id: 1,
            title: "Dashboard",
            url: "/freelancer-dashboard",
            icon: <RxDashboard size={15} />
        },
        {
            id: 2,
            title: "Jobs",
            url: "/jobs",
            icon: <BsBriefcase size={15} />
        },
        {
            id: 2,
            title: "Messages",
            url: "/freelancer-messages",
            icon: <FaRegComment size={15} />
        },
        {
            id: 3,
            title: "Reviews",
            url: "/freelancer-reviews",
            icon: <MdOutlineReviews size={15} />
        },
        {
            id: 4,
            title: "Payouts",
            url: "/freelancer-payouts",
            icon: <BsCreditCard size={15} />
        },
        {
            id: 5,
            title: "Statement",
            url: "/freelancer-statement",
            icon: <HiOutlineDocumentText size={15} />
        },
    ]

    const getUserLinks = () => {
        checkRole(userRole, adminlinks, clientlinks, freelancerlinks, setNavlinks);
        //location.reload();
    }


    useEffect(() => {
        getUserLinks();
    }, [])

    useEffect(() => {
        console.log(navlinks);
    }, [])


    return (
        <ul className='space-y-2 w-[80%]'>
            {
                navlinks !== null && navlinks.map(nav => {
                    return (
                        <li key={nav.id} className={`${location.pathname === nav.url ? 'bg-white text-[#0259dc]' : 'text-white'} px-3 py-2 rounded-sm`}>
                            <Link to={nav.url} key={nav.id} className='flex justify-start items-center space-x-3 my-1'>
                                {nav.icon}
                                <span className={`${shownav ? 'block' : 'hidden'} lg:block`}>{nav.title}</span>
                            </Link>
                        </li>
                    )
                })
            }

            {
                userRole === 'Freelancer' && (
                    <Fragment>
                        <div className='flex justify-start px-3'><span className='text-blue-500 text-xs mt-6'>Organize and Manage</span></div>
            
                        <li className={`${location.pathname === '/manage-services' ? 'bg-white text-[#0259dc]' : 'text-white'} px-3 py-2 rounded-sm`}>
                            <Link to='/manage-services' className='flex justify-start items-center space-x-3 my-1'>
                                <TbDeviceDesktopCog size={15} />
                                <span className={`${shownav ? 'block' : 'hidden'} lg:block`}>Manage Services</span>
                            </Link>
                        </li>
                        <li className={`${location.pathname === '/manage-projects' ? 'bg-white text-[#0259dc]' : 'text-white'} px-3 py-2 rounded-sm`}>
                            <Link to='/manage-projects' className='flex justify-start items-center space-x-3 my-1'>
                                <BsCalendarWeek size={15} />
                                <span className={`${shownav ? 'block' : 'hidden'} lg:block`}>Manage Projects</span>
                            </Link>
                        </li>
                    </Fragment>
                )
            }

            <div className='flex justify-start px-3'><span className='text-blue-500 text-xs mt-6'>Account</span></div>
            
            <li className={`${location.pathname === '/login' ? 'bg-white text-[#0259dc]' : 'text-white'} px-3 py-2 rounded-sm`}>
                <Link to='/login' className='flex justify-start items-center space-x-3 my-1'>
                    <FaRegUserCircle size={15} />
                    <span className={`${shownav ? 'block' : 'hidden'} lg:block`}>My Profile</span>
                </Link>
            </li>
            <li className={`text-white px-3 py-2 rounded-sm`}>
                <div 
                    className='flex justify-start items-center space-x-3 my-1 cursor-pointer'
                    onClick={() => handleLogout()}
                >
                    <AiOutlineLogout size={15} />
                    <span className={`${shownav ? 'block' : 'hidden'} lg:block`}>Logout</span>
                </div>
            </li>
        </ul>
    )
}

export default NavDB