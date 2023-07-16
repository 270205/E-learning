import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {GiNinjaStar} from "react-icons/gi"
import {RiDeleteBin6Line} from "react-icons/ri"
import { removeFromCart } from '../../../../slices/cartSlice'
import ReactStars from "react-rating-stars-component"
import { FaStar } from 'react-icons/fa'

export default function RenderCartCourses() {

    // data from slices 
    const {cart} = useSelector((state) => state.cart)
    const dispatch = useDispatch();

  return (
    <div className='flex flex-1 flex-col'>
        {
            cart.map((course, index) => (
                <div 
                    key={index} 
                    className={`flex w-full flex-wrap items-start justify-between gap-6 
                        ${index !== cart.length - 1 && "border-b border-b-richblack-400 pb-6"} 
                        ${index !== 0 && "mt-6"} `
                    }
                >
                    <div className='flex flex-1 flex-col gap-4 xl:flex-row'>
                        <img className="h-[148px] w-[220px] rounded-lg object-cover" src={course.thumbnail} alt="image thumbnail" />
                        <div className='flex flex-col space-y-1'>
                            <p className='text-lg font-medium text-richblack-5'>{course?.courseName}</p>
                            <p className='text-sm text-richblack-300'>{course?.category?.name}</p>
                            <div className='flex items-center gap-2'>
                                <span className='text-yellow-5'>4.8</span>
                                <ReactStars 
                                    count={5}
                                    value={course?.ratingAndReviews?.length}
                                    size={20}
                                    edit={false}
                                    activeColor="#ffd700"
                                    emptyIcon={<FaStar/>}
                                    fullIcon={<FaStar/>}
                                />
                                <span className='text-richblack-400'>
                                    {course?.ratingAndReviews?.length} Ratings
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col space-y-2 items-end'>
                        <button 
                            onClick={() => dispatch(removeFromCart(course._id))}
                            className='flex gap-3 items-center text-pink-200 bg-richblack-800 p-3 rounded-lg border border-richblack-700 mb-3 '
                        >
                            <RiDeleteBin6Line /> 
                            <span>Remove</span>
                        </button>
                        <p className='mb-6 text-3xl font-medium text-yellow-100'>₹ {course?.price}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}
 