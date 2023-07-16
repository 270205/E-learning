import React from 'react'
import ChangeProfilePicture from './ChangeProfilePicture'
import EditProfile from './EditProfile'
import UpdatePassword from './UpdatePassword'
import DeleteAccount from './DeleteAccount'

export default function Settings() {
    return (
        <>
            <h1 className='mb-14 text-3xl font-medium text-richblack-5'>
                Edit Profile
            </h1>

            {/* section1 => change profile pic  */}
            <ChangeProfilePicture />
            
            {/* section2 => edit profile */}
            <EditProfile />

            {/* section3 => update password  */}
            <UpdatePassword />

            {/* section4 => Delete account */}
            <DeleteAccount />

        </>
    )
}