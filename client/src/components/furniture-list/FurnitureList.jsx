import { Link } from "react-router";

export function FurnitureList({
    id,
    data
}) {
    return (
        <div className="bg-[#222222] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <img
                src={data.imageUrl}
                className="w-full h-52 object-cover"
                alt={data.name}
            />
            <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{data.name}</h3>
                <p className="text-gray-300 mb-4">${data.price}</p>
                <Link to={`/catalog/details/${id}`}>
                    <button className="px-4 py-2 bg-indigo-800 hover:bg-indigo-600 rounded-md transition">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    )
}