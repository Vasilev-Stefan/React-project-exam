import { useFetch } from "../../hooks/useFetch"
import { useNavigate } from "react-router"
import { useForm } from "../../hooks/useForm"
import { useUser } from "../../hooks/useUser"

export function Login() {
    const { request } = useFetch()
    const navigate = useNavigate()
    const { login } = useUser()

    const initialData = {
        email: '',
        password: ''
    }

    const validator = (data) => {
        const errors = {}

        if(!data.email) {
            errors.email = 'Email is required'
        }

        if(!data.password) {
            errors.password = 'Password is required'
        }

        return errors
    }

    const loginUser = async (data) => {
        try {
            const result = await request('users/login', 'POST', data)
            login(result)
            navigate('/')
        } catch (error) {
            alert(error.message)
        }
    }

    const { errors, onSubmitHandler, inputFiller } = useForm(initialData, loginUser, validator)

    return (
        <div
            className="bg-[#1a1a1a] text-white px-10 py-4"
            style={{ height: 'calc(100vh - 123px)' }}
        >
            {/* Page Title */}
            <h1 className="text-4xl font-bold mb-10 tracking-wide text-center">
                Login
            </h1>

            {/* Form Container */}
            <div className="max-w-3xl mx-auto bg-[#222222] p-10 rounded-2xl shadow-lg">
                <form className="space-y-6" action={onSubmitHandler}>
                    {/* Email */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-semibold">
                            Email
                        </label>
                        <input
                            {...inputFiller('email')}
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 bg-[#111111] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                        {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-semibold">
                            Password
                        </label>
                        <input
                            {...inputFiller('password')}
                            type="password"
                            placeholder="********"
                            className="w-full px-4 py-2 bg-[#111111] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                        {errors.password && <p className="text-red-500 mt-1">{errors.password}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full py-3 bg-indigo-800 hover:bg-indigo-600 rounded-md font-semibold transition"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}