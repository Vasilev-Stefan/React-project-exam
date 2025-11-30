import { Link, useParams } from "react-router";
import { FurnitureList } from "../furniture-list/FurnitureList";
import { useEffect, useState } from "react";

export function Catalog() {
    const [items, setItems] = useState([])

    const { category } = useParams()

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/furniture')
            .then(response => response.json())
            .then(result => setItems(Object.entries(result)))
            .catch(error => alert(error.message))
    }, [setItems])

    let filteredItems = items.slice()
    switch (category) {
        case 'sofas': filteredItems = filteredItems.filter(([id, item]) => item.category.toLowerCase() === category.toLowerCase()); break;
        case 'tables': filteredItems = filteredItems.filter(([id, item]) => item.category.toLowerCase() === category.toLowerCase()); break;
        case 'beds': filteredItems = filteredItems.filter(([id, item]) => item.category.toLowerCase() === category.toLowerCase()); break;
        case 'chairs': filteredItems = filteredItems.filter(([id, item]) => item.category.toLowerCase() === category.toLowerCase()); break;
        case 'lighting': filteredItems = filteredItems.filter(([id, item]) => item.category.toLowerCase() === category.toLowerCase()); break;
        case 'storage': filteredItems = filteredItems.filter(([id, item]) => item.category.toLowerCase() === category.toLowerCase()); break;
        case 'decor': filteredItems = filteredItems.filter(([id, item]) => item.category.toLowerCase() === category.toLowerCase()); break;
    }

    return (
        <div className="min-h-screen bg-[#1a1a1a] text-white flex">

            {/* Sidebar */}
            <aside className="w-64 bg-[#111111] border-r border-gray-800 p-6">
                <h2 className="text-xl font-semibold mb-6 tracking-wide">
                    Categories
                </h2>

                <ul className="space-y-3">
                    <Link to='/catalog'><li><button className={"w-full text-left px-4 py-2 rounded-md " + (category === undefined ? "bg-indigo-800" : "hover:bg-[#2a2a2a]")}>All</button></li></Link>
                    <Link to='/catalog/sofas'><li><button className={"w-full text-left px-4 py-2 rounded-md " + (category === 'sofas' ? 'bg-indigo-800' : 'hover:bg-[#2a2a2a]')} >Sofas</button></li></Link>
                    <Link to='/catalog/tables'><li><button className={"w-full text-left px-4 py-2 rounded-md " + (category === 'tables' ? 'bg-indigo-800' : 'hover:bg-[#2a2a2a]')}>Tables</button></li></Link>
                    <Link to='/catalog/beds'><li><button className={"w-full text-left px-4 py-2 rounded-md " + (category === 'beds' ? 'bg-indigo-800' : 'hover:bg-[#2a2a2a]')}>Beds</button></li></Link>
                    <Link to='/catalog/chairs'><li><button className={"w-full text-left px-4 py-2 rounded-md " + (category === 'chairs' ? 'bg-indigo-800' : 'hover:bg-[#2a2a2a]')}>Chairs</button></li></Link>
                    <Link to='/catalog/lighting'><li><button className={"w-full text-left px-4 py-2 rounded-md " + (category === 'lighting' ? 'bg-indigo-800' : 'hover:bg-[#2a2a2a]')}>Lighting</button></li></Link>
                    <Link to='/catalog/storage'><li><button className={"w-full text-left px-4 py-2 rounded-md " + (category === 'storage' ? 'bg-indigo-800' : 'hover:bg-[#2a2a2a]')}>Storage</button></li></Link>
                    <Link to='/catalog/decor'><li><button className={"w-full text-left px-4 py-2 rounded-md " + (category === 'decor' ? 'bg-indigo-800' : 'hover:bg-[#2a2a2a]')}>Decor</button></li></Link>
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

                    {filteredItems.length === 0 ?
                    <h2 className="text-3xl font-semibold mb-4">No products found</h2> : 
                    filteredItems.map(item => <FurnitureList key={item[0]} data={item[1]} />)}


                </div>
            </main>

        </div>
    )
}