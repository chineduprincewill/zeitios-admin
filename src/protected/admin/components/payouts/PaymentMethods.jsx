import React, { useState } from 'react'

const PaymentMethods = () => {

    const [active, setActive] = useState('Paypal');

    return (
        <div className='w-full bg-white rounded-m my-12 shadow-md py-8 px-4 md:px-12'>
            <h1 className='font-bold my-6 text-gray-700'>Payment Methods</h1>
            <div className='w-full grid md:grid-cols-3 mt-6'>
                <div className='col-span-2 space-y-5'>
                    <div className='w-full grid'>
                        <p className='text-gray-800'>Select default payout method</p>
                        <select className='w-full border border-gray-300 rounded-sm text-gray-400 p-2 my-2'>
                            <option value="Paypal">Paypal</option>
                            <option value="Payoneer">Payoneer</option>
                            <option value="Bank Transfer">Bank Transfer</option>
                        </select>
                    </div>

                    <div className='w-full grid'>
                        <p className='text-gray-800'>Payout Details</p>
                        <div className='w-[390px] flex border-2 border-[#b8ceff] rounded-md text-gray-700 my-2'>
                            <div 
                                className={`rounded-l-md flex justify-center py-2 text-sm w-[130px] ${active === 'Paypal' ? 'bg-white' : 'bg-[#b8ceff]'} cursor-pointer`} 
                                onClick={(e) => setActive('Paypal')}
                            >
                                Paypal
                            </div>
                            <div 
                                className={`flex justify-center py-2 text-sm w-[130px] ${active === 'Payoneer' ? 'bg-white' : 'bg-[#b8ceff]'} cursor-pointer`} 
                                onClick={(e) => setActive('Payoneer')}
                            >
                                Payoneer
                            </div>
                            <div 
                                className={`rounded-r-md flex justify-center py-2 text-sm w-[130px] ${active === 'Bank Transfer' ? 'bg-white' : 'bg-[#b8ceff]'} cursor-pointer`} 
                                onClick={(e) => setActive('Bank Transfer')}
                            >
                                Bank Transfer
                            </div>
                        </div>
                    </div>

                    <div className='w-full grid md:grid-cols-2 space-x-0 md:space-x-8 space-y-5 md:space-y-0'>
                        <div className='col-span-1'>
                            <p className='text-gray-800'>Bank Name</p>
                            <input type='text' className='w-full border border-gray-300 rounded-sm text-gray-400 p-2 my-2 rounded-md' placeholder='First Bank' />
                        </div>
                        <div className='col-span-1'>
                            <p className='text-gray-800'>Bank Account Number</p>
                            <input type='number' className='w-full border border-gray-300 rounded-sm text-gray-400 p-2 my-2 rounded-md' placeholder='0123456789' />
                        </div>
                    </div>

                    <div className='w-full grid md:grid-cols-2 space-x-0 md:space-x-8 space-y-5 md:space-y-0'>
                        <div className='col-span-1'>
                            <p className='text-gray-800'>Bank Account Holder's Name</p>
                            <input type='text' className='w-full border border-gray-300 rounded-sm text-gray-400 p-2 my-2 rounded-md' placeholder='Osaze Abu' />
                        </div>
                        <div className='col-span-1'>
                            <p className='text-gray-800'>Bank Routing Number</p>
                            <input type='number' className='w-full border border-gray-300 rounded-sm text-gray-400 p-2 my-2 rounded-md' placeholder='0123456789' />
                        </div>
                    </div>

                    <div className='w-full grid md:grid-cols-2 space-x-0 md:space-x-8 space-y-5 md:space-y-0'>
                        <div className='col-span-1'>
                            <p className='text-gray-800'>Bank IBAN</p>
                            <input type='text' className='w-full border border-gray-300 rounded-sm text-gray-400 p-2 my-2 rounded-md' placeholder='First Bank' />
                        </div>
                        <div className='col-span-1'>
                            <p className='text-gray-800'>Swift Code</p>
                            <input type='number' className='w-full border border-gray-300 rounded-sm text-gray-400 p-2 my-2 rounded-md' placeholder='0123456789' />
                        </div>
                    </div>

                    <button className='w-[200px] p-4 bg-[#0259dc] text-white rounded-md hover:bg-transparent border hover:border-[#0259dc] hover:text-[#0259dc] text-sm'>Save Details</button>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethods
