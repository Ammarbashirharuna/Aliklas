import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-indigo-950 p-4 md:flex">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold font-sans">Aliklas</h1>
                <span onClick={() => setIsOpen(!isOpen)} className="text-white md:hidden ml-auto">
                    {/* Hamburger Icon */}
                    <svg
                        className="w-4 h-9"
                        fill="none"
                        stroke="currentColor"
                        viewBox="5 5 20 30"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 6h16M4 12h16m-9 5h9" />
                        )}
                    </svg>
                </span>
            </div>
            <div className={`flex-col md:flex-row md:flex md:items-center justify-end mb-(-10) ${isOpen ? 'flex' : 'hidden'} md:block`}>
                <NavLink to="/" className="hover:underline text-gray-100 p-2">Home</NavLink>
                <NavLink to="/about" className="text-gray-100 hover:underline p-2">About</NavLink>
                <NavLink to="/product" className="text-gray-100 hover:underline p-2">Product</NavLink>
                <NavLink to="/contact" className="text-gray-100 hover:underline p-2">Contact</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
