export function Hero() {
    const bgUrl = "https://germaniaconstruction.com/wp-content/uploads/2022/11/park-city-custom-home-builder-great-room.jpg";

    return (
        <section
            className="relative min-h-screen flex flex-col justify-center items-center text-white px-6 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgUrl})` }}
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
                    <button className="px-6 py-3 rounded bg-[#5C5F84] hover:bg-[#8789AB] font-semibold transition">
                        Shop Now
                    </button>
                    <button className="px-6 py-3 rounded bg-gray-700 hover:bg-gray-600 font-semibold transition">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}