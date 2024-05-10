import { useLoaderData } from "react-router-dom";
import Query from "../Query/Query";
import { useState } from "react";

const AllQueries = () => {
    const products = useLoaderData()
    console.log(products)
    const [grid, setGrid] = useState(3)
    const [grid2, setGrid2] = useState(2)
    return (
        <div>
            <div className='text-center mb-5'>
                <h1 className="text-2xl md:text-5xl font-bold mb-5 font-playfair">Explore All Queries</h1>
                <p className="w-[290px] md:w-[600px] mx-auto mb-8">Browse through a comprehensive collection of product concerns and solutions. Find answers and recommendations from our engaged community.</p>
            </div>
            <div className=" text-center space-y-2 mb-10">
                <div>
                    <h1 className="text-lg font-semibold">Select Layout</h1>
                </div>
                <div className="text-center space-x-3 hidden lg:block">
                    <button onClick={() => setGrid(2)} className="btn btn-circle bg-[#CB2903] btn-sm md:btn-md hover:bg-[#431A20] duration-500 border-none text-white">2</button>
                    <button onClick={() => setGrid(3)} className="btn btn-circle bg-[#CB2903] btn-sm md:btn-md hover:bg-[#431A20] duration-500 border-none text-white">3</button>
                </div>
                <div className="text-center space-x-3 hidden md:block lg:hidden">
                    <button onClick={() => setGrid2(1)} className="btn btn-circle bg-[#CB2903] btn-sm md:btn-md hover:bg-[#431A20] duration-500 border-none text-white">1</button>
                    <button onClick={() => setGrid2(2)} className="btn btn-circle bg-[#CB2903] btn-sm md:btn-md hover:bg-[#431A20] duration-500 border-none text-white">2</button>
                </div>

            </div>
            <div className={`grid grid-cols-1 md:grid-cols-${grid2} lg:grid-cols-${grid} gap-7 mx-4 md:mx-8 lg:mx-16`}>
                {
                    products.map(product => <Query key={product.ProductName} product={product}></Query>)
                }
            </div>
        </div>
    );
};

export default AllQueries;