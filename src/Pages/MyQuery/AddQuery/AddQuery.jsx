import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import Swal from 'sweetalert2'

const AddQuery = ({getData}) => {
    const { user } = useContext(AuthContext)
    const { email, displayName, photoURL } = user
    const [CurrentDateAndTime, setCurrentDateAndTime] = useState(new Date(Date.now()));


   
    const handleQueryPost = async (e) => {
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
            UserEmail: email,
            Name: displayName,
            Image: photoURL,
            CurrentDateAndTime,
            recommendationCount
        }
        console.table(dataCollection);

        const url = `${import.meta.env.VITE_API_URL}/queries`
        try {
            const { data } = await axios.post(url, dataCollection)
            console.log(data)
            Swal.fire({
                title: "Done!",
                text: "Query Posted Successfully",
                icon: "success"
              });
            getData()
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="mb-20">
            <div>
                <section className="w-[85%] h-[310px] md:h-[500px] overflow-hidden mx-auto">
                    <div className="relative mx-auto flex flex-col items-center text-center">
                        <img src="https://i.pinimg.com/736x/31/ec/99/31ec99529072d31eceaa3a62d9891456.jpg " alt="" className="absolute z-0 h-[230px] md:h-[500px]" />
                        <div className="w-full lg:w-[69%] h-[230px] md:h-[500px] absolute z-10 bg-[#00000026]" />
                        <div className="absolute z-20 top-[55px] md:top-[170px] lg:top-[180px] w-full lg:w-[550px]">
                            <h1 className="text-[22px] md:text-4xl font-playfair font-bold leading-none text-[#CB2903]">Seek Better<span className="dark:text-violet-600">Solution</span></h1>
                            <p className="px-8 mt-8 mb-12 text-base md:text-lg text-[#724F54]">Share your product concerns and discover superior alternatives with our community. Post your query now for tailored recommendations.</p>
                            <div className="flex flex-wrap justify-center">
                                <button className="w-56 px-8 py-3 font-semibold rounded-md bg-[#CB2903] text-white hover:bg-[#431A20] duration-500" onClick={() => document.getElementById('my_modal_4').showModal()}>Post Now</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Model code */}
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    {/* form area start */}

                    <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
                        <form onSubmit={handleQueryPost} className="container flex flex-col mx-auto">
                            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                                <div className="space-y-2 col-span-full lg:col-span-1">
                                    <p className="font-bold">Query Information</p>
                                    <p className="text-xs">Provide all the information to post your Query.</p>
                                </div>
                                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                    <div className="col-span-full sm:col-span-3">
                                        <label className="">Product Name</label>
                                        <input type="text" name="pName" placeholder="product name" className="placeholder:text-[14px]  w-full px-3 py-2 placeholder-[#431A20] focus:placeholder-transparent border-b-[#431A20] border-b focus:border-b-[#431A20] duration-150  focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label className="">Brand Name</label>
                                        <input type="text" name="bName" placeholder="brand name" className="placeholder:text-[14px] w-full px-3 py-2 placeholder-[#431A20] focus:placeholder-transparent border-b-[#431A20] border-b focus:border-b-[#431A20] duration-150  focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="email" className="">Product Image (URL)</label>
                                        <input type="text" name="image" placeholder="photo URL" className="placeholder:text-[14px] w-full px-3 py-2 placeholder-[#431A20] focus:placeholder-transparent border-b-[#431A20] border-b focus:border-b-[#431A20] duration-150  focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="address" className="">Query TItle</label>
                                        <input type="text" name="title" placeholder="query tItle" className="placeholder:text-[14px] w-full px-3 py-2 placeholder-[#431A20] focus:placeholder-transparent border-b-[#431A20] border-b focus:border-b-[#431A20] duration-150  focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="address" className="">Boycotting Reason Details</label>
                                        <textarea type="text" name="bReason" placeholder="details" className="w-full px-3 py-2 placeholder:text-[14px] placeholder-[#431A20] focus:placeholder-transparent border-b-[#431A20] border-b focus:border-b-[#431A20] duration-150  focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                                <div className="space-y-2 col-span-full lg:col-span-1">
                                    <p className="font-bold font">User Information</p>
                                    <p className="text-xs">Your profile informations are here.</p>
                                </div>
                                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="username" className="">User Name</label>
                                        <input type="text" defaultValue={displayName} disabled className="placeholder:text-[14px] w-full px-3 py-2 placeholder-[#431A20] focus:placeholder-transparent border-b-[#431A20] border-b focus:border-b-[#431A20] duration-150  focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="website" className="">User Email</label>
                                        <input type="text" defaultValue={email} disabled className="placeholder:text-[14px] w-full px-3 py-2 placeholder-[#431A20] focus:placeholder-transparent border-b-[#431A20] border-b focus:border-b-[#431A20] duration-150  focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="bio" className="">User Photo</label>
                                        <img src={photoURL} alt="" className="w-10 h-10 dark:bg-gray-500 rounded-full" />
                                        <div className="mt-5 text-center w-[50%] mx-auto">
                                            <input type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-[#CB2903] text-white hover:bg-[#431A20] duration-500" value='Post' />
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </section>
                    <div>
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="px-8 py-3 font-semibold rounded-md bg-[#CB2903] text-white hover:bg-[#431A20] duration-500">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>

    );
};

export default AddQuery;