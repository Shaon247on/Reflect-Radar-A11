import axios from "axios";
import Swal from 'sweetalert2'
import toast from "react-hot-toast";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaRegTrashCan, FaPencil } from "react-icons/fa6";
const QueryCard = ({ query, getData }) => {
    console.log(query)
    const { BoycottingReasonDetails, CurrentDateAndTime, Image, Name, ProductBrand, ProductImageURL, ProductName, QueryTitle, UserEmail, _id } = query

    const handleDelete = async id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async(result) =>{
            if (result.isConfirmed) {
                try {
                    const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/query/${id}`)
                    console.log(data);
                    getData()
                } catch (err) {
                    console.log(err.message);
                    toast.error(err.message)
                }
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
        
    }
    return (
        <div className="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <img className="object-cover object-center w-full h-64 hover:scale-105 duration-200 overflow-hidden" src={ProductImageURL} alt="Article" />

            <div className="p-6">
                <div>
                    <div className="flex justify-between">
                        <p className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{ProductName}</p>
                        <p className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{ProductBrand}</p>
                    </div>
                    <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline">{QueryTitle}</a>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{BoycottingReasonDetails}</p>
                </div>

                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img className="object-cover h-10 rounded-full" src={Image} alt="Avatar" />
                            <div className="flex flex-col items-start">
                                <a href="#" className="text-base mx-2 font-semibold text-gray-700 dark:text-gray-200">{Name}</a>
                                <a href="#" className="text-base mx-2 font-semibold text-gray-700 dark:text-gray-200">{UserEmail}</a>
                            </div>
                        </div>
                        <span className="mr-3 text-xs text-gray-600 dark:text-gray-300">{CurrentDateAndTime.slice(0, 10)}</span>
                    </div>
                    <div className="flex justify-around items-center mt-5">
                        <p><span className="font-semibold">Total Recommendation:</span> 4</p>
                        <Link to={`/querydetails/${_id}`}><button className="btn btn-circle bg-[#CB2903] btn-sm md:btn-md hover:bg-[#431A20] duration-500 border-none"><FaArrowRightLong className="text-white"></FaArrowRightLong></button></Link>
                    </div>
                    <div className="flex items-center gap-6">
                        <button onClick={() => handleDelete(_id)} className="btn btn-circle text-2xl btn-sm md:btn-md hover:bg-red-700 duration-500 border-none"> <FaRegTrashCan className="text-lg hover:text-white duration-500"></FaRegTrashCan></button>
                        <Link to={`/update/${_id}`}><button className="btn btn-circle text-2xl btn-sm md:btn-md hover:bg-green-700 duration-500 border-none"><FaPencil className="text-lg hover:text-white duration-500"></FaPencil></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QueryCard;