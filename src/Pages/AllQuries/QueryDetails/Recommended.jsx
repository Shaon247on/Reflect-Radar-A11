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
                                        <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">{comment.product}</a>
                                        <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">{comment.title}</a>
                                        <p className="mt-auto text-xs dark:text-gray-600">5 minutes ago
                                            <a rel="noopener noreferrer" href="#" className="block dark:text-blue-600 lg:ml-2 lg:inline hover:underline">Politics</a>
                                        </p>
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