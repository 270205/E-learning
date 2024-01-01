import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

// we we addd item to cart we also want a toast that show that item is added to cart 
const initialState = {
    favourities: localStorage.getItem("favourities")
        ? JSON.parse(localStorage.getItem("favourities"))
        : [],
    totalFav: localStorage.getItem("totalFav")
        ? JSON.parse(localStorage.getItem("totalFav"))
        : 0,
    totalItemsFav: localStorage.getItem("totalItemsFav")
        ? JSON.parse(localStorage.getItem("totalItemsFav"))
        : 0,
}

const favouritiesSlice = createSlice({
    name: "favourities",
    initialState,
    reducers: {
        // add item to cart 
        addToFavourities: (state, action) => {
            const course = action.payload
            const index = state.favourities.findIndex((item) => item._id === course._id)

            if (index >= 0) {
                // If the course is already in the cart, do not modify the quantity
                toast.error("Course already in favourities")
                return
            }
            // If the course is not in the cart, add it to the cart
            state.favourities.push(course)
            // Update the total quantity and price
            state.totalItemsFav++
            state.totalFav += course.price
            // Update to localstorage
            localStorage.setItem("favourities", JSON.stringify(state.favourities))
            localStorage.setItem("totalFav", JSON.stringify(state.totalFav))
            localStorage.setItem("totalItemsFav", JSON.stringify(state.totalItemsFav))
            // show toast
            toast.success("Course added to favourities")
        },
        // function for removefromcart
        removeFromFavourities: (state, action) => {
            const courseId = action.payload
            const index = state.favourities.findIndex((item) => item._id === courseId)

            if (index >= 0) {
                // If the course is found in the cart, remove it
                state.totalItemsFav--
                state.totalFav -= state.favourities[index].price
                state.favourities.splice(index, 1)
                // Update to localstorage
                localStorage.setItem("favourities", JSON.stringify(state.favourities))
                localStorage.setItem("totalFav", JSON.stringify(state.totalFav))
                localStorage.setItem("totalItemsFav", JSON.stringify(state.totalItemsFav))
                // show toast
                toast.success("Course removed from favourities")
            }
        },

        // reset cart 
        resetFavourities: (state) => {
            state.favourities = []
            state.totalFav = 0
            state.totalItemsFav = 0
            // Update to localstorage
            localStorage.removeItem("favourities")
            localStorage.removeItem("totalFav")
            localStorage.removeItem("totalItemsFav")
        },

    }
})

export const { addToFavourities, resetFavourities, removeFromFavourities } = favouritiesSlice.actions
export default favouritiesSlice.reducer;
