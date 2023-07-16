import React from 'react'
import { Link } from 'react-router-dom'
import RatingStars from '../../common/RatingStars'
import { useState } from 'react'
import { useEffect } from 'react'
import GetAvgRating from '../../../utils/avgRating'

const Course_Card = ({course, Height}) => {

    const [avgReviewCount, setAvgReviewCount] = useState(0);

    useEffect(() => {
        const count = GetAvgRating(course.ratingAndReviews);
        setAvgReviewCount(count);
    }, [course])

  return (
    <div>
        {/* using link tag here bcz if we click on any course it will display the details of that course  */}
        <Link to={`/courses/${course._id}`}>
            <div className='my-10 border border-richblack-800 rounded-lg '>
                <div>
                    <img 
                        src={course?.thumbnail}
                        alt='Thumbnail'
                        className={`${Height} w-full rounded-xl object-cover`}
                    />
                </div>
                <div>
                    <p className='text-white text-2xl m-2'>{course?.courseName}</p>
                    <p className='text-richblack-100 m-2'>{course?.instructor?.firstName} {course?.instructor?.lastName}</p>
                    <div className='flex gap-x-3 m-2'>
                        <span className='text-yellow-50'>{avgReviewCount || 0}</span>
                        <RatingStars Review_Count={avgReviewCount}/> 
                        <span className='text-richblack-300'>{course?.ratingAndReviews?.length} Ratings</span>
                    </div>
                    <p className='text-richblack-5 m-2'>RS {course?.price}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Course_Card