import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice"
import cartReducer from "../slices/cartSlice"
import courseReducer from "../slices/courseSlice"
import viewCourseSlice from "../slices/viewCourseSlice";
import viewCourseReducer from  "../slices/viewCourseSlice"
import modeReducer from "../slices/modeSlice"
import favouritiesReducer from "../slices/favouritiesSlice"

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    cart: cartReducer,
    course: courseReducer,
    viewCourse: viewCourseReducer,
    mode: modeReducer,
    favourities: favouritiesReducer
})

export default rootReducer