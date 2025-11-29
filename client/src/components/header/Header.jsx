import { Link } from 'react-router'

export function Header() {
    return (
        <nav className="text-white px-6 py-4 flex items-center justify-between" style={{ backgroundColor: '#222222' }}>

            <Link to='/' className='flex items-center'>
                <svg
                    width="190"
                    height="55"
                    viewBox="0 0 190 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* <!-- Minimal House Icon --> */}
                    <path
                        d="M10 26 L30 10 L50 26"
                        stroke="#3730A3"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* <!-- House body --> */}
                    <rect
                        x="18"
                        y="26"
                        width="24"
                        height="18"
                        rx="3"
                        fill="#3730A3"
                    />

                    {/* <!-- Text --> */}
                    <text
                        x="60"
                        y="38"
                        fontFamily="Inter, sans-serif"
                        fontSize="28"
                        fontWeight="600"
                        fill="#FFFFFF"
                    >
                        Nestora
                    </text>
                </svg>
            </Link>


            {/* Search Bar (center) */}
            <div className="flex-1 mx-6">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full max-w-md px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Right-side Buttons */}
            <div className="flex gap-4">
                <button className="px-4 py-2 rounded bg-indigo-800 hover:bg-indigo-600 text-white transition">Button 1</button>
                <button className="px-4 py-2 rounded bg-indigo-800 hover:bg-indigo-600 text-white transition">Button 2</button>
                <button className="px-4 py-2 rounded bg-indigo-800 hover:bg-indigo-600 text-white transition">Button 3</button>
            </div>

        </nav>
    )
}
