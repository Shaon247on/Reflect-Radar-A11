import { useContext } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Query = ({ product }) => {
    console.log(product)
    const { BoycottingReasonDetails, CurrentDateAndTime, Image, Name, ProductBrand, ProductImageURL, ProductName, QueryTitle, UserEmail, _id, recommendationCount } = product
    return (
        <div className="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <img className="object-cover object-center w-auto h-64 mx-auto hover:scale-105 duration-200 overflow-hidden" src={ProductImageURL} alt="Article" />

            <div className="p-6">
                <div>
                    <div className="flex justify-between">
                        <p className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{ProductName}</p>
                        <p className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{ProductBrand}</p>
                    </div>
                    <p className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 cursor-default">{QueryTitle}</p>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 cursor-default">{BoycottingReasonDetails}</p>
                </div>

                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img className="object-cover object-center h-10 rounded-full" src={Image} alt="Avatar" />
                            <div className="flex flex-col items-start">
                                <p className="text-sm mx-2 font-semibold text-gray-700 dark:text-gray-200 cursor-pointer">{Name}</p>
                                <p className="text-sm mx-2 font-semibold text-gray-700 dark:text-gray-200 cursor-pointer">{UserEmail.slice(0,20)}</p>
                            </div>
                        </div>
                        <span className="mr-3 text-xs text-gray-600 dark:text-gray-300">{CurrentDateAndTime.slice(0,10)}</span>
                    </div>
                    <div className="flex justify-around items-center mt-5">
                        <p className="font-semibold">Total Recommendation:{recommendationCount > 0 ? recommendationCount: 0}</p>
                        <Link to={`/querydetails/${_id}`}><button className="btn btn-circle bg-[#CB2903] btn-sm md:btn-md hover:bg-[#431A20] duration-500 border-none"><FaArrowRightLong className="text-white"></FaArrowRightLong></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Query;