import { Link, useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { useUser } from "../../hooks/useUser";

export function FurnitureDetails() {
    const { id } = useParams()
    const { user } = useUser()
    const {data: item} = useFetch(`data/furniture/${id}`, [id])
    console.log(item)

    return (
        <div className="bg-[#1a1a1a] text-white p-10 flex justify-center" style={{
            height: 'calc(100vh - 123px)'
        }}>

            <div className="max-w-4xl w-full bg-[#222222] p-6 rounded-2xl shadow-lg">

                {/* Title */}
                <h1 className="text-4xl font-bold mb-8 tracking-wide text-center">
                    {item?.name}
                </h1>

                <div className="flex gap-10">

                    {/* Image */}
                    <img
                        src={item?.imageUrl}
                        alt={item?.name}
                        className="w-1/2 h-96 object-cover rounded-xl shadow-md"
                    />

                    {/* Details */}
                    <div className="w-1/2 flex flex-col justify-between">

                        <div>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                {item?.description}
                            </p>

                            <p className="text-2xl font-semibold text-indigo-400 mb-6">
                                ${item?.price}
                            </p>

                            <p className="uppercase text-gray-400 tracking-wider">
                                Category: <span className="text-white">{item?.category}</span>
                            </p>
                        </div>

                        {/* Action Buttons */}
                        {user?._id === item?._ownerId ? 
                        <div className="mt-10 flex gap-4">
                            <Link to={`/catalog/edit/${id}`} className="w-full py-3 bg-indigo-700 hover:bg-indigo-500 rounded-md font-semibold transition text-lg text-center" >
                                Edit
                            </Link>

                            <Link to={`/catalog/delete/${id}`} className="w-full py-3 bg-red-700 hover:bg-red-500 rounded-md font-semibold transition text-lg text-center">
                                Delete
                            </Link>
                        </div>
                        : ''
                        }
                    </div>
                </div>

            </div>

        </div>
    );
}