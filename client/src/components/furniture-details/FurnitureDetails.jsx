import { Link, useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import { useUser } from "../../hooks/useUser";
import { useEffect, useState } from "react";

export function FurnitureDetails() {
  const { id } = useParams();
  const { user, isAuthenticated } = useUser();
  const { data: item } = useFetch(`data/furniture/${id}`, [id]);
  const [ isLiked, setIsLiked ] = useState(false)
  const [ furnitureLikes, setFurnitureLikes ] = useState(0)
  
  useEffect(() => {
    async function fetchLikedItems() {
        if(!user?._id) return
        const response = await fetch(`http://localhost:3030/data/likes?where=likedBy%3D%22${user._id}%22`)
        const likedItems = await response.json()
        const likedRecords = likedItems.find(like => like.furnitureId === id)
        setIsLiked(!!likedRecords)
    }

    async function furnitureLikes() {
        const response = await fetch(`http://localhost:3030/data/likes?where=furnitureId%3D%22${id}%22`)
        const likes = await response.json()
        const count = likes.length
        setFurnitureLikes(count)
    }
    fetchLikedItems()
    furnitureLikes()
  }, [user])
  
  console.log(furnitureLikes)
  return (
    <div
      className="bg-[#1a1a1a] text-white p-10 flex justify-center"
      style={{
        height: "calc(100vh - 123px)",
      }}
    >
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
            {user?._id === item?._ownerId ? (
              <div className="mt-10 flex gap-4">
                <Link
                  to={`/catalog/edit/${id}`}
                  className="w-full py-3 bg-indigo-700 hover:bg-indigo-500 rounded-md font-semibold transition text-lg text-center"
                >
                  Edit
                </Link>

                <Link
                  to={`/catalog/delete/${id}`}
                  className="w-full py-3 bg-red-700 hover:bg-red-500 rounded-md font-semibold transition text-lg text-center"
                >
                  Delete
                </Link>
              </div>
            ) : (
              ""
            )}

            <Link
  to={isAuthenticated 
        ? isLiked 
          ? '#' 
          : `/catalog/like/${id}` 
        : '/user/login'}
  className={`w-full py-3 rounded-md font-semibold transition text-lg flex items-center justify-between px-4
    ${isAuthenticated && isLiked 
      ? 'bg-gray-500 cursor-not-allowed'  // greyed out for already liked items
      : 'bg-pink-600 hover:bg-pink-500'   // normal like button
    }`}
>
  {isAuthenticated && isLiked ? 'Already liked' : 'Like'}
  <span className="bg-white text-pink-600 px-2 py-1 rounded-full text-sm">
    Likes: {furnitureLikes}
  </span>
</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
