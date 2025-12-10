import { useEffect, useState } from "react";
import { useParams } from "react-router";

export function FurnitureDetails() {
    const { id } = useParams()
    const [item, setItem] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/furniture/${id}`)
        .then(response => response.json())
        .then(result => setItem(result))
    }, [id])


    return (
        <div className="bg-[#1a1a1a] text-white p-10 flex justify-center" style={{
            height: 'calc(100vh - 123px)'
        }}>

            <div className="max-w-4xl w-full bg-[#222222] p-6 rounded-2xl shadow-lg">

                {/* Title */}
                <h1 className="text-4xl font-bold mb-8 tracking-wide text-center">
                    {item.name}
                </h1>

                <div className="flex gap-10">

                    {/* Image */}
                    <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-1/2 h-96 object-cover rounded-xl shadow-md"
                    />

                    {/* Details */}
                    <div className="w-1/2 flex flex-col justify-between">

                        <div>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                {item.description}
                            </p>

                            <p className="text-2xl font-semibold text-indigo-400 mb-6">
                                ${item.price}
                            </p>

                            <p className="uppercase text-gray-400 tracking-wider">
                                Category: <span className="text-white">{item.category}</span>
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-10 flex gap-4">
                            <button className="w-full py-3 bg-indigo-700 hover:bg-indigo-500 rounded-md font-semibold transition">
                                Edit
                            </button>

                            <button className="w-full py-3 bg-red-700 hover:bg-red-500 rounded-md font-semibold transition">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}