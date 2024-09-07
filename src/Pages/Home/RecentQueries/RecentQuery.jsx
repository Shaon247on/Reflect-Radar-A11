import { useEffect, useState } from "react";
import RecentQueries from "./RecentQueries";
import { Link } from "react-router-dom";

const RecentQuery = () => {
    const [products, setProducts] = useState([])
    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_API_URL}/queries`)
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])
    return (
        <div>
            <div className="text-center">
                <h1 className="text-2xl md:text-4xl font-bold mb-5">Our Recent Queries</h1>
                <p className="w-[200px] md:w-[600px] mx-auto mb-5">Stay updated with the latest product concerns and recommendations from our engaged community in our Recent Queries section. Discover solutions now!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-7">
                {
                    products.slice(0, 6).map(product => <RecentQueries key={product.ProductName} product={product}></RecentQueries>)
                }
            </div>
            <div className="text-center mt-8">
                <Link to="/queries"><button className="btn bg-[#CB2903] btn-sm md:btn-md hover:bg-[#431A20] duration-500 border-none">Explore More</button>
                </Link>
            </div>
        </div>
    );
};

export default RecentQuery;