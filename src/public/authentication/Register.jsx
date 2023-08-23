import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { registerUser } from './actions/authActions'
import Navigate from '../../common/Navigate'
import Banner from '../../common/Banner'

const Register = () => {

    const { state } = useLocation();

    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [phonenumber, setPhonenumber] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [country, setCountry] = useState();

    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const [registering, setRegistering] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();

        setRegistering(true);

        const data = {
            given_name : firstname, 
            family_name : lastname, 
            phone_number : phonenumber, 
            email, 
            username, 
            locale : country,
            website : state?.selectedOption,
            email_verified : true,
            phone_number_verified : true
        }

        console.log(data);

        registerUser(data, setSuccess, setError, setRegistering);
    }

    return (
        <div
            className='w-full flex justify-center items-center h-screen bg-[#c3d0c6]'
        >
            <div className='w-full md:w-[80%] grid lg:grid-cols-2 p-4 md:p-0'>
                <Banner />
        
                <div className='bg-white p-8 lg:p-12'>
                    <div className='mb-12'>
                        <div className='w-full flex justify-center text-3xl text-gray-800 font-medium'><span>Register</span></div>
                        <div className='w-full flex justify-center text-xs text-gray-600 my-1'></div>
                    </div>
                    <span className='text-red-500 text-sm'>{error !== null && error}</span>
                    {(success !== null || error !== null) && <p className='text-sm text-[#0259dc] my-3'>
                        You did not receive an email on sign up? Click <Link to="/resend-code"><strong>here</strong></Link> to receive SMS
                    </p> }
                    <form onSubmit={handleRegister}>

                        <div className='grid lg:grid-cols-2'>

                            <div className='space-y-1 my-2 lg:mr-2'>
                                <span className='text-gray-600 text-sm'>Email Address</span>
                                <input 
                                    type='email'
                                    className='w-full border border-gray-400 rounded-sm p-1 text-gray-600'
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='space-y-1 my-2 lg:ml-2'>
                                <span className='text-gray-600 text-sm'>Username</span>
                                <input 
                                    type='text'
                                    className='w-full border border-gray-400 rounded-sm p-1 text-gray-600'
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className='grid lg:grid-cols-2'>
                            <div className='space-y-1 my-2 lg:mr-2'>
                                <span className='text-gray-600 text-sm'>First Name</span>
                                <input 
                                    type='text'
                                    className='w-full border border-gray-400 rounded-sm p-1 text-gray-600'
                                    onChange={(e) => setFirstname(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='space-y-1 my-2 lg:ml-2'>
                                <span className='text-gray-600 text-sm'>Last Name</span>
                                <input 
                                    type='text'
                                    className='w-full border border-gray-400 rounded-sm p-1 text-gray-600'
                                    onChange={(e) => setLastname(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        
                        
                        <div className='grid lg:grid-cols-2'>
                        <div className='space-y-1 my-2 lg:mr-2'>
                                <span className='text-gray-600 text-sm'>Phone Number</span>
                                <input 
                                    type='text'
                                    className='w-full border border-gray-400 rounded-sm p-1 text-gray-600'
                                    onChange={(e) => setPhonenumber(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='space-y-1 my-2 lg:ml-2'>
                                <span className='text-gray-600 text-sm'>Country</span>
                                <select
                                    className='w-full border border-gray-400 rounded-sm p-1 text-gray-600'
                                    onChange={(e) => setCountry(e.target.value)}
                                    required
                                >
                                    <option value="United States">United States</option>
                                    <option value="Nigeria">Nigeria</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex items-center my-2">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="default-checkbox" className="ml-2 text-sm text-gray-600">I agree to all the <span className="text-[#0259dc]">Terms</span> and <span className='text-[#0259dc]'>Privacy Policy</span></label>
                        </div>
                        
                        <div className='mt-12'>
                            <button className='w-full p-3 rounded-sm bg-[#0259dc] text-white'>
                                {registering ? 'Registering...' : 'Register'}
                            </button>
                            <Navigate />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register