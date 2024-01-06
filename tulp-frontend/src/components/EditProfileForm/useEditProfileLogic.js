import { useState } from "react"
import { userApi } from "../../core/api/user"
import { local } from "../../core/helpers/localstorage"
import { setUser } from "../../core/redux/userSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { errorBlink } from "../../core/helpers/errorBlink"
import toast from "react-hot-toast"

const useEditProfileLogic = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState({ msg: "", hidden: true })

  const [education, setEducation] = useState({
    degree: "",
    university: "",
    dateOfGraduation: "",
  })
  const [socialMedia, setSocialMedia] = useState({
    github: "",
    twitter: "",
    linkedin: "",
    instagram: "",
    facebook: "",
  })
  const [values, setValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    birth: "",
    aboutMe: "",
    education,
    socialMediaLinks: socialMedia,
  })

  const HandleOnInputChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value })
  }
  const HandleOnSocialMediaChange = (e) => {
    setSocialMedia({ ...socialMedia, [e.target.id]: e.target.value })
    setValues({ ...values, socialMediaLinks: socialMedia })
  }
  const HandleOnEducationChange = (e) => {
    setEducation({ ...education, [e.target.id]: e.target.value })
    setValues({ ...values, education })
  }
  const socailMediaInputs = [
    [
      {
        text: "Github",
        id: "github",
        type: "text",
        placeholder: "https://github.com/username",
        value: socialMedia.github,
        handleOnChange: HandleOnSocialMediaChange,
      },
      {
        text: "Twitter",
        id: "twitter",
        type: "text",
        placeholder: "https://twitter.com/username",
        value: socialMedia.twitter,
        handleOnChange: HandleOnSocialMediaChange,
      },
    ],
    [
      {
        text: "Linkedin",
        id: "linkedin",
        type: "text",
        placeholder: "https://linkedin.com/in/username",
        value: socialMedia.linkedin,
        handleOnChange: HandleOnSocialMediaChange,
      },
      {
        text: "Instagram",
        id: "instagram",
        type: "text",
        placeholder: "https://instagram.com/username",
        value: socialMedia.instagram,
        handleOnChange: HandleOnSocialMediaChange,
      },
    ],
    [
      {
        text: "Facebook",
        id: "facebook",
        type: "text",
        placeholder: "https://facebook.com/username",
        value: socialMedia.facebook,
        handleOnChange: HandleOnSocialMediaChange,
      },
    ],
  ]

  const inputs = [
    [
      {
        text: "First Name",
        id: "firstName",
        type: "text",
        placeholder: "John",
        value: values.firstName,
        handleOnChange: HandleOnInputChange,
      },
      {
        text: "Last Name",
        id: "lastName",
        type: "text",
        placeholder: "Doe",
        value: values.lastName,
        handleOnChange: HandleOnInputChange,
      },
    ],
    [
      {
        text: "Password",
        id: "password",
        type: "password",
        placeholder: "------------",
        value: values.password,
        handleOnChange: HandleOnInputChange,
      },
      {
        text: "Confirm Password",
        id: "confirmPassword",
        type: "password",
        placeholder: "------------",
        value: values.confirmPassword,
        handleOnChange: HandleOnInputChange,
      },
    ],
    [
      {
        text: "Username",
        id: "username",
        type: "text",
        placeholder: "username",
        value: values.username,
        handleOnChange: HandleOnInputChange,
      },
      {
        text: "About Me",
        id: "aboutMe",
        type: "text",
        placeholder: "I am a software developer",
        value: values.aboutMe,
        handleOnChange: HandleOnInputChange,
      },
    ],
    [
      {
        text: "Birth",
        id: "birth",
        type: "date",
        placeholder: "2000/01/01",
        value: values.birth,
        handleOnChange: HandleOnInputChange,
      },
      {
        text: "Date of Graduation",
        id: "dateOfGraduation",
        type: "date",
        placeholder: "2021/05/01",
        value: education.dateOfGraduation,
        handleOnChange: HandleOnEducationChange,
      },
    ],
    [
      {
        text: "Degree",
        id: "degree",
        type: "text",
        placeholder: "Bachelor",
        value: education.degree,
        handleOnChange: HandleOnEducationChange,
      },
      {
        text: "University",
        id: "university",
        type: "text",
        placeholder: "University of California, Berkeley",
        value: education.university,
        handleOnChange: HandleOnEducationChange,
      },
    ],
  ]

  const HandleOnSubmit = async () => {
    // if (values.password !== values.confirmPassword) {
    //   errorBlink(setError, "Passwords do not match")
    //   return
    // }
    // if (values.password.length < 6 && values.password.length != 0) {
    //   errorBlink(setError, "Passwords cant be less than 6 characters")
    //   return
    // }
    // try {
    //   const res = await userApi.edit(values)
    //   const token = `Bearer ${res.token}`
    //   local("token", token)
    //   dispatch(setUser(res.user))
    // } catch (e) {
    //   console.log(e)
    //   errorBlink(setError, e.response.data.message)
    // }
    toast.success("Profile edit successful")
  }
  return {
    inputs,
    socailMediaInputs,
    HandleOnSocialMediaChange,
    HandleOnSubmit,
    error,
  }
}

export default useEditProfileLogic
