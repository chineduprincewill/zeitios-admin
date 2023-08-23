import React from 'react'
import starIcon from '../../../assets/icons/star_icon.png'
import secondPicture from '../../../assets/image/second_picture.png'

const SliderItems = ({ sliderData }) => {
    const data = [{ img: `${secondPicture}` }]

    return (

        <div className="   w-2/7 max-sm:w-full max-md:w-3/10 bg-white  shadow-md rounded-md  mb-10  font-['Montserrat']">
            <div className='mb-5 w-full border'>
                <img src={sliderData.img} alt="image" className="object-cover w-full" />
            </div>
            <div className=' my-2 max-sm:my-3 text-lightGray px-3 text-base'> {sliderData.title}</div>
            <div className=' my-2 max-sm:my-3  px-3'>{sliderData.desc}</div>
            <div className="w-full  flex justify-between items-center my-5 px-3">
                <div className='w-2/3 max-lg:w-full flex justify-start items-center'><img src={starIcon} alt="star icon" /><p className="ml-4 text-lightGray"><span className="font-medium text-darkGray pr-2">{sliderData.rating} </span>  {sliderData.reviews} reviews</p></div>

            </div>
            <div className='flex w-full items-center justify-between my-9 px-3 max-lg:flex-col'>
                <div className='w-1/2 max-lg:w-full flex items-start justify-start max-lg:mb-2'>
                    <div className='rounded-full w-6 h-4'>
                        <img src={sliderData.bg} alt="image" />
                        {/* {sliderData.bg} */}
                    </div>
                    <div className='pl-2 max-lg:pl-4'>15 articles</div>
                </div>
                <div className='w-1/2 text-end text-lightGray max-lg:w-full max-lg:text-start'>Starting at <span className='text-darkGray'>{sliderData.price}</span> </div>
            </div>
        </div>

    )
}

export default SliderItems
