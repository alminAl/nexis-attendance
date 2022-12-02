import { Button, InputAdornment, TextField } from "@mui/material"
import { useFormik } from "formik"
import { Link } from "react-router-dom"
import { firstLastNameValidation, passwordValidation, phoneEmailValidation } from "../../validators/AuthenticationsValidation"
import AuthCredential from "./AuthCredential"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react"
import useAuth from "../../hooks/useAuth"


const Signup = () => {
    const {setAuthenticated} = useAuth()
    const [count, setCount] = useState(0)
    const {
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
        // isSubmitting,
        handleSubmit,
        setFieldValue,
        // resetForm,
    } = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            phone_number: '',
            email: '',
            password: '',

        },
        validationSchema: passwordValidation,
        
        onSubmit: async (data, action) => {
            try {
                setAuthenticated(true)
                // console.log(data)
            } catch (error) { }
        },
    })

    return (
        <>
            <AuthCredential>
                <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 sm:w-full  mb-12 md:mb-0 ">
                    <div className="flex flex-row items-center justify-center  lg:justify-start">
                        <h2 className="text-4xl font-bold">SignUp Form</h2>
                    </div>
                    <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"></div>
                    {
                        count === 0 && <FirstLastNameInput
                            setCount={x => setCount(x)}
                            setfastName={x => setFieldValue('first_name', x)}
                            setlastName={x => setFieldValue('last_name', x)}
                        />
                    }
                    {
                        count === 1 && <PhoneEmailInput
                            setCount={x => setCount(x)}
                            setphnNumber={x => setFieldValue('phone_number', x)}
                            setEmail={x => setFieldValue('email', x)}
                        />
                    }
                    {
                        count === 2 &&
                        <form onSubmit={handleSubmit} noValidate autoComplete="off">

                            {/* password input */}
                            <div className="mb-6">
                                <TextField
                                    fullWidth
                                    required
                                    placeholder="********"
                                    type={"password"}
                                    variant="standard"
                                    label="Password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.password && Boolean(errors.password)}
                                    helperText={touched.password ? errors.password : 'password must be at least 8 characters'}
                                />
                            </div>



                            <div className="text-center lg:text-left">
                            <Button color="inherit" onClick={() => setCount(1)} variant="text">Back</Button>
                                <Button type="submit" className="bg-[#1678CB]" variant="contained">
                                    Sign Up
                                </Button>

                            </div>
                        </form>
                    }

                    <div className="text-center lg:text-left">

                        <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                            Already have an account?
                            <Link
                                to="/"
                                className="text-[16px] mx-2 text-[#1678CB] hover:[#1678CB] focus:[#1678CB]ransition duration-200 ease-in-out"
                            >
                                LOGIN HERE
                            </Link>
                        </p>
                    </div>
                </div>
            </AuthCredential>
        </>
    )
}

export default Signup

// helper component
const FirstLastNameInput = ({ setCount, setfastName, setlastName }) => {
    const {
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
        // isSubmitting,
        handleSubmit,
        // setFieldValue,
        // resetForm,
    } = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
        },
        validationSchema: firstLastNameValidation,
        onSubmit: async (data, action) => {
            try {
                setfastName(data.first_name)
                setlastName(data.last_name)
                setCount(1)
            } catch (error) { }
        },
    })
    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">

            {/* Email input */}
            <div className="mb-6">
                <TextField
                    fullWidth
                    required
                    placeholder="Write first name"
                    variant="standard"
                    label="First Name"
                    name="first_name"
                    value={values.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.first_name && Boolean(errors.first_name)}
                    helperText={touched.first_name && errors.first_name}
                />
            </div>
            {/* last_name input */}
            <div className="mb-6">
                <TextField
                    fullWidth
                    required
                    placeholder="Write last name"
                    variant="standard"
                    label="Last Name"
                    name="last_name"
                    value={values.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.last_name && Boolean(errors.last_name)}
                    helperText={touched.last_name && errors.last_name}
                />
            </div>

            <div className="text-center lg:text-left">
                <Button type="submit" className="bg-[#1678CB]" variant="contained" endIcon={<ArrowForwardIcon />}>
                    Next Step
                </Button>

            </div>
        </form>
    )
}

const PhoneEmailInput = ({ setCount, setphnNumber, setEmail }) => {
    const {
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
        handleSubmit,
    } = useFormik({
        initialValues: {
            phone_number: '',
            email: '',
        },
        validationSchema: phoneEmailValidation,
        onSubmit: async (data, action) => {
            try {
                setphnNumber(data.phone_number)
                setEmail(data.email)
                setCount(2)

            } catch (error) { }
        },
    })
    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">

            {/* phone_number input */}
            <div className="mb-6">
                <TextField
                    fullWidth
                    required
                    placeholder="1XXXXXXXX"
                    variant="standard"
                    label="Phone Number"
                    name="phone_number"
                    value={values.phone_number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.phone_number && Boolean(errors.phone_number)}
                    helperText={touched.phone_number && errors.phone_number}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">+880</InputAdornment>,
                    }}
                />
            </div>
            {/* email input */}
            <div className="mb-6">
                <TextField
                    fullWidth
                    required
                    placeholder="Write email"
                    variant="standard"
                    label="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                />
            </div>

            <div className="text-center lg:text-left">
                <Button color="inherit" onClick={() => setCount(0)} variant="text">Back</Button>
                <Button type="submit" className="bg-[#1678CB]" variant="contained" endIcon={<ArrowForwardIcon />}>
                    Next Step
                </Button>

            </div>
        </form>
    )
}