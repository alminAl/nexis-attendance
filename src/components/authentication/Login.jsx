import { TextField } from "@mui/material"
import { useFormik } from "formik"
import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import { loginValidation } from "../../validators/AuthenticationsValidation"
import AuthCredential from "./AuthCredential"



const Login = () => {
    const {setAuthenticated} = useAuth()
    /** form submision */
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
            email: '',
            password: '',
        },
        validationSchema: loginValidation,
        onSubmit: async (data, action) => {
            try {
                setAuthenticated(true)
                // console.log(data)
            } catch (error) { }
        },
    })
    return (
        <AuthCredential>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 sm:w-full  mb-12 md:mb-0 ">
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
                    <div className="flex flex-row items-center justify-center  lg:justify-start">
                        <h2 className="text-4xl font-bold">Log in Form</h2>
                    </div>
                    <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">

                    </div>
                    {/* Email input */}
                    <div className="mb-6">
                        <TextField
                            fullWidth
                            required
                            placeholder="email@email.com"
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
                    {/* Password input */}
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
                        <button
                            type="submit"
                            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            Login
                        </button>
                        <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                            Don't have an account?
                            <Link
                                to="/signup"
                                className="text-[16px] mx-2 text-[#1678CB] hover:[#1678CB] focus:[#1678CB]ransition duration-200 ease-in-out"
                            >
                                SIGNUP HERE
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </AuthCredential>

    )
}

export default Login