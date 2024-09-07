import Query from "../Query/Query";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const AllQueries = () => {
    const [toggle, setToggle] = useState(true)
    const [products, setProducts] = useState([])
    const [sortSearch, setSortSearch] = useState({ search: '', sort: 'asc' })
    
    console.log(sortSearch);
    useEffect(() => {
        const loadData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/queries`, {
                params: {
                    search: sortSearch.search,
                    sort: sortSearch.sort
                }
            })
            setProducts(data)
        }
        loadData()
    }, [toggle])

    const {
        register,
        handleSubmit,       
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        setSortSearch(data);  
        setToggle(!toggle)
    }

    console.log(products)
    const [grid, setGrid] = useState(3)
    const [grid2, setGrid2] = useState(2)
    return (
        <div>
            <div className='text-center mb-5'>
                <h1 className="text-2xl md:text-5xl font-bold mb-5 font-playfair">Explore All Queries</h1>
                <p className="w-[290px] md:w-[600px] mx-auto mb-8">Browse through a comprehensive collection of product concerns and solutions. Find answers and recommendations from our engaged community.</p>
            </div>
            <div className="grid grid-cols-5 justify-between mb-10 mx-16">
                <div className="col-span-2 ">
                    <div>
                        <h1 className="text-lg font-semibold hidden md:block">Select Layout</h1>
                    </div>
                    <div className="space-x-3 hidden lg:block">
                        <button onClick={() => setGrid(2)} className="btn btn-circle bg-[#CB2903] btn-sm md:btn-md hover:bg-[#431A20] duration-500 border-none text-white">2</button>
                        <button onClick={() => setGrid(3)} className="btn btn-circle bg-[#CB2903] btn-sm md:btn-md hover:bg-[#431A20] duration-500 border-none text-white">3</button>
                    </div>
                    <div className="space-x-3 hidden md:block lg:hidden">
                        <button onClick={() => setGrid2(1)} className="btn btn-circle bg-[#CB2903] btn-sm md:btn-md hover:bg-[#431A20] duration-500 border-none text-white">1</button>
                        <button onClick={() => setGrid2(2)} className="btn btn-circle bg-[#CB2903] btn-sm md:btn-md hover:bg-[#431A20] duration-500 border-none text-white">2</button>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex col-span-3 items-center justify-between">
                    <input {...register('search')} placeholder="Search by product name" className='w-[200px] md:w-[280px] lg:w-[350px] px-3 py-2 placeholder-[#F5AB41] focus:placeholder-transparent border-b-[#F5AB41] border-b focus:border-b-[#F5AB41] duration-150  focus:border-b-4 hover:border-b-[#F5AB41] hover:border-b-4 outline-none bg-transparent' />

                    <select {...register('sort')} className='select select-warning w-full max-w-[200px]'>
                        <option value="desc">Sort by Date</option>
                        <option value="desc">Newest to Oldest</option>
                        <option value="asc">Oldest to Newest</option>
                    </select>
                    <button className='rounded-lg px-4 md:px-10 py-2 md:py-3 text-white bg-[#CB2903] hover:bg-[#431A20] duration-500 border-none' type="submit">Apply</button>
                </form>

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