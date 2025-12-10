import { useNavigate } from "react-router"
import { useForm } from "../../hooks/useForm"
import { useFetch } from "../../hooks/useFetch";
import { useUser } from "../../hooks/useUser";

export function Register() {
    const navigate = useNavigate();
    const { request } = useFetch();
    const { login } = useUser();

    const initialData = {
        name: '',
        email: '',
        password: '',
        rePass: '',
    }

    const validator = (data) => {
        const errors = {}

        if(!data.name) {
            errors.name = 'Name is required'
        }

        if(!data.email) {
            errors.email = 'Email is required'
        }

        if(!data.password) {
            errors.password = 'Password is required'
        }

        if(!data.rePass) {
            errors.rePass = 'Confirm password is required'
        }

        if(data.password !== data.rePass) {
            errors.rePass = 'Passwords mismatch'
        }

        return errors
    }

    const register = async (data) => {
        try {
            const result = await request('users/register', 'POST', data)
            login(result)
            navigate('/')
        } catch (error) {
            alert(error.message)
        }
    }

    const { errors, onSubmitHandler, inputFiller} = useForm(
        initialData,
        register,
        validator
    );

    

    return (
        <div
            className="bg-[#1a1a1a] text-white px-10 py-4"
            style={{ height: 'calc(100vh - 123px)' }}
        >
            {/* Page Title */}
            <h1 className="text-4xl font-bold mb-10 tracking-wide text-center">
                Register
            </h1>

            {/* Form Container */}
            <div className="max-w-3xl mx-auto bg-[#222222] p-10 rounded-2xl shadow-lg">
                <form className="space-y-6" action={onSubmitHandler}>
                    {/* Full Name */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-semibold">
                            Full Name
                        </label>
                        <input
                            {...inputFiller('name')}
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-2 bg-[#111111] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                        {errors.name && <p>{errors.name}</p>}
                    </div>

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
                        {errors.email && <p>{errors.email}</p>}
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
                        {errors.password && <p>{errors.password}</p>}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-semibold">
                            Confirm Password
                        </label>
                        <input
                            {...inputFiller('rePass')}
                            type="password"
                            placeholder="********"
                            className="w-full px-4 py-2 bg-[#111111] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                        {errors.rePass && <p>{errors.rePass}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full py-3 bg-indigo-800 hover:bg-indigo-600 rounded-md font-semibold transition"
                        > 
                        Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}