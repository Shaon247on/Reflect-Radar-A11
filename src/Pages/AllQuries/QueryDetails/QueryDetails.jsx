import { useLoaderData, useParams } from 'react-router-dom';

const QueryDetails = () => {
    const query = useLoaderData()
    const { id } = useParams()

    const { BoycottingReasonDetails, CurrentDateAndTime, Image, Name, ProductBrand, ProductImageURL, ProductName, QueryTitle, UserEmail, _id } = query
    console.log(id, query);
    return (
        <div className='px-5 py-10 dark:bg-gray-100 dark:text-gray-800'>
            <div className='container grid grid-cols-12 mx-auto gap-y-6 md:gap-9 min-h-[700px]'>

                {/* Recommendation From */}

                <div className='flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-4 mt-9'>
                    <div className='flex flex-col space-y-8 md:space-y-12 w-full'>
                        <div className=''>
                            <h1 className='text-center text-2xl pb-5 border-b mt-8 font-bold font-playfair'> Your Recommendation</h1>
                        </div>
                        <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                            <fieldset className="">
                                <div className="">
                                    <div className="col-span-full ">
                                        <label htmlFor="firstname" className="text-sm">Title</label>
                                        <input type="text" placeholder="recommendation title" className="w-full px-3 py-2 placeholder-[#431A20] focus:placeholder-transparent border-b-[#431A20] border-b focus:border-b-[#431A20] duration-150  focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                                    </div>
                                    <div className="col-span-full ">
                                        <label htmlFor="lastname" className="text-sm">Product Name</label>
                                        <input type="text" placeholder="product name" className="w-full px-3 py-2 placeholder-[#431A20] focus:placeholder-transparent border-b-[#431A20] border-b focus:border-b-[#431A20] duration-150  focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="email" className="text-sm">Product Image</label>
                                        <input type="text" placeholder="URL" className="w-full px-3 py-2 placeholder-[#431A20] focus:placeholder-transparent border-b-[#431A20] border-b focus:border-b-[#431A20] duration-150  focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="address" className="text-sm">Reason</label>
                                        <textarea type="text" placeholder="reason" className="w-full px-3 py-2 placeholder-[#431A20] focus:placeholder-transparent border-b-[#431A20] border-b focus:border-b-[#431A20] duration-150  focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                                    </div>
                                    <div className="text-center mt-6">
                                        <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-[#CB2903] text-white hover:bg-[#431A20] duration-500">Post</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>

                {/* Query details */}

                <div className="relative overflow-hidden col-span-12  dark:bg-gray-500 bg-center bg-no-repeat bg-cover lg:col-span-5 md:col-span-8 min-h-96">
                    <div className='w-full h-[385px] md:h-[650px] lg:h-[550px] absolute z-0'>
                        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                            <div className=" flex items-center justify-between">
                                <div className='flex gap-3 items-center'>
                                    <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                                    <div className=" flex items-center justify-between">
                                        <div className='flex flex-col space-y-1'>
                                            <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Leroy Jenkins</a>
                                            <span className="text-xs dark:text-gray-600">4 hours ago</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='mr-3'>
                                    <p className='text-sm'><span className='font-semibold'>Product:</span> {ProductName}</p>
                                    <p className='text-sm'><span className='font-semibold'>Brand:</span> {ProductBrand}</p>
                                </div>
                            </div>
                            <div>
                                <img src={ProductImageURL} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                                <h2 className="mb-1 text-xl font-semibold">{QueryTitle}</h2>
                                <p className="text-sm dark:text-gray-600">{BoycottingReasonDetails}</p>
                            </div>
                            <div className="flex flex-wrap justify-between">
                                <div className="space-x-2">
                                    <button aria-label="Share this post" type="button" className="p-2 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-600">
                                            <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                                        </svg>
                                    </button>
                                    <button aria-label="Bookmark this post" type="button" className="p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-600">
                                            <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex space-x-2 text-sm dark:text-gray-600">
                                    <button type="button" className="flex items-center p-1 space-x-1.5">
                                        <span>30</span>
                                    </button>
                                    <button type="button" className="flex items-center p-1 space-x-1.5">
                                        <span>283</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative flex w-full h-full col-span-12 dark:bg-gray-500 bg-no-repeat bg-cover xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96'>
                        <a className="flex flex-col items-center justify-end p-6 text-center sm:p-8 group dark:via- flex-grow-1 bg-gradient-to-b dark:from-gray-50 dark:to-gray-50">
                            <span className="flex items-center mb-4 space-x-2 dark:text-violet-600">
                                <span className="relative flex-shrink-0 w-2 h-2 rounded-full dark:bg-violet-600">
                                    <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping dark:bg-violet-600"></span>
                                </span>
                            </span>
                        </a>
                    </div>
                </div>

                {/* Recent Recommendations */}

                <div className="py-2 col-span-12  md:col-span-12 lg:col-span-3 mt-16  md:mx-auto ">
                    <div className="mb-6 flex items-center border-b-2 pb-6">
                        <h4 className="text-xs font-bold uppercase dark:border-violet-600">Recent Recommendations</h4>
                        <p className='px-2 text-blue-600 bg-blue-100 font-bold'>4</p>
                    </div>
                    <div className="flex flex-col divide-y dark:divide-gray-300">
                        <div className="flex px-1 py-4">
                            <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/244x324" />
                            <div className="flex flex-col flex-grow">
                                <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Aenean ac tristique lorem, ut mollis dui.</a>
                                <p className="mt-auto text-xs dark:text-gray-600">5 minutes ago
                                    <a rel="noopener noreferrer" href="#" className="block dark:text-blue-600 lg:ml-2 lg:inline hover:underline">Politics</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QueryDetails;