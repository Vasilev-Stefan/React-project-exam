export function About() {
    return (
        <div className="bg-[#1a1a1a] text-white px-10 py-20" style={{
                height: 'calc(100vh - 123px)'
            }}>

            {/* Page Header */}
            <h1 className="text-5xl font-bold mb-8 tracking-wide text-center">
                About Nestora
            </h1>

            {/* Intro Text */}
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed text-center mb-16">
                At Nestora, we believe that your home should be more than a place — 
                it should be a sanctuary. A nest. A space that reflects your style, 
                your comfort, and your personality.
            </p>

            {/* Three Section Cards */}
            <div className="grid grid-cols-3 gap-10 max-w-6xl mx-auto">

                {/* Mission */}
                <div className="bg-[#222222] p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Our mission is to bring modern, timeless, and affordable 
                        furniture to every home. We focus on quality craftsmanship, 
                        sustainability, and designs that bring comfort to your life.
                    </p>
                </div>

                {/* Values */}
                <div className="bg-[#222222] p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                    <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We value honesty, quality, and thoughtful design. 
                        Every piece of furniture we select is carefully chosen 
                        to ensure durability, beauty, and functionality.
                    </p>
                </div>

                {/* Craftsmanship */}
                <div className="bg-[#222222] p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                    <h2 className="text-2xl font-semibold mb-4">Craftsmanship</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Nestora partners with skilled craftsmen and trusted 
                        manufacturers worldwide to ensure that every product 
                        stands the test of time.
                    </p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="max-w-4xl mx-auto mt-20 text-center">
                <h2 className="text-3xl font-semibold mb-6">Why Choose Nestora?</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                    We go beyond selling furniture — we help you create spaces you love.  
                    Whether it’s a cozy living room, a modern kitchen, or a peaceful bedroom,  
                    Nestora makes it easy to build a home that feels truly yours.
                </p>
            </div>

        </div>
    );
}