import React, { useState } from 'react'
import Logo from '../../assets/logo/Logo.png'
import Client from '../../assets/image/rafiki.png'
import Freelancer from '../../assets/image/amico.png'
import { Link, useNavigate } from 'react-router-dom'
import AuthOptions from '../../common/AuthOptions'
import { MdArrowBack } from 'react-icons/md'
import Navigate from '../../common/Navigate'

const RegisterOptions = () => {

    const navigate = useNavigate();

    const [selectedOption, setSelectedOption] = useState(null);

    const selectOption = (option) => {
        setSelectedOption(option);
    }

    const goToRegister = () => {
        if(selectedOption === null){
            alert('You must register as either Client or Freelancer!');
        }
        else{
            navigate(
                '/register',
                {
                    state: {
                        selectedOption
                    }
                }
            )
        }
    }

    return (
        <div
                className='w-full h-screen flex justify-center items-center md:bg-[#c3d0c6]'
            >
                <div className='py-12 md:py-0 mt-24 md:mt-0'>
                    <div className='w-full my-8'>
                        <img src={Logo} alt='logo' />
                    </div>

                    <div className='w-full p-12 md:p-0 md:px-24 md:pt-24 grid justify-center bg-gray-100 rounded-xl'>
                        <div className='w-full text-xl flex justify-center items-center mt-48 md:mt-0 mb-12'>
                            Register as a Client or Freelancer
                        </div>
                        <div className='w-full md:flex md:justify-center md:space-x-12 space-y-8 md:space-y-0'>
                            <div 
                                className={`flex justify-center items-center`}
                                onClick={(e) => selectOption('Client')}
                            >
                                <div className={`w-[350px] rounded-lg bg-white shadow ${selectedOption === 'Client' && 'border border-[#0259dc]'} cursor-pointer`}>
                                    <div className='w-full flex justify-center items-center bg-[#0259dc] h-12 rounded-t-lg'>
                                        <div className='text-white'>Client</div>
                                    </div>
                                    <div className='p-8 flex justify-center'>  
                                        <img src={Client} alt='client'/>
                                    </div>
                                    <div className='w-full flex justify-center items-center mb-12'>
                                        <div className='text-xs'>I'm a client, hiring for a project</div>
                                    </div>
                                </div>
                            </div>

                            <div 
                                className={`flex justify-center items-center`}
                                onClick={(e) => selectOption('Freelancer')}
                            >
                                <div className={`w-[350px] rounded-lg bg-white shadow ${selectedOption === 'Freelancer' && 'border border-[#0259dc]'} cursor-pointer`}>
                                    <div className='w-full flex justify-center items-center bg-[#0259dc] h-12 rounded-t-lg'>
                                        <div className='text-white'>Freelancer</div>
                                    </div>
                                    <div className='p-8 flex justify-center'>  
                                        <img src={Freelancer} alt='client'/>
                                    </div>
                                    <div className='w-full flex justify-center items-center mb-12'>
                                        <div className='text-xs'>I'm a freelancer, looking for jobs</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='flex justify-center'>
                                <button 
                                    className='bg-[#0259dc] hover:bg-transparent hover:text-[#0259dc] hover:border hover:border-[#0259dc] w-[60%] rounded-md text-white py-3 mt-12 mb-2'
                                    onClick={(e) => goToRegister()}
                                >
                                    Next
                                </button>
                            </div>
                            <Navigate />
                        </div>
                    </div>
                </div>
                
            </div>
    )
}

export default RegisterOptions
