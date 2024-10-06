import { useEffect, useState } from 'react';
import { logo } from '../../constants/images';
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLink } from './navLinks';
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import "../../index.css";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    const location = useLocation();

    const handleScroll = () => {
        if(window.scrollY >= 10) {
            setIsScroll(true)
        }else {
            setIsScroll(false)
        }
    };

    useEffect(()=> {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <>
            <div className={`lg:px-28 md:px-10 px-3 flex items-center justify-between lg:py-7 md:py-5 py-3 fixed top-0 left-0 z-10 w-full ${isScroll && "shadow-md"} ${location.pathname === "/supplement" ? "bg-whiteSmoke" : "bg-slate-50"}` }>
                <div>
                    <Link to="/"><img src={logo} alt="logo" className="lg:w-[85px] md:w-[100px] w-[70px]" /></Link>
                </div>

                <ul className="lg:flex hidden items-center gap-10 font-[600] text-[18px]">
                    {navLink.map((link, index) => (
                        <li key={index} className="hover:text-slate-500">
                            <NavLink to={link.path} activeclassname="active">{link.title}</NavLink>
                        </li>
                    ))}
                </ul>

                <div className="lg:hidden block">
                    <FaBarsStaggered onClick={() => setIsOpen(true)} />
                </div>
            </div>

            {/* for small devices */}
            <div className={`fixed top-0 right-0 h-screen z-50 py-7 lg:px-10 md:px-10 px-3 transition-transform duration-300 ease-in-out bg-gray-100 ${isOpen ? 'translate-x-0 w-full' : 'translate-x-full w-0'}`}>
                <div className="flex items-center justify-between">
                    <div>
                        <Link to="/" ><img src={logo} alt="logo" className="md:w-[85px] w-[70px]" /></Link>
                    </div>
                    <div className="block">
                        <IoIosClose className='text-[30px]' onClick={() => setIsOpen(false)} />
                    </div>
                </div>

                <ul className="absolute flex flex-col pt-10 gap-10 text-[20px] font-[600]">
                    {navLink.map((link, index) => (
                        <li key={index} onClick={() => setIsOpen(false)}>
                            <NavLink to={link.path} activeclassname="active">{link.title}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Header;