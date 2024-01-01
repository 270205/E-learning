import { useSelector } from "react-redux"
import RenderFavourities from "./RenderFavourities"
import RenderTotalAmount from "./RenderTotalAmount"


export default function Favourities() {
    const {totalFav, totalItemsFav} = useSelector((state) => state.favourities)
    const {darkMode} = useSelector((state) => state.mode);
    return (
        <div className={`${darkMode ? "text-richblack-5" : "text-richblack-600"}`}>
            <h1 className="text-4xl mb-10 font-semibold">Your Favourities</h1>
            <p className="text-richblack-200 mb-5 border-b border-richblack-200 pb-3">{totalItemsFav} Courses in Favourities</p>
            {
                totalFav>0 
                ? (
                    <div className="flex lg:flex-row flex-col items-start gap-x-10 gap-y-6 mt-8 ">
                        <RenderFavourities/>
                        <RenderTotalAmount />
                    </div>
                )
                : (
                    <p className="mt-14 text-center text-3xl text-richblack-100">Your Favourities is empty</p>
                )
            }
        </div>
    )
}