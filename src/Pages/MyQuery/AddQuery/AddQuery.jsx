
const AddQuery = () => {
    return (
        <div>
            <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>open modal</button>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    {/* form area start */}

                    <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
                        <form noValidate="" action="" className="container flex flex-col mx-auto">
                            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                                <div className="space-y-2 col-span-full lg:col-span-1">
                                    <p className="font-bold">Query Information</p>
                                    <p className="text-xs">Provide all the information to post your Query.</p>
                                </div>
                                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                    <div className="col-span-full sm:col-span-3">
                                        <label  className="">Product Name</label>
                                        <input type="text" placeholder="product name" className="placeholder:text-[14px]  w-full px-3 py-2 placeholder-[#431A20] focus:placeholder-transparent border-b-[#431A20] border-b focus:border-b-[#431A20] duration-150  focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label className="">Brand Name</label>
                                        <input  type="text" placeholder="brand name" className="placeholder:text-[14px] w-full px-3 py-2 placeholder-[#431A20] focus:placeholder-transparent border-b-[#431A20] border-b focus:border-b-[#431A20] duration-150  focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="email" className="">Product Image (URL)</label>
                                        <input  type="text" placeholder="photo URL" className="placeholder:text-[14px] w-full px-3 py-2 placeholder-[#431A20] focus:placeholder-transparent border-b-[#431A20] border-b focus:border-b-[#431A20] duration-150  focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="address" className="">Query TItle</label>
                                        <input type="text" placeholder="query tItle" className="placeholder:text-[14px] w-full px-3 py-2 placeholder-[#431A20] focus:placeholder-transparent border-b-[#431A20] border-b focus:border-b-[#431A20] duration-150  focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="address" className="">Boycotting Reason Details</label>
                                        <textarea  type="text" placeholder="details" className="w-full px-3 py-2 placeholder:text-[14px] placeholder-[#431A20] focus:placeholder-transparent border-b-[#431A20] border-b focus:border-b-[#431A20] duration-150  focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
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
                                        <input  type="text" placeholder="user name" className="placeholder:text-[14px] w-full px-3 py-2 placeholder-[#431A20] focus:placeholder-transparent border-b-[#431A20] border-b focus:border-b-[#431A20] duration-150  focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <label htmlFor="website" className="">User Email</label>
                                        <input type="text" placeholder="user email" className="placeholder:text-[14px] w-full px-3 py-2 placeholder-[#431A20] focus:placeholder-transparent border-b-[#431A20] border-b focus:border-b-[#431A20] duration-150  focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                                    </div>                                    
                                    <div className="col-span-full">
                                        <label htmlFor="bio" className="">User Photo</label>
                                            <img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 dark:bg-gray-500 rounded-full" />
                                        <div className="mt-5 text-center w-[50%] mx-auto">
                                            <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-[#CB2903] text-white hover:bg-[#431A20] duration-500">Change</button>
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