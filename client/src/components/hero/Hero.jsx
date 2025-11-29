import { Link } from "react-router";

export function Hero() {
    const bgUrl = "https://germaniaconstruction.com/wp-content/uploads/2022/11/park-city-custom-home-builder-great-room.jpg";

    return (
        <section
            className="relative flex flex-col justify-center items-center text-white px-6 bg-cover bg-center"
            style={{
                backgroundImage: `url(https://germaniaconstruction.com/wp-content/uploads/2022/11/park-city-custom-home-builder-great-room.jpg)`,
                height: 'calc(100vh - 123px)'
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="relative z-10 text-center max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    Make Your Home a Nest
                </h1>
                <p className="text-lg md:text-xl mb-8">
                    Discover modern, stylish, and comfortable furniture to transform every corner of your home.
                </p>
                <div className="flex gap-4 justify-center">
                    <Link to='/catalog'>
                        <button className="px-6 py-3 rounded bg-[#5C5F84] hover:bg-[#8789AB] font-semibold transition">
                            Catalog
                        </button>
                    </Link>
                    <Link to='/about'>
                        <button className="px-6 py-3 rounded bg-gray-700 hover:bg-gray-600 font-semibold transition">
                            About
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}