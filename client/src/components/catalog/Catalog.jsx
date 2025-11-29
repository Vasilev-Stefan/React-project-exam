import { Link } from "react-router";
import { FurnitureList } from "../furniture-list/FurnitureList";

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
                    <Link to="/furniture/create">
                        <button className="px-4 py-2 bg-indigo-800 hover:bg-indigo-600 rounded-md transition">
                            Add item
                        </button>
                    </Link>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-3 gap-10">

                    {/* Product 1 */}
                    <FurnitureList />

                    {/* Product 2 */}
                    <FurnitureList />

                    {/* Product 3 */}
                    <FurnitureList />

                </div>
            </main>

        </div>
    )
}