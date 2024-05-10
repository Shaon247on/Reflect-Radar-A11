
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/Creative.jpg'
const NavBar = () => {
   
    const navButtons = <>
    <li><NavLink  to='/'>Home</NavLink></li>
    <li><NavLink to='/queries'>queries</NavLink></li>
    <li><NavLink to='/contactus'>Contact Us</NavLink></li>
    
    
    </>
    return (
        <div className="navbar bg-base-100 container mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navButtons}
                    </ul>
                </div>
                <Link><img src={logo} alt="" className='w-28 md:w-40 hover:scale-105 duration-300 ease-in-out'/></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navButtons}                    
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login'><button className="rounded-lg px-10 py-3 text-whitehome bg-[#CB2903] hover:bg-[#431A20] duration-500 border-none">Login</button></Link>
            </div>
        </div>
    );
};

export default NavBar;