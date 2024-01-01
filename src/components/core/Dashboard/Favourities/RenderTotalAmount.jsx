import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import IconBtn from '../../../common/IconBtn'
// import { buyCourse } from '../../../../services/operations/studentFeaturesAPI'
// import { useNavigate } from 'react-router-dom'

const RenderTotalAmount = () => {

    const {totalFav, favourities} = useSelector((state) => state.favourities)
    // const { user } = useSelector((state) => state.profile);
    // const { token } = useSelector((state) => state.auth);
    // const navigate = useNavigate();
    // const dispatch = useDispatch();

    // const handleBuyCourse = () => {
    //     const courses = favourities.map((course) => course._id);
    //     console.log("Bought these courses:",courses);
    //     // will write api for payment gateway 
    //     buyCourse(token, courses, user, navigate, dispatch)
    // }

    const {darkMode} = useSelector((state) => state.mode);

  return (
    <div className={`flex  items-center justify-between min-w-[280px] rounded-md border-[1px]  ${darkMode ? "bg-richblack-800 border-richblack-700" : "border-pure-greys-100"} p-6 `}>
        <p className={` mb-1 text-1xl font-medium ${darkMode ? "text-richblack-200" : "text-richblack-900"} `}>Total amount</p>
        <p className={`mb-1 text-3xl font-medium ${darkMode ? "text-yellow-100" : "text-richblack-500"}`}>₹  {totalFav}</p>
        {/* <IconBtn
            text="Buy Now "
            onclick={handleBuyCourse}
            customClass={"w-full justify-center "}
        /> */}
    </div>
  )
}

export default RenderTotalAmount