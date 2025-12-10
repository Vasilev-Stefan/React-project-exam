import { useNavigate, useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";

export function FurnitureEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useUser();

  const { request, data: item } = useFetch(`data/furniture/${id}`, [id]);

  useEffect(() => {
    if (item && user && user._id !== item._ownerId) {
      navigate(`/catalog/details/${id}`);
    }
  }, [item, user, navigate]);

  const validator = (data) => {
    const errors = {};
    if (!data.name) {
      errors.name = "Product name is required";
    }

    if (!data.description) {
      errors.description = "Description is required";
    }

    if (!data.price) {
      errors.price = "Price is required";
    }

    if (!data.category) {
      errors.category = "Category is required";
    }

    if (!data.imageUrl) {
      errors.imageUrl = "Image is required";
    }

    return errors;
  };

  const edit = async (data) => {
    data.price = Number(data.price);
    try {
      const result = await request(`data/furniture/${id}`, "PUT", data);
      console.log(result);
      navigate(`/catalog/details/${id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const { data, setData, errors, onSubmitHandler, onChangeHandler } = useForm(
    item,
    edit,
    validator
  );

  useEffect(() => {
    if (item) {
      setData({
        name: item?.name,
        description: item?.description,
        price: item?.price,
        category: item.category,
        number: item.number,
        imageUrl: item.imageUrl,
      });
    }
  }, [setData, item]);

  return (
    <div
      className="bg-[#1a1a1a] text-white px-10 py-4"
      style={{ height: "calc(100vh - 123px)" }}
    >
      <h1 className="text-4xl font-bold mb-10 tracking-wide text-center">
        Edit Product
      </h1>

      <div className="max-w-3xl mx-auto bg-[#222222] p-10 rounded-2xl shadow-lg">
        <form className="space-y-6" action={onSubmitHandler}>
          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-2 font-semibold">
              Product Name
            </label>
            <input
              name="name"
              onChange={onChangeHandler}
              value={data?.name}
              type="text"
              placeholder="e.g., Modern Sofa"
              className="w-full px-4 py-2 bg-[#111111] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-300 mb-2 font-semibold">
              Phone Number
            </label>
            <input
              name="number"
              onChange={onChangeHandler}
              value={data?.number}
              type="text"
              placeholder="e.g., 0888111111"
              className="w-full px-4 py-2 bg-[#111111] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            {errors.number && <p className="text-red-500 mt-1">{errors.number}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-300 mb-2 font-semibold">
              Description
            </label>
            <textarea
              name="description"
              onChange={onChangeHandler}
              value={data?.description}
              placeholder="Short description of the item..."
              rows="4"
              className="w-full px-4 py-2 bg-[#111111] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 mt-1">{errors.description}</p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-300 mb-2 font-semibold">
              Price ($)
            </label>
            <input
              name="price"
              onChange={onChangeHandler}
              value={data?.price}
              type="number"
              placeholder="e.g., 499"
              className="w-full px-4 py-2 bg-[#111111] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            {errors.price && (
              <p className="text-red-500 mt-1">{errors.price}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-300 mb-2 font-semibold">
              Category
            </label>
            <select
              name="category"
              onChange={onChangeHandler}
              value={data?.category}
              className="w-full px-4 py-2 bg-[#111111] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              <option value="sofas">Sofas</option>
              <option value="tables">Tables</option>
              <option value="beds">Beds</option>
              <option value="chairs">Chairs</option>
              <option value="lighting">Lighting</option>
              <option value="storage">Storage</option>
              <option value="decor">Decor</option>
            </select>
            {errors.category && (
              <p className="text-red-500 mt-1">{errors.category}</p>
            )}
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-gray-300 mb-2 font-semibold">
              Image URL
            </label>
            <input
              name="imageUrl"
              onChange={onChangeHandler}
              value={data?.imageUrl}
              type="text"
              placeholder="https://example.com/image.jpg"
              className="w-full px-4 py-2 bg-[#111111] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            {errors.imageUrl && (
              <p className="text-red-500 mt-1">{errors.imageUrl}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-3 bg-indigo-800 hover:bg-indigo-600 rounded-md font-semibold transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
