import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import axios from 'axios';
import useAsyncSort from '../../../Hooks/useAsyncSort';

const Recommended = ({ props, toggle }) => {
    const { user } = useContext(AuthContext)
    const [comments, setComments] = useState([])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/recommends/${props}`)
            setComments(data)
        }
        getData()
    }, [toggle])

    const sortedComments = useAsyncSort(comments)

    return (
        <div>
            <div className="mb-6 flex gap-3 items-center border-b-2 pb-6">
                <h4 className="text-xs font-bold uppercase dark:border-violet-600">Recent Recommendations</h4>
                <p className='text-blue-600 bg-blue-100 rounded-lg px-3 font-bold'>{sortedComments.length}</p>
            </div>
            {sortedComments.length > 0 ?
                <div>
                    {
                        sortedComments.map(comment =>
                            <div key={comment._id} className="flex flex-col divide-y dark:divide-gray-300">
                                <div className="flex px-1 py-4">
                                    <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src={comment.img} />
                                    <div className="flex flex-col flex-grow">
                                        <p className="font-serif">{comment.product}</p>
                                        <p className="font-serif">{comment.title}</p>
                                        <div className='flex  gap-3'>
                                            <p className="mt-auto text-sm dark:text-gray-600">5 minutes ago </p>
                                            <button className="hover:text-blue-700 duration-500" onClick={()=>document.getElementById('my_modal_3').showModal()}>Details</button>
                                        </div>
                                        <dialog id="my_modal_3" className="modal">
                                            <div className="modal-box">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                </form>
                                                <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">{comment.time.slice(0,10)}</span>
                                                    <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabIndex="0" role="button">{comment.title}</a>
                                                </div>

                                                <div className="mt-2">
                                                    <a href="#" className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabIndex="0" role="link">{comment.product}</a>
                                                    <p className="mt-2 text-gray-600 dark:text-gray-300">{comment.reason}</p>
                                                </div>

                                                <div className="flex items-center justify-end mt-4">
                                                    <div className="flex items-center">
                                                        <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src={comment.image} alt="avatar"/>
                                                            <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200" tabIndex="0" role="link">{comment.name}</a>
                                                    </div>
                                                </div>
                                            </div> 
                                            </div>
                                        </dialog>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div> :
                <div>
                    <h1>No Recommendations are make yet</h1>
                </div>}
        </div>

    );
};

export default Recommended;