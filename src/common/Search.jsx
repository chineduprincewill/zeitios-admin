import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

const Search = ({ setSearch }) => {

    return (
        <div className='w-full flex justify-end py-3 my-3'>
            <div className='flex items-center'>
                <input 
                    type='text' 
                    className='w-[250px] p-2 border border-gray-300 rounded-l-md bg-transparent'
                    placeholder='Search'
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className='p-2 border-y border-r border-gray-300 rounded-r-md'>
                    <HiOutlineSearch size={24} className='text-gray-300' />
                </div>
            </div>  
        </div>
    )
}

export default Search
