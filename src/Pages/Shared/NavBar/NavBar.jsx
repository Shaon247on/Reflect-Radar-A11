
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/Creative.jpg'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import auth from '../../../firebase/firebase.config';
const NavBar = () => {
    const [theme, setTheme] = useState('light')
    
    useEffect(()=>{
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    },[theme])
    const { logOut, user } = useContext(AuthContext)

    const navButtons = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/queries'>All Queries</NavLink></li>
        {user ? <>
            <li><NavLink to='/myrecommendations'>My Recommendations</NavLink></li>
            <li><NavLink to='/myquery'>My Query</NavLink></li>
            <li><NavLink to='/forrecommendation'>Recommendations For Me</NavLink></li>
        </> : ''}
        <li><NavLink to='/contactus'>Contact Us</NavLink></li>
        <li><NavLink to='/aboutus'>About Us</NavLink></li>
    </>


    const handleLogOut = () => {
        logOut(auth)
            .then(result => {
                const user = result.user
                console(user)
            })
            .catch(error => console.error(error))
    }
    const handleToggle =(e)=>{
        console.log(e.target.value);
        if(e.target.checked){
            setTheme('coffee')
        }else{
            setTheme('light')
        }
    }
    console.log(theme);

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
                <Link><img src={logo} alt="" className='w-28 md:w-40 hover:scale-105 duration-300 ease-in-out' /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <label className="cursor-pointer grid place-items-center">
                    <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
                <ul className="menu menu-horizontal px-1">
                    {navButtons}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className='flex gap-4 items-center'>
                            <div className="avatar">
                                <div className="w-12 rounded-full">
                                    <img referrerPolicy='no-referrer' title={user.displayName} src={user.photoURL} className='object-cover object-center' />
                                </div>
                            </div>
                            <Link to='/login'><button onClick={handleLogOut} className="rounded-lg px-4 md:px-10 py-2 md:py-3 text-white bg-[#CB2903] hover:bg-[#431A20] duration-500 border-none">Sign Out</button></Link>
                        </div> :
                        <Link to='/login'><button className="rounded-lg px-4 md:px-10 py-2 md:py-3 text-white bg-[#CB2903] hover:bg-[#431A20] duration-500 border-none">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default NavBar;