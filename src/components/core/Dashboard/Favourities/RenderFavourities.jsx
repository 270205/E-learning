import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GiNinjaStar } from "react-icons/gi"
import { RiDeleteBin6Line } from "react-icons/ri"
import ReactStars from "react-rating-stars-component"
import { FaStar } from 'react-icons/fa'
import { removeFromFavourities } from '../../../../slices/favouritiesSlice'
import { FaCartArrowDown } from "react-icons/fa";
import addToCart from "../../../../slices/cartSlice"

export default function RenderFavouritiesCourses() {

    // data from slices 
    const { favourities } = useSelector((state) => state.favourities)
    const dispatch = useDispatch();
    const { darkMode } = useSelector((state) => state.mode);

    return (
        <div className={`flex flex-1 flex-col rounded ${darkMode ? "border-richblack-800 border-[1px] p-5" : ""}`}>
            {
                favourities.map((course, index) => (
                    <div
                        key={index}
                        className={`flex w-full flex-wrap items-start justify-between gap-6 
                        ${index !== favourities.length - 1 && "border-b border-b-richblack-400 pb-6"} 
                        ${index !== 0 && "mt-6"} `
                        }
                    >
                        <div className={` flex flex-1 flex-col gap-4 xl:flex-row  rounded-xl ${!darkMode && " shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5"}`}>
                            <img className="h-[148px] w-[220px] rounded-lg object-cover" src={course.thumbnail} alt="image thumbnail" />
                            <div className='flex flex-col space-y-1'>
                                <p className={`text-lg font-medium ${darkMode ? "text-richblack-5" : "text-richblack-600 "}`}>{course?.courseName}</p>
                                <p className='text-sm text-richblack-300'>{course?.category?.name}</p>
                                <div className='flex items-center gap-2'>
                                    <span className='text-yellow-5'>4.8</span>
                                    <ReactStars
                                        count={5}
                                        value={course?.ratingAndReviews?.length}
                                        size={20}
                                        edit={false}
                                        activeColor="#ffd700"
                                        emptyIcon={<FaStar />}
                                        fullIcon={<FaStar />}
                                    />
                                    <span className='text-richblack-400'>
                                        {course?.ratingAndReviews?.length} Ratings
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col space-y-2 items-end'>
                            <div className='flex items-center'>
                                <button
                                    onClick={() => dispatch(removeFromFavourities(course._id))}
                                    className={`flex m-5 gap-3 items-center text-pink-200 ${darkMode ? "bg-richblack-800" : ""} p-3 rounded-lg  `}
                                >
                                    <RiDeleteBin6Line size={20} />
                                </button>

                                <button
                                    // onClick={}
                                    className={`flex gap-3 items-center text-yellow-200 ${darkMode ? "bg-richblack-800" : ""} p-3 rounded-lg  `}
                                >
                                    <FaCartArrowDown size={20} />
                                </button>
                            </div>
                            <p className={`mb-6 text-2xl font-medium ${darkMode ? "text-richblack-100" : "text-richblack-500"}`}>₹ {course?.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
