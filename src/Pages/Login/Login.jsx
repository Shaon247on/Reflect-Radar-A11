import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="container mx-auto flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-extrabold font-playfair">Login in</h1>
                <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
            </div>
            <form noValidate="" action="" className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button  className="w-full px-8 py-3 font-semibold rounded-md bg-[#CB2903] text-white hover:bg-[#431A20] duration-500">Sign in</button>
                    </div>
                    <p className="px-6 text-sm text-center dark:text-gray-600">Don&apos;t have an account yet? 
                        <Link to='/register' rel="noopener noreferrer" href="#" className="hover:underline hover:text-blue-500 duration-300"> Sign up</Link>.
                    </p>
                </div>
            </form>
        </div>
    ); 
};

export default Login;