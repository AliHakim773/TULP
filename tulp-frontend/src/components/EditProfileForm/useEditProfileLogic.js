import { useState } from "react"
import { userApi } from "../../core/api/user"
import { local } from "../../core/helpers/localstorage"
import { setUser } from "../../core/redux/userSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { errorBlink } from "../../core/helpers/errorBlink"

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

  const socailMediaInputs = [
    {
      text: "Github",
      id: "github",
      type: "text",
      placeholder: "https://github.com/username",
      value: socialMedia.github,
    },
    {
      text: "Twitter",
      id: "twitter",
      type: "text",
      placeholder: "https://twitter.com/username",
      value: socialMedia.twitter,
    },
    {
      text: "Linkedin",
      id: "linkedin",
      type: "text",
      placeholder: "https://linkedin.com/in/username",
      value: socialMedia.linkedin,
    },
    {
      text: "Instagram",
      id: "instagram",
      type: "text",
      placeholder: "https://instagram.com/username",
      value: socialMedia.instagram,
    },
    {
      text: "Facebook",
      id: "facebook",
      type: "text",
      placeholder: "https://facebook.com/username",
      value: socialMedia.facebook,
    },
  ]
  const educationInputs = [
    {
      text: "Degree",
      id: "degree",
      type: "text",
      placeholder: "Bachelor",
      value: education.degree,
    },
    {
      text: "University",
      id: "university",
      type: "text",
      placeholder: "University of California, Berkeley",
      value: education.university,
    },
    {
      text: "Date of Graduation",
      id: "dateOfGraduation",
      type: "date",
      placeholder: "2021/05/01",
      value: education.dateOfGraduation,
    },
  ]
  const inputs = [
    {
      text: "Username",
      id: "username",
      type: "text",
      placeholder: "username",
      value: values.username,
    },
    {
      text: "Password",
      id: "password",
      type: "password",
      placeholder: "------------",
      value: values.password,
    },
    {
      text: "Confirm Password",
      id: "confirmPassword",
      type: "password",
      placeholder: "------------",
      value: values.confirmPassword,
    },
    {
      text: "First Name",
      id: "firstName",
      type: "text",
      placeholder: "John",
      value: values.firstName,
    },
    {
      text: "Last Name",
      id: "lastName",
      type: "text",
      placeholder: "Doe",
      value: values.lastName,
    },
    {
      text: "Birth",
      id: "birth",
      type: "date",
      placeholder: "2000/01/01",
      value: values.birth,
    },
    {
      text: "About Me",
      id: "aboutMe",
      type: "text",
      placeholder: "I am a software developer",
      value: values.aboutMe,
    },
  ]

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
  const HandleOnSubmit = async () => {
    if (values.password !== values.confirmPassword) {
      errorBlink(setError, "Passwords do not match")
      return
    }
    if (values.password.length < 6 && values.password.length != 0) {
      errorBlink(setError, "Passwords cant be less than 6 characters")
      return
    }
    try {
      const res = await userApi.edit(values)
      const token = `Bearer ${res.token}`
      local("token", token)

      dispatch(setUser(res.user))
      navigate(0)
    } catch (e) {
      console.log(e)
      errorBlink(setError, e.response.data.message)
    }
  }
  return {
    inputs,
    educationInputs,
    socailMediaInputs,
    HandleOnSocialMediaChange,
    HandleOnInputChange,
    HandleOnEducationChange,
    HandleOnSubmit,
    error,
  }
}

export default useEditProfileLogic
