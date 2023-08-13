import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import AuthOptions from '../../components/AuthOptions'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');
    const [loggingin, setLoggingin] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault();

        setLoggingin(true);

        if(email !== 'chinedu.ijeomah@yahoo.com' || password !== 'P@55w0rd'){
            setError('Incorrect email or password!');
        }
        else{
            const data = {
                email, password
            }
            console.log(data);

            localStorage.setItem('auth', JSON.stringify(data));
            navigate('/dashboard');
            location.reload();
        }
        setLoggingin(false);
    }

    return (
        <div
            className='w-full flex justify-center items-center h-screen bg-[#c3d0c6]'
        >
            <div className='w-full md:w-[60%] grid lg:grid-cols-2 px-4 md:px-0'>
                <img src={Logo} alt='logo' className='fixed top z-20 mt-3 ml-3'/>
                <div 
                    className={`col-span-1 hidden lg:flex h-[550px] bg-[url('https://weworkremotely.com/images/4-reasons-why-you-should-consider-remote-work.png')] bg-cover justify-start`}
                >
                    <div className='w-full h-full flex justify-center items-center bg-[#0259dc] opacity-60 backdrop-brightness-75'></div>
                </div>
        
                <div className='bg-white p-8 lg:p-12'>
                    <div className='mb-12'>
                        <div className='w-full flex justify-center text-3xl text-gray-800 font-medium'><span>Login</span></div>
                        <div className='w-full flex justify-center text-xs text-gray-600 my-1'>Kindly fill in your details</div>
                    </div>
                    <span className='text-red-500 text-xs'>{error}</span>
                    <form onSubmit={handleLogin}>
                        <div className='space-y-1 my-4'>
                            <span className='text-gray-600 text-sm'>Email Address</span>
                            <input 
                                type='email'
                                className='w-full border border-gray-400 rounded-sm p-1 text-gray-600'
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className='space-y-1 my-4'>
                            <span className='text-gray-600 text-sm'>Password</span>
                            <input 
                                type='password'
                                className='w-full border border-gray-400 rounded-sm p-1 text-gray-600'
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className='mt-12'>
                            <button className='w-full p-3 rounded-sm bg-[#0259dc] text-white'>
                                {loggingin ? 'Logging in...' : 'Login'}
                            </button>
                            <AuthOptions />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login