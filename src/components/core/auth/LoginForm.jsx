import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../../../services/operations/authAPI"

// simple css styling here bss jo backend call jaayegi submit krne pr form ko wo dispatch function ka use krenge hum whaa 

function LoginForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }

  const {darkMode} = useSelector((state) => state.mode);

  return (
    <form
      onSubmit={handleOnSubmit}
      className="mt-6 flex w-full flex-col gap-y-4"
    >
      <label className="w-full">
        <p className={`mb-1 text-[0.875rem] leading-[1.375rem] ${darkMode ? "text-richblack-5" : "text-richblack-600"}`}>
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email address"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className={`w-full rounded-[0.5rem] p-[12px] pr-12 outline-none ${darkMode ? " bg-richblack-800 text-richblack-5" : "bg-richblack-5 text-richblack-500"}`}
        />
      </label>
      <label className="relative">
        <p className={`mb-1 text-[0.875rem] leading-[1.375rem] ${darkMode ? "text-richblack-5" : "text-richblack-600"}`}>
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter Password"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className={`w-full rounded-[0.5rem] p-[12px] pr-12 outline-none ${darkMode ? " bg-richblack-800 text-richblack-5" : "bg-richblack-5 text-richblack-500"}`}
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[38px] z-[10] cursor-pointer"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <Link to="/forgot-password">
          <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
            Forgot Password
          </p>
        </Link>
      </label>
      <button
        type="submit"
        className={`mt-6 rounded-[8px] ${darkMode ? "bg-yellow-50" : "bg-pure-greys-50"} py-[8px] px-[12px] font-medium text-richblack-900`}
      >
        Sign In
      </button>
    </form>
  )
}

export default LoginForm