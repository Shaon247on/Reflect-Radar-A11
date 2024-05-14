import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Provider/AuthProvider';
import axios from 'axios';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateCard = () => {
    const query = useLoaderData()
    const navigate = useNavigate()
    const { BoycottingReasonDetails, CurrentDateAndTime: currentDate, Image, Name, ProductBrand, ProductImageURL, ProductName, QueryTitle, UserEmail, _id } = query
    const { user } = useContext(AuthContext)
    const [toggle, setToggle] = useState(true)
    const [CurrentDateAndTime, setCurrentDateAndTime] = useState(new Date(Date.now()));



    const handleQueryUpdate = async (e) => {
        e.preventDefault()
        const form = e.target
        const ProductName = form.pName.value
        const ProductBrand = form.bName.value
        const ProductImageURL = form.image.value
        const QueryTitle = form.title.value
        const BoycottingReasonDetails = form.bReason.value
        const recommendationCount = 0

        const dataCollection = {
            ProductName,
            ProductImageURL,
            ProductBrand,
            QueryTitle,
            BoycottingReasonDetails,            
            CurrentDateAndTime,
            recommendationCount
        }
        console.table(dataCollection);

        const url = `${import.meta.env.VITE_API_URL}/query/${_id}`
        try {
            const { data } = await axios.put(url, dataCollection)
            console.log(data)
            toast.success('Query Updated successfully')
            navigate('/myquery')
        } catch (err) {
            console.log(err);
            toast.error(err.message)
        }
    }
    return (
        <form onSubmit={handleQueryUpdate} className="container flex flex-col mx-auto">
            <div>
                <h1>Id: {_id}</h1>
            </div>
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                <div className="space-y-2 col-span-full lg:col-span-1">
                    <p className="font-bold">Query Information</p>
                    <p className="text-xs">Provide all the information to post your Query.</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full sm:col-span-3">
                        <label className="">Product Name</label>
                        <input type="text" name="pName" defaultValue={ProductName} className="placeholder:text-[14px]  w-full px-3 py-2 placeholder-[#431A20] focus:placeholder-transparent border-b-[#431A20] border-b focus:border-b-[#431A20] duration-150  focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label className="">Brand Name</label>
                        <input type="text" name="bName" defaultValue={ProductBrand} className="placeholder:text-[14px] w-full px-3 py-2 placeholder-[#431A20] focus:placeholder-transparent border-b-[#431A20] border-b focus:border-b-[#431A20] duration-150  focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="email" className="">Product Image (URL)</label>
                        <input type="text" name="image" defaultValue={ProductImageURL} className="placeholder:text-[14px] w-full px-3 py-2 placeholder-[#431A20] focus:placeholder-transparent border-b-[#431A20] border-b focus:border-b-[#431A20] duration-150  focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="address" className="">Query TItle</label>
                        <input type="text" name="title" defaultValue={QueryTitle} className="placeholder:text-[14px] w-full px-3 py-2 placeholder-[#431A20] focus:placeholder-transparent border-b-[#431A20] border-b focus:border-b-[#431A20] duration-150  focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="address" className="">Boycotting Reason Details</label>
                        <textarea type="text" name="bReason" defaultValue={BoycottingReasonDetails} className="w-full px-3 py-2 placeholder:text-[14px] placeholder-[#431A20] focus:placeholder-transparent border-b-[#431A20] border-b focus:border-b-[#431A20] duration-150  focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                    </div>
                    <div className="mt-5 text-center w-full mx-auto">
                        <input type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-[#CB2903] text-white hover:bg-[#431A20] duration-500" value='Update' />
                    </div>
                </div>
            </fieldset>
        </form>
    );
};

export default UpdateCard;