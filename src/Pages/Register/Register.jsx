import { Link } from "react-router-dom";
import back from '../../assets/Stacked_Wave.jpg';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext)
    console.log(createUser)

    const handleSubmit= (e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        console.log(name, email, photo, password)
        createUser(email, password)
        .then(result =>{
            const user = result.user
            console.log(user)
        })
        .catch(error=> console.error(error))

    }

    return (
        <div className="flex flex-col relative items-center">

            <img src={back} alt="" className="absolute z-0 h-[900px] w-full object-cover md:object-fill" />

            <div className="absolute z-10 top-40 w-[400px]">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-5xl font-extrabold font-playfair text-white">Sign Up</h1>
                    <p className="text-sm text-white">Sign in to access your account</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm text-white">Your Name</label>
                            <input type="text" name="name" placeholder="your email" className="w-full px-3 py-2 border-b-[#431A20] border-b placeholder-[#431A20] focus:placeholder-transparent focus:border-b-[#431A20] duration-150 focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                        </div>                        
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm text-white">Email address</label>
                            <input type="email" name="email"  placeholder="your name" className="w-full px-3 py-2 border-b-[#431A20] border-b placeholder-[#431A20] focus:placeholder-transparent focus:border-b-[#431A20] duration-150 focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                        </div>                        
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm text-white">Photo URL</label>
                            </div>
                            <input type="text" name="photo"  placeholder="photo url" className="w-full px-3 py-2 placeholder-[#431A20] focus:placeholder-transparent border-b-[#431A20] border-b focus:border-b-[#431A20] duration-150  focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm text-white">Password</label>
                            </div>
                            <input type="password" name="password"  placeholder="password" className="w-full px-3 py-2 placeholder-[#431A20] focus:placeholder-transparent border-b-[#431A20] border-b focus:border-b-[#431A20] duration-150  focus:border-b-4 hover:border-b-[#431A20] hover:border-b-4 outline-none bg-transparent" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <input type="submit" value='Register' className="w-full px-8 py-3 font-semibold rounded-md bg-[#CB2903] text-white hover:bg-[#431A20] duration-500"/>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-600">Already have an account?
                            <Link to='/login' rel="noopener noreferrer" href="#" className="hover:underline hover:text-[#431A20] duration-300 underline"> Login</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;