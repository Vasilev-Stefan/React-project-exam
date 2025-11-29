export function CreateItem() {
    return (
        <div className=" bg-[#1a1a1a] text-white px-10 py-4" style={{
                height: 'calc(100vh - 123px)'
            }}>

            {/* Page Title */}
            <h1 className="text-4xl font-bold mb-10 tracking-wide text-center">
                Add New Product
            </h1>

            {/* Form Container */}
            <div className="max-w-3xl mx-auto bg-[#222222] p-10 rounded-2xl shadow-lg">

                <form className="space-y-6">

                    {/* Name */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-semibold">
                            Product Name
                        </label>
                        <input
                            type="text"
                            placeholder="e.g., Modern Sofa"
                            className="w-full px-4 py-2 bg-[#111111] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-semibold">
                            Description
                        </label>
                        <textarea
                            placeholder="Short description of the item..."
                            rows="4"
                            className="w-full px-4 py-2 bg-[#111111] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        ></textarea>
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-semibold">
                            Price ($)
                        </label>
                        <input
                            type="number"
                            placeholder="e.g., 499"
                            className="w-full px-4 py-2 bg-[#111111] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-semibold">
                            Category
                        </label>
                        <select
                            className="w-full px-4 py-2 bg-[#111111] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        >
                            <option>Sofas</option>
                            <option>Tables</option>
                            <option>Beds</option>
                            <option>Chairs</option>
                            <option>Lighting</option>
                            <option>Storage</option>
                            <option>Decor</option>
                        </select>
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-semibold">
                            Image URL
                        </label>
                        <input
                            type="text"
                            placeholder="https://example.com/image.jpg"
                            className="w-full px-4 py-2 bg-[#111111] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full py-3 bg-indigo-800 hover:bg-indigo-600 rounded-md font-semibold transition"
                        >
                            Create Item
                        </button>
                    </div>

                </form>
            </div>

        </div>
    );
}