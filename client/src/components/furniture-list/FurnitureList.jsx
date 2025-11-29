export function FurnitureList() {
    return (
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
    )
}