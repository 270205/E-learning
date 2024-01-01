import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RatingStars from '../../common/RatingStars'
import { useState } from 'react'
import { useEffect } from 'react'
import GetAvgRating from '../../../utils/avgRating'
import { useDispatch, useSelector } from 'react-redux'
import { FaRegHeart } from "react-icons/fa";
import toast from 'react-hot-toast'
import { ACCOUNT_TYPE } from '../../../utils/constant';
import { addToFavourities } from '../../../slices/favouritiesSlice';

const Course_Card = ({ course, Height }) => {

    const {user} = useSelector((state) => state.profile);
    const {token} = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleAddToFavourities = () => {
        console.log("Fav clicked ")
        if(user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR){
            toast.error("You are an instructor, You cannot add course to favourities.");
            return ;
        }
        if(token){
            dispatch(addToFavourities(course));
            return;
        }
        else{
            toast.error("Please login before adding course to favourities.")
        }
    }

    const [avgReviewCount, setAvgReviewCount] = useState(0);

    useEffect(() => {
        const count = GetAvgRating(course.ratingAndReviews);
        setAvgReviewCount(count);
    }, [course])

    const { darkMode } = useSelector((state) => state.mode);

    return (
        <div>
            {/* using link tag here bcz if we click on any course it will display the details of that course  */}

            <div className={`p-5 my-10 border rounded-xl ${darkMode ? "bg-richblack-900 border-richblack-800 " : "bg-pure-greys-5 border-pure-greys-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"}`}>
                <Link to={`/courses/${course._id}`}>
                    <div>
                        <img
                            src={course?.thumbnail}
                            alt='Thumbnail'
                            className={`${Height} w-full rounded-xl object-cover`}
                        />
                    </div>
                </Link>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className={`text-2xl m-2 ${darkMode ? "text-richblack-5" : "text-richblack-600"}`}>{course?.courseName}</p>
                        <p className='text-richblack-100 m-2'>{course?.instructor?.firstName} {course?.instructor?.lastName}</p>
                        <div className='flex gap-x-3 m-2'>
                            <span className='text-yellow-50'>{avgReviewCount || 0}</span>
                            <RatingStars Review_Count={avgReviewCount} />
                            <span className={`${darkMode ? 'text-richblack-300' : 'text-richblack-400'}`}>{course?.ratingAndReviews?.length} Ratings</span>
                        </div>
                        <p className={` m-2 ${darkMode ? "text-richblack-5" : "text-richblack-400"}`}>RS {course?.price}</p>
                    </div>

                    {/* 
                        <button onClick={handleAddToCart}
                            className={`w-full ${darkMode ? " bg-richblack-800 " : " bg-pure-greys-5 "} py-2 rounded`}>
                            Add to Cart
                        </button> 
                    */}


                    <button onClick={handleAddToFavourities}>    
                        <div className='text-pink-200 cursor-pointer'>
                            <FaRegHeart size={28} />
                        </div>
                    </button> 
                </div>
            </div>
        </div>
    )
}

export default Course_Card