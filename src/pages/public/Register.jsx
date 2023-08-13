import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import AuthOptions from '../../components/AuthOptions'

const Register = () => {

    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [phonenumber, setPhonenumber] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirm, setConfirm] = useState();
    const [confirmerror, setConfirmerror] = useState('');

    const [registering, setRegistering] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();

        setRegistering(true);

        if(password !== confirm){
            setConfirmerror('Password mismatch!');
        }
        else{
            const data = {
                firstname, lastname, phonenumber, email, password
            }

            console.log(data);
        }

        setRegistering(false);
    }

    return (
        <div
            className='w-full flex justify-center items-center h-screen bg-[#c3d0c6]'
        >
            <div className='w-full md:w-[80%] grid lg:grid-cols-2 p-4 md:p-0'>
                <img src={Logo} alt='logo' className='fixed top z-20 mt-3 ml-3'/>
                <div 
                    className={`col-span-1 hidden lg:flex h-[650px] bg-[url('https://weworkremotely.com/images/4-reasons-why-you-should-consider-remote-work.png')] bg-cover justify-start`}
                >
                    <div className='w-full h-full flex justify-center items-center bg-[#0259dc] opacity-60 backdrop-brightness-75'></div>
                </div>
        
                <div className='bg-white p-8 lg:p-12'>
                    <div className='mb-12'>
                        <div className='w-full flex justify-center text-3xl text-gray-800 font-medium'><span>Register</span></div>
                        <div className='w-full flex justify-center text-xs text-gray-600 my-1'>As an admin</div>
                    </div>
                    <form onSubmit={handleRegister}>
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
                                <span className='text-gray-600 text-sm'>Email Address</span>
                                <input 
                                    type='email'
                                    className='w-full border border-gray-400 rounded-sm p-1 text-gray-600'
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        
                        <div className='grid lg:grid-cols-2'>
                            <div className='space-y-1 my-2 lg:mr-2'>
                                <span className='text-gray-600 text-sm'>Password</span>
                                <input 
                                    type='password'
                                    className='w-full border border-gray-400 rounded-sm p-1 text-gray-600'
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='space-y-1 my-2 lg:ml-2'>
                                <span className='text-gray-600 text-sm'>Confirm Password</span>
                                <input 
                                    type='password'
                                    className='w-full border border-gray-400 rounded-sm p-1 text-gray-600'
                                    onChange={(e) => setConfirm(e.target.value)}
                                    required
                                />
                                <small className='text-red-500 text-xs'>{confirmerror}</small>
                            </div>
                        </div>

                        <div class="flex items-center my-2">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ml-2 text-sm text-gray-600">I agree to all the <span className="text-[#0259dc]">Terms</span> and <span className='text-[#0259dc]'>Privacy Policy</span></label>
                        </div>
                        
                        <div className='mt-12'>
                            <button className='w-full p-3 rounded-sm bg-[#0259dc] text-white'>
                                {registering ? 'Registering...' : 'Register'}
                            </button>
                            <AuthOptions />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register