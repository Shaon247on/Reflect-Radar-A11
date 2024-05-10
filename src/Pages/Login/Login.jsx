import { Link, useLocation, useNavigate, useNavigation } from "react-router-dom";
import back from '../../assets/Stacked_Wave.jpg';
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const [textColor, setTextColor] = useState(true)
    const [textColor2, setTextColor2] = useState(true)
    const {logIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)


    const handleLogin = (e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        logIn(email, password)
        .then(result =>{
            const loginUser = result.user
            console.log(loginUser)
            navigate(location.state? 
                location?.state: '/'
            )
        })
        .catch(error=> console.error(error))
    }

    return (
        <div className="relative flex justify-center">
            <img src={back} alt="" className="absolute z-0 h-[900px] w-full object-cover md:object-fill" />
            <div className={` absolute z-10 top-40 container mx-auto flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800`}>
                <div>
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-5xl text-white font-extrabold font-playfair">Login in</h1>
                        <p className="text-sm dark:text-gray-600 text-white">Sign in to access your account</p>
                    </div>
                    <div>
                        <div className="my-6 space-y-4">
                            <button onMouseEnter={()=> setTextColor(false)} onMouseLeave={()=>setTextColor(true)} aria-label="Login with Google" type="button" className={`border-[#431A20] flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={`${!textColor? "text-[#431A20] duration-500 ease-in-out": "text-white duration-500 ease-in-out"} w-5 h-5 fill-current`}>
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                                <p className={`${!textColor? "text-[#431A20] duration-500 ease-in-out": "text-white duration-500 ease-in-out"} font-medium`}>Login with Google</p>
                            </button>
                            <button onMouseEnter={()=> setTextColor2(false)} onMouseLeave={()=> setTextColor2(true)} aria-label="Login with GitHub" role="button" className={`border-[#431A20] flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={`${!textColor2? "text-[#431A20] duration-500 ease-in-out": "text-white duration-500 ease-in-out"} w-5 h-5 fill-current`}>
                                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                </svg>
                                <p className={`${!textColor2? "text-[#431A20] duration-500 ease-in-out": "text-white duration-500 ease-in-out"} font-medium`}>Login with GitHub</p>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full bg-[#431A20]" />
                        <p className="px-3 text-[#431A20]">OR</p>
                        <hr className="w-full bg-[#431A20]" />
                    </div>
                    <form onSubmit={handleLogin} className="space-y-12">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm text-white">Email address</label>
                                <input type="email text-white" name="email" placeholder="your email" className="w-full px-3 py-2 border-b-[#431A20] border-b placeholder-[#431A20] focus:placeholder-transparent focus:border-b-[#431A20] duration-150 focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm text-white">Password</label>
                                </div>
                                <input type="password" name="password" placeholder="password" className="w-full px-3 py-2 placeholder-[#431A20] focus:placeholder-transparent border-b-[#431A20] border-b focus:border-b-[#431A20] duration-150  focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div>
                                <button className="w-full px-8 py-3 font-semibold rounded-md bg-[#CB2903] text-white hover:bg-[#431A20] duration-500">Login</button>
                            </div>
                            <p className="px-6 text-sm text-center dark:text-gray-600">Don&apos;t have an account yet?
                                <Link to='/register' rel="noopener noreferrer" href="#" className="hover:underline hover:text-[#431A20] duration-300 underline"> Sign up</Link>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;