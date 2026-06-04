import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    });
    return () => {
      window.removeEventListener('resize', () => { });
    };
  }, []);
  return (
    <nav className="p-4 relative bg-white">
      <div className="container mx-auto xl:px-20 2xl:px-24 flex items-center">
        <div className="size-12 rounded-md bg-orange-400 md:mr-8 p-2 flex items-center justify-center flex-col">
          <span className="block w-1/2 h-2 bg-white skew-x-320"></span>
          <span className="block w-1/2 h-2 bg-white -skew-x-320"></span>
          <span className="block w-1/2 h-2 bg-white skew-x-320"></span>
        </div>
        <ul className={`absolute md:relative top-24 md:top-0 bg-white shadow-sm md:shadow-none w-11/12 md:w-max left-1/2 md:left-0 translate-x-[-50%] md:translate-x-0 flex flex-col md:flex-row gap-2 p-4 md:p-0 rounded-md md:rounded-none
          ${isMenuOpen ? '' : 'hidden'}`}>
          <li>
            <a href="" className='block w-full text-gray-800 bg-gray-100 hover:bg-gray-100 py-2 px-4 rounded-md'>Home</a>
          </li>
          <li>
            <a href="" className='block w-full text-gray-800 hover:bg-gray-100 py-2 px-4 rounded-md'>Courses</a>
          </li>
          <li>
            <a href="" className='block w-full text-gray-800 hover:bg-gray-100 py-2 px-4 rounded-md'>About us</a>
          </li>
          <li>
            <a href="" className='block w-full text-gray-800 hover:bg-gray-100 py-2 px-4 rounded-md'>Pricing</a>
          </li>
          <li>
            <a href="" className='block w-full text-gray-800 hover:bg-gray-100 py-2 px-4 rounded-md'>Contact</a>
          </li>
        </ul>
        <div className="ml-auto">
          <a href="" className='text-gray-800 px-4 py-2 rounded-md'>Login</a>
          <a href="" className='ml-4 bg-orange-400 text-white px-4 py-2 rounded-md'>Sign Up</a>
        </div>
        <button className="ml-4 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img src="/imgs/toggle.png" alt="" />
        </button>
        {/* <div className='flex justify-between items-center'>

          <div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn bg-transparent shadow-none border-0 text-gray-300">
              USD <FaAngleDown />
            </div>
            <ul tabIndex={-1} className="dropdown-content menu bg-gray-900 rounded-box z-1 w-32  p-2 shadow-sm top-12 text-gray-300">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn bg-transparent shadow-none border-0 text-gray-300">
              English <FaAngleDown />
            </div>
            <ul tabIndex={-1} className="dropdown-content menu bg-gray-900 rounded-box z-1 w-32  p-2 shadow-sm top-12 text-gray-300">
              <li><a>Arabic</a></li>
              <li><a>Spanish</a></li>
            </ul>
          </div>
        </div>

        </div> */}
      </div>

    </nav>
  )
}

export default Navbar