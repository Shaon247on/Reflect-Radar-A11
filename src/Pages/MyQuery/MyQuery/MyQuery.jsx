import { useContext, useEffect, useState } from "react";
import AddQuery from "../AddQuery/AddQuery";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import QueryCard from "../QueryCard/QueryCard";

const MyQuery = () => {
    const [grid, setGrid] = useState(2)
    const [grid2, setGrid2] = useState(2)
    const [queries, setQueries] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        getData()
    }, [user])

    const getData = async () => {
        const { data } = await axios(
            `${import.meta.env.VITE_API_URL}/queries/${user.email}`
        )
        setQueries(data)
    }
    console.log(queries)

    return (
        <div>
            <AddQuery></AddQuery>
            <div>
                <div className='text-center mb-5'>
                    <h1 className="text-2xl md:text-5xl font-bold mb-5 font-playfair">Explore All Your Queries</h1>
                    <p className="w-[290px] md:w-[600px] mx-auto mb-8">Browse through a comprehensive collection of your queries.</p>
                    <div className="text-start flex items-center gap-2">
                        <h1 className="font-bold text-lg">My {queries.length > 1 ? `Queries` : `Query`}</h1>
                        <div className="badge bg-blue-100 gap-2">                            
                            <p className="text-blue-600 font-semibold">{queries.length > 1 ? `${queries.length} Queries` : `${queries.length} Query`}</p>
                        </div>
                    </div>
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
                        queries.map(query => <QueryCard key={query.ProductName} query={query}></QueryCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyQuery;