import { useEffect, useState } from "react";
import { useUser } from "../../hooks/useUser";
import { Link, useNavigate } from "react-router";
import { useFetch } from "../../hooks/useFetch";

export function UserProfile() {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const { request } = useFetch();

  const [likedFurniture, setLikedFurniture] = useState(0);
  const [postsCount, setPostsCount] = useState(0);

  useEffect(() => {
    if (!user?._id) {
      navigate("/user/login");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (!user?._id) return;

    async function loadStats() {
      const likes = await request(`data/likes?where=likedBy%3D%22${user._id}%22`)
      setLikedFurniture(likes.length)

      const posts = await request(`data/furniture?where=_ownerId%3D%22${user._id}%22`)
      setPostsCount(posts.length);
    }

    loadStats();
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div
      className="bg-[#1a1a1a] text-white p-10 flex justify-center"
      style={{ height: "calc(100vh - 123px)" }}
    >
      <div className="max-w-3xl w-full bg-[#222222] p-10 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold mb-10 tracking-wide text-center">
          Your Profile
        </h1>

        <div className="flex gap-10">
          <div className="w-1/3 flex justify-center">
            <div className="w-40 h-40 bg-[#111111] rounded-full flex items-center justify-center shadow-md border border-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 21a8.38 8.38 0 0113 0" />
              </svg>
            </div>
          </div>

          {/* User Info */}
          <div className="w-2/3 flex flex-col justify-between">
            <div>
              <p className="text-2xl font-semibold mb-4">{user?.email}</p>

              <p className="text-gray-300 mb-2">
                <span className="text-white font-bold">{postsCount}</span>{" "}
                posted items
              </p>

              <p className="text-gray-300 mb-6">
                <span className="text-white font-bold">{likedFurniture}</span>{" "}
                liked items
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 mt-6">
              <button
                onClick={handleLogout}
                className="w-full py-3 bg-red-700 hover:bg-red-500 rounded-md font-semibold transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
