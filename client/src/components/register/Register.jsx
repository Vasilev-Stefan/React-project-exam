export function Register() {
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
                <form className="space-y-6">
                    {/* Full Name */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-semibold">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-2 bg-[#111111] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-semibold">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 bg-[#111111] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-semibold">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="********"
                            className="w-full px-4 py-2 bg-[#111111] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-semibold">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="********"
                            className="w-full px-4 py-2 bg-[#111111] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
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