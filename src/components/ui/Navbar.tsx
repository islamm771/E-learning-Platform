import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

const navLinks = [
  {
    to: "/",
    title: "Home"
  },
  {
    to: "/courses",
    title: "Courses"
  },
  {
    to: "/about-us",
    title: "About us"
  },
  {
    to: "/pricings",
    title: "Pricing"
  },
  {
    to: "/contact",
    title: "Contact"
  },
]


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(() => {
    return typeof window !== 'undefined' ? window.innerWidth >= 768 : false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMenuOpen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <nav className="sticky top-0 bg-white z-10">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-4 flex items-center">
        <Link to={"/"} className="size-12 rounded-md bg-orange-400 md:mr-8 p-2 flex items-center justify-center flex-col">
          <span className="block w-1/2 h-2 bg-white skew-x-320"></span>
          <span className="block w-1/2 h-2 bg-white -skew-x-320"></span>
          <span className="block w-1/2 h-2 bg-white skew-x-320"></span>
        </Link>
        <ul className={`absolute lg:relative top-24 lg:top-0 bg-white shadow-sm lg:shadow-none w-11/12 lg:w-max left-1/2 lg:left-0 translate-x-[-50%] lg:translate-x-0 flex flex-col lg:flex-row gap-2 p-4 lg:p-0 rounded-md lg:rounded-none z-10
          ${isMenuOpen ? '' : 'hidden'}`}>
          {navLinks.map((navLink, idx) => (
            <li key={idx}>
              <NavLink
                to={navLink.to}
                className={({ isActive }) => `block w-full text-gray-800 py-2 px-4 rounded-md hover:bg-gray-100 ${isActive ? "bg-gray-100" : ""}`}>
                {navLink.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="ml-auto">
          <Link to="/login" className='text-gray-800 px-4 py-2 rounded-md'>Login</Link>
          <Link to="/sign-up" className='ml-4 bg-orange-400 text-white px-4 py-2 rounded-md'>Sign Up</Link>
        </div>
        <button className="ml-4 lg:hidden cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img src="/imgs/toggle.png" alt="" />
        </button>
      </div>

    </nav>
  )
}

export default Navbar