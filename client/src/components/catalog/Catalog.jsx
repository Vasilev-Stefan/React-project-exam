export function Catalog() {
    return (
        <div className="min-h-screen bg-[#1a1a1a] text-white flex">

            {/* Sidebar */}
            <aside className="w-64 bg-[#111111] border-r border-gray-800 p-6">
                <h2 className="text-xl font-semibold mb-6 tracking-wide">
                    Categories
                </h2>

                <ul className="space-y-3">
                    <li><button className="w-full text-left px-4 py-2 rounded-md bg-indigo-800">All</button></li>
                    <li><button className="w-full text-left px-4 py-2 rounded-md hover:bg-[#2a2a2a]">Sofas</button></li>
                    <li><button className="w-full text-left px-4 py-2 rounded-md hover:bg-[#2a2a2a]">Tables</button></li>
                    <li><button className="w-full text-left px-4 py-2 rounded-md hover:bg-[#2a2a2a]">Beds</button></li>
                    <li><button className="w-full text-left px-4 py-2 rounded-md hover:bg-[#2a2a2a]">Chairs</button></li>
                    <li><button className="w-full text-left px-4 py-2 rounded-md hover:bg-[#2a2a2a]">Lighting</button></li>
                    <li><button className="w-full text-left px-4 py-2 rounded-md hover:bg-[#2a2a2a]">Storage</button></li>
                    <li><button className="w-full text-left px-4 py-2 rounded-md hover:bg-[#2a2a2a]">Decor</button></li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-10">
                <div className="flex items-center justify-between mb-10">
                    <h1 className="text-4xl font-bold tracking-wide">All Products</h1>
                    <button className="px-4 py-2 bg-indigo-800 hover:bg-indigo-600 rounded-md transition">
                        Add item
                    </button>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-3 gap-10">

                    {/* Product 1 */}
                    <div className="bg-[#222222] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                        <img
                            src="https://dhb3yazwboecu.cloudfront.net/1384/fotosFichaProducto/fotosTecnicas/M/80040-Amba-Essence-Sofa-Modulo-Brazo-Derecho-1.png"
                            className="w-full h-52 object-cover"
                            alt="Modern Sofa"
                        />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold mb-2">Modern Sofa</h3>
                            <p className="text-gray-300 mb-4">$899</p>
                            <button className="px-4 py-2 bg-indigo-800 hover:bg-indigo-600 rounded-md transition">
                                View Details
                            </button>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="bg-[#222222] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                        <img
                            src="https://cdn-images.newporthome.eu/product/b72f692dae1311edaace0050569f928a/list-45/list.jpg"
                            className="w-full h-52 object-cover"
                            alt="Oak Dining Table"
                        />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold mb-2">Oak Dining Table</h3>
                            <p className="text-gray-300 mb-4">$499</p>
                            <button className="px-4 py-2 bg-indigo-800 hover:bg-indigo-600 rounded-md transition">
                                View Details
                            </button>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className="bg-[#222222] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                        <img
                            src="https://m.media-amazon.com/images/I/71HwlRwMLhL._AC_UF894,1000_QL80_.jpg"
                            className="w-full h-52 object-cover"
                            alt="Queen Bed Frame"
                        />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold mb-2">Queen Bed Frame</h3>
                            <p className="text-gray-300 mb-4">$699</p>
                            <button className="px-4 py-2 bg-indigo-800 hover:bg-indigo-600 rounded-md transition">
                                View Details
                            </button>
                        </div>
                    </div>

                </div>
            </main>

        </div>
    )
}