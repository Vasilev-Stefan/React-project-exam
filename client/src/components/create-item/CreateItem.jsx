import { useNavigate } from "react-router"
import { useFetch } from "../../hooks/useFetch"
import { useForm } from "../../hooks/useForm"

export function CreateItem() {
    const { request } = useFetch()
    const navigate = useNavigate()
    const initialData = {
        name: '',
        description: '',
        price: '',
        category: 'sofas',
        imageUrl: '',
    }

    const validator = (data) => {
        const errors = {}
        if(!data.name) {
            errors.name = 'Product name is required'
        }

        if(!data.description) {
            errors.description = 'Description is required'
        }

        if(!data.price) {
            errors.price = 'Price is required'
        }

        if(!data.category) {
            errors.category = 'Category is required'
        }

        if(!data.imageUrl) {
            errors.imageUrl = 'Image is required'
        }

        return errors
    }

    const create = async (data) => {
        data.price = Number(data.price)
        data.likedBy = []
        try {
            const result = await request('data/furniture', 'POST', data)
            console.log(result)
            navigate('/catalog')
        } catch (error) {
            alert(error.message)
        }
    }

    const { errors, onSubmitHandler, inputFiller } = useForm(initialData, create, validator)


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

                <form className="space-y-6" action={onSubmitHandler}>

                    {/* Name */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-semibold">
                            Product Name
                        </label>
                        <input
                            {...inputFiller('name')}
                            type="text"
                            placeholder="e.g., Modern Sofa"
                            className="w-full px-4 py-2 bg-[#111111] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                        {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-semibold">
                            Description
                        </label>
                        <textarea
                            {...inputFiller('description')}
                            placeholder="Short description of the item..."
                            rows="4"
                            className="w-full px-4 py-2 bg-[#111111] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        ></textarea>
                        {errors.description && <p className="text-red-500 mt-1">{errors.description}</p>}
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-semibold">
                            Price ($)
                        </label>
                        <input
                            {...inputFiller('price')}
                            type="number"
                            placeholder="e.g., 499"
                            className="w-full px-4 py-2 bg-[#111111] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                        {errors.price && <p className="text-red-500 mt-1">{errors.price}</p>}
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-semibold">
                            Category
                        </label>
                        <select
                            {...inputFiller('category')}
                            className="w-full px-4 py-2 bg-[#111111] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        >
                            <option value='sofas'>Sofas</option>
                            <option value='tables'>Tables</option>
                            <option value='beds'>Beds</option>
                            <option value='chairs'>Chairs</option>
                            <option value='lighting'>Lighting</option>
                            <option value='storage'>Storage</option>
                            <option value='decor'>Decor</option>
                        </select>
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block text-gray-300 mb-2 font-semibold">
                            Image URL
                        </label>
                        <input
                            {...inputFiller('imageUrl')}
                            type="text"
                            placeholder="https://example.com/image.jpg"
                            className="w-full px-4 py-2 bg-[#111111] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                        {errors.imageUrl && <p className="text-red-500 mt-1">{errors.imageUrl}</p>}
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